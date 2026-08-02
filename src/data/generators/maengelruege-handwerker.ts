import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de / dejure.org on
 * 2026-07-12.
 */
const config: GeneratorConfig = {
  slug: 'maengelruege-handwerker',
  category: 'vertraege',
  categoryLabel: 'Verträge & Verbraucher',
  h1: 'Mängelrüge an den Handwerker: Muster zum Ausfüllen',
  metaTitle: 'Mängelrüge Handwerker: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Mängel an Handwerkerarbeiten rügen und Nacherfüllung fordern: Schreiben online ausfüllen und als PDF speichern – kostenlos, mit §§ 633 ff. BGB.',
  intro:
    'Mit diesem Generator fordern Sie einen Handwerker zur Nacherfüllung mangelhafter Werkleistungen auf – als fertiges Schreiben mit angemessener Frist, direkt im Browser.',
  fields: [
    {
      id: 'mangelBeschreibung',
      label: 'Beschreibung des Mangels',
      type: 'textarea',
      required: true,
      hint: 'Beschreiben Sie Art, Ort und Ausmaß des Mangels möglichst genau.',
      example: 'Die neu verlegten Fliesen im Badezimmer weisen an mehreren Stellen Hohlstellen auf und liegen nicht plan.',
    },
    {
      id: 'datumArbeitenRechnung',
      label: 'Datum der Arbeiten bzw. der Rechnung',
      type: 'date',
      required: true,
      hint: 'Datum der Fertigstellung/Abnahme oder, falls unbekannt, das Rechnungsdatum.',
      example: '15.06.2026',
    },
    {
      id: 'frist',
      label: 'Frist zur Nacherfüllung bis',
      type: 'date',
      required: true,
      hint: 'Setzen Sie eine angemessene Frist – je nach Umfang der Arbeiten meist mindestens 10–14 Tage ab Zugang des Schreibens.',
      example: '26.07.2026',
    },
  ],
  subjectTemplate:
    'Mängelrüge und Aufforderung zur Nacherfüllung – Arbeiten vom {{datumArbeitenRechnung}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

am {{datumArbeitenRechnung}} haben Sie bei mir Werkleistungen erbracht bzw. hierfür Rechnung gestellt. Dabei ist mir folgender Mangel aufgefallen:

{{mangelBeschreibung}}

Gemäß §§ 633, 634 BGB fordere ich Sie hiermit zur Nacherfüllung auf und setze Ihnen hierfür eine Frist bis zum {{frist}}. Die Wahl zwischen Beseitigung des Mangels und Neuherstellung liegt dabei gemäß § 635 Abs. 1 BGB bei Ihnen; die hierfür erforderlichen Kosten tragen Sie.

Sollten Sie die Frist verstreichen lassen oder die Nacherfüllung verweigern, behalte ich mir vor, weitergehende Rechte geltend zu machen, etwa die Selbstvornahme mit Kostenerstattung, Minderung des Werklohns oder Rücktritt vom Vertrag.

Bitte bestätigen Sie mir den Erhalt dieses Schreibens sowie einen Termin zur Mängelbeseitigung schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 633 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__633.html',
      note: 'Der Unternehmer hat dem Besteller das Werk frei von Sach- und Rechtsmängeln zu verschaffen; ein Werk mit vereinbarter oder gewöhnlicher Beschaffenheit ist mangelhaft, wenn es davon abweicht.',
    },
    {
      ref: '§ 634 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__634.html',
      note: 'Bei einem Mangel kann der Besteller u. a. Nacherfüllung nach § 635 verlangen sowie, unter weiteren Voraussetzungen, selbst nachbessern und Aufwendungsersatz verlangen, den Werklohn mindern, vom Vertrag zurücktreten oder Schadensersatz fordern.',
    },
    {
      ref: '§ 635 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__635.html',
      note: 'Bei der Nacherfüllung kann der Unternehmer nach seiner Wahl den Mangel beseitigen oder ein neues Werk herstellen; die hierfür erforderlichen Kosten trägt er. Er kann die Nacherfüllung verweigern, wenn sie nur mit unverhältnismäßigen Kosten möglich ist.',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn ein Handwerker im Rahmen eines Werkvertrags mangelhaft gearbeitet hat – etwa bei Fliesen-, Maler- oder Installationsarbeiten – und Sie die Beseitigung des Mangels verlangen möchten, bevor Sie weitere Schritte (Minderung, Selbstvornahme, Rücktritt) in Betracht ziehen.',
    deadline:
      'Das Gesetz schreibt keine feste Fristlänge vor; Sie müssen dem Unternehmer aber eine angemessene Frist zur Nacherfüllung setzen (§§ 634, 635 BGB). Was angemessen ist, hängt vom Umfang der Nacharbeiten ab – üblich sind, je nach Aufwand, ein bis mehrere Wochen.',
    legal:
      'Der Unternehmer schuldet ein mangelfreies Werk (§ 633 BGB). Liegt ein Mangel vor, hat der Besteller zunächst grundsätzlich Anspruch auf Nacherfüllung (§ 634 Nr. 1, § 635 BGB); erst wenn diese fehlschlägt, verweigert wird oder unzumutbar ist, kommen weitergehende Rechte wie Selbstvornahme, Minderung, Rücktritt oder Schadensersatz in Betracht (§ 634 Nr. 2–4 BGB). Bei der Nacherfüllung selbst entscheidet der Unternehmer, ob er nachbessert oder neu herstellt (§ 635 Abs. 1 BGB).',
  },
  faq: [
    {
      q: 'Muss ich dem Handwerker zuerst eine Chance zur Nachbesserung geben?',
      a: 'In der Regel ja. Vor weitergehenden Rechten wie Minderung, Rücktritt oder Selbstvornahme müssen Sie dem Unternehmer grundsätzlich zunächst Gelegenheit zur Nacherfüllung mit angemessener Fristsetzung geben (§§ 634, 635 BGB).',
    },
    {
      q: 'Darf ich vorgeben, wie der Mangel behoben wird?',
      a: 'Nein. Die Wahl, ob der Unternehmer den Mangel beseitigt oder das Werk neu herstellt, liegt nach § 635 Abs. 1 BGB bei ihm – solange er sich für eine der beiden Varianten mangelfrei und fristgerecht entscheidet.',
    },
    {
      q: 'Was, wenn die Frist verstreicht, ohne dass nachgebessert wird?',
      a: 'Dann können Sie unter weiteren Voraussetzungen den Mangel selbst beseitigen lassen und die Kosten erstattet verlangen, den Werklohn mindern, vom Vertrag zurücktreten oder Schadensersatz verlangen (§ 634 Nr. 2–4 BGB).',
    },
    {
      q: 'Kann der Handwerker die Nacherfüllung verweigern?',
      a: 'Nur unter engen Voraussetzungen – etwa wenn die Nacherfüllung nur mit unverhältnismäßig hohen Kosten möglich wäre (§ 635 Abs. 3 BGB). Ein bloßer Zeit- oder Kostenaufwand allein reicht dafür nicht aus.',
    },
    {
      q: 'Wer trägt die Kosten der Nacherfüllung?',
      a: 'Der Unternehmer trägt die zur Nacherfüllung erforderlichen Aufwendungen, insbesondere Transport-, Wege-, Arbeits- und Materialkosten (§ 635 Abs. 2 BGB).',
    },
  ],
  lastReviewed: '2026-07-12',
};

export default config;
