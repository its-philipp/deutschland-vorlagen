import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01 by reading the actual text of § 203 VVG on
 * gesetze-im-internet.de.
 *
 * DELIBERATE FRAMING (RDG): PKV Beitragsanpassungen are heavily litigated.
 * This letter does NOT assert that the increase is void and does NOT tell the
 * user to stop paying — both would be individual legal advice and financially
 * risky. It does exactly what § 203 Abs. 5 VVG grounds: the Neufestsetzung
 * only takes effect at the start of the second month following notification
 * OF THE INCREASE AND OF THE REASONS behind it, so the letter asks for those
 * reasons in writing and reserves rights. Verbatim from Abs. 5: the change
 * becomes effective "zu Beginn des zweiten Monats, der auf die Mitteilung der
 * Neufestsetzung … und der hierfür maßgeblichen Gründe … folgt".
 */
const config: GeneratorConfig = {
  slug: 'widerspruch-beitragserhoehung-pkv',
  category: 'versicherung',
  categoryLabel: 'Versicherung & Bank',
  h1: 'Beitragserhöhung PKV: Widerspruch-Muster zum Ausfüllen',
  metaTitle:
    'Widerspruch Beitragserhöhung PKV: Muster 2026 (Generator)',
  metaDescription:
    'Beitragserhöhung der privaten Krankenversicherung: Schreiben zur Begründung nach § 203 VVG online ausfüllen und ausdrucken – kostenlos.',
  intro:
    'Mit diesem Generator fordern Sie Ihre private Krankenversicherung auf, die maßgeblichen Gründe für eine Beitragsanpassung offenzulegen, und halten Ihre Rechte offen.',
  fields: [
    {
      id: 'versicherungsnummer',
      label: 'Versicherungsnummer',
      type: 'text',
      required: true,
      hint: 'Steht auf Ihrer Police und auf dem Anpassungsschreiben.',
      example: 'KV-4471203',
    },
    {
      id: 'tarif',
      label: 'Betroffener Tarif',
      type: 'text',
      required: true,
      hint: 'Die Tarifbezeichnung aus dem Anpassungsschreiben.',
      example: 'Komfort-N 100',
    },
    {
      id: 'datumAnpassungsschreiben',
      label: 'Datum des Anpassungsschreibens',
      type: 'date',
      required: true,
      hint: 'Das Datum, mit dem Ihre Versicherung die Beitragsanpassung mitgeteilt hat.',
    },
    {
      id: 'wirksamAb',
      label: 'Erhöhung soll wirksam werden zum',
      type: 'date',
      required: true,
      hint: 'Der im Anpassungsschreiben genannte Termin, ab dem der neue Beitrag gelten soll.',
    },
    {
      id: 'alterBeitrag',
      label: 'Bisheriger Monatsbeitrag in Euro (freiwillig)',
      type: 'text',
      required: false,
      hint: 'Optional: Nennen Sie den bisherigen Beitrag, um die Anpassung eindeutig zu bezeichnen.',
      example: '512,40',
    },
  ],
  subjectTemplate:
    'Beitragsanpassung zum {{wirksamAb}} – Versicherungsnummer {{versicherungsnummer}}, Tarif {{tarif}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

mit Schreiben vom {{datumAnpassungsschreiben}} haben Sie mir für den Tarif {{tarif}} eine Beitragsanpassung mitgeteilt, die zum {{wirksamAb}} wirksam werden soll.

Der bisherige Monatsbeitrag beträgt {{alterBeitrag}} Euro.

Nach § 203 Abs. 5 VVG werden eine Neufestsetzung der Prämie und Änderungen nach § 203 Abs. 2 und Abs. 3 VVG erst zu Beginn des zweiten Monats wirksam, der auf die Mitteilung der Neufestsetzung und der hierfür maßgeblichen Gründe folgt. Ich bitte Sie daher, mir die für die Anpassung maßgeblichen Gründe mitzuteilen und dabei insbesondere anzugeben, welche Rechnungsgrundlage sich in welchem Umfang verändert hat und auf welchen Zeitraum sich die Überprüfung bezieht.

Ferner bitte ich um die Bestätigung, dass ein unabhängiger Treuhänder die technischen Berechnungsgrundlagen überprüft und der Anpassung zugestimmt hat (§ 203 Abs. 2 VVG).

Bis zum Eingang dieser Angaben behalte ich mir sämtliche Rechte im Hinblick auf die Wirksamkeit der Anpassung ausdrücklich vor. Die Beiträge zahle ich zunächst unter Vorbehalt weiter, um den Versicherungsschutz nicht zu gefährden.

Für Ihre Rückmeldung setze ich mir eine Frist bis zum Ablauf von vier Wochen nach Zugang dieses Schreibens.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 203 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__203.html',
      note: 'Der Versicherer darf die Prämie bei einer nicht nur vorübergehenden Veränderung einer für die Kalkulation maßgeblichen Rechnungsgrundlage neu festsetzen, sofern ein unabhängiger Treuhänder die technischen Berechnungsgrundlagen überprüft und zugestimmt hat (Abs. 2). Die Neufestsetzung wird erst zu Beginn des zweiten Monats wirksam, der auf die Mitteilung der Neufestsetzung und der hierfür maßgeblichen Gründe folgt (Abs. 5).',
    },
    {
      ref: '§ 205 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__205.html',
      note: 'Ein Krankenversicherungsverhältnis, das für die Dauer von mehr als einem Jahr eingegangen ist, kann der Versicherungsnehmer zum Ende des ersten oder jedes darauf folgenden Jahres mit einer Frist von drei Monaten kündigen; die Kündigung kann auf einzelne versicherte Personen oder Tarife beschränkt werden (Abs. 1).',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn Ihre private Krankenversicherung eine Beitragsanpassung mitgeteilt hat und Sie die Grundlage dieser Anpassung nachvollziehen möchten. Es fordert die maßgeblichen Gründe an, lässt Ihre Rechte offen und ändert nichts an Ihrem Versicherungsschutz.',
    deadline:
      'Eine gesetzliche Widerspruchsfrist gegen eine Beitragsanpassung gibt es nicht – die Anpassung ist kein Verwaltungsakt. Praktisch relevant ist § 203 Abs. 5 VVG: Die Neufestsetzung wird erst zu Beginn des zweiten Monats wirksam, der auf die Mitteilung der Neufestsetzung und der maßgeblichen Gründe folgt. Zahlen Sie den Beitrag zunächst weiter (im Musterschreiben unter Vorbehalt), damit Ihr Versicherungsschutz nicht gefährdet wird.',
    legal:
      'Die private Krankenversicherung darf Prämien nur unter den Voraussetzungen des § 203 VVG anpassen: Erforderlich ist eine nicht nur vorübergehende Veränderung einer für die Kalkulation maßgeblichen Rechnungsgrundlage sowie die Zustimmung eines unabhängigen Treuhänders (Abs. 2). Die Anpassung wird zudem erst wirksam, wenn dem Versicherungsnehmer neben der Neufestsetzung auch die hierfür maßgeblichen Gründe mitgeteilt wurden (Abs. 5). Ob eine konkrete Anpassung wirksam ist, lässt sich nur anhand der Unterlagen des Einzelfalls beurteilen – dieses Schreiben dient dazu, diese Unterlagen zu erhalten.',
  },
  faq: [
    {
      q: 'Kann ich einer Beitragserhöhung der PKV einfach widersprechen?',
      a: 'Eine Beitragsanpassung ist kein Bescheid einer Behörde, gegen den ein förmlicher Widerspruch läuft – es gibt daher keine Widerspruchsfrist und kein Widerspruchsverfahren. Sinnvoll und rechtlich verankert ist stattdessen, die maßgeblichen Gründe anzufordern: Ohne deren Mitteilung wird die Neufestsetzung nach § 203 Abs. 5 VVG nicht wirksam.',
    },
    {
      q: 'Darf ich den erhöhten Beitrag einfach nicht zahlen?',
      a: 'Nein, davon ist dringend abzuraten. Zahlungsrückstände in der privaten Krankenversicherung können zu Mahnkosten, Verzugszinsen und im Extremfall zum Ruhen des Vertrags mit stark eingeschränkten Leistungen führen. Das Musterschreiben zahlt deshalb ausdrücklich unter Vorbehalt weiter.',
    },
    {
      q: 'Was ist der Treuhänder und warum frage ich danach?',
      a: 'Eine Prämienanpassung setzt voraus, dass ein unabhängiger Treuhänder die technischen Berechnungsgrundlagen überprüft und der Anpassung zugestimmt hat (§ 203 Abs. 2 VVG). Die Bestätigung dieser Zustimmung gehört deshalb zu den Angaben, die Sie nachvollziehen können sollten.',
    },
    {
      q: 'Kann ich stattdessen in einen günstigeren Tarif wechseln?',
      a: 'Ein Tarifwechsel innerhalb desselben Versicherers ist gesetzlich vorgesehen und häufig die wirtschaftlich wirksamste Reaktion auf eine Beitragsanpassung. Fragen Sie Ihren Versicherer nach gleichartigen Tarifen; erworbene Alterungsrückstellungen werden dabei angerechnet. Dieses Musterschreiben deckt den Tarifwechsel nicht ab.',
    },
    {
      q: 'Kann ich die private Krankenversicherung kündigen?',
      a: 'Ein Krankenversicherungsverhältnis mit einer Laufzeit von mehr als einem Jahr können Sie zum Ende des ersten oder jedes folgenden Jahres mit drei Monaten Frist kündigen (§ 205 Abs. 1 VVG). Beachten Sie: Ohne anschließenden anderweitigen Versicherungsschutz ist eine Kündigung in Deutschland wegen der Versicherungspflicht praktisch nicht möglich.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
