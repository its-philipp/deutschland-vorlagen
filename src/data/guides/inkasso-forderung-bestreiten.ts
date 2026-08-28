import type { GuideConfig } from '../../lib/guide-config';

/**
 * Written against measured demand (docs/data/gsc-queries-2026-08-27.txt): the
 * inkasso cluster is 14 queries / 50 impressions, with "inkasso forderung
 * bestreiten" at position 58 and "widerspruch gegen inkasso forderung muster"
 * at 9. "forderungsaufstellung inkasso" is the reason § 13a RDG carries this
 * guide — that norm is the answer to what those searchers actually want.
 *
 * All § citations are carried by widerspruch-inkasso-forderung; §§ 13a RDG,
 * 288, 195, 199 BGB and 694 ZPO were read against the primary text at
 * gesetze-im-internet.de on 2026-08-27 before being added there.
 *
 * RDG-safe: describes what the law obliges the collector to do and what the
 * reader may demand. It does not assess whether a given claim is valid.
 */
const guide: GuideConfig = {
  slug: 'inkasso-forderung-bestreiten',
  h1: 'Inkasso-Forderung bestreiten: Was Sie verlangen dürfen',
  metaTitle: 'Inkasso-Forderung bestreiten: Rechte und Ablauf 2026',
  metaDescription:
    'Ein Inkassodienstleister muss Ihnen ungefragt sagen, woher die Forderung stammt und wie die Kosten entstanden sind. Was § 13a RDG verlangt.',
  icon: 'euro',
  intro:
    'Ein Inkassoschreiben ist kein Urteil und kein Bescheid. Es ist die Forderung eines Unternehmens, das im Auftrag eines anderen schreibt — und dieses Unternehmen trifft eine Reihe von Pflichten, die überraschend konkret sind. Wer sie kennt, muss nicht mit Vermutungen argumentieren, sondern kann Punkt für Punkt einfordern, was ohnehin geschuldet ist.',
  sections: [
    {
      heading: 'Was in dem Schreiben stehen muss — ungefragt',
      paragraphs: [
        'Der wichtigste Hebel steht in § 13a Abs. 1 RDG, und er wird selten genutzt: Ein Inkassodienstleister muss einer Privatperson <strong>schon mit der ersten Geltendmachung</strong> einer Forderung eine ganze Liste von Angaben in Textform übermitteln — klar und verständlich, ohne dass jemand danach fragt.',
      ],
      list: [
        {
          term: 'Wer dahintersteht',
          text: 'Name oder Firma des Auftraggebers samt Anschrift. Die Anschrift darf nur entfallen, wenn dargelegt wird, dass überwiegende schutzwürdige Interessen des Auftraggebers entgegenstehen.',
        },
        {
          term: 'Woraus die Forderung stammt',
          text: 'Der Forderungsgrund, bei Verträgen unter konkreter Darlegung des Vertragsgegenstands und des Datums des Vertragsschlusses. „Forderung aus Vertrag“ ist damit keine ausreichende Angabe.',
        },
        {
          term: 'Wie die Zinsen gerechnet sind',
          text: 'Bei geltend gemachten Zinsen: die zu verzinsende Forderung, der Zinssatz und der Zeitraum. Liegt der Satz über dem gesetzlichen Verzugszinssatz, braucht es einen gesonderten Hinweis und die Begründung, woraus sich der höhere Satz ergibt.',
        },
        {
          term: 'Wie die Inkassokosten entstanden sind',
          text: 'Art, Höhe und Entstehungsgrund der Inkassokosten. Wird Umsatzsteuer mitgefordert, gehört eine Erklärung dazu, dass der Auftraggeber sie nicht als Vorsteuer abziehen kann.',
        },
        {
          term: 'Woher Ihre Adresse kommt',
          text: 'Wurde die Anschrift nicht vom Gläubiger mitgeteilt, sondern anderweitig ermittelt, muss darauf hingewiesen werden — samt Angabe, wie sich Fehler geltend machen lassen.',
        },
        {
          term: 'Wer die Aufsicht führt',
          text: 'Bezeichnung, Anschrift und elektronische Erreichbarkeit der zuständigen Aufsichtsbehörde. Diese Angabe ist der Grund, warum ein Inkassoschreiben eine Beschwerdestelle nennt, auch wenn niemand sie sucht.',
        },
      ],
    },
    {
      heading: 'Und was Sie zusätzlich erfragen können',
      paragraphs: [
        'Zwei weitere Angaben schuldet der Inkassodienstleister auf Anfrage, und zwar unverzüglich und in Textform (§ 13a Abs. 2 RDG): den Namen desjenigen, <em>in dessen Person die Forderung entstanden ist</em>, und bei Verträgen die wesentlichen Umstände des Vertragsschlusses.',
        'Die erste Angabe ist bei aufgekauften Forderungen die entscheidende. Wer das Schreiben eines Inkassounternehmens bekommt, das eine Forderung im eigenen Namen einzieht, erfährt daraus oft nicht, mit wem er ursprünglich zu tun hatte — und ohne diesen Namen lässt sich nicht prüfen, ob je ein Vertrag bestand.',
        'Die zweite ist die Antwort auf den häufigsten Fall überhaupt: ein Vertrag, an den sich niemand erinnert. „Wesentliche Umstände des Vertragsschlusses“ heißt Datum, Weg und Gegenstand — genug, um zu erkennen, ob es sich um eine Bestellung, ein Abonnement oder ein Telefonat gehandelt haben soll.',
      ],
    },
    {
      heading: 'Inkassokosten und Zinsen: Verzug ist die Bedingung',
      paragraphs: [
        'Inkassokosten sind kein Preis, den der Dienstleister setzt, sondern ein Schaden, den der Gläubiger ersetzt verlangt. Und Schadensersatz wegen verspäteter Zahlung setzt <strong>Verzug</strong> voraus: in der Regel eine Mahnung nach Fälligkeit oder einen gesetzlich gleichgestellten Sachverhalt, etwa eine kalendermäßig bestimmte Leistungszeit (§ 286 BGB).',
        'Daraus folgt eine Frage, die sich immer lohnt: Kam vor dem Inkassoschreiben überhaupt eine Mahnung? War das Inkassoschreiben die <em>erste</em> Zahlungsaufforderung, fehlt es regelmäßig an der Grundlage für die Kosten, die es selbst verursacht hat.',
        'Beim Zinssatz lohnt ein zweiter Blick. Gegenüber Verbrauchern beträgt der Verzugszinssatz fünf Prozentpunkte über dem Basiszinssatz (§ 288 Abs. 1 BGB). Die höheren neun Prozentpunkte und die Pauschale von 40 Euro gelten nur bei Rechtsgeschäften, an denen <strong>kein Verbraucher</strong> beteiligt ist (§ 288 Abs. 2 und 5 BGB) — tauchen sie in einer Forderung gegen eine Privatperson auf, ist das ein Punkt, der erklärt werden muss.',
      ],
    },
    {
      heading: 'Die Falle, vor der das Gesetz ausdrücklich warnen lässt',
      paragraphs: [
        'Wenn ein Inkassodienstleister eine Ratenzahlung anbietet, klingt das nach Entgegenkommen. Zwei Absätze des § 13a RDG zeigen, warum der Gesetzgeber dort eine Warnpflicht für nötig hielt.',
        'Vor einer Stundungs- oder Ratenzahlungsvereinbarung muss der Dienstleister in Textform auf die <strong>dadurch entstehenden Kosten</strong> hinweisen (Abs. 3). Eine Ratenzahlung ist also nicht kostenneutral, und die Höhe dieser Kosten gehört auf den Tisch, bevor unterschrieben wird.',
        'Noch deutlicher ist Absatz 4: Fordert ein Inkassodienstleister zur Abgabe eines <strong>Schuldanerkenntnisses</strong> auf, muss er in Textform darauf hinweisen, dass damit in der Regel die Möglichkeit verloren geht, Einwendungen und Einreden geltend zu machen, die zu diesem Zeitpunkt begründet waren. Der Hinweis muss typische Beispiele benennen — das Nichtbestehen, die Erfüllung und die <em>Verjährung</em> der Forderung.',
        'Damit ist der Kern in einem Satz gesagt: Wer eine verjährte oder nie entstandene Forderung anerkennt, kann sich hinterher auf beides nicht mehr berufen. Eine Teilzahlung „zur Ruhe“ kann dieselbe Wirkung haben.',
      ],
    },
    {
      heading: 'Wie alt darf die Forderung sein?',
      paragraphs: [
        'Die regelmäßige Verjährungsfrist beträgt drei Jahre (§ 195 BGB). Entscheidend ist ihr Beginn: Sie startet nicht am Tag der Rechnung, sondern <strong>mit dem Schluss des Jahres</strong>, in dem der Anspruch entstanden ist und der Gläubiger von den Umständen und der Person des Schuldners Kenntnis hatte oder ohne grobe Fahrlässigkeit hätte haben müssen (§ 199 Abs. 1 BGB).',
        'Eine Forderung aus dem Frühjahr 2022 verjährt danach regelmäßig mit Ablauf des 31. Dezember 2025 — nicht drei Jahre nach der Rechnung. Das erklärt, warum im Dezember besonders viele Inkassoschreiben zu alten Vorgängen kommen.',
        'Wichtig ist, was Verjährung <em>nicht</em> ist: Die Forderung erlischt nicht, sie wird nur nicht mehr durchsetzbar — und zwar erst, wenn sich der Schuldner darauf beruft. Von selbst prüft das niemand. Genau deshalb ist das Schuldanerkenntnis aus dem vorigen Abschnitt so folgenreich.',
      ],
    },
    {
      heading: 'Wenn Post vom Gericht kommt, ändert sich alles',
      paragraphs: [
        'Solange Inkassoschreiben kommen, verhandeln zwei Private miteinander. Ein <strong>Mahnbescheid</strong> ist etwas anderes: Er kommt vom Amtsgericht in einem gelben Umschlag, und ab ihm laufen Fristen, die niemand nachreichen kann.',
        'Gegen den Anspruch oder einen Teil davon können Sie beim erlassenden Gericht schriftlich <strong>Widerspruch</strong> erheben, solange der Vollstreckungsbescheid nicht verfügt ist (§ 694 Abs. 1 ZPO); praktisch sind das zwei Wochen ab Zustellung, und ein Formular liegt bei. Ein verspäteter Widerspruch wird als Einspruch behandelt (Abs. 2) — eine Auffanglösung, kein Ersatz für Pünktlichkeit.',
        'Ein Widerspruch beim Inkassobüro ersetzt den Widerspruch beim Gericht ausdrücklich <strong>nicht</strong>. Das ist der teuerste Irrtum in diesem Themenfeld: Wer dem Inkassounternehmen bereits geschrieben hat und den gerichtlichen Vordruck deshalb liegen lässt, bekommt einen Vollstreckungsbescheid.',
        'Ab dieser Stufe geht es um ein Gerichtsverfahren, nicht mehr um Schriftverkehr. Wenn ein Mahnbescheid vorliegt, ein hoher Betrag im Raum steht oder die Sache unübersichtlich ist, ist das der Punkt für Beratung — Verbraucherzentrale, Schuldnerberatung oder Beratungshilfe.',
      ],
    },
  ],
  legalBasis: [
    {
      ref: '§ 13a RDG',
      url: 'https://www.gesetze-im-internet.de/rdg/__13a.html',
      note: 'Inkassodienstleister müssen einer Privatperson schon mit der ersten Geltendmachung in Textform mitteilen: Auftraggeber samt Anschrift, den Forderungsgrund (bei Verträgen Vertragsgegenstand und Datum des Vertragsschlusses), die Zinsberechnung, Art, Höhe und Entstehungsgrund der Inkassokosten sowie die zuständige Aufsichtsbehörde (Abs. 1). Auf Anfrage sind ergänzend der ursprüngliche Gläubiger und die wesentlichen Umstände des Vertragsschlusses mitzuteilen (Abs. 2). Vor einer Ratenzahlungsvereinbarung ist auf die dadurch entstehenden Kosten hinzuweisen (Abs. 3), vor einem Schuldanerkenntnis darauf, dass damit in der Regel Einwendungen und Einreden – etwa die Verjährung – verloren gehen (Abs. 4).',
    },
    {
      ref: '§ 10 RDG',
      url: 'https://www.gesetze-im-internet.de/rdg/__10.html',
      note: 'Inkassodienstleistungen dürfen nur von beim Bundesamt für Justiz registrierten Personen/Unternehmen erbracht werden; die Registrierung kann kostenlos im Rechtsdienstleistungsregister überprüft werden.',
    },
    {
      ref: '§ 286 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__286.html',
      note: 'Verzug setzt in der Regel eine Mahnung nach Fälligkeit voraus (oder einen gesetzlich gleichgestellten Sachverhalt, z. B. eine kalendermäßig bestimmte Leistungszeit); erst ab Verzug können Verzugszinsen und bestimmte Inkassokosten entstehen.',
    },
    {
      ref: '§ 288 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__288.html',
      note: 'Während des Verzugs ist eine Geldschuld zu verzinsen; gegenüber Verbrauchern beträgt der Verzugszinssatz fünf Prozentpunkte über dem Basiszinssatz (Abs. 1). Der Satz von neun Prozentpunkten und die Pauschale von 40 Euro gelten nur bei Rechtsgeschäften ohne Verbraucherbeteiligung (Abs. 2, Abs. 5).',
    },
    {
      ref: '§ 195 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__195.html',
      note: 'Die regelmäßige Verjährungsfrist beträgt drei Jahre.',
    },
    {
      ref: '§ 199 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__199.html',
      note: 'Die regelmäßige Verjährungsfrist beginnt mit dem Schluss des Jahres, in dem der Anspruch entstanden ist und der Gläubiger von den anspruchsbegründenden Umständen und der Person des Schuldners Kenntnis erlangt oder ohne grobe Fahrlässigkeit erlangen müsste (Abs. 1).',
    },
    {
      ref: '§ 694 ZPO',
      url: 'https://www.gesetze-im-internet.de/zpo/__694.html',
      note: 'Gegen einen Mahnbescheid kann der Antragsgegner beim erlassenden Gericht schriftlich Widerspruch erheben, solange der Vollstreckungsbescheid nicht verfügt ist (Abs. 1). Ein verspäteter Widerspruch wird als Einspruch behandelt (Abs. 2).',
    },
  ],
  faq: [
    {
      q: 'Muss ich auf ein Inkassoschreiben überhaupt reagieren?',
      a: 'Es gibt keine gesetzliche Antwortpflicht. Wer die Forderung für unberechtigt hält, fährt mit einer schriftlichen Reaktion trotzdem besser: Sie dokumentiert den Widerspruch, fordert die Angaben nach § 13a RDG ein und ist später der Beleg dafür, dass die Forderung von Anfang an bestritten war.',
    },
    {
      q: 'Das Schreiben nennt keinen Vertrag und keinen Gläubiger. Ist das zulässig?',
      a: 'Nein. § 13a Abs. 1 RDG verlangt bereits mit der ersten Geltendmachung den Auftraggeber und den Forderungsgrund, bei Verträgen mit Vertragsgegenstand und Datum des Vertragsschlusses. Fehlen diese Angaben, können Sie sie anfordern – und nach Absatz 2 zusätzlich, in wessen Person die Forderung entstanden ist.',
    },
    {
      q: 'Ist ein Ratenzahlungsangebot eine gute Idee?',
      a: 'Es ist jedenfalls keine neutrale Entscheidung. Vor einer Stundungs- oder Ratenzahlungsvereinbarung muss der Inkassodienstleister in Textform auf die dadurch entstehenden Kosten hinweisen (§ 13a Abs. 3 RDG). Und wenn die Vereinbarung ein Schuldanerkenntnis enthält, verlieren Sie damit in der Regel Einwendungen gegen die Forderung, einschließlich der Verjährung (Abs. 4).',
    },
    {
      q: 'Die Forderung ist von 2021 – muss ich noch zahlen?',
      a: 'Die regelmäßige Verjährung beträgt drei Jahre und beginnt mit dem Schluss des Jahres, in dem der Anspruch entstanden ist (§§ 195, 199 Abs. 1 BGB). Verjährung wirkt aber nur, wenn man sich darauf beruft – und ein Anerkenntnis oder eine Teilzahlung kann die Lage verändern. Bei alten Forderungen lohnt sich Beratung, bevor Sie etwas unterschreiben oder überweisen.',
    },
    {
      q: 'Ich habe dem Inkassobüro widersprochen und jetzt kommt ein Mahnbescheid vom Gericht. Reicht mein Widerspruch?',
      a: 'Nein. Der Widerspruch gegen den Mahnbescheid ist beim Gericht zu erheben, das ihn erlassen hat, solange der Vollstreckungsbescheid nicht verfügt ist (§ 694 Abs. 1 ZPO) – praktisch innerhalb von zwei Wochen, mit dem beiliegenden Formular. Schriftverkehr mit dem Inkassounternehmen ersetzt das nicht.',
    },
  ],
  relatedGenerators: ['widerspruch-inkasso-forderung', 'schufa-eintrag-loeschung', 'widerruf-online-kauf'],
  lastReviewed: '2026-08-27',
};

export default guide;
