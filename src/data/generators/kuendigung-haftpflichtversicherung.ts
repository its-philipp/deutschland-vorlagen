import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01 against gesetze-im-internet.de (heading of
 * each cited § compared with the citation).
 *
 * Deliberately distinct from kuendigung-hausratversicherung despite the
 * shared statutory basis: different keyword, and the practically relevant
 * edge cases differ (Familienversicherung/Mitversicherung and the gap in
 * cover when switching, rather than Umzug and Unterversicherung).
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-haftpflichtversicherung',
  category: 'versicherung',
  categoryLabel: 'Versicherung & Bank',
  h1: 'Haftpflichtversicherung kündigen: Muster zum Ausfüllen',
  metaTitle:
    'Haftpflichtversicherung kündigen: Muster 2026 (Generator)',
  metaDescription:
    'Private Haftpflichtversicherung kündigen: Schreiben für ordentliche Kündigung oder Beitragserhöhung online ausfüllen und ausdrucken – kostenlos.',
  intro:
    'Mit diesem Generator kündigen Sie Ihre private Haftpflichtversicherung – ordentlich zum Ablauf des Versicherungsjahres oder per Sonderkündigung nach einer Beitragserhöhung.',
  fields: [
    {
      id: 'versicherungsscheinnummer',
      label: 'Versicherungsscheinnummer',
      type: 'text',
      required: true,
      hint: 'Steht auf Ihrem Versicherungsschein (Police) oder der Beitragsrechnung.',
      example: 'PH-2026-770145',
    },
    {
      id: 'kuendigungsart',
      label: 'Art der Kündigung',
      type: 'select',
      required: true,
      hint: 'Wählen Sie den Grund Ihrer Kündigung – das Schreiben passt sich entsprechend an.',
      options: [
        {
          value: 'ordentlich',
          label: 'Ordentliche Kündigung zum Ablauf des Versicherungsjahres',
        },
        {
          value:
            'im Wege der Sonderkündigung wegen der von Ihnen mitgeteilten Beitragserhöhung',
          label: 'Sonderkündigung wegen Beitragserhöhung',
        },
        {
          value:
            'im Wege der Kündigung nach dem bei Ihnen gemeldeten Versicherungsfall',
          label: 'Kündigung nach einem Schadensfall',
        },
      ],
    },
    {
      id: 'termin',
      label: 'Kündigung zum',
      type: 'text',
      required: true,
      hint: 'Bei der ordentlichen Kündigung meist „zum Ablauf des Versicherungsjahres“; bei einer Sonderkündigung das Datum, zu dem sie wirksam werden soll.',
      example: 'zum 31.12.2026',
    },
  ],
  subjectTemplate:
    'Kündigung meiner Privathaftpflichtversicherung – Versicherungsschein {{versicherungsscheinnummer}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich den bei Ihnen bestehenden Vertrag über die private Haftpflichtversicherung mit der Versicherungsscheinnummer {{versicherungsscheinnummer}} {{kuendigungsart}} {{termin}}.

Sollte der genannte Termin nicht zutreffen, kündige ich hilfsweise zum nächstmöglichen zulässigen Zeitpunkt.

