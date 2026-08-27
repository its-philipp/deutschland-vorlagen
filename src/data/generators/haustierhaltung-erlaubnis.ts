import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de und der Pressemitteilung
 * des Bundesgerichtshofs auf bundesgerichtshof.de am 2026-07-12.
 */
const config: GeneratorConfig = {
  slug: 'haustierhaltung-erlaubnis',
  category: 'mietrecht',
  categoryLabel: 'Mietrecht',
  h1: 'Erlaubnis zur Haustierhaltung: Muster zum Ausfüllen',
  metaTitle: 'Haustierhaltung Erlaubnis: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Erlaubnis zur Haustierhaltung beim Vermieter beantragen: Schreiben online ausfüllen und als PDF speichern – kostenlos, mit § 535 BGB und BGH-Urteil.',
  intro:
    'Mit diesem Generator beantragen Sie bei Ihrem Vermieter die Erlaubnis, ein Haustier wie einen Hund oder eine Katze in Ihrer Mietwohnung zu halten – als fertiges Schreiben zum Ausfüllen, direkt im Browser.',
  fields: [
    {
      id: 'tierart',
      label: 'Tierart und Rasse',
      type: 'text',
      required: true,
      hint: 'Art des Tieres und, sofern vorhanden, die Rasse.',
      example: 'Hund, Labrador-Mischling',
    },
    {
      id: 'anzahl',
      label: 'Anzahl der Tiere',
      type: 'number',
      required: true,
      hint: 'Wie viele Tiere dieser Art möchten Sie halten?',
      example: '1',
    },
    {
      id: 'beschreibung',
      label: 'Kurze Beschreibung (Größe, Verhalten)',
      type: 'textarea',
      required: true,
      hint: 'Beschreiben Sie Größe und Wesen des Tieres, damit der Vermieter die Situation einschätzen kann.',
      example: 'Ausgewachsen ca. 45 cm Schulterhöhe, ruhiges und verträgliches Wesen, stubenrein, wird an der Leine geführt.',
    },
    {
      id: 'referenzen',
      label: 'Bisherige Haltung / Referenzen (freiwillig)',
      type: 'textarea',
      required: false,
      hint: 'Optional: Hinweise auf eine bisherige unauffällige Haltung, z. B. beim vorherigen Vermieter.',
      example: 'Das Tier wurde bereits zwei Jahre in einer Mietwohnung ohne Beanstandungen gehalten; Referenz auf Anfrage.',
    },
  ],
  subjectTemplate: 'Antrag auf Erlaubnis zur Haustierhaltung ({{tierart}})',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit beantrage ich Ihre Erlaubnis, in der von mir gemieteten Wohnung folgendes Tier zu halten: {{tierart}}, Anzahl: {{anzahl}}.

{{beschreibung}}

{{referenzen}}

Nach der Rechtsprechung des Bundesgerichtshofs ist im Rahmen einer umfassenden Interessenabwägung im Einzelfall zu beurteilen, ob die Haltung eines solchen Tieres zum vertragsgemäßen Gebrauch der Wohnung gehört; ein pauschales Verbot ist unwirksam. Ich bitte Sie daher um Prüfung und um eine schriftliche Rückmeldung, ob aus Ihrer Sicht Gründe gegen die Haltung dieses Tieres sprechen.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 535 Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__535.html',
      note: 'Der Vermieter ist verpflichtet, dem Mieter den vertragsgemäßen Gebrauch der Mietsache zu gewähren und diesen während der Mietzeit zu erhalten. Ob die Haltung eines Haustiers zum vertragsgemäßen Gebrauch gehört, ist im Einzelfall zu klären.',
    },
    {
      ref: 'BGH, Urteil vom 20.03.2013, VIII ZR 168/12',
      url: 'https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2013/2013047.html',
      note: 'Eine formularvertragliche Klausel, die dem Mieter die Haltung von Hunden und Katzen generell und ausnahmslos verbietet, ist unwirksam (§ 307 Abs. 1 Satz 1, Abs. 2 Nr. 1 BGB). Ob Tierhaltung im Einzelfall vom vertragsgemäßen Gebrauch umfasst ist, erfordert stattdessen eine umfassende Abwägung der Interessen aller Beteiligten.',
    },
  ],
  explainer: {
    whenHeading: 'Wann müssen Sie überhaupt fragen?',
    legalHeading: 'Was der Vermieter beim Haustier entscheiden darf',
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie in Ihrer Mietwohnung ein Tier halten möchten, für das die Erlaubnis des Vermieters erforderlich ist – etwa einen Hund oder eine Katze. Für gängige Kleintiere wie Hamster, Meerschweinchen, Zierfische oder Ziervögel benötigen Sie dagegen grundsätzlich keine Erlaubnis, da deren Haltung zum vertragsgemäßen Gebrauch der Wohnung zählt.',
    legal:
      'Der Vermieter muss dem Mieter den vertragsgemäßen Gebrauch der Mietsache ermöglichen (§ 535 Abs. 1 BGB). Ob die Haltung eines bestimmten Haustieres dazu gehört, ist nach der Rechtsprechung des Bundesgerichtshofs im Einzelfall durch eine umfassende Abwägung der Interessen von Mieter, Vermieter und anderen Hausbewohnern zu klären; eine Klausel, die Hunde- und Katzenhaltung im Mietvertrag pauschal und ausnahmslos verbietet, ist unwirksam (BGH, Urteil vom 20.03.2013, VIII ZR 168/12). Kleintiere wie Hamster, Meerschweinchen, Zierfische oder Ziervögel in angemessener Zahl darf der Vermieter dagegen generell nicht verbieten, da ihre Haltung typischerweise keine Beeinträchtigung darstellt. Bei größeren oder potenziell gefährlichen Tieren behält sich der Vermieter regelmäßig eine Einzelfallprüfung vor.',
  },
  faq: [
    {
      q: 'Brauche ich für jedes Haustier eine Erlaubnis?',
      a: 'Nein. Für gängige Kleintiere wie Hamster, Meerschweinchen, Zierfische oder Ziervögel in angemessener Anzahl benötigen Sie keine Erlaubnis des Vermieters; ihre Haltung zählt zum vertragsgemäßen Gebrauch der Wohnung. Bei Hunden, Katzen oder anderen größeren Tieren sollten Sie dagegen vorab die Zustimmung einholen.',
    },
    {
      q: 'Darf mein Vermieter Hunde und Katzen im Mietvertrag generell verbieten?',
      a: 'Nein. Der Bundesgerichtshof hat entschieden, dass eine formularvertragliche Klausel, die Hunde- und Katzenhaltung pauschal verbietet, unwirksam ist (BGH, Urteil vom 20.03.2013, VIII ZR 168/12). Stattdessen ist im Einzelfall abzuwägen, ob die Tierhaltung zumutbar ist.',
    },
    {
      q: 'Welche Kriterien spielen bei der Abwägung eine Rolle?',
      a: 'Berücksichtigt werden unter anderem Art, Größe und Verhalten des Tieres, die Wohnsituation, mögliche Beeinträchtigungen von Nachbarn sowie schutzwürdige Interessen anderer Hausbewohner. Deshalb hilft eine möglichst genaue Beschreibung des Tieres in Ihrem Antrag.',
    },
    {
      q: 'Was, wenn der Vermieter nicht antwortet?',
      a: 'Reagiert der Vermieter nicht, sollten Sie schriftlich nachfassen und eine angemessene Frist zur Rückmeldung setzen. Dokumentieren Sie die Kommunikation, falls es später zu einer Meinungsverschiedenheit über die Tierhaltung kommt.',
    },
    {
      q: 'Kann der Vermieter eine erteilte Erlaubnis nachträglich zurücknehmen?',
      a: 'Eine einmal erteilte Erlaubnis kann der Vermieter nicht ohne Weiteres zurücknehmen. Kommt es durch das Tier jedoch zu konkreten Beeinträchtigungen, etwa erheblichem Lärm oder Beschädigungen, kann dies im Einzelfall anders zu beurteilen sein.',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
