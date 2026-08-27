import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified via WebSearch against dejure.org / juraforum / it-recht
 * sources on 2026-07-13 (gesetze-im-internet.de 403-blocks this dev
 * environment's proxy per MEMORY.md).
 */
const config: GeneratorConfig = {
  slug: 'reklamation-kaufvertrag',
  category: 'vertraege',
  categoryLabel: 'Verträge & Verbraucher',
  h1: 'Reklamation defekte Ware: Muster zum Ausfüllen',
  metaTitle: 'Reklamation defekte Ware: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Defekte Ware reklamieren und Nacherfüllung fordern: Schreiben online ausfüllen und als PDF speichern – kostenlos, mit §§ 434 ff. BGB im Blick.',
  intro:
    'Mit diesem Generator fordern Sie den Verkäufer bei defekter Ware zur Nacherfüllung auf – Reparatur oder Ersatzlieferung, mit angemessener Frist, direkt im Browser.',
  fields: [
    {
      id: 'produkt',
      label: 'Produkt',
      type: 'text',
      required: true,
      hint: 'Bezeichnung der gekauften Ware, ggf. mit Modell- oder Artikelnummer.',
      example: 'Kaffeevollautomat Modell XR-500',
    },
    {
      id: 'kaufdatum',
      label: 'Kaufdatum',
      type: 'date',
      required: true,
      hint: 'Datum des Kaufs laut Rechnung oder Kassenbon.',
      example: '10.05.2026',
    },
    {
      id: 'belegnummer',
      label: 'Rechnungs- oder Belegnummer',
      type: 'text',
      required: true,
      hint: 'Steht auf der Rechnung oder dem Kassenbon.',
      example: 'RE-2026-33210',
    },
    {
      id: 'mangelBeschreibung',
      label: 'Beschreibung des Mangels',
      type: 'textarea',
      required: true,
      hint: 'Beschreiben Sie Art und Ausmaß des Mangels sowie, seit wann er auftritt.',
      example: 'Das Gerät schaltet sich nach wenigen Minuten selbstständig ab und zeigt eine Fehlermeldung an.',
    },
    {
      id: 'nacherfuellungsart',
      label: 'Gewünschte Art der Nacherfüllung',
      type: 'select',
      required: true,
      hint: 'Sie können zwischen Reparatur und Ersatzlieferung wählen.',
      options: [
        {
          value: 'die Beseitigung des Mangels (Reparatur)',
          label: 'Beseitigung des Mangels (Reparatur)',
        },
        {
          value: 'die Lieferung einer mangelfreien Sache (Ersatzlieferung)',
          label: 'Lieferung einer mangelfreien Sache (Ersatzlieferung)',
        },
      ],
    },
    {
      id: 'frist',
      label: 'Frist zur Nacherfüllung',
      type: 'text',
      required: true,
      hint: 'Angemessene Frist ab Zugang des Schreibens, üblich sind mindestens 14 Tage.',
      example: '14 Tage',
    },
  ],
  subjectTemplate:
    'Reklamation und Aufforderung zur Nacherfüllung – {{produkt}}, Rechnung {{belegnummer}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

am {{kaufdatum}} habe ich bei Ihnen folgendes Produkt gekauft: {{produkt}} (Rechnungs-/Belegnummer {{belegnummer}}). Dabei ist mir folgender Mangel aufgefallen:

{{mangelBeschreibung}}

Gemäß §§ 434, 437 BGB fordere ich Sie hiermit zur Nacherfüllung auf und verlange {{nacherfuellungsart}}. Hierfür setze ich Ihnen eine Frist von {{frist}} ab Zugang dieses Schreibens.

Die für die Nacherfüllung erforderlichen Kosten, insbesondere Transport-, Wege-, Arbeits- und Materialkosten, tragen Sie gemäß § 439 Abs. 2 BGB.

Sollten Sie die Nacherfüllung verweigern oder die Frist erfolglos verstreichen lassen, behalte ich mir vor, weitergehende Rechte geltend zu machen, etwa Minderung des Kaufpreises, Rücktritt vom Vertrag oder Schadensersatz.

Bitte bestätigen Sie mir den Erhalt dieses Schreibens sowie das weitere Vorgehen schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 434 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__434.html',
      note: 'Die Kaufsache ist frei von Sachmängeln, wenn sie bei Gefahrübergang den subjektiven und objektiven Anforderungen sowie den Montageanforderungen entspricht; weicht sie davon ab, liegt ein Sachmangel vor.',
    },
    {
      ref: '§ 437 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__437.html',
      note: 'Bei einem Mangel kann der Käufer Nacherfüllung nach § 439 BGB verlangen sowie, unter weiteren Voraussetzungen, vom Vertrag zurücktreten, den Kaufpreis mindern oder Schadensersatz bzw. Ersatz vergeblicher Aufwendungen verlangen.',
    },
    {
      ref: '§ 439 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__439.html',
      note: 'Der Käufer wählt zwischen Beseitigung des Mangels und Lieferung einer mangelfreien Sache; der Verkäufer trägt die dafür erforderlichen Kosten und kann die gewählte Art der Nacherfüllung nur bei unverhältnismäßigem Aufwand verweigern.',
    },
    {
      ref: '§ 438 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__438.html',
      note: 'Mängelansprüche aus § 437 Nr. 1 und Nr. 3 BGB verjähren grundsätzlich zwei Jahre nach Ablieferung der Sache.',
    },
    {
      ref: '§ 477 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__477.html',
      note: 'Zeigt sich beim Verbrauchsgüterkauf innerhalb eines Jahres nach Gefahrübergang ein Mangel, wird vermutet, dass die Sache bereits bei Übergabe mangelhaft war (Beweislastumkehr); der Verkäufer müsste das Gegenteil beweisen.',
    },
  ],
  explainer: {
    whenHeading: 'Wann reklamieren Sie richtig?',
    deadlineHeading: 'Wie lange können Sie reklamieren?',
    legalHeading: 'Welche Rechte Sie beim Mangel haben',
    when:
      'Dieses Schreiben nutzen Sie, wenn eine gekaufte Ware einen Mangel aufweist und Sie den Verkäufer zur Nacherfüllung – Reparatur oder Ersatzlieferung – auffordern möchten, bevor Sie weitergehende Rechte wie Minderung oder Rücktritt in Betracht ziehen. Reklamieren Sie stets beim Verkäufer, nicht beim Hersteller.',
    deadline:
      'Das Gesetz schreibt keine feste Fristlänge vor; üblich sind, je nach Art der Ware, mindestens 14 Tage ab Zugang des Schreibens. Zeigt sich der Mangel innerhalb eines Jahres nach Übergabe, greift zu Ihren Gunsten die Vermutung, dass er bereits beim Kauf vorlag (§ 477 BGB); Ihre Mängelansprüche insgesamt verjähren zwei Jahre nach Ablieferung (§ 438 BGB).',
    legal:
      'Der Verkäufer muss eine mangelfreie Sache liefern (§ 434 BGB). Liegt ein Sachmangel vor, haben Sie zunächst Anspruch auf Nacherfüllung nach Ihrer Wahl – Reparatur oder Ersatzlieferung (§ 437, § 439 BGB); die dafür erforderlichen Kosten trägt der Verkäufer. Erst wenn die Nacherfüllung fehlschlägt, verweigert wird oder unzumutbar ist, kommen weitergehende Rechte wie Minderung, Rücktritt oder Schadensersatz in Betracht.',
  },
  faq: [
    {
      q: 'An wen richte ich die Reklamation – an den Händler oder den Hersteller?',
      a: 'An den Verkäufer, also Ihren Vertragspartner aus dem Kaufvertrag. Die gesetzlichen Mängelrechte (Gewährleistung) bestehen nur gegenüber dem Verkäufer, nicht gegenüber dem Hersteller – auch wenn dieser zusätzlich eine eigene Garantie anbietet.',
    },
    {
      q: 'Was ist der Unterschied zwischen gesetzlicher Gewährleistung und Herstellergarantie?',
      a: 'Die gesetzliche Gewährleistung (§§ 434 ff. BGB) gilt automatisch für jeden Kaufvertrag und richtet sich gegen den Verkäufer. Eine Herstellergarantie ist dagegen ein freiwilliges, zusätzliches Versprechen des Herstellers mit eigenen Bedingungen und lässt Ihre gesetzlichen Rechte gegenüber dem Verkäufer unberührt.',
    },
    {
      q: 'Darf ich mir aussuchen, ob repariert oder ausgetauscht wird?',
      a: 'Ja, das Wahlrecht zwischen Nachbesserung (Reparatur) und Ersatzlieferung liegt beim Käufer (§ 439 Abs. 1 BGB). Der Verkäufer kann die gewählte Variante nur verweigern, wenn sie nur mit unverhältnismäßig hohen Kosten möglich wäre.',
    },
    {
      q: 'Wie lange habe ich Zeit, einen Mangel zu reklamieren?',
      a: 'Mängelansprüche verjähren grundsätzlich zwei Jahre nach Ablieferung der Ware (§ 438 BGB). Zeigt sich der Mangel innerhalb eines Jahres nach Übergabe, wird zudem vermutet, dass er bereits beim Kauf vorlag – der Verkäufer müsste das Gegenteil beweisen (§ 477 BGB).',
    },
    {
      q: 'Was, wenn der Verkäufer die Nacherfüllung ablehnt oder die Frist verstreicht?',
      a: 'Dann können Sie unter weiteren Voraussetzungen den Kaufpreis mindern, vom Vertrag zurücktreten oder Schadensersatz verlangen (§ 437 BGB).',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
