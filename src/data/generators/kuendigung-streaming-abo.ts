import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01 against gesetze-im-internet.de.
 * § 312k BGB (read verbatim) obliges traders who let consumers conclude
 * continuing obligations online to provide a Kündigungsschaltfläche labelled
 * "Verträge hier kündigen" leading to a confirmation page — it does NOT
 * itself shorten contractual notice periods. § 309 Nr. 9 BGB caps initial
 * terms and renewals in standard terms.
 *
 * Distinct from kuendigung-fitnessstudio and kuendigung-handyvertrag: those
 * target their own keywords and have their own sector rules (TKG for the
 * latter). The shared § 312k reasoning is intentional, the copy is not.
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-streaming-abo',
  category: 'vertraege',
  categoryLabel: 'Verträge',
  h1: 'Streaming-Abo kündigen: Muster zum Ausfüllen',
  metaTitle: 'Streaming-Abo kündigen: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Streaming-Abo kündigen: Kündigungsschreiben für Video- oder Musik-Abos online ausfüllen und ausdrucken – kostenlos, ohne Anmeldung.',
  intro:
    'Mit diesem Generator kündigen Sie ein laufendes Streaming-Abonnement schriftlich – als Nachweis zusätzlich zur Kündigung über den Kündigungsbutton des Anbieters.',
  fields: [
    {
      id: 'anbieter',
      label: 'Name des Anbieters',
      type: 'text',
      required: true,
      hint: 'Der Vertragspartner laut Rechnung – nicht zwingend der Markenname der App.',
      example: 'Beispiel Streaming GmbH',
    },
    {
      id: 'kundennummer',
      label: 'Kunden- oder Vertragsnummer',
      type: 'text',
      required: true,
      hint: 'Steht auf Ihrer Rechnung oder in Ihrem Kundenkonto.',
      example: 'ST-99120458',
    },
    {
      id: 'kontoEmail',
      label: 'E-Mail-Adresse des Kontos',
      type: 'text',
      required: true,
      hint: 'Die Adresse, mit der das Abonnement registriert ist – sie macht die Zuordnung eindeutig.',
      example: 'max.mustermann@example.de',
    },
    {
      id: 'kuendigungstermin',
      label: 'Kündigung zum',
      type: 'text',
      required: true,
      hint: '„zum nächstmöglichen Zeitpunkt“ ist die sichere Formulierung, wenn Sie Ihre Mindestlaufzeit nicht kennen.',
      example: 'zum nächstmöglichen Zeitpunkt',
    },
  ],
  subjectTemplate:
    'Kündigung meines Abonnements – Kundennummer {{kundennummer}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich das bei Ihnen bestehende Abonnement {{kuendigungstermin}}.

Kundennummer: {{kundennummer}}
Registrierte E-Mail-Adresse: {{kontoEmail}}
Anbieter: {{anbieter}}

Sollte der genannte Termin nicht zutreffen, kündige ich hilfsweise zum nächstmöglichen zulässigen Zeitpunkt.

