import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de on 2026-07-12.
 */
const config: GeneratorConfig = {
  slug: 'untermieterlaubnis-anfragen',
  category: 'mietrecht',
  categoryLabel: 'Mietrecht',
  h1: 'Erlaubnis zur Untervermietung: Muster zum Ausfüllen',
  metaTitle: 'Untervermietung Erlaubnis: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Erlaubnis zur Untervermietung beim Vermieter beantragen: Schreiben online ausfüllen und als PDF speichern – kostenlos, mit § 553 BGB im Blick.',
  intro:
    'Mit diesem Generator beantragen Sie bei Ihrem Vermieter die Erlaubnis, einen Teil Ihrer Wohnung unterzuvermieten – als fertiges Schreiben zum Ausfüllen, direkt im Browser.',
  fields: [
    {
      id: 'untermieterName',
      label: 'Name der Person, die einziehen soll',
      type: 'text',
      required: true,
      hint: 'Name des Dritten, dem Sie einen Teil der Wohnung überlassen möchten.',
      example: 'Max Mustermann',
    },
    {
      id: 'grundBeschreibung',
      label: 'Ihr Interesse an der Untervermietung',
      type: 'textarea',
      required: true,
      hint: 'Beschreiben Sie kurz, warum das Interesse an der Untervermietung erst nach Vertragsschluss entstanden ist.',
      example: 'Beruflich bedingter Auslandsaufenthalt von sechs Monaten; ich möchte die Wohnung in dieser Zeit nicht leer stehen lassen.',
    },
    {
      id: 'untervermieteterBereich',
      label: 'Welcher Wohnungsteil wird überlassen?',
      type: 'text',
      required: true,
      hint: 'Beschreiben Sie den Teil der Wohnung, den Sie untervermieten möchten.',
      example: 'ein Zimmer (ca. 14 m²) meiner 3-Zimmer-Wohnung',
    },
    {
      id: 'zeitraum',
      label: 'Geplanter Zeitraum',
      type: 'text',
      required: true,
      hint: 'Zeitraum der geplanten Untervermietung.',
      example: '01.09.2026 bis 28.02.2027',
    },
    {
      id: 'antwortFrist',
      label: 'Frist zur Rückmeldung',
      type: 'text',
      required: true,
      hint: 'Angemessene Frist, innerhalb derer Sie eine Rückmeldung des Vermieters erwarten.',
      example: '2 Wochen',
    },
  ],
  subjectTemplate: 'Antrag auf Erlaubnis zur Untervermietung',
  bodyTemplate: `Sehr geehrte Damen und Herren,

seit Abschluss unseres Mietvertrags ist bei mir ein berechtigtes Interesse entstanden, einen Teil der von mir gemieteten Wohnung an einen Dritten zum Gebrauch zu überlassen:

{{grundBeschreibung}}

Konkret beabsichtige ich, {{untervermieteterBereich}} im Zeitraum {{zeitraum}} an {{untermieterName}} unterzuvermieten.

Gemäß § 553 Abs. 1 BGB bitte ich Sie um Ihre Erlaubnis zu dieser Untervermietung. Für Rückfragen zur Person des künftigen Untermieters oder zu den Einzelheiten stehe ich Ihnen gerne zur Verfügung.

Ich bitte um eine schriftliche Rückmeldung innerhalb von {{antwortFrist}}.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 553 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__553.html',
      note: 'Entsteht für den Mieter nach Vertragsschluss ein berechtigtes Interesse, einen Teil der Wohnung einem Dritten zu überlassen, kann er vom Vermieter die Erlaubnis verlangen (Abs. 1) – außer bei einem wichtigen Grund in der Person des Dritten, Überbelegung oder sonstiger Unzumutbarkeit. Der Vermieter darf die Erlaubnis von einer angemessenen Mieterhöhung abhängig machen, wenn ihm die Überlassung sonst nicht zumutbar ist (Abs. 2). Abweichende Vereinbarungen zum Nachteil des Mieters sind unwirksam (Abs. 3).',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie einen Teil Ihrer Mietwohnung – etwa ein einzelnes Zimmer – an einen Dritten überlassen möchten, zum Beispiel wegen eines befristeten Auslandsaufenthalts, aus finanziellen Gründen oder weil ein Partner einziehen soll. Es fragt förmlich bei Ihrem Vermieter nach der hierfür erforderlichen Erlaubnis an.',
    legal:
      'Ist nach Abschluss Ihres Mietvertrags ein berechtigtes Interesse an der teilweisen Untervermietung entstanden, haben Sie nach § 553 Abs. 1 BGB grundsätzlich einen Anspruch auf Erlaubnis. Der Vermieter kann ablehnen, wenn ein wichtiger Grund in der Person des Dritten vorliegt, die Wohnung übermäßig belegt würde oder ihm die Überlassung aus sonstigen Gründen nicht zumutbar ist. Ist ihm die Überlassung nur bei einer angemessenen Erhöhung der Miete zuzumuten, kann er die Erlaubnis von Ihrem Einverständnis mit der Erhöhung abhängig machen (§ 553 Abs. 2 BGB). Ob im Einzelfall ein berechtigtes Interesse vorliegt und die Erlaubnis erteilt werden muss, hängt von den konkreten Umständen ab.',
  },
  faq: [
    {
      q: 'Habe ich einen Rechtsanspruch auf Erlaubnis zur Untervermietung?',
      a: 'Grundsätzlich ja, wenn nach Abschluss Ihres Mietvertrags ein berechtigtes Interesse an der teilweisen Untervermietung entstanden ist (§ 553 Abs. 1 BGB). Der Vermieter darf die Erlaubnis nur aus den im Gesetz genannten Gründen verweigern.',
    },
    {
      q: 'Was zählt als „berechtigtes Interesse“?',
      a: 'Anerkannt sind zum Beispiel ein längerer Auslandsaufenthalt, finanzielle Gründe oder der Wunsch, mit einem Partner zusammenzuziehen. Entscheidend ist, dass das Interesse erst nach Vertragsschluss entstanden ist – ob es im Einzelfall ausreicht, hängt von den konkreten Umständen ab.',
    },
    {
      q: 'Darf der Vermieter die Erlaubnis von einer Mieterhöhung abhängig machen?',
      a: 'Ja, wenn ihm die Überlassung nur bei einer angemessenen Erhöhung der Miete zuzumuten ist, kann er die Erlaubnis nach § 553 Abs. 2 BGB von Ihrer Zustimmung zu dieser Erhöhung abhängig machen.',
    },
    {
      q: 'Wann darf der Vermieter die Erlaubnis verweigern?',
      a: 'Insbesondere bei einem wichtigen Grund in der Person des Dritten, bei übermäßiger Belegung der Wohnung oder wenn ihm die Überlassung aus sonstigen Gründen nicht zugemutet werden kann (§ 553 Abs. 1 Satz 2 BGB).',
    },
    {
      q: 'Was passiert, wenn ich ohne Erlaubnis untervermiete?',
      a: 'Eine Untervermietung ohne die erforderliche Erlaubnis gilt als vertragswidriger Gebrauch und kann im Einzelfall eine Abmahnung oder Kündigung durch den Vermieter nach sich ziehen. Um dieses Risiko zu vermeiden, sollten Sie die Erlaubnis vorab einholen und sich schriftlich bestätigen lassen.',
    },
  ],
  lastReviewed: '2026-07-12',
};

export default config;
