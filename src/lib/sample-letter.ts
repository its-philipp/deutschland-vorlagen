/**
 * A fully filled-in specimen of a letter, rendered on the server so the
 * finished document is visible on the page itself.
 *
 * Why this exists: the generator's preview only fills up as the visitor
 * types. Someone arriving on the page — a reader deciding whether this is
 * the right letter, a crawler, a reviewer, anyone without JavaScript — sees
 * an empty form and no product. The specimen shows the actual result, with
 * the same template and the same renderer the island uses, so the two can
 * never drift apart.
 *
 * The values come from the `example` each field already carries for its
 * input placeholder. Fields without one are treated as not filled in; for
 * optional fields that is exactly right (their paragraph drops out), and
 * required fields are checked by `npm run check:samples`.
 */
import { renderTemplate, type GeneratorConfig } from './generator-config';

/** Neutral sender/recipient, matching the island's built-in field examples. */
const FRAME = {
  absenderName: 'Max Mustermann',
  absenderStrasse: 'Musterstraße 1',
  absenderOrt: '10115 Berlin',
  empfaengerName: 'Beispiel GmbH',
  empfaengerStrasse: 'Firmenweg 2',
  empfaengerOrt: '80331 München',
  ortDatum: 'Berlin, 12.03.2026',
} as const;

export interface SampleLetter {
  sender: string[];
  recipient: string[];
  ortDatum: string;
  subject: string;
  body: string;
  /** Field ids left empty — their paragraphs are dropped from the body. */
  emptyOptionalIds: string[];
}

export function sampleLetter(config: GeneratorConfig): SampleLetter {
  const values: Record<string, string> = { ...FRAME };

  for (const f of config.fields) {
    if (f.type === 'select') {
      // The first option is the default reading of the letter; other
      // branches are reachable in the generator itself.
      const first = f.options?.[0];
      if (first) values[f.id] = first.value;
      continue;
    }
    if (f.example) values[f.id] = f.example;
  }

  const emptyOptionalIds = config.fields
    .filter((f) => !f.required && !values[f.id]?.trim())
    .map((f) => f.id);

  const optionalEmpty = new Set(emptyOptionalIds);

  return {
    sender: [FRAME.absenderName, FRAME.absenderStrasse, FRAME.absenderOrt],
    recipient: [
      FRAME.empfaengerName,
      FRAME.empfaengerStrasse,
      FRAME.empfaengerOrt,
    ],
    ortDatum: FRAME.ortDatum,
    subject: renderTemplate(config.subjectTemplate, values, optionalEmpty),
    body: renderTemplate(config.bodyTemplate, values, optionalEmpty),
    emptyOptionalIds,
  };
}
