import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de / dejure.org and the
 * Bundesamt für Justiz (Rechtsdienstleistungsregister) on 2026-07-12;
 * §§ 13a RDG, 288, 195, 199 BGB and 694 ZPO read against the primary text on
 * 2026-08-27, when the § 13a duties were added to the letter itself.
 * RDG-safe framing: the template disputes the claim and requests
 * documentation – it does not assert or promise that the claim is invalid.
 */
const config: GeneratorConfig = {
  slug: 'widerspruch-inkasso-forderung',
  category: 'vertraege',
  categoryLabel: 'Verträge & Verbraucher',
  h1: 'Widerspruch gegen Inkasso-Forderung: Muster zum Ausfüllen',
  metaTitle: 'Widerspruch Inkasso-Forderung: Kostenloses Muster 2026',
  metaDescription:
    'Inkasso-Schreiben erhalten? Forderung bestreiten und Nachweise anfordern – Schreiben online ausfüllen und drucken, kostenlos ohne Anmeldung.',
  intro:
    'Mit diesem Generator erstellen Sie ein Schreiben, mit dem Sie einer Inkasso-Forderung widersprechen und eine vollständige Forderungsaufstellung samt Nachweisen anfordern – direkt im Browser, ohne Anmeldung.',
  fields: [
    {
      id: 'aktenzeichen',
      label: 'Vorgangs- oder Aktenzeichen des Inkassobüros',
      type: 'text',
      required: true,
      hint: 'Steht auf dem Inkasso-Schreiben, meist oben rechts oder im Betreff.',
      example: 'INK-2026-004711',
    },
    {
      id: 'schreibenDatum',
      label: 'Datum des Inkasso-Schreibens',
      type: 'date',
      required: true,
      hint: 'Datum, das auf dem erhaltenen Schreiben angegeben ist.',
      example: '01.07.2026',
    },
    {
      id: 'forderungsbetrag',
      label: 'Geforderter Gesamtbetrag',
      type: 'text',
      required: true,
      hint: 'Der im Schreiben genannte Betrag, inklusive etwaiger Zinsen und Kosten.',
      example: '347,89 €',
    },
    {
      id: 'umfang',
      label: 'Umfang Ihres Widerspruchs',
      type: 'select',
      required: true,
      hint: 'Wählen Sie, in welchem Umfang Sie die Forderung bestreiten möchten.',
      options: [
        {
          value: 'vollständig, sowohl dem Grunde als auch der Höhe nach',
          label: 'Vollständig (Grund und Höhe bestritten)',
        },
        { value: 'der Höhe nach', label: 'Nur die Höhe ist strittig' },
        {
          value: 'dem Grunde nach',
          label: 'Nur der Grund (ob die Forderung überhaupt besteht) ist strittig',
        },
      ],
    },
  ],
  subjectTemplate:
    'Widerspruch gegen Ihre Forderung – Vorgang {{aktenzeichen}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

zu Ihrem Schreiben vom {{schreibenDatum}}, Vorgangs-/Aktenzeichen {{aktenzeichen}}, in dem Sie einen Betrag von {{forderungsbetrag}} von mir fordern, nehme ich wie folgt Stellung:

Hiermit widerspreche ich der geltend gemachten Forderung {{umfang}}.

Nach § 13a Abs. 1 und 2 RDG fordere ich, soweit noch nicht geschehen, die Angabe des Auftraggebers, des Forderungsgrundes mit Vertragsgegenstand und Datum des Vertragsschlusses, der Zinsberechnung, von Art, Höhe und Entstehungsgrund der Inkassokosten sowie desjenigen, in dessen Person die Forderung entstanden ist.

Soweit in der Forderung Verzugszinsen oder Inkassokosten enthalten sind, bestreite ich diese, sofern nicht nachgewiesen wird, dass die Voraussetzungen des Verzugs nach § 286 BGB – insbesondere eine wirksame Mahnung oder ein gesetzlich gleichgestellter Sachverhalt – tatsächlich vorlagen.

Da Inkassodienstleistungen nach § 10 Abs. 1 Satz 1 Nr. 1 RDG registrierungspflichtig sind, bitte ich Sie zugleich um einen Nachweis Ihrer Registrierung im Rechtsdienstleistungsregister.

Bis zur vollständigen Klärung der vorgenannten Punkte bitte ich Sie, von weiteren Maßnahmen – insbesondere zusätzlichen Mahn- oder Inkassokosten sowie einer Meldung an Auskunfteien – abzusehen.

Bitte bestätigen Sie mir den Erhalt dieses Schreibens schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
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
      ref: '§ 13a RDG',
      url: 'https://www.gesetze-im-internet.de/rdg/__13a.html',
      note: 'Inkassodienstleister müssen einer Privatperson schon mit der ersten Geltendmachung in Textform mitteilen: Auftraggeber samt Anschrift, den Forderungsgrund (bei Verträgen Vertragsgegenstand und Datum des Vertragsschlusses), die Zinsberechnung, Art, Höhe und Entstehungsgrund der Inkassokosten sowie die zuständige Aufsichtsbehörde (Abs. 1). Auf Anfrage sind ergänzend der ursprüngliche Gläubiger und die wesentlichen Umstände des Vertragsschlusses mitzuteilen (Abs. 2). Vor einer Ratenzahlungsvereinbarung ist auf die dadurch entstehenden Kosten hinzuweisen (Abs. 3), vor einem Schuldanerkenntnis darauf, dass damit in der Regel Einwendungen und Einreden – etwa die Verjährung – verloren gehen (Abs. 4).',
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
      note: 'Die regelmäßige Verjährungsfrist beginnt mit dem Schluss des Jahres, in dem der Anspruch entstanden ist und der Gläubiger von den anspruchsbegründenden Umständen und der Person des Schuldners Kenntnis erlangt oder ohne grobe Fahrlässigkeit erlangen müsste (Abs. 1). Der Beginn gilt nur, „soweit nicht ein anderer Verjährungsbeginn bestimmt ist“ — einzelne Ansprüche haben eigene Anfangszeitpunkte.',
    },
    {
      ref: '§ 694 ZPO',
      url: 'https://www.gesetze-im-internet.de/zpo/__694.html',
      note: 'Gegen einen Mahnbescheid kann der Antragsgegner beim erlassenden Gericht schriftlich Widerspruch erheben, solange der Vollstreckungsbescheid nicht verfügt ist (Abs. 1). Ein verspäteter Widerspruch wird als Einspruch behandelt (Abs. 2).',
    },
  ],
  explainer: {
    whenHeading: 'Wann sollten Sie widersprechen?',
    legalHeading: 'Was ein Inkassodienstleister offenlegen muss',
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie ein Inkasso-Schreiben erhalten haben und die Forderung ganz oder teilweise nicht nachvollziehen können – etwa weil Ihnen der zugrunde liegende Vertrag nicht bekannt ist, der Betrag zu hoch erscheint oder Sie die Forderung bereits beglichen haben. Das Muster bestreitet die Forderung und fordert Nachweise an, ohne die Rechtslage abschließend zu bewerten.',
    legal:
      'Inkassounternehmen müssen als Rechtsdienstleister beim Bundesamt für Justiz registriert sein (§ 10 Abs. 1 Satz 1 Nr. 1 RDG); die Registrierung lässt sich kostenlos im Rechtsdienstleistungsregister prüfen. Verzugszinsen und Inkassokosten setzen zudem grundsätzlich einen wirksamen Verzug des Schuldners voraus (§ 286 BGB). Ob die konkrete Forderung berechtigt ist, hängt vom zugrunde liegenden Vertrag und Einzelfall ab – dieses Muster ersetzt keine individuelle Rechtsberatung, sondern hilft Ihnen, Transparenz und Nachweise einzufordern.',
  },
  faq: [
    {
      q: 'Muss ich eine Inkasso-Forderung sofort bezahlen?',
      a: 'Nicht zwingend. Bevor Sie zahlen, können Sie die Forderung schriftlich bestreiten und eine Forderungsaufstellung mit Nachweisen verlangen. Prüfen Sie Vertragsgrundlage, Höhe und ursprünglichen Gläubiger, bevor Sie etwas überweisen.',
    },
    {
      q: 'Woran erkenne ich, ob das Inkassobüro registriert ist?',
      a: 'Jeder Inkassodienstleister muss nach § 10 Abs. 1 Satz 1 Nr. 1 RDG beim Bundesamt für Justiz registriert sein. Sie können die Registrierung kostenlos online im Rechtsdienstleistungsregister nachschlagen oder mit diesem Schreiben einen Nachweis anfordern.',
    },
    {
      q: 'Was passiert, nachdem ich widersprochen habe?',
      a: 'Das Inkassobüro sollte Ihnen die angeforderten Nachweise vorlegen oder die Forderung zurückziehen bzw. an den Gläubiger zurückgeben. Bleibt es bei der Forderung, kann es Klage einreichen oder ein gerichtliches Mahnverfahren einleiten – hierauf müssten Sie dann fristgerecht reagieren.',
    },
    {
      q: 'Kann das Inkassobüro trotz meines Widerspruchs einen Schufa-Eintrag veranlassen?',
      a: 'Ein Widerspruch allein verhindert das nicht automatisch. In diesem Schreiben bitten Sie ausdrücklich darum, bis zur Klärung von weiteren Maßnahmen abzusehen – eine rechtliche Verpflichtung dazu besteht aber nur unter bestimmten Voraussetzungen.',
    },
    {
      q: 'Ist dieses Schreiben eine Rechtsberatung?',
      a: 'Nein. Es handelt sich um eine Vorlage zum Selbst-Ausfüllen, mit der Sie Transparenz und Nachweise einfordern. Bei hohen Beträgen, komplexen Sachverhalten oder wenn bereits ein Mahnbescheid vorliegt, sollten Sie sich individuell beraten lassen.',
    },
  ],
  lastReviewed: '2026-08-27',
};

export default config;
