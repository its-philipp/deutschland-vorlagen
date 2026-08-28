import type { GuideConfig } from '../../lib/guide-config';

/**
 * Written against measured demand (docs/data/gsc-queries-2026-08-27.txt):
 * "pkv beitragserhöhung widerspruch" and "pkv beitragserhöhung 2021
 * widerspruch" both at position 21 — among the domain's best. The 2021 in that
 * query is the reason the piece explains why old increases still matter.
 *
 * § 204 VVG was read against the primary text on 2026-08-28 and added to
 * widerspruch-beitragserhoehung-pkv before being cited here; §§ 203 and 205
 * were already carried there.
 *
 * RDG-safe: explains what the statute requires of the insurer and which
 * options the policyholder has. It does not assess whether a given increase
 * is effective and does not promise repayment.
 */
const guide: GuideConfig = {
  slug: 'pkv-beitragserhoehung',
  h1: 'Beitragserhöhung in der PKV: Was Sie prüfen und tun können',
  metaTitle: 'PKV-Beitragserhöhung: Prüfen, wechseln, widersprechen 2026',
  metaDescription:
    'Eine Erhöhung braucht eine Begründung, einen Treuhänder und zwei Monate Vorlauf. Und der Tarifwechsel nach § 204 VVG ist oft der wirksamere Weg.',
  icon: 'shield',
  intro:
    'Gegen eine Beitragserhöhung in der privaten Krankenversicherung hilft selten ein einzelner Schritt, sondern die richtige Reihenfolge: erst prüfen, was der Versicherer geschickt hat, dann entscheiden, ob der Weg über den Widerspruch oder über den Tarifwechsel führt. Der zweite ist der unbekanntere — und für die meisten der wirksamere.',
  sections: [
    {
      heading: 'Was der Versicherer überhaupt darf',
      paragraphs: [
        'Der Versicherer darf die Prämie nicht nach Belieben ändern. § 203 Abs. 2 VVG knüpft die Neufestsetzung an drei Voraussetzungen: eine <strong>nicht nur vorübergehende Veränderung</strong> einer für die Kalkulation maßgeblichen Rechnungsgrundlage, die Überprüfung der technischen Berechnungsgrundlagen durch einen <strong>unabhängigen Treuhänder</strong>, und dessen Zustimmung.',
        'Hinzu kommt eine zeitliche Regel, die in der Praxis oft übersehen wird: Die Neufestsetzung wird erst zu Beginn des <strong>zweiten Monats</strong> wirksam, der auf die Mitteilung der Neufestsetzung und der hierfür maßgeblichen Gründe folgt (§ 203 Abs. 5 VVG). Ein Schreiben Ende November kann also nicht wirksam zum 1. Januar erhöhen.',
        'Das Wort „Gründe“ in dieser Vorschrift ist der Kern vieler Auseinandersetzungen der letzten Jahre. Mitzuteilen ist, welche Rechnungsgrundlage sich verändert hat — nicht nur, dass es teurer wird. Ob eine konkrete Mitteilung diesen Anforderungen genügt, ist eine Frage des Einzelfalls und wird von Gerichten unterschiedlich beurteilt; wer darauf bauen will, braucht Beratung, nicht eine Vorlage.',
      ],
    },
    {
      heading: 'Warum eine alte Erhöhung noch interessant sein kann',
      paragraphs: [
        'Zu den meistgesuchten Formulierungen gehört „PKV Beitragserhöhung <em>2021</em> Widerspruch“ — mit einer Jahreszahl, die Jahre zurückliegt. Das ist kein Versehen der Suchenden.',
        'War eine Erhöhung unwirksam, wurde die erhöhte Prämie ohne Rechtsgrund gezahlt; Rückforderungsansprüche unterliegen dann der regelmäßigen Verjährung von drei Jahren, gerechnet ab dem Schluss des Jahres, in dem der Anspruch entstand und bekannt war. Deshalb betreffen solche Verfahren regelmäßig zurückliegende Jahre.',
        'Zwei Dinge gehören dazu, damit daraus keine falsche Hoffnung wird. Erstens: Selbst wenn eine Erhöhung an der Begründung scheitert, kann der Versicherer sie mit einer ordnungsgemäßen Mitteilung <em>für die Zukunft</em> nachholen — der Beitrag sinkt dann nicht dauerhaft. Zweitens: Ob eine bestimmte Mitteilung genügt, hat mit Ihrem Tarif und dem konkreten Schreiben zu tun. Dieser Beitrag beschreibt die Regel; er beurteilt keinen Einzelfall.',
      ],
    },
    {
      heading: 'Der Tarifwechsel nach § 204 VVG',
      paragraphs: [
        'Der wirksamste Hebel ist selten der Streit, sondern ein Anspruch, den viele Versicherte nicht kennen. Bei bestehendem Versicherungsverhältnis können Sie vom Versicherer <strong>verlangen</strong>, dass er einen Antrag auf Wechsel in einen anderen Tarif mit gleichartigem Versicherungsschutz annimmt — und zwar <strong>unter Anrechnung der erworbenen Rechte und der Alterungsrückstellung</strong> (§ 204 Abs. 1 Nr. 1 VVG).',
        'Das ist kein Kulanzangebot, sondern ein Anspruch. Die Alterungsrückstellung — das über Jahre angesparte Kapital, das Ihren Beitrag im Alter dämpft — wandert mit. Genau deshalb ist der Wechsel innerhalb desselben Unternehmens für Sie meist günstiger als ein Wechsel des Versicherers, bei dem sie verloren geht.',
        'Eine Gegenleistung darf der Versicherer verlangen, aber nur begrenzt: Soweit der neue Tarif <em>höhere oder umfassendere</em> Leistungen bietet, kann er für diese Mehrleistung einen Leistungsausschluss oder einen angemessenen Risikozuschlag und insoweit eine Wartezeit verlangen. Und hier steht der Satz, der die Verhandlung dreht: <strong>Sie können Risikozuschlag und Wartezeit abwenden, indem Sie für die Mehrleistung einen Leistungsausschluss vereinbaren.</strong> Die Wahl liegt bei Ihnen, nicht beim Versicherer.',
        'Eine Grenze hat der Anspruch: Für <strong>befristete</strong> Versicherungsverhältnisse gilt Absatz 1 nicht (§ 204 Abs. 4 VVG). Bei einer laufenden Krankheitskostenversicherung ohne Befristung — dem Normalfall — greift er.',
        'Praktisch heißt das: Verlangen Sie eine Aufstellung aller Tarife mit gleichartigem Versicherungsschutz samt Beitrag, statt sich einen Vorschlag machen zu lassen. Ein Angebot ist eine Auswahl des Versicherers; der Anspruch aus § 204 VVG ist weiter.',
      ],
    },
    {
      heading: 'Und wenn Sie ganz kündigen wollen',
      paragraphs: [
        'Ein Krankenversicherungsverhältnis, das für mehr als ein Jahr eingegangen wurde, können Sie zum Ende des ersten oder jedes folgenden Jahres mit einer Frist von <strong>drei Monaten</strong> kündigen — und die Kündigung kann auf einzelne versicherte Personen oder einzelne Tarife beschränkt werden (§ 205 Abs. 1 VVG).',
        'Der Satz beginnt allerdings mit einem Vorbehalt, den fast jede Zusammenfassung unterschlägt: <strong>„Vorbehaltlich einer vereinbarten Mindestversicherungsdauer“</strong>. Bei der Krankheitskosten- und der Krankenhaustagegeldversicherung darf eine Mindestlaufzeit vereinbart werden, und solange sie läuft, greift dieses Kündigungsrecht nicht. Der erste Blick gehört deshalb in Ihren Vertrag, nicht ins Gesetz.',
        'Diese Beschränkbarkeit ist der praktisch nützliche Teil: Zusatzbausteine lassen sich einzeln beenden, ohne den Krankheitskostenschutz anzutasten.',
        'Bei der Krankheitskostenversicherung selbst gilt aber die Versicherungspflicht. Sie wirkt hier als harte Bremse: Ohne Nachweis eines neuen, den Anforderungen genügenden Vertrags läuft eine Kündigung ins Leere. Das steht ausdrücklich im Gesetz: Eine Versicherung, die die Pflicht aus § 193 Abs. 3 Satz 1 VVG erfüllt, kann nur kündigen, wer bei einem anderen Versicherer einen neuen, dieser Pflicht genügenden Vertrag schließt (§ 205 Abs. 6 VVG). <strong>Kündigen Sie deshalb nie, bevor der Nachfolgeschutz steht</strong> — und rechnen Sie ein, dass die Alterungsrückstellung bei einem Unternehmenswechsel weitgehend verloren geht. Das ist der Grund, warum § 204 VVG in den meisten Fällen der bessere Weg ist als § 205 VVG.',
      ],
    },
    {
      heading: 'Die Reihenfolge, die sich bewährt',
      paragraphs: [
        '<strong>Erstens: das Schreiben aufheben, vollständig.</strong> Mitteilung, Begründung, Nachträge zum Versicherungsschein. Ohne diese Unterlagen lässt sich später nichts prüfen, und sie sind bei jedem der folgenden Wege die Grundlage.',
        '<strong>Zweitens: den Zeitpunkt prüfen.</strong> Wirksam wird die Erhöhung frühestens zu Beginn des zweiten Monats nach der Mitteilung samt Gründen (§ 203 Abs. 5 VVG). Das ist die eine Prüfung, die Sie ohne fremde Hilfe anstellen können.',
        '<strong>Drittens: die Tarifauskunft nach § 204 VVG verlangen</strong> — schriftlich, mit Frist. Sie kostet nichts, sie gefährdet nichts, und sie liefert die Zahlen, ohne die jede weitere Entscheidung geraten wäre.',
        '<strong>Viertens: erst dann über einen Widerspruch entscheiden</strong>, und zwar mit Beratung. Verbraucherzentrale, ein auf Versicherungsrecht spezialisierter Anwalt oder ein Versicherungsberater — und lesen Sie bei Angeboten auf Erfolgshonorarbasis genau, was von einer Rückzahlung bei Ihnen ankommt.',
      ],
    },
  ],
  legalBasis: [
    {
      ref: '§ 203 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__203.html',
      note: 'Der Versicherer darf die Prämie bei einer nicht nur vorübergehenden Veränderung einer für die Kalkulation maßgeblichen Rechnungsgrundlage neu festsetzen, sofern ein unabhängiger Treuhänder die technischen Berechnungsgrundlagen überprüft und zugestimmt hat (Abs. 2). Die Neufestsetzung wird erst zu Beginn des zweiten Monats wirksam, der auf die Mitteilung der Neufestsetzung und der hierfür maßgeblichen Gründe folgt (Abs. 5).',
    },
    {
      ref: '§ 204 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__204.html',
      note: 'Bei bestehendem Versicherungsverhältnis kann der Versicherungsnehmer den Wechsel in andere Tarife mit gleichartigem Versicherungsschutz verlangen – unter Anrechnung der erworbenen Rechte und der Alterungsrückstellung. Für Mehrleistungen des neuen Tarifs darf der Versicherer einen Leistungsausschluss oder einen angemessenen Risikozuschlag und insoweit eine Wartezeit verlangen; der Versicherungsnehmer kann Risikozuschlag und Wartezeit dadurch abwenden, dass er für die Mehrleistung einen Leistungsausschluss vereinbart (Abs. 1 Nr. 1). Absatz 1 gilt nicht für befristete Versicherungsverhältnisse (Abs. 4) — dort besteht der Anspruch auf Tarifwechsel also nicht.',
    },
    {
      ref: '§ 205 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__205.html',
      note: 'Vorbehaltlich einer vereinbarten Mindestversicherungsdauer bei der Krankheitskosten- und der Krankenhaustagegeldversicherung kann der Versicherungsnehmer ein Krankenversicherungsverhältnis, das für die Dauer von mehr als einem Jahr eingegangen ist, zum Ende des ersten oder jedes darauf folgenden Jahres mit einer Frist von drei Monaten kündigen; die Kündigung kann auf einzelne versicherte Personen oder Tarife beschränkt werden (Abs. 1). Und eine Versicherung, die die Pflicht aus § 193 Abs. 3 Satz 1 erfüllt, kann nur gekündigt werden, wenn bei einem anderen Versicherer ein neuer, dieser Pflicht genügender Vertrag geschlossen wird (Abs. 6).',
    },
  ],
  faq: [
    {
      q: 'Ab wann gilt die Erhöhung, die mir im November angekündigt wurde?',
      a: 'Frühestens zu Beginn des zweiten Monats, der auf die Mitteilung der Neufestsetzung und der maßgeblichen Gründe folgt (§ 203 Abs. 5 VVG). Eine Mitteilung im November kann daher regelmäßig nicht schon zum 1. Januar wirksam werden.',
    },
    {
      q: 'Verliere ich beim Tarifwechsel meine Alterungsrückstellung?',
      a: 'Beim Wechsel innerhalb desselben Versicherers nicht: § 204 Abs. 1 Nr. 1 VVG ordnet die Anrechnung der erworbenen Rechte und der Alterungsrückstellung ausdrücklich an. Beim Wechsel des Unternehmens geht sie dagegen weitgehend verloren – das ist der entscheidende Unterschied zwischen § 204 und § 205 VVG.',
    },
    {
      q: 'Der Versicherer will für den neuen Tarif einen Risikozuschlag. Muss ich den akzeptieren?',
      a: 'Nur für Mehrleistungen des neuen Tarifs – und auch dort haben Sie die Wahl: Sie können Risikozuschlag und Wartezeit abwenden, indem Sie hinsichtlich der Mehrleistung einen Leistungsausschluss vereinbaren (§ 204 Abs. 1 Nr. 1 VVG). Für den Umfang, den Sie bereits versichert hatten, ist beides nicht zulässig.',
    },
    {
      q: 'Lohnt sich ein Widerspruch gegen eine Erhöhung von vor mehreren Jahren?',
      a: 'Das lässt sich pauschal nicht sagen. Rückforderungsansprüche verjähren regelmäßig in drei Jahren ab dem Schluss des Jahres ihrer Entstehung, und ein Versicherer kann eine an der Begründung gescheiterte Erhöhung für die Zukunft ordnungsgemäß nachholen. Ob es sich in Ihrem Fall lohnt, ist eine Einzelfallfrage für eine Beratung.',
    },
    {
      q: 'Kann ich einfach kündigen, wenn mir der Beitrag zu hoch wird?',
      a: 'Zwei Vorbehalte stehen davor. Erstens gilt das Kündigungsrecht aus § 205 Abs. 1 VVG nur „vorbehaltlich einer vereinbarten Mindestversicherungsdauer“ — läuft eine solche noch, kommen Sie nicht zum Jahresende heraus. Zweitens gilt die Versicherungspflicht: Ohne nachgewiesenen Nachfolgeschutz läuft die Kündigung der Krankheitskostenversicherung ins Leere. Klären Sie deshalb zuerst § 204 VVG.',
    },
  ],
  relatedGenerators: ['widerspruch-beitragserhoehung-pkv', 'kuendigung-haftpflichtversicherung', 'kuendigung-hausratversicherung'],
  lastReviewed: '2026-08-28',
};

export default guide;
