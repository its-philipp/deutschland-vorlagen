import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01 by fetching gesetze-im-internet.de directly
 * (in-app browser; WebFetch is proxy-blocked there) and comparing each page
 * heading against the cited §.
 *
 * § 11 VVG governs renewal and notice periods generally: renewal is capped at
 * one year at a time (Abs. 1) and the contractual notice period must be equal
 * for both sides and lie between one and three months (Abs. 3). The concrete
 * three-months-to-year-end pattern common in Hausrat policies comes from the
 * individual AVB within those bounds — described as contractual, not cited as
 * a fixed statutory deadline.
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-hausratversicherung',
  category: 'versicherung',
  categoryLabel: 'Versicherung & Bank',
  h1: 'Hausratversicherung kündigen: Muster zum Ausfüllen',
  metaTitle: 'Hausratversicherung kündigen: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Hausratversicherung kündigen: Schreiben für ordentliche Kündigung, Beitragserhöhung oder Umzug online ausfüllen und ausdrucken – kostenlos.',
  intro:
    'Mit diesem Generator kündigen Sie Ihre Hausratversicherung – ordentlich zum Ablauf des Versicherungsjahres oder per Sonderkündigung nach einer Beitragserhöhung.',
  fields: [
    {
      id: 'versicherungsscheinnummer',
      label: 'Versicherungsscheinnummer',
      type: 'text',
      required: true,
      hint: 'Steht auf Ihrem Versicherungsschein (Police) oder der Beitragsrechnung.',
      example: 'HR-2026-448120',
    },
    {
      id: 'versicherteAnschrift',
      label: 'Anschrift der versicherten Wohnung',
      type: 'text',
      required: true,
      hint: 'Die Wohnung, deren Hausrat versichert ist – nicht zwingend Ihre aktuelle Meldeadresse.',
      example: 'Lindenweg 8, 30161 Hannover',
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
    'Kündigung meiner Hausratversicherung – Versicherungsschein {{versicherungsscheinnummer}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich den bei Ihnen bestehenden Hausratversicherungsvertrag mit der Versicherungsscheinnummer {{versicherungsscheinnummer}} für die versicherte Wohnung {{versicherteAnschrift}} {{kuendigungsart}} {{termin}}.

Sollte der genannte Termin nicht zutreffen, kündige ich hilfsweise zum nächstmöglichen zulässigen Zeitpunkt.

Bitte bestätigen Sie mir den Zugang dieser Kündigung sowie das Datum der Vertragsbeendigung schriftlich und rechnen Sie zu viel gezahlte Beiträge anteilig ab.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 11 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__11.html',
      note: 'Verlängert sich der Vertrag mangels Kündigung automatisch, geschieht dies jeweils nur um ein weiteres Jahr (Abs. 1); die vertraglich vereinbarte Kündigungsfrist muss für beide Seiten gleich sein und zwischen einem und drei Monaten liegen (Abs. 3). Die konkrete Frist Ihres Vertrags ergibt sich aus den Versicherungsbedingungen innerhalb dieser gesetzlichen Grenzen.',
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
    when:
      'Dieses Schreiben nutzen Sie, um Ihre Hausratversicherung zu beenden – ordentlich zum Ablauf des Versicherungsjahres, per Sonderkündigung nach einer Beitragserhöhung oder nach einem regulierten Schadensfall. Wählen Sie die passende Kündigungsart; das Schreiben passt sich entsprechend an.',
    deadline:
      'Bei der ordentlichen Kündigung richtet sich die Frist nach Ihrem Vertrag und darf gesetzlich zwischen einem und drei Monaten vor Ablauf des Versicherungsjahres liegen (§ 11 Abs. 3 VVG); bei Hausratverträgen sind drei Monate verbreitet. Bei einer Beitragserhöhung haben Sie einen Monat ab Zugang der Mitteilung Zeit (§ 40 VVG), nach einem Schadensfall einen Monat ab Abschluss der Entschädigungsverhandlungen (§ 92 VVG).',
    legal:
      'Hausratversicherungen verlängern sich mangels Kündigung jeweils um ein weiteres Versicherungsjahr; die vertraglich vereinbarte Kündigungsfrist muss zwischen einem und drei Monaten liegen (§ 11 Abs. 1 und Abs. 3 VVG). Daneben bestehen zwei gesetzliche Sonderkündigungsrechte: bei einer Beitragserhöhung ohne entsprechend erweiterten Versicherungsschutz (§ 40 VVG) und nach einem Versicherungsfall (§ 92 VVG).',
  },
  faq: [
    {
      q: 'Welche Kündigungsfrist gilt für die Hausratversicherung?',
      a: 'Maßgeblich ist Ihr Vertrag. Gesetzlich muss die vereinbarte Frist für beide Seiten gleich sein und zwischen einem und drei Monaten liegen (§ 11 Abs. 3 VVG); bei Hausratverträgen sind drei Monate zum Ablauf des Versicherungsjahres verbreitet. Sehen Sie im Versicherungsschein nach, wann Ihr Versicherungsjahr endet – das ist nicht zwangsläufig der 31. Dezember.',
    },
    {
      q: 'Kann ich kündigen, wenn mein Beitrag erhöht wird?',
      a: 'Ja, sofern die Erhöhung auf einer Anpassungsklausel im Vertrag beruht — das ist bei Hausrat- und Haftpflichtpolicen der Regelfall. Erhöht der Versicherer die Prämie auf dieser Grundlage, ohne dass sich der Versicherungsschutz entsprechend erweitert, steht Ihnen ein Sonderkündigungsrecht zu. Sie müssen es innerhalb eines Monats nach Zugang der Erhöhungsmitteilung ausüben (§ 40 VVG).',
    },
    {
      q: 'Muss ich bei einem Umzug kündigen?',
      a: 'Nein – bei einem Umzug innerhalb Deutschlands geht der Versicherungsschutz in der Regel auf die neue Wohnung über; üblicherweise sind beide Wohnungen für eine Übergangszeit versichert. Melden Sie den Umzug Ihrem Versicherer. Ändert sich dadurch der Beitrag, kann daraus je nach Vertrag ein Kündigungsrecht entstehen; prüfen Sie Ihre Versicherungsbedingungen.',
    },
    {
      q: 'Darf ich nach einem Schaden kündigen?',
      a: 'Ja, nach einem Versicherungsfall können sowohl Sie als auch der Versicherer kündigen. Die Kündigung ist nur innerhalb eines Monats nach Abschluss der Verhandlungen über die Entschädigung möglich (§ 92 VVG).',
    },
    {
      q: 'Bekomme ich zu viel gezahlte Beiträge zurück?',
      a: 'Haben Sie den Jahresbeitrag im Voraus gezahlt und endet der Vertrag vorzeitig, steht Ihnen der auf die Zeit nach Vertragsende entfallende Anteil regelmäßig zu. Das Musterschreiben fordert die anteilige Abrechnung deshalb ausdrücklich mit an.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
