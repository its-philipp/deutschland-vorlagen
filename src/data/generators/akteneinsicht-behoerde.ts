import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified 2026-08-01 by reading the text of § 29 VwVfG on
 * gesetze-im-internet.de. Verbatim basis: the authority must grant a
 * "Beteiligter" access to the files concerning the procedure "soweit deren
 * Kenntnis zur Geltendmachung oder Verteidigung ihrer rechtlichen Interessen
 * erforderlich ist" (Abs. 1 S. 1); until the procedure is concluded this does
 * not extend to drafts of decisions and preparatory work (Abs. 1 S. 2);
 * Abs. 2 lists the grounds on which access may be refused.
 *
 * IMPORTANT SCOPE NOTE, reflected in the copy: § 29 VwVfG covers the general
 * administrative procedure of the Bund (and, via the Landes-VwVfG, the
 * Länder). Social-law matters run under § 25 SGB X and tax matters under the
 * AO instead. Stating this is a quality differentiator — a letter citing the
 * wrong statute to a Jobcenter looks incompetent.
 */
const config: GeneratorConfig = {
  slug: 'akteneinsicht-behoerde',
  category: 'behoerden',
  categoryLabel: 'Behörden',
  h1: 'Akteneinsicht beantragen: Muster zum Ausfüllen',
  metaTitle: 'Akteneinsicht beantragen: Muster 2026 (Generator)',
  metaDescription:
    'Akteneinsicht bei einer Behörde beantragen: Antrag nach § 29 VwVfG online ausfüllen und ausdrucken – kostenlos, ohne Anmeldung.',
  intro:
    'Mit diesem Generator beantragen Sie als Beteiligte oder Beteiligter eines Verwaltungsverfahrens Einsicht in die Akten der Behörde.',
  fields: [
    {
      id: 'norm',
      label: 'Um was für ein Verfahren geht es?',
      type: 'select',
      required: true,
      hint: 'Der Anspruch besteht in beiden Fällen, die Vorschrift lautet aber verschieden. Ein Schreiben an die Rentenversicherung, das § 29 VwVfG nennt, zitiert die falsche Norm.',
      options: [
        {
          value: '§ 29 Abs. 1 VwVfG',
          label:
            'Allgemeines Verwaltungsverfahren – Stadt, Amt, Bauaufsicht, Ordnungsamt (§ 29 VwVfG)',
        },
        {
          value: '§ 25 Abs. 1 SGB X',
          label:
            'Sozialverfahren – Jobcenter, Rentenversicherung, Krankenkasse, Pflegekasse (§ 25 SGB X)',
        },
      ],
    },
    {
      id: 'aktenzeichen',
      label: 'Aktenzeichen / Geschäftszeichen',
      type: 'text',
      required: true,
      hint: 'Steht auf jedem Schreiben der Behörde, meist oben rechts.',
      example: 'BA-2026/4471-3',
    },
    {
      id: 'verfahren',
      label: 'Um welches Verfahren geht es?',
      type: 'text',
      required: true,
      hint: 'Kurze Bezeichnung des Verwaltungsverfahrens, in dem Sie Beteiligte oder Beteiligter sind.',
      example: 'Bauantrag für das Grundstück Lindenweg 8',
    },
    {
      id: 'interesse',
      label: 'Wozu benötigen Sie die Akteneinsicht?',
      type: 'textarea',
      required: true,
      hint: 'Die Behörde muss Einsicht gewähren, soweit die Kenntnis der Akten zur Geltendmachung oder Verteidigung Ihrer rechtlichen Interessen erforderlich ist – beschreiben Sie diesen Bezug konkret.',
      example:
        'Ich muss prüfen, auf welche Feststellungen die Behörde ihre Ablehnung stützt, um über einen Widerspruch entscheiden zu können.',
    },
    {
      id: 'art',
      label: 'Gewünschte Form der Einsicht',
      type: 'select',
      required: true,
      hint: 'Wählen Sie, wie Sie die Akte einsehen möchten.',
      options: [
        {
          value:
            'Ich bitte um Übersendung von Kopien beziehungsweise Scans der vollständigen Verfahrensakte',
          label: 'Kopien / Scans zusenden',
        },
        {
          value:
            'Ich bitte um einen Termin zur Einsichtnahme in Ihren Diensträumen',
          label: 'Einsicht vor Ort',
        },
      ],
    },
  ],
  subjectTemplate:
    'Antrag auf Akteneinsicht nach {{norm}} – Aktenzeichen {{aktenzeichen}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

in dem bei Ihnen unter dem Aktenzeichen {{aktenzeichen}} geführten Verfahren ({{verfahren}}) bin ich Beteiligte beziehungsweise Beteiligter.

Hiermit beantrage ich Einsicht in die dieses Verfahren betreffenden Akten nach {{norm}}.

Die Kenntnis des Akteninhalts ist zur Geltendmachung beziehungsweise Verteidigung meiner rechtlichen Interessen erforderlich: {{interesse}}

{{art}}.

Sollten Sie die Einsicht ganz oder teilweise verweigern, bitte ich um eine schriftliche Begründung unter Angabe der Aktenteile, die von der Einsicht ausgenommen werden, sowie der jeweils tragenden Gründe.

Für Ihre Rückmeldung setze ich mir eine Frist bis zum Ablauf von vier Wochen nach Zugang dieses Schreibens.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 29 VwVfG',
      url: 'https://www.gesetze-im-internet.de/vwvfg/__29.html',
      note: 'Die Behörde hat den Beteiligten Einsicht in die das Verfahren betreffenden Akten zu gestatten, soweit deren Kenntnis zur Geltendmachung oder Verteidigung ihrer rechtlichen Interessen erforderlich ist (Abs. 1 Satz 1). Bis zum Abschluss des Verwaltungsverfahrens gilt das nicht für Entwürfe zu Entscheidungen und die Arbeiten zu ihrer unmittelbaren Vorbereitung (Abs. 1 Satz 2). Abs. 2 nennt die Gründe, aus denen die Einsicht verweigert werden darf.',
    },
    {
      ref: '§ 25 SGB X',
      url: 'https://www.gesetze-im-internet.de/sgb_10/__25.html',
      note: 'Für Sozialverfahren – Jobcenter, Rentenversicherung, Kranken- und Pflegekasse – tritt § 25 SGB X an die Stelle des § 29 VwVfG; Absatz 1 ist wortgleich. Enthält die Akte Angaben über gesundheitliche Verhältnisse, kann die Behörde den Inhalt stattdessen durch einen Arzt vermitteln lassen (Abs. 2), ohne dass der Anspruch aus Absatz 1 dadurch beschränkt wird. Die Einsicht erfolgt bei der aktenführenden Behörde (Abs. 4); Beteiligte dürfen Abschriften selbst fertigen oder Ablichtungen erhalten (Abs. 5).',
    },
  ],
  explainer: {
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie in einem laufenden oder abgeschlossenen Verwaltungsverfahren nachvollziehen wollen, worauf die Behörde ihre Entscheidung stützt – typischerweise vor einem Widerspruch oder einer Klage. Voraussetzung ist, dass Sie an dem Verfahren beteiligt sind; ein allgemeines Interesse genügt nicht.',
    deadline:
      'Für den Antrag selbst gibt es keine Frist. Wichtig ist der Zusammenhang mit anderen Fristen: Läuft parallel eine Widerspruchs- oder Klagefrist, wird sie durch den Antrag auf Akteneinsicht nicht angehalten. Legen Sie in diesem Fall fristwahrend Widerspruch ein – zunächst auch ohne Begründung – und reichen Sie die Begründung nach der Einsichtnahme nach.',
    legal:
      'Rechtsgrundlage ist § 29 VwVfG – im Sozialverfahren der wortgleiche § 25 Abs. 1 SGB X, den der Generator über das erste Auswahlfeld einsetzt. Der Anspruch steht Beteiligten des Verwaltungsverfahrens zu und reicht so weit, wie die Aktenkenntnis zur Geltendmachung oder Verteidigung ihrer rechtlichen Interessen erforderlich ist. Ausgenommen sind bis zum Abschluss des Verfahrens Entscheidungsentwürfe und unmittelbare Vorarbeiten; weitere Verweigerungsgründe nennt Abs. 2. Achtung: § 29 VwVfG gilt für das allgemeine Verwaltungsverfahren. In Steuerverfahren gilt statt beider die Abgabenordnung; dafür ist dieses Muster nicht gedacht.',
  },
  faq: [
    {
      q: 'Wer darf Akteneinsicht verlangen?',
      a: 'Der Anspruch aus § 29 VwVfG steht den Beteiligten des Verwaltungsverfahrens zu – also insbesondere derjenigen Person, die einen Antrag gestellt hat oder an die sich der Verwaltungsakt richtet. Ein allgemeines Informationsinteresse reicht nicht; dafür gelten die Informationsfreiheitsgesetze des Bundes und der Länder.',
    },
    {
      q: 'Muss ich begründen, wozu ich die Akte brauche?',
      a: 'Ja, zumindest im Kern. Der Anspruch reicht so weit, wie die Aktenkenntnis zur Geltendmachung oder Verteidigung Ihrer rechtlichen Interessen erforderlich ist. Beschreiben Sie deshalb konkret, welche Entscheidung Sie vorbereiten – etwa einen Widerspruch – und warum Sie dafür den Akteninhalt kennen müssen.',
    },
    {
      q: 'Kann die Behörde die Einsicht verweigern?',
      a: 'Teilweise ja. Bis zum Abschluss des Verfahrens sind Entscheidungsentwürfe und unmittelbare Vorarbeiten ausgenommen (§ 29 Abs. 1 Satz 2 VwVfG). Daneben darf die Behörde die Einsicht verweigern, soweit sie ihre ordnungsgemäße Aufgabenerfüllung beeinträchtigen würde, dem Wohl des Bundes oder eines Landes Nachteile brächte oder berechtigte Interessen Dritter entgegenstehen (Abs. 2). Eine vollständige Verweigerung ohne Begründung müssen Sie nicht hinnehmen.',
    },
    {
      q: 'Kostet die Akteneinsicht etwas?',
      a: 'Die Einsichtnahme selbst ist regelmäßig gebührenfrei. Für Kopien oder Scans können je nach Behörde und Gebührenordnung Auslagen anfallen. Bitten Sie um einen Hinweis, falls Kosten entstehen, bevor umfangreiche Kopien angefertigt werden.',
    },
    {
      q: 'Gilt das auch beim Jobcenter, der Rentenversicherung oder der Krankenkasse?',
      a: 'Ja, nur beruht der Anspruch dort auf einer anderen Vorschrift: In Sozialverfahren gilt § 25 SGB X, nicht § 29 VwVfG. Der Wortlaut des Absatzes 1 ist derselbe. Wählen Sie im ersten Feld „Sozialverfahren“ – dann nennen Betreff und Schreiben automatisch § 25 Abs. 1 SGB X.',
    },
    {
      q: 'In meiner Akte stehen ärztliche Gutachten. Bekomme ich die zu sehen?',
      a: 'Im Sozialverfahren gilt dafür eine Sonderregel: Enthält die Akte Angaben über Ihre gesundheitlichen Verhältnisse, darf die Behörde den Inhalt stattdessen durch einen Arzt vermitteln lassen, und sie soll das tun, wenn die unmittelbare Einsicht Ihnen einen unverhältnismäßigen Nachteil zufügen würde (§ 25 Abs. 2 SGB X). Ihr Einsichtsrecht aus Absatz 1 wird dadurch ausdrücklich nicht beschränkt – die Akte bleibt zugänglich, nur unter Umständen auf diesem Weg. Das betrifft vor allem Verfahren der Rentenversicherung und der Krankenkassen.',
    },
  ],
  lastReviewed: '2026-08-27',
};

export default config;
