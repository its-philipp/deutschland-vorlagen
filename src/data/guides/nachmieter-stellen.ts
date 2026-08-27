import type { GuideConfig } from '../../lib/guide-config';

/**
 * Written against measured demand (docs/data/gsc-queries-2026-08-27.txt): nine
 * queries at positions 23-53 — "nachmieter vorschlagen muster" (23),
 * "mietvertrag nachmieter muster" (25), "nachmieter gesucht muster" (29),
 * "nachmieter vorschlagen" (53.3, 7 impressions).
 *
 * The whole point of the piece is the thing those searches assume and the law
 * does not grant: there is no general right to be released early by naming a
 * successor. All § citations are carried by nachmieter-vorschlagen,
 * kuendigung-mietvertrag and untermieterlaubnis-anfragen.
 */
const guide: GuideConfig = {
  slug: 'nachmieter-stellen',
  h1: 'Nachmieter stellen: Was der Vermieter darf und was nicht',
  metaTitle: 'Nachmieter stellen: Anspruch, Frist und Ablauf 2026',
  metaDescription:
    'Drei Nachmieter zu nennen begründet keinen Anspruch auf vorzeitige Entlassung. Was wirklich gilt – und wie ein Vorschlag trotzdem angenommen wird.',
  icon: 'home',
  intro:
    'Kaum ein Mietrechtsthema wird so beharrlich falsch erzählt wie dieses: „Wenn ich drei Nachmieter stelle, komme ich sofort aus dem Vertrag." Das ist keine Regel, sondern ein Gerücht. Der Weg über einen Nachmieter funktioniert trotzdem oft — nur beruht er auf Verhandlung, und wer das weiß, verhandelt besser.',
  sections: [
    {
      heading: 'Die unbequeme Ausgangslage',
      paragraphs: [
        'Ein Mietvertrag endet für den Mieter durch ordentliche Kündigung: spätestens am dritten Werktag eines Kalendermonats zum Ablauf des übernächsten Monats (§ 573c Abs. 1 BGB). Das sind rund drei Monate, und sie gelten für den Mieter unabhängig davon, wie lange er schon in der Wohnung wohnt — die Verlängerung nach fünf und acht Jahren betrifft nur den Vermieter.',
        'Einen gesetzlichen Anspruch darauf, statt dieser Frist einen Nachmieter zu stellen und sofort zu gehen, gibt es <strong>nicht</strong>. Der Vermieter darf einen vorgeschlagenen Nachmieter ablehnen, auch ohne dafür einen Grund zu nennen, und muss den Vertrag bis zum regulären Ende erfüllt bekommen.',
        'Die Kündigung selbst braucht übrigens die Schriftform: eigenhändig unterschrieben, im Original zugegangen (§ 568 Abs. 1 BGB). E-Mail, Fax oder eine eingescannte Unterschrift genügen nicht — das ist der Punkt, an dem ein Auszugstermin am häufigsten kippt.',
      ],
    },
    {
      heading: 'Die schmale Ausnahme, und warum sie schmal ist',
      paragraphs: [
        'Aus dem Grundsatz von Treu und Glauben (§ 242 BGB) kann sich in eng begrenzten Ausnahmefällen doch eine Pflicht des Vermieters ergeben, den Mieter bei Stellung eines geeigneten Nachmieters vorzeitig zu entlassen. Die Rechtsprechung verlangt dafür, dass das Interesse des Mieters an der Auflösung das Interesse des Vermieters am Fortbestand <strong>ganz erheblich überwiegt</strong>.',
        'Das ist ein hoher Maßstab, und er wird regelmäßig falsch eingeschätzt. Ein neuer Job in einer anderen Stadt, ein Umzug zum Partner, eine gefundene Traumwohnung — das sind gute Gründe, aber es sind die üblichen Gründe. „Ganz erheblich überwiegend" zielt auf Lagen, in denen das Festhalten am Vertrag den Mieter unzumutbar trifft: schwere Krankheit, Pflegebedürftigkeit, ein Umzug ins Heim, wirtschaftliche Existenznot.',
        'Hinzu kommt, dass die Ausnahme praktisch nur dort greift, wo die reguläre Kündigung nicht hilft — also vor allem beim <strong>Zeitmietvertrag</strong> oder bei einem wirksam vereinbarten Kündigungsverzicht. Wer ohnehin mit drei Monaten kündigen kann, wird sich auf § 242 BGB kaum berufen können: Dann ist das Festhalten am Vertrag für diese drei Monate selten unzumutbar.',
        'Für den Regelfall heißt das: Behandeln Sie den Nachmieter nicht als Anspruch, sondern als Angebot. Das ändert den Ton des Schreibens — und der Ton entscheidet hier mehr als die Rechtslage.',
      ],
    },
    {
      heading: 'Was einen Vorschlag annehmbar macht',
      paragraphs: [
        'Ein Vermieter, der einen Nachmieter akzeptiert, verzichtet auf Miete, die ihm zusteht, und übernimmt ein Risiko, das er nicht ausgesucht hat. Ein Vorschlag wird deshalb in dem Maß angenommen, in dem er dieses Risiko kleiner macht als die Alternative.',
      ],
      list: [
        {
          term: 'Zumutbar in der Person',
          text: 'Der Kandidat muss die Miete tragen können. Nennen Sie von sich aus, was ohnehin gefragt wird: Beruf, gesichertes Einkommen, Selbstauskunft, Bonitätsauskunft — und überlassen Sie die Prüfung ausdrücklich dem Vermieter.',
        },
        {
          term: 'Bereit zu denselben Bedingungen',
          text: 'Der stärkste Satz in jedem Nachmieter-Schreiben lautet, dass der Kandidat den Vertrag zu den bestehenden Konditionen unverändert übernehmen will. Damit entfällt der häufigste Ablehnungsgrund — die Sorge vor Nachverhandlung.',
        },
        {
          term: 'Mehr als einer',
          text: 'Die „drei Nachmieter" sind rechtlich keine Schwelle, praktisch aber eine gute Idee: Sie geben dem Vermieter eine Wahl und nehmen dem Vorschlag den Charakter eines Ultimatums.',
        },
        {
          term: 'Mit einem klaren Datum',
          text: 'Nennen Sie den Termin, zu dem die Übergabe möglich wäre, und was Sie bis dahin regeln — Renovierung, Übergabeprotokoll, Ablesung. Ein Vorschlag mit Datum ist eine Planung, einer ohne ist eine Bitte.',
        },
      ],
    },
    {
      heading: 'Was Sie nicht schreiben sollten',
      paragraphs: [
        '<strong>Kein Ultimatum.</strong> „Ich habe drei Nachmieter gestellt, damit endet mein Vertrag zum 30." ist rechtlich unzutreffend und beendet die Verhandlung, bevor sie beginnt. Der Vertrag endet, wenn beide Seiten das vereinbaren — oder mit der Kündigungsfrist.',
        '<strong>Keine Verknüpfung mit dem Auszug.</strong> Wer vor der Einigung auszieht und die Wohnung zurückgibt, schuldet die Miete weiter bis zum Vertragsende. Die Schlüsselübergabe ist kein Ersatz für eine Vereinbarung.',
        '<strong>Kein Vertrag zwischen Ihnen und dem Kandidaten.</strong> Der neue Mietvertrag entsteht zwischen Vermieter und Nachmieter. Absprachen über Ablösen für Einbauküche oder Möbel gehören in eine getrennte Vereinbarung zwischen Ihnen beiden — und sie dürfen nicht zur Bedingung des Mietvertrags gemacht werden.',
        'Und sichern Sie den Zugang: Kündigung und Nachmieter-Vorschlag sind zwei verschiedene Schreiben mit zwei verschiedenen Zwecken. Kündigen Sie fristgerecht, <em>auch wenn</em> Sie parallel einen Nachmieter anbieten. Klappt die Übernahme, endet der Vertrag früher; klappt sie nicht, läuft wenigstens die reguläre Frist.',
      ],
    },
    {
      heading: 'Untermiete: hier gibt es tatsächlich einen Anspruch',
      paragraphs: [
        'Wer nicht dauerhaft raus will, sondern nur für eine Zeit — Auslandssemester, befristete Stelle, Probejahr in einer anderen Stadt —, steht rechtlich viel besser da. Entsteht für den Mieter <em>nach</em> Vertragsschluss ein berechtigtes Interesse, einen <strong>Teil</strong> der Wohnung einem Dritten zu überlassen, kann er vom Vermieter die Erlaubnis <strong>verlangen</strong> (§ 553 Abs. 1 BGB).',
        'Das ist der entscheidende Unterschied zum Nachmieter: Hier steht ein Anspruch im Gesetz, kein Entgegenkommen. Der Vermieter darf ihn nur abwehren, wenn in der Person des Dritten ein wichtiger Grund liegt, die Wohnung überbelegt würde oder ihm die Überlassung sonst nicht zuzumuten ist. Er darf die Erlaubnis von einer angemessenen Mieterhöhung abhängig machen, wenn ihm die Überlassung sonst nicht zumutbar wäre (Abs. 2); Vereinbarungen zum Nachteil des Mieters sind unwirksam (Abs. 3).',
        'Die Grenze steht im Wortlaut: <em>einen Teil</em> der Wohnung. Für die vollständige Überlassung der gesamten Wohnung gilt dieser Anspruch nicht — und wer ohne Erlaubnis untervermietet, riskiert eine Abmahnung und im Wiederholungsfall die Kündigung.',
      ],
    },
  ],
  legalBasis: [
    {
      ref: '§ 573c Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__573c.html',
      note: 'Die ordentliche Kündigung ist spätestens am dritten Werktag eines Kalendermonats zum Ablauf des übernächsten Monats zulässig. Für den Mieter bleibt diese Grundfrist von rund drei Monaten unabhängig von der Mietdauer unverändert; die Verlängerung nach fünf bzw. acht Jahren gilt nur für den Vermieter.',
    },
    {
      ref: '§ 242 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__242.html',
      note: 'Grundsatz von Treu und Glauben. Nach der Rechtsprechung kann sich hieraus in eng begrenzten Ausnahmefällen („Härtefälle“) eine Pflicht des Vermieters ergeben, den Mieter bei Stellung eines geeigneten Nachmieters vorzeitig aus dem Mietvertrag zu entlassen – vorausgesetzt, das Interesse des Mieters an der Auflösung überwiegt das Interesse des Vermieters am Fortbestand ganz erheblich. Ein allgemeiner Anspruch besteht nicht.',
    },
    {
      ref: '§ 568 Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__568.html',
      note: 'Die Kündigung eines Mietverhältnisses bedarf der schriftlichen Form: Das Schreiben muss eigenhändig unterschrieben im Original zugehen (§ 126 BGB) – E-Mail, Fax oder eine eingescannte Unterschrift genügen nicht.',
    },
    {
      ref: '§ 553 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__553.html',
      note: 'Entsteht für den Mieter nach Vertragsschluss ein berechtigtes Interesse, einen Teil der Wohnung einem Dritten zu überlassen, kann er vom Vermieter die Erlaubnis verlangen (Abs. 1) – außer bei einem wichtigen Grund in der Person des Dritten, Überbelegung oder sonstiger Unzumutbarkeit. Der Vermieter darf die Erlaubnis von einer angemessenen Mieterhöhung abhängig machen, wenn ihm die Überlassung sonst nicht zumutbar ist (Abs. 2). Abweichende Vereinbarungen zum Nachteil des Mieters sind unwirksam (Abs. 3).',
    },
  ],
  faq: [
    {
      q: 'Stimmt es, dass ich mit drei Nachmietern sofort aus dem Vertrag komme?',
      a: 'Nein. Diese Zahl steht in keinem Gesetz. Ein allgemeiner Anspruch auf vorzeitige Entlassung gegen Stellung eines Nachmieters besteht nicht; der Vermieter kann ablehnen. Drei Kandidaten sind trotzdem sinnvoll – sie erhöhen die Chance auf eine Einigung.',
    },
    {
      q: 'Ich habe einen Zeitmietvertrag. Gilt für mich dasselbe?',
      a: 'Dort ist die Nachmieterfrage praktisch am wichtigsten, weil eine ordentliche Kündigung nicht zur Verfügung steht. Genau in diesen Fällen kommt die enge Ausnahme aus § 242 BGB überhaupt in Betracht – vorausgesetzt, Ihr Interesse an der Auflösung überwiegt das des Vermieters ganz erheblich. Bei einer solchen Konstellation lohnt sich Beratung, etwa beim Mieterverein.',
    },
    {
      q: 'Muss ich kündigen, wenn ich ohnehin einen Nachmieter suche?',
      a: 'Ja, kündigen Sie fristgerecht und schriftlich (§§ 573c Abs. 1, 568 Abs. 1 BGB). Der Nachmieter-Vorschlag ist ein zusätzliches Angebot, kein Ersatz für die Kündigung. Klappt die Übernahme, endet der Vertrag früher; klappt sie nicht, läuft die reguläre Frist.',
    },
    {
      q: 'Darf ich vom Nachmieter Geld für die Einbauküche verlangen?',
      a: 'Untereinander können Sie eine Ablöse vereinbaren. Sie darf aber nicht zur Bedingung des Mietvertrags gemacht werden – der entsteht zwischen Vermieter und Nachmieter. Halten Sie beides schriftlich getrennt, sonst gerät die Übernahme ins Wanken.',
    },
    {
      q: 'Wäre Untervermietung eine Alternative?',
      a: 'Wenn Sie nur vorübergehend weg sind, ist sie oft die bessere: Für die Überlassung eines Teils der Wohnung an einen Dritten besteht bei berechtigtem Interesse ein Anspruch auf Erlaubnis (§ 553 Abs. 1 BGB) – anders als beim Nachmieter. Für die gesamte Wohnung gilt dieser Anspruch nicht.',
    },
  ],
  relatedGenerators: ['nachmieter-vorschlagen', 'kuendigung-mietvertrag', 'untermieterlaubnis-anfragen'],
  lastReviewed: '2026-08-28',
};

export default guide;
