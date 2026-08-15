import type { GuideConfig } from '../../lib/guide-config';

/**
 * Every § here is carried over from a generator config whose reference was
 * verified against the primary text (kuendigung-mietvertrag,
 * kuendigung-arbeitsvertrag, kuendigung-kfz-versicherung,
 * kuendigung-stromvertrag, kuendigung-handyvertrag,
 * kuendigung-fitnessstudio).
 */
const guide: GuideConfig = {
  slug: 'kuendigungsfristen-uebersicht',
  h1: 'Kündigungsfristen im Überblick: Wohnung, Job, Versicherung, Vertrag',
  metaTitle: 'Kündigungsfristen 2026: Übersicht nach Vertragsart',
  metaDescription:
    'Miete, Job, Versicherung, Strom, Handy, Abo: welche Kündigungsfrist gesetzlich gilt, was der Vertrag regeln darf und wann Sie sofort rauskommen.',
  intro:
    'Für jede Vertragsart gilt eine andere Frist, und fast überall darf der Vertrag die gesetzliche Regel in Grenzen verändern. Diese Übersicht sortiert die wichtigsten Fälle – und die Sonderkündigungsrechte, die viele übersehen.',
  icon: 'calendar',
  sections: [
    {
      heading: 'Zuerst: Vertrag lesen, dann Gesetz',
      paragraphs: [
        'Die gesetzliche Frist ist selten die ganze Antwort. In den meisten Bereichen darf der Vertrag eine eigene Frist vereinbaren, und das Gesetz setzt nur die Grenzen, innerhalb derer das zulässig ist. Wo diese Grenzen überschritten sind, ist die Klausel unwirksam – dann gilt wieder die gesetzliche Regel, nicht die im Vertrag.',
        'Die wichtigste allgemeine Grenze steht in § 309 Nr. 9 BGB: In vorformulierten Verträgen mit Verbrauchern darf die Erstlaufzeit höchstens zwei Jahre betragen, und wenn sich der Vertrag mangels Kündigung automatisch verlängert, dann nur auf unbestimmte Zeit mit einer Kündigungsfrist von höchstens einem Monat. Die früher übliche stillschweigende Verlängerung um ein volles Jahr ist damit bei Verbraucherverträgen erledigt.',
        'Zweitens: Fast alle Fristen sind Zugangsfristen. Sie sind gewahrt, wenn das Schreiben beim Vertragspartner angekommen ist – nicht, wenn Sie es abgeschickt haben. Rechnen Sie deshalb Postlaufzeit ein.',
      ],
    },
    {
      heading: 'Die Fristen nach Vertragsart',
      paragraphs: [
        'Die folgenden Angaben sind die gesetzlichen Grundregeln. Was in Ihrem Fall gilt, ergibt sich aus dem Zusammenspiel mit Ihrem Vertrag – und bei Arbeitsverhältnissen zusätzlich aus einem etwaigen Tarifvertrag.',
      ],
      list: [
        {
          term: 'Mietwohnung (Kündigung durch den Mieter)',
          text: 'Spätestens am dritten Werktag eines Kalendermonats zum Ablauf des übernächsten Monats – also rund drei Monate (§ 573c Abs. 1 BGB). Diese Frist bleibt für den Mieter unabhängig von der Mietdauer immer gleich; die Verlängerung nach fünf bzw. acht Jahren betrifft nur die Kündigung durch den Vermieter. Die Kündigung braucht die Schriftform: eigenhändig unterschriebenes Original (§ 568 Abs. 1 BGB).',
        },
        {
          term: 'Arbeitsvertrag (Kündigung durch den Arbeitnehmer)',
          text: 'Vier Wochen zum 15. oder zum Ende eines Kalendermonats (§ 622 Abs. 1 BGB), sofern Arbeits- oder Tarifvertrag nichts anderes bestimmen. Achtung: Vier Wochen sind nicht dasselbe wie ein Monat. Auch hier gilt Schriftform, und die elektronische Form ist ausdrücklich ausgeschlossen (§ 623 BGB) – eine Kündigung per E-Mail ist unwirksam.',
        },
        {
          term: 'Versicherungen (Sach- und Haftpflichtversicherungen)',
          text: 'Verlängert sich der Vertrag mangels Kündigung, geschieht das jeweils nur um ein weiteres Jahr (§ 11 Abs. 1 VVG). Die vereinbarte Kündigungsfrist muss für beide Seiten gleich sein und zwischen einem und drei Monaten liegen (§ 11 Abs. 3 VVG). Die in der Praxis übliche Ein-Monats-Frist zum Ablauf des Versicherungsjahres ergibt sich aus dem jeweiligen Vertrag innerhalb dieser Grenzen – maßgeblich ist Ihr Versicherungsschein, nicht das Kalenderjahr.',
        },
        {
          term: 'Telekommunikation (Handy, Internet, Festnetz)',
          text: 'Die Erstlaufzeit darf höchstens 24 Monate betragen, und der Anbieter muss zusätzlich einen Tarif mit höchstens 12 Monaten anbieten (§ 56 TKG). Nach Ablauf der Erstlaufzeit verlängert sich der Vertrag nicht mehr automatisch um ein Jahr – er läuft auf unbestimmte Zeit weiter und ist mit kurzer Frist kündbar.',
        },
        {
          term: 'Strom und Gas',
          text: 'Verträge außerhalb der Grundversorgung richten sich nach dem Vertrag; die Kündigung bedarf der Textform, und der Lieferant muss sie innerhalb einer Woche unter Angabe des Vertragsendes bestätigen (§ 41b Abs. 1 EnWG). Für die Grundversorgung gelten eigene, kürzere Fristen.',
        },
        {
          term: 'Fitnessstudio, Abos, sonstige Dauerverträge',
          text: 'Kein eigenes Spezialgesetz, dafür greift § 309 Nr. 9 BGB: höchstens zwei Jahre Erstlaufzeit, danach unbestimmte Zeit mit höchstens einem Monat Kündigungsfrist. Steht in Ihrem Vertrag noch die automatische Verlängerung um ein Jahr, ist diese Klausel bei einem Verbrauchervertrag regelmäßig unwirksam.',
        },
      ],
    },
    {
      heading: 'Sonderkündigungsrechte: der Weg aus der Frist heraus',
      paragraphs: [
        'Neben der ordentlichen Kündigung gibt es Situationen, in denen Sie den Vertrag beenden können, ohne die reguläre Frist einzuhalten. Diese Rechte sind selbst fristgebunden, und die Fristen sind kurz – wer sie verstreichen lässt, ist wieder an die normale Laufzeit gebunden.',
      ],
      list: [
        {
          term: 'Preiserhöhung beim Energievertrag',
          text: 'Übt der Lieferant ein vorbehaltenes Recht zur Änderung der Preise oder Vertragsbedingungen aus, können Sie ohne Einhaltung einer Frist zum Zeitpunkt des Wirksamwerdens der Änderung kündigen; ein Entgelt darf dafür nicht verlangt werden. Über Preisänderungen muss der Lieferant Haushaltskunden spätestens einen Monat vorher unterrichten (§ 41 EnWG).',
        },
        {
          term: 'Vertragsänderung beim Telekommunikationsanbieter',
          text: 'Ändert der Anbieter den Vertrag einseitig zu Ihren Lasten – etwa durch eine Preiserhöhung –, können Sie ohne Frist und kostenlos kündigen, und zwar innerhalb von drei Monaten ab Zugang der Änderungsmitteilung (§ 57 TKG).',
        },
        {
          term: 'Beitragserhöhung der Versicherung',
          text: 'Erhöht der Versicherer die Prämie, ohne den Versicherungsschutz entsprechend zu erweitern, können Sie innerhalb eines Monats nach Zugang der Mitteilung mit sofortiger Wirkung kündigen, frühestens zum Zeitpunkt des Wirksamwerdens der Erhöhung (§ 40 VVG). Die Erhöhung muss auf einer Anpassungsklausel beruhen.',
        },
        {
          term: 'Nach einem Versicherungsfall',
          text: 'Nach einem Schaden können beide Seiten kündigen, aber nur bis zum Ablauf eines Monats seit Abschluss der Verhandlungen über die Entschädigung. Sie selbst können mit sofortiger Wirkung kündigen, der Versicherer muss einen Monat Frist einhalten (§ 92 VVG).',
        },
        {
          term: 'Umzug',
          text: 'Beim Energievertrag haben Haushaltskunden bei einem Wohnsitzwechsel ein außerordentliches Kündigungsrecht mit sechs Wochen Frist; die künftige Anschrift muss dem Lieferanten mitgeteilt werden (§ 41b Abs. 5 EnWG). Beim Telekommunikationsvertrag greift ein Sonderkündigungsrecht mit einem Monat Frist, wenn der Anbieter die Leistung am neuen Wohnort nicht erbringen kann (§ 60 Abs. 2 TKG) – kann er es doch, müssen Sie den Vertrag mitnehmen.',
        },
      ],
    },
    {
      heading: 'Drei Fehler, die Kündigungen scheitern lassen',
      paragraphs: [
        '<strong>Erstens: die falsche Form.</strong> Bei Arbeits- und Mietverhältnissen muss das eigenhändig unterschriebene Original zugehen. Ein Scan, ein Foto der Unterschrift oder eine E-Mail genügen nicht – und zwar unabhängig davon, ob der Empfänger sich beschwert. Bei Verträgen, die online geschlossen wurden, ist es umgekehrt: Dort muss der Anbieter eine Kündigungsschaltfläche bereitstellen, und Textform genügt.',
        '<strong>Zweitens: nicht alle Vertragsparteien.</strong> Haben zwei Personen den Mietvertrag unterschrieben, müssen beide kündigen, und die Kündigung muss an alle Vermieter gerichtet sein. Fehlt eine Unterschrift, ist die Kündigung unwirksam – und das fällt oft erst auf, wenn die Frist längst abgelaufen ist.',
        '<strong>Drittens: keine Hilfskündigung.</strong> Wenn Sie sich beim Termin nicht sicher sind, schreiben Sie den gewünschten Termin hin und ergänzen Sie: „hilfsweise zum nächstmöglichen zulässigen Zeitpunkt“. Trifft Ihr Datum nicht zu, wirkt die Kündigung dann trotzdem – statt ins Leere zu gehen. Alle Kündigungsvorlagen auf dieser Seite enthalten diesen Satz.',
        'Und in jedem Fall: Lassen Sie sich die Kündigung bestätigen. Bei Energieverträgen ist der Lieferant dazu sogar gesetzlich verpflichtet (§ 41b Abs. 1 EnWG). Bleibt die Bestätigung aus, haken Sie nach, bevor die nächste Rechnung kommt.',
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
      ref: '§ 568 Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__568.html',
      note: 'Die Kündigung eines Mietverhältnisses bedarf der schriftlichen Form: Das Schreiben muss eigenhändig unterschrieben im Original zugehen (§ 126 BGB).',
    },
    {
      ref: '§ 622 Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__622.html',
      note: 'Gesetzliche Grundkündigungsfrist: Das Arbeitsverhältnis kann mit einer Frist von vier Wochen zum 15. oder zum Ende eines Kalendermonats gekündigt werden. Diese Frist gilt für Arbeitnehmerkündigungen, sofern Arbeits- oder Tarifvertrag nichts anderes bestimmen.',
    },
    {
      ref: '§ 623 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__623.html',
      note: 'Kündigungen von Arbeitsverhältnissen bedürfen zu ihrer Wirksamkeit der Schriftform; die elektronische Form ist ausdrücklich ausgeschlossen.',
    },
    {
      ref: '§ 309 Nr. 9 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__309.html',
      note: 'Begrenzt Laufzeitklauseln: Erstlaufzeit höchstens zwei Jahre; verlängert sich der Vertrag automatisch, dann nur auf unbestimmte Zeit mit einer Kündigungsfrist von höchstens einem Monat.',
    },
    {
      ref: '§ 11 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__11.html',
      note: 'Verlängert sich der Vertrag mangels Kündigung automatisch, geschieht dies jeweils nur um ein weiteres Jahr (Abs. 1); die vertraglich vereinbarte Kündigungsfrist muss für beide Seiten gleich sein und zwischen einem und drei Monaten liegen (Abs. 3).',
    },
    {
      ref: '§ 40 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__40.html',
      note: 'Erhöht der Versicherer aufgrund einer Anpassungsklausel die Prämie, ohne den Versicherungsschutz entsprechend zu erweitern, kann der Versicherungsnehmer innerhalb eines Monats nach Zugang der Mitteilung mit sofortiger Wirkung kündigen, frühestens zum Zeitpunkt des Wirksamwerdens der Erhöhung.',
    },
    {
      ref: '§ 92 VVG',
      url: 'https://www.gesetze-im-internet.de/vvg_2008/__92.html',
      note: 'Nach einem Versicherungsfall können beide Vertragsparteien kündigen. Die Kündigung ist nur bis zum Ablauf eines Monats seit Abschluss der Verhandlungen über die Entschädigung zulässig; der Versicherungsnehmer kann auch mit sofortiger Wirkung kündigen.',
    },
    {
      ref: '§ 56 TKG',
      url: 'https://www.gesetze-im-internet.de/tkg_2021/__56.html',
      note: 'Die Erstlaufzeit von Telekommunikationsverträgen mit Verbrauchern darf höchstens 24 Monate betragen; der Anbieter muss zusätzlich einen Tarif mit höchstens 12 Monaten Laufzeit anbieten. Nach Ablauf der Erstlaufzeit verlängert sich der Vertrag nicht mehr automatisch um ein Jahr.',
    },
    {
      ref: '§ 57 TKG',
      url: 'https://www.gesetze-im-internet.de/tkg_2021/__57.html',
      note: 'Ändert der Anbieter den Vertrag einseitig zulasten des Kunden (z. B. Preiserhöhung), kann der Kunde ohne Frist und kostenlos kündigen – innerhalb von drei Monaten ab Zugang der Änderungsmitteilung.',
    },
    {
      ref: '§ 60 TKG',
      url: 'https://www.gesetze-im-internet.de/tkg_2021/__60.html',
      note: 'Kann der Anbieter die vertraglich geschuldete Leistung am neuen Wohnort nach einem Umzug nicht erbringen, besteht ein Sonderkündigungsrecht mit einem Monat Frist zum Umzugstermin oder einem späteren Zeitpunkt (Abs. 2).',
    },
    {
      ref: '§ 41 EnWG',
      url: 'https://www.gesetze-im-internet.de/enwg_2005/__41.html',
      note: 'Übt der Energielieferant ein vorbehaltenes Recht zur Änderung der Preise oder sonstiger Vertragsbedingungen aus, kann der Letztverbraucher den Vertrag ohne Einhaltung einer Frist zum Zeitpunkt des Wirksamwerdens der Änderungen kündigen; über Preisänderungen ist bei Haushaltskunden spätestens einen Monat vor Wirksamwerden zu unterrichten (Abs. 5).',
    },
    {
      ref: '§ 41b EnWG',
      url: 'https://www.gesetze-im-internet.de/enwg_2005/__41b.html',
      note: 'Energielieferverträge mit Haushaltskunden außerhalb der Grundversorgung bedürfen der Textform; der Lieferant hat die Kündigung innerhalb einer Woche nach Zugang unter Angabe des Vertragsendes in Textform zu bestätigen (Abs. 1). Bei einem Wohnsitzwechsel besteht ein außerordentliches Kündigungsrecht mit sechs Wochen Frist (Abs. 5).',
    },
  ],
  faq: [
    {
      q: 'Gilt die Kündigungsfrist ab Absendung oder ab Zugang?',
      a: 'Ab Zugang beim Vertragspartner. Das Absendedatum ist unerheblich. Planen Sie deshalb zwei bis drei Werktage Postlaufzeit ein und wählen Sie einen Versandweg, mit dem sich der Zugang belegen lässt.',
    },
    {
      q: 'Mein Vertrag verlängert sich automatisch um ein Jahr – ist das zulässig?',
      a: 'Bei vorformulierten Verbraucherverträgen in der Regel nicht. Nach § 309 Nr. 9 BGB darf sich ein solcher Vertrag nur auf unbestimmte Zeit verlängern, mit einer Kündigungsfrist von höchstens einem Monat. Eine Klausel mit Jahresverlängerung ist dann unwirksam.',
    },
    {
      q: 'Was bedeutet „vier Wochen zum 15. oder zum Monatsende“?',
      a: 'Vier Wochen sind 28 Tage, nicht ein Monat. Die Kündigung muss also spätestens 28 Tage vor dem 15. oder vor dem letzten Tag des Monats zugehen. Bei einer Kündigung Anfang März zum 31. März wird es deshalb schon knapp.',
    },
    {
      q: 'Kann ich per E-Mail kündigen?',
      a: 'Das hängt vom Vertrag ab. Bei Arbeits- und Mietverhältnissen nicht: Dort gilt Schriftform, die elektronische Form ist bei Arbeitsverhältnissen sogar ausdrücklich ausgeschlossen (§ 623 BGB). Bei online geschlossenen Verträgen genügt Textform, und der Anbieter muss zusätzlich eine Kündigungsschaltfläche anbieten.',
    },
    {
      q: 'Ich habe den Kündigungstermin verpasst – gibt es noch einen Weg?',
      a: 'Prüfen Sie, ob ein Sonderkündigungsrecht greift: eine Preiserhöhung, eine Vertragsänderung, ein Umzug oder ein Versicherungsfall eröffnen jeweils ein eigenes, kurz befristetes Kündigungsrecht. Und prüfen Sie die Laufzeitklausel: Ist sie nach § 309 Nr. 9 BGB unwirksam, ist der Vertrag früher kündbar, als er behauptet.',
    },
  ],
  relatedGenerators: [
    'kuendigung-mietvertrag',
    'kuendigung-arbeitsvertrag',
    'kuendigung-kfz-versicherung',
    'kuendigung-stromvertrag',
    'kuendigung-handyvertrag',
    'kuendigung-fitnessstudio',
  ],
  lastReviewed: '2026-08-15',
};

export default guide;
