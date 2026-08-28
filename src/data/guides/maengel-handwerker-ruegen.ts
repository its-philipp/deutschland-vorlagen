import type { GuideConfig } from '../../lib/guide-config';

/**
 * Written against measured demand (docs/data/gsc-queries-2026-08-27.txt): the
 * mängelrüge cluster is 8 queries at positions 27-75, with "mängelrüge
 * handwerker" the domain's fifth-best position overall.
 *
 * §§ 637, 634a and 640 BGB were read against the primary text at
 * gesetze-im-internet.de on 2026-08-28 and added to maengelruege-handwerker
 * before being cited here; §§ 633, 634, 635 were already carried there.
 */
const guide: GuideConfig = {
  slug: 'maengel-handwerker-ruegen',
  h1: 'Handwerker hat gepfuscht: Was Sie verlangen können',
  metaTitle: 'Mängel beim Handwerker rügen: Rechte und Fristen 2026',
  metaDescription:
    'Erst Nacherfüllung, dann alles andere: Warum die Reihenfolge über Ihre Rechte entscheidet – und wann aus zwei Jahren fünf werden.',
  icon: 'warning',
  intro:
    'Beim Handwerker gilt eine Reihenfolge, die sich nicht abkürzen lässt: Zuerst bekommt er die Gelegenheit nachzubessern, und erst wenn die verstrichen ist, öffnen sich die übrigen Wege. Wer sofort einen anderen Betrieb holt oder die Rechnung einfach kürzt, verliert Ansprüche, die er eigentlich hatte.',
  sections: [
    {
      heading: 'Die Reihenfolge, die alles bestimmt',
      paragraphs: [
        'Ist das Werk mangelhaft, stehen dem Besteller vier Rechte zu (§ 634 BGB): Nacherfüllung verlangen, den Mangel selbst beseitigen und Aufwendungsersatz verlangen, den Werklohn mindern oder vom Vertrag zurücktreten, und Schadensersatz fordern. Sie stehen aber nicht nebeneinander zur Auswahl.',
        '<strong>Die Nacherfüllung kommt zuerst.</strong> Der Unternehmer kann dabei nach seiner Wahl den Mangel beseitigen oder ein neues Werk herstellen, und die dafür erforderlichen Kosten trägt er (§ 635 BGB). Verweigern darf er sie nur, wenn sie ausnahmsweise unverhältnismäßige Kosten verursachen würde.',
        'Erst danach kommen die anderen Rechte in Betracht. Der praktische Kern der ganzen Vorschrift ist deshalb ein einziger Satz in Ihrem Schreiben: die <strong>angemessene Frist zur Nacherfüllung</strong>. Ohne sie steht der Rest auf Sand.',
      ],
    },
    {
      heading: 'Was eine Mängelrüge enthalten muss',
      paragraphs: [
        'Eine Mängelrüge ist keine Beschwerde, sondern eine Aufforderung mit Termin. Vier Bestandteile machen sie brauchbar:',
      ],
      list: [
        {
          term: 'Der Mangel, konkret',
          text: 'Nicht „die Arbeit ist schlecht“, sondern was wo nicht stimmt: welche Fliese, welche Wand, welches Bauteil. Beschreiben Sie das Erscheinungsbild, nicht die vermutete Ursache — die zu finden ist Aufgabe des Betriebs.',
        },
        {
          term: 'Der Bezug zum Auftrag',
          text: 'Auftrags- oder Rechnungsnummer, Datum der Arbeiten und, wenn vorhanden, das Angebot, aus dem sich die vereinbarte Beschaffenheit ergibt.',
        },
        {
          term: 'Die Frist',
          text: 'Ein konkretes Datum, bis zu dem nachgebessert sein soll. Angemessen heißt: so lang, dass die Arbeit in dieser Zeit ernsthaft möglich ist — bei einer undichten Fuge kürzer als bei einer Heizungsanlage.',
        },
        {
          term: 'Der Vorbehalt',
          text: 'Der Hinweis, dass Sie nach fruchtlosem Ablauf die weiteren Rechte aus § 634 BGB geltend machen. Das ist keine Drohung, sondern die Ankündigung dessen, was das Gesetz ohnehin vorsieht.',
        },
      ],
    },
    {
      heading: 'Wenn die Frist verstreicht: Selbstvornahme und Vorschuss',
      paragraphs: [
        'Läuft die Frist ergebnislos ab, dürfen Sie den Mangel selbst beseitigen — oder von einem anderen Betrieb beseitigen lassen — und Ersatz der erforderlichen Aufwendungen verlangen (§ 637 Abs. 1 BGB). Voraussetzung ist nur, dass der Unternehmer die Nacherfüllung nicht zu Recht verweigert hat.',
        'Weniger bekannt und praktisch oft entscheidend ist Absatz 3: Sie können für die erforderlichen Aufwendungen <strong>Vorschuss verlangen</strong>. Sie müssen die Reparatur also nicht erst aus eigener Tasche bezahlen und hinterher hinterherlaufen. Das ist das Gegenmittel gegen die häufigste Sorge — „ich kann mir nicht leisten, in Vorleistung zu gehen“.',
        'Eine Frist ist ausnahmsweise entbehrlich, wenn die Nacherfüllung fehlgeschlagen oder Ihnen unzumutbar ist (§ 637 Abs. 2 BGB). „Fehlgeschlagen“ meint in der Regel den zweiten erfolglosen Versuch, nicht den ersten — und wer sich darauf verlässt, ohne dass es eindeutig ist, riskiert genau den Anspruchsverlust, den die Frist verhindert.',
      ],
    },
    {
      heading: 'Die Abnahme ist der Punkt, an dem sich vieles entscheidet',
      paragraphs: [
        'Die Abnahme ist die Erklärung, dass Sie das Werk im Wesentlichen als vertragsgemäß hinnehmen. Sie sind dazu verpflichtet, wenn das Werk vertragsmäßig hergestellt ist; wegen unwesentlicher Mängel dürfen Sie sie nicht verweigern (§ 640 Abs. 1 BGB).',
        'Zwei Folgen machen sie zum wichtigsten Moment des ganzen Auftrags. Erstens: <strong>Wer ein Werk abnimmt, obwohl er den Mangel kennt, behält seine Rechte nur, wenn er sie sich bei der Abnahme vorbehält</strong> (§ 640 Abs. 3 BGB). Der Satz „Mängel an der linken Fensterlaibung vorbehalten“ auf dem Abnahmeprotokoll ist deshalb mehr wert als jedes spätere Schreiben.',
        'Zweitens gibt es die Abnahme durch Schweigen: Setzt der Unternehmer nach Fertigstellung eine angemessene Frist zur Abnahme und verweigern Sie sie nicht innerhalb dieser Frist <em>unter Angabe mindestens eines Mangels</em>, gilt das Werk als abgenommen (§ 640 Abs. 2 Satz 1 BGB). Für Verbraucher gilt das nur, wenn der Unternehmer zusammen mit der Aufforderung in Textform auf diese Folge hingewiesen hat (Satz 2). Wer eine solche Aufforderung bekommt, sollte also nicht abwarten, sondern antworten — und wenn es Mängel gibt, mindestens einen benennen.',
      ],
    },
    {
      heading: 'Zwei Jahre oder fünf? Es hängt am Bauwerk',
      paragraphs: [
        'Mängelansprüche verjähren in <strong>zwei Jahren</strong> bei einem Werk, dessen Erfolg in der Herstellung, Wartung oder Veränderung einer Sache besteht — und in <strong>fünf Jahren bei einem Bauwerk</strong> (§ 634a Abs. 1 Nr. 1 und 2 BGB). Beides beginnt mit der Abnahme (Abs. 2), nicht mit der Entdeckung des Mangels.',
        'Die Abgrenzung entscheidet also über zweieinhalb Jahre Unterschied, und sie verläuft nicht entlang der Rechnungshöhe. Arbeiten, die fest mit einem Gebäude verbunden sind und seiner Substanz oder seinem Bestand dienen, gehören eher zur fünfjährigen Frist; eine reine Reparatur an einer beweglichen Sache eher zur zweijährigen. Wo die Grenze im Einzelfall liegt, ist eine Frage, die man vor Ablauf des zweiten Jahres klären sollte, nicht danach.',
        'Eine Ausnahme kann alles verschieben: Hat der Unternehmer den Mangel <strong>arglistig verschwiegen</strong>, gilt die regelmäßige Verjährungsfrist (§ 634a Abs. 3 BGB) — mit ihrem eigenen, kenntnisabhängigen Beginn. Beim Bauwerk endet die Verjährung aber auch dann nicht vor Ablauf der fünf Jahre.',
      ],
    },
    {
      heading: 'Was Sie besser nicht tun',
      paragraphs: [
        '<strong>Die Rechnung einfach nicht bezahlen</strong> ist selten der richtige erste Schritt. Ein Zurückbehaltungsrecht besteht, aber in einem Umfang, der sich am Mangel bemisst — wer die gesamte Schlussrechnung wegen einer schadhaften Fuge einbehält, gerät seinerseits in Verzug. Mindern ist zudem eines der Rechte, die erst <em>nach</em> der Nacherfüllungsfrist offenstehen.',
        '<strong>Sofort einen anderen Betrieb beauftragen</strong> kostet in aller Regel den Aufwendungsersatz: Ohne abgelaufene Frist fehlt die Voraussetzung des § 637 Abs. 1 BGB, und der erste Betrieb schuldet dann nichts.',
        '<strong>Nur anrufen.</strong> Ein Telefonat setzt keine nachweisbare Frist. Schreiben Sie, und sichern Sie den Zugang — bei Fristen ist der Nachweis, dass und wann das Schreiben ankam, genauso wichtig wie sein Inhalt.',
      ],
    },
  ],
  legalBasis: [
    {
      ref: '§ 634 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__634.html',
      note: 'Ist das Werk mangelhaft, kann der Besteller Nacherfüllung verlangen, den Mangel selbst beseitigen und Aufwendungsersatz verlangen, den Werklohn mindern, vom Vertrag zurücktreten oder Schadensersatz fordern.',
    },
    {
      ref: '§ 635 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__635.html',
      note: 'Bei der Nacherfüllung kann der Unternehmer nach seiner Wahl den Mangel beseitigen oder ein neues Werk herstellen; die hierfür erforderlichen Kosten trägt er. Er kann die Nacherfüllung verweigern, wenn sie nur mit unverhältnismäßigen Kosten möglich ist.',
    },
    {
      ref: '§ 637 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__637.html',
      note: 'Nach erfolglosem Ablauf einer angemessenen Frist zur Nacherfüllung darf der Besteller den Mangel selbst beseitigen lassen und Ersatz der erforderlichen Aufwendungen verlangen, sofern der Unternehmer die Nacherfüllung nicht zu Recht verweigert (Abs. 1). Einer Frist bedarf es nicht, wenn die Nacherfüllung fehlgeschlagen oder unzumutbar ist (Abs. 2). Für die erforderlichen Aufwendungen kann Vorschuss verlangt werden (Abs. 3).',
    },
    {
      ref: '§ 640 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__640.html',
      note: 'Der Besteller muss das vertragsmäßig hergestellte Werk abnehmen; wegen unwesentlicher Mängel darf die Abnahme nicht verweigert werden (Abs. 1). Reagiert er auf eine angemessene Frist zur Abnahme nicht unter Angabe mindestens eines Mangels, gilt das Werk als abgenommen – gegenüber Verbrauchern nur nach einem Hinweis in Textform auf diese Folge (Abs. 2). Wer ein Werk in Kenntnis eines Mangels abnimmt, behält die Rechte aus § 634 Nr. 1 bis 3 nur, wenn er sie sich bei der Abnahme vorbehält (Abs. 3).',
    },
    {
      ref: '§ 634a BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__634a.html',
      note: 'Mängelansprüche verjähren in zwei Jahren bei einem Werk, dessen Erfolg in der Herstellung, Wartung oder Veränderung einer Sache besteht, und in fünf Jahren bei einem Bauwerk (Abs. 1 Nr. 1 und 2). Die Frist beginnt mit der Abnahme (Abs. 2). Hat der Unternehmer den Mangel arglistig verschwiegen, gilt die regelmäßige Verjährungsfrist (Abs. 3).',
    },
  ],
  faq: [
    {
      q: 'Wie lang ist eine „angemessene“ Frist zur Nacherfüllung?',
      a: 'Das Gesetz nennt keine Zahl – angemessen ist die Frist, in der die Nachbesserung bei zügiger Arbeit tatsächlich möglich ist. Bei einer kleinen Ausbesserung sind zwei Wochen üblich, bei umfangreichen Gewerken mehr. Zu kurz gesetzt ist nicht unwirksam: An die Stelle der zu kurzen Frist tritt dann die angemessene.',
    },
    {
      q: 'Muss ich die Reparatur vorstrecken, wenn ich sie selbst beauftrage?',
      a: 'Nein. Nach Ablauf der Nacherfüllungsfrist können Sie für die erforderlichen Aufwendungen Vorschuss verlangen (§ 637 Abs. 3 BGB). Das ist ausdrücklich vorgesehen, damit die Beseitigung nicht an Ihrer Liquidität scheitert.',
    },
    {
      q: 'Der Handwerker will ein Abnahmeprotokoll unterschrieben haben. Soll ich das tun?',
      a: 'Sie dürfen die Abnahme wegen unwesentlicher Mängel nicht verweigern (§ 640 Abs. 1 BGB). Entscheidend ist deshalb der Vorbehalt: Tragen Sie jeden bekannten Mangel im Protokoll ein. Wer in Kenntnis eines Mangels ohne Vorbehalt abnimmt, verliert insoweit die Rechte aus § 634 Nr. 1 bis 3 BGB (§ 640 Abs. 3 BGB).',
    },
    {
      q: 'Gilt für meinen Auftrag die Zwei- oder die Fünfjahresfrist?',
      a: 'Fünf Jahre gelten bei einem Bauwerk und bei Planungs- oder Überwachungsleistungen dafür, zwei Jahre bei einem Werk, dessen Erfolg in der Herstellung, Wartung oder Veränderung einer Sache besteht (§ 634a Abs. 1 BGB). Die Einordnung hängt am Einzelfall – klären Sie sie, solange die kürzere Frist noch läuft.',
    },
    {
      q: 'Darf ich die Rechnung kürzen, weil die Arbeit mangelhaft ist?',
      a: 'Die Minderung ist eines der Rechte, die erst nach erfolgloser Nacherfüllungsfrist offenstehen (§ 634 BGB). Ein Zurückbehaltungsrecht kann davor bestehen, aber nur in einem Umfang, der zum Mangel passt. Die gesamte Schlussrechnung wegen eines einzelnen Punktes einzubehalten, bringt Sie selbst in Verzug.',
    },
  ],
  relatedGenerators: ['maengelruege-handwerker', 'reklamation-kaufvertrag', 'widerruf-online-kauf'],
  lastReviewed: '2026-08-28',
};

export default guide;
