import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de / dejure.org on
 * 2026-07-12. Correct legal term is "Einspruch" (§ 67 OWiG), not
 * "Widerspruch" – the copy mentions the colloquial term once because both
 * are searched.
 */
const config: GeneratorConfig = {
  slug: 'einspruch-bussgeldbescheid',
  category: 'behoerden',
  categoryLabel: 'Behörden & Widersprüche',
  h1: 'Einspruch gegen Bußgeldbescheid: Muster zum Ausfüllen',
  metaTitle: 'Einspruch Bußgeldbescheid: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Einspruch gegen den Bußgeldbescheid einlegen: Schreiben online ausfüllen, drucken oder als PDF speichern – kostenlos, mit der 2-Wochen-Frist.',
  intro:
    'Mit diesem Generator erstellen Sie ein fristgerechtes Einspruchsschreiben gegen Ihren Bußgeldbescheid – direkt im Browser, ohne Anmeldung. Umgangssprachlich wird dieses Schreiben oft auch „Widerspruch gegen den Bußgeldbescheid“ genannt, rechtlich korrekt ist jedoch der Begriff Einspruch.',
  fields: [
    {
      id: 'aktenzeichen',
      label: 'Aktenzeichen des Bußgeldbescheids',
      type: 'text',
      required: true,
      hint: 'Steht auf der ersten Seite des Bescheids, meist oben rechts.',
      example: 'OWi-123456-78/26',
    },
    {
      id: 'datumBescheid',
      label: 'Datum des Bescheids',
      type: 'date',
      required: true,
      hint: 'Ausstellungsdatum, wie es auf dem Bescheid vermerkt ist.',
      example: '01.07.2026',
    },
    {
      id: 'begruendung',
      label: 'Begründung (optional)',
      type: 'textarea',
      required: false,
      hint: 'Freiwillig: Eine Begründung ist für die Wirksamkeit des Einspruchs nicht erforderlich und kann bis zur gerichtlichen Entscheidung nachgereicht werden. Lassen Sie dieses Feld leer, wenn Sie sie später nachreichen möchten.',
      example: 'Die Messung erfolgte nach meiner Kenntnis mit einem nicht ordnungsgemäß geeichten Gerät.',
    },
  ],
  subjectTemplate:
    'Einspruch gegen den Bußgeldbescheid vom {{datumBescheid}} – Aktenzeichen {{aktenzeichen}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

gegen den Bußgeldbescheid vom {{datumBescheid}}, Aktenzeichen {{aktenzeichen}}, lege ich hiermit gemäß § 67 Abs. 1 OWiG form- und fristgerecht Einspruch ein.

Zur Begründung führe ich Folgendes aus: {{begruendung}}

Eine weitergehende Begründung behalte ich mir vor und reiche sie gegebenenfalls gesondert nach.

Bitte bestätigen Sie mir den Eingang dieses Einspruchs schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 67 OWiG',
      url: 'https://www.gesetze-im-internet.de/owig_1968/__67.html',
      note: 'Der Einspruch gegen einen Bußgeldbescheid ist innerhalb von zwei Wochen nach Zustellung schriftlich oder zur Niederschrift bei der Behörde einzulegen, die den Bescheid erlassen hat; er kann auf bestimmte Punkte beschränkt werden.',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie sich gegen einen Bußgeldbescheid wehren möchten – etwa weil Sie die Messung, die Fahrereigenschaft oder Verfahrensfehler bezweifeln. Der Einspruch muss bei der Behörde eingehen, die den Bescheid erlassen hat, nicht beim Gericht.',
    deadline:
      'Die Einspruchsfrist beträgt zwei Wochen ab Zustellung des Bescheids (§ 67 Abs. 1 OWiG) – maßgeblich ist der Tag der Zustellung, nicht das Ausstellungsdatum. Versäumen Sie die Frist, wird der Bescheid rechtskräftig; eine Wiedereinsetzung in den vorigen Stand kommt nur in engen Ausnahmefällen in Betracht.',
    legal:
      'Rechtsgrundlage ist § 67 OWiG: Der Einspruch ist schriftlich oder zur Niederschrift bei der erlassenden Verwaltungsbehörde einzulegen. Er kann sich gegen den gesamten Bescheid richten oder auf einzelne Punkte beschränkt werden (§ 67 Abs. 2 OWiG), etwa nur gegen die Höhe der Geldbuße. Eine Begründung ist nicht zwingend erforderlich, erleichtert der Behörde aber die Prüfung.',
  },
  faq: [
    {
      q: 'Heißt es Einspruch oder Widerspruch gegen den Bußgeldbescheid?',
      a: 'Rechtlich korrekt ist „Einspruch“ nach § 67 OWiG. Im Alltag wird häufig auch von „Widerspruch“ gesprochen – gemeint ist aber dasselbe Schreiben.',
    },
    {
      q: 'Wie viel Zeit habe ich für den Einspruch?',
      a: 'Zwei Wochen ab Zustellung des Bescheids (§ 67 Abs. 1 OWiG). Zählen Sie ab dem Tag, an dem Sie den Bescheid tatsächlich erhalten haben, nicht ab dem Ausstellungsdatum.',
    },
    {
      q: 'Muss ich meinen Einspruch begründen?',
      a: 'Nein. Eine Begründung ist keine Wirksamkeitsvoraussetzung und kann bis zur Entscheidung nachgereicht werden. Ohne Begründung prüft die Behörde den Fall trotzdem vollständig.',
    },
    {
      q: 'An wen schicke ich den Einspruch?',
      a: 'An die Behörde, die den Bußgeldbescheid erlassen hat – das ist in der Regel die im Bescheid genannte Bußgeldstelle, nicht das Gericht. Adresse und Aktenzeichen finden Sie auf dem Bescheid.',
    },
    {
      q: 'Was passiert nach dem Einspruch?',
      a: 'Die Behörde prüft den Bescheid erneut. Hält sie am Vorwurf fest, gibt sie die Akte an die Staatsanwaltschaft ab, die sie dem zuständigen Amtsgericht zur Entscheidung vorlegt. Ohne Einspruch wird der Bescheid nach Fristablauf rechtskräftig.',
    },
  ],
  lastReviewed: '2026-07-12',
};

export default config;
