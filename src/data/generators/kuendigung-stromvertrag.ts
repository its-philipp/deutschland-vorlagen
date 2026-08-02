import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01 by reading the actual text on
 * gesetze-im-internet.de.
 *
 * NOTE: § 41 EnWG alone is NOT the termination provision — its Abs. 1 lists
 * mandatory contract contents. The relevant passages are:
 * § 41 Abs. 5 EnWG (read verbatim) — where the supplier exercises a reserved
 *   right to change prices or other terms, the Letztverbraucher may terminate
 *   "ohne Einhaltung einer Frist zum Zeitpunkt des Wirksamwerdens der
 *   Änderungen", and no separate fee may be charged for this. Households must
 *   be informed of price changes at least one month in advance.
 * § 41b Abs. 1 EnWG — contracts with Haushaltskunden outside the
 *   Grundversorgung and their termination BY THE SUPPLIER require Textform;
 *   the supplier must confirm the customer's termination in Textform within
 *   one week of receipt, stating the end of the contract.
 * § 41b Abs. 5 EnWG (read verbatim 2026-08-01) — on a change of residence,
 *   Haushaltskunden may terminate ausserordentlich with a six-week notice
 *   period, effective at the move-out date or later. The right falls away if
 *   the supplier offers, within two weeks in Textform, to continue the
 *   contract at the new address on the same terms and supply there is
 *   possible. Satz 4 obliges the customer to state their future address (or
 *   the new Entnahmestelle's identification number) IN the termination —
 *   hence the `neueAnschrift` field.
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-stromvertrag',
  category: 'vertraege',
  categoryLabel: 'Verträge',
  h1: 'Stromvertrag kündigen: Muster zum Ausfüllen',
  metaTitle: 'Stromvertrag kündigen: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Stromvertrag kündigen: Schreiben für ordentliche Kündigung, Preiserhöhung oder Umzug online ausfüllen und ausdrucken – kostenlos.',
  intro:
    'Mit diesem Generator kündigen Sie Ihren Stromliefervertrag – ordentlich zum Laufzeitende, per Sonderkündigung nach einer Preiserhöhung oder wegen eines Umzugs.',
  fields: [
    {
      id: 'kundennummer',
      label: 'Kundennummer',
      type: 'text',
      required: true,
      hint: 'Steht auf Ihrer Jahresabrechnung oder Abschlagsrechnung.',
      example: 'SK-2026-330912',
    },
    {
      id: 'zaehlernummer',
      label: 'Zählernummer',
      type: 'text',
      required: true,
      hint: 'Steht auf dem Stromzähler und auf Ihrer Abrechnung – sie identifiziert die Entnahmestelle.',
      example: '1 ESY 1160123456',
    },
    {
      id: 'lieferadresse',
      label: 'Adresse der Verbrauchsstelle',
      type: 'text',
      required: true,
      hint: 'Die Adresse, an der der Strom geliefert wird.',
      example: 'Lindenweg 8, 30161 Hannover',
    },
    {
      id: 'kuendigungsart',
      label: 'Art der Kündigung',
      type: 'select',
      required: true,
      hint: 'Wählen Sie den Grund – bei einer Preiserhöhung können Sie fristlos zum Wirksamwerden der Änderung kündigen, bei einem Umzug mit sechs Wochen Frist.',
      options: [
        {
          value: 'ordentlich',
          label: 'Ordentliche Kündigung',
        },
        {
          value:
            'im Wege des Sonderkündigungsrechts nach § 41 Abs. 5 EnWG wegen der von Ihnen angekündigten Preisänderung',
          label: 'Sonderkündigung wegen Preiserhöhung',
        },
        {
          value:
            'außerordentlich wegen meines Wohnsitzwechsels nach § 41b Abs. 5 EnWG',
          label: 'Kündigung wegen Umzugs',
        },
      ],
    },
    {
      id: 'termin',
      label: 'Kündigung zum',
      type: 'text',
      required: true,
      hint: 'Nur das Datum, ohne "zum". Bei der Sonderkündigung wegen Preiserhöhung tragen Sie den Tag ein, an dem die Erhöhung wirksam werden soll; beim Umzug frühestens sechs Wochen nach Zugang der Kündigung.',
      example: '30.09.2026',
    },
    {
      id: 'neueAnschrift',
      label: 'Künftige Anschrift (nur bei Umzug)',
      type: 'text',
      required: false,
      hint: 'Bei der Kündigung wegen Umzugs verlangt § 41b Abs. 5 EnWG, dass Sie Ihre künftige Anschrift oder die Identifikationsnummer der neuen Entnahmestelle im Kündigungsschreiben angeben.',
      example: 'Ahornallee 12, 30419 Hannover',
    },
    {
      id: 'zaehlerstand',
      label: 'Zählerstand bei Vertragsende (freiwillig)',
      type: 'text',
      required: false,
      hint: 'Optional: Wenn Sie den Stand schon kennen, nennen Sie ihn – das beschleunigt die Schlussrechnung.',
      example: '48.213 kWh',
    },
  ],
  subjectTemplate:
    'Kündigung meines Stromliefervertrags – Kundennummer {{kundennummer}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich den mit Ihnen bestehenden Stromliefervertrag {{kuendigungsart}} zum {{termin}}.

Kundennummer: {{kundennummer}}
Zählernummer: {{zaehlernummer}}
Verbrauchsstelle: {{lieferadresse}}

Meine künftige Anschrift lautet: {{neueAnschrift}}

Zählerstand bei Vertragsende: {{zaehlerstand}}

Sollte der genannte Termin nicht zutreffen, kündige ich hilfsweise zum nächstmöglichen zulässigen Zeitpunkt.

Bitte bestätigen Sie mir die Kündigung nach § 41b Abs. 1 EnWG innerhalb einer Woche in Textform unter Angabe des Vertragsendes und übersenden Sie mir eine Schlussrechnung. Ein etwaiges Guthaben überweisen Sie bitte auf das Ihnen bekannte Konto.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 41 EnWG',
      url: 'https://www.gesetze-im-internet.de/enwg_2005/__41.html',
      note: 'Übt der Energielieferant ein vorbehaltenes Recht zur Änderung der Preise oder sonstiger Vertragsbedingungen aus, kann der Letztverbraucher den Vertrag ohne Einhaltung einer Frist zum Zeitpunkt des Wirksamwerdens der Änderungen kündigen; ein gesondertes Entgelt darf dafür nicht verlangt werden. Über Preisänderungen ist bei Haushaltskunden spätestens einen Monat vor Wirksamwerden zu unterrichten (Abs. 5).',
    },
    {
      ref: '§ 41b EnWG',
      url: 'https://www.gesetze-im-internet.de/enwg_2005/__41b.html',
      note: 'Energielieferverträge mit Haushaltskunden außerhalb der Grundversorgung und ihre Kündigung durch den Energielieferanten bedürfen der Textform. Der Energielieferant hat dem Haushaltskunden dessen Kündigung innerhalb einer Woche nach Zugang unter Angabe des Vertragsendes in Textform zu bestätigen (Abs. 1). Haushaltskunden sind im Falle eines Wohnsitzwechsels zu einer außerordentlichen Kündigung ihres bisherigen Liefervertrages unter Einhaltung einer Kündigungsfrist von sechs Wochen berechtigt; die Kündigung kann zum Zeitpunkt des Auszugs oder zu einem späteren Zeitpunkt erklärt werden. Das gilt nicht, wenn der bisherige Lieferant binnen zwei Wochen nach Erhalt der Kündigung in Textform eine Fortsetzung des Vertrages am neuen Wohnsitz zu den bisherigen Bedingungen anbietet und die Belieferung dort möglich ist. Der Haushaltskunde hat dazu seine künftige Anschrift oder die Identifikationsnummer der künftigen Entnahmestelle mitzuteilen (Abs. 5).',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, um Ihren Stromliefervertrag zu beenden – beim Wechsel zu einem günstigeren Anbieter, nach einer angekündigten Preiserhöhung oder wegen eines Umzugs.',
    deadline:
      'Bei der ordentlichen Kündigung richtet sich die Frist nach Ihrem Vertrag; bei Verträgen mit Preisgarantie oder Mindestlaufzeit ist das Laufzeitende maßgeblich. Kündigt der Anbieter dagegen eine Preisänderung an, können Sie ohne Frist zum Zeitpunkt des Wirksamwerdens der Änderung kündigen (§ 41 Abs. 5 EnWG) – über die Änderung muss er Sie als Haushaltskunde spätestens einen Monat vorher unterrichten. Bei einem Umzug beträgt die Frist sechs Wochen (§ 41b Abs. 5 EnWG). Ihre Kündigung muss der Anbieter innerhalb einer Woche in Textform bestätigen (§ 41b Abs. 1 EnWG).',
    legal:
      'Für Energielieferverträge mit Letztverbrauchern gilt das Energiewirtschaftsgesetz. § 41 Abs. 5 EnWG gibt Ihnen ein fristloses Sonderkündigungsrecht, wenn der Lieferant Preise oder Vertragsbedingungen einseitig ändert – und verbietet ausdrücklich, dafür ein gesondertes Entgelt zu verlangen. Ziehen Sie um, steht Ihnen als Haushaltskunde nach § 41b Abs. 5 EnWG ein außerordentliches Kündigungsrecht mit sechs Wochen Frist zu; dieses Recht folgt unmittelbar aus dem Gesetz und muss nicht im Vertrag stehen. § 41b Abs. 1 EnWG verpflichtet den Lieferanten, Ihre Kündigung binnen einer Woche in Textform unter Angabe des Vertragsendes zu bestätigen. Beim Anbieterwechsel bleibt Ihre Versorgung in jedem Fall gesichert: Kommt kein neuer Vertrag zustande, greift automatisch die Grundversorgung.',
  },
  faq: [
    {
      q: 'Kann ich wegen einer Preiserhöhung sofort kündigen?',
      a: 'Ja. Ändert Ihr Lieferant die Preise oder sonstige Vertragsbedingungen einseitig, können Sie ohne Einhaltung einer Frist zum Zeitpunkt des Wirksamwerdens der Änderung kündigen (§ 41 Abs. 5 EnWG). Ein gesondertes Entgelt darf dafür nicht verlangt werden.',
    },
    {
      q: 'Wie lange vorher muss mich der Anbieter über eine Preiserhöhung informieren?',
      a: 'Bei Haushaltskunden spätestens einen Monat vor Eintritt der beabsichtigten Änderung; die Unterrichtung muss verständlich sein und Anlass, Voraussetzungen und Umfang der Preisänderung nennen (§ 41 Abs. 5 EnWG). Zugleich muss der Lieferant Sie auf Ihr Recht zur Vertragsbeendigung hinweisen.',
    },
    {
      q: 'Muss der Anbieter meine Kündigung bestätigen?',
      a: 'Ja. Bei Haushaltskunden außerhalb der Grundversorgung muss der Energielieferant die Kündigung innerhalb einer Woche nach Zugang in Textform bestätigen und dabei das Vertragsende angeben (§ 41b Abs. 1 EnWG). Das Musterschreiben fordert diese Bestätigung ausdrücklich an.',
    },
    {
      q: 'Sitze ich nach der Kündigung im Dunkeln?',
      a: 'Nein. Kommt kein Vertrag mit einem neuen Lieferanten zustande, werden Sie automatisch vom örtlichen Grundversorger beliefert. Die Grundversorgung ist meist teurer als ein Sondervertrag, aber Ihre Stromversorgung bricht nicht ab.',
    },
    {
      q: 'Kann ich meinen Stromvertrag wegen eines Umzugs kündigen?',
      a: 'Ja. Als Haushaltskunde haben Sie bei einem Wohnsitzwechsel ein außerordentliches Kündigungsrecht mit einer Frist von sechs Wochen (§ 41b Abs. 5 EnWG). Dieses Recht steht Ihnen kraft Gesetzes zu – es muss nicht in Ihrem Vertrag stehen. Sie können zum Zeitpunkt des Auszugs oder zu einem späteren Termin kündigen. Wichtig: Nennen Sie im Kündigungsschreiben Ihre künftige Anschrift, denn das verlangt die Vorschrift ausdrücklich. Ihr bisheriger Lieferant kann die Kündigung abwenden, indem er Ihnen binnen zwei Wochen in Textform anbietet, den Vertrag an der neuen Adresse zu denselben Bedingungen fortzuführen – vorausgesetzt, er kann dort überhaupt liefern. Übermitteln Sie zusätzlich den Zählerstand, damit die Schlussrechnung stimmt.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
