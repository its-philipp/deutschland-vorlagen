import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified via dejure.org / WebSearch secondary sources on
 * 2026-07-12 (gesetze-im-internet.de 403-blocks this environment's proxy,
 * see MEMORY.md; canonical URL used below follows the site's standard
 * pattern). The Zwischenzeugnis (during an ongoing employment) has no
 * explicit statutory basis — the explainer/FAQ say so honestly and frame
 * it as "anerkannt bei berechtigtem Interesse" rather than citing a § that
 * doesn't exist.
 */
const config: GeneratorConfig = {
  slug: 'arbeitszeugnis-anfordern',
  category: 'arbeit',
  categoryLabel: 'Arbeit & Beruf',
  h1: 'Arbeitszeugnis anfordern: Muster für Ihr Anschreiben',
  metaTitle: 'Arbeitszeugnis anfordern: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Arbeitszeugnis anfordern: Schreiben für einfaches, qualifiziertes oder Zwischenzeugnis ausfüllen, ausdrucken oder als PDF speichern – kostenlos.',
  intro:
    'Mit diesem Generator fordern Sie von Ihrem Arbeitgeber ein Arbeitszeugnis an – wahlweise als einfaches oder qualifiziertes Zeugnis, als Endzeugnis nach Vertragsende oder als Zwischenzeugnis während eines laufenden Arbeitsverhältnisses. Das fertige Schreiben erstellen Sie direkt im Browser, ohne Anmeldung.',
  fields: [
    {
      id: 'zeugnisart',
      label: 'Gewünschte Zeugnisart',
      type: 'select',
      required: true,
      hint: 'Ein qualifiziertes Zeugnis bewertet zusätzlich Leistung und Verhalten; ein Zwischenzeugnis erhalten Sie während eines noch laufenden Arbeitsverhältnisses.',
      options: [
        {
          value: 'eines einfachen Zeugnisses (Endzeugnis), das Art und Dauer meiner Tätigkeit bescheinigt',
          label: 'Einfaches Endzeugnis',
        },
        {
          value: 'eines qualifizierten Zeugnisses (Endzeugnis), das sich zusätzlich auf Leistung und Verhalten erstreckt',
          label: 'Qualifiziertes Endzeugnis',
        },
        {
          value: 'eines einfachen Zwischenzeugnisses, das Art und Dauer meiner bisherigen Tätigkeit bescheinigt',
          label: 'Einfaches Zwischenzeugnis',
        },
        {
          value: 'eines qualifizierten Zwischenzeugnisses, das sich zusätzlich auf Leistung und Verhalten erstreckt',
          label: 'Qualifiziertes Zwischenzeugnis',
        },
      ],
    },
    {
      id: 'position',
      label: 'Ihre Position / Berufsbezeichnung',
      type: 'text',
      required: true,
      hint: 'Wie im Arbeitsvertrag bezeichnet.',
      example: 'Teamleiterin Kundenservice',
    },
    {
      id: 'anlass',
      label: 'Anlass für das Zwischenzeugnis (optional)',
      type: 'textarea',
      required: false,
      hint: 'Nur bei einem Zwischenzeugnis sinnvoll, z. B. bevorstehender Vorgesetztenwechsel oder interne Versetzung. Formulieren Sie einen ganzen Satz; bei einem Endzeugnis lassen Sie das Feld leer.',
      example: 'Anlass ist der bevorstehende Wechsel meiner unmittelbaren Führungskraft.',
    },
    {
      id: 'wunschFrist',
      label: 'Gewünschter Zeitraum für die Übersendung (optional)',
      type: 'text',
      required: false,
      hint: 'Eine gesetzliche Frist für die Zeugniserstellung gibt es nicht; nennen Sie einen für Sie angemessenen Zeitraum.',
      example: 'innerhalb der nächsten drei Wochen',
    },
  ],
  subjectTemplate: 'Bitte um Ausstellung eines Arbeitszeugnisses',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit bitte ich Sie um die Ausstellung {{zeugnisart}}. Ich beziehe mich dabei auf meine Tätigkeit als {{position}} in Ihrem Unternehmen.

{{anlass}}

Ich bitte um eine klare, wohlwollende und wahrheitsgemäße Formulierung ohne verschlüsselte oder widersprüchliche Angaben, die eine andere als die wörtliche Aussage nahelegen (§ 109 Abs. 2 GewO).

Für die Übersendung wäre ich Ihnen {{wunschFrist}} dankbar.

Für Rückfragen zu den Einzelheiten meiner Tätigkeit stehe ich Ihnen gerne zur Verfügung.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 109 Abs. 1 GewO',
      url: 'https://www.gesetze-im-internet.de/gewo/__109.html',
      note: 'Bei Beendigung eines Arbeitsverhältnisses hat der Arbeitnehmer Anspruch auf ein schriftliches Zeugnis, das mindestens Art und Dauer der Tätigkeit umfasst (einfaches Zeugnis); auf Verlangen sind zusätzlich Leistung und Verhalten zu beurteilen (qualifiziertes Zeugnis).',
    },
    {
      ref: '§ 109 Abs. 2 GewO',
      url: 'https://www.gesetze-im-internet.de/gewo/__109.html',
      note: 'Das Zeugnis muss klar und verständlich formuliert sein; es darf keine Merkmale oder Formulierungen enthalten, die den Zweck haben, eine andere als die aus der äußeren Form oder dem Wortlaut ersichtliche Aussage über den Arbeitnehmer zu treffen (Verbot verschlüsselter Formulierungen).',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie ein Arbeitszeugnis von Ihrem Arbeitgeber anfordern möchten. Nach Beendigung des Arbeitsverhältnisses steht Ihnen ein Endzeugnis ohne weitere Voraussetzungen zu (§ 109 Abs. 1 GewO). Für ein Zwischenzeugnis während eines noch laufenden Arbeitsverhältnisses gibt es dagegen keine ausdrückliche gesetzliche Anspruchsgrundlage – es ist jedoch in Rechtsprechung und Praxis anerkannt, wenn ein berechtigtes Interesse besteht, etwa ein Vorgesetztenwechsel, eine interne Versetzung, eine bevorstehende Bewerbung oder eine längere Unterbrechung wie Elternzeit.',
    deadline:
      'Es gibt keine gesetzliche Frist, innerhalb derer Sie das Zeugnis anfordern müssen. Fordern Sie es trotzdem zeitnah nach Beendigung des Arbeitsverhältnisses an: Manche Arbeits- oder Tarifverträge enthalten Ausschlussfristen, die auch den Zeugnisanspruch nach wenigen Monaten verfallen lassen können, wenn Sie ihn nicht rechtzeitig schriftlich geltend machen.',
    legal:
      'Rechtsgrundlage ist § 109 GewO: Bei Beendigung des Arbeitsverhältnisses besteht Anspruch auf ein schriftliches Zeugnis, das mindestens Art und Dauer der Tätigkeit bescheinigt (einfaches Zeugnis); auf ausdrückliches Verlangen erstreckt es sich zusätzlich auf Leistung und Verhalten (qualifiziertes Zeugnis, § 109 Abs. 1 GewO). Das Zeugnis muss klar und verständlich formuliert sein und darf keine versteckten Merkmale oder Geheimcodes enthalten, die einen anderen als den wörtlichen Eindruck vermitteln sollen (§ 109 Abs. 2 GewO).',
  },
  faq: [
    {
      q: 'Was ist der Unterschied zwischen einfachem und qualifiziertem Zeugnis?',
      a: 'Ein einfaches Zeugnis nennt nur Art und Dauer Ihrer Tätigkeit. Ein qualifiziertes Zeugnis bewertet zusätzlich Ihre Leistung und Ihr Verhalten – dafür müssen Sie es ausdrücklich verlangen (§ 109 Abs. 1 GewO). Ohne diese Angabe erhalten Sie in der Regel nur das einfache Zeugnis.',
    },
    {
      q: 'Was ist ein Zwischenzeugnis und wann steht es mir zu?',
      a: 'Ein Zwischenzeugnis erhalten Sie während eines noch laufenden Arbeitsverhältnisses. Eine ausdrückliche gesetzliche Anspruchsgrundlage gibt es dafür nicht, in Rechtsprechung und Praxis ist es aber bei einem berechtigten Interesse anerkannt, etwa bei einem Vorgesetztenwechsel, einer internen Versetzung oder einer geplanten Bewerbung.',
    },
    {
      q: 'Darf mein Arbeitgeber versteckte Formulierungen oder einen Geheimcode verwenden?',
      a: 'Nein. Das Zeugnis muss klar und verständlich sein; Merkmale oder Formulierungen, die einen anderen als den wörtlichen Eindruck vermitteln sollen, sind ausdrücklich verboten (§ 109 Abs. 2 GewO). Bei Zweifeln an einzelnen Formulierungen können Sie eine Berichtigung verlangen.',
    },
    {
      q: 'Bis wann muss ich das Zeugnis anfordern?',
      a: 'Eine feste gesetzliche Frist gibt es nicht. Beachten Sie aber mögliche Ausschlussfristen in Ihrem Arbeits- oder Tarifvertrag, die Ansprüche aus dem Arbeitsverhältnis – auch den Zeugnisanspruch – bereits nach wenigen Monaten verfallen lassen können. Fordern Sie das Zeugnis deshalb zügig an.',
    },
    {
      q: 'Kann ich eine bestimmte Note oder Formulierung im Zeugnis verlangen?',
      a: 'Nicht direkt, aber das Zeugnis muss Ihre tatsächliche Leistung wahrheitsgemäß wiedergeben. Anerkannt ist zudem der sogenannte Wohlwollensgrundsatz: Die Formulierungen sollen Ihr weiteres berufliches Fortkommen nicht unnötig erschweren. Bei Uneinigkeit über einzelne Formulierungen können Sie eine Berichtigung verlangen.',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
