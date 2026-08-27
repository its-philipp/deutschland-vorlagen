import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified via WebSearch (gesetze-im-internet.de is 403-blocked in
 * this dev environment, see MEMORY.md) against dejure.org/buzer.de-sourced
 * summaries and BAG-nahe Fachartikel (arbeitsrechtsiegen.de, IHK Darmstadt,
 * Friedrich Graf von Westphalen, haufe.de) on 2026-07-13. No specific
 * calculation is promised: the on-page formula is framed explicitly as an
 * orientation, not a guaranteed result (RDG-safe, no Rechenversprechen).
 */
const config: GeneratorConfig = {
  slug: 'urlaubsabgeltung-fordern',
  category: 'arbeit',
  categoryLabel: 'Arbeit & Beruf',
  h1: 'Urlaubsabgeltung fordern: Muster für Ihr Schreiben nach Vertragsende',
  metaTitle: 'Urlaubsabgeltung: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Offene Urlaubstage auszahlen lassen: Schreiben zur Urlaubsabgeltung online ausfüllen und ausdrucken – kostenlos, mit Warnung vor Ausschlussfristen.',
  intro:
    'Mit diesem Generator fordern Sie die Auszahlung nicht genommener Urlaubstage nach dem Ende Ihres Arbeitsverhältnisses – als fertiges Schreiben nach § 7 Abs. 4 BUrlG, direkt im Browser.',
  fields: [
    {
      id: 'endeArbeitsverhaeltnis',
      label: 'Ende des Arbeitsverhältnisses',
      type: 'date',
      required: true,
      hint: 'Letzter Tag Ihres Arbeitsverhältnisses laut Kündigung oder Aufhebungsvertrag.',
      example: '30.06.2026',
    },
    {
      id: 'offeneUrlaubstage',
      label: 'Offene (nicht genommene) Urlaubstage',
      type: 'number',
      required: true,
      hint: 'Anzahl der Urlaubstage, die Sie bis zum Vertragsende nicht mehr nehmen konnten.',
      example: '8',
    },
    {
      id: 'zahlungsfrist',
      label: 'Zahlungsfrist, die Sie setzen möchten',
      type: 'text',
      required: true,
      hint: 'Ein konkretes Datum oder ein Zeitraum ab Zugang des Schreibens.',
      example: 'innerhalb von 14 Tagen nach Zugang dieses Schreibens',
    },
  ],
  subjectTemplate:
    'Urlaubsabgeltung nach Beendigung meines Arbeitsverhältnisses zum {{endeArbeitsverhaeltnis}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

mein Arbeitsverhältnis bei Ihnen endete zum {{endeArbeitsverhaeltnis}}. Zu diesem Zeitpunkt standen mir noch {{offeneUrlaubstage}} Urlaubstage zu, die ich wegen der Beendigung des Arbeitsverhältnisses nicht mehr nehmen konnte.

Gemäß § 7 Abs. 4 BUrlG ist Urlaub, der wegen der Beendigung des Arbeitsverhältnisses ganz oder teilweise nicht mehr gewährt werden kann, abzugelten. Ich fordere Sie hiermit auf, mir die Urlaubsabgeltung für die genannten {{offeneUrlaubstage}} Urlaubstage zu berechnen und auszuzahlen.

Bitte begleichen Sie den Abgeltungsbetrag {{zahlungsfrist}} und übersenden Sie mir eine nachvollziehbare Berechnung.

Sollte ich innerhalb dieser Frist keinen Zahlungseingang feststellen, behalte ich mir weitere Schritte vor.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 7 Abs. 4 BUrlG',
      url: 'https://www.gesetze-im-internet.de/burlg/__7.html',
      note: 'Kann der Urlaub wegen der Beendigung des Arbeitsverhältnisses ganz oder teilweise nicht mehr gewährt werden, ist er finanziell abzugelten.',
    },
    {
      ref: '§ 11 Abs. 1 BUrlG',
      url: 'https://www.gesetze-im-internet.de/burlg/__11.html',
      note: 'Regelt die Berechnung des Urlaubsentgelts anhand des durchschnittlichen Verdienstes der letzten 13 Wochen vor Beginn des Urlaubs; diese Berechnungsweise wird in der Praxis auch für die Urlaubsabgeltung herangezogen.',
    },
  ],
  explainer: {
    whenHeading: 'Wann wird Urlaub ausgezahlt?',
    deadlineHeading: 'Wie lange können Sie die Abgeltung fordern?',
    legalHeading: 'Wann Urlaub in Geld umschlägt',
    when:
      'Dieses Schreiben nutzen Sie, wenn Ihr Arbeitsverhältnis beendet ist und Sie zu diesem Zeitpunkt noch Anspruch auf nicht genommenen Urlaub hatten. Da Sie den Urlaub als ehemalige Arbeitnehmerin oder ehemaliger Arbeitnehmer nicht mehr in Anspruch nehmen können, wird er in Geld abgegolten – unabhängig davon, wer gekündigt hat.',
    deadline:
      'Eine eigene gesetzliche Frist für die Geltendmachung der Urlaubsabgeltung gibt es nicht; ohne besondere Regelung verjährt der Anspruch nach der regelmäßigen Frist von drei Jahren (§ 195 BGB). Entscheidend sind in der Praxis jedoch häufig arbeits- oder tarifvertragliche Ausschlussfristen – sie liegen oft bei drei Monaten ab Fälligkeit und können den Anspruch bei Versäumnis vollständig zum Erlöschen bringen. Prüfen Sie deshalb Ihren Vertrag und fordern Sie die Abgeltung möglichst zügig und nachweisbar schriftlich ein.',
    legal:
      'Rechtsgrundlage ist § 7 Abs. 4 BUrlG: Kann Urlaub wegen der Beendigung des Arbeitsverhältnisses nicht mehr genommen werden, muss der Arbeitgeber ihn finanziell abgelten. Für die Höhe wird in der Praxis häufig auf die Berechnungsregel für das Urlaubsentgelt zurückgegriffen (§ 11 Abs. 1 BUrlG): maßgeblich ist grundsätzlich der durchschnittliche Verdienst der letzten 13 Wochen vor dem Ende des Arbeitsverhältnisses. Eine grobe Orientierung liefert die verbreitete Faustformel „Bruttomonatsgehalt geteilt durch die durchschnittliche Zahl der Arbeitstage im Monat (bei einer 5-Tage-Woche üblicherweise rund 21,75) mal Anzahl der offenen Urlaubstage“ – dieser Generator berechnet und verspricht jedoch keinen bestimmten Betrag; die genaue Höhe sollte Ihr Arbeitgeber bzw. die Lohnbuchhaltung ermitteln.',
  },
  faq: [
    {
      q: 'Muss mein Arbeitgeber offene Urlaubstage nach der Kündigung auszahlen?',
      a: 'Ja: Kann der Urlaub wegen der Beendigung des Arbeitsverhältnisses nicht mehr genommen werden, ist er nach § 7 Abs. 4 BUrlG finanziell abzugelten. Das gilt unabhängig davon, wer gekündigt hat oder ob eine Kündigungsfrist eingehalten wurde.',
    },
    {
      q: 'Wie schnell muss ich die Urlaubsabgeltung fordern?',
      a: 'Prüfen Sie Ihren Arbeits- oder Tarifvertrag auf Ausschlussfristen: Viele Verträge sehen vor, dass Ansprüche innerhalb einer bestimmten Frist – häufig drei Monate ab Fälligkeit – schriftlich geltend gemacht werden müssen, sonst verfallen sie. Fordern Sie die Abgeltung deshalb zügig und nachweisbar schriftlich ein, statt sich auf die reguläre Verjährung zu verlassen.',
    },
    {
      q: 'Wie wird die Höhe der Urlaubsabgeltung berechnet?',
      a: 'Als grobe Orientierung gilt häufig: Bruttomonatsgehalt geteilt durch die durchschnittliche Zahl der Arbeitstage im Monat mal Anzahl der offenen Urlaubstage. Rechtlich maßgeblich ist der durchschnittliche Verdienst der letzten 13 Wochen vor Ende des Arbeitsverhältnisses (§ 11 Abs. 1 BUrlG); die genaue Berechnung sollte Ihr Arbeitgeber vornehmen.',
    },
    {
      q: 'Verfällt der Anspruch, wenn ich nichts unternehme?',
      a: 'Er kann verfallen: Neben der regulären Verjährung von drei Jahren (§ 195 BGB) gelten häufig kürzere arbeits- oder tarifvertragliche Ausschlussfristen, die den Anspruch schon nach wenigen Monaten erlöschen lassen können. Verlassen Sie sich nicht auf die gesetzliche Verjährung, sondern fordern Sie die Abgeltung frühzeitig schriftlich ein.',
    },
    {
      q: 'Was mache ich, wenn mein Arbeitgeber nicht zahlt?',
      a: 'Setzen Sie eine klare Zahlungsfrist und fordern Sie eine nachvollziehbare Berechnung an. Reagiert der Arbeitgeber trotz Fristsetzung nicht, können Sie den Anspruch vor dem Arbeitsgericht geltend machen; bei größeren oder strittigen Beträgen kann anwaltliche Beratung sinnvoll sein.',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
