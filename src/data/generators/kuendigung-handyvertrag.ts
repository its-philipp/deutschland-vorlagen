import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified via WebSearch against dejure.org / buzer.de / juraforum
 * on 2026-07-13 (gesetze-im-internet.de 403-blocks this dev environment's
 * proxy per MEMORY.md). TKG citations use the tkg_2021 path on
 * gesetze-im-internet.de, confirmed as the current canonical path for the
 * Telekommunikationsgesetz (in force since 1.12.2021).
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-handyvertrag',
  category: 'vertraege',
  categoryLabel: 'Verträge & Verbraucher',
  h1: 'Kündigung Handyvertrag: Muster zum Ausfüllen',
  metaTitle: 'Kündigung Handyvertrag: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Handyvertrag kündigen: Kündigungsschreiben mit Kunden- und Rufnummer online ausfüllen und als PDF speichern – kostenlos, ohne Anmeldung.',
  intro:
    'Mit diesem Generator erstellen Sie ein Kündigungsschreiben für Ihren Mobilfunkvertrag – zum nächstmöglichen Termin oder einem konkreten Datum, direkt im Browser.',
  fields: [
    {
      id: 'kundennummer',
      label: 'Kundennummer',
      type: 'text',
      required: true,
      hint: 'Steht auf Ihrer Rechnung oder im Kundenportal.',
      example: 'K-4471182',
    },
    {
      id: 'rufnummer',
      label: 'Rufnummer',
      type: 'text',
      required: true,
      hint: 'Die Mobilfunknummer, für die der Vertrag gilt.',
      example: '0151 23456789',
    },
    {
      id: 'kuendigungstermin',
      label: 'Kündigung zum',
      type: 'text',
      required: true,
      example: 'zum nächstmöglichen Zeitpunkt',
      hint: 'Alternativ ein konkretes Datum, z. B. „zum 31.08.2026“.',
    },
  ],
  subjectTemplate:
    'Kündigung meines Mobilfunkvertrags – Kundennummer {{kundennummer}}, Rufnummer {{rufnummer}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich meinen Mobilfunkvertrag mit der Kundennummer {{kundennummer}} für die Rufnummer {{rufnummer}} ordentlich {{kuendigungstermin}}.

Sollte die Kündigung zu dem genannten Termin nicht möglich sein, gilt sie hilfsweise zum nächstmöglichen Zeitpunkt. Einer automatischen bzw. stillschweigenden Verlängerung des Vertrags widerspreche ich hiermit ausdrücklich.

