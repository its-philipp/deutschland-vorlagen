import { useMemo, useState } from 'preact/hooks';
import type { GeneratorConfig, GeneratorField } from '../lib/generator-config';
import { renderTemplate } from '../lib/generator-config';

interface Props {
  config: GeneratorConfig;
}

/**
 * The ONE shared generator island. Every letter page renders this component
 * with its config — never a per-letter fork (project CLAUDE.md).
 */

const SENDER_FIELDS: GeneratorField[] = [
  { id: 'absenderName', label: 'Ihr Name', type: 'text', required: true, example: 'Max Mustermann' },
  { id: 'absenderStrasse', label: 'Ihre Straße und Hausnummer', type: 'text', required: true, example: 'Musterstraße 1' },
  { id: 'absenderOrt', label: 'Ihre PLZ und Ihr Ort', type: 'text', required: true, example: '10115 Berlin' },
];

const RECIPIENT_FIELDS: GeneratorField[] = [
  { id: 'empfaengerName', label: 'Name des Empfängers', type: 'text', required: true, example: 'Beispiel GmbH' },
  { id: 'empfaengerStrasse', label: 'Straße und Hausnummer des Empfängers', type: 'text', required: true, example: 'Firmenweg 2' },
  { id: 'empfaengerOrt', label: 'PLZ und Ort des Empfängers', type: 'text', required: true, example: '80331 München' },
];

const DATE_FIELD: GeneratorField = {
  id: 'ortDatum',
  label: 'Ort und Datum',
  type: 'text',
  required: true,
  example: 'Berlin, 12.07.2026',
  hint: 'Erscheint rechtsbündig über dem Betreff.',
};

