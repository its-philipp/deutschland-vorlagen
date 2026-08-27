import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Art. 15 DSGVO is EU law and therefore not on gesetze-im-internet.de. Cited
 * against the consolidated German text on EUR-Lex (CELEX 32016R0679); URL
 * loaded and the presence of "Artikel 15" confirmed in-browser 2026-08-01.
 *
 * The one-month response period of Art. 12 Abs. 3 DSGVO (extendable by two
 * further months for complex requests) is stated as the deadline; the letter
 * therefore sets its own deadline at one month rather than an arbitrary
 * number of days.
 */
const config: GeneratorConfig = {
  slug: 'datenauskunft-dsgvo',
  category: 'vertraege',
  categoryLabel: 'Verträge',
  h1: 'Datenauskunft nach DSGVO anfordern: Muster zum Ausfüllen',
  metaTitle: 'Datenauskunft nach DSGVO: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Auskunft über gespeicherte Daten nach Art. 15 DSGVO verlangen: Schreiben online ausfüllen und ausdrucken – kostenlos, ohne Anmeldung.',
  intro:
    'Mit diesem Generator verlangen Sie von einem Unternehmen oder einer Organisation Auskunft darüber, welche personenbezogenen Daten dort über Sie gespeichert sind.',
  fields: [
    {
      id: 'kundennummer',
      label: 'Kunden- oder Vertragsnummer (freiwillig)',
      type: 'text',
      required: false,
      hint: 'Optional: erleichtert die Zuordnung, ist aber keine Voraussetzung für Ihren Anspruch.',
      example: 'K-2026-88410',
    },
    {
      id: 'umfang',
      label: 'Umfang der Auskunft',
      type: 'select',
      required: true,
      hint: 'Sie können die vollständige Auskunft verlangen oder sich auf einen konkreten Bereich beschränken.',
      options: [
        {
          value:
            'Die Auskunft soll sich auf sämtliche bei Ihnen zu meiner Person verarbeiteten Daten erstrecken',
          label: 'Vollständige Auskunft',
        },
        {
          value:
            'Die Auskunft soll sich auf den nachfolgend bezeichneten Bereich beschränken',
          label: 'Auf einen Bereich beschränkt',
        },
      ],
    },
    {
      id: 'bereich',
      label: 'Bezeichnung des Bereichs (freiwillig)',
      type: 'textarea',
      required: false,
      hint: 'Nur ausfüllen, wenn Sie die Auskunft eingegrenzt haben – z. B. Telefonnotizen, Bonitätsdaten oder Werbeprofile.',
      example: 'Sämtliche zu meiner Person gespeicherten Bonitäts- und Scoringdaten',
    },
  ],
  // NOTE: no {{kundennummer}} here — it is optional, and the
  // optional-paragraph dropping in renderTemplate only applies to body
  // paragraphs. An empty optional field in the subject would render as a
  // visible "____________" gap marker.
  subjectTemplate: 'Auskunftsersuchen nach Art. 15 DSGVO',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit mache ich mein Auskunftsrecht nach Art. 15 der Datenschutz-Grundverordnung (DSGVO) geltend.

Kunden- beziehungsweise Vertragsnummer: {{kundennummer}}

{{umfang}}.

{{bereich}}

Ich bitte Sie um Auskunft darüber, ob Sie personenbezogene Daten zu meiner Person verarbeiten, und – falls ja – um eine Kopie dieser Daten sowie um die nach Art. 15 Abs. 1 DSGVO vorgesehenen Informationen, insbesondere über die Verarbeitungszwecke, die Kategorien der verarbeiteten Daten, die Empfänger oder Kategorien von Empfängern, gegenüber denen die Daten offengelegt wurden oder werden, die geplante Speicherdauer beziehungsweise die Kriterien für ihre Festlegung, die Herkunft der Daten, soweit sie nicht bei mir erhoben wurden, sowie das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling.

Nach Art. 12 Abs. 3 DSGVO ist die Auskunft unverzüglich, in jedem Fall aber innerhalb eines Monats nach Eingang dieses Antrags zu erteilen. Ich bitte Sie daher um Ihre Antwort innerhalb dieser Frist.

Sollten Sie die Auskunft ganz oder teilweise verweigern, bitte ich um eine Begründung unter Angabe der Vorschrift, auf die Sie sich stützen.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: 'Art. 15 DSGVO',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679',
      note: 'Betroffene Personen haben das Recht, eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden, und in diesem Fall Auskunft über diese Daten sowie über Zwecke, Empfänger, Speicherdauer, Herkunft und das Bestehen automatisierter Entscheidungsfindung zu erhalten. Zusätzlich besteht ein Anspruch auf eine Kopie der verarbeiteten Daten.',
    },
    {
      ref: 'Art. 12 DSGVO',
      url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679',
      note: 'Der Verantwortliche muss unverzüglich, spätestens aber innerhalb eines Monats nach Eingang des Antrags reagieren. Diese Frist kann bei komplexen Anträgen um weitere zwei Monate verlängert werden; über die Verlängerung und ihre Gründe ist die betroffene Person innerhalb eines Monats zu unterrichten. Die Auskunft ist grundsätzlich unentgeltlich.',
    },
  ],
  explainer: {
    whenHeading: 'Wann lohnt sich eine Datenauskunft?',
    deadlineHeading: 'Wie lange darf sich das Unternehmen Zeit lassen?',
    legalHeading: 'Was die DSGVO Ihnen zugesteht',
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie wissen wollen, welche Daten ein Unternehmen, eine Auskunftei, ein Versandhändler oder eine Versicherung über Sie gespeichert hat – etwa vor einem Widerspruch gegen eine Entscheidung, bei Zweifeln an einer Bonitätsbewertung oder um unerwünschte Werbung zurückzuverfolgen.',
    deadline:
      'Der Verantwortliche muss unverzüglich antworten, spätestens innerhalb eines Monats nach Eingang Ihres Antrags (Art. 12 Abs. 3 DSGVO). Bei besonders komplexen Anfragen kann er die Frist um zwei Monate verlängern, muss Sie darüber aber innerhalb des ersten Monats unterrichten. Reagiert er gar nicht, können Sie sich bei der zuständigen Datenschutzaufsichtsbehörde beschweren.',
    legal:
      'Grundlage ist Art. 15 DSGVO. Er gibt jeder betroffenen Person das Recht auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die näheren Umstände der Verarbeitung und auf eine Kopie der Daten. Der Anspruch besteht unabhängig davon, ob ein Vertragsverhältnis besteht, und muss nicht begründet werden. Die erste Auskunft ist unentgeltlich; für weitere Kopien darf ein angemessenes Entgelt verlangt werden.',
  },
  faq: [
    {
      q: 'Muss ich begründen, warum ich die Auskunft möchte?',
      a: 'Nein. Das Auskunftsrecht aus Art. 15 DSGVO besteht voraussetzungslos – Sie müssen weder ein Interesse darlegen noch einen Anlass nennen. Das Musterschreiben verzichtet deshalb bewusst auf eine Begründung.',
    },
    {
      q: 'Was kostet die Datenauskunft?',
      a: 'Nichts. Die erste Kopie der verarbeiteten Daten ist unentgeltlich zu erteilen. Nur für weitere Kopien darf der Verantwortliche ein angemessenes Entgelt auf Grundlage der Verwaltungskosten verlangen.',
    },
    {
      q: 'Wie lange darf sich das Unternehmen Zeit lassen?',
      a: 'Grundsätzlich einen Monat ab Eingang Ihres Antrags (Art. 12 Abs. 3 DSGVO). Bei komplexen oder zahlreichen Anträgen kann diese Frist um bis zu zwei weitere Monate verlängert werden – über die Verlängerung und ihre Gründe muss das Unternehmen Sie aber innerhalb des ersten Monats informieren.',
    },
    {
      q: 'Was kann ich tun, wenn niemand antwortet?',
      a: 'Sie können sich bei der zuständigen Datenschutzaufsichtsbehörde beschweren – in der Regel die Landesbeauftragte oder der Landesbeauftragte für Datenschutz des Bundeslandes, in dem das Unternehmen seinen Sitz hat. Die Beschwerde ist kostenlos und formlos möglich; legen Sie eine Kopie Ihres Schreibens und den Nachweis über den Versand bei.',
    },
    {
      q: 'Muss ich meine Identität nachweisen?',
      a: 'Der Verantwortliche darf zusätzliche Informationen anfordern, wenn er begründete Zweifel an Ihrer Identität hat. Eine Ausweiskopie darf er aber nicht pauschal verlangen; wenn Sie eine übersenden, sollten Sie nicht benötigte Angaben schwärzen. Häufig genügt die Angabe der Kundennummer, mit der Sie dort geführt werden.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
