import type { GuideConfig } from '../../lib/guide-config';

/**
 * §§ carried over from verified generator configs (kuendigung-arbeitsvertrag,
 * kuendigung-mietvertrag, kuendigung-streaming-abo, kuendigung-stromvertrag).
 * The general form definitions of §§ 126/126b BGB are described in plain
 * words rather than cited, because those two were not themselves checked
 * against the primary text for this guide.
 */
const guide: GuideConfig = {
  slug: 'schriftform-textform-kuendigungsbutton',
  h1: 'Schriftform, Textform, Kündigungsbutton: Welche Form braucht Ihr Schreiben?',
  metaTitle: 'Schriftform oder Textform? Welche Form wann gilt 2026',
  metaDescription:
    'Unterschrift im Original, E-Mail oder Schaltfläche: Die Form entscheidet über die Wirksamkeit Ihres Schreibens. Die Regeln nach Vertragsart.',
  intro:
    'Die Form ist der unauffälligste Grund, an dem ein richtig geschriebenes Schreiben scheitert. Sie entscheidet nicht darüber, ob Ihr Anliegen berechtigt ist – sondern darüber, ob Ihre Erklärung überhaupt wirkt.',
  icon: 'certificate',
  sections: [
    {
      heading: 'Drei Formen, ein Unterschied',
      paragraphs: [
        'Das Gesetz kennt für Erklärungen im Alltag im Wesentlichen drei Stufen. Sie unterscheiden sich darin, wie stark der Urheber der Erklärung festgelegt sein muss.',
      ],
      list: [
        {
          term: 'Schriftform',
          text: 'Die strengste der drei. Die Erklärung muss auf Papier stehen und vom Aussteller eigenhändig unterschrieben sein; dieses Original muss dem Empfänger zugehen. Ein Scan, ein Foto, ein Fax oder eine in ein PDF eingefügte Unterschriftsgrafik erfüllen die Schriftform nicht. Wo das Gesetz Schriftform verlangt, ist eine formwidrige Erklärung nicht etwa nur schwer beweisbar, sondern unwirksam.',
        },
        {
          term: 'Textform',
          text: 'Die praktische Mitte. Die Erklärung muss lesbar sein, den Erklärenden nennen und auf einem dauerhaften Datenträger abgegeben werden – E-Mail, PDF-Anhang, Kontaktformular mit Bestätigung, Brief ohne Unterschrift. Eine eigenhändige Unterschrift ist nicht nötig. Der weitaus größte Teil der Schreiben im Verbraucheralltag kommt mit Textform aus.',
        },
        {
          term: 'Formfrei',
          text: 'Mündlich, telefonisch, per Chat – rechtlich wirksam, praktisch riskant. Sie haben nichts in der Hand. Für alles, worauf Sie sich später berufen wollen, ist Textform das Minimum, auch wenn das Gesetz weniger verlangt.',
        },
      ],
    },
    {
      heading: 'Wo Schriftform zwingend ist',
      paragraphs: [
        'Die beiden praktisch wichtigsten Fälle betreffen ausgerechnet die Verträge, die für die meisten Menschen am meisten wiegen.',
        '<strong>Arbeitsverhältnis.</strong> Die Kündigung eines Arbeitsverhältnisses bedarf zu ihrer Wirksamkeit der Schriftform, und die elektronische Form ist ausdrücklich ausgeschlossen (§ 623 BGB). E-Mail, Fax, SMS und Messenger-Nachrichten sind damit unwirksam – auch dann, wenn der Arbeitgeber sie akzeptiert und Sie schon nicht mehr erscheinen. Dasselbe gilt für den Aufhebungsvertrag.',
        '<strong>Mietverhältnis.</strong> Die Kündigung eines Mietverhältnisses bedarf ebenfalls der schriftlichen Form (§ 568 Abs. 1 BGB): eigenhändig unterschriebenes Original, das dem Vermieter zugeht. Auch hier reichen E-Mail, Fax oder eine eingescannte Unterschrift nicht.',
        'Bei beiden gilt zusätzlich: Alle Vertragsparteien auf Ihrer Seite müssen unterschreiben, und die Erklärung muss an alle Parteien der Gegenseite gerichtet sein. Zwei Mieter, eine Unterschrift – das ist der häufigste Formfehler überhaupt.',
      ],
    },
    {
      heading: 'Wo Textform genügt – und was der Anbieter dann leisten muss',
      paragraphs: [
        'Der größere Teil der Alltagsverträge kommt mit Textform aus: Abos, Fitnessstudio, Zeitschriften, Telekommunikation, Versicherungen. Für Energielieferverträge mit Haushaltskunden außerhalb der Grundversorgung schreibt das Gesetz die Textform sogar ausdrücklich vor – und verpflichtet den Lieferanten, die Kündigung innerhalb einer Woche nach Zugang in Textform zu bestätigen, unter Angabe des Vertragsendes (§ 41b Abs. 1 EnWG).',
        'Diese Bestätigungspflicht ist mehr wert, als sie klingt. Sie verwandelt Ihr Kündigungsschreiben in einen dokumentierten Vorgang: Bleibt die Bestätigung aus, wissen Sie innerhalb einer Woche, dass etwas nicht stimmt – und nicht erst, wenn die nächste Abschlagszahlung abgebucht wird.',
      ],
    },
    {
      heading: 'Der Kündigungsbutton: online geschlossen, online kündbar',
      paragraphs: [
        'Für Verträge, die über eine Website zustande gekommen sind, gilt seit 2022 eine eigene Regel: Der Anbieter muss eine Kündigungsschaltfläche bereitstellen, über die sich der Vertrag direkt auf der Website beenden lässt (§ 312k BGB). Die Schaltfläche muss gut lesbar mit nichts anderem als „Verträge hier kündigen“ beschriftet sein und ohne Anmeldung erreichbar bleiben.',
        'Der eigentliche Gewinn steckt in der Bestätigung: Nach der Kündigung über den Button muss der Anbieter Ihnen den Eingang unverzüglich in Textform bestätigen, mit Inhalt, Datum und Zeitpunkt der Beendigung. Damit haben Sie einen Nachweis, der genauso belastbar ist wie ein Einschreiben – und billiger.',
        'Und die Regel hat Zähne: Stellt der Anbieter keine ordnungsgemäße Kündigungsschaltfläche bereit, können Sie den Vertrag jederzeit und ohne Einhaltung einer Kündigungsfrist kündigen. Wer also auf der Website eines Anbieters vergeblich nach dem Button sucht, hat damit nicht ein Problem, sondern ein Argument.',
        'Praktischer Rat: Machen Sie einen Screenshot der Bestätigungsseite und heben Sie die Bestätigungsmail auf. Der Button ist der bequemste Weg, aber die Beweislast für die Kündigung liegt weiter bei Ihnen.',
      ],
    },
    {
      heading: 'Was das für Ihr Schreiben heißt',
      paragraphs: [
        'Wenn Sie unsicher sind, gilt eine einfache Reihenfolge. Verlangt das Gesetz oder der Vertrag Schriftform, drucken Sie das Schreiben aus, unterschreiben Sie es mit der Hand und schicken Sie das Original – idealerweise als Einwurf-Einschreiben. Genügt Textform, ist der Weg frei: Kündigungsbutton, wenn es ihn gibt, sonst E-Mail mit Bitte um Bestätigung.',
        'Ein ausgedrucktes, unterschriebenes Schreiben ist nie falsch. Es erfüllt die Schriftform und damit automatisch auch die Textform. Genau deshalb erzeugen die Vorlagen auf dieser Seite ein Schreiben zum Ausdrucken: Der Ausdruck passt in jeden Fall, die E-Mail nicht.',
        'Umgekehrt gilt: Wo Textform genügt, ist der Ausdruck nicht nötig. Sie können den erzeugten Text ebenso gut kopieren und in eine E-Mail einsetzen – über die Schaltfläche „Text kopieren“ in jedem Generator.',
      ],
    },
  ],
  legalBasis: [
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
    {
      ref: '§ 312k BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__312k.html',
      note: 'Kündigungsbutton: Online abgeschlossene Verträge müssen sich auch direkt über eine Schaltfläche auf der Website kündigen lassen.',
    },
    {
      ref: '§ 41b EnWG',
      url: 'https://www.gesetze-im-internet.de/enwg_2005/__41b.html',
      note: 'Energielieferverträge mit Haushaltskunden außerhalb der Grundversorgung und ihre Kündigung durch den Energielieferanten bedürfen der Textform. Der Energielieferant hat dem Haushaltskunden dessen Kündigung innerhalb einer Woche nach Zugang unter Angabe des Vertragsendes in Textform zu bestätigen (Abs. 1).',
    },
  ],
  faq: [
    {
      q: 'Reicht eine eingescannte Unterschrift in einem PDF?',
      a: 'Für die Schriftform nicht. Sie verlangt das eigenhändig unterschriebene Original auf Papier, das dem Empfänger zugeht. Wo Textform genügt, ist das PDF dagegen unproblematisch – dort braucht es überhaupt keine Unterschrift.',
    },
    {
      q: 'Mein Arbeitgeber hat meine Kündigung per E-Mail akzeptiert. Ist sie damit wirksam?',
      a: 'Nein. § 623 BGB schließt die elektronische Form ausdrücklich aus; eine formwidrige Kündigung ist unwirksam, auch wenn der Empfänger nichts einwendet. Reichen Sie das unterschriebene Original nach – und beachten Sie, dass die Frist erst mit dessen Zugang zu laufen beginnt.',
    },
    {
      q: 'Der Anbieter hat keinen Kündigungsbutton auf seiner Website. Was nun?',
      a: 'Das ist zu Ihrem Vorteil: Fehlt die ordnungsgemäße Kündigungsschaltfläche bei einem online geschlossenen Vertrag, können Sie jederzeit und ohne Einhaltung einer Kündigungsfrist kündigen (§ 312k BGB). Kündigen Sie dann in Textform und weisen Sie auf das Fehlen der Schaltfläche hin.',
    },
    {
      q: 'Muss ich die Kündigung begründen?',
      a: 'Bei einer ordentlichen Kündigung in der Regel nicht – Sie brauchen keinen Grund und müssen keinen nennen. Anders bei außerordentlichen Kündigungen und Sonderkündigungsrechten: Dort sollte der Anlass (Preiserhöhung, Umzug, Versicherungsfall) im Schreiben stehen, weil er das Recht überhaupt erst trägt.',
    },
    {
      q: 'Wie erfülle ich die Schriftform, wenn ich keinen Drucker habe?',
      a: 'Ein Copyshop genügt, ebenso viele Bibliotheken und Postfilialen. Ein handschriftlich abgeschriebenes Schreiben ist ebenfalls formwirksam – die Schriftform verlangt nur die eigenhändige Unterschrift, nicht einen maschinellen Text.',
    },
  ],
  relatedGenerators: [
    'kuendigung-arbeitsvertrag',
    'kuendigung-mietvertrag',
    'kuendigung-streaming-abo',
    'kuendigung-stromvertrag',
  ],
  lastReviewed: '2026-08-15',
};

export default guide;
