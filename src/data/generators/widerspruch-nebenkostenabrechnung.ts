import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de on 2026-07-12.
 */
const config: GeneratorConfig = {
  slug: 'widerspruch-nebenkostenabrechnung',
  category: 'mietrecht',
  categoryLabel: 'Mietrecht',
  h1: 'Widerspruch gegen die Nebenkostenabrechnung: Muster zum Ausfüllen',
  metaTitle:
    'Widerspruch Nebenkostenabrechnung: Kostenloses Muster 2026',
  metaDescription:
    'Einwendungen gegen die Nebenkostenabrechnung erheben: Schreiben online ausfüllen und als PDF speichern – kostenlos, mit Frist nach § 556 Abs. 3 BGB.',
  intro:
    'Mit diesem Generator erheben Sie fristgerecht Einwendungen gegen Ihre Nebenkostenabrechnung und fordern Einsicht in die Belege – als fertiges Schreiben zum Ausfüllen, direkt im Browser.',
  fields: [
    {
      id: 'abrechnungszeitraum',
      label: 'Abrechnungszeitraum',
      type: 'text',
      required: true,
      hint: 'Zeitraum, auf den sich die beanstandete Nebenkostenabrechnung bezieht.',
      example: '01.01.2025 – 31.12.2025',
    },
    {
      id: 'abrechnungDatum',
      label: 'Zugegangen am',
      type: 'date',
      required: true,
      hint: 'Datum, an dem Ihnen die Abrechnung zugegangen ist. Ab diesem Datum läuft Ihre Einwendungsfrist.',
      example: '15.06.2026',
    },
    {
      id: 'einwendungenBeschreibung',
      label: 'Ihre Einwendungen',
      type: 'textarea',
      required: true,
      hint: 'Beschreiben Sie, welche Positionen Sie beanstanden und weshalb (z. B. Kostensprung, nicht umlagefähige Position, fehlender Verteilerschlüssel).',
      example: 'Position „Hausmeister“ ist gegenüber dem Vorjahr ohne Erklärung um 200 € gestiegen. Die Position „Gartenpflege“ ist im Mietvertrag nicht als umlagefähig vereinbart.',
    },
    {
      id: 'stellungnahmeFrist',
      label: 'Frist zur Stellungnahme',
      type: 'text',
      required: true,
      hint: 'Angemessene Frist, innerhalb derer Sie eine korrigierte Abrechnung oder Stellungnahme erwarten.',
      example: '4 Wochen',
    },
  ],
  subjectTemplate:
    'Einwendungen gegen die Nebenkostenabrechnung für den Zeitraum {{abrechnungszeitraum}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

die Nebenkostenabrechnung für den Abrechnungszeitraum {{abrechnungszeitraum}} ist mir am {{abrechnungDatum}} zugegangen. Gegen diese Abrechnung erhebe ich fristgerecht Einwendungen gemäß § 556 Abs. 3 BGB.

Im Einzelnen beanstande ich Folgendes:

{{einwendungenBeschreibung}}

Zugleich bitte ich um Einsicht in die zugrundeliegenden Belege und Rechnungen, entweder durch Übersendung von Kopien oder durch einen Termin zur Einsichtnahme in Ihren Geschäftsräumen.

Ich bitte um eine korrigierte Abrechnung beziehungsweise um Stellungnahme zu meinen Einwendungen innerhalb von {{stellungnahmeFrist}}.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 556 Abs. 3 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__556.html',
      note: 'Der Vermieter muss jährlich über die Betriebskosten abrechnen und die Abrechnung spätestens bis zum Ablauf des zwölften Monats nach Ende des Abrechnungszeitraums mitteilen; danach sind Nachforderungen grundsätzlich ausgeschlossen. Der Mieter muss Einwendungen wiederum spätestens bis zum Ablauf des zwölften Monats nach Zugang der Abrechnung geltend machen, sonst sind sie grundsätzlich ausgeschlossen.',
    },
    {
      ref: '§ 259 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__259.html',
      note: 'Wer zur Rechnungslegung verpflichtet ist, muss eine geordnete Aufstellung der Einnahmen und Ausgaben vorlegen und, soweit Belege üblich sind, diese beifügen bzw. zur Einsicht bereithalten – Grundlage für das anerkannte Recht des Mieters auf Belegeinsicht bei der Nebenkostenabrechnung.',
    },
  ],
  explainer: {
    whenHeading: 'Wann lohnt sich der Widerspruch?',
    deadlineHeading: 'Wie lange können Sie die Abrechnung beanstanden?',
    legalHeading: 'Was der Vermieter abrechnen darf',
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie mit einzelnen Positionen Ihrer Nebenkosten- bzw. Betriebskostenabrechnung nicht einverstanden sind – etwa wegen unklarer Kostensprünge, nicht vereinbarter Positionen oder eines falschen Verteilerschlüssels. Es erhebt förmlich Einwendungen und fordert zugleich Einsicht in die Belege.',
    deadline:
      'Der Vermieter muss die Abrechnung spätestens bis zum Ablauf des zwölften Monats nach Ende des Abrechnungszeitraums mitteilen; danach kann er grundsätzlich keine Nachforderungen mehr verlangen. Sie als Mieter müssen Ihre Einwendungen spätestens bis zum Ablauf des zwölften Monats nach Zugang der Abrechnung geltend machen (§ 556 Abs. 3 BGB) – danach sind Einwendungen grundsätzlich ausgeschlossen, es sei denn, Sie haben die verspätete Geltendmachung nicht zu vertreten.',
    legal:
      'Grundlage für Ihre Einwendungen ist § 556 Abs. 3 BGB, der sowohl die Abrechnungsfrist des Vermieters als auch Ihre Einwendungsfrist als Mieter regelt. Um Ihre Einwendungen konkret begründen zu können, haben Sie zudem ein aus § 259 BGB abgeleitetes Recht, die der Abrechnung zugrunde liegenden Belege einzusehen.',
  },
  faq: [
    {
      q: 'Wie lange habe ich Zeit, Einwendungen gegen die Nebenkostenabrechnung zu erheben?',
      a: 'Zwölf Monate ab Zugang der Abrechnung (§ 556 Abs. 3 Satz 5 und 6 BGB). Nach Ablauf dieser Frist sind Einwendungen grundsätzlich ausgeschlossen, es sei denn, Sie haben die verspätete Geltendmachung nicht zu vertreten.',
    },
    {
      q: 'Muss mir der Vermieter die Belege zur Abrechnung zeigen?',
      a: 'Ja. Aus der Rechenschaftspflicht des Vermieters (§ 259 BGB) leitet sich Ihr Recht ab, Einsicht in die zugrundeliegenden Rechnungen und Belege zu nehmen – entweder in dessen Geschäftsräumen oder, in der Regel gegen Kostenerstattung, per Kopie.',
    },
    {
      q: 'Was passiert, wenn der Vermieter die Abrechnung zu spät schickt?',
      a: 'Erreicht Sie die Abrechnung erst nach Ablauf des zwölften Monats nach Ende des Abrechnungszeitraums, kann der Vermieter grundsätzlich keine Nachforderung mehr geltend machen (§ 556 Abs. 3 Satz 2 und 3 BGB) – außer er hat die Verspätung nicht zu vertreten.',
    },
    {
      q: 'Kann ich Nachzahlungen zurückhalten, solange meine Einwendungen ungeklärt sind?',
      a: 'Ob und in welchem Umfang ein Zurückbehaltungsrecht besteht, hängt vom Einzelfall ab, etwa davon, ob Ihre Einwendungen berechtigt und die beanstandeten Beträge klar bezifferbar sind. Klären Sie offene Nachforderungen möglichst schriftlich mit dem Vermieter und lassen Sie sich im Zweifel individuell beraten.',
    },
    {
      q: 'Muss ich die Abrechnung akzeptieren, auch wenn ich Zweifel an einzelnen Positionen habe?',
      a: 'Nein. Innerhalb der zwölfmonatigen Einwendungsfrist können Sie einzelne Positionen konkret beanstanden – etwa wegen fehlender Umlagefähigkeit, falscher Verteilerschlüssel oder unplausibler Kostensteigerungen. Dieses Schreiben dokumentiert Ihre Einwendungen fristgerecht.',
    },
  ],
  lastReviewed: '2026-07-12',
};

export default config;
