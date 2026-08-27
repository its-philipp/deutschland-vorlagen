import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified via WebSearch (gesetze-im-internet.de is 403-blocked in
 * this dev environment, see MEMORY.md) against dejure.org/buzer.de-sourced
 * summaries and secondary sources (BVA, NRW-Justiz, Deutsche
 * Rentenversicherung Kommentierung zu § 84 SGG, ZAP/Haufe zu § 80 Abs. 2
 * VwGO) on 2026-07-13. Framing is deliberately general: this letter covers
 * the common VwGO case, but the FAQ and explainer point users to the
 * Rechtsbehelfsbelehrung on their specific Bescheid, since the Widerspruchs-
 * verfahren is partly abolished by state law and Sozialleistungsbescheide
 * follow the SGG instead.
 */
const config: GeneratorConfig = {
  slug: 'widerspruch-bescheid',
  category: 'behoerden',
  categoryLabel: 'Behörden & Widersprüche',
  h1: 'Widerspruch gegen einen Bescheid: Muster zum Ausfüllen',
  metaTitle: 'Widerspruch Bescheid: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Widerspruch gegen einen Bescheid einlegen: Schreiben online ausfüllen und als PDF speichern – kostenlos, mit der Monatsfrist nach § 70 VwGO.',
  intro:
    'Mit diesem Generator legen Sie form- und fristgerecht Widerspruch gegen einen Bescheid einer Behörde ein – als fertiges Schreiben, direkt im Browser, ohne Anmeldung.',
  fields: [
    {
      id: 'aktenzeichen',
      label: 'Aktenzeichen des Bescheids',
      type: 'text',
      required: true,
      hint: 'Steht meist oben auf der ersten Seite des Bescheids.',
      example: '12-3456-2026',
    },
    {
      id: 'datumBescheid',
      label: 'Datum des Bescheids',
      type: 'date',
      required: true,
      hint: 'Ausstellungsdatum laut Bescheid. Für die Frist zählt aber der Tag der Bekanntgabe, meist der Zugang per Post – prüfen Sie dies zusätzlich.',
      example: '01.07.2026',
    },
    {
      id: 'bezeichnungBescheid',
      label: 'Bezeichnung des Bescheids',
      type: 'text',
      required: true,
      hint: 'Wie der Bescheid überschrieben ist.',
      example: 'Gebührenbescheid der Stadt Musterstadt',
    },
    {
      id: 'begruendung',
      label: 'Begründung (optional)',
      type: 'textarea',
      required: false,
      hint: 'Freiwillig: Eine Begründung ist für die Wirksamkeit des Widerspruchs nicht erforderlich und kann meist bis zur Entscheidung nachgereicht werden. Lassen Sie das Feld leer, wenn Sie die Begründung später nachreichen möchten.',
      example: 'Die der Berechnung zugrunde gelegten Angaben sind aus meiner Sicht fehlerhaft.',
    },
  ],
  subjectTemplate:
    'Widerspruch gegen {{bezeichnungBescheid}} vom {{datumBescheid}} – Aktenzeichen {{aktenzeichen}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

gegen den {{bezeichnungBescheid}} vom {{datumBescheid}}, Aktenzeichen {{aktenzeichen}}, lege ich hiermit form- und fristgerecht Widerspruch ein.

Zur Begründung führe ich Folgendes aus: {{begruendung}}

Eine weitergehende Begründung behalte ich mir vor und reiche sie gegebenenfalls gesondert nach.

Bitte bestätigen Sie mir den Eingang dieses Widerspruchs schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 70 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__70.html',
      note: 'Der Widerspruch ist innerhalb eines Monats nach Bekanntgabe des Verwaltungsakts schriftlich, elektronisch (§ 3a VwVfG) oder zur Niederschrift bei der Behörde einzulegen, die den Verwaltungsakt erlassen hat.',
    },
    {
      ref: '§ 68 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__68.html',
      note: 'Vor einer Anfechtungsklage ist grundsätzlich ein Vorverfahren (Widerspruchsverfahren) durchzuführen; einzelne Bundesländer haben dieses Verfahren durch Landesrecht ganz oder teilweise abgeschafft (§ 68 Abs. 1 Satz 2 VwGO).',
    },
    {
      ref: '§ 58 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__58.html',
      note: 'Fehlt eine Rechtsbehelfsbelehrung oder ist sie fehlerhaft, verlängert sich die Frist zur Einlegung eines Rechtsbehelfs auf ein Jahr; für den Widerspruch gilt dies über § 70 Abs. 2 VwGO entsprechend.',
    },
    {
      ref: '§ 84 SGG',
      url: 'https://www.gesetze-im-internet.de/sgg/__84.html',
      note: 'Für Bescheide von Sozialleistungsträgern (z. B. Jobcenter, Rentenversicherung, Krankenkasse) gilt statt der VwGO das SGG; die Widerspruchsfrist beträgt danach ebenfalls einen Monat nach Bekanntgabe.',
    },
    {
      ref: '§ 80 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__80.html',
      note: 'Widerspruch und Anfechtungsklage haben grundsätzlich aufschiebende Wirkung (Abs. 1); bei der Anforderung von öffentlichen Abgaben und Kosten entfällt diese jedoch kraft Gesetzes (Abs. 2 Nr. 1).',
    },
    {
      ref: '§ 73 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__73.html',
      note: 'Hilft die Behörde dem Widerspruch nicht ab, ergeht ein Widerspruchsbescheid; ihn erlässt grundsätzlich die nächsthöhere Behörde, in Selbstverwaltungsangelegenheiten die Selbstverwaltungsbehörde (Abs. 1). Der Widerspruchsbescheid ist zu begründen, mit einer Rechtsmittelbelehrung zu versehen und von Amts wegen zuzustellen; er bestimmt auch, wer die Kosten trägt (Abs. 3).',
    },
    {
      ref: '§ 74 VwGO',
      url: 'https://www.gesetze-im-internet.de/vwgo/__74.html',
      note: 'Die Anfechtungsklage muss innerhalb eines Monats nach Zustellung des Widerspruchsbescheids erhoben werden; ist ein Widerspruchsbescheid nach § 68 nicht erforderlich, innerhalb eines Monats nach Bekanntgabe des Verwaltungsakts (Abs. 1). Für die Verpflichtungsklage gilt dies entsprechend (Abs. 2).',
    },
  ],
  explainer: {
    when:
      'Diesen Widerspruch nutzen Sie, wenn Sie mit einem Bescheid einer Behörde nicht einverstanden sind – etwa einem Gebühren-, Steuer- oder Leistungsbescheid. Er richtet sich an die Behörde, die den Bescheid erlassen hat, nicht direkt an ein Gericht.',
    deadline:
      'Maßgeblich ist die Rechtsbehelfsbelehrung auf Ihrem konkreten Bescheid – sie nennt Frist, Form und die richtige Adresse. In der Regel beträgt die Frist einen Monat ab Bekanntgabe des Bescheids (§ 70 Abs. 1 VwGO bzw. § 84 Abs. 1 SGG für Bescheide von Sozialleistungsträgern). Fehlt die Rechtsbehelfsbelehrung oder ist sie fehlerhaft, verlängert sich die Frist auf ein Jahr (§ 58 Abs. 2 VwGO i. V. m. § 70 Abs. 2 VwGO) – reichen Sie den Widerspruch trotzdem möglichst zügig ein.',
    legal:
      'Rechtsgrundlage für Widersprüche gegen Verwaltungsakte ist grundsätzlich die VwGO: Der Widerspruch ist innerhalb eines Monats nach Bekanntgabe schriftlich, elektronisch (§ 3a VwVfG) oder zur Niederschrift bei der erlassenden Behörde einzulegen (§ 70 VwGO) und ist Voraussetzung für eine spätere Anfechtungsklage (§ 68 VwGO). Einzelne Bundesländer haben das Widerspruchsverfahren durch Landesrecht ganz oder teilweise abgeschafft – ob in Ihrem Fall überhaupt ein Widerspruch oder direkt eine Klage der richtige Weg ist, ergibt sich aus der Rechtsbehelfsbelehrung Ihres Bescheids. Für Bescheide von Sozialleistungsträgern wie Jobcenter, Rentenversicherung oder Krankenkasse gilt statt der VwGO das SGG, das ebenfalls eine Monatsfrist vorsieht (§ 84 SGG). Widerspruch und eine spätere Anfechtungsklage haben grundsätzlich aufschiebende Wirkung (§ 80 Abs. 1 VwGO); bei der Anforderung öffentlicher Abgaben und Kosten – etwa Gebühren- oder Steuerbescheiden – entfällt diese Wirkung jedoch kraft Gesetzes (§ 80 Abs. 2 Nr. 1 VwGO), sodass trotz Widerspruchs eine Zahlungspflicht bestehen bleiben kann.',
  },
  faq: [
    {
      q: 'Wie viel Zeit habe ich für den Widerspruch?',
      a: 'In der Regel einen Monat ab Bekanntgabe des Bescheids (§ 70 Abs. 1 VwGO bzw. § 84 Abs. 1 SGG). Maßgeblich ist nicht das Ausstellungsdatum, sondern der Tag, an dem Ihnen der Bescheid tatsächlich zugegangen ist – prüfen Sie zusätzlich die Rechtsbehelfsbelehrung auf Ihrem Bescheid.',
    },
    {
      q: 'Was passiert, wenn die Rechtsbehelfsbelehrung fehlt oder falsch ist?',
      a: 'Dann verlängert sich die Frist auf ein Jahr ab Bekanntgabe (§ 58 Abs. 2 VwGO in Verbindung mit § 70 Abs. 2 VwGO). Prüfen Sie im Zweifel trotzdem, ob die einmonatige Frist eingehalten werden kann, um auf der sicheren Seite zu sein.',
    },
    {
      q: 'Gilt das auch für Bescheide vom Jobcenter, der Rentenversicherung oder Krankenkasse?',
      a: 'Für solche Sozialleistungsbescheide gilt statt der VwGO das Sozialgerichtsgesetz; die Widerspruchsfrist beträgt dort ebenfalls einen Monat ab Bekanntgabe (§ 84 SGG). Das Verfahren läuft ansonsten ähnlich ab wie bei anderen Behördenbescheiden.',
    },
    {
      q: 'Gibt es in jedem Bundesland ein Widerspruchsverfahren?',
      a: 'Nein. Mehrere Bundesländer haben das Widerspruchsverfahren für bestimmte Bereiche durch Landesrecht eingeschränkt oder abgeschafft (§ 68 Abs. 1 Satz 2 VwGO). Maßgeblich ist deshalb immer die Rechtsbehelfsbelehrung auf Ihrem konkreten Bescheid – sie sagt Ihnen, ob ein Widerspruch oder direkt eine Klage der richtige Weg ist.',
    },
    {
      q: 'Muss ich meinen Widerspruch begründen?',
      a: 'Nein, eine Begründung ist keine Wirksamkeitsvoraussetzung. Sie können sie bis zur Entscheidung der Behörde nachreichen – für eine zügige Prüfung ist es aber hilfreich, so früh wie möglich mitzuteilen, was Sie an dem Bescheid für falsch halten.',
    },
    {
      q: 'Muss ich trotz Widerspruchs zahlen oder handeln?',
      a: 'Grundsätzlich haben Widerspruch und eine spätere Klage aufschiebende Wirkung (§ 80 Abs. 1 VwGO), sodass der Bescheid vorläufig nicht vollzogen wird. Bei der Anforderung öffentlicher Abgaben und Kosten, etwa Gebühren- oder Steuerbescheiden, entfällt diese Wirkung jedoch kraft Gesetzes (§ 80 Abs. 2 Nr. 1 VwGO) – informieren Sie sich im Zweifel bei der Behörde, ob Sie vorläufig zahlen müssen.',
    },
  ],
  lastReviewed: '2026-08-28',
};

export default config;
