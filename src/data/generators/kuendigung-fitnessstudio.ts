import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Reference implementation of the config schema (backlog #10). Legal refs
 * verified against gesetze-im-internet.de on 2026-07-12; reviewer agent
 * re-checks § citations in the batch-2 review pass.
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-fitnessstudio',
  category: 'vertraege',
  categoryLabel: 'Verträge & Verbraucher',
  h1: 'Kündigung Fitnessstudio: Muster zum Ausfüllen',
  metaTitle: 'Kündigung Fitnessstudio: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Fitnessstudio-Vertrag kündigen: Kündigungsschreiben online ausfüllen und als PDF speichern – kostenlos, ohne Anmeldung, mit Fristen-Überblick.',
  intro:
    'Mit diesem Generator erstellen Sie in wenigen Minuten ein fertiges Kündigungsschreiben für Ihren Fitnessstudio-Vertrag – direkt im Browser, ohne Anmeldung.',
  fields: [
    {
      id: 'mitgliedsnummer',
      label: 'Mitglieds- oder Vertragsnummer',
      type: 'text',
      required: true,
      example: 'M-123456',
      hint: 'Steht auf Ihrem Vertrag oder auf der Beitragsabrechnung.',
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
    'Kündigung meines Mitgliedsvertrags – Mitgliedsnummer {{mitgliedsnummer}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich meinen Mitgliedsvertrag mit der Mitgliedsnummer {{mitgliedsnummer}} fristgerecht {{kuendigungstermin}}.

Sollte die Kündigung zu dem genannten Termin nicht möglich sein, gilt sie hilfsweise zum nächstmöglichen Zeitpunkt. Einer stillschweigenden Verlängerung des Vertrags widerspreche ich ausdrücklich.

Bitte bestätigen Sie mir den Zugang dieser Kündigung sowie das Datum der Vertragsbeendigung schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 309 Nr. 9 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__309.html',
      note: 'Begrenzt Laufzeitklauseln: Erstlaufzeit höchstens zwei Jahre; verlängert sich der Vertrag automatisch, dann nur auf unbestimmte Zeit mit einer Kündigungsfrist von höchstens einem Monat.',
    },
    {
      ref: '§ 312k BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__312k.html',
      note:
        'Kündigungsbutton: Online abgeschlossene Verträge müssen sich auch direkt über eine Schaltfläche auf der Website kündigen lassen. Ausgenommen sind Verträge, für deren Kündigung das Gesetz ausschließlich eine strengere Form als die Textform vorsieht, sowie Webseiten und Verträge, die Finanzdienstleistungen betreffen (Abs. 1 Satz 2) — für Bank- und Versicherungsverträge gilt die Pflicht also nicht.',
    },
  ],
  explainer: {
    whenHeading: 'Wann passt die Fitnessstudio-Kündigung?',
    deadlineHeading: 'Bis wann können Sie kündigen?',
    legalHeading: 'Was im Fitnessstudio-Vertrag gilt',
    when: 'Dieses Schreiben nutzen Sie, wenn Sie Ihren Fitnessstudio-Vertrag ordentlich kündigen möchten – zum Ende der Laufzeit oder, bei bereits verlängerten Verträgen, zum nächstmöglichen Termin. Für eine außerordentliche Kündigung (z. B. aus gesundheitlichen Gründen) sollten Sie das Schreiben um Ihre Begründung und Nachweise ergänzen.',
    deadline:
      'Für Verträge, die seit dem 1. März 2022 geschlossen wurden, gilt: Nach Ablauf der Erstlaufzeit verlängert sich der Vertrag nur noch auf unbestimmte Zeit und ist mit einer Frist von höchstens einem Monat kündbar (§ 309 Nr. 9 BGB). Bei älteren Verträgen gelten die vereinbarten Fristen – ein Blick in den Vertrag lohnt sich.',
    legal:
      'Die ordentliche Kündigung richtet sich nach Ihrem Vertrag und den gesetzlichen Grenzen für Laufzeitklauseln in § 309 Nr. 9 BGB. Wurde der Vertrag online abgeschlossen, muss das Studio zusätzlich eine Online-Kündigung über einen Kündigungsbutton anbieten (§ 312k BGB).',
  },
  faq: [
    {
      q: 'Welche Kündigungsfrist gilt für mein Fitnessstudio?',
      a: 'Maßgeblich ist zunächst Ihr Vertrag. Für Verträge ab dem 1. März 2022 darf die Kündigungsfrist höchstens einen Monat betragen; nach der Erstlaufzeit ist der Vertrag monatlich kündbar (§ 309 Nr. 9 BGB). Bei älteren Verträgen sind längere Fristen möglich.',
    },
    {
      q: 'Muss ich einen Kündigungsgrund angeben?',
      a: 'Nein. Für die ordentliche Kündigung zum Vertragsende oder zum nächstmöglichen Termin ist kein Grund erforderlich. Nur bei einer außerordentlichen (fristlosen) Kündigung müssen Sie einen wichtigen Grund darlegen.',
    },
    {
      q: 'Kann ich wegen eines Umzugs außerordentlich kündigen?',
      a: 'In der Regel nicht: Der Bundesgerichtshof hat entschieden, dass ein Umzug grundsätzlich kein wichtiger Grund für eine außerordentliche Kündigung eines Fitnessstudio-Vertrags ist (BGH, Urteil vom 4. Mai 2016, XII ZR 62/15). Prüfen Sie stattdessen die ordentliche Kündigung zum nächstmöglichen Termin.',
    },
    {
      q: 'Wie kündige ich, wenn ich den Vertrag online abgeschlossen habe?',
      a: 'Dann muss das Studio auf seiner Website einen Kündigungsbutton anbieten, über den Sie direkt online kündigen können (§ 312k BGB). Ein Kündigungsschreiben per Post oder E-Mail ist daneben weiterhin möglich – lassen Sie sich den Zugang in jedem Fall bestätigen.',
    },
  ],
  lastReviewed: '2026-07-12',
};

export default config;
