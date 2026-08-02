/**
 * Generator config schema — the contract between content (one config object
 * per letter) and the single shared Generator island that renders every
 * letter page. Never fork the generator component per letter; extend this
 * schema instead.
 */

/** Input types the generator form can render. */
export type FieldType =
  | 'text'
  | 'textarea'
  | 'date'
  | 'select'
  | 'number';

export interface SelectOption {
  value: string;
  label: string;
}

export interface GeneratorField {
  /** Placeholder name used in the letter template as {{id}}. Must not
   *  collide with the built-in sender/recipient field ids (see
   *  BUILT_IN_FIELD_IDS below). */
  id: string;
  /** Visible form label, German, "Sie" form. */
  label: string;
  type: FieldType;
  required: boolean;
  /** Short helper text under the input. */
  hint?: string;
  /** Input placeholder / example value. */
  example?: string;
  /** Only for type 'select'. */
  options?: SelectOption[];
}

export interface LegalRef {
  /** e.g. "§ 536 BGB" — must be VERIFIED against the law text, never guessed. */
  ref: string;
  /** Link to the official/canonical source, e.g. gesetze-im-internet.de. */
  url: string;
  /** One-line plain-German summary of what the norm says. */
  note?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface GeneratorConfig {
  /** URL slug within the category: /[category]/[slug]/ */
  slug: string;
  /** Category slug, e.g. "mietrecht", "vertraege". Also the category hub URL. */
  category: string;
  /** Visible category name, e.g. "Mietrecht". */
  categoryLabel: string;
  /** H1 — targets exactly one long-tail keyword. */
  h1: string;
  /** <title> — format: "«Thema»: Kostenloses Muster 2026 (Generator)". */
  metaTitle: string;
  /** Meta description, ~150 chars, German. */
  metaDescription: string;
  /** 1–2 sentence intro under the H1. */
  intro: string;
  /** Letter-specific form fields (sender/recipient/date are built-in). */
  fields: GeneratorField[];
  /** Subject line template, may contain {{fieldId}} placeholders. */
  subjectTemplate: string;
  /**
   * Letter body template. Placeholders: {{fieldId}} for any field id in
   * `fields` or a built-in id. Paragraphs separated by blank lines.
   * Salutation and closing ("Sehr geehrte…", "Mit freundlichen Grüßen") are
   * part of the template, not generated.
   */
  bodyTemplate: string;
  /** Verified legal references shown in the explainer section. */
  legalBasis: LegalRef[];
  /** Explainer sections rendered on the landing page below the generator. */
  explainer: {
    /** "Wann brauche ich dieses Schreiben?" */
    when: string;
    /** "Welche Frist gilt?" — omit if none applies. */
    deadline?: string;
    /** "Was ist die Rechtsgrundlage?" — prose; refs listed via legalBasis. */
    legal: string;
  };
  faq: FaqItem[];
  /** ISO date of last content review, shown on page ("Stand: …"). */
  lastReviewed: string;
}

/**
 * Field ids the Generator island always renders (standard letter frame,
 * DIN-5008-style). Templates may reference them like any other placeholder.
 */
export const BUILT_IN_FIELD_IDS = [
  'absenderName',
  'absenderStrasse',
  'absenderOrt', // "PLZ Ort"
  'empfaengerName',
  'empfaengerStrasse',
  'empfaengerOrt',
  'ortDatum', // "Ort, den TT.MM.JJJJ" line — prefilled with today
] as const;

export type BuiltInFieldId = (typeof BUILT_IN_FIELD_IDS)[number];

/**
 * Render a template by substituting {{id}} placeholders from `values`.
 * Missing/empty values render as a visible gap marker so the preview makes
 * clear what still needs to be filled in. Substitution only — no
 * conditionals; if a letter needs optional paragraphs, extend the schema
 * deliberately rather than ad-hoc template logic.
 *
 * The one deliberate extension: a paragraph whose placeholders ALL refer to
 * optional fields that are empty (`optionalEmptyIds`) is dropped entirely,
 * so optional fields (required: false) don't leave gap markers in the
 * finished letter.
 */
export function renderTemplate(
  template: string,
  values: Record<string, string>,
  optionalEmptyIds?: ReadonlySet<string>,
): string {
  const paragraphs = template.split('\n\n').filter((p) => {
    if (!optionalEmptyIds || optionalEmptyIds.size === 0) return true;
    const ids = [...p.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]);
    return ids.length === 0 || !ids.every((id) => optionalEmptyIds.has(id));
  });
  return paragraphs.join('\n\n').replace(/\{\{(\w+)\}\}/g, (_, id: string) => {
    const v = values[id]?.trim();
    return v ? v : '____________';
  });
}
