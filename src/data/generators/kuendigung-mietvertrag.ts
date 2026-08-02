import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de / dejure.org on 2026-07-12.
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-mietvertrag',
  category: 'mietrecht',
  categoryLabel: 'Mietrecht',
  h1: 'Kündigung Mietvertrag: Muster für Mieter zum Ausfüllen',
  metaTitle: 'Kündigung Mietvertrag: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Wohnung als Mieter kündigen: Kündigungsschreiben online ausfüllen und als PDF speichern – kostenlos, mit den Fristen nach § 573c BGB.',
  intro:
    'Mit diesem Generator kündigen Sie als Mieter Ihren Mietvertrag ordentlich und fristgerecht gegenüber dem Vermieter – als fertiges Schreiben zum Ausfüllen, direkt im Browser.',
  fields: [
    {
      id: 'vertragsende',
      label: 'Gewünschtes Vertragsende (Kündigungstermin)',
      type: 'date',
      required: true,
      hint: 'Datum, zu dem das Mietverhältnis enden soll. Zwischen Zugang der Kündigung beim Vermieter und diesem Termin müssen die gesetzlichen drei Monate liegen (§ 573c Abs. 1 BGB) – siehe Erklärung unten.',
      example: '31.10.2026',
    },
    {
      id: 'uebergabeTermin',
      label: 'Terminvorschlag für die Wohnungsübergabe (freiwillig)',
      type: 'date',
      required: false,
      hint: 'Optional: Schlagen Sie direkt einen Termin für die Wohnungsübergabe vor. Lassen Sie das Feld leer, wenn Sie den Termin später separat abstimmen möchten.',
      example: '31.10.2026',
    },
  ],
  subjectTemplate: 'Ordentliche Kündigung des Mietvertrags zum {{vertragsende}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich den zwischen uns bestehenden Mietvertrag über die Wohnung {{absenderStrasse}}, {{absenderOrt}} ordentlich und fristgerecht gemäß § 573c Abs. 1 BGB zum {{vertragsende}}.

Bitte bestätigen Sie mir den Erhalt dieser Kündigung sowie den sich daraus ergebenden Beendigungstermin schriftlich.

Für die Wohnungsübergabe schlage ich den {{uebergabeTermin}} vor. Bitte teilen Sie mir mit, ob dieser Termin für Sie passt, oder unterbreiten Sie einen Alternativvorschlag.

Ich bitte außerdem um eine rechtzeitige Abstimmung der Rückzahlung meiner Kaution nach dem Auszug.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 573c Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__573c.html',
      note: 'Die ordentliche Kündigung ist spätestens am dritten Werktag eines Kalendermonats zum Ablauf des übernächsten Monats zulässig. Für den Mieter bleibt diese Grundfrist von rund drei Monaten unabhängig von der Mietdauer unverändert; die Verlängerung nach fünf bzw. acht Jahren gilt nur für den Vermieter.',
    },
    {
      ref: '§ 568 Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__568.html',
      note: 'Die Kündigung eines Mietverhältnisses bedarf der schriftlichen Form: Das Schreiben muss eigenhändig unterschrieben im Original zugehen (§ 126 BGB) – E-Mail, Fax oder eine eingescannte Unterschrift genügen nicht.',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie als Mieter Ihren unbefristeten Mietvertrag ordentlich, also fristgerecht und ohne besonderen Grund, kündigen möchten – etwa wegen eines Umzugs, eines neuen Jobs oder weil Sie sich schlicht verändern möchten.',
    deadline:
      'Für Mieter gilt gesetzlich eine einheitliche Kündigungsfrist von drei Monaten (§ 573c Abs. 1 BGB), unabhängig davon, wie lange das Mietverhältnis bereits besteht. Damit diese Frist wie berechnet läuft, muss die Kündigung dem Vermieter spätestens am dritten Werktag eines Kalendermonats zugehen; das Mietverhältnis endet dann zum Ablauf des übernächsten Monats. Geht das Schreiben später zu, verschiebt sich der Endtermin um einen weiteren Monat.',
    legal:
      'Anders als der Vermieter (§ 573 BGB) benötigt der Mieter für die ordentliche Kündigung keinen besonderen Kündigungsgrund – die Einhaltung der Frist nach § 573c Abs. 1 BGB genügt. Wichtig ist die Form: Nach § 568 Abs. 1 BGB muss die Kündigung schriftlich erfolgen, also eigenhändig unterschrieben im Original zugehen. Sind mehrere Personen im Mietvertrag als Mieter aufgeführt, müssen alle gemeinsam kündigen und persönlich unterschreiben; richten Sie das Schreiben zudem an alle im Mietvertrag genannten Vermieter.',
  },
  faq: [
    {
      q: 'Muss ich die Kündigung begründen?',
      a: 'Nein. Anders als der Vermieter, der ein berechtigtes Interesse nach § 573 BGB braucht, muss ein Mieter seine ordentliche Kündigung nicht begründen. Es genügt ein form- und fristgerechtes Kündigungsschreiben.',
    },
    {
      q: 'Muss ich unterschreiben, und was gilt bei mehreren Mietern?',
      a: 'Ja. Nach § 568 Abs. 1 BGB bedarf die Kündigung der Schriftform: Das Schreiben muss eigenhändig unterschrieben im Original zugehen; eine E-Mail, ein Fax oder eine eingescannte Unterschrift genügen nicht. Stehen mehrere Personen als Mieter im Vertrag, müssen alle gemeinsam kündigen und persönlich unterschreiben, und das Schreiben ist an alle im Vertrag genannten Vermieter zu richten.',
    },
    {
      q: 'Verkürzt sich die Kündigungsfrist, wenn ich einen Nachmieter stelle?',
      a: 'Nein, grundsätzlich nicht. Das Gesetz sieht keine automatische Verkürzung der Frist durch die Benennung eines Nachmieters vor; der Vermieter ist nicht verpflichtet, einen Nachmieter zu akzeptieren und Sie deshalb vorzeitig aus dem Vertrag zu entlassen. Möchten Sie das dennoch versuchen, ist eine gesonderte Bitte um einvernehmliche Vertragsauflösung der richtige Weg – unabhängig von dieser ordentlichen Kündigung.',
    },
    {
      q: 'Was passiert mit Wohnungsübergabe und Kaution nach der Kündigung?',
      a: 'Nach Beendigung des Mietverhältnisses vereinbaren Sie mit dem Vermieter einen Termin zur Wohnungsübergabe, bei dem der Zustand der Wohnung protokolliert wird. Die Kaution muss der Vermieter nach dem Auszug innerhalb einer angemessenen Frist abrechnen und zurückzahlen, kann aber berechtigte offene Forderungen, etwa aus der Nebenkostenabrechnung, zunächst einbehalten.',
    },
    {
      q: 'Wie stelle ich sicher, dass die Kündigung rechtzeitig zugeht?',
      a: 'Da es für die Fristberechnung auf den Zugang beim Vermieter ankommt, sollten Sie das Schreiben per Einwurf-Einschreiben verschicken oder persönlich gegen Unterschrift beziehungsweise mit Zeugen übergeben. So können Sie im Streitfall den Zugangszeitpunkt nachweisen.',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
