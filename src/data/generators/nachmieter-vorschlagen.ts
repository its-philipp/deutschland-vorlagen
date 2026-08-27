import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de am 2026-07-12.
 */
const config: GeneratorConfig = {
  slug: 'nachmieter-vorschlagen',
  category: 'mietrecht',
  categoryLabel: 'Mietrecht',
  h1: 'Nachmieter vorschlagen: Muster zum Ausfüllen',
  metaTitle: 'Nachmieter stellen: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Nachmieter vorschlagen und um vorzeitige Vertragsaufhebung bitten: Schreiben online ausfüllen und drucken – kostenlos und rechtlich eingeordnet.',
  intro:
    'Mit diesem Generator bitten Sie Ihren Vermieter um eine einvernehmliche vorzeitige Auflösung Ihres Mietvertrags und schlagen dafür einen Nachmieter vor – als fertiges Schreiben zum Ausfüllen, direkt im Browser.',
  fields: [
    {
      id: 'wunschtermin',
      label: 'Gewünschtes Vertragsende',
      type: 'date',
      required: true,
      hint: 'Datum, zu dem Sie aus dem Mietvertrag entlassen werden möchten.',
      example: '30.09.2026',
    },
    {
      id: 'grund',
      label: 'Grund für den vorzeitigen Auszug',
      type: 'textarea',
      required: true,
      hint: 'Beschreiben Sie kurz, warum Sie vorzeitig ausziehen möchten.',
      example: 'Berufliche Versetzung in eine andere Stadt zum 1. Oktober 2026.',
    },
    {
      id: 'nachmieterKontakt',
      label: 'Vorschlag für Nachmieter (freiwillig)',
      type: 'textarea',
      required: false,
      hint: 'Optional: Formulieren Sie einen vollständigen Satz mit Name und Kontaktdaten der vorgeschlagenen Person, damit er sich in den Brief einfügt.',
      example: 'Als Nachmieterin schlage ich Frau Anna Beispiel vor, erreichbar unter anna.beispiel@beispiel.de oder 0151 23456789.',
    },
  ],
  subjectTemplate: 'Bitte um vorzeitige Aufhebung des Mietvertrags zum {{wunschtermin}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

ich möchte die von mir gemietete Wohnung gerne bereits zum {{wunschtermin}} verlassen, obwohl die reguläre Kündigungsfrist zu diesem Zeitpunkt noch nicht abgelaufen wäre. Ich bitte Sie daher um eine einvernehmliche vorzeitige Aufhebung unseres Mietvertrags zu diesem Termin.

Grund für meinen Wunsch nach einem vorzeitigen Auszug: {{grund}}

Um Ihnen den Übergang zu erleichtern, biete ich an, geeignete Nachmieter vorzuschlagen, die bereit wären, den Mietvertrag zu den bisherigen Konditionen zu übernehmen.

{{nachmieterKontakt}}

Ich bin mir bewusst, dass hierauf kein Rechtsanspruch besteht, und bitte Sie um eine kurze Rückmeldung, ob Sie diesem Vorschlag zustimmen können oder welche Voraussetzungen aus Ihrer Sicht erfüllt sein müssten.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 242 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__242.html',
      note: 'Grundsatz von Treu und Glauben. Nach der Rechtsprechung kann sich hieraus in eng begrenzten Ausnahmefällen („Härtefälle“) eine Pflicht des Vermieters ergeben, den Mieter bei Stellung eines geeigneten Nachmieters vorzeitig aus dem Mietvertrag zu entlassen – vorausgesetzt, das Interesse des Mieters an der Auflösung überwiegt das Interesse des Vermieters am Fortbestand ganz erheblich. Ein allgemeiner Anspruch besteht nicht.',
    },
  ],
  explainer: {
    whenHeading: 'Wann hilft ein Nachmieter-Vorschlag?',
    legalHeading: 'Was der Vermieter beim Nachmieter darf',
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie aus einem laufenden Mietvertrag früher aussteigen möchten, als es die reguläre Kündigungsfrist erlauben würde – etwa wegen eines kurzfristigen Umzugs oder Jobwechsels – und dem Vermieter dafür anbieten, einen Nachmieter zu vermitteln.',
    legal:
      'Grundsätzlich haben Sie als Mieter keinen Anspruch darauf, vorzeitig aus dem Mietvertrag entlassen zu werden, nur weil Sie einen Nachmieter stellen – das verbreitete Gerücht, drei geeignete Nachmieter würden automatisch reichen, ist ein Mythos und hat keine gesetzliche Grundlage. Eine vorzeitige Vertragsauflösung ist regelmäßig nur möglich, wenn Ihr Mietvertrag eine ausdrückliche Nachmieterklausel enthält oder wenn nach den Grundsätzen von Treu und Glauben (§ 242 BGB) ausnahmsweise ein Härtefall vorliegt – etwa wenn Ihr Interesse an der vorzeitigen Auflösung das Interesse des Vermieters am Fortbestand des Vertrags ganz erheblich überwiegt. Die Rechtsprechung erkennt solche Härtefälle nur eng begrenzt an. Ohne eine solche Klausel oder einen anerkannten Härtefall ist der Vermieter nicht verpflichtet, Ihrem Wunsch zuzustimmen; dieses Schreiben ist deshalb bewusst als höfliche Bitte um eine einvernehmliche Lösung formuliert, nicht als rechtliche Forderung.',
  },
  faq: [
    {
      q: 'Habe ich einen Anspruch auf vorzeitige Entlassung aus dem Mietvertrag, wenn ich einen Nachmieter stelle?',
      a: 'Nein, grundsätzlich nicht. Ein allgemeines Recht, sich durch die Benennung von Nachmietern vorzeitig aus dem Mietvertrag zu lösen, sieht das Gesetz nicht vor – das verbreitete Gerücht, drei geeignete Nachmieter würden automatisch reichen, ist ein Mythos. Der Vermieter kann Ihrem Vorschlag freiwillig zustimmen, muss es aber in der Regel nicht.',
    },
    {
      q: 'Wann bin ich ausnahmsweise doch berechtigt?',
      a: 'Zwei Ausnahmen sind anerkannt: erstens, wenn Ihr Mietvertrag eine ausdrückliche Nachmieterklausel enthält, und zweitens in besonderen Härtefällen nach den Grundsätzen von Treu und Glauben (§ 242 BGB), wenn Ihr Interesse an der Vertragsauflösung das Interesse des Vermieters ganz erheblich überwiegt. Die Rechtsprechung erkennt solche Härtefälle nur eng begrenzt an.',
    },
    {
      q: 'Muss ich den Nachmieter selbst finden?',
      a: 'Ja. Wenn Sie eine vorzeitige Entlassung erreichen möchten, liegt es an Ihnen, einen geeigneten und zumutbaren Ersatzmieter zu finden und dem Vermieter alle für die Entscheidung nötigen Informationen zur Verfügung zu stellen.',
    },
    {
      q: 'Was, wenn der Vermieter meinen Vorschlag ablehnt?',
      a: 'Lehnt der Vermieter ab, bleiben Sie grundsätzlich bis zum Ende der regulären Kündigungsfrist zur Zahlung der Miete verpflichtet – auch wenn Sie bereits ausgezogen sind. Prüfen Sie in diesem Fall, ob eine Untervermietung mit Erlaubnis des Vermieters infrage kommt, oder kündigen Sie fristgerecht.',
    },
    {
      q: 'Was sollte mein Nachmieter-Vorschlag enthalten?',
      a: 'Nennen Sie Name und Kontaktdaten der vorgeschlagenen Person und weisen Sie auf deren grundsätzliche Bereitschaft hin, den Mietvertrag zu den bisherigen Konditionen zu übernehmen. Der Vermieter wird in der Regel zusätzliche Informationen wie Bonität oder persönliche Referenzen prüfen wollen.',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
