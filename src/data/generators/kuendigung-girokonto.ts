import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01 by reading the full text of § 675h BGB on
 * gesetze-im-internet.de. Verbatim basis for the claims made here:
 * Abs. 1 — the payment service user may terminate at any time without notice
 * unless a notice period was agreed; agreeing a notice period of more than
 * one month is invalid. Abs. 3 — regularly charged fees are owed only pro
 * rata up to termination, prepaid fees are refunded pro rata. Abs. 4 — the
 * provider may not charge a fee for the termination.
 */
const config: GeneratorConfig = {
  slug: 'kuendigung-girokonto',
  category: 'versicherung',
  categoryLabel: 'Versicherung & Bank',
  h1: 'Girokonto kündigen: Muster zum Ausfüllen',
  metaTitle: 'Girokonto kündigen: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Girokonto kündigen: Kündigungsschreiben an Ihre Bank mit Restguthaben-Überweisung online ausfüllen und ausdrucken – kostenlos, ohne Anmeldung.',
  intro:
    'Mit diesem Generator kündigen Sie Ihr Girokonto und weisen die Bank an, ein verbleibendes Guthaben auf ein von Ihnen genanntes Konto zu überweisen.',
  fields: [
    {
      id: 'iban',
      label: 'IBAN des zu kündigenden Kontos',
      type: 'text',
      required: true,
      hint: 'Die vollständige IBAN des Kontos, das Sie schließen möchten.',
      example: 'DE02 1203 0000 0000 2020 51',
    },
    {
      id: 'kuendigungstermin',
      label: 'Kündigung zum',
      type: 'text',
      required: true,
      hint: 'Sie können ohne Frist kündigen. „zum nächstmöglichen Zeitpunkt“ ist die sichere Formulierung, wenn Sie kein bestimmtes Datum brauchen.',
      example: 'zum nächstmöglichen Zeitpunkt',
    },
    {
      id: 'restguthabenIban',
      label: 'IBAN für die Überweisung des Restguthabens',
      type: 'text',
      required: true,
      hint: 'Konto, auf das ein verbleibendes Guthaben überwiesen werden soll.',
      example: 'DE44 5001 0517 0000 1234 56',
    },
    {
      id: 'restguthabenBank',
      label: 'Kontoinhaber und Bank des Empfängerkontos',
      type: 'text',
      required: true,
      hint: 'Name des Kontoinhabers und Name der Bank für die Überweisung.',
      example: 'Max Mustermann, Musterbank eG',
    },
  ],
  subjectTemplate: 'Kündigung meines Girokontos {{iban}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit kündige ich das bei Ihnen geführte Girokonto mit der IBAN {{iban}} {{kuendigungstermin}}.

Ein zum Zeitpunkt der Kontoauflösung verbleibendes Guthaben überweisen Sie bitte auf folgendes Konto:

Kontoinhaber und Bank: {{restguthabenBank}}
IBAN: {{restguthabenIban}}

Bitte lösen Sie alle mit dem Konto verbundenen Karten und Vollmachten auf und stellen Sie sicher, dass nach der Kontoauflösung keine weiteren Entgelte belastet werden. Regelmäßig erhobene Entgelte sind nach § 675h Abs. 3 BGB nur anteilig bis zur Beendigung des Vertrags zu entrichten; im Voraus gezahlte Entgelte, die auf die Zeit danach entfallen, bitte ich anteilig zu erstatten.

Bitte bestätigen Sie mir die Kündigung, das Datum der Kontoauflösung und den Abschlusssaldo schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 675h BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__675h.html',
      note: 'Der Zahlungsdienstnutzer kann den Zahlungsdiensterahmenvertrag – also den Girokontovertrag – jederzeit ohne Einhaltung einer Kündigungsfrist kündigen, sofern nichts anderes vereinbart wurde; die Vereinbarung einer Kündigungsfrist von mehr als einem Monat ist unwirksam (Abs. 1). Regelmäßig erhobene Entgelte sind nur anteilig bis zur Vertragsbeendigung zu zahlen, im Voraus gezahlte anteilig zu erstatten (Abs. 3). Für die Kündigung selbst darf die Bank kein Entgelt verlangen (Abs. 4).',
    },
  ],
  explainer: {
    whenHeading: 'Wann passt diese Kontokündigung?',
    deadlineHeading: 'Bis wann können Sie kündigen?',
    legalHeading: 'Was bei der Kontokündigung gilt',
    when:
      'Dieses Schreiben nutzen Sie, um ein Girokonto bei Ihrer Bank oder Sparkasse zu schließen – etwa beim Wechsel zu einem günstigeren Anbieter oder weil Sie das Konto nicht mehr benötigen. Es enthält zugleich die Anweisung, ein Restguthaben auf ein anderes Konto zu überweisen.',
    deadline:
      'Für Sie als Kundin oder Kunde gilt keine gesetzliche Kündigungsfrist: Sie können den Girokontovertrag jederzeit fristlos kündigen, soweit im Vertrag nichts anderes vereinbart ist. Eine vertraglich vereinbarte Frist von mehr als einem Monat wäre unwirksam (§ 675h Abs. 1 BGB). Die Bank selbst muss dagegen mindestens zwei Monate Frist einhalten (§ 675h Abs. 2 BGB).',
    legal:
      'Der Girokontovertrag ist ein Zahlungsdiensterahmenvertrag im Sinne des § 675h BGB. Danach können Sie jederzeit ohne Frist kündigen; eine längere als einmonatige Frist darf nicht vereinbart werden (Abs. 1). Entgelte sind nur zeitanteilig bis zur Beendigung geschuldet, Vorauszahlungen sind anteilig zu erstatten (Abs. 3), und für die Kündigung selbst darf kein Entgelt berechnet werden (Abs. 4).',
  },
  faq: [
    {
      q: 'Welche Frist muss ich bei der Kündigung eines Girokontos einhalten?',
      a: 'Grundsätzlich keine. Sie können jederzeit fristlos kündigen, sofern im Vertrag nichts anderes vereinbart ist; eine vereinbarte Frist von mehr als einem Monat ist unwirksam (§ 675h Abs. 1 BGB). Um Zahlungen nicht ins Leere laufen zu lassen, ist es dennoch sinnvoll, „zum nächstmöglichen Zeitpunkt“ zu kündigen und den Wechsel vorher vorzubereiten.',
    },
    {
      q: 'Darf die Bank für die Kündigung Gebühren verlangen?',
      a: 'Nein. Für die Kündigung des Zahlungsdiensterahmenvertrags darf kein Entgelt vereinbart werden (§ 675h Abs. 4 BGB). Bereits im Voraus gezahlte Kontoführungsentgelte für die Zeit nach der Auflösung sind Ihnen anteilig zu erstatten (§ 675h Abs. 3 BGB).',
    },
    {
      q: 'Was passiert mit Daueraufträgen und Lastschriften?',
      a: 'Die enden mit dem Konto. Erfassen Sie vor der Kündigung alle Daueraufträge und Lastschrifteinzüge und teilen Sie Ihre neue Bankverbindung rechtzeitig Arbeitgeber, Vermieter, Versicherungen und Vertragspartnern mit. Banken sind gesetzlich zu einer Unterstützung beim Kontowechsel verpflichtet – fragen Sie nach der Kontowechselhilfe.',
    },
    {
      q: 'Kann ich ein Konto kündigen, das im Minus ist?',
      a: 'Die Kündigung selbst ist möglich, ein Sollsaldo muss aber ausgeglichen werden – mit der Kontoauflösung wird er in der Regel sofort fällig. Klären Sie einen bestehenden Dispo vorher mit der Bank, damit die Auflösung nicht an einem offenen Saldo scheitert.',
    },
    {
      q: 'Sollte ich das alte Konto sofort schließen?',
      a: 'Praktisch ist es sinnvoll, das neue Konto zuerst einzurichten, alle Zahlungspartner umzustellen und das alte Konto noch einige Wochen mit Restguthaben laufen zu lassen. So fangen Sie vergessene Lastschriften auf, bevor sie mangels Deckung zurückgehen und Rücklastschriftkosten auslösen.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