Bitte bestätigen Sie mir den Zugang dieser Kündigung sowie das konkrete Datum der Vertragsbeendigung schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 309 Nr. 9 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__309.html',
      note: 'Begrenzt Laufzeitklauseln: Erstlaufzeit höchstens zwei Jahre; verlängert sich der Vertrag automatisch, dann nur auf unbestimmte Zeit mit einer Kündigungsfrist von höchstens einem Monat (gilt für ab dem 1. März 2022 geschlossene Verträge).',
    },
    {
      ref: '§ 56 TKG',
      url: 'https://www.gesetze-im-internet.de/tkg_2021/__56.html',
      note: 'Die Erstlaufzeit von Telekommunikationsverträgen mit Verbrauchern darf höchstens 24 Monate betragen; der Anbieter muss zusätzlich einen Tarif mit höchstens 12 Monaten Laufzeit anbieten. Nach Ablauf der Erstlaufzeit verlängert sich der Vertrag nicht mehr automatisch um ein Jahr.',
    },
    {
      ref: '§ 57 TKG',
      url: 'https://www.gesetze-im-internet.de/tkg_2021/__57.html',
      note: 'Ändert der Anbieter den Vertrag einseitig zulasten des Kunden (z. B. Preiserhöhung), kann der Kunde ohne Frist und kostenlos kündigen – innerhalb von drei Monaten ab Zugang der Änderungsmitteilung.',
    },
    {
      ref: '§ 60 TKG',
      url: 'https://www.gesetze-im-internet.de/tkg_2021/__60.html',
      note: 'Kann der Anbieter die vertraglich geschuldete Leistung am neuen Wohnort nach einem Umzug nicht erbringen, besteht ein Sonderkündigungsrecht mit einem Monat Frist zum Umzugstermin oder einem späteren Zeitpunkt (Abs. 2).',
    },
    {
      ref: '§ 59 TKG',
      url: 'https://www.gesetze-im-internet.de/tkg_2021/__59.html',
      note: 'Verbraucher haben Anspruch auf kostenfreie Mitnahme ihrer Rufnummer zu einem neuen Anbieter; die Portierung kann noch bis zu einen Monat nach Vertragsende beantragt werden.',
    },
    {
      ref: '§ 312k BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__312k.html',
      note: 'Online abgeschlossene Verträge müssen sich auch direkt über einen Kündigungsbutton auf der Website des Anbieters kündigen lassen.',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie für die ordentliche Kündigung Ihres Mobilfunkvertrags – zum Ende der Vertragslaufzeit oder, danach, zum nächstmöglichen monatlichen Termin. Bei einer außerordentlichen Kündigung, etwa nach einer einseitigen Preiserhöhung durch den Anbieter, ergänzen Sie das Schreiben um einen Hinweis auf die Vertragsänderung und deren Zugangsdatum.',
    deadline:
      'Die Erstlaufzeit darf höchstens 24 Monate betragen (§ 56 TKG); danach ist der Vertrag monatlich kündbar, ohne sich automatisch um ein weiteres Jahr zu verlängern (§ 309 Nr. 9 BGB). Bei einer einseitigen Vertragsänderung müssen Sie das Sonderkündigungsrecht innerhalb von drei Monaten ab Zugang der Mitteilung nutzen (§ 57 TKG); nach einem Umzug ohne Versorgung am neuen Ort gilt eine Frist von einem Monat (§ 60 Abs. 2 TKG).',
    legal:
      'Die Erstlaufzeit von Mobilfunkverträgen mit Verbrauchern ist gesetzlich auf höchstens 24 Monate begrenzt; danach ist monatlich kündbar (§ 56 TKG, § 309 Nr. 9 BGB). Ändert der Anbieter den Vertrag einseitig zu Ihren Ungunsten, etwa durch eine Preiserhöhung, steht Ihnen ein fristloses, kostenfreies Sonderkündigungsrecht zu (§ 57 TKG). Auch bei einem Umzug, an dessen neuem Standort der Anbieter die vereinbarte Leistung nicht erbringen kann, dürfen Sie mit einem Monat Frist außerordentlich kündigen (§ 60 Abs. 2 TKG). Wurde der Vertrag online geschlossen, muss der Anbieter zusätzlich einen Kündigungsbutton bereitstellen (§ 312k BGB).',
  },
  faq: [
    {
      q: 'Welche Kündigungsfrist gilt für meinen Handyvertrag?',
      a: 'Nach Ablauf der gesetzlich auf höchstens 24 Monate begrenzten Erstlaufzeit ist der Vertrag monatlich kündbar (§ 56 TKG, § 309 Nr. 9 BGB). Der genaue Kündigungstermin während der Erstlaufzeit ergibt sich aus Ihrem individuellen Vertrag.',
    },
    {
      q: 'Verlängert sich mein Vertrag automatisch um ein weiteres Jahr, wenn ich nicht kündige?',
      a: 'Nein, bei Verträgen ab dem 1. März 2022 ist das nicht mehr zulässig: Nach der Erstlaufzeit läuft der Vertrag nur noch auf unbestimmte Zeit weiter und bleibt monatlich kündbar (§ 309 Nr. 9 BGB).',
    },
    {
      q: 'Kann ich außerordentlich kündigen, wenn der Anbieter die Preise erhöht?',
      a: 'Ja. Ändert der Anbieter den Vertrag einseitig, etwa durch eine Preiserhöhung, können Sie innerhalb von drei Monaten nach Zugang der Mitteilung fristlos und kostenfrei kündigen (§ 57 TKG). Rein begünstigende oder verwaltungstechnische Änderungen ohne Nachteil für Sie begründen dieses Recht nicht.',
    },
    {
      q: 'Habe ich bei einem Umzug ein Sonderkündigungsrecht?',
      a: 'Wenn Ihr bisheriger Anbieter den vertraglich geschuldeten Anschluss an Ihrem neuen Wohnort nicht bereitstellen kann, können Sie mit einer Frist von einem Monat zum Umzugstermin oder einem späteren Zeitpunkt kündigen (§ 60 Abs. 2 TKG).',
    },
    {
      q: 'Kann ich meine Rufnummer zum neuen Anbieter mitnehmen?',
      a: 'Ja, die Rufnummernmitnahme ist gesetzlich vorgesehen und für Sie kostenfrei (§ 59 TKG). Beantragen Sie die Portierung beim neuen Anbieter; das ist auch noch bis zu einen Monat nach Ende des alten Vertrags möglich.',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
