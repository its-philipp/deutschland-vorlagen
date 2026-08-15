import type { GuideConfig } from '../../lib/guide-config';

/**
 * A purely formal guide: DIN 5008 is a standard, not a statute, so this one
 * carries no § citations at all rather than borrowing unrelated ones.
 */
const guide: GuideConfig = {
  slug: 'geschaeftsbrief-din-5008',
  h1: 'Geschäftsbrief nach DIN 5008: Aufbau, Reihenfolge, Betreff',
  metaTitle: 'Geschäftsbrief nach DIN 5008: Aufbau und Muster 2026',
  metaDescription:
    'Absender, Anschrift, Datum, Betreff, Anrede, Schluss: wie ein formeller Brief aufgebaut ist, welche Reihenfolge gilt und welche Fehler auffallen.',
  intro:
    'Ein Brief, der aussieht wie ein Brief, wird anders gelesen als eine hingeschriebene Nachricht. Das ist kein Ästhetikthema: Bei Behörden und Unternehmen entscheidet die Form darüber, wie schnell ein Schreiben der richtigen Akte zugeordnet wird.',
  icon: 'doc',
  sections: [
    {
      heading: 'Warum die Form eine Wirkung hat',
      paragraphs: [
        'DIN 5008 ist kein Gesetz. Kein Schreiben wird unwirksam, weil das Datum links statt rechts steht. Trotzdem lohnt sich die Norm, und zwar aus einem sehr praktischen Grund: Sie ist die Erwartung, mit der Sachbearbeiterinnen und Sachbearbeiter lesen.',
        'Wer täglich Post bearbeitet, sucht Informationen an bestimmten Stellen: das Aktenzeichen im Betreff, den Absender oben, das Datum rechts. Steht alles dort, wo es hingehört, ist Ihr Schreiben in zehn Sekunden zugeordnet. Steht es woanders, dauert es länger – und ein Schreiben, das länger dauert, wird seltener sofort erledigt.',
        'Der zweite Effekt ist der Ton. Ein sauber aufgebauter Brief signalisiert, dass Sie die Sache ernst nehmen. Das ist besonders dann etwas wert, wenn Ihr Schreiben eine Forderung enthält, der man auch ausweichen könnte.',
      ],
    },
    {
      heading: 'Die Bestandteile in ihrer Reihenfolge',
      paragraphs: [
        'Von oben nach unten enthält ein formeller Brief die folgenden Teile. Die Vorlagen auf dieser Seite setzen genau diese Reihenfolge automatisch.',
      ],
      list: [
        {
          term: '1. Absenderangabe',
          text: 'Ihr Name, Straße und Hausnummer, Postleitzahl und Ort. In der klassischen Anordnung steht sie klein über dem Anschriftenfeld, damit sie im Fensterumschlag mit erscheint. Eine Telefonnummer oder E-Mail-Adresse ist freiwillig, beschleunigt Rückfragen aber oft erheblich.',
        },
        {
          term: '2. Empfängeranschrift',
          text: 'Vollständiger Name der Person, Firma oder Behörde, dann Straße und Hausnummer, dann Postleitzahl und Ort – jeweils in eigenen Zeilen und ohne Leerzeile dazwischen. Bei Unternehmen gehört die vollständige Firmierung hierher, nicht der Markenname von der Rechnung. Ein „z. Hd.“ oder eine Abteilung steht über der Straße.',
        },
        {
          term: '3. Ort und Datum',
          text: 'Rechtsbündig, zwei Zeilen unter der Anschrift: „Hamburg, 12.03.2026“. Das Datum ist wichtiger, als es aussieht – es dokumentiert, wann Sie das Schreiben verfasst haben, und wird bei Fristfragen als Erstes gesucht.',
        },
        {
          term: '4. Betreffzeile',
          text: 'Ohne das Wort „Betreff“, fett, ohne abschließenden Punkt. Hier gehört alles hinein, was die Zuordnung ermöglicht: Vertrags-, Kunden- oder Beitragsnummer, Aktenzeichen, Datum des Bescheids. Ein guter Betreff lautet nicht „Kündigung“, sondern „Kündigung meines Stromliefervertrags – Kundennummer SK-2026-330912“.',
        },
        {
          term: '5. Anrede',
          text: 'Kennen Sie den Namen, dann „Sehr geehrte Frau …“ oder „Sehr geehrter Herr …“; kennen Sie ihn nicht, „Sehr geehrte Damen und Herren“. Nach der Anrede steht ein Komma, und der folgende Satz beginnt klein.',
        },
        {
          term: '6. Brieftext',
          text: 'Das Anliegen im ersten Satz, nicht im dritten Absatz. Danach die Begründung, dann – falls nötig – die Frist und die gewünschte Handlung. Absätze durch Leerzeilen trennen, nicht durch Einrückungen.',
        },
        {
          term: '7. Gruß und Unterschrift',
          text: '„Mit freundlichen Grüßen“, dann drei bis vier Leerzeilen für die handschriftliche Unterschrift, darunter der maschinenschriftliche Name. Wo Schriftform gilt, ist die eigenhändige Unterschrift keine Höflichkeit, sondern Wirksamkeitsvoraussetzung.',
        },
        {
          term: '8. Anlagen',
          text: 'Am Ende, mit dem Wort „Anlagen“ und einer Aufzählung. Schicken Sie niemals Originale – Kopien genügen, und Originale kommen erfahrungsgemäß nicht zurück.',
        },
      ],
    },
    {
      heading: 'Der Betreff ist der wichtigste Teil',
      paragraphs: [
        'Wenn Sie an einem einzigen Element arbeiten wollen, arbeiten Sie am Betreff. Er entscheidet, in welchen Vorgang Ihr Schreiben einsortiert wird und wie schnell es bearbeitet wird.',
        'Ein brauchbarer Betreff nennt drei Dinge: was Sie tun („Widerspruch“, „Kündigung“, „Mängelanzeige“), worauf es sich bezieht („gegen den Gebührenbescheid vom 01.07.2026“) und die Nummer, unter der die Gegenseite den Vorgang führt. Alle drei zusammen ergeben eine Zeile, die auch dann noch funktioniert, wenn der Brieftext gar nicht gelesen wird.',
        'Vermeiden Sie dagegen Betreffzeilen, die eine Bewertung enthalten – „Unverschämte Abrechnung“ –, und solche, die aus mehreren Sätzen bestehen. Eine Zeile, ein Vorgang.',
      ],
    },
    {
      heading: 'Häufige Fehler',
      paragraphs: [
        '<strong>Der Brief beginnt mit der Vorgeschichte.</strong> Sachbearbeiter lesen den ersten Satz, um zu entscheiden, worum es geht. Wenn dort „Am 3. März dieses Jahres bin ich in die Wohnung eingezogen“ steht, ist noch nichts gesagt. Beginnen Sie mit Ihrem Anliegen und erklären Sie danach.',
        '<strong>Die Frist fehlt oder ist unbestimmt.</strong> „Bitte erledigen Sie das zeitnah“ ist keine Frist. Nennen Sie ein Datum oder eine Anzahl von Wochen. Ohne bestimmte Frist ist auch nicht feststellbar, wann sie abgelaufen ist – und darauf kommt es beim nächsten Schritt an.',
        '<strong>Der Ton eskaliert zu früh.</strong> Ein erstes Schreiben, das mit dem Anwalt droht, engt die Reaktion der Gegenseite ein und bringt selten etwas. Sachlich bleiben und die Eskalation aufheben, bis sie nötig wird.',
        '<strong>Keine Kopie behalten.</strong> Bevor der Brief in den Umschlag geht: unterschreiben, fotografieren oder kopieren, das Absendedatum notieren. Ohne Kopie können Sie später nicht belegen, was Sie geschrieben haben – auch nicht mit einem Einschreiben-Beleg.',
      ],
    },
  ],
  legalBasis: [],
  faq: [
    {
      q: 'Ist DIN 5008 verpflichtend?',
      a: 'Nein. Es ist eine Norm für die Gestaltung, kein Gesetz. Ein Schreiben ist nicht unwirksam, weil es davon abweicht. Der Nutzen liegt darin, dass die Gegenseite die Informationen dort findet, wo sie sie sucht.',
    },
    {
      q: 'Wo genau steht das Datum?',
      a: 'Rechtsbündig, unterhalb des Anschriftenfelds und oberhalb der Betreffzeile, in der Form „Ort, TT.MM.JJJJ“. Die Vorlagen auf dieser Seite setzen es automatisch dorthin und füllen das heutige Datum vor.',
    },
    {
      q: 'Schreibt man „Betreff“ vor die Betreffzeile?',
      a: 'Nach heutiger Norm nicht. Die Betreffzeile steht ohne das Wort „Betreff“, hervorgehoben und ohne Punkt am Ende.',
    },
    {
      q: 'Wie lang darf ein solches Schreiben sein?',
      a: 'So kurz wie möglich. Eine Seite genügt fast immer. Alles, was Beleg ist – Rechnungen, Bescheide, Fotos –, gehört als Kopie in die Anlage, nicht in den Fließtext.',
    },
    {
      q: 'Muss ich meine Telefonnummer angeben?',
      a: 'Nein, das ist freiwillig. Es beschleunigt Rückfragen, öffnet aber auch den Weg zu einem Telefonat, in dem Sie unter Umständen etwas zusagen, das Sie schriftlich überlegter formuliert hätten. Bei strittigen Sachen ist es oft besser, es beim Schriftweg zu belassen.',
    },
  ],
  relatedGenerators: [
    'widerspruch-bescheid',
    'maengelruege-handwerker',
    'reklamation-kaufvertrag',
    'akteneinsicht-behoerde',
  ],
  lastReviewed: '2026-08-15',
};

export default guide;
