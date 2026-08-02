import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified via WebSearch (gesetze-im-internet.de is 403-blocked in
 * this dev environment, see MEMORY.md) against dejure.org/buzer.de-sourced
 * summaries and law-firm secondary sources (u. a. kanzlei-wulf.de,
 * humanresourcesmanager.de, cbh.de, BMAS-FAQ zur Brückenteilzeit) on
 * 2026-07-13. Key distinction confirmed: the EMPLOYEE's request only needs
 * Textform (§ 8 Abs. 2 TzBfG, reformed 2019), but the EMPLOYER's rejection
 * must be in Schriftform with an original signature (§ 8 Abs. 5 TzBfG) – an
 * oral or emailed rejection does not stop the Zustimmungsfiktion.
 */
const config: GeneratorConfig = {
  slug: 'teilzeit-antrag',
  category: 'arbeit',
  categoryLabel: 'Arbeit & Beruf',
  h1: 'Teilzeit beantragen: Muster für den Antrag auf Verringerung der Arbeitszeit',
  metaTitle: 'Teilzeit beantragen: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Teilzeit beantragen: Antrag auf Verringerung der Arbeitszeit online ausfüllen und ausdrucken – kostenlos, mit den Fristen nach § 8 TzBfG im Blick.',
  intro:
    'Mit diesem Generator erstellen Sie Ihren Antrag auf Verringerung der Arbeitszeit an Ihren Arbeitgeber – als fertiges Schreiben nach § 8 TzBfG, direkt im Browser.',
  fields: [
    {
      id: 'wochenstunden',
      label: 'Gewünschte Arbeitszeit pro Woche (Stunden)',
      type: 'number',
      required: true,
      hint: 'Ihre gewünschte wöchentliche Arbeitszeit in Stunden.',
      example: '25',
    },
    {
      id: 'beginnDatum',
      label: 'Gewünschter Beginn',
      type: 'date',
      required: true,
      hint: 'Erster Tag der verringerten Arbeitszeit. Reichen Sie den Antrag spätestens drei Monate vorher ein.',
      example: '01.11.2026',
    },
    {
      id: 'verteilung',
      label: 'Gewünschte Verteilung der Arbeitszeit',
      type: 'textarea',
      required: true,
      hint: 'Auf welche Wochentage und Uhrzeiten sich die Arbeitszeit verteilen soll.',
      example: 'Montag bis Freitag jeweils von 8:00 bis 13:00 Uhr.',
    },
    {
      id: 'befristungWunsch',
      label: 'Befristung / Brückenteilzeit (optional)',
      type: 'textarea',
      required: false,
      hint: 'Nur ausfüllen, wenn Sie die Verringerung von vornherein zeitlich begrenzen möchten (Brückenteilzeit nach § 9a TzBfG, mindestens 1 und höchstens 5 Jahre; Anspruch nur bei Arbeitgebern mit i. d. R. mehr als 45 Beschäftigten). Leer lassen für eine unbefristete Verringerung.',
      example:
        'Die Verringerung soll vom 01.11.2026 bis zum 31.10.2028 befristet sein; anschließend möchte ich zu meiner bisherigen vertraglichen Arbeitszeit zurückkehren.',
    },
  ],
  subjectTemplate: 'Antrag auf Verringerung der Arbeitszeit ab {{beginnDatum}} gemäß § 8 TzBfG',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit beantrage ich gemäß § 8 TzBfG die Verringerung meiner vertraglich vereinbarten Arbeitszeit auf {{wochenstunden}} Stunden pro Woche ab dem {{beginnDatum}}.

Die gewünschte Verteilung der Arbeitszeit stelle ich mir wie folgt vor: {{verteilung}}. Über abweichende Vorstellungen Ihrerseits spreche ich gerne mit Ihnen, um möglichst einvernehmlich eine Vereinbarung zu treffen.

Diese Verringerung beantrage ich zeitlich begrenzt als Brückenteilzeit nach § 9a TzBfG: {{befristungWunsch}}

Ich bitte Sie, mir Ihre Entscheidung spätestens einen Monat vor dem gewünschten Beginn schriftlich mitzuteilen. Sollte eine Ablehnung nicht rechtzeitig und nicht in dieser Form erfolgen, gilt die Verringerung gemäß § 8 Abs. 5 TzBfG als in dem beantragten Umfang und mit der vorgeschlagenen Verteilung festgelegt.

Bitte bestätigen Sie mir zunächst den Eingang dieses Antrags.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 8 Abs. 1 TzBfG',
      url: 'https://www.gesetze-im-internet.de/tzbfg/__8.html',
      note: 'Anspruch auf Verringerung der Arbeitszeit besteht, wenn das Arbeitsverhältnis länger als sechs Monate bestanden hat und der Arbeitgeber in der Regel mehr als 15 Arbeitnehmerinnen und Arbeitnehmer beschäftigt (§ 8 Abs. 7 TzBfG).',
    },
    {
      ref: '§ 8 Abs. 2 TzBfG',
      url: 'https://www.gesetze-im-internet.de/tzbfg/__8.html',
      note: 'Die Verringerung ist spätestens drei Monate vor dem gewünschten Beginn in Textform geltend zu machen; die gewünschte Verteilung der Arbeitszeit soll dabei angegeben werden.',
    },
    {
      ref: '§ 8 Abs. 5 TzBfG',
      url: 'https://www.gesetze-im-internet.de/tzbfg/__8.html',
      note: 'Lehnt der Arbeitgeber die Verringerung nicht spätestens einen Monat vor dem gewünschten Beginn schriftlich (mit eigenhändiger Unterschrift) ab, gilt sie in dem beantragten Umfang und mit der vorgeschlagenen Verteilung als festgelegt (Zustimmungsfiktion).',
    },
    {
      ref: '§ 9a TzBfG',
      url: 'https://www.gesetze-im-internet.de/tzbfg/__9a.html',
      note: 'Regelt die zeitlich begrenzte Verringerung der Arbeitszeit ("Brückenteilzeit", mindestens ein, höchstens fünf Jahre); der Anspruch besteht nur bei Arbeitgebern mit in der Regel mehr als 45 Arbeitnehmerinnen und Arbeitnehmern.',
    },
  ],
  explainer: {
    when:
      'Diesen Antrag stellen Sie, wenn Sie als Arbeitnehmerin oder Arbeitnehmer Ihre vertraglich vereinbarte Arbeitszeit dauerhaft verringern möchten – etwa wegen Familie, Pflege oder aus persönlichen Gründen. Voraussetzung ist, dass Ihr Arbeitsverhältnis länger als sechs Monate besteht und Ihr Arbeitgeber in der Regel mehr als 15 Beschäftigte hat (§ 8 Abs. 1 und Abs. 7 TzBfG).',
    deadline:
      'Reichen Sie den Antrag spätestens drei Monate vor dem gewünschten Beginn ein (§ 8 Abs. 2 TzBfG). Diese Frist ist besonders wichtig: Lehnt Ihr Arbeitgeber die Verringerung nicht spätestens einen Monat vor dem gewünschten Beginn schriftlich ab, gilt sie kraft Gesetzes in dem von Ihnen beantragten Umfang und mit der vorgeschlagenen Verteilung als festgelegt (§ 8 Abs. 5 TzBfG).',
    legal:
      'Rechtsgrundlage ist § 8 TzBfG. Ihr Antrag muss lediglich in Textform gestellt werden, z. B. auch per E-Mail – ein ausgedrucktes und unterschriebenes Schreiben wie dieses erfüllt diese Anforderung in jedem Fall und dient zugleich als Nachweis. Der Arbeitgeber muss der Verringerung zustimmen, soweit betriebliche Gründe nicht entgegenstehen; lehnt er ab, muss dies spätestens einen Monat vor dem gewünschten Beginn schriftlich – mit eigenhändiger Unterschrift – geschehen, sonst greift die gesetzliche Zustimmungsfiktion des § 8 Abs. 5 TzBfG. Wer die Verringerung von vornherein nur für einen begrenzten Zeitraum wünscht, kann stattdessen oder zusätzlich die "Brückenteilzeit" nach § 9a TzBfG beantragen; diese setzt voraus, dass der Arbeitgeber in der Regel mehr als 45 Arbeitnehmerinnen und Arbeitnehmer beschäftigt.',
  },
  faq: [
    {
      q: 'Wie lange vor dem gewünschten Beginn muss ich den Antrag stellen?',
      a: 'Spätestens drei Monate vor dem gewünschten Beginn der Arbeitszeitverringerung (§ 8 Abs. 2 TzBfG). Reichen Sie den Antrag möglichst frühzeitig ein, damit Ihr Arbeitgeber genügend Zeit für die Prüfung hat.',
    },
    {
      q: 'Muss ich den Antrag unterschreiben, oder reicht eine E-Mail?',
      a: 'Für Ihren Antrag genügt seit der Reform 2019 die Textform, eine E-Mail reicht also aus (§ 8 Abs. 2 TzBfG). Ein ausgedrucktes und unterschriebenes Schreiben wie dieses erfüllt diese Anforderung ebenfalls und dient zugleich als Nachweis über Inhalt und Zeitpunkt.',
    },
    {
      q: 'Was passiert, wenn mein Arbeitgeber nicht reagiert?',
      a: 'Lehnt Ihr Arbeitgeber die Verringerung nicht spätestens einen Monat vor dem gewünschten Beginn schriftlich – mit eigenhändiger Unterschrift – ab, gilt sie kraft Gesetzes in dem von Ihnen beantragten Umfang und mit der vorgeschlagenen Verteilung als festgelegt (§ 8 Abs. 5 TzBfG). Eine nur mündliche oder per E-Mail erklärte Ablehnung genügt dafür nach der Rechtsprechung nicht.',
    },
    {
      q: 'Für wen gilt der Anspruch überhaupt?',
      a: 'Ihr Arbeitsverhältnis muss länger als sechs Monate bestanden haben, und Ihr Arbeitgeber muss in der Regel mehr als 15 Arbeitnehmerinnen und Arbeitnehmer beschäftigen (§ 8 Abs. 1 und Abs. 7 TzBfG). In kleineren Betrieben besteht kein gesetzlicher Anspruch nach § 8 TzBfG.',
    },
    {
      q: 'Was ist der Unterschied zur Brückenteilzeit?',
      a: 'Der Antrag nach § 8 TzBfG betrifft eine unbefristete Verringerung der Arbeitszeit. Möchten Sie die Verringerung von vornherein zeitlich begrenzen (ein bis fünf Jahre) und anschließend automatisch zu Ihrer bisherigen Arbeitszeit zurückkehren, ist die "Brückenteilzeit" nach § 9a TzBfG die passende Grundlage – diese steht allerdings nur Beschäftigten in Betrieben mit in der Regel mehr als 45 Arbeitnehmerinnen und Arbeitnehmern offen.',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
