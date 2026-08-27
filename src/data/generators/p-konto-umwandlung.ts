import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01 by reading the full text of § 850k ZPO on
 * gesetze-im-internet.de. Verbatim basis:
 * Abs. 1 — a natural person may demand AT ANY TIME that a payment account
 *   held there be run as a Pfändungsschutzkonto; this also applies if the
 *   account currently shows a negative balance; a P-Konto may however only be
 *   run on a credit basis.
 * Abs. 2 — if the balance has ALREADY been attached, the debtor may demand
 *   conversion with effect from the start of the fourth business day
 *   following the demand.
 * Abs. 3 — only one P-Konto per person; when making the demand the customer
 *   must assure the bank that they hold no other P-Konto. That assurance is
 *   therefore part of the letter body, not optional boilerplate.
 */
const config: GeneratorConfig = {
  slug: 'p-konto-umwandlung',
  category: 'versicherung',
  categoryLabel: 'Versicherung & Bank',
  h1: 'P-Konto beantragen: Muster zur Umwandlung zum Ausfüllen',
  metaTitle: 'P-Konto beantragen: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Girokonto in ein Pfändungsschutzkonto umwandeln: Antrag nach § 850k ZPO online ausfüllen und ausdrucken – kostenlos, ohne Anmeldung.',
  intro:
    'Mit diesem Generator verlangen Sie von Ihrer Bank, Ihr Girokonto als Pfändungsschutzkonto (P-Konto) zu führen – einschließlich der gesetzlich vorgeschriebenen Versicherung, dass Sie kein weiteres P-Konto unterhalten.',
  fields: [
    {
      id: 'iban',
      label: 'IBAN des Kontos',
      type: 'text',
      required: true,
      hint: 'Das bei dieser Bank geführte Zahlungskonto, das als P-Konto geführt werden soll.',
      example: 'DE02 1203 0000 0000 2020 51',
    },
    {
      id: 'situation',
      label: 'Aktuelle Situation',
      type: 'select',
      required: true,
      hint: 'Ist auf dem Konto bereits eine Pfändung eingegangen? Davon hängt ab, ab wann die Umwandlung wirkt.',
      options: [
        {
          value:
            'Eine Pfändung ist bislang nicht eingegangen; ich möchte das Konto vorsorglich als Pfändungsschutzkonto führen lassen',
          label: 'Noch keine Pfändung – vorsorgliche Umwandlung',
        },
        {
          value:
            'Guthaben auf dem Konto ist bereits gepfändet worden; ich fordere die Führung als Pfändungsschutzkonto daher zum Beginn des vierten auf dieses Verlangen folgenden Geschäftstages',
          label: 'Guthaben ist bereits gepfändet',
        },
      ],
    },
  ],
  subjectTemplate:
    'Verlangen nach Führung als Pfändungsschutzkonto (P-Konto) – Konto {{iban}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit verlange ich nach § 850k Abs. 1 ZPO, dass das bei Ihnen geführte Zahlungskonto mit der IBAN {{iban}} als Pfändungsschutzkonto geführt wird.

{{situation}}.

Gemäß § 850k Abs. 3 Satz 2 ZPO versichere ich, dass ich kein weiteres Pfändungsschutzkonto unterhalte.

Mir ist bekannt, dass ein Pfändungsschutzkonto ausschließlich auf Guthabenbasis geführt wird.

Bitte bestätigen Sie mir die Umwandlung und den Zeitpunkt, ab dem das Konto als Pfändungsschutzkonto geführt wird, schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 850k ZPO',
      url: 'https://www.gesetze-im-internet.de/zpo/__850k.html',
      note: 'Eine natürliche Person kann jederzeit verlangen, dass ein von ihr geführtes Zahlungskonto als Pfändungsschutzkonto geführt wird; das gilt auch, wenn das Konto im Minus ist – ein P-Konto wird allerdings nur auf Guthabenbasis geführt (Abs. 1). Ist Guthaben bereits gepfändet, kann die Führung als P-Konto zum Beginn des vierten auf das Verlangen folgenden Geschäftstages gefordert werden (Abs. 2). Jede Person darf nur ein P-Konto unterhalten und muss dies der Bank gegenüber versichern (Abs. 3).',
    },
  ],
  explainer: {
    whenHeading: 'Wann brauchen Sie ein P-Konto?',
    deadlineHeading: 'Wie schnell muss die Bank umstellen?',
    legalHeading: 'Was das Pfändungsschutzkonto schützt',
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie Ihr bestehendes Girokonto in ein Pfändungsschutzkonto umwandeln lassen wollen – entweder vorsorglich oder weil bereits eine Kontopfändung eingegangen ist. Auf einem P-Konto bleibt Ihnen ein monatlicher Grundfreibetrag automatisch erhalten, ohne dass Sie ihn bei jeder Pfändung neu geltend machen müssen.',
    deadline:
      'Ein Verlangen nach Abs. 1 ist jederzeit möglich. Ist Ihr Guthaben bereits gepfändet, muss die Bank das Konto zum Beginn des vierten auf Ihr Verlangen folgenden Geschäftstages als P-Konto führen (§ 850k Abs. 2 ZPO) – stellen Sie den Antrag also so früh wie möglich, damit der Schutz rechtzeitig greift.',
    legal:
      'Grundlage ist § 850k ZPO. Jede natürliche Person kann jederzeit die Führung ihres Zahlungskontos als Pfändungsschutzkonto verlangen; die Bank muss dem nachkommen und darf dies nicht von einer bereits vorliegenden Pfändung abhängig machen (Abs. 1). Auch ein Konto im Soll kann umgewandelt werden – es wird dann aber nur noch auf Guthabenbasis geführt. Weil pro Person nur ein P-Konto zulässig ist, verlangt das Gesetz eine entsprechende Versicherung gegenüber der Bank (Abs. 3); diese ist im Musterschreiben enthalten.',
  },
  faq: [
    {
      q: 'Muss meine Bank das Konto in ein P-Konto umwandeln?',
      a: 'Ja. Nach § 850k Abs. 1 ZPO können Sie jederzeit verlangen, dass ein bei der Bank geführtes Zahlungskonto als Pfändungsschutzkonto geführt wird. Die Bank hat dabei kein Ermessen; ein bestehendes Girokonto wird umgewandelt, ein neues Konto muss dafür nicht eröffnet werden.',
    },
    {
      q: 'Geht das auch, wenn mein Konto im Minus ist?',
      a: 'Ja, das Gesetz stellt ausdrücklich klar, dass ein Umwandlungsverlangen auch bei negativem Saldo möglich ist (§ 850k Abs. 1 Satz 2 ZPO). Nach der Umwandlung wird das Konto allerdings ausschließlich auf Guthabenbasis geführt – ein eingeräumter Dispositionskredit steht dann nicht mehr zur Verfügung.',
    },
    {
      q: 'Wie schnell wirkt die Umwandlung, wenn schon gepfändet wurde?',
      a: 'Ist Guthaben auf dem Konto bereits gepfändet worden, können Sie die Führung als P-Konto zum Beginn des vierten auf Ihr Verlangen folgenden Geschäftstages fordern (§ 850k Abs. 2 ZPO). Reichen Sie den Antrag deshalb unverzüglich ein.',
    },
    {
      q: 'Darf ich mehrere P-Konten haben?',
      a: 'Nein, jede Person darf nur ein Pfändungsschutzkonto unterhalten (§ 850k Abs. 3 ZPO). Beim Umwandlungsverlangen müssen Sie der Bank gegenüber versichern, dass Sie kein weiteres P-Konto führen – diese Erklärung ist Bestandteil des Musterschreibens.',
    },
    {
      q: 'Wie erhöhe ich den Freibetrag über den Grundfreibetrag hinaus?',
      a: 'Für Unterhaltspflichten oder bestimmte Sozialleistungen kann sich der geschützte Betrag erhöhen. Dafür brauchen Sie eine Bescheinigung, die unter anderem Arbeitgeber, Familienkassen, Sozialleistungsträger sowie anerkannte Schuldnerberatungsstellen ausstellen dürfen. Dieses Musterschreiben deckt nur die Umwandlung ab, nicht die Erhöhung des Freibetrags.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
