import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01 by reading the text on
 * gesetze-im-internet.de. § 612 Abs. 1 BGB verbatim: "Eine Vergütung gilt als
 * stillschweigend vereinbart, wenn die Dienstleistung den Umständen nach nur
 * gegen eine Vergütung zu erwarten ist." Abs. 2: absent an agreed amount, the
 * übliche Vergütung applies.
 *
 * DELIBERATE: the copy warns about vertragliche/tarifliche Ausschlussfristen
 * and about the employee's burden of proof. Both routinely decide these cases
 * in practice, and a letter that ignores them would set users up to lose the
 * claim by simply waiting too long. No specific BAG Aktenzeichen is cited —
 * none was verified in this session.
 */
const config: GeneratorConfig = {
  slug: 'ueberstunden-auszahlung',
  category: 'arbeit',
  categoryLabel: 'Arbeit',
  h1: 'Überstunden auszahlen lassen: Muster zum Ausfüllen',
  metaTitle: 'Überstunden auszahlen lassen: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Bezahlung geleisteter Überstunden vom Arbeitgeber verlangen: Schreiben online ausfüllen und ausdrucken – kostenlos, ohne Anmeldung.',
  intro:
    'Mit diesem Generator fordern Sie Ihren Arbeitgeber auf, geleistete Überstunden auszuzahlen oder durch Freizeit auszugleichen – mit Fristsetzung und Bitte um Abgleich der Zeitkonten.',
  fields: [
    {
      id: 'zeitraum',
      label: 'Zeitraum der Überstunden',
      type: 'text',
      required: true,
      hint: 'Der Zeitraum, in dem die Überstunden angefallen sind.',
      example: 'Januar bis Juni 2026',
    },
    {
      id: 'anzahl',
      label: 'Anzahl der Überstunden',
      type: 'text',
      required: true,
      hint: 'Die Summe der geleisteten Überstunden laut Ihrer Aufzeichnung oder dem Arbeitszeitkonto.',
      example: '74,5',
    },
    {
      id: 'wunsch',
      label: 'Gewünschter Ausgleich',
      type: 'select',
      required: true,
      hint: 'Was der Arbeitsvertrag vorsieht, hat Vorrang – prüfen Sie ihn vor dem Versand.',
      options: [
        {
          value: 'die Auszahlung der geleisteten Überstunden',
          label: 'Auszahlung',
        },
        {
          value: 'den Ausgleich der geleisteten Überstunden durch Freizeit',
          label: 'Freizeitausgleich',
        },
        {
          value:
            'den Ausgleich der geleisteten Überstunden vorrangig durch Freizeit, hilfsweise um deren Auszahlung',
          label: 'Freizeitausgleich, hilfsweise Auszahlung',
        },
      ],
    },
    {
      id: 'grundlage',
      label: 'Worauf stützt sich die Anordnung der Überstunden?',
      type: 'select',
      required: true,
      hint: 'Für den Anspruch kommt es darauf an, dass die Überstunden angeordnet, gebilligt oder betrieblich notwendig waren.',
      options: [
        {
          value:
            'Die Überstunden wurden von meiner Vorgesetzten beziehungsweise meinem Vorgesetzten ausdrücklich angeordnet',
          label: 'Ausdrücklich angeordnet',
        },
        {
          value:
            'Die Überstunden waren zur Erledigung der mir übertragenen Aufgaben notwendig und wurden von meiner Vorgesetzten beziehungsweise meinem Vorgesetzten gebilligt',
          label: 'Gebilligt / betrieblich notwendig',
        },
        {
          value:
            'Die Überstunden sind auf dem von Ihnen geführten Arbeitszeitkonto ausgewiesen',
          label: 'Auf dem Arbeitszeitkonto ausgewiesen',
        },
      ],
    },
    {
      id: 'frist',
      label: 'Frist zur Erledigung',
      type: 'date',
      required: true,
      hint: 'Eine Frist von zwei bis drei Wochen ist üblich und angemessen.',
    },
  ],
  subjectTemplate:
    'Ausgleich geleisteter Überstunden aus dem Zeitraum {{zeitraum}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

im Zeitraum {{zeitraum}} habe ich über meine vertraglich vereinbarte Arbeitszeit hinaus insgesamt {{anzahl}} Überstunden geleistet.

{{grundlage}}.

Hiermit bitte ich um {{wunsch}}.

Nach § 612 Abs. 1 BGB gilt eine Vergütung als stillschweigend vereinbart, wenn die Dienstleistung den Umständen nach nur gegen eine Vergütung zu erwarten ist. Das ist bei der Leistung von Überstunden im Rahmen eines Arbeitsverhältnisses regelmäßig der Fall.

Bitte teilen Sie mir zugleich den bei Ihnen geführten Stand meines Arbeitszeitkontos mit, damit ich ihn mit meinen Aufzeichnungen abgleichen kann.

Für Ihre Rückmeldung setze ich mir eine Frist bis zum {{frist}}.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 611a BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__611a.html',
      note: 'Durch den Arbeitsvertrag wird der Arbeitnehmer zur Leistung weisungsgebundener, fremdbestimmter Arbeit in persönlicher Abhängigkeit verpflichtet; der Arbeitgeber schuldet dafür die vereinbarte Vergütung.',
    },
    {
      ref: '§ 612 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__612.html',
      note: 'Eine Vergütung gilt als stillschweigend vereinbart, wenn die Dienstleistung den Umständen nach nur gegen eine Vergütung zu erwarten ist (Abs. 1). Ist die Höhe nicht bestimmt, ist die übliche Vergütung als vereinbart anzusehen (Abs. 2).',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie über Ihre vertragliche Arbeitszeit hinaus gearbeitet haben und dafür Bezahlung oder Freizeitausgleich möchten – etwa bei einem angewachsenen Arbeitszeitkonto oder vor dem Ende des Arbeitsverhältnisses.',
    deadline:
      'Achten Sie auf Ausschlussfristen: Viele Arbeits- und Tarifverträge sehen vor, dass Ansprüche aus dem Arbeitsverhältnis innerhalb weniger Monate – häufig drei – schriftlich geltend gemacht werden müssen, sonst verfallen sie. Diese Fristen sind kürzer als die allgemeine Verjährung und der häufigste Grund, aus dem Überstundenansprüche scheitern. Prüfen Sie Ihren Vertrag und einen etwaigen Tarifvertrag, bevor Sie warten.',
    legal:
      'Ein Anspruch auf Vergütung von Überstunden setzt zweierlei voraus: dass die Überstunden tatsächlich geleistet wurden und dass sie vom Arbeitgeber angeordnet, gebilligt, geduldet oder zur Erledigung der übertragenen Arbeit notwendig waren. Ist keine ausdrückliche Vergütungsregelung vorhanden, gilt eine Vergütung nach § 612 Abs. 1 BGB als stillschweigend vereinbart, wenn die Leistung den Umständen nach nur gegen Vergütung zu erwarten war; die Höhe richtet sich dann nach der üblichen Vergütung (Abs. 2). Die Darlegungs- und Beweislast für Umfang und Veranlassung der Überstunden liegt grundsätzlich bei der Arbeitnehmerin oder dem Arbeitnehmer – führen Sie deshalb eigene Aufzeichnungen.',
  },
  faq: [
    {
      q: 'Muss mein Arbeitgeber Überstunden immer bezahlen?',
      a: 'Nicht automatisch. Erforderlich ist, dass die Überstunden angeordnet, gebilligt, geduldet oder zur Erledigung der übertragenen Aufgaben notwendig waren. Fehlt eine ausdrückliche Regelung, gilt eine Vergütung nach § 612 Abs. 1 BGB als stillschweigend vereinbart, wenn die Arbeit nur gegen Bezahlung zu erwarten war.',
    },
    {
      q: 'Ist die Klausel „Überstunden sind mit dem Gehalt abgegolten“ wirksam?',
      a: 'Solche Pauschalabgeltungsklauseln sind nur eingeschränkt wirksam. Eine Klausel, die pauschal alle Überstunden ohne erkennbare Begrenzung abgilt, ist regelmäßig zu unbestimmt und deshalb unwirksam, weil Beschäftigte bei Vertragsschluss nicht erkennen können, was auf sie zukommt. Bei sehr hohen Gehältern kann die Bewertung anders ausfallen. Lassen Sie die konkrete Klausel im Zweifel prüfen.',
    },
    {
      q: 'Wie weise ich meine Überstunden nach?',
      a: 'Die Darlegungs- und Beweislast liegt grundsätzlich bei Ihnen. Führen Sie eigene, zeitnahe Aufzeichnungen mit Datum, Beginn, Ende und Tätigkeit und sichern Sie Belege wie E-Mails, Schichtpläne oder Zeiterfassungsauszüge. Das Musterschreiben bittet deshalb ausdrücklich um den Stand des vom Arbeitgeber geführten Arbeitszeitkontos.',
    },
    {
      q: 'Kann ich statt Bezahlung Freizeitausgleich verlangen?',
      a: 'Was gilt, richtet sich in erster Linie nach Arbeits-, Tarif- oder Betriebsvereinbarung. Sehen diese Freizeitausgleich vor, hat er Vorrang. Ist nichts geregelt, können Sie den Ausgleich vorschlagen – das Musterschreiben bietet dafür die Variante „Freizeitausgleich, hilfsweise Auszahlung“.',
    },
    {
      q: 'Was passiert mit Überstunden bei Kündigung?',
      a: 'Nicht genommener Freizeitausgleich ist bei Beendigung des Arbeitsverhältnisses grundsätzlich auszuzahlen, weil ein Ausgleich in Freizeit dann nicht mehr möglich ist. Achten Sie gerade hier auf Ausschlussfristen und machen Sie den Anspruch rechtzeitig schriftlich geltend – idealerweise vor dem letzten Arbeitstag.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
