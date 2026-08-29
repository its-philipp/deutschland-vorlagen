import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
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

/**
 * Manual editing is deliberately plain text: no bold, no font sizes, no
 * colours. The product is a letter that is formatted correctly (DIN 5008) —
 * a formatting toolbar would let visitors break the one thing they came for,
 * and every such feature would have to survive the print CSS, the PDF export
 * and the copy button as well.
 *
 * `plaintext-only` is what keeps pasted rich text from carrying its markup in.
 * Setting an invalid value throws, hence the try/catch; Firefox only learned
 * the value in 136, so the fallback below strips formatting on paste instead.
 */
const PLAINTEXT_EDITING: boolean =
  typeof document !== 'undefined' &&
  (() => {
    try {
      const probe = document.createElement('div');
      probe.contentEditable = 'plaintext-only';
      return probe.contentEditable === 'plaintext-only';
    } catch {
      return false;
    }
  })();

/**
 * An uncontrolled editable region: the initial text is written into the DOM
 * once, on mount, and never again. Re-rendering children from state on every
 * keystroke would move the caret to the end of the text after each character —
 * so here the DOM is the source of truth while editing, and the parent only
 * mirrors it into state for print and copy. Remount (a changed `key`) is how
 * the text gets replaced.
 */
function EditableText({
  value,
  onInput,
  label,
  class: className,
}: {
  value: string;
  onInput: (value: string) => void;
  label: string;
  class?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.innerText = value;
    // Mount only — see the note above.
  }, []);

  const handlePaste = (e: ClipboardEvent) => {
    if (PLAINTEXT_EDITING) return;
    e.preventDefault();
    const text = e.clipboardData?.getData('text/plain') ?? '';
    // Deprecated, but still the only cross-browser way to insert text at the
    // caret while keeping the undo stack intact.
    document.execCommand('insertText', false, text);
  };

  return (
    <div
      ref={ref}
      role="textbox"
      aria-multiline="true"
      aria-label={label}
      contentEditable={(PLAINTEXT_EDITING ? 'plaintext-only' : true) as unknown as boolean}
      onInput={(e) => onInput((e.currentTarget as HTMLElement).innerText)}
      onPaste={handlePaste}
      class={`-mx-1 rounded-[2px] bg-stamp-tint/60 px-1 outline-none focus:bg-stamp-tint ${className ?? ''}`}
    />
  );
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

  // Manually edited text, if any. Two pieces of state on purpose: `edited`
  // holds the text and survives leaving edit mode, `editing` only says whether
  // the regions accept typing right now.
  const [edited, setEdited] = useState<{ subject: string; body: string } | null>(null);
  const [editing, setEditing] = useState(false);
  // What the form produced when editing began — lets us tell the visitor that
  // later form changes are no longer reaching the letter, instead of silently
  // ignoring them.
  const [baseline, setBaseline] = useState<{ subject: string; body: string } | null>(null);
  // Bumped on every entry into edit mode so the editable regions remount and
  // pick up the current text (they are uncontrolled once mounted).
  const [editSession, setEditSession] = useState(0);

  const shownSubject = edited ? edited.subject : subject;
  const shownBody = edited ? edited.body : body;
  const formIgnored =
    edited !== null &&
    baseline !== null &&
    (baseline.subject !== subject || baseline.body !== body);

  const startEditing = () => {
    setEditSession((n) => n + 1);
    setEditing(true);
  };

  // Opening the editor must not detach the letter from the form — only typing
  // does. So while nothing has been typed, a form change remounts the regions
  // with the freshly generated text. No caret is lost: there is nothing to
  // lose until the visitor types, and typing is exactly what stops this.
  useEffect(() => {
    if (editing && edited === null) setEditSession((n) => n + 1);
  }, [subject, body]);

  /** First keystroke: the text becomes the visitor's, not the form's. */
  const handleEdit = (part: 'subject' | 'body', value: string) =>
    setEdited((prev) => {
      if (prev === null) setBaseline({ subject, body });
      const base = prev ?? { subject, body };
      return { ...base, [part]: value };
    });

  const resetFromForm = () => {
    setEdited(null);
    setBaseline(null);
    setEditing(false);
  };

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
    shownSubject,
    '',
    shownBody,
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
            Ihre Eingaben bleiben in Ihrem Browser: Der Brief entsteht auf
            Ihrem Gerät, und weder die Formularfelder noch der fertige Text
            werden an einen Server übertragen. Was die Seite selbst lädt, steht
            in der{' '}
            <a href="/datenschutz/" class="underline underline-offset-2">
              Datenschutzerklärung
            </a>
            .
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
        <div class="mb-2 flex flex-wrap items-center justify-between gap-2">
          <p class="text-[0.7rem] font-semibold tracking-[0.08em] text-ink-mute uppercase">
            Vorschau
          </p>
          <div class="flex flex-wrap items-center gap-2">
            {edited !== null && (
              <button
                type="button"
                class="text-xs font-semibold text-stamp underline underline-offset-2 hover:text-stamp-deep"
                onClick={resetFromForm}
              >
                Aus Formular neu erzeugen
              </button>
            )}
            <button
              type="button"
              class="inline-flex items-center gap-1.5 rounded-sheet border border-rule bg-paper px-3 py-1.5 text-xs font-semibold text-ink hover:bg-folder"
              aria-pressed={editing}
              onClick={() => (editing ? setEditing(false) : startEditing())}
            >
              <svg class="h-3.5 w-3.5" aria-hidden="true">
                <use href={editing ? '#i-check' : '#i-doc'}></use>
              </svg>
              {editing ? 'Bearbeiten beenden' : 'Text bearbeiten'}
            </button>
          </div>
        </div>

        {(editing || edited !== null) && (
          <p class="mb-2 border-l-[3px] border-stamp/70 bg-stamp-tint/60 px-3 py-2 text-xs text-ink-soft">
            {formIgnored
              ? 'Betreff und Brieftext haben Sie von Hand geändert — Ihre neuen Eingaben in den unteren Feldern wirken sich deshalb nicht mehr darauf aus. Absender, Empfänger und Datum werden weiterhin übernommen. „Aus Formular neu erzeugen“ verwirft die Bearbeitung.'
              : edited !== null
                ? 'Betreff und Brieftext stammen jetzt von Ihnen; das Formular erzeugt diese beiden Teile nicht mehr neu. Absender, Empfänger und Datum bleiben damit verbunden.'
                : 'Betreff und Brieftext können Sie frei bearbeiten. Sobald Sie etwas ändern, erzeugt das Formular diese beiden Teile nicht mehr neu.'}
          </p>
        )}

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
          {editing ? (
            <>
              <EditableText
                key={`subject-${editSession}`}
                value={shownSubject}
                onInput={(v) => handleEdit('subject', v)}
                label="Betreff bearbeiten"
                class="mt-8 font-bold"
              />
              <EditableText
                key={`body-${editSession}`}
                value={shownBody}
                onInput={(v) => handleEdit('body', v)}
                label="Brieftext bearbeiten"
                class="mt-6 whitespace-pre-wrap"
              />
            </>
          ) : (
            <>
              <p class="mt-8 font-bold">{shownSubject}</p>
              <div class="mt-6 whitespace-pre-wrap">{shownBody}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