Bitte bestätigen Sie mir den Zugang dieser Kündigung sowie das Datum der Vertragsbeendigung in Textform unter Angabe des Zeitpunkts, zu dem der Vertrag endet. Bitte stellen Sie außerdem sicher, dass ab diesem Zeitpunkt keine weiteren Abbuchungen erfolgen.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 312k BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__312k.html',
      note: 'Wer Verbrauchern über eine Webseite den Abschluss eines entgeltlichen Dauerschuldverhältnisses ermöglicht, muss dort auch eine Kündigungsschaltfläche bereitstellen. Sie muss gut lesbar mit nichts anderem als den Wörtern „Verträge hier kündigen“ oder einer entsprechend eindeutigen Formulierung beschriftet sein und unmittelbar zu einer Bestätigungsseite führen.',
    },
    {
      ref: '§ 309 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__309.html',
      note: 'Klauselverbote ohne Wertungsmöglichkeit: In Allgemeinen Geschäftsbedingungen sind bei Dauerschuldverhältnissen unter anderem eine den Verbraucher länger als zwei Jahre bindende Laufzeit sowie eine stillschweigende Verlängerung um jeweils mehr als ein Jahr unwirksam (Nr. 9).',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, um ein Streaming-Abonnement für Filme, Serien oder Musik zu beenden – insbesondere dann, wenn Sie einen schriftlichen Nachweis der Kündigung in der Hand haben möchten oder der Anbieter auf die Kündigung im Kundenkonto nicht reagiert.',
    deadline:
      'Streaming-Abos laufen meist monatlich und sind dann zum Ende des jeweiligen Abrechnungszeitraums kündbar; bei Jahresabos gilt die vereinbarte Mindestlaufzeit. Wurde der Vertrag ab dem 1. März 2022 geschlossen, darf er sich nach einer Mindestlaufzeit nicht mehr automatisch um ein weiteres Jahr verlängern, sondern läuft unbefristet weiter und ist mit einer Frist von einem Monat kündbar. Wenn Sie Ihre Laufzeit nicht kennen, nutzen Sie die Formulierung „zum nächstmöglichen Zeitpunkt“.',
    legal:
      'Für online abgeschlossene Dauerverträge muss der Anbieter eine Kündigungsschaltfläche bereitstellen, die eindeutig beschriftet ist und zu einer Bestätigungsseite führt (§ 312k BGB). Fehlt dieser Kündigungsbutton, kann sich das zu Ihren Gunsten auf die Kündigungsmöglichkeiten auswirken. Unabhängig davon begrenzt § 309 Nr. 9 BGB in Allgemeinen Geschäftsbedingungen die zulässige Laufzeit und die stillschweigende Verlängerung von Dauerschuldverhältnissen.',
  },
  faq: [
    {
      q: 'Muss ich über den Kündigungsbutton kündigen?',
      a: 'Nein, der Kündigungsbutton ist ein zusätzlicher Weg, den der Anbieter Ihnen anbieten muss (§ 312k BGB) – er schließt eine Kündigung per Brief oder E-Mail nicht aus. Praktisch ist die Kombination am sichersten: über den Button kündigen und das schriftliche Musterschreiben als Nachweis nachschicken.',
    },
    {
      q: 'Der Anbieter hat gar keinen Kündigungsbutton – was bedeutet das?',
      a: 'Ermöglicht ein Anbieter den Vertragsschluss online, muss er die Kündigungsschaltfläche vorhalten. Fehlt sie, verstößt er gegen § 312k BGB. Das kann sich zu Ihren Gunsten auf die Kündigungsmöglichkeiten auswirken – kündigen Sie in diesem Fall schriftlich und dokumentieren Sie den Zugang.',
    },
    {
      q: 'Wie weise ich nach, dass ich gekündigt habe?',
      a: 'Bewahren Sie die Bestätigung auf, die Ihnen der Anbieter nach einer Kündigung über den Button zusenden muss. Beim Postweg empfiehlt sich ein Einwurf-Einschreiben; bei einer Kündigung per E-Mail sichern Sie die gesendete Nachricht. Das Musterschreiben fordert die Bestätigung in Textform ausdrücklich an.',
    },
    {
      q: 'Kann sich mein Jahresabo automatisch um ein Jahr verlängern?',
      a: 'Bei Verträgen, die ab dem 1. März 2022 geschlossen wurden, nicht mehr: Nach Ablauf der Mindestlaufzeit läuft der Vertrag unbefristet weiter und ist mit einer Frist von einem Monat kündbar. Bei älteren Verträgen war eine Verlängerung um bis zu einem Jahr zulässig; die Grenzen für Laufzeitklauseln in AGB ergeben sich aus § 309 Nr. 9 BGB.',
    },
    {
      q: 'Bekomme ich bereits gezahlte Beiträge zurück?',
      a: 'Für die bereits bezahlte Laufzeit in der Regel nicht – der Vertrag endet zum nächsten zulässigen Termin, und bis dahin können Sie den Dienst weiter nutzen. Anders liegt es, wenn Sie ein Widerrufsrecht ausüben oder der Anbieter die Leistung nicht vertragsgemäß erbracht hat.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
