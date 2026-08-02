import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against EUR-Lex (Verordnung (EG) Nr. 261/2004) and
 * secondary confirmation (Luftfahrt-Bundesamt, dejure.org case-law
 * summaries) on 2026-07-12. The >3h-delay entitlement is EuGH case law
 * (Sturgeon/Nelson), not wording in the regulation itself – stated as such,
 * not cited as an article number.
 */
const config: GeneratorConfig = {
  slug: 'fluggastrechte-entschaedigung',
  category: 'vertraege',
  categoryLabel: 'Verträge & Verbraucher',
  h1: 'Fluggastrechte-Entschädigung: Muster zum Ausfüllen',
  metaTitle: 'Fluggastrechte-Entschädigung: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Ausgleichszahlung bei Flugverspätung oder Annullierung fordern: Schreiben online ausfüllen und drucken – kostenlos, nach EU-Verordnung 261/2004.',
  intro:
    'Mit diesem Generator fordern Sie eine Ausgleichszahlung von der Fluggesellschaft nach der EU-Fluggastrechteverordnung – als fertiges Schreiben zum Ausfüllen, direkt im Browser.',
  fields: [
    {
      id: 'flugnummer',
      label: 'Flugnummer',
      type: 'text',
      required: true,
      hint: 'Steht auf Ihrer Buchungsbestätigung oder Bordkarte.',
      example: 'EW 1234',
    },
    {
      id: 'flugdatum',
      label: 'Flugdatum',
      type: 'date',
      required: true,
      hint: 'Geplantes Datum des betroffenen Flugs.',
      example: '05.07.2026',
    },
    {
      id: 'streckeVon',
      label: 'Abflugort',
      type: 'text',
      required: true,
      example: 'Berlin (BER)',
    },
    {
      id: 'streckeNach',
      label: 'Zielort',
      type: 'text',
      required: true,
      example: 'Mallorca (PMI)',
    },
    {
      id: 'artDerStoerung',
      label: 'Art der Störung',
      type: 'select',
      required: true,
      hint: 'Wählen Sie, welche Störung bei Ihrem Flug vorlag.',
      options: [
        { value: 'einer Annullierung des Flugs', label: 'Annullierung' },
        {
          value: 'einer Verspätung von mehr als drei Stunden am Endziel',
          label: 'Verspätung über 3 Stunden',
        },
        {
          value: 'einer Nichtbeförderung gegen meinen Willen (Overbooking)',
          label: 'Nichtbeförderung (Overbooking)',
        },
      ],
    },
    {
      id: 'forderungsbetrag',
      label: 'Forderungsbetrag',
      type: 'select',
      required: true,
      hint: 'Richtet sich nach der Entfernung Ihrer Flugstrecke (Art. 7 VO (EG) Nr. 261/2004).',
      options: [
        {
          value: '250 Euro (Kurzstrecke bis 1.500 km)',
          label: '250 € – Strecke bis 1.500 km',
        },
        {
          value: '400 Euro (innereuropäische Strecke über 1.500 km bzw. Strecke zwischen 1.500 und 3.500 km)',
          label: '400 € – 1.500–3.500 km bzw. innereurop. Langstrecke',
        },
        {
          value: '600 Euro (Langstrecke über 3.500 km außerhalb der EU)',
          label: '600 € – über 3.500 km (außereuropäisch)',
        },
      ],
    },
  ],
  subjectTemplate:
    'Ausgleichsanspruch nach Verordnung (EG) Nr. 261/2004 – Flug {{flugnummer}} vom {{flugdatum}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

am {{flugdatum}} war ich Fluggast auf dem Flug {{flugnummer}} von {{streckeVon}} nach {{streckeNach}}. Dieser Flug war betroffen von {{artDerStoerung}}.

Gemäß Art. 5 und Art. 7 der Verordnung (EG) Nr. 261/2004 steht mir hierfür eine Ausgleichszahlung in Höhe von {{forderungsbetrag}} zu.

Ich fordere Sie auf, den genannten Betrag innerhalb von 14 Tagen ab Zugang dieses Schreibens auf ein von mir noch zu benennendes Konto zu überweisen.

Bitte bestätigen Sie mir den Erhalt dieses Schreibens sowie die Anerkennung oder Ablehnung meines Anspruchs schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: 'Art. 5 der Verordnung (EG) Nr. 261/2004',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004R0261',
      note: 'Bei Annullierung eines Flugs steht dem Fluggast grundsätzlich ein Ausgleichsanspruch nach Art. 7 zu, außer die Fluggesellschaft weist außergewöhnliche Umstände nach, die auch durch zumutbare Maßnahmen nicht zu vermeiden gewesen wären.',
    },
    {
      ref: 'Art. 4 der Verordnung (EG) Nr. 261/2004',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004R0261',
      note: 'Bei Nichtbeförderung gegen den Willen des Fluggasts (z. B. Overbooking) hat die Fluggesellschaft unverzüglich eine Ausgleichsleistung nach Art. 7 sowie Unterstützungsleistungen nach Art. 8 und 9 zu erbringen.',
    },
    {
      ref: 'Art. 7 der Verordnung (EG) Nr. 261/2004',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32004R0261',
      note: 'Staffelt die Ausgleichszahlung nach Entfernung: 250 € (bis 1.500 km), 400 € (1.500–3.500 km bzw. innereuropäische Strecken über 1.500 km) und 600 € (über 3.500 km, außereuropäisch); bei rechtzeitig angebotener Ersatzbeförderung kann sich der Betrag um 50 % verringern.',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn Ihr Flug annulliert wurde, mit mehr als drei Stunden Verspätung an Ihrem Endziel ankam oder Sie gegen Ihren Willen nicht befördert wurden (Overbooking) – jeweils bei einem Abflug innerhalb der EU oder bei einem Flug einer EU-Fluggesellschaft in die EU.',
    deadline:
      'Die Verordnung selbst nennt keine Frist für die Geltendmachung. Nach der Rechtsprechung des Bundesgerichtshofs (Urteil vom 4. Juni 2024, X ZR 62/23) gilt für Ausgleichsansprüche nach der Fluggastrechteverordnung die regelmäßige Verjährungsfrist von drei Jahren nach §§ 195, 199 BGB, beginnend mit dem Schluss des Jahres, in dem der Anspruch entstanden ist und Sie von den Umständen Kenntnis erlangt haben.',
    legal:
      'Der Ausgleichsanspruch ist in Art. 5 (Annullierung), Art. 4 (Nichtbeförderung) und Art. 7 (Höhe der Ausgleichszahlung) der Verordnung (EG) Nr. 261/2004 geregelt. Für Verspätungen enthält die Verordnung selbst keinen ausdrücklichen Ausgleichsanspruch; der Europäische Gerichtshof hat jedoch in den Urteilen Sturgeon (19.11.2009, C-402/07 u. a.) und Nelson (23.10.2012, C-581/10 u. a.) entschieden, dass Fluggäste bei einer Ankunftsverspätung von drei Stunden oder mehr am Endziel entsprechend Art. 7 zu entschädigen sind. Die Fluggesellschaft ist von der Zahlung befreit, wenn sie außergewöhnliche Umstände nachweist, die auch bei Ergreifung aller zumutbaren Maßnahmen nicht zu vermeiden gewesen wären.',
  },
  faq: [
    {
      q: 'Ab wann habe ich bei Verspätung Anspruch auf Entschädigung?',
      a: 'Ab einer Ankunftsverspätung von drei Stunden oder mehr am Endziel. Das ergibt sich nicht direkt aus dem Verordnungstext, sondern aus der Rechtsprechung des EuGH (Sturgeon-Urteil vom 19.11.2009, bestätigt durch das Nelson-Urteil vom 23.10.2012), die Verspätungen ab drei Stunden einer Annullierung gleichstellt.',
    },
    {
      q: 'Wie hoch ist die Entschädigung?',
      a: '250 € bei einer Strecke bis 1.500 km, 400 € bei 1.500–3.500 km bzw. innereuropäischen Strecken über 1.500 km und 600 € bei mehr als 3.500 km außerhalb Europas (Art. 7 Verordnung (EG) Nr. 261/2004). Bietet die Fluggesellschaft eine rechtzeitige Ersatzbeförderung an, kann sich der Betrag um bis zu 50 % verringern.',
    },
    {
      q: 'Bekomme ich auch bei außergewöhnlichen Umständen eine Entschädigung?',
      a: 'In der Regel nicht. Weist die Fluggesellschaft nach, dass die Annullierung oder Verspätung auf außergewöhnlichen Umständen beruht, die auch bei allen zumutbaren Maßnahmen nicht zu vermeiden gewesen wären (z. B. Unwetter, Streik der Flugsicherung), entfällt der Ausgleichsanspruch nach Art. 5 Abs. 3 der Verordnung.',
    },
    {
      q: 'Gilt die Verordnung auch für Flüge außerhalb der EU?',
      a: 'Sie gilt für alle Abflüge von einem Flughafen in der EU sowie für Flüge von außerhalb der EU in die EU, wenn diese von einer Fluggesellschaft mit Sitz in der EU durchgeführt werden.',
    },
    {
      q: 'Wie lange habe ich Zeit, meinen Anspruch geltend zu machen?',
      a: 'Die Verordnung nennt keine eigene Frist. Nach deutscher Rechtsprechung (BGH, Urteil vom 4.6.2024, X ZR 62/23) gilt die reguläre dreijährige Verjährungsfrist der §§ 195, 199 BGB, die mit dem Jahresende des Flugtermins zu laufen beginnt.',
    },
  ],
  lastReviewed: '2026-07-12',
};

export default config;
