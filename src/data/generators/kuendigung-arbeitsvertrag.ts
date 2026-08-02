import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified via dejure.org / WebSearch secondary sources on
 * 2026-07-12 (gesetze-im-internet.de 403-blocks this environment's proxy,
 * see MEMORY.md; canonical URLs used below follow the site's standard
 * pattern). Core point of this generator: the printed, hand-signed letter
 * is not a stylistic choice but a legal requirement (§ 623 BGB) — e-mail,
 * fax, WhatsApp etc. are void for employment terminations. This is stated
 * explicitly in intro + explainer.legal, not just in the FAQ.
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-arbeitsvertrag',
  category: 'arbeit',
  categoryLabel: 'Arbeit & Beruf',
  h1: 'Kündigung Arbeitsvertrag: Muster für Arbeitnehmer zum Ausfüllen',
  metaTitle: 'Kündigung Arbeitsvertrag: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Arbeitsvertrag als Arbeitnehmer kündigen: Schreiben nach § 622, § 623 BGB ausfüllen, ausdrucken oder als PDF speichern – kostenlos, ohne Anmeldung.',
  intro:
    'Mit diesem Generator erstellen Sie Ihre ordentliche Kündigung des Arbeitsvertrags als Arbeitnehmerin oder Arbeitnehmer – als ausdruckfertiges Schreiben mit Platz für Ihre handschriftliche Unterschrift, wie es das Gesetz zwingend verlangt (§ 623 BGB). Eine Kündigung per E-Mail, Fax oder Messenger ist unwirksam; genau dafür ist dieser Generator gedacht.',
  fields: [
    {
      id: 'position',
      label: 'Ihre Position / Berufsbezeichnung',
      type: 'text',
      required: true,
      hint: 'Wie im Arbeitsvertrag bezeichnet.',
      example: 'Sachbearbeiterin Einkauf',
    },
    {
      id: 'kuendigungstermin',
      label: 'Kündigung zum',
      type: 'text',
      required: true,
      hint: 'Konkretes Datum oder „zum nächstmöglichen Zeitpunkt“ – prüfen Sie vorher die Frist in Ihrem Arbeits- oder Tarifvertrag.',
      example: 'zum 31.08.2026',
    },
    {
      id: 'personalnummer',
      label: 'Personal- oder Mitarbeiternummer (optional)',
      type: 'text',
      required: false,
      hint: 'Falls vorhanden – erleichtert die Zuordnung in der Personalabteilung.',
      example: 'PN-45231',
    },
  ],
  subjectTemplate: 'Kündigung meines Arbeitsverhältnisses als {{position}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich mein Arbeitsverhältnis als {{position}} bei Ihrem Unternehmen ordentlich und fristgerecht {{kuendigungstermin}}.

Meine Personalnummer lautet {{personalnummer}}.

Sollte die Kündigung zu dem genannten Termin aus rechtlichen Gründen nicht wirksam werden können, kündige ich hilfsweise zum nächstmöglichen zulässigen Zeitpunkt.

