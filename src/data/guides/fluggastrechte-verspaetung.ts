import type { GuideConfig } from '../../lib/guide-config';

/**
 * Written against measured demand (docs/data/gsc-queries-2026-08-27.txt):
 * "fluggastrechte eu beschwerdeformular" (5 impressions, position 49.8),
 * "eu261 formular" (60), "fluggastrecht verspätung musterbrief" (67.3).
 *
 * Art. 6, 8 and 9 were read against the primary text on EUR-Lex on 2026-08-28
 * and added to fluggastrechte-entschaedigung before being cited here; Art. 4,
 * 5 and 7 were already carried there.
 *
 * Care point: the regulation's own wording grants no compensation for delay —
 * that reading comes from the Court of Justice. The guide says so instead of
 * presenting it as statutory text.
 */
const guide: GuideConfig = {
  slug: 'fluggastrechte-verspaetung',
  h1: 'Flug verspätet oder gestrichen: Was Ihnen zusteht',
  metaTitle: 'Fluggastrechte bei Verspätung: Ansprüche 2026',
  metaDescription:
    'Ausgleich, Erstattung und Betreuung sind drei verschiedene Ansprüche. Welcher wann greift – und warum die Ankunftszeit zählt, nicht der Abflug.',
  icon: 'plane',
  intro:
    'Die Verordnung (EG) Nr. 261/2004 gibt Fluggästen nicht einen Anspruch, sondern drei — und sie schließen einander nicht aus. Wer nur an die Entschädigung denkt, verschenkt oft die beiden anderen, die noch am Flughafen fällig werden.',
  sections: [
    {
      heading: 'Drei Ansprüche, die nebeneinander bestehen',
      paragraphs: [
        'Es hilft, die Verordnung als drei getrennte Töpfe zu lesen. Der erste ist die <strong>Ausgleichszahlung</strong> nach Art. 7: ein pauschaler Betrag für die Unannehmlichkeit selbst, gestaffelt nach Entfernung — 250 € bis 1.500 km, 400 € bei innereuropäischen Strecken über 1.500 km und sonst zwischen 1.500 und 3.500 km, 600 € darüber hinaus außerhalb Europas.',
        'Der zweite ist die <strong>Erstattung oder Ersatzbeförderung</strong> nach Art. 8: Sie wählen zwischen der vollständigen Erstattung der Flugscheinkosten binnen sieben Tagen — gegebenenfalls mit Rückflug zum ersten Abflugort — und einer anderweitigen Beförderung zum Endziel, zum frühestmöglichen Zeitpunkt oder später nach Ihrem Wunsch.',
        'Der dritte sind die <strong>Betreuungsleistungen</strong> nach Art. 9: Mahlzeiten und Erfrischungen im Verhältnis zur Wartezeit, Hotel, wenn eine Übernachtung nötig wird, die Fahrt zwischen Flughafen und Unterkunft, dazu zwei unentgeltliche Telefonate oder E-Mails. Diese Leistungen sind <em>anzubieten</em>, nicht auf Antrag zu gewähren — und sie hängen nicht davon ab, ob am Ende eine Entschädigung fällig wird.',
        'Der praktische Rat daraus: Heben Sie am Flughafen jeden Beleg auf. Wer selbst Essen oder Hotel bezahlt, weil niemand etwas anbietet, holt sich diese Kosten über Art. 9 zurück — unabhängig vom Streit über die Ausgleichszahlung.',
      ],
    },
    {
      heading: 'Verspätung: Warum es auf die Ankunft ankommt',
      paragraphs: [
        'Hier lohnt Genauigkeit, weil der Wortlaut und die geltende Rechtslage auseinanderfallen. Art. 6 der Verordnung regelt die Verspätung — aber er ordnet nur Betreuungsleistungen an: ab zwei Stunden bei Flügen bis 1.500 km, ab drei Stunden innergemeinschaftlich über 1.500 km und bei Strecken zwischen 1.500 und 3.500 km, ab vier Stunden bei allen übrigen. Ab fünf Stunden kommt die Erstattung nach Art. 8 Abs. 1 Buchst. a hinzu. <strong>Eine Ausgleichszahlung nennt der Artikel nicht.</strong>',
        'Dass es sie trotzdem gibt, geht auf die Rechtsprechung des Gerichtshofs der Europäischen Union zurück: Fluggäste, die ihr Endziel mit einer Verspätung von <strong>drei Stunden oder mehr</strong> erreichen, werden für den Ausgleichsanspruch den Fluggästen annullierter Flüge gleichgestellt. Diese Auslegung ist heute gefestigte Praxis von Fluggesellschaften und Gerichten.',
        'Daraus folgt der Punkt, an dem die meisten Ansprüche falsch berechnet werden: Maßgeblich ist die <strong>Ankunftszeit am Endziel</strong>, nicht der verspätete Abflug. Ein Flieger, der zwei Stunden später startet und die Verspätung unterwegs aufholt, löst keinen Anspruch aus. Umgekehrt zählt bei einer durchgehenden Buchung mit Umstieg die Ankunft am letzten Ziel — auch wenn der verpasste Anschluss selbst pünktlich war.',
      ],
    },
    {
      heading: 'Annullierung: die Zwei-Wochen-Regel',
      paragraphs: [
        'Bei einer Annullierung besteht der Ausgleichsanspruch nach Art. 5 grundsätzlich — mit drei Ausnahmen, die alle mit der Vorwarnzeit zu tun haben und deshalb selten bekannt sind.',
      ],
      list: [
        {
          term: 'Mindestens zwei Wochen vorher',
          text: 'Wer mindestens zwei Wochen vor der planmäßigen Abflugzeit über die Annullierung unterrichtet wird, hat keinen Ausgleichsanspruch. Die Erstattung nach Art. 8 bleibt davon unberührt.',
        },
        {
          term: 'Zwischen zwei Wochen und sieben Tagen',
          text: 'Hier entfällt der Anspruch nur, wenn zugleich eine Ersatzbeförderung angeboten wird, die höchstens zwei Stunden früher startet und das Endziel höchstens vier Stunden später erreicht.',
        },
        {
          term: 'Weniger als sieben Tage vorher',
          text: 'Dann wird es eng für die Fluggesellschaft: Der Anspruch entfällt nur bei einer Ersatzbeförderung, die höchstens eine Stunde früher startet und das Ziel höchstens zwei Stunden später erreicht.',
        },
      ],
    },
    {
      heading: '„Außergewöhnliche Umstände“ — und was nicht darunter fällt',
      paragraphs: [
        'Der Ausgleichsanspruch entfällt, wenn die Fluggesellschaft nachweist, dass die Annullierung auf außergewöhnliche Umstände zurückgeht, die sich auch durch zumutbare Maßnahmen nicht hätten vermeiden lassen (Art. 5). Die Beweislast liegt dabei bei der Fluggesellschaft, nicht bei Ihnen — ein pauschaler Verweis auf „operationelle Gründe“ genügt ihr nicht.',
        'Unstreitig außergewöhnlich sind Wetterlagen, die den Flugbetrieb unmöglich machen, Sperrungen des Luftraums, Streiks der Flugsicherung oder des Flughafenpersonals und Sicherheitsvorfälle. Nicht außergewöhnlich ist, was zum Betrieb einer Fluglinie gehört: technische Defekte des Flugzeugs im Rahmen der normalen Wartung, Personalengpässe, verspätete Vorumläufe.',
        'Ein Streik der <em>eigenen</em> Belegschaft wird von den Gerichten differenziert beurteilt und ist regelmäßig kein Selbstläufer für die Airline. Wer eine solche Begründung erhält, sollte sie nicht als Ende der Sache lesen.',
      ],
    },
    {
      heading: 'Wie Sie die Sache betreiben',
      paragraphs: [
        'Wenden Sie sich zuerst schriftlich an das <strong>ausführende</strong> Luftfahrtunternehmen — also an die Airline, die tatsächlich geflogen wäre, nicht an das Reiseportal und nicht an die Gesellschaft, deren Flugnummer auf dem Ticket steht, wenn ein Codeshare vorliegt.',
        'Ins Schreiben gehören Buchungsnummer, Flugnummer, Datum, geplante und tatsächliche Ankunftszeit, der genannte Betrag nach Art. 7 und eine Zahlungsfrist. Nennen Sie die Ankunftsverspätung ausdrücklich in Stunden und Minuten; das ist die Zahl, an der die Airline prüft.',
        'Bleibt die Antwort aus oder wird abgelehnt, führt der nächste Schritt zur <strong>Schlichtungsstelle für den öffentlichen Personenverkehr (SÖP)</strong> — für Fluggäste kostenfrei — oder zum Luftfahrt-Bundesamt als Durchsetzungsstelle. Beide sind ein Weg vor dem Gericht, nicht danach.',
        'Zur Verjährung: Ausgleichsansprüche nach der Verordnung unterliegen dem nationalen Recht, in Deutschland also der regelmäßigen dreijährigen Frist ab dem Schluss des Jahres, in dem der Flug stattfand. Für die Flüge eines Jahres bleibt damit bis zum 31. Dezember des dritten Folgejahres Zeit — die Portale, die mit „nur noch wenige Tage“ werben, meinen selten diese Frist.',
      ],
    },
  ],
  legalBasis: [
    {
      ref: 'Art. 5 der Verordnung (EG) Nr. 261/2004',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004R0261',
      note: 'Bei Annullierung eines Flugs steht dem Fluggast grundsätzlich ein Ausgleichsanspruch nach Art. 7 zu, außer die Fluggesellschaft weist außergewöhnliche Umstände nach, die auch durch zumutbare Maßnahmen nicht zu vermeiden gewesen wären.',
    },
    {
      ref: 'Art. 7 der Verordnung (EG) Nr. 261/2004',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004R0261',
      note: 'Staffelt die Ausgleichszahlung nach Entfernung: 250 € (bis 1.500 km), 400 € (1.500–3.500 km bzw. innereuropäische Strecken über 1.500 km) und 600 € (über 3.500 km, außereuropäisch); bei rechtzeitig angebotener Ersatzbeförderung kann sich der Betrag um 50 % verringern.',
    },
    {
      ref: 'Art. 6 der Verordnung (EG) Nr. 261/2004',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004R0261',
      note: 'Regelt die Verspätung: Ab zwei Stunden (bis 1.500 km), drei Stunden (innergemeinschaftlich über 1.500 km bzw. 1.500–3.500 km) oder vier Stunden (übrige Flüge) sind Betreuungsleistungen nach Art. 9 anzubieten; ab fünf Stunden zusätzlich die Erstattung nach Art. 8 Abs. 1 Buchst. a. Eine Ausgleichszahlung sieht der Wortlaut des Artikels für die Verspätung nicht vor.',
    },
    {
      ref: 'Art. 8 der Verordnung (EG) Nr. 261/2004',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004R0261',
      note: 'Fluggäste können wählen zwischen der binnen sieben Tagen zu leistenden vollständigen Erstattung der Flugscheinkosten (ggf. mit Rückflug zum ersten Abflugort), anderweitiger Beförderung zum Endziel zum frühestmöglichen Zeitpunkt oder anderweitiger Beförderung zu einem späteren Zeitpunkt nach ihrem Wunsch (Abs. 1). Weicht die Fluggesellschaft auf einen anderen Zielflughafen aus, trägt sie die Kosten der Weiterbeförderung (Abs. 3).',
    },
    {
      ref: 'Art. 9 der Verordnung (EG) Nr. 261/2004',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004R0261',
      note: 'Betreuungsleistungen sind unentgeltlich anzubieten: Mahlzeiten und Erfrischungen in angemessenem Verhältnis zur Wartezeit, Hotelunterbringung, wenn ein Aufenthalt über Nacht nötig wird, und die Beförderung zwischen Flughafen und Unterkunft (Abs. 1) sowie zwei unentgeltliche Telefonate, Telefaxe oder E-Mails (Abs. 2).',
    },
    {
      ref: 'Art. 4 der Verordnung (EG) Nr. 261/2004',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004R0261',
      note: 'Bei Nichtbeförderung gegen den Willen des Fluggasts (z. B. Overbooking) hat die Fluggesellschaft unverzüglich eine Ausgleichsleistung nach Art. 7 sowie Unterstützungsleistungen nach Art. 8 und 9 zu erbringen.',
    },
  ],
  faq: [
    {
      q: 'Mein Flug startete drei Stunden zu spät, kam aber fast pünktlich an. Bekomme ich Geld?',
      a: 'Für die Ausgleichszahlung zählt die Ankunft am Endziel, nicht der Abflug – wird die Verspätung unterwegs aufgeholt, entsteht kein Anspruch. Die Betreuungsleistungen nach Art. 9 waren Ihnen während der Wartezeit am Flughafen aber gleichwohl anzubieten.',
    },
    {
      q: 'Steht die Entschädigung bei Verspätung wirklich im Gesetz?',
      a: 'Im Wortlaut der Verordnung nicht: Art. 6 sieht bei Verspätung nur Betreuungsleistungen und ab fünf Stunden die Erstattung vor. Die Ausgleichszahlung ab drei Stunden Ankunftsverspätung beruht auf der Rechtsprechung des Gerichtshofs der Europäischen Union, der Verspätete den Fluggästen annullierter Flüge gleichstellt. Fluggesellschaften und deutsche Gerichte wenden das heute so an.',
    },
    {
      q: 'Die Airline hat mich zwei Wochen vorher informiert. Habe ich noch Ansprüche?',
      a: 'Die Ausgleichszahlung entfällt bei einer Unterrichtung mindestens zwei Wochen vor der planmäßigen Abflugzeit. Der Anspruch auf Erstattung der Flugscheinkosten oder auf anderweitige Beförderung nach Art. 8 bleibt bestehen – das sind zwei verschiedene Dinge.',
    },
    {
      q: 'Niemand hat uns Essen oder ein Hotel angeboten. Bleibe ich auf den Kosten sitzen?',
      a: 'Nein, wenn die Voraussetzungen des Art. 9 vorlagen. Die Leistungen sind unentgeltlich anzubieten; wer sie selbst bezahlt, weil nichts angeboten wird, kann die Kosten in angemessener Höhe erstattet verlangen. Bewahren Sie die Belege auf.',
    },
    {
      q: 'Wie lange kann ich meinen Anspruch geltend machen?',
      a: 'Die Verordnung selbst nennt keine Frist; es gilt das nationale Verjährungsrecht, in Deutschland regelmäßig drei Jahre ab dem Schluss des Jahres, in dem der Flug stattfand. Wer wartet, verliert nichts, solange diese Frist läuft – nur die Beweismittel werden mit der Zeit dünner.',
    },
  ],
  relatedGenerators: ['fluggastrechte-entschaedigung', 'reklamation-kaufvertrag', 'widerruf-online-kauf'],
  lastReviewed: '2026-08-28',
};

export default guide;
