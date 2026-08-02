import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01: § 31 BDSG read on gesetze-im-internet.de
 * (heading "Schutz des Wirtschaftsverkehrs bei Scoring und
 * Bonitätsauskünften"); DSGVO articles cited against the consolidated German
 * text on EUR-Lex (CELEX 32016R0679).
 *
 * DELIBERATE FRAMING (RDG): a correct, still-justified entry is NOT deletable
 * on demand, and promising otherwise would mislead. The letter therefore
 * distinguishes three grounded cases — wrong data (Art. 16), settled claim
 * whose retention period has run (Art. 17), and disputed claim — instead of
 * asserting a blanket "Löschungsanspruch". The copy says this plainly.
 */
const config: GeneratorConfig = {
  slug: 'schufa-eintrag-loeschung',
  category: 'vertraege',
  categoryLabel: 'Verträge',
  h1: 'Schufa-Eintrag löschen lassen: Muster zum Ausfüllen',
  metaTitle: 'Schufa-Eintrag löschen: Muster 2026 (Generator)',
  metaDescription:
    'Falschen Eintrag bei einer Auskunftei berichtigen oder löschen lassen: Schreiben nach Art. 16, 17 DSGVO online ausfüllen – kostenlos.',
  intro:
    'Mit diesem Generator verlangen Sie von einer Auskunftei die Berichtigung oder Löschung eines Eintrags über Sie – etwa weil er falsch ist oder die Forderung längst erledigt wurde.',
  fields: [
    {
      id: 'eintrag',
      label: 'Um welchen Eintrag geht es?',
      type: 'textarea',
      required: true,
      hint: 'Bezeichnen Sie den Eintrag so genau wie möglich – mit Gläubiger, Betrag und Datum aus Ihrer Selbstauskunft.',
      example:
        'Eintrag der Beispiel Inkasso GmbH über eine Forderung in Höhe von 249,90 Euro, eingemeldet am 14.03.2025',
    },
    {
      id: 'grund',
      label: 'Warum soll der Eintrag entfernt werden?',
      type: 'select',
      required: true,
      hint: 'Wählen Sie den zutreffenden Fall – davon hängt ab, worauf sich Ihr Verlangen stützt.',
      options: [
        // NOTE: these values are substituted into a "weil {{grund}}" clause —
        // the first clause of each option MUST be verb-final. Everything after
        // the first full stop is a fresh main clause and reads normally again.
        {
          value:
            'er unrichtig ist. Die zugrunde liegenden Angaben treffen nicht zu. Ich verlange daher die Berichtigung nach Art. 16 DSGVO sowie die Löschung der unrichtigen Daten nach Art. 17 Abs. 1 DSGVO',
          label: 'Die Angaben sind falsch',
        },
        {
          value:
            'die zugrunde liegende Forderung vollständig erledigt und die für die Speicherung maßgebliche Frist abgelaufen ist. Für eine weitere Speicherung besteht daher kein zulässiger Zweck mehr; ich verlange die Löschung nach Art. 17 Abs. 1 DSGVO',
          label: 'Forderung erledigt, Speicherfrist abgelaufen',
        },
        {
          value:
            'ich die zugrunde liegende Forderung bestritten habe und sie weder tituliert noch von mir anerkannt worden ist. Ich verlange daher die Löschung des Eintrags nach Art. 17 Abs. 1 DSGVO',
          label: 'Forderung bestritten, nicht tituliert',
        },
      ],
    },
    {
      id: 'nachweis',
      label: 'Beigefügter Nachweis (freiwillig)',
      type: 'text',
      required: false,
      hint: 'Optional, aber sehr hilfreich: z. B. Zahlungsbeleg, Erledigungsbestätigung oder Ihr Widerspruchsschreiben an den Gläubiger.',
      example: 'Erledigungsbestätigung der Beispiel Inkasso GmbH vom 02.05.2026',
    },
  ],
  subjectTemplate:
    'Berichtigung und Löschung eines Eintrags nach Art. 16, 17 DSGVO',
  bodyTemplate: `Sehr geehrte Damen und Herren,

zu meiner Person ist bei Ihnen folgender Eintrag gespeichert:

{{eintrag}}

Ich beanstande diesen Eintrag, weil {{grund}}.

Als Nachweis füge ich diesem Schreiben bei: {{nachweis}}

Ich fordere Sie auf, den Eintrag zu entfernen beziehungsweise zu berichtigen und mir die Umsetzung schriftlich zu bestätigen. Bitte teilen Sie mir zugleich mit, an welche Empfänger Sie die beanstandeten Daten übermittelt haben; nach Art. 19 DSGVO sind diese Empfänger über die Berichtigung oder Löschung zu unterrichten.

Für den Fall, dass Sie den Eintrag nicht entfernen, verlange ich nach Art. 18 DSGVO die Einschränkung der Verarbeitung für die Dauer der Prüfung und bitte um eine nachvollziehbare Begründung, auf welche Rechtsgrundlage Sie die weitere Speicherung stützen.

Nach Art. 12 Abs. 3 DSGVO ist mir unverzüglich, spätestens innerhalb eines Monats nach Eingang dieses Schreibens, mitzuteilen, wie Sie mit meinem Verlangen verfahren sind.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: 'Art. 16 DSGVO',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679',
      note: 'Betroffene Personen haben das Recht, unverzüglich die Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen; unvollständige Daten sind zu vervollständigen.',
    },
    {
      ref: 'Art. 17 DSGVO',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679',
      note: 'Betroffene Personen können die unverzügliche Löschung verlangen, wenn die Daten für die Zwecke, für die sie erhoben wurden, nicht mehr notwendig sind oder unrechtmäßig verarbeitet wurden. Der Anspruch besteht nicht, wenn die Verarbeitung weiterhin auf einer tragfähigen Rechtsgrundlage beruht.',
    },
    {
      ref: '§ 31 BDSG',
      url: 'https://www.gesetze-im-internet.de/bdsg_2018/__31.html',
      note: 'Schutz des Wirtschaftsverkehrs bei Scoring und Bonitätsauskünften: Die Verwendung eines Wahrscheinlichkeitswerts über künftiges Verhalten ist nur unter engen Voraussetzungen zulässig – unter anderem müssen die Vorschriften des Datenschutzrechts eingehalten worden und die genutzten Daten für die Berechnung nachweisbar erheblich sein; Anschriftendaten dürfen nicht allein herangezogen werden.',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn eine Auskunftei einen Eintrag über Sie führt, der nicht zutrifft, dessen Forderung längst erledigt ist oder den Sie bestritten haben. Fordern Sie vorher Ihre kostenlose Datenkopie nach Art. 15 DSGVO an – ohne den genauen Wortlaut des Eintrags lässt sich nicht zielgerichtet widersprechen.',
    deadline:
      'Für Ihr Verlangen gibt es keine Frist. Die Auskunftei muss Ihnen aber unverzüglich, spätestens innerhalb eines Monats nach Eingang, mitteilen, wie sie damit verfahren ist (Art. 12 Abs. 3 DSGVO); bei komplexen Fällen kann sich diese Frist um zwei Monate verlängern. Erledigte Forderungen werden nach den Verhaltensregeln der Auskunfteien für eine bestimmte Zeit weitergespeichert – die konkrete Dauer hängt von der Art des Eintrags ab.',
    legal:
      'Ihre Rechte folgen aus der DSGVO: Unrichtige Daten sind zu berichtigen (Art. 16), nicht mehr erforderliche oder unrechtmäßig verarbeitete Daten zu löschen (Art. 17). Für die Dauer der Prüfung können Sie die Einschränkung der Verarbeitung verlangen (Art. 18), und über die Berichtigung oder Löschung sind Empfänger der Daten zu unterrichten (Art. 19). Für Scoring und Bonitätsauskünfte stellt § 31 BDSG zusätzliche Anforderungen auf. Wichtig und ehrlich gesagt: Ein inhaltlich zutreffender Eintrag, dessen Speicherfrist noch läuft, muss nicht gelöscht werden – ein Anspruch besteht nur in den oben genannten Konstellationen.',
  },
  faq: [
    {
      q: 'Kann ich jeden Schufa-Eintrag löschen lassen?',
      a: 'Nein. Ein zutreffender Eintrag, für den die Speicherfrist noch läuft, darf weiter gespeichert werden. Ein Anspruch besteht insbesondere, wenn die Angaben unrichtig sind (Art. 16 DSGVO), wenn die Daten für den Zweck nicht mehr erforderlich sind – etwa nach Ablauf der Speicherfrist bei erledigter Forderung – oder wenn die Verarbeitung unrechtmäßig war (Art. 17 DSGVO).',
    },
    {
      q: 'Wie erfahre ich, was überhaupt über mich gespeichert ist?',
      a: 'Über die Datenkopie nach Art. 15 DSGVO, die Ihnen einmal unentgeltlich zusteht. Fordern Sie sie an, bevor Sie einer Eintragung widersprechen – nur so kennen Sie Gläubiger, Betrag und Einmeldedatum genau genug, um den Eintrag eindeutig zu bezeichnen.',
    },
    {
      q: 'Was mache ich, wenn ich die Forderung bestreite?',
      a: 'Wenden Sie sich parallel an den Gläubiger und widersprechen Sie der Forderung dort schriftlich. Für die Auskunftei ist entscheidend, ob die Forderung tituliert oder von Ihnen anerkannt wurde – bei einer bestrittenen und nicht titulierten Forderung ist die Einmeldung regelmäßig angreifbar. Legen Sie Ihr Widerspruchsschreiben als Nachweis bei.',
    },
    {
      q: 'Was bringt die Einschränkung der Verarbeitung?',
      a: 'Nach Art. 18 DSGVO können Sie verlangen, dass die Daten während der Prüfung Ihrer Beanstandung nur noch eingeschränkt verarbeitet werden. Das verhindert, dass ein womöglich falscher Eintrag in der Zwischenzeit weiter an Banken oder Vermieter übermittelt wird.',
    },
    {
      q: 'Was tue ich, wenn die Auskunftei ablehnt?',
      a: 'Sie können sich kostenlos bei der zuständigen Datenschutzaufsichtsbehörde beschweren. Für einen Eintrag, der eine Kreditvergabe oder eine Wohnungssuche konkret behindert, kann darüber hinaus ein Vorgehen über eine Verbraucherzentrale oder anwaltliche Vertretung sinnvoll sein – dieses Musterschreiben deckt nur den außergerichtlichen ersten Schritt ab.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