Ich bitte Sie, mir den Erhalt dieser Kündigung sowie das sich daraus ergebende Beendigungsdatum schriftlich zu bestätigen. Zugleich bitte ich um eine ordnungsgemäße Abrechnung meines noch offenen Urlaubsanspruchs sowie um Ausstellung eines qualifizierten Arbeitszeugnisses zum Ende des Arbeitsverhältnisses.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 622 Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__622.html',
      note: 'Gesetzliche Grundkündigungsfrist: Das Arbeitsverhältnis kann mit einer Frist von vier Wochen zum 15. oder zum Ende eines Kalendermonats gekündigt werden. Diese Frist gilt für Arbeitnehmerkündigungen, sofern Arbeits- oder Tarifvertrag nichts anderes bestimmen.',
    },
    {
      ref: '§ 623 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__623.html',
      note: 'Kündigungen von Arbeitsverhältnissen bedürfen zu ihrer Wirksamkeit der Schriftform (eigenhändige Unterschrift); die elektronische Form ist ausdrücklich ausgeschlossen. E-Mail, Fax, SMS oder Messenger-Nachrichten sind damit unwirksam.',
    },
    {
      ref: '§ 109 GewO',
      url: 'https://www.gesetze-im-internet.de/gewo/__109.html',
      note: 'Bei Beendigung des Arbeitsverhältnisses besteht Anspruch auf ein schriftliches Zeugnis; auf Verlangen erstreckt es sich zusätzlich auf Leistung und Verhalten (qualifiziertes Zeugnis).',
    },
    {
      ref: '§ 7 Abs. 4 BUrlG',
      url: 'https://www.gesetze-im-internet.de/burlg/__7.html',
      note: 'Kann der Urlaub wegen der Beendigung des Arbeitsverhältnisses ganz oder teilweise nicht mehr gewährt werden, ist er finanziell abzugelten.',
    },
  ],
  explainer: {
    when:
      'Diese Kündigung nutzen Sie, wenn Sie als Arbeitnehmerin oder Arbeitnehmer Ihr Arbeitsverhältnis ordentlich beenden möchten – unabhängig vom Grund. Sie eignet sich für unbefristete und befristete Verträge mit ordentlichem Kündigungsrecht, nicht für eine fristlose (außerordentliche) Kündigung aus wichtigem Grund. Mit der Kündigung entstehen zugleich weitere Ansprüche, etwa auf ein Arbeitszeugnis (§ 109 GewO) und auf Abgeltung von nicht genommenem Urlaub (§ 7 Abs. 4 BUrlG) – dieses Schreiben bittet Ihren Arbeitgeber bereits um beides.',
    deadline:
      'Ohne abweichende Regelung im Arbeits- oder Tarifvertrag gilt die gesetzliche Grundkündigungsfrist von vier Wochen zum 15. oder zum Ende eines Kalendermonats (§ 622 Abs. 1 BGB). Maßgeblich für den Fristbeginn ist der tatsächliche Zugang des Kündigungsschreibens beim Arbeitgeber, nicht das Datum auf dem Brief – prüfen Sie deshalb vorab, ob Ihr individueller Arbeits- oder Tarifvertrag eine längere Frist vorsieht.',
    legal:
      'Kündigungen von Arbeitsverhältnissen bedürfen zwingend der Schriftform: Das Schreiben muss ausgedruckt und eigenhändig unterschrieben werden; die elektronische Form ist ausdrücklich ausgeschlossen (§ 623 BGB), eine Kündigung per E-Mail, Fax oder SMS ist deshalb unwirksam. Genau für diesen unterschriftsreifen Ausdruck ist dieser Generator gedacht. Für die Kündigungsfrist gilt grundsätzlich § 622 Abs. 1 BGB, sofern Ihr Arbeits- oder Tarifvertrag keine abweichende Regelung enthält.',
  },
  faq: [
    {
      q: 'Muss ich für meine Kündigung einen Grund angeben?',
      a: 'Nein. Für die ordentliche Kündigung durch Arbeitnehmerinnen und Arbeitnehmer ist im deutschen Arbeitsrecht kein Kündigungsgrund erforderlich. Sie müssen lediglich die geltende Kündigungsfrist einhalten und das Schreiben formgerecht unterschreiben.',
    },
    {
      q: 'Welche Kündigungsfrist muss ich einhalten?',
      a: 'Ohne abweichende Regelung gilt die gesetzliche Grundkündigungsfrist von vier Wochen zum 15. oder zum Ende eines Kalendermonats (§ 622 Abs. 1 BGB). Ihr Arbeits- oder Tarifvertrag kann eine längere Frist vorsehen – prüfen Sie das vorab. Entscheidend für den Fristbeginn ist der tatsächliche Zugang beim Arbeitgeber.',
    },
    {
      q: 'Reicht eine Kündigung per E-Mail, Fax oder WhatsApp?',
      a: 'Nein. Kündigungen von Arbeitsverhältnissen bedürfen zwingend der Schriftform mit eigenhändiger Unterschrift; die elektronische Form ist gesetzlich ausgeschlossen (§ 623 BGB). Drucken Sie das Schreiben aus, unterschreiben Sie es handschriftlich und übergeben Sie es persönlich oder per Post.',
    },
    {
      q: 'Was unterscheidet die Kündigung von einem Aufhebungsvertrag?',
      a: 'Die Kündigung ist eine einseitige Erklärung – Sie benötigen keine Zustimmung des Arbeitgebers, müssen aber die Kündigungsfrist einhalten. Ein Aufhebungsvertrag beendet das Arbeitsverhältnis dagegen nur einvernehmlich, oft zu einem individuell vereinbarten Termin, erfordert aber die Zustimmung beider Seiten.',
    },
    {
      q: 'Habe ich nach der Kündigung Anspruch auf ein Arbeitszeugnis und auf Urlaubsabgeltung?',
      a: 'Ja. Sie können jederzeit ein schriftliches Zeugnis verlangen, auf Wunsch auch ein qualifiziertes mit Leistungs- und Verhaltensbeurteilung (§ 109 GewO). Urlaub, den Sie bis zum Ende des Arbeitsverhältnisses nicht mehr nehmen können, muss der Arbeitgeber finanziell abgelten (§ 7 Abs. 4 BUrlG).',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
