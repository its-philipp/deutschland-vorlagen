import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified via WebSearch against dejure.org / buzer.de / secondary
 * legal sources on 2026-07-13 (gesetze-im-internet.de 403-blocks this dev
 * environment's proxy per MEMORY.md); canonical gesetze-im-internet.de URLs
 * used for the links per the site's standard pattern.
 */
const config: GeneratorConfig = {
  slug: 'widerruf-online-kauf',
  category: 'vertraege',
  categoryLabel: 'Verträge & Verbraucher',
  h1: 'Widerruf Online-Kauf: Muster zum Ausfüllen',
  metaTitle: 'Widerruf Online-Kauf: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Online-Kauf widerrufen: Widerrufsschreiben mit 14-Tage-Frist online ausfüllen und als PDF speichern – kostenlos, ohne Anmeldung und Begründung.',
  intro:
    'Mit diesem Generator erstellen Sie ein Widerrufsschreiben für einen online geschlossenen Kaufvertrag – ohne Angabe von Gründen, direkt im Browser, ohne Anmeldung.',
  fields: [
    {
      id: 'bestellnummer',
      label: 'Bestell- oder Auftragsnummer',
      type: 'text',
      required: true,
      hint: 'Steht in der Bestellbestätigung oder auf der Rechnung.',
      example: 'BE-2026-88213',
    },
    {
      id: 'bestelldatum',
      label: 'Bestelldatum',
      type: 'date',
      required: true,
      hint: 'Datum, an dem Sie den Vertrag online abgeschlossen haben.',
      example: '01.07.2026',
    },
    {
      id: 'erhaltDatum',
      label: 'Ware erhalten am',
      type: 'date',
      required: true,
      hint: 'Tag, an dem Sie oder ein von Ihnen benannter Dritter die Ware erhalten haben – hier beginnt bei Warenkäufen die Widerrufsfrist. Bei reinen Dienstleistungen ohne Warenlieferung tragen Sie hier das Bestelldatum ein.',
      example: '05.07.2026',
    },
    {
      id: 'warenbeschreibung',
      label: 'Bestellte Ware oder Leistung',
      type: 'textarea',
      required: true,
      hint: 'Kurze Beschreibung, damit die Bestellung eindeutig zugeordnet werden kann.',
      example: 'Sofa „Oslo“, 3-Sitzer, Farbe Grau, 1 Stück',
    },
  ],
  subjectTemplate: 'Widerruf meiner Bestellung {{bestellnummer}} vom {{bestelldatum}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit widerrufe ich den mit Ihnen am {{bestelldatum}} geschlossenen Vertrag über folgende Bestellung (Bestell-/Auftragsnummer {{bestellnummer}}): {{warenbeschreibung}}.

Die Ware ist bei mir am {{erhaltDatum}} eingegangen.

Bitte erstatten Sie mir alle bereits geleisteten Zahlungen, einschließlich der Standardlieferkosten, unverzüglich, spätestens innerhalb von 14 Tagen ab Zugang dieses Widerrufs, auf demselben Zahlungsweg, den ich bei der ursprünglichen Zahlung verwendet habe.

Die Ware sende ich Ihnen innerhalb von 14 Tagen nach Absendung dieser Widerrufserklärung zurück.

Bitte bestätigen Sie mir den Zugang dieses Widerrufs schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 312g BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__312g.html',
      note: 'Verbrauchern steht bei außerhalb von Geschäftsräumen geschlossenen Verträgen und bei Fernabsatzverträgen (z. B. Online-Käufen) grundsätzlich ein Widerrufsrecht zu; Absatz 2 listet abschließende Ausnahmen, etwa für maßangefertigte Waren oder entsiegelte Hygieneartikel.',
    },
    {
      ref: '§ 355 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__355.html',
      note: 'Die Widerrufsfrist beträgt 14 Tage; eine formlose, aber eindeutige Erklärung genügt, eine Begründung ist nicht erforderlich. Zur Fristwahrung reicht die rechtzeitige Absendung.',
    },
    {
      ref: '§ 356 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__356.html',
      note: 'Beim Warenkauf beginnt die Widerrufsfrist erst mit Erhalt der Ware (Abs. 2 Nr. 1). Ohne ordnungsgemäße Widerrufsbelehrung erlischt das Widerrufsrecht spätestens 12 Monate und 14 Tage nach diesem Zeitpunkt (Abs. 3).',
    },
    {
      ref: '§ 357 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__357.html',
      note: 'Beide Seiten müssen empfangene Leistungen binnen 14 Tagen zurückgewähren (Abs. 1). Beim Verbrauchsgüterkauf darf der Unternehmer die Rückzahlung bis zum Rückerhalt der Ware oder bis zum Nachweis der Absendung zurückbehalten (Abs. 4). Die Rücksendekosten trägt der Verbraucher, wenn der Unternehmer ihn hierüber ordnungsgemäß informiert hat (Abs. 6).',
    },
  ],
  explainer: {
    whenHeading: 'Wann können Sie widerrufen?',
    deadlineHeading: 'Wie lange können Sie widerrufen?',
    legalHeading: 'Wann Ihnen ein Widerrufsrecht zusteht',
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie einen online geschlossenen Kaufvertrag (Fernabsatzvertrag) fristgerecht widerrufen möchten – zum Beispiel bei einem Onlineshop-Kauf, der Ihnen nicht zusagt. Ein Widerruf ist ohne Angabe von Gründen möglich.',
    deadline:
      'Bei Warenkäufen beginnt die 14-tägige Widerrufsfrist mit dem Erhalt der Ware, nicht mit der Bestellung (§ 356 Abs. 2 Nr. 1 BGB). Bei reinen Dienstleistungen ohne Warenlieferung beginnt sie bereits mit Vertragsschluss. Wurden Sie nicht ordnungsgemäß über Ihr Widerrufsrecht belehrt, verlängert sich die Frist auf maximal 12 Monate und 14 Tage (§ 356 Abs. 3 BGB).',
    legal:
      'Bei online geschlossenen Kaufverträgen steht Verbrauchern ein 14-tägiges Widerrufsrecht ohne Angabe von Gründen zu (§ 312g, § 355 BGB). Nach einem wirksamen Widerruf müssen beide Seiten die empfangenen Leistungen binnen 14 Tagen zurückgewähren; der Unternehmer darf die Erstattung bis zum Rückerhalt der Ware oder bis zum Nachweis der Rücksendung zurückbehalten (§ 357 BGB). Bestimmte Waren, etwa maßangefertigte Artikel oder entsiegelte Hygieneprodukte, sind vom Widerrufsrecht ausgenommen (§ 312g Abs. 2 BGB).',
  },
  faq: [
    {
      q: 'Muss ich meinen Widerruf begründen?',
      a: 'Nein. Für den Widerruf eines Fernabsatzvertrags ist keine Begründung erforderlich (§ 355 Abs. 1 BGB). Eine eindeutige Erklärung, dass Sie vom Vertrag zurücktreten möchten, genügt.',
    },
    {
      q: 'Bei welchen Käufen ist der Widerruf ausgeschlossen?',
      a: 'Kein Widerrufsrecht besteht unter anderem bei maßangefertigten oder eindeutig auf Sie zugeschnittenen Waren, bei entsiegelten Waren aus Gründen des Gesundheitsschutzes oder der Hygiene (z. B. Kosmetik, Unterwäsche) sowie bei schnell verderblicher Ware (§ 312g Abs. 2 BGB).',
    },
    {
      q: 'In welcher Form muss ich widerrufen?',
      a: 'Es genügt eine eindeutige Erklärung, aus der Ihr Entschluss zum Widerruf hervorgeht – Textform (z. B. Brief oder E-Mail) ist üblich und empfehlenswert, um den Zugang später nachweisen zu können. Für die Fristwahrung reicht die rechtzeitige Absendung (§ 355 BGB).',
    },
    {
      q: 'Muss ich für die Nutzung der Ware etwas bezahlen?',
      a: 'Ein Wertersatz kommt nur in Betracht, wenn der Wertverlust auf einen Umgang mit der Ware zurückzuführen ist, der über das Prüfen von Beschaffenheit, Eigenschaften und Funktionsweise hinausgeht – also über das hinaus, was auch in einem Ladengeschäft möglich gewesen wäre (§ 357a BGB).',
    },
    {
      q: 'Wer trägt die Kosten der Rücksendung?',
      a: 'Die unmittelbaren Rücksendekosten tragen Sie als Verbraucher, wenn der Unternehmer Sie vor Vertragsschluss ordnungsgemäß darüber informiert hat. Hat der Unternehmer sich bereit erklärt, diese Kosten zu übernehmen, oder fehlt die Information, gilt das nicht (§ 357 Abs. 6 BGB).',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
