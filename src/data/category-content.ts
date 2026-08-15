/**
 * Editorial content for the category hubs (slug → copy).
 *
 * Replaces the earlier `category-intros.ts`, which held one paragraph per
 * hub. That was deliberate at the time — "hubs are internal-linking pages,
 * the landing pages carry the depth" — and it produced five pages with about
 * fifty words of their own. A page whose only substance is a list of links to
 * other pages is thin whichever way it is framed, so each hub now answers the
 * question a visitor actually arrives with: which of these letters is mine?
 *
 * Keep every entry specific to its area. Text that would read the same under
 * any of the five headings belongs in the shared layout or in a guide, not
 * here.
 */

export interface CategoryContent {
  /** Lead paragraph under the H1. 1–3 sentences. */
  lead: string;
  /** "Welches Schreiben passt zu meiner Situation?" — decision help. */
  choose: { heading: string; paragraphs: string[] };
  /** What is characteristic about deadlines and form in this area. */
  essentials: { heading: string; paragraphs: string[] };
  /** Mistakes specific to this area, not generic letter advice. */
  mistakes: { heading: string; items: { term: string; text: string }[] };
}

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  mietrecht: {
    lead: 'Ob Kündigung, Mängelanzeige oder Kaution: Diese Musterbriefe decken die häufigsten Schreiben rund um das Mietverhältnis ab. Alle Vorlagen füllen Sie direkt im Browser aus und drucken sie fertig formatiert aus – mit den passenden Paragrafen und Fristen im Blick.',
    choose: {
      heading: 'Welches Schreiben passt zu meiner Situation?',
      paragraphs: [
        'Im Mietrecht hängt fast alles daran, ob Sie <em>etwas anzeigen</em> oder <em>etwas fordern</em>. Ist in der Wohnung ein Mangel aufgetreten – Feuchtigkeit, Heizungsausfall, dauerhafter Baulärm –, dann ist die Mängelanzeige der erste Schritt, und sie ist zugleich Voraussetzung für alles Weitere: Wer den Mangel nicht anzeigt, kann die Miete nicht wirksam mindern und macht sich unter Umständen sogar schadensersatzpflichtig.',
        'Geht es dagegen um Geld, das Ihnen zusteht, ist der Weg ein anderer. Die Kaution fordern Sie nach dem Auszug zurück, sobald die Prüffrist des Vermieters abgelaufen ist. Gegen eine Nebenkostenabrechnung wenden Sie sich innerhalb der Einwendungsfrist – dafür brauchen Sie die Abrechnung und im Zweifel eine Einsicht in die Belege.',
        'Wollen Sie aus dem Vertrag heraus, kommt es auf den Zeitpunkt an. Regulär beträgt Ihre Frist rund drei Monate. Wenn es schneller gehen muss, ist der Nachmietervorschlag das übliche Mittel – ein Anspruch auf vorzeitige Entlassung besteht dabei nur in Ausnahmefällen, in der Praxis lassen sich viele Vermieter aber darauf ein, wenn drei zumutbare Kandidaten benannt werden.',
        'Und schließlich die Fälle, in denen Sie eine Erlaubnis brauchen: Untervermietung und Tierhaltung. Beide werden nicht durch eine Mitteilung erledigt, sondern durch eine Anfrage – wer ohne Erlaubnis handelt, riskiert eine Abmahnung, selbst wenn die Erlaubnis hätte erteilt werden müssen.',
      ],
    },
    essentials: {
      heading: 'Worauf es im Mietrecht besonders ankommt',
      paragraphs: [
        '<strong>Die Schriftform ist bei der Kündigung zwingend.</strong> Sie braucht das eigenhändig unterschriebene Original; E-Mail, Fax oder ein eingescanntes PDF genügen nicht. Haben mehrere Personen den Mietvertrag unterschrieben, müssen auch alle kündigen – und die Kündigung muss an alle Vermieter gerichtet sein.',
        '<strong>Anzeigen Sie früh, auch wenn Sie noch nichts fordern.</strong> Bei Mängeln ist das Datum der Anzeige der Anker für alles Weitere: Ab wann gemindert werden darf, ab wann der Vermieter in Verzug ist, ab wann Schäden auf sein Konto gehen. Ein Schreiben, das den Mangel nur beschreibt und um Beseitigung bittet, ist deshalb nie zu früh.',
        '<strong>Dokumentieren Sie den Zustand.</strong> Fotos mit Datum, ein Lärmprotokoll mit Uhrzeiten, das Übergabeprotokoll beim Auszug. Im Mietrecht wird über Zustände gestritten, die sich später nicht mehr rekonstruieren lassen – und die Beweislast trägt meistens derjenige, der etwas fordert.',
      ],
    },
    mistakes: {
      heading: 'Fehler, die im Mietrecht teuer werden',
      items: [
        {
          term: 'Miete eigenmächtig gekürzt',
          text: 'Wer den Mangel nicht angezeigt hat und trotzdem weniger überweist, gerät in Zahlungsverzug – und riskiert bei zwei Monatsmieten Rückstand die fristlose Kündigung. Anzeigen, Frist setzen, und die Minderung erst danach und der Höhe nach begründet vornehmen. Im Zweifel unter Vorbehalt zahlen.',
        },
        {
          term: 'Nur ein Mieter unterschreibt',
          text: 'Der häufigste Grund für eine unwirksame Kündigung. Stehen zwei Namen im Mietvertrag, müssen zwei Namen unter der Kündigung stehen – auch dann, wenn eine Person längst ausgezogen ist.',
        },
        {
          term: 'Einwendungsfrist der Nebenkostenabrechnung verstreichen lassen',
          text: 'Gegen eine Abrechnung können Sie nicht unbegrenzt vorgehen. Prüfen Sie sie, sobald sie kommt, und fordern Sie bei Unklarheiten früh die Belegeinsicht – die kostet nichts und verschafft Ihnen die Grundlage für eine begründete Einwendung.',
        },
        {
          term: 'Kaution zu früh eingefordert und dann nicht nachgefasst',
          text: 'Dem Vermieter steht eine angemessene Prüffrist zu. Setzen Sie eine Frist, notieren Sie das Datum – und schreiben Sie nach Ablauf ein zweites Mal, statt es auf sich beruhen zu lassen. Ansprüche verjähren.',
        },
      ],
    },
  },

  vertraege: {
    lead: 'Verträge kündigen, Käufe widerrufen, Forderungen bestreiten: Hier finden Sie Vorlagen für die häufigsten Schreiben an Unternehmen, Händler und Anbieter – zum direkten Ausfüllen im Browser, kostenlos und ohne Anmeldung.',
    choose: {
      heading: 'Welches Schreiben passt zu meiner Situation?',
      paragraphs: [
        'Die erste Frage lautet: Wollen Sie den Vertrag <em>beenden</em>, ihn <em>rückabwickeln</em> oder etwas <em>abwehren</em>? Die drei Wege haben nichts miteinander zu tun, und sie haben unterschiedliche Fristen.',
        '<strong>Beenden</strong> heißt kündigen: Der Vertrag lief bisher rechtmäßig und soll zu einem Termin enden. Dafür gibt es hier Vorlagen für Handy- und Internetverträge, Strom, Streaming-Abos und Fitnessstudios. Prüfen Sie dabei immer zuerst, ob ein Sonderkündigungsrecht greift – eine Preiserhöhung oder ein Umzug bringt Sie oft schneller heraus als die reguläre Frist.',
        '<strong>Rückabwickeln</strong> heißt widerrufen: Sie lösen einen Vertrag wieder auf, den Sie online oder an der Haustür geschlossen haben, ohne dass etwas schiefgegangen sein muss. Dafür haben Sie 14 Tage, und zur Fristwahrung genügt hier ausnahmsweise die rechtzeitige Absendung.',
        '<strong>Abwehren</strong> heißt: Etwas ist schiefgelaufen, und Sie wollen es nicht bezahlen. Ist die gelieferte Sache mangelhaft, ist die Reklamation der Weg; hat der Handwerker mangelhaft gearbeitet, die Mängelrüge mit Nachbesserungsfrist. Und wenn eine Inkassoforderung ins Haus flattert, die Sie für unberechtigt halten, widersprechen Sie ihr – und zwar schriftlich und dem Grunde nach, nicht durch Schweigen.',
      ],
    },
    essentials: {
      heading: 'Worauf es bei Verträgen besonders ankommt',
      paragraphs: [
        '<strong>Prüfen Sie die Laufzeitklausel, bevor Sie sich mit der Frist abfinden.</strong> In vorformulierten Verbraucherverträgen darf die Erstlaufzeit höchstens zwei Jahre betragen; verlängert sich der Vertrag automatisch, dann nur auf unbestimmte Zeit mit höchstens einem Monat Kündigungsfrist. Steht in Ihrem Vertrag noch eine Verlängerung um ein volles Jahr, ist diese Klausel regelmäßig unwirksam – und der Vertrag früher kündbar, als er behauptet.',
        '<strong>Online geschlossen heißt online kündbar.</strong> Für Verträge, die über eine Website zustande gekommen sind, muss der Anbieter eine Kündigungsschaltfläche bereitstellen und den Eingang in Textform bestätigen. Fehlt die Schaltfläche, können Sie jederzeit und ohne Frist kündigen.',
        '<strong>Setzen Sie bei Mängeln immer eine Frist.</strong> „Bitte kümmern Sie sich darum“ bringt Sie keinen Schritt weiter. Erst eine bestimmte, angemessene Frist eröffnet die weiteren Rechte – Minderung, Rücktritt, Schadensersatz oder die Ersatzvornahme beim Handwerker.',
      ],
    },
    mistakes: {
      heading: 'Fehler, die bei Verträgen teuer werden',
      items: [
        {
          term: 'Auf die Kündigungsbestätigung nicht gewartet',
          text: 'Eine abgeschickte Kündigung ist keine bestätigte Kündigung. Bleibt die Bestätigung aus, haken Sie nach, bevor die nächste Abbuchung kommt – rückwirkend ist der Streit ungleich mühsamer.',
        },
        {
          term: 'Widerrufsfrist mit der Bestellung beginnen lassen',
          text: 'Beim Warenkauf läuft die 14-Tage-Frist erst ab Erhalt der Ware, nicht ab Bestellung. Wer davon ausgeht, verschenkt Tage – und wer nie eine ordnungsgemäße Widerrufsbelehrung erhalten hat, kann sogar deutlich länger widerrufen.',
        },
        {
          term: 'Inkassoschreiben ignoriert',
          text: 'Eine unberechtigte Forderung verschwindet nicht durch Schweigen; im Gegenteil, sie wächst um Gebühren und kann in einen Mahnbescheid münden. Widersprechen Sie schriftlich und fordern Sie die Darlegung des Forderungsgrundes. Einem gerichtlichen Mahnbescheid müssen Sie innerhalb von zwei Wochen widersprechen.',
        },
        {
          term: 'Bei Mängeln gleich Geld zurückverlangt',
          text: 'In der Regel hat der Verkäufer zuerst das Recht auf Nacherfüllung. Wer sofort auf Rückabwicklung besteht, ohne eine Frist zur Nachbesserung oder Ersatzlieferung gesetzt zu haben, steht formal schlechter da – auch wenn die Sache eindeutig kaputt ist.',
        },
      ],
    },
  },

  arbeit: {
    lead: 'Vom Elternzeit-Antrag bis zur Kündigung: Diese Musterbriefe helfen bei formellen Schreiben an Ihren Arbeitgeber. Jede Vorlage nennt die maßgeblichen Vorschriften und Fristen und lässt sich direkt im Browser ausfüllen und ausdrucken.',
    choose: {
      heading: 'Welches Schreiben passt zu meiner Situation?',
      paragraphs: [
        'Arbeitsrechtliche Schreiben lassen sich danach ordnen, ob Sie etwas <em>beantragen</em>, etwas <em>fordern</em> oder das Arbeitsverhältnis <em>beenden</em>.',
        '<strong>Beantragen</strong> müssen Sie alles, was eine Veränderung Ihrer Arbeitszeit bedeutet: Elternzeit und Teilzeit. Beide sind an eigene, teils lange Vorlaufzeiten gebunden, und beide sind mehr als eine Bitte – bei der Elternzeit steht Ihnen der Anspruch zu, beim Teilzeitverlangen muss der Arbeitgeber betriebliche Gründe darlegen, wenn er ablehnen will. Die Vorlaufzeit ist hier der kritische Punkt, nicht die Formulierung.',
        '<strong>Fordern</strong> betrifft das, was Ihnen bereits zusteht: die Auszahlung geleisteter Überstunden, die Abgeltung nicht genommenen Urlaubs am Ende des Arbeitsverhältnisses, das Arbeitszeugnis. Diese Schreiben leben von der Genauigkeit – Zeiträume, Stundenzahlen, Beträge –, weil sie im Streitfall die Grundlage der Berechnung sind.',
        '<strong>Beenden</strong> heißt kündigen. Hier zählt vor allem die Form: Ohne eigenhändig unterschriebenes Original auf Papier ist eine Kündigung des Arbeitsverhältnisses unwirksam, und zwar auch dann, wenn der Arbeitgeber sie hinnimmt.',
      ],
    },
    essentials: {
      heading: 'Worauf es im Arbeitsrecht besonders ankommt',
      paragraphs: [
        '<strong>Die Schriftform ist hier absolut.</strong> Für Kündigung und Aufhebungsvertrag schließt das Gesetz die elektronische Form ausdrücklich aus. Eine Kündigung per E-Mail, Messenger oder SMS ist unwirksam – mit der unangenehmen Folge, dass das Arbeitsverhältnis weiterläuft und Sie unter Umständen unentschuldigt fehlen.',
        '<strong>Vier Wochen sind nicht ein Monat.</strong> Die gesetzliche Grundkündigungsfrist beträgt vier Wochen zum 15. oder zum Monatsende, also 28 Tage. Wer Anfang März zum 31. März kündigen will, ist damit schon zu spät. Prüfen Sie außerdem Arbeits- und Tarifvertrag: Dort stehen oft längere Fristen.',
        '<strong>Achten Sie auf Ausschlussfristen.</strong> Viele Arbeits- und Tarifverträge enthalten Klauseln, nach denen Ansprüche verfallen, wenn sie nicht innerhalb weniger Monate schriftlich geltend gemacht werden. Bei Überstunden und Urlaubsabgeltung ist das der häufigste Grund, warum berechtigte Forderungen ins Leere gehen – nicht die Sache selbst, sondern der Zeitpunkt.',
        '<strong>Bleiben Sie sachlich, auch wenn es das nicht ist.</strong> Schreiben an den Arbeitgeber landen in der Personalakte und werden im Streitfall vorgelegt. Ein Schreiben, das nur Zahlen und Daten nennt, ist Ihnen später nützlicher als eines, das recht hat.',
      ],
    },
    mistakes: {
      heading: 'Fehler, die im Arbeitsrecht teuer werden',
      items: [
        {
          term: 'Per E-Mail gekündigt',
          text: 'Unwirksam, unabhängig davon, ob der Arbeitgeber reagiert oder nicht. Die Frist beginnt erst mit dem Zugang des unterschriebenen Originals – wer sich darauf verlässt, arbeitet unter Umständen noch Wochen länger als geplant.',
        },
        {
          term: 'Überstunden ohne Nachweis gefordert',
          text: 'Nennen Sie Zeitraum, Stundenzahl und die Grundlage Ihrer Zählung, und legen Sie vorhandene Aufzeichnungen bei. Eine pauschale Forderung ohne Aufstellung ist leicht zurückzuweisen, und die Darlegungslast liegt bei Ihnen.',
        },
        {
          term: 'Elternzeit zu spät angemeldet',
          text: 'Für den Anspruch gelten feste Vorlaufzeiten vor dem gewünschten Beginn. Wer sie versäumt, verschiebt den Beginn – der Anspruch geht nicht unter, aber er beginnt später, und das kann sich auf die gesamte Planung auswirken.',
        },
        {
          term: 'Zeugnis erst nach Monaten angefordert',
          text: 'Je später Sie fragen, desto schwerer fällt es dem alten Arbeitgeber, Ihre Leistungen konkret zu beschreiben – und desto blasser wird das Zeugnis. Fordern Sie es zeitnah zum Ende des Arbeitsverhältnisses an.',
        },
      ],
    },
  },

  versicherung: {
    lead: 'Versicherungen kündigen oder auf Vertragsänderungen reagieren: Diese Vorlagen helfen bei formellen Schreiben an Versicherer und Banken – mit den maßgeblichen Fristen und Vorschriften, direkt im Browser ausgefüllt.',
    choose: {
      heading: 'Welches Schreiben passt zu meiner Situation?',
      paragraphs: [
        'Bei Versicherungen entscheidet der <em>Anlass</em> darüber, welches Schreiben Sie brauchen – und wie viel Zeit Sie haben.',
        'Wollen Sie schlicht wechseln, ist es die <strong>ordentliche Kündigung</strong> zum Ende des Versicherungsjahres. Maßgeblich ist dabei der Beginn Ihres Vertrags, nicht das Kalenderjahr: Der 31. Dezember ist eine Gewohnheit, kein Gesetz. Der Termin steht in Ihrem Versicherungsschein.',
        'Kommt dagegen ein Brief mit einer <strong>Beitragserhöhung</strong>, öffnet sich ein eigenes, kurzes Fenster: Sie können mit sofortiger Wirkung kündigen, aber nur innerhalb eines Monats nach Zugang der Mitteilung. Dieses Sonderkündigungsrecht ist unabhängig von der regulären Frist – und es ist der häufigste Grund, aus einem Vertrag herauszukommen, an den man sich sonst gebunden glaubt.',
        'Bei der <strong>privaten Krankenversicherung</strong> liegt der Fall anders. Dort ist eine Beitragsanpassung gesetzlich vorgesehen, aber an strenge Voraussetzungen geknüpft – ein Treuhänder muss zugestimmt haben, und die Anpassung wird erst wirksam, wenn Ihnen die maßgeblichen Gründe mitgeteilt wurden. Ein Schreiben, das genau diese Begründung anfordert, ist deshalb oft der sinnvollere erste Schritt als eine Kündigung.',
        'Zu diesem Bereich gehören auch die Bankschreiben: die <strong>Kündigung eines Girokontos</strong> und die <strong>Umwandlung in ein Pfändungsschutzkonto</strong>. Letztere ist kein Gefallen, den die Bank tut, sondern ein Anspruch – und sie ist zeitkritisch, sobald eine Pfändung vorliegt.',
      ],
    },
    essentials: {
      heading: 'Worauf es bei Versicherungen besonders ankommt',
      paragraphs: [
        '<strong>Kündigen Sie nie ohne Anschlussschutz.</strong> Bei Pflichtversicherungen – vor allem der Kfz-Haftpflicht – gilt das ausnahmslos: Erst den neuen Vertrag, dann den alten kündigen. Bei Hausrat und Haftpflicht ist eine Lücke zwar nicht verboten, aber sie trifft Sie genau dann, wenn etwas passiert.',
        '<strong>Die Ein-Monats-Frist bei Erhöhungen läuft ab Zugang.</strong> Nicht ab dem Datum des Schreibens und nicht ab dem Tag, an dem Sie es geöffnet haben. Notieren Sie den Tag, an dem der Brief im Briefkasten lag, und heben Sie den Umschlag auf.',
        '<strong>Nach einem Schaden dürfen beide Seiten kündigen.</strong> Das gilt auch für den Versicherer – und zwar bis zum Ablauf eines Monats nach Abschluss der Verhandlungen über die Entschädigung. Wer nach einem Schadensfall selbst kündigen will, sollte deshalb wissen, dass dieses Fenster in beide Richtungen offen steht.',
      ],
    },
    mistakes: {
      heading: 'Fehler, die bei Versicherungen teuer werden',
      items: [
        {
          term: 'Zum Kalenderjahr statt zum Versicherungsjahr gekündigt',
          text: 'Der Stichtag ergibt sich aus dem Beginn Ihres Vertrags. Wer pauschal zum 31. Dezember kündigt, verpasst bei einem im Juni beginnenden Vertrag den richtigen Termin um ein halbes Jahr.',
        },
        {
          term: 'Sonderkündigungsrecht ungenutzt verstreichen lassen',
          text: 'Der Monat nach Zugang der Beitragserhöhung ist die Gelegenheit, den Vertrag ohne Rücksicht auf die reguläre Frist zu beenden. Legen Sie den Brief nicht zur Seite – nach vier Wochen ist das Recht weg.',
        },
        {
          term: 'Kfz-Haftpflicht ohne Nachfolgeschutz gekündigt',
          text: 'Ohne bestehende Haftpflichtversicherung darf das Fahrzeug nicht am Verkehr teilnehmen; die Zulassungsstelle wird informiert und das Fahrzeug außer Betrieb gesetzt. Der neue Vertrag gehört immer vor die Kündigung.',
        },
        {
          term: 'PKV-Anpassung akzeptiert, ohne die Begründung zu kennen',
          text: 'Die Neufestsetzung wird erst wirksam, wenn Ihnen die maßgeblichen Gründe mitgeteilt worden sind. Ein Schreiben, das diese Begründung anfordert, kostet nichts und ist die Grundlage dafür, die Erhöhung überhaupt beurteilen zu können.',
        },
      ],
    },
  },

  behoerden: {
    lead: 'Einspruch, Widerspruch und andere Schreiben an Ämter und Behörden: Mit diesen Vorlagen wahren Sie Fristen und bringen Ihr Anliegen in die richtige Form – direkt im Browser ausfüllen, ausdrucken, fertig.',
    choose: {
      heading: 'Welches Schreiben passt zu meiner Situation?',
      paragraphs: [
        'Bei Behörden ist die erste Frage nicht, was Sie schreiben wollen, sondern <em>worauf Sie antworten</em>. Schauen Sie auf das Schreiben, das Sie erhalten haben, und suchen Sie darin die Rechtsbehelfsbelehrung – der Absatz am Ende, der Ihnen sagt, welcher Rechtsbehelf zulässig ist, bei welcher Stelle und innerhalb welcher Frist. Dieser Absatz beantwortet die Frage zuverlässiger als jede Übersicht.',
        'Handelt es sich um einen <strong>Bußgeldbescheid</strong>, ist der Rechtsbehelf der Einspruch, und Sie haben zwei Wochen ab Zustellung. Das ist die kürzeste Frist in diesem Bereich, und sie beginnt mit der Zustellung, nicht mit dem Datum auf dem Bescheid – heben Sie deshalb den Umschlag mit dem Zustellungsvermerk auf.',
        'Handelt es sich um einen anderen <strong>Bescheid</strong> – Gebühren, Sozialleistungen, eine behördliche Entscheidung –, ist es der Widerspruch, und die Frist beträgt einen Monat ab Bekanntgabe. Sie müssen ihn nicht sofort begründen: Fristwahrend ist die Erklärung, dass Sie widersprechen.',
        'Und wenn Sie schlicht nicht wissen, worauf sich eine Entscheidung stützt, ist der richtige erste Schritt die <strong>Akteneinsicht</strong>. Sie ist kein Rechtsbehelf und löst kein Verfahren aus, verschafft Ihnen aber die Unterlagen, auf denen eine Begründung überhaupt aufbauen kann.',
        'Getrennt davon steht der <strong>Rundfunkbeitrag</strong>: Befreiung und Ermäßigung sind Anträge, keine Rechtsbehelfe. Sie richten sich nach den Sozialleistungen, die Sie beziehen, und brauchen den Bewilligungsbescheid als Nachweis.',
      ],
    },
    essentials: {
      heading: 'Worauf es bei Behörden besonders ankommt',
      paragraphs: [
        '<strong>Die Frist ist wichtiger als die Begründung.</strong> Ein knapper, fristgerechter Widerspruch, der nur sagt, dass Sie widersprechen, ist unendlich viel mehr wert als ein ausführlicher, der zwei Tage zu spät kommt. Legen Sie ein, begründen Sie danach.',
        '<strong>Widerspruch heißt nicht, dass Sie nicht zahlen müssen.</strong> Bei Gebühren-, Beitrags- und Kostenbescheiden entfällt die aufschiebende Wirkung kraft Gesetzes. Wer die Zahlung aussetzen will, muss das zusätzlich beantragen – sonst laufen Mahngebühren auf, auch wenn der Widerspruch am Ende Erfolg hat.',
        '<strong>Fehlt die Rechtsbehelfsbelehrung, haben Sie ein Jahr.</strong> Das gilt auch, wenn sie fehlerhaft ist. Bevor Sie einen älteren Bescheid für erledigt halten, prüfen Sie diesen Absatz – er ist der häufigste Grund, warum eine vermeintlich abgelaufene Frist doch noch offen ist.',
        '<strong>Schreiben Sie an die Stelle, die den Bescheid erlassen hat.</strong> Nicht an die Aufsichtsbehörde und nicht an eine andere Abteilung. Bei Widerspruch und Einspruch steht der richtige Adressat ausdrücklich im Gesetz – und in der Rechtsbehelfsbelehrung.',
      ],
    },
    mistakes: {
      heading: 'Fehler, die bei Behördenschreiben teuer werden',
      items: [
        {
          term: 'Auf das Bescheiddatum statt auf die Zustellung geschaut',
          text: 'Zwischen dem Datum auf dem Bescheid und dem Tag, an dem er bei Ihnen ankommt, liegen oft Tage. Bei einer Zwei-Wochen-Frist ist das entscheidend. Der Umschlag mit dem Zustellungsvermerk ist der Beleg – nicht wegwerfen.',
        },
        {
          term: 'Erst begründen, dann einlegen',
          text: 'Wer wartet, bis er die perfekte Begründung beisammen hat, verliert die Frist. Der Rechtsbehelf wird eingelegt, sobald die Entscheidung gefallen ist, dagegen vorzugehen; alles Weitere folgt.',
        },
        {
          term: 'Telefonisch widersprochen',
          text: 'Ein Anruf wahrt die Frist nicht und lässt sich später nicht belegen. Zulässig sind die Schriftform, die elektronische Form und die Niederschrift bei der Behörde – der Telefonhörer gehört nicht dazu.',
        },
        {
          term: 'Nachweise nur im Original geschickt',
          text: 'Behördenpost geht durch viele Hände, und Originale kommen erfahrungsgemäß nicht zurück. Schicken Sie Kopien und behalten Sie die Originale – gerade bei Bewilligungsbescheiden, die Sie an anderer Stelle noch brauchen.',
        },
      ],
    },
  },
};
