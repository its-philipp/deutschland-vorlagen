import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de on 2026-07-12. The
 * repayment "deadline" is not fixed by statute — described honestly as BGH
 * case-law orientation in explainer.deadline, not cited as a LegalRef.
 */
const config: GeneratorConfig = {
  slug: 'kaution-zurueckfordern',
  category: 'mietrecht',
  categoryLabel: 'Mietrecht',
  h1: 'Kaution zurückfordern: Muster zum Ausfüllen',
  metaTitle: 'Kaution zurückfordern: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Mietkaution nach dem Auszug zurückfordern: Schreiben online ausfüllen und als PDF speichern – kostenlos, mit Hinweisen zur Prüffrist (§ 551 BGB).',
  intro:
    'Mit diesem Generator fordern Sie Ihre Mietkaution nach dem Auszug schriftlich vom Vermieter zurück – als fertiges Schreiben zum Ausfüllen, direkt im Browser.',
  fields: [
    {
      id: 'auszugsdatum',
      label: 'Datum der Wohnungsübergabe',
      type: 'date',
      required: true,
      hint: 'Datum, an dem Sie die Wohnung an den Vermieter zurückgegeben haben.',
      example: '31.05.2026',
    },
    {
      id: 'kautionsbetrag',
      label: 'Höhe der Kaution',
      type: 'text',
      required: true,
      hint: 'Betrag, den Sie zu Beginn des Mietverhältnisses als Kaution hinterlegt haben.',
      example: '1.500,00 €',
    },
    {
      id: 'rueckzahlungsfrist',
      label: 'Frist zur Rückzahlung',
      type: 'text',
      required: true,
      hint: 'Angemessene Frist, innerhalb derer Sie die Rückzahlung erwarten.',
      example: '4 Wochen',
    },
    {
      id: 'bankverbindung',
      label: 'Bankverbindung für die Rücküberweisung',
      type: 'text',
      required: true,
      hint: 'IBAN (und ggf. Kontoinhaber, falls abweichend), an die die Kaution überwiesen werden soll.',
      example: 'DE12 3456 7890 1234 5678 90',
    },
  ],
  subjectTemplate:
    'Rückforderung der Mietkaution nach Auszug am {{auszugsdatum}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

am {{auszugsdatum}} habe ich die von mir gemietete Wohnung ordnungsgemäß an Sie zurückgegeben. Für das Mietverhältnis hatte ich eine Kaution in Höhe von {{kautionsbetrag}} hinterlegt (§ 551 BGB).

Da seither ein angemessener Zeitraum zur Prüfung etwaiger Ansprüche verstrichen ist und mir keine berechtigten Gegenforderungen bekannt sind, fordere ich Sie auf, die Kaution nebst angefallener Zinsen innerhalb von {{rueckzahlungsfrist}} auf folgendes Konto zu überweisen:

{{bankverbindung}}

Sollten Sie Teile der Kaution aufgrund offener Forderungen einbehalten wollen, bitte ich um eine nachvollziehbare Abrechnung mit Nennung der jeweiligen Gegenforderungen innerhalb der genannten Frist.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 551 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__551.html',
      note: 'Begrenzt die Kaution auf höchstens drei Nettokaltmieten (Abs. 1), erlaubt dem Mieter die Zahlung in drei gleichen Monatsraten (Abs. 2) und verpflichtet den Vermieter, die Kaution getrennt von seinem Vermögen verzinslich anzulegen; die Zinsen stehen dem Mieter zu (Abs. 3).',
    },
  ],
  explainer: {
    whenHeading: 'Wann fordern Sie die Kaution zurück?',
    deadlineHeading: 'Wann muss der Vermieter die Kaution auszahlen?',
    legalHeading: 'Was mit der Kaution nach dem Auszug passiert',
    when:
      'Dieses Schreiben nutzen Sie nach dem Auszug aus einer Mietwohnung, wenn der Vermieter die Kaution nicht von sich aus zurückzahlt. Es fordert den Vermieter förmlich zur Rückzahlung auf und setzt hierfür eine Frist.',
    // NOTE for reviewer: no statute fixes a repayment deadline; the "3–6
    // Monate" figure is widely-reported BGH case-law orientation (confirmed
    // via multiple legal-portal sources), but no specific Aktenzeichen was
    // verified for this figure — TODO verify exact leading BGH decision(s)
    // if a citation is ever added to the page.
    deadline:
      'Für die Rückzahlung der Kaution nennt das Gesetz keine feste Frist. Nach ständiger Rechtsprechung des Bundesgerichtshofs steht dem Vermieter aber eine angemessene Prüffrist zu, um zu klären, ob und in welcher Höhe er die Kaution zur Befriedigung von Ansprüchen (z. B. Schönheitsreparaturen, offene Nebenkosten) heranzieht. In der Praxis wird hierfür häufig ein Zeitraum von etwa drei bis sechs Monaten als Orientierung genannt – eine pauschale gesetzliche Frist besteht jedoch nicht, die angemessene Dauer hängt vom Einzelfall ab. Stehen noch Betriebskosten zur Abrechnung aus, darf der Vermieter einen angemessenen Teilbetrag der Kaution bis zur Abrechnung zurückbehalten.',
    legal:
      'Die Kaution dient dem Vermieter als Sicherheit für Ansprüche aus dem Mietverhältnis und darf gesetzlich höchstens drei Nettokaltmieten betragen (§ 551 Abs. 1 BGB). Nach Beendigung des Mietverhältnisses und Ablauf einer angemessenen Prüffrist ist die Kaution abzurechnen und ein verbleibendes Guthaben samt Zinsen an den Mieter auszuzahlen.',
  },
  faq: [
    {
      q: 'Wann genau muss der Vermieter die Kaution zurückzahlen?',
      a: 'Eine feste gesetzliche Frist gibt es nicht. Der Vermieter darf sich eine angemessene Zeit zur Prüfung nehmen, ob er Ansprüche aus dem Mietverhältnis gegen die Kaution verrechnet. In der Praxis orientieren sich viele an drei bis sechs Monaten, verbindlich vorgeschrieben ist dieser Zeitraum aber nicht.',
    },
    {
      q: 'Darf der Vermieter die gesamte Kaution wegen offener Nebenkosten einbehalten?',
      a: 'Nur anteilig: Stehen noch nicht abgerechnete Betriebskosten aus, darf der Vermieter regelmäßig nur einen angemessenen Teilbetrag zurückhalten, der die voraussichtliche Nachforderung abdeckt – nicht die gesamte Kaution.',
    },
    {
      q: 'Muss die Kaution verzinst werden?',
      a: 'Ja. Nach § 551 Abs. 3 BGB muss der Vermieter eine Barkaution getrennt von seinem Vermögen verzinslich anlegen. Die Erträge stehen dem Mieter zu und erhöhen die Sicherheit bzw. sind bei der Rückzahlung mit auszuzahlen.',
    },
    {
      q: 'Wie hoch darf die Kaution höchstens sein?',
      a: 'Höchstens das Dreifache der Nettokaltmiete (ohne Betriebskosten), § 551 Abs. 1 BGB. Vereinbarungen, die zulasten des Mieters davon abweichen, sind unwirksam (§ 551 Abs. 4 BGB).',
    },
    {
      q: 'Was kann ich tun, wenn der Vermieter trotz Fristsetzung nicht zahlt?',
      a: 'Reagiert der Vermieter nach Ablauf der gesetzten Frist nicht, kommen weitere Schritte wie ein gerichtliches Mahnverfahren oder eine Klage in Betracht. Für die Einschätzung Ihres konkreten Falls und das weitere Vorgehen sollten Sie sich an eine Mieterberatung oder einen Rechtsanwalt wenden.',
    },
  ],
  lastReviewed: '2026-07-12',
};

export default config;
