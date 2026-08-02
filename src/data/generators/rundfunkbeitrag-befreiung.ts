import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * § 4 RBStV ("Befreiungen von der Beitragspflicht, Ermäßigung") is a
 * Staatsvertrag of the Länder, NOT federal law — it is therefore not on
 * gesetze-im-internet.de. Cited against the consolidated text published by
 * the Beitragsservice itself (rundfunkbeitrag.de); URL confirmed 2026-08-01
 * (HTTP 200, application/pdf).
 *
 * DELIBERATE SCOPE: the Beitragsservice decides on the basis of a Nachweis,
 * and its own form is the primary route. This letter is framed as the
 * covering Antrag that accompanies the Nachweis, and the copy says so — it
 * does not claim the letter alone is sufficient. Concrete retroactivity rules
 * are deliberately NOT stated as fixed periods; they were not read verbatim.
 */
const config: GeneratorConfig = {
  slug: 'rundfunkbeitrag-befreiung',
  category: 'behoerden',
  categoryLabel: 'Behörden',
  h1: 'Rundfunkbeitrag Befreiung beantragen: Muster zum Ausfüllen',
  metaTitle:
    'Rundfunkbeitrag Befreiung: Muster 2026 (Generator)',
  metaDescription:
    'Befreiung oder Ermäßigung vom Rundfunkbeitrag beantragen: Antragsschreiben nach § 4 RBStV online ausfüllen und ausdrucken – kostenlos.',
  intro:
    'Mit diesem Generator beantragen Sie beim Beitragsservice die Befreiung oder Ermäßigung vom Rundfunkbeitrag. Den erforderlichen Nachweis legen Sie dem Schreiben in Kopie bei.',
  fields: [
    {
      id: 'beitragsnummer',
      label: 'Beitragsnummer',
      type: 'text',
      required: true,
      hint: 'Steht auf jedem Schreiben des Beitragsservice.',
      example: '123 456 789',
    },
    {
      id: 'antragsart',
      label: 'Was beantragen Sie?',
      type: 'select',
      required: true,
      hint: 'Die Befreiung entfällt vollständig, die Ermäßigung reduziert den Beitrag auf ein Drittel.',
      options: [
        {
          value: 'die Befreiung von der Rundfunkbeitragspflicht',
          label: 'Befreiung (voller Wegfall)',
        },
        {
          value: 'die Ermäßigung des Rundfunkbeitrags',
          label: 'Ermäßigung (auf ein Drittel)',
        },
      ],
    },
    {
      id: 'grund',
      label: 'Grund des Antrags',
      type: 'select',
      required: true,
      hint: 'Wählen Sie den Grund, der auf Sie zutrifft – er muss durch den beigefügten Nachweis belegt sein.',
      options: [
        {
          value: 'ich Bürgergeld nach dem SGB II beziehe',
          label: 'Bürgergeld (SGB II)',
        },
        {
          value: 'ich Leistungen der Sozialhilfe nach dem SGB XII beziehe',
          label: 'Sozialhilfe (SGB XII)',
        },
        {
          value: 'ich Grundsicherung im Alter oder bei Erwerbsminderung beziehe',
          label: 'Grundsicherung im Alter / bei Erwerbsminderung',
        },
        {
          value: 'ich Leistungen nach dem Asylbewerberleistungsgesetz beziehe',
          label: 'Leistungen nach dem AsylbLG',
        },
        {
          value:
            'ich als Studierende beziehungsweise Studierender Leistungen nach dem BAföG erhalte und nicht bei meinen Eltern wohne',
          label: 'BAföG (nicht bei den Eltern wohnend)',
        },
        {
          value:
            'in meinem Schwerbehindertenausweis das Merkzeichen RF eingetragen ist',
          label: 'Merkzeichen RF im Schwerbehindertenausweis',
        },
        {
          value:
            'ich als besonderer Härtefall anzusehen bin; die maßgeblichen Umstände habe ich nachfolgend dargestellt',
          label: 'Besonderer Härtefall',
        },
      ],
    },
    {
      id: 'nachweis',
      label: 'Beigefügter Nachweis',
      type: 'text',
      required: true,
      hint: 'Bezeichnen Sie das Dokument, das Sie in Kopie beilegen – ohne Nachweis wird der Antrag abgelehnt.',
      example: 'Bewilligungsbescheid des Jobcenters vom 12.06.2026',
    },
    {
      id: 'abDatum',
      label: 'Befreiung/Ermäßigung gewünscht ab',
      type: 'date',
      required: true,
      hint: 'In der Regel der Monat, ab dem die Voraussetzungen vorliegen – erkennbar aus Ihrem Bewilligungsbescheid.',
    },
    {
      id: 'ergaenzung',
      label: 'Ergänzende Angaben (freiwillig)',
      type: 'textarea',
      required: false,
      hint: 'Optional: bei einem Härtefall die maßgeblichen Umstände, sonst weitere Erläuterungen.',
    },
  ],
  subjectTemplate:
    'Antrag auf {{antragsart}} – Beitragsnummer {{beitragsnummer}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit beantrage ich {{antragsart}} für die Beitragsnummer {{beitragsnummer}} ab dem {{abDatum}}.

Der Antrag ist begründet, weil {{grund}}.

Als Nachweis füge ich diesem Schreiben in Kopie bei: {{nachweis}}.

{{ergaenzung}}

Bitte bestätigen Sie mir den Eingang des Antrags und teilen Sie mir Ihre Entscheidung schriftlich mit. Sollten für die Bearbeitung weitere Unterlagen erforderlich sein, teilen Sie mir dies bitte mit.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 4 RBStV',
      url: 'https://www.rundfunkbeitrag.de/e175/e4794/Rundfunkbeitragsstaatsvertrag.pdf',
      note: 'Der Rundfunkbeitragsstaatsvertrag regelt in § 4 „Befreiungen von der Beitragspflicht, Ermäßigung“. Befreit werden auf Antrag insbesondere Empfängerinnen und Empfänger bestimmter Sozialleistungen; ermäßigt wird der Beitrag unter anderem für Menschen mit dem Merkzeichen RF im Schwerbehindertenausweis. Daneben sieht die Vorschrift eine Befreiung in besonderen Härtefällen vor.',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie wegen des Bezugs bestimmter Sozialleistungen oder wegen einer Behinderung vom Rundfunkbeitrag befreit oder ermäßigt werden möchten. Es dient als Anschreiben zu Ihrem Nachweis – die Entscheidung trifft der Beitragsservice auf Grundlage des beigefügten Bescheids.',
    deadline:
      'Für den Antrag selbst gibt es keine Ausschlussfrist; Befreiung und Ermäßigung wirken aber grundsätzlich erst ab dem Zeitpunkt, zu dem die Voraussetzungen vorliegen und nachgewiesen sind. Stellen Sie den Antrag deshalb möglichst zeitnah nach Erhalt Ihres Bewilligungsbescheids. Die Befreiung ist regelmäßig befristet und muss nach Ablauf des Bewilligungszeitraums neu beantragt werden.',
    legal:
      'Rechtsgrundlage ist § 4 des Rundfunkbeitragsstaatsvertrags (RBStV), eines Staatsvertrags der Länder – er steht deshalb nicht auf gesetze-im-internet.de, sondern wird unter anderem vom Beitragsservice selbst veröffentlicht. Die Vorschrift knüpft die Befreiung an den Bezug bestimmter Sozialleistungen und die Ermäßigung unter anderem an das Merkzeichen RF; zusätzlich besteht die Möglichkeit einer Befreiung in besonderen Härtefällen. Entscheidend ist in allen Fällen der Nachweis: Ohne beigefügten Bescheid in Kopie wird der Antrag abgelehnt.',
  },
  faq: [
    {
      q: 'Reicht dieses Schreiben allein für die Befreiung aus?',
      a: 'Nein. Entscheidend ist der Nachweis – in der Regel der Bewilligungsbescheid der Leistungsstelle oder der Schwerbehindertenausweis – den Sie in Kopie beilegen müssen. Der Beitragsservice bietet zusätzlich ein eigenes Antragsformular an; dieses Musterschreiben können Sie als Anschreiben dazu oder als formlosen Antrag verwenden.',
    },
    {
      q: 'Wer kann vom Rundfunkbeitrag befreit werden?',
      a: 'Befreit werden auf Antrag insbesondere Menschen, die bestimmte Sozialleistungen beziehen – etwa Bürgergeld nach dem SGB II, Sozialhilfe oder Grundsicherung nach dem SGB XII, Leistungen nach dem Asylbewerberleistungsgesetz oder BAföG bei einer eigenen Wohnung. Maßgeblich ist § 4 RBStV.',
    },
    {
      q: 'Was ist der Unterschied zwischen Befreiung und Ermäßigung?',
      a: 'Bei einer Befreiung entfällt der Rundfunkbeitrag vollständig. Bei einer Ermäßigung wird er auf ein Drittel reduziert; sie kommt unter anderem für Menschen mit dem Merkzeichen RF im Schwerbehindertenausweis in Betracht.',
    },
    {
      q: 'Muss ich die Befreiung wiederholt beantragen?',
      a: 'In der Regel ja. Die Befreiung wird für den Zeitraum gewährt, für den die Sozialleistung bewilligt ist. Läuft der Bewilligungszeitraum ab, müssen Sie mit dem neuen Bescheid einen neuen Antrag stellen – sonst lebt die Beitragspflicht automatisch wieder auf.',
    },
    {
      q: 'Ich habe zu wenig Einkommen, beziehe aber keine Sozialleistung – was dann?',
      a: 'Dafür sieht § 4 RBStV die Befreiung als besonderer Härtefall vor. Sie kommt insbesondere in Betracht, wenn Ihr Einkommen die maßgebliche Bedarfsgrenze nur geringfügig übersteigt und Sie deshalb keine Sozialleistung erhalten. Legen Sie in diesem Fall Ihre Einkommenssituation im Feld für ergänzende Angaben dar und fügen Sie entsprechende Nachweise bei.',
    },
  ],
  lastReviewed: '2026-08-01',
};

export default config;
