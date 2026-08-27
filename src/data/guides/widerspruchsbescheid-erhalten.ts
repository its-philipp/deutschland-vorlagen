import type { GuideConfig } from '../../lib/guide-config';

/**
 * Written against measured demand (docs/data/gsc-queries-2026-08-27.txt):
 * "muster widerspruchsbescheid" (15 impressions, position 36.1),
 * "widerspruchsbescheid muster" (5, 25.6), "bescheid muster" (3, 21.3),
 * "ablehnungsbescheid muster verwaltung" (21.0).
 *
 * CAVEAT recorded in docs/ADSENSE-LOW-VALUE.md: part of that demand wants the
 * specimen OF a Widerspruchsbescheid — authorities and trainees — not help
 * against one. This guide deliberately answers the citizen's question ("you
 * are holding one") and says so in the first paragraph, so the page does not
 * pretend to serve an intent it does not serve.
 *
 * §§ 73 and 74 VwGO were read against the primary text on 2026-08-28 and
 * added to widerspruch-bescheid before being cited here.
 */
const guide: GuideConfig = {
  slug: 'widerspruchsbescheid-erhalten',
  h1: 'Widerspruchsbescheid erhalten: Was jetzt gilt',
  metaTitle: 'Widerspruchsbescheid: Inhalt, Frist, nächster Schritt 2026',
  metaDescription:
    'Der Widerspruchsbescheid beendet das Vorverfahren und startet die Klagefrist. Was er enthalten muss – und woran Sie einen fehlerhaften erkennen.',
  icon: 'stamp',
  intro:
    'Dieser Beitrag richtet sich an Menschen, die einen Widerspruchsbescheid <em>bekommen</em> haben. Er erklärt, was darin stehen muss, welche Frist mit ihm zu laufen beginnt und welche Wege danach offenstehen. Wer umgekehrt einen Widerspruchsbescheid <em>schreiben</em> muss — etwa in der Ausbildung oder im Amt —, ist hier falsch: Vorlagen dafür gehören in die Verwaltungspraxis, nicht auf eine Verbraucherseite.',
  sections: [
    {
      heading: 'Was er ist und woher er kommt',
      paragraphs: [
        'Nach Ihrem Widerspruch prüft zuerst die Behörde, die den Bescheid erlassen hat, ihre eigene Entscheidung. Gibt sie Ihnen recht, hilft sie ab, und die Sache ist erledigt. Hilft sie dem Widerspruch <strong>nicht</strong> ab, ergeht ein Widerspruchsbescheid (§ 73 Abs. 1 VwGO).',
        'Erlassen wird er grundsätzlich von der <strong>nächsthöheren Behörde</strong> — nicht von derselben Stelle, die schon einmal entschieden hat. Ist die nächsthöhere Behörde eine oberste Bundes- oder Landesbehörde, entscheidet ausnahmsweise die Ausgangsbehörde selbst; in Selbstverwaltungsangelegenheiten, also etwa bei einer Stadt oder Gemeinde, die Selbstverwaltungsbehörde. Und der Gesetzgeber kann bestimmen, dass die Ausgangsbehörde auch über den Widerspruch entscheidet.',
        'Praktisch heißt das: Wer sich fragt, warum das Schreiben von derselben Adresse kommt wie der Ausgangsbescheid, findet die Antwort meist in einer dieser Ausnahmen — nicht in einem Fehler.',
      ],
    },
    {
      heading: 'Drei Dinge, die darin stehen müssen',
      paragraphs: [
        'Absatz 3 des § 73 VwGO nennt die formalen Anforderungen, und sie sind kurz genug, um sie am eigenen Schreiben nachzuprüfen:',
      ],
      list: [
        {
          term: 'Eine Begründung',
          text: 'Der Widerspruchsbescheid ist zu begründen. Eine Entscheidung, die Ihre Einwände nicht aufgreift, sondern nur den Ausgangsbescheid wiederholt, erfüllt das der Sache nach nicht — und das ist ein Punkt, der im Klageverfahren zählt.',
        },
        {
          term: 'Eine Rechtsmittelbelehrung',
          text: 'Sie muss darauf hinweisen, welches Gericht zuständig ist, in welcher Form und innerhalb welcher Frist Klage erhoben werden kann. Fehlt sie oder ist sie falsch, verlängert sich die Frist auf ein Jahr (§ 58 Abs. 2 VwGO).',
        },
        {
          term: 'Eine Kostenentscheidung',
          text: 'Der Widerspruchsbescheid bestimmt auch, wer die Kosten trägt. Prüfen Sie diesen Teil gesondert: Er ist eigenständig angreifbar, und bei teilweisem Erfolg des Widerspruchs stimmt die Quote nicht immer.',
        },
      ],
    },
    {
      heading: 'Die Frist, die jetzt läuft',
      paragraphs: [
        'Mit der <strong>Zustellung</strong> des Widerspruchsbescheids beginnt die Klagefrist: Die Anfechtungsklage muss innerhalb eines Monats nach Zustellung erhoben werden (§ 74 Abs. 1 Satz 1 VwGO). Für die Verpflichtungsklage — also wenn Sie etwas beantragt hatten und es abgelehnt wurde — gilt dasselbe (Abs. 2).',
        'Der Widerspruchsbescheid wird von Amts wegen zugestellt (§ 73 Abs. 3 Satz 2 VwGO). Maßgeblich ist deshalb das Zustellungsdatum, nicht das Datum im Briefkopf und nicht der Tag, an dem Sie den Umschlag geöffnet haben. Auf der Zustellungsurkunde oder dem Umschlag steht, welcher Tag zählt — heben Sie ihn auf.',
        'Wo das Vorverfahren durch Landesrecht abgeschafft ist, gibt es gar keinen Widerspruchsbescheid; dann läuft die Monatsfrist ab Bekanntgabe des Ausgangsbescheids (§ 74 Abs. 1 Satz 2 VwGO). Ob das für Sie gilt, steht in der Rechtsbehelfsbelehrung.',
        'Bei Sozialleistungsträgern gilt statt der VwGO das SGG; auch dort beträgt die Frist einen Monat, und zuständig ist das Sozialgericht. Das Verfahren dort ist für Versicherte und Leistungsempfänger gerichtskostenfrei — ein Unterschied, der die Entscheidung über eine Klage merklich verändert.',
      ],
    },
    {
      heading: 'Was zahlen Sie, wenn Sie nichts tun?',
      paragraphs: [
        'Ein verbreiteter Irrtum lautet, mit dem Widerspruchsbescheid sei „die Zahlung erst einmal gestoppt". Das Gegenteil ist der Fall: Widerspruch und Anfechtungsklage haben zwar grundsätzlich aufschiebende Wirkung (§ 80 Abs. 1 VwGO), aber bei der Anforderung von öffentlichen Abgaben und Kosten entfällt sie kraft Gesetzes (§ 80 Abs. 2 Nr. 1 VwGO).',
        'Bei Gebühren-, Beitrags- und Kostenbescheiden — also genau den Bescheiden, gegen die am häufigsten Widerspruch eingelegt wird — bleibt die Zahlungspflicht also bestehen, und zwar über das gesamte Verfahren hinweg. Wer sie aussetzen will, muss die <strong>Aussetzung der Vollziehung</strong> gesondert beantragen. Das ist ein eigener Antrag, kein Nebeneffekt.',
      ],
    },
    {
      heading: 'Die Wege nach dem Widerspruchsbescheid',
      paragraphs: [
        '<strong>Klage erheben.</strong> Innerhalb eines Monats ab Zustellung, beim Gericht, das in der Rechtsmittelbelehrung genannt ist. Das Vorverfahren war dafür in aller Regel die Voraussetzung (§ 68 Abs. 1 VwGO) — sie haben es mit dem Widerspruch erfüllt.',
        '<strong>Es dabei belassen.</strong> Läuft die Frist ab, wird der Bescheid bestandskräftig. Das ist eine legitime Entscheidung, aber eine endgültige; sie sollte auf einer Abwägung beruhen und nicht auf einem übersehenen Datum.',
        '<strong>Einen neuen Antrag stellen.</strong> Wenn sich die Sachlage geändert hat — neue Unterlagen, neue Umstände —, ist ein neuer Antrag oft der bessere Weg als der Streit über die alte Entscheidung. Er beginnt ein neues Verfahren mit eigenen Fristen.',
        'Vor der Klage lohnt in beinahe jedem Fall eine Beratung: Verbraucherzentrale, Mieterverein, Gewerkschaft oder Sozialverband, und bei geringem Einkommen die Beratungshilfe. Die Monatsfrist macht das dringlich — vereinbaren Sie den Termin am Tag, an dem der Bescheid ankommt, nicht in der Woche vor Fristablauf.',
      ],
    },
  ],
  legalBasis: [
    {
      ref: '§ 73 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__73.html',
      note: 'Hilft die Behörde dem Widerspruch nicht ab, ergeht ein Widerspruchsbescheid; ihn erlässt grundsätzlich die nächsthöhere Behörde, in Selbstverwaltungsangelegenheiten die Selbstverwaltungsbehörde (Abs. 1). Der Widerspruchsbescheid ist zu begründen, mit einer Rechtsmittelbelehrung zu versehen und von Amts wegen zuzustellen; er bestimmt auch, wer die Kosten trägt (Abs. 3).',
    },
    {
      ref: '§ 74 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__74.html',
      note: 'Die Anfechtungsklage muss innerhalb eines Monats nach Zustellung des Widerspruchsbescheids erhoben werden; ist ein Widerspruchsbescheid nach § 68 nicht erforderlich, innerhalb eines Monats nach Bekanntgabe des Verwaltungsakts (Abs. 1). Für die Verpflichtungsklage gilt dies entsprechend (Abs. 2).',
    },
    {
      ref: '§ 68 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__68.html',
      note: 'Vor einer Anfechtungsklage ist grundsätzlich ein Vorverfahren (Widerspruchsverfahren) durchzuführen; einzelne Bundesländer haben dieses Verfahren durch Landesrecht ganz oder teilweise abgeschafft (§ 68 Abs. 1 Satz 2 VwGO).',
    },
    {
      ref: '§ 58 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__58.html',
      note: 'Fehlt eine Rechtsbehelfsbelehrung oder ist sie fehlerhaft, verlängert sich die Frist zur Einlegung eines Rechtsbehelfs auf ein Jahr; für den Widerspruch gilt dies über § 70 Abs. 2 VwGO entsprechend.',
    },
    {
      ref: '§ 80 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__80.html',
      note: 'Widerspruch und Anfechtungsklage haben grundsätzlich aufschiebende Wirkung (Abs. 1); bei der Anforderung von öffentlichen Abgaben und Kosten entfällt diese jedoch kraft Gesetzes (Abs. 2 Nr. 1).',
    },
    {
      ref: '§ 84 SGG',
      url: 'https://www.gesetze-im-internet.de/sgg/__84.html',
      note: 'Für Bescheide von Sozialleistungsträgern (z. B. Jobcenter, Rentenversicherung, Krankenkasse) gilt statt der VwGO das SGG; die Widerspruchsfrist beträgt danach ebenfalls einen Monat nach Bekanntgabe.',
    },
  ],
  faq: [
    {
      q: 'Ab wann läuft die Klagefrist – ab dem Datum im Bescheid?',
      a: 'Nein, ab der Zustellung. Der Widerspruchsbescheid wird von Amts wegen zugestellt (§ 73 Abs. 3 VwGO), und die Anfechtungsklage muss innerhalb eines Monats nach dieser Zustellung erhoben werden (§ 74 Abs. 1 VwGO). Zwischen Bescheiddatum und Zustellung liegen oft mehrere Tage.',
    },
    {
      q: 'Der Widerspruchsbescheid kommt von derselben Behörde wie der Ausgangsbescheid. Ist das ein Fehler?',
      a: 'Nicht unbedingt. Zuständig ist zwar grundsätzlich die nächsthöhere Behörde, aber in Selbstverwaltungsangelegenheiten entscheidet die Selbstverwaltungsbehörde selbst, und der Gesetzgeber kann die Zuständigkeit der Ausgangsbehörde zuweisen (§ 73 Abs. 1 VwGO).',
    },
    {
      q: 'Kann ich gegen einen Widerspruchsbescheid noch einmal Widerspruch einlegen?',
      a: 'Nein. Der Widerspruchsbescheid beendet das Vorverfahren. Danach führt der Weg zum Gericht – oder die Sache wird bestandskräftig.',
    },
    {
      q: 'Muss ich die Forderung zahlen, während ich klage?',
      a: 'Bei Gebühren-, Beitrags- und Kostenbescheiden in der Regel ja: Dort entfällt die aufschiebende Wirkung kraft Gesetzes (§ 80 Abs. 2 Nr. 1 VwGO). Die Aussetzung der Vollziehung müssen Sie gesondert beantragen.',
    },
    {
      q: 'In dem Bescheid steht keine Rechtsmittelbelehrung. Was bedeutet das?',
      a: 'Fehlt sie oder ist sie unrichtig, verlängert sich die Frist auf ein Jahr (§ 58 Abs. 2 VwGO). Verlassen Sie sich darauf aber nicht ohne Prüfung – „unrichtig" ist ein enger Begriff, und der sichere Weg bleibt, innerhalb des Monats zu handeln.',
    },
  ],
  relatedGenerators: ['widerspruch-bescheid', 'akteneinsicht-behoerde', 'einspruch-bussgeldbescheid'],
  lastReviewed: '2026-08-28',
};

export default guide;
