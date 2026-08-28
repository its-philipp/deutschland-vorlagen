import type { GuideConfig } from '../../lib/guide-config';

/**
 * Written against measured demand (docs/data/gsc-queries-2026-08-27.txt): the
 * domain's only click in three months came from "formloser widerspruch
 * muster", and the cluster around it — "widerspruch muster" (24 impressions),
 * "widerspruch vorlage", "muster widerspruchsschreiben", "wie schreibe ich
 * einen widerspruch" — sits at positions 59-67.
 *
 * Deliberately NOT a second "Widerspruch, Einspruch oder Widerruf": that guide
 * answers which remedy applies. This one starts after that question is settled
 * and answers what the letter has to contain. All § citations are carried over
 * from widerspruch-bescheid, whose references were verified against the
 * primary text.
 */
const guide: GuideConfig = {
  slug: 'widerspruch-schreiben',
  h1: 'Widerspruch schreiben: Was in das Schreiben gehört',
  metaTitle: 'Widerspruch schreiben: Aufbau und Muster 2026',
  metaDescription:
    'Vier Angaben machen einen Widerspruch wirksam – mehr braucht es nicht. Was hineingehört, was schadet, und was nach dem Absenden passiert.',
  intro:
    'Ein wirksamer Widerspruch ist kürzer, als die meisten erwarten. Er braucht keine juristische Sprache, keine Beweisführung und keinen Anwalt – er braucht vier Angaben, den richtigen Empfänger und das Datum, an dem er dort ankommt. Alles Weitere ist Begründung, und die darf warten.',
  icon: 'objection',
  sections: [
    {
      heading: 'Die vier Angaben, ohne die es nicht geht',
      paragraphs: [
        'Ein Widerspruch ist eine Erklärung, kein Aufsatz. Damit die Behörde ihn zuordnen und als fristwahrend behandeln kann, muss aus dem Schreiben zweifelsfrei hervorgehen, <em>wer</em> ihn einlegt, <em>gegen welchen Bescheid</em>, <em>dass</em> es ein Widerspruch sein soll, und <em>wann</em> er abgesendet wurde.',
        'Das klingt selbstverständlich, ist es aber nicht: Die häufigste Panne ist nicht der falsche Ton, sondern ein Schreiben, das die Behörde keinem Vorgang zuordnen kann, weil das Aktenzeichen fehlt.',
      ],
      list: [
        {
          term: 'Ihre Daten',
          text: 'Name, Anschrift und – falls vorhanden – die Kunden-, Versicherten- oder Steuernummer, unter der die Behörde Sie führt. Bei Sozialleistungen ist das die Nummer auf dem Bescheid, nicht Ihre Sozialversicherungsnummer.',
        },
        {
          term: 'Der Bescheid',
          text: 'Aktenzeichen oder Geschäftszeichen und das Datum des Bescheids, beides wörtlich vom Bescheid abgeschrieben. Wenn es zwei Nummern gibt, nennen Sie beide.',
        },
        {
          term: 'Die Erklärung',
          text: 'Ein Satz: „Gegen den oben genannten Bescheid lege ich hiermit Widerspruch ein.“ Mehr ist nicht nötig, damit die Frist gewahrt ist.',
        },
        {
          term: 'Datum und Unterschrift',
          text: 'Das Datum der Absendung. Die Unterschrift, wenn Sie auf Papier schreiben – zur Form und zum elektronischen Weg siehe unten.',
        },
      ],
    },
    {
      heading: 'Warum „formlos“ nicht „egal“ heißt',
      paragraphs: [
        '„Formloser Widerspruch“ ist eine der meistgesuchten Formulierungen zu diesem Thema, und sie ist missverständlich. Formlos heißt: Es gibt kein amtliches Formular, keine vorgeschriebene Gliederung und keine Pflicht, Paragrafen zu zitieren. Es heißt <strong>nicht</strong>, dass die Form gleichgültig wäre.',
        'Denn eine Form schreibt das Gesetz sehr wohl vor: Der Widerspruch ist schriftlich, in elektronischer Form oder zur Niederschrift bei der Behörde einzulegen (§ 70 Abs. 1 VwGO; für Sozialleistungsträger § 84 Abs. 1 SGG). Ein Anruf genügt also nicht, und eine einfache E-Mail ist der Grenzfall – sie erfüllt die elektronische Form nur unter den engen Voraussetzungen, die das jeweilige Verfahrensrecht daran knüpft.',
        'Praktisch heißt das: Wenn der Bescheid in der Rechtsbehelfsbelehrung eine E-Mail-Adresse oder ein Behördenpostfach nennt, ist dieser Weg gemeint und gangbar. Steht dort nichts dergleichen, ist der Brief der sichere Weg. Wer die Frist knapp hält, sollte diesen Unterschied nicht ausprobieren.',
      ],
    },
    {
      heading: 'Die Begründung: später, und in eigenen Worten',
      paragraphs: [
        'Ein Widerspruch muss nicht begründet werden, um wirksam zu sein. Fristwahrend ist die Erklärung; die Begründung können Sie nachreichen. Das ist keine Notlösung, sondern bei knapper Frist der richtige Weg – legen Sie zuerst ein, und schreiben Sie im zweiten Schritt in Ruhe auf, was Sie für falsch halten.',
        'Wenn Sie begründen, hilft eine schlichte Reihenfolge: Was steht im Bescheid, was ist daran aus Ihrer Sicht unzutreffend, und woraus ergibt sich das. Der dritte Punkt ist der wichtigste und zugleich der, den viele auslassen — eine Rechnung, ein Kontoauszug, ein ärztliches Attest, ein Schriftwechsel. Ein Widerspruch ohne Unterlagen zwingt die Behörde dazu, dieselbe Entscheidung noch einmal auf derselben Grundlage zu treffen.',
        'Vermeiden sollten Sie zwei Dinge. Erstens juristische Formeln, die Sie nicht selbst prüfen können: Ein falsch zitierter Paragraf schadet der Sache, ein fehlender schadet ihr nicht. Zweitens die Aufzählung dessen, was der Bescheid für Sie bedeutet — die Behörde entscheidet nach der Rechtslage, nicht nach der Härte des Ergebnisses. Was Ihre Lage angeht, gehört in einen Antrag auf Härtefall oder Stundung, nicht in den Widerspruch.',
      ],
    },
    {
      heading: 'An wen, und bis wann',
      paragraphs: [
        'Empfänger ist die Behörde, die den Bescheid <em>erlassen</em> hat — nicht die übergeordnete Stelle und nicht das Gericht (§ 70 Abs. 1 VwGO). Die Anschrift steht im Briefkopf des Bescheids. Der Widerspruch wandert danach von selbst weiter, wenn die erlassende Behörde ihm nicht abhilft.',
        'Die Frist beträgt einen Monat ab Bekanntgabe des Bescheids, im Sozialrecht ebenso (§ 84 Abs. 1 SGG). Maßgeblich ist die Bekanntgabe, nicht das Datum, das auf dem Bescheid gedruckt ist; bei einem einfachen Brief wird die Bekanntgabe regelmäßig am dritten Tag nach der Aufgabe zur Post angenommen. Und anders als beim Widerruf zählt hier nicht die Absendung, sondern der <strong>Eingang</strong> bei der Behörde. Wer am letzten Tag einwirft, hat die Frist versäumt.',
        'Ist Ihr Bescheid älter als einen Monat, ist die Sache nicht zwingend erledigt: Fehlt eine Rechtsbehelfsbelehrung oder ist sie fehlerhaft, beträgt die Frist ein Jahr (§ 58 Abs. 2 VwGO, für den Widerspruch über § 70 Abs. 2 VwGO). Das ist der erste Punkt, den Sie prüfen sollten, bevor Sie einen alten Bescheid für bestandskräftig halten.',
      ],
    },
    {
      heading: 'Was nach dem Absenden passiert',
      paragraphs: [
        'Zuerst prüft die Behörde, die den Bescheid erlassen hat, ihre eigene Entscheidung noch einmal. Gibt sie Ihnen recht, hilft sie dem Widerspruch ab und erlässt einen neuen Bescheid — das ist der häufigste gute Ausgang und der Grund, warum sich ein Widerspruch auch ohne Anwalt oft lohnt.',
        'Bleibt sie bei ihrer Auffassung, entscheidet die nächsthöhere Stelle durch <strong>Widerspruchsbescheid</strong>. Dieser Bescheid ist der Abschluss des Vorverfahrens, und er trägt eine eigene Rechtsbehelfsbelehrung: Ab seiner Zustellung läuft die Frist für die Klage vor dem Verwaltungs- oder Sozialgericht. Das Vorverfahren ist dafür in der Regel Voraussetzung — ohne Widerspruch keine Anfechtungsklage (§ 68 Abs. 1 VwGO). Einzelne Bundesländer haben es durch Landesrecht ganz oder teilweise abgeschafft; was für Sie gilt, steht in der Rechtsbehelfsbelehrung.',
        'Eine Sache läuft parallel weiter, und sie überrascht regelmäßig: Bei Gebühren-, Beitrags- und Kostenbescheiden müssen Sie trotz Widerspruch zahlen. Die aufschiebende Wirkung, die Widerspruch und Anfechtungsklage sonst haben (§ 80 Abs. 1 VwGO), entfällt dort kraft Gesetzes (§ 80 Abs. 2 Nr. 1 VwGO). Wer die Zahlung aussetzen will, muss das zusätzlich beantragen — die Aussetzung der Vollziehung ist ein zweiter Schritt, kein Nebeneffekt des Widerspruchs.',
      ],
    },
    {
      heading: 'Und der Nachweis, dass er angekommen ist',
      paragraphs: [
        'Weil es auf den Eingang ankommt, ist der Versandweg beim Widerspruch keine Nebensache. Ein einfacher Brief lässt sich nicht belegen; ein Einwurf-Einschreiben belegt den Einwurf in den Briefkasten der Behörde mit Datum und ist für diesen Zweck meist ausreichend. Wer persönlich abgibt, lässt sich den Eingang auf einer Kopie abstempeln.',
        'Heben Sie außerdem den Umschlag auf, in dem der Bescheid kam, sofern er zugestellt wurde: Auf der Zustellungsurkunde steht das Datum, von dem die Frist läuft — und das ist selten das Datum im Briefkopf.',
      ],
    },
  ],
  legalBasis: [
    {
      ref: '§ 70 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__70.html',
      note: 'Der Widerspruch ist innerhalb eines Monats nach Bekanntgabe des Verwaltungsakts schriftlich, elektronisch (§ 3a VwVfG) oder zur Niederschrift bei der Behörde einzulegen, die den Verwaltungsakt erlassen hat.',
    },
    {
      ref: '§ 84 SGG',
      url: 'https://www.gesetze-im-internet.de/sgg/__84.html',
      note: 'Für Bescheide von Sozialleistungsträgern (z. B. Jobcenter, Rentenversicherung, Krankenkasse) gilt statt der VwGO das SGG; die Widerspruchsfrist beträgt danach ebenfalls einen Monat nach Bekanntgabe.',
    },
    {
      ref: '§ 58 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__58.html',
      note: 'Fehlt eine Rechtsbehelfsbelehrung oder ist sie fehlerhaft, verlängert sich die Frist zur Einlegung eines Rechtsbehelfs auf ein Jahr; für den Widerspruch gilt dies über § 70 Abs. 2 VwGO entsprechend.',
    },
    {
      ref: '§ 68 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__68.html',
      note: 'Vor einer Anfechtungsklage ist grundsätzlich ein Vorverfahren (Widerspruchsverfahren) durchzuführen; einzelne Bundesländer haben dieses Verfahren durch Landesrecht ganz oder teilweise abgeschafft (§ 68 Abs. 1 Satz 2 VwGO).',
    },
    {
      ref: '§ 80 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__80.html',
      note: 'Widerspruch und Anfechtungsklage haben grundsätzlich aufschiebende Wirkung (Abs. 1); bei der Anforderung von öffentlichen Abgaben und Kosten entfällt diese jedoch kraft Gesetzes (Abs. 2 Nr. 1).',
    },
  ],
  faq: [
    {
      q: 'Reicht ein Satz als Widerspruch aus?',
      a: 'Ja, wenn er die Zuordnung erlaubt. „Gegen den Bescheid vom 12.03.2026, Aktenzeichen 4711/26, lege ich hiermit Widerspruch ein“ ist ein wirksamer Widerspruch. Die Begründung können Sie nachreichen; für die Frist zählt die Erklärung.',
    },
    {
      q: 'Kann ich den Widerspruch per E-Mail schicken?',
      a: 'Nur wenn der Bescheid einen elektronischen Zugang eröffnet – etwa eine E-Mail-Adresse oder ein Behördenpostfach in der Rechtsbehelfsbelehrung. Sonst ist der Brief der sichere Weg: Eine einfache E-Mail erfüllt die Form des § 70 Abs. 1 VwGO nicht zuverlässig.',
    },
    {
      q: 'Zählt für die Frist das Absenden oder das Ankommen?',
      a: 'Das Ankommen. Der Widerspruch muss innerhalb der Monatsfrist bei der Behörde eingegangen sein. Das unterscheidet ihn vom Widerruf eines Vertrags, bei dem die rechtzeitige Absendung genügt.',
    },
    {
      q: 'Muss ich zahlen, solange der Widerspruch läuft?',
      a: 'Bei Gebühren-, Beitrags- und Kostenbescheiden in der Regel ja: Dort entfällt die aufschiebende Wirkung kraft Gesetzes (§ 80 Abs. 2 Nr. 1 VwGO). Wollen Sie die Zahlung aussetzen, beantragen Sie zusätzlich die Aussetzung der Vollziehung.',
    },
    {
      q: 'Was mache ich, wenn der Widerspruchsbescheid kommt und ich weiter anderer Meinung bin?',
      a: 'Dann steht in seiner Rechtsbehelfsbelehrung, welches Gericht zuständig ist und wie lange Sie Zeit haben – meist ein Monat ab Zustellung. Der Widerspruch war die Voraussetzung dafür (§ 68 Abs. 1 VwGO); an dieser Stelle ist Beratung sinnvoll, etwa durch eine Verbraucherzentrale, einen Sozialverband oder über die Beratungshilfe.',
    },
  ],
  relatedGenerators: ['widerspruch-bescheid', 'einspruch-bussgeldbescheid', 'widerspruch-nebenkostenabrechnung'],
  lastReviewed: '2026-08-27',
};

export default guide;
