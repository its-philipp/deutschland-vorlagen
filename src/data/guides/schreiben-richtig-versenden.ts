import type { GuideConfig } from '../../lib/guide-config';

/**
 * No § citations of its own on purpose. The rules about when a declaration
 * takes effect on arrival are settled law, but the specific norms were not
 * verified against the primary text for this guide — so the guide describes
 * the practical consequence and cites nothing it has not checked.
 */
const guide: GuideConfig = {
  slug: 'schreiben-richtig-versenden',
  h1: 'Wichtige Schreiben versenden: Welcher Weg beweist den Zugang?',
  metaTitle: 'Einschreiben oder Einwurf? Zugang richtig nachweisen 2026',
  metaDescription:
    'Einwurf-Einschreiben, Übergabe-Einschreiben, Bote, Fax oder E-Mail: Welcher Versandweg den Zugang belegt – und welcher ihn gefährdet.',
  intro:
    'Ein fristgerechtes Schreiben nützt nichts, wenn sich nicht belegen lässt, dass es rechtzeitig angekommen ist. Entscheidend ist fast nie das Absendedatum, sondern der Zugang – und genau darüber streiten die Beteiligten hinterher.',
  icon: 'print',
  sections: [
    {
      heading: 'Das Missverständnis, das am meisten kostet',
      paragraphs: [
        'Die häufigste Fehlannahme lautet: „Ich habe es rechtzeitig abgeschickt, also ist die Frist gewahrt.“ Für die allermeisten Schreiben stimmt das nicht. Eine Kündigung, ein Widerspruch, eine Mängelanzeige werden erst wirksam, wenn sie beim Empfänger angekommen sind – wenn sie also in seinen Machtbereich gelangt sind und er unter gewöhnlichen Umständen davon Kenntnis nehmen konnte. Der Brief, der am 30. eingeworfen wird und am 2. im Briefkasten landet, ist ein Schreiben vom 2.',
        'Es gibt Ausnahmen, und sie sind wichtig: Beim Widerruf eines Online-Kaufs genügt die rechtzeitige Absendung, um die 14-Tage-Frist zu wahren (§ 355 Abs. 1 BGB). Das ist aber die Ausnahme, nicht die Regel – und sie gilt nur für den Widerruf, nicht für die Kündigung desselben Vertrags.',
        'Praktisch heißt das zweierlei. Erstens: Planen Sie Postlaufzeit ein, und zwar großzügig. Zwei bis drei Werktage sind eine realistische Annahme, an Feiertagen mehr. Zweitens: Wählen Sie einen Versandweg, mit dem Sie den Zugang später belegen können – denn beweisen muss ihn im Streitfall derjenige, der sich auf das Schreiben beruft. Das sind in aller Regel Sie.',
      ],
    },
    {
      heading: 'Die Versandwege im Vergleich',
      paragraphs: [
        'Kein Weg ist immer der richtige. Was Sie brauchen, hängt davon ab, wie wahrscheinlich Streit ist und wie viel bei einem verlorenen Schreiben auf dem Spiel steht.',
      ],
      list: [
        {
          term: 'Einwurf-Einschreiben',
          text: 'Der Zusteller wirft den Brief in den Briefkasten und dokumentiert Datum und Uhrzeit. Der Auslieferungsbeleg lässt sich online abrufen und speichern. Für die meisten Fälle ist das der beste Kompromiss: Es kommt an, auch wenn niemand zu Hause ist, und es entsteht ein Nachweis. Der Beleg belegt streng genommen nur den Einwurf, nicht den Inhalt – in der Praxis reicht das fast immer, weil Gerichte einen ordnungsgemäß dokumentierten Einwurf als starkes Indiz behandeln.',
        },
        {
          term: 'Übergabe-Einschreiben',
          text: 'Wird nur gegen Unterschrift ausgehändigt. Klingt sicherer und ist in einem Punkt schlechter: Ist niemand da, landet nur eine Benachrichtigungskarte im Briefkasten. Holt der Empfänger den Brief nicht ab, ist er nicht zugegangen – und Ihre Frist verstreicht, obwohl Sie alles richtig gemacht haben. Für fristgebundene Schreiben ist das Einwurf-Einschreiben deshalb meist die bessere Wahl.',
        },
        {
          term: 'Einschreiben mit Rückschein',
          text: 'Übergabe-Einschreiben plus unterschriebener Rückschein, der zu Ihnen zurückgeht. Der stärkste Nachweis – mit demselben Nachteil wie oben: Nimmt der Empfänger nicht an, gibt es keinen Zugang. Sinnvoll, wenn Sie mit einem Empfänger rechnen, der den Zugang später bestreitet, aber sicher erreichbar ist.',
        },
        {
          term: 'Bote',
          text: 'Eine zweite Person wirft den Brief ein und kann später bezeugen, was in dem Umschlag lag und wann er im Briefkasten war. Der Bote sollte das Schreiben vor dem Einkuvertieren gelesen haben – genau das unterscheidet den Boten vom Einwurf-Einschreiben, das den Inhalt nicht belegt. Kostenlos, sehr belastbar, aber die Person muss im Zweifel erreichbar und aussagebereit sein. Familienangehörige sind zulässig, wirken vor Gericht aber weniger überzeugend als Unbeteiligte.',
        },
        {
          term: 'Persönliche Übergabe gegen Empfangsbestätigung',
          text: 'Der sicherste Weg, wenn er möglich ist: Sie übergeben das Schreiben und lassen sich den Empfang auf einer Kopie mit Datum quittieren. Üblich bei Kündigungen im Betrieb und bei Behörden, die einen Eingangsstempel auf Ihre Zweitschrift setzen.',
        },
        {
          term: 'Einfacher Brief',
          text: 'Kein Nachweis. Für alles Fristgebundene ungeeignet – nicht weil Briefe oft verloren gehen, sondern weil Sie im Streitfall nichts in der Hand haben. Für unkritische Schreiben, bei denen ein zweiter Versuch nichts kostet, genügt er.',
        },
        {
          term: 'Fax',
          text: 'Der Sendebericht ist ein Nachweis über den Übertragungsvorgang, wird von Gerichten aber nicht einheitlich als Zugangsbeweis behandelt. Vor allem: Für Erklärungen, die der Schriftform bedürfen, genügt ein Fax nicht. Als schneller Zweitweg neben einem Brief kann es sinnvoll sein, als alleiniger Weg selten.',
        },
        {
          term: 'E-Mail',
          text: 'Schnell und praktisch überall dort, wo Textform genügt – aber die Sendebestätigung Ihres Programms belegt nur, dass Sie abgeschickt haben. Bitten Sie um eine Empfangsbestätigung, und bewahren Sie die Antwort auf: Sie ist der eigentliche Nachweis. Für schriftformbedürftige Erklärungen wie die Kündigung eines Arbeits- oder Mietverhältnisses ist E-Mail unwirksam, unabhängig vom Nachweis.',
        },
      ],
    },
    {
      heading: 'Welchen Weg wofür',
      paragraphs: [
        'Als Faustregel: Je unangenehmer die Folge eines verlorenen Schreibens, desto mehr Nachweis lohnt sich. Bei einer Kündigung des Arbeits- oder Mietverhältnisses, einem Widerspruch gegen einen Bescheid und einem Einspruch gegen einen Bußgeldbescheid ist der Nachweis das Geld wert – hier hängt an der Frist häufig der ganze Anspruch.',
        'Bei einer Abo-Kündigung, einer Mängelrüge oder einer Zahlungsaufforderung reicht meist der günstigere Weg, weil sich ein misslungener Versuch ohne bleibenden Schaden wiederholen lässt. Erhöhen Sie den Aufwand, sobald der Empfänger nicht reagiert oder den Erhalt bestreitet.',
        'Zwei Dinge lohnen sich immer, unabhängig vom Weg: Machen Sie eine Kopie oder ein Foto des unterschriebenen Schreibens, bevor es in den Umschlag geht, und notieren Sie das Absendedatum darauf. Und heben Sie Beleg und Kopie zusammen auf – der Beleg allein sagt nichts darüber, was Sie geschickt haben.',
      ],
    },
    {
      heading: 'Was Sie beim Adressieren falsch machen können',
      paragraphs: [
        'Ein Schreiben muss den Richtigen erreichen. Bei Unternehmen ist das die im Impressum oder im Vertrag genannte Gesellschaft mit ihrer vollständigen Firmierung, nicht die Marke auf der Rechnung. Die „Musterstrom GmbH“ und die „Musterstrom Vertrieb GmbH“ können zwei verschiedene Vertragspartner sein.',
        'Bei Behörden geht das Schreiben an die Stelle, die den Bescheid erlassen hat – bei Widerspruch und Einspruch steht das ausdrücklich im Gesetz und in der Rechtsbehelfsbelehrung. Schicken Sie es an die Aufsichtsbehörde oder an eine andere Abteilung, ist die Frist nicht sicher gewahrt.',
        'Bei mehreren Vermietern oder mehreren Mietern gilt: Eine Kündigung muss von allen Mietern erklärt und an alle Vermieter gerichtet werden. Das ist der Klassiker unter den unwirksamen Kündigungen – der Text stimmt, aber es fehlt eine Unterschrift.',
      ],
    },
  ],
  legalBasis: [
    {
      ref: '§ 355 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__355.html',
      note: 'Die Widerrufsfrist beträgt 14 Tage; eine formlose, aber eindeutige Erklärung genügt, eine Begründung ist nicht erforderlich. Zur Fristwahrung reicht die rechtzeitige Absendung – die Ausnahme von der Zugangsregel.',
    },
    {
      ref: '§ 623 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__623.html',
      note: 'Kündigungen von Arbeitsverhältnissen bedürfen zu ihrer Wirksamkeit der Schriftform (eigenhändige Unterschrift); die elektronische Form ist ausdrücklich ausgeschlossen. E-Mail, Fax, SMS oder Messenger-Nachrichten sind damit unwirksam.',
    },
    {
      ref: '§ 568 Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__568.html',
      note: 'Die Kündigung eines Mietverhältnisses bedarf der schriftlichen Form: Das Schreiben muss eigenhändig unterschrieben im Original zugehen (§ 126 BGB) – E-Mail, Fax oder eine eingescannte Unterschrift genügen nicht.',
    },
  ],
  faq: [
    {
      q: 'Reicht es, wenn ich den Brief am letzten Tag der Frist einwerfe?',
      a: 'In aller Regel nicht. Maßgeblich ist der Zugang beim Empfänger, nicht die Absendung. Eine Ausnahme ist der Widerruf nach § 355 BGB, bei dem die rechtzeitige Absendung genügt. Planen Sie sonst zwei bis drei Werktage Postlaufzeit ein.',
    },
    {
      q: 'Ist ein Einwurf-Einschreiben oder ein Übergabe-Einschreiben besser?',
      a: 'Für fristgebundene Schreiben meist das Einwurf-Einschreiben. Es kommt auch an, wenn niemand zu Hause ist. Beim Übergabe-Einschreiben landet in diesem Fall nur eine Benachrichtigung im Briefkasten – wird der Brief nicht abgeholt, ist er nicht zugegangen und die Frist verstreicht.',
    },
    {
      q: 'Muss ich das Original unterschreiben oder genügt ein Scan?',
      a: 'Das hängt von der vorgeschriebenen Form ab. Wo Schriftform gilt – etwa bei der Kündigung eines Arbeitsverhältnisses (§ 623 BGB) oder eines Mietverhältnisses (§ 568 Abs. 1 BGB) – muss das eigenhändig unterschriebene Original zugehen. Ein Scan oder eine eingefügte Unterschriftsgrafik genügt dort nicht.',
    },
    {
      q: 'Wer muss beweisen, dass das Schreiben angekommen ist?',
      a: 'Derjenige, der sich auf das Schreiben beruft – also im Normalfall Sie als Absender. Deshalb ist der Nachweis kein Formalismus, sondern der eigentliche Grund für die Wahl des Versandwegs.',
    },
    {
      q: 'Was mache ich, wenn der Empfänger den Erhalt bestreitet?',
      a: 'Legen Sie den Auslieferungsbeleg und die Kopie des Schreibens vor und setzen Sie eine neue, kurze Frist. Bleibt es streitig, ist das der Punkt, an dem sich eine anwaltliche Beratung oder die Beratung durch Mieterverein, Gewerkschaft oder Verbraucherzentrale lohnt.',
    },
  ],
  relatedGenerators: [
    'kuendigung-mietvertrag',
    'kuendigung-arbeitsvertrag',
    'widerspruch-bescheid',
    'einspruch-bussgeldbescheid',
  ],
  lastReviewed: '2026-08-15',
};

export default guide;