Bitte bestätigen Sie mir den Zugang dieser Kündigung sowie das Datum der Vertragsbeendigung schriftlich und rechnen Sie zu viel gezahlte Beiträge anteilig ab.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 11 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__11.html',
      note: 'Verlängert sich der Vertrag mangels Kündigung automatisch, geschieht dies jeweils nur um ein weiteres Jahr (Abs. 1); die vertraglich vereinbarte Kündigungsfrist muss für beide Seiten gleich sein und zwischen einem und drei Monaten liegen (Abs. 3).',
    },
    {
      ref: '§ 40 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__40.html',
      note: 'Erhöht der Versicherer aufgrund einer Anpassungsklausel die Prämie, ohne dass sich der Versicherungsschutz entsprechend erweitert, kann der Versicherungsnehmer innerhalb eines Monats nach Zugang der Mitteilung mit sofortiger Wirkung kündigen, frühestens zum Zeitpunkt des Wirksamwerdens der Erhöhung.',
    },
    {
      ref: '§ 92 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__92.html',
      note: 'Nach einem Versicherungsfall können beide Vertragsparteien kündigen. Die Kündigung ist nur bis zum Ablauf eines Monats seit Abschluss der Verhandlungen über die Entschädigung zulässig.',
    },
  ],
  explainer: {
    whenHeading: 'Wann passt die Haftpflicht-Kündigung?',
    deadlineHeading: 'Bis wann können Sie kündigen?',
    legalHeading: 'Was das VVG zur Haftpflicht-Kündigung sagt',
    when:
      'Dieses Schreiben nutzen Sie, um Ihre private Haftpflichtversicherung zu beenden – ordentlich zum Ablauf des Versicherungsjahres, per Sonderkündigung nach einer Beitragserhöhung oder nach einem regulierten Schadensfall. Anders als bei einer Sachversicherung geht es hier nicht um Ihr Eigentum, sondern um Ansprüche, die andere gegen Sie erheben. Deshalb der wichtigste praktische Hinweis vorweg: Kündigen Sie erst, wenn der Nachfolgevertrag bestätigt ist. Ein einziger Tag ohne Deckung genügt, und ein Schaden in dieser Lücke bleibt vollständig an Ihnen hängen – der Höhe nach unbegrenzt.',
    deadline:
      'Bei der ordentlichen Kündigung richtet sich die Frist nach Ihrem Vertrag und darf gesetzlich zwischen einem und drei Monaten vor Ablauf des Versicherungsjahres liegen (§ 11 Abs. 3 VVG); drei Monate sind verbreitet. Bei einer Beitragserhöhung haben Sie einen Monat ab Zugang der Mitteilung Zeit (§ 40 VVG), nach einem Schadensfall einen Monat ab Abschluss der Entschädigungsverhandlungen (§ 92 VVG).',
    legal:
      'Ein Haftpflichtvertrag läuft, bis jemand ihn beendet: Ohne Kündigung verlängert er sich um ein weiteres Versicherungsjahr, und die vereinbarte Frist muss zwischen einem und drei Monaten liegen (§ 11 Abs. 1 und Abs. 3 VVG). Daneben stehen zwei gesetzliche Sonderkündigungsrechte, die unabhängig von dieser Frist gelten – nach einer Beitragserhöhung (§ 40 VVG) und nach einem Versicherungsfall (§ 92 VVG). Das zweite ist beidseitig: Auch der Versicherer darf nach einem regulierten Schaden kündigen. Wer nach einem Schadensfall selbst kündigt, sollte deshalb den Nachfolgeschutz besonders früh klären.',
  },
  faq: [
    {
      q: 'Welche Kündigungsfrist gilt für die Privathaftpflicht?',
      a: 'Maßgeblich ist Ihr Vertrag. Gesetzlich muss die vereinbarte Frist für beide Seiten gleich sein und zwischen einem und drei Monaten liegen (§ 11 Abs. 3 VVG); drei Monate zum Ablauf des Versicherungsjahres sind verbreitet. Prüfen Sie im Versicherungsschein, wann Ihr Versicherungsjahr endet.',
    },
    {
      q: 'Kann ich wegen einer Beitragserhöhung sofort kündigen?',
      a: 'Ja, wenn der Versicherer die Prämie aufgrund einer Anpassungsklausel erhöht, ohne dass sich der Versicherungsschutz entsprechend erweitert — bei Haftpflichtpolicen ist das der Regelfall. Das Sonderkündigungsrecht müssen Sie innerhalb eines Monats nach Zugang der Erhöhungsmitteilung ausüben (§ 40 VVG).',
    },
    {
      q: 'Sollte ich kündigen, bevor ich eine neue Haftpflicht habe?',
      a: 'Davon ist abzuraten. Die private Haftpflichtversicherung ist zwar nicht gesetzlich vorgeschrieben, deckt aber Schäden ab, für die Sie sonst unbegrenzt mit Ihrem Vermögen haften. Sorgen Sie dafür, dass der neue Vertrag nahtlos an den gekündigten anschließt, damit keine Deckungslücke entsteht.',
    },
    {
      q: 'Was passiert mit mitversicherten Familienmitgliedern?',
      a: 'Mit dem Vertrag endet auch der Schutz für alle mitversicherten Personen. Wer bislang über Ihren Vertrag mitversichert war – etwa Partnerin oder Partner oder Kinder in Ausbildung –, braucht ab dem Vertragsende eigenen Schutz oder muss in den neuen Vertrag aufgenommen werden.',
    },
    {
      q: 'Muss ich die Kündigung unterschreiben?',
      a: 'Für die Kündigung genügt seit Oktober 2016 die Textform; eine eigenhändige Unterschrift ist gesetzlich nicht mehr zwingend. Ein unterschriebenes, per Einwurf-Einschreiben versandtes Schreiben ist trotzdem empfehlenswert, weil Sie damit den Zugang belegen können.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
