import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified via WebSearch against dejure.org / buzer.de / juraforum
 * on 2026-07-13 (gesetze-im-internet.de 403-blocks this dev environment's
 * proxy per MEMORY.md).
 *
 * Note on the ordentliche Kündigung: § 11 Abs. 4 VVG (checked verbatim) only
 * grants a termination right for contracts with an INITIAL term of more than
 * three years (end of 3rd year, 3 months' notice) — it does not describe the
 * standard annual Kfz policy. The correct statutory basis for the common
 * "1 Monat zum Ablauf des Versicherungsjahres" pattern is § 11 Abs. 1 VVG
 * (automatic renewal limited to one year at a time) together with § 11
 * Abs. 3 VVG (notice period must be equal for both sides and lie between one
 * and three months) — the concrete one-month deadline itself comes from the
 * individual contract/AVB within those statutory bounds, so it is described
 * as contractual rather than cited as a fixed-length statutory deadline.
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-kfz-versicherung',
  category: 'versicherung',
  categoryLabel: 'Versicherung & Bank',
  h1: 'Kfz-Versicherung kündigen: Muster zum Ausfüllen',
  metaTitle: 'Kfz-Versicherung kündigen: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Kfz-Versicherung kündigen: Schreiben für ordentliche Kündigung, Beitragserhöhung oder Schadensfall online ausfüllen – kostenlos, ohne Anmeldung.',
  intro:
    'Mit diesem Generator kündigen Sie Ihre Kfz-Versicherung – ordentlich zum Ablauf des Versicherungsjahres, per Sonderkündigung nach einer Beitragserhöhung oder nach einem Schadensfall.',
  fields: [
    {
      id: 'versicherungsscheinnummer',
      label: 'Versicherungsscheinnummer',
      type: 'text',
      required: true,
      hint: 'Steht auf Ihrem Versicherungsschein (Police) oder der Beitragsrechnung.',
      example: 'VS-2026-119887',
    },
    {
      id: 'kfzKennzeichen',
      label: 'Amtliches Kennzeichen',
      type: 'text',
      required: true,
      hint: 'Das Kennzeichen des versicherten Fahrzeugs.',
      example: 'M-AB 1234',
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
          value: 'im Wege der Kündigung nach dem bei Ihnen gemeldeten Schadensfall',
          label: 'Kündigung nach Schadensfall',
        },
      ],
    },
    {
      id: 'termin',
      label: 'Kündigung zum',
      type: 'text',
      required: true,
      hint: 'Bei der ordentlichen Kündigung meist „zum 31.12.“ oder „zum Ablauf des Versicherungsjahres“; bei einer Sonderkündigung das Datum, zu dem sie wirksam werden soll.',
      example: 'zum 31.12.2026',
    },
  ],
  subjectTemplate:
    'Kündigung meines Kfz-Versicherungsvertrags – Versicherungsschein {{versicherungsscheinnummer}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich den bei Ihnen bestehenden Kraftfahrzeug-Versicherungsvertrag mit der Versicherungsscheinnummer {{versicherungsscheinnummer}} für das Fahrzeug mit dem amtlichen Kennzeichen {{kfzKennzeichen}} {{kuendigungsart}} {{termin}}.

Sollte der genannte Termin nicht zutreffen, kündige ich hilfsweise zum nächstmöglichen zulässigen Zeitpunkt.