function todayGerman(): string {
  return new Date().toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/** Native date inputs yield ISO (YYYY-MM-DD); letters need TT.MM.JJJJ. */
function formatGermanDate(value: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  return m ? `${m[3]}.${m[2]}.${m[1]}` : value;
}

function FieldInput({
  field,
  value,
  onInput,
}: {
  field: GeneratorField;
  value: string;
  onInput: (id: string, value: string) => void;
}) {
  const inputClass =
    'w-full rounded-sheet border border-rule bg-[#FBFCFB] px-3 py-2 text-sm focus:border-stamp focus:outline-none';
  const handle = (e: Event) =>
    onInput(field.id, (e.currentTarget as HTMLInputElement).value);

  return (
    <label class="block">
      <span class="mb-1 block text-[0.8rem] font-semibold text-ink">
        {field.label}
        {field.required && <span class="text-stamp"> *</span>}
      </span>
      {field.type === 'textarea' ? (
        <textarea
          class={`${inputClass} min-h-24`}
          value={value}
          placeholder={field.example}
          onInput={handle}
        />
      ) : field.type === 'select' ? (
        <select class={inputClass} value={value} onInput={handle}>
          <option value="">Bitte wählen …</option>
          {(field.options ?? []).map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text'}
          class={inputClass}
          value={value}
          placeholder={field.example}
          onInput={handle}
        />
      )}
      {field.hint && <span class="mt-1 block text-xs text-ink-mute">{field.hint}</span>}
    </label>
  );
}

export default function Generator({ config }: Props) {
  const [values, setValues] = useState<Record<string, string>>(() => ({
    ortDatum: todayGerman(),
  }));
  const [copied, setCopied] = useState(false);

  const setValue = (id: string, value: string) =>
    setValues((prev) => ({ ...prev, [id]: value }));

  // Values as they appear in the letter: date inputs are ISO, letters German.
  const templateValues = useMemo(() => {
    const out: Record<string, string> = { ...values };
    for (const f of config.fields) {
      if (f.type === 'date' && out[f.id]) {
        out[f.id] = formatGermanDate(out[f.id]);
      }
    }
    return out;
  }, [config.fields, values]);

  // Empty optional fields drop their paragraph instead of leaving a gap.
  const optionalEmptyIds = useMemo(
    () =>
      new Set(
        config.fields
          .filter((f) => !f.required && !values[f.id]?.trim())
          .map((f) => f.id),
      ),
    [config.fields, values],
  );

  const subject = useMemo(
    () => renderTemplate(config.subjectTemplate, templateValues, optionalEmptyIds),
    [config.subjectTemplate, templateValues, optionalEmptyIds],
  );
  const body = useMemo(
    () => renderTemplate(config.bodyTemplate, templateValues, optionalEmptyIds),
    [config.bodyTemplate, templateValues, optionalEmptyIds],
  );

  const senderLine = ['absenderName', 'absenderStrasse', 'absenderOrt']
    .map((id) => values[id]?.trim() || '…')
    .join(' · ');

  const plainText = [
    ...SENDER_FIELDS.map((f) => values[f.id]?.trim() ?? ''),
    '',
    ...RECIPIENT_FIELDS.map((f) => values[f.id]?.trim() ?? ''),
    '',
    values.ortDatum ?? '',
    '',
    subject,
    '',
    body,
  ].join('\n');

  const copy = async () => {
    await navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div class="grid gap-6 lg:grid-cols-2">
      <form
        class="card-sheet space-y-6 p-5 sm:p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <p class="font-display text-base font-semibold">Ihre Angaben</p>

        <p class="flex items-start gap-2 border-l-[3px] border-stamp/70 bg-stamp-tint/60 px-3 py-2 text-sm text-ink-soft">
          <svg class="mt-0.5 h-4 w-4 shrink-0 text-stamp" aria-hidden="true">
            <use href="#i-shield"></use>
          </svg>
          <span>
            Ihre Eingaben bleiben in Ihrem Browser. Es werden keine Daten an
            einen Server übertragen.
          </span>
        </p>

        <fieldset class="space-y-3">
          <legend class="mb-1 text-[0.7rem] font-semibold tracking-[0.08em] text-ink-mute uppercase">
            Absender
          </legend>
          {SENDER_FIELDS.map((f) => (
            <FieldInput key={f.id} field={f} value={values[f.id] ?? ''} onInput={setValue} />
          ))}
        </fieldset>

        <fieldset class="space-y-3">
          <legend class="mb-1 text-[0.7rem] font-semibold tracking-[0.08em] text-ink-mute uppercase">
            Empfänger
          </legend>
          {RECIPIENT_FIELDS.map((f) => (
            <FieldInput key={f.id} field={f} value={values[f.id] ?? ''} onInput={setValue} />
          ))}
        </fieldset>

        <fieldset class="space-y-3">
          <legend class="mb-1 text-[0.7rem] font-semibold tracking-[0.08em] text-ink-mute uppercase">
            Angaben zum Schreiben
          </legend>
          <FieldInput field={DATE_FIELD} value={values.ortDatum ?? ''} onInput={setValue} />
          {config.fields.map((f) => (
            <FieldInput key={f.id} field={f} value={values[f.id] ?? ''} onInput={setValue} />
          ))}
        </fieldset>

        <div class="flex flex-wrap gap-3">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-sheet bg-stamp px-4 py-2.5 text-sm font-semibold text-paper hover:bg-stamp-deep"
            onClick={() => window.print()}
          >
            <svg class="h-4 w-4" aria-hidden="true">
              <use href="#i-print"></use>
            </svg>
            Drucken / als PDF speichern
          </button>
          <button
            type="button"
            class="rounded-sheet border border-rule bg-paper px-4 py-2.5 text-sm font-semibold text-ink hover:bg-folder"
            onClick={copy}
          >
            {copied ? '✓ Kopiert' : 'Text kopieren'}
          </button>
        </div>
      </form>

      <div>
        <p class="mb-2 text-[0.7rem] font-semibold tracking-[0.08em] text-ink-mute uppercase">
          Vorschau
        </p>
        <div
          id="print-letter"
          class="rounded-sheet bg-paper p-8 font-letter text-[15px] leading-relaxed shadow-sheet"
        >
          <p class="text-xs text-ink-soft underline decoration-rule underline-offset-4">
            {senderLine}
          </p>
          <div class="mt-8">
            {RECIPIENT_FIELDS.map((f) => (
              <p key={f.id}>{values[f.id]?.trim() || '…'}</p>
            ))}
          </div>
          <p class="mt-8 text-right">{values.ortDatum?.trim() || '…'}</p>
          <p class="mt-8 font-bold">{subject}</p>
          <div class="mt-6 whitespace-pre-wrap">{body}</div>
        </div>
      </div>
    </div>
  );
}
