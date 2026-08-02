import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de / dejure.org and
 * secondary confirmation (DLA Piper, Arbeitgeberverband Osthessen) on
 * 2026-07-12, notably the 1 May 2025 Textform reform (§ 16 Abs. 1, § 28
 * BEEG). The signed printed letter this generator produces satisfies
 * Schriftform, which covers both the old and the new (Textform) regime –
 * this is stated explicitly in the explainer so users don't need to know
 * which rule applies to their child's birth date.
 */
const config: GeneratorConfig = {
  slug: 'elternzeit-antrag',
  category: 'arbeit',
  categoryLabel: 'Arbeit & Beruf',
  h1: 'Elternzeit beantragen: Muster für den Antrag beim Arbeitgeber',
  metaTitle: 'Elternzeit-Antrag: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Elternzeit beim Arbeitgeber beantragen: Antrag online ausfüllen, drucken oder als PDF speichern – kostenlos, mit den Fristen nach § 16 BEEG.',
  intro:
    'Mit diesem Generator erstellen Sie Ihren Antrag auf Elternzeit an Ihren Arbeitgeber – als fertiges, unterschriftsreifes Schreiben nach § 16 BEEG, direkt im Browser.',
  fields: [
    {
      id: 'kindName',
      label: 'Name des Kindes',
      type: 'text',
      required: true,
      hint: 'Vor- und Nachname; bei noch nicht geborenen Kindern reicht z. B. "unser Kind".',
      example: 'Mia Musterfrau',
    },
    {
      id: 'geburtsdatumKind',
      label: 'Geburtsdatum oder errechneter Geburtstermin',
      type: 'text',
      required: true,
      hint: 'Tragen Sie das Geburtsdatum ein; ist das Kind noch nicht geboren, den errechneten Termin.',
      example: '12.09.2026',
    },
    {
      id: 'elternzeitVon',
      label: 'Elternzeit von',
      type: 'date',
      required: true,
      hint: 'Erster Tag der beantragten Elternzeit.',
      example: '01.11.2026',
    },
    {
      id: 'elternzeitBis',
      label: 'Elternzeit bis',
      type: 'date',
      required: true,
      hint: 'Letzter Tag des beantragten Zeitraums. Für weitere, spätere Zeitabschnitte stellen Sie einen zusätzlichen Antrag.',
      example: '31.10.2027',
    },
  ],
  subjectTemplate: 'Antrag auf Elternzeit für {{kindName}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit beantrage ich gemäß § 16 Abs. 1 BEEG Elternzeit für mein Kind {{kindName}}, geboren bzw. voraussichtlich geboren am {{geburtsdatumKind}}.

Ich nehme die Elternzeit für den Zeitraum vom {{elternzeitVon}} bis {{elternzeitBis}} in Anspruch. Zugleich erkläre ich gemäß § 16 Abs. 1 BEEG verbindlich, für welche Zeiten innerhalb von zwei Jahren ab Beginn der Elternzeit ich Elternzeit nehme: für den vorstehend genannten Zeitraum.

Ich bitte Sie um eine schriftliche Bestätigung dieses Antrags sowie um Mitteilung, falls von Ihrer Seite Rückfragen bestehen.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 16 Abs. 1 BEEG',
      url: 'https://www.gesetze-im-internet.de/beeg/__16.html',
      note: 'Elternzeit ist spätestens 7 Wochen vor Beginn (für Zeiten bis zum 3. Geburtstag) bzw. 13 Wochen vor Beginn (für Zeiten zwischen 3. und 8. Geburtstag) beim Arbeitgeber anzumelden; gleichzeitig ist verbindlich zu erklären, für welche Zeiten innerhalb von zwei Jahren Elternzeit genommen wird.',
    },
    {
      ref: '§ 28 BEEG',
      url: 'https://www.gesetze-im-internet.de/beeg/__28.html',
      note: 'Übergangsvorschrift: Für Kinder, die vor dem 1. Mai 2025 geboren oder in Adoptionspflege aufgenommen wurden, gilt weiterhin die Schriftform; für Kinder ab dem 1. Mai 2025 genügt Textform (§ 16 Abs. 1 Satz 2 BEEG n. F.).',
    },
  ],
  explainer: {
    when:
      'Diesen Antrag stellen Sie, wenn Sie als Arbeitnehmerin oder Arbeitnehmer Elternzeit für Ihr Kind in Anspruch nehmen möchten. Er richtet sich an Ihren Arbeitgeber und legt fest, für welchen Zeitraum Sie freigestellt werden möchten.',
    deadline:
      'Für Elternzeit bis zum 3. Geburtstag des Kindes gilt eine Anmeldefrist von 7 Wochen vor Beginn, für Elternzeit zwischen dem 3. und 8. Geburtstag eine Frist von 13 Wochen vor Beginn (§ 16 Abs. 1 BEEG). Reichen Sie den Antrag rechtzeitig vor diesen Fristen ein.',
    legal:
      'Seit dem 1. Mai 2025 genügt für den Elternzeit-Antrag grundsätzlich die Textform (z. B. E-Mail), allerdings nur für Kinder, die ab diesem Stichtag geboren oder in Adoptionspflege genommen wurden; für ältere Kinder gilt weiterhin die Schriftform mit eigenhändiger Unterschrift (§ 28 BEEG, Übergangsvorschrift). Ein unterschriebenes, ausgedrucktes Schreiben wie das dieses Generators erfüllt in jedem Fall die strengere Schriftform und ist damit für beide Fallgruppen ausreichend. Zusätzlich müssen Sie bei der Anmeldung verbindlich erklären, für welche Zeiten innerhalb von zwei Jahren ab Beginn der Elternzeit Sie Elternzeit nehmen (§ 16 Abs. 1 BEEG).',
  },
  faq: [
    {
      q: 'Wie lange vor Beginn muss ich Elternzeit beantragen?',
      a: 'Für Zeiten bis zum 3. Geburtstag des Kindes 7 Wochen vorher, für Zeiten zwischen dem 3. und 8. Geburtstag 13 Wochen vorher (§ 16 Abs. 1 BEEG). Halten Sie diese Fristen ein, damit der Arbeitgeber sich rechtzeitig auf Ihre Abwesenheit einstellen kann.',
    },
    {
      q: 'Reicht eine E-Mail für den Antrag, oder brauche ich eine Unterschrift?',
      a: 'Das hängt vom Geburtsdatum des Kindes ab: Für Kinder ab dem 1. Mai 2025 genügt Textform, für ältere Kinder ist weiterhin die eigenhändig unterschriebene Schriftform erforderlich (§ 28 BEEG). Ein ausgedrucktes und unterschriebenes Schreiben erfüllt in jedem Fall beide Anforderungen.',
    },
    {
      q: 'Muss ich mich sofort für zwei Jahre festlegen?',
      a: 'Bei der Anmeldung müssen Sie verbindlich erklären, für welche Zeiten innerhalb von zwei Jahren ab Beginn der Elternzeit Sie Elternzeit nehmen möchten (§ 16 Abs. 1 BEEG). Eine spätere Änderung ist nur mit Zustimmung des Arbeitgebers oder in engen gesetzlichen Ausnahmefällen möglich.',
    },
    {
      q: 'Kann ich die Elternzeit auf mehrere Abschnitte aufteilen?',
      a: 'Ja, grundsätzlich kann Elternzeit auf bis zu drei Zeitabschnitte verteilt werden; eine weitere Aufteilung ist nur mit Zustimmung des Arbeitgebers möglich. Für jeden zusätzlichen Abschnitt stellen Sie einen eigenen Antrag.',
    },
    {
      q: 'An wen richte ich den Antrag?',
      a: 'An Ihren Arbeitgeber – in der Regel an die Personalabteilung oder die für Sie zuständige Vorgesetzte bzw. den zuständigen Vorgesetzten. Bewahren Sie sich eine Bestätigung des Zugangs bzw. eine Kopie des Schreibens auf.',
    },
  ],
  lastReviewed: '2026-07-12',
};

export default config;