Bitte bestätigen Sie mir den Zugang dieser Kündigung sowie das Datum der Vertragsbeendigung schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 11 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__11.html',
      note: 'Verlängert sich der Vertrag mangels Kündigung automatisch, geschieht dies jeweils nur um ein weiteres Jahr (Abs. 1); die vertraglich vereinbarte Kündigungsfrist muss für beide Seiten gleich sein und zwischen einem und drei Monaten liegen (Abs. 3) – die in der Praxis übliche Ein-Monats-Frist zum Ablauf des Versicherungsjahres ergibt sich aus dem jeweiligen Vertrag innerhalb dieser gesetzlichen Grenzen.',
    },
    {
      ref: '§ 40 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__40.html',
      note: 'Erhöht der Versicherer die Prämie, ohne den Versicherungsschutz entsprechend zu erweitern, kann der Versicherungsnehmer innerhalb eines Monats nach Zugang der Mitteilung mit sofortiger Wirkung kündigen, frühestens zum Zeitpunkt des Wirksamwerdens der Erhöhung.',
    },
    {
      ref: '§ 92 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__92.html',
      note: 'Nach einem Versicherungsfall können beide Vertragsparteien kündigen. Die Kündigung ist nur bis zum Ablauf eines Monats seit Abschluss der Verhandlungen über die Entschädigung zulässig; der Versicherer muss dabei eine Kündigungsfrist von einem Monat einhalten, der Versicherungsnehmer kann auch mit sofortiger Wirkung kündigen.',
    },
    {
      ref: '§ 95 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__95.html',
      note: 'Beim Verkauf des versicherten Fahrzeugs tritt der Erwerber automatisch anstelle des bisherigen Versicherungsnehmers in den Versicherungsvertrag ein.',
    },
    {
      ref: '§ 96 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__96.html',
      note: 'Sowohl der Versicherer als auch der Erwerber können den Vertrag nach der Fahrzeugveräußerung innerhalb eines Monats kündigen.',
    },
  ],
  explainer: {
    whenHeading: 'Wann passt die Kfz-Kündigung?',
    deadlineHeading: 'Bis wann können Sie kündigen?',
    legalHeading: 'Was bei der Kfz-Versicherung gilt',
    when:
      'Dieses Schreiben nutzen Sie, um Ihre Kfz-Versicherung zu kündigen – ordentlich zum Ablauf des Versicherungsjahres, im Rahmen einer Sonderkündigung nach einer Beitragserhöhung oder nach einem Schadensfall. Wählen Sie die passende Kündigungsart und den gewünschten Termin; das Schreiben passt sich entsprechend an.',
    deadline:
      'Bei der ordentlichen Kündigung richtet sich die Frist nach Ihrem Vertrag und darf gesetzlich zwischen einem und drei Monaten vor Ablauf des Versicherungsjahres liegen (§ 11 Abs. 3 VVG) – üblich ist ein Monat. Läuft Ihr Versicherungsjahr mit dem Kalenderjahr, ist der 30. November häufig der letzte Kündigungstermin; maßgeblich ist aber stets Ihr Vertrag. Bei einer Beitragserhöhung haben Sie einen Monat ab Zugang der Mitteilung Zeit für die Sonderkündigung (§ 40 VVG), nach einem Schadensfall einen Monat ab Abschluss der Entschädigungsverhandlungen (§ 92 VVG).',
    legal:
      'Kfz-Versicherungsverträge verlängern sich mangels Kündigung jeweils um ein weiteres Versicherungsjahr; die vertraglich vereinbarte Kündigungsfrist muss zwischen einem und drei Monaten liegen (§ 11 Abs. 1 und Abs. 3 VVG). Daneben sieht das Gesetz zwei Sonderkündigungsrechte vor: bei einer Beitragserhöhung ohne entsprechend erweiterten Schutz (§ 40 VVG) und nach einem Versicherungsfall für beide Vertragsparteien (§ 92 VVG). Beim Verkauf des Fahrzeugs geht der Vertrag automatisch auf den Erwerber über (§ 95 VVG), der ihn ebenso wie der Versicherer innerhalb einer Frist kündigen kann (§ 96 VVG).',
  },
  faq: [
    {
      q: 'Bis wann muss ich meine Kfz-Versicherung ordentlich kündigen?',
      a: 'Die ordentliche Kündigung ist zum Ablauf des Versicherungsjahres möglich; die Frist ergibt sich aus Ihrem Vertrag und darf gesetzlich zwischen einem und drei Monaten liegen (§ 11 Abs. 3 VVG) – in der Praxis meist ein Monat. Läuft Ihr Versicherungsjahr mit dem Kalenderjahr, ist der 30. November häufig der letzte Termin.',
    },
    {
      q: 'Kann ich kündigen, wenn mein Beitrag erhöht wird?',
      a: 'Ja. Erhöht der Versicherer die Prämie, ohne den Versicherungsschutz entsprechend zu erweitern, steht Ihnen ein Sonderkündigungsrecht zu, das Sie innerhalb eines Monats nach Zugang der Erhöhungsmitteilung ausüben müssen (§ 40 VVG).',
    },
    {
      q: 'Darf ich nach einem Unfall kündigen?',
      a: 'Ja, nach einem Versicherungsfall können sowohl Sie als auch der Versicherer kündigen. Die Kündigung ist nur innerhalb eines Monats nach Abschluss der Verhandlungen über die Entschädigung möglich (§ 92 VVG).',
    },
    {
      q: 'Was passiert mit der Versicherung, wenn ich mein Auto verkaufe?',
      a: 'Der Versicherungsvertrag geht mit dem Fahrzeug automatisch auf den Erwerber über (§ 95 VVG) – Sie als Verkäufer müssen dafür nicht kündigen. Der Erwerber und der Versicherer können den übergegangenen Vertrag anschließend innerhalb eines Monats kündigen (§ 96 VVG); melden Sie den Verkauf Ihrem Versicherer, damit die Prämie korrekt abgerechnet wird.',
    },
    {
      q: 'Kann ich die Kfz-Versicherung kündigen, ohne bereits eine neue zu haben?',
      a: 'Davon ist abzuraten: Die Kfz-Haftpflichtversicherung ist eine gesetzlich vorgeschriebene Pflichtversicherung (Pflichtversicherungsgesetz) – ohne durchgehenden Versicherungsschutz darf das Fahrzeug nicht am Straßenverkehr teilnehmen. Sorgen Sie dafür, dass eine neue Versicherung nahtlos an die gekündigte anschließt, bevor die Kündigung wirksam wird.',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
