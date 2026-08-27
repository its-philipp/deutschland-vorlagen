import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de am 2026-07-12.
 */
const config: GeneratorConfig = {
  slug: 'laermbelaestigung-beschwerde',
  category: 'mietrecht',
  categoryLabel: 'Mietrecht',
  h1: 'Beschwerde wegen Lärmbelästigung: Muster zum Ausfüllen',
  metaTitle: 'Beschwerde Lärmbelästigung: Kostenloses Muster 2026 (Generator)',
  metaDescription:
    'Lärmbelästigung durch Nachbarn beim Vermieter melden: Beschwerde online ausfüllen und als PDF speichern – kostenlos, mit § 535 BGB im Blick.',
  intro:
    'Mit diesem Generator beschweren Sie sich bei Ihrem Vermieter über anhaltende Lärmbelästigung durch eine andere Mietpartei und fordern ihn zum Handeln auf – als fertiges Schreiben zum Ausfüllen, direkt im Browser.',
  fields: [
    {
      id: 'stoerungsBeschreibung',
      label: 'Beschreibung der Störung',
      type: 'textarea',
      required: true,
      hint: 'Beschreiben Sie Art und Ausmaß des Lärms möglichst konkret.',
      example: 'Regelmäßig sehr laute Musik und Türenschlagen, teils bis in die frühen Morgenstunden.',
    },
    {
      id: 'zeitenHaeufigkeit',
      label: 'Zeiten und Häufigkeit',
      type: 'textarea',
      required: true,
      hint: 'Nennen Sie Uhrzeiten, Wochentage und wie oft die Störung auftritt – ein kurzes Lärmprotokoll stützt Ihre Beschwerde.',
      example: 'Fast täglich zwischen 23 und 2 Uhr, besonders auffällig an Wochenenden.',
    },
    {
      id: 'verursacherWohnung',
      label: 'Wohnung/Stockwerk des Verursachers (freiwillig)',
      type: 'text',
      required: false,
      hint: 'Optional: Lage der Wohnung, von der die Störung ausgeht, falls Ihnen bekannt.',
      example: '3. Obergeschoss rechts',
    },
    {
      id: 'frist',
      label: 'Frist zur Abhilfe',
      type: 'text',
      required: true,
      hint: 'Angemessene Frist, innerhalb derer Sie eine Reaktion des Vermieters erwarten.',
      example: '14 Tage',
    },
  ],
  subjectTemplate: 'Beschwerde wegen anhaltender Lärmbelästigung',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit beschwere ich mich über eine anhaltende Lärmbelästigung, die von einer anderen Mietpartei in unserem Haus ausgeht:

{{stoerungsBeschreibung}}

Die Störung tritt wie folgt auf: {{zeitenHaeufigkeit}}

Nach meiner Kenntnis kommt der Lärm aus der Wohnung im {{verursacherWohnung}}.

Als Vermieter sind Sie mir gegenüber verpflichtet, den vertragsgemäßen Gebrauch meiner Wohnung sicherzustellen; dazu gehört auch die Sorge für den Hausfrieden (§ 535 Abs. 1 BGB). Ich bitte Sie daher, innerhalb von {{frist}} geeignete Maßnahmen zu ergreifen, etwa die verursachende Mietpartei anzusprechen und zur Unterlassung aufzufordern.

Sollte sich die Lärmbelästigung fortsetzen, behalte ich mir vor zu prüfen, ob hierin ein Mangel meiner Mietsache liegt und mir deshalb weitere Rechte, insbesondere auf Mietminderung, zustehen.

Bitte bestätigen Sie mir den Erhalt dieses Schreibens sowie die von Ihnen eingeleiteten Schritte.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 535 Abs. 1 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__535.html',
      note: 'Der Vermieter muss dem Mieter den vertragsgemäßen Gebrauch der Mietsache gewähren und erhalten; dazu gehört nach ständiger Praxis auch das Einschreiten, wenn eine andere Mietpartei den Hausfrieden nachhaltig stört.',
    },
    {
      ref: '§ 536 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__536.html',
      note: 'Mindert ein Mangel die Tauglichkeit der Mietsache zum vertragsgemäßen Gebrauch, ist die Miete kraft Gesetzes angemessen herabgesetzt. Anhaltender, vom Vermieter nicht abgestellter Lärm kann einen solchen Mangel begründen.',
    },
  ],
  explainer: {
    whenHeading: 'Wann ist eine Beschwerde angebracht?',
    deadlineHeading: 'Wann sollten Sie den Lärm anzeigen?',
    legalHeading: 'Wann Lärm ein Mangel der Wohnung ist',
    when:
      'Dieses Schreiben nutzen Sie, wenn Sie sich durch andauernden Lärm einer anderen Mietpartei in Ihrem Haus gestört fühlen – etwa durch laute Musik, Partys oder Trittschall zur Unzeit – und Ihren Vermieter förmlich auffordern möchten, dagegen vorzugehen.',
    deadline:
      'Eine gesetzlich vorgeschriebene Frist gibt es für diese Beschwerde nicht. Sinnvoll ist eine angemessene Frist von beispielsweise ein bis zwei Wochen, damit der Vermieter reagieren und mit der störenden Mietpartei sprechen kann. Ein Lärmprotokoll mit Datum, Uhrzeit, Dauer und Art der Störung untermauert Ihre Angaben.',
    legal:
      'Der Vermieter ist verpflichtet, Ihnen den vertragsgemäßen Gebrauch der Mietsache zu erhalten; dazu gehört nach ständiger Praxis auch die Sorge für den Hausfrieden, wenn eine andere Mietpartei diesen nachhaltig stört (§ 535 Abs. 1 BGB). Bleibt der Vermieter trotz Kenntnis untätig, kann anhaltender Lärm als Mangel der eigenen Mietsache gewertet werden, der unter Umständen ein Recht auf Mietminderung begründet (§ 536 BGB). Ob und in welcher Höhe eine Minderung im Einzelfall gerechtfertigt ist, hängt von Art, Dauer und Nachweisbarkeit der Störung ab und sollte erst nach sorgfältiger Dokumentation geprüft werden.',
  },
  faq: [
    {
      q: 'Muss ich den Lärm zunächst dokumentieren?',
      a: 'Nicht zwingend, aber dringend empfohlen. Ein Lärmprotokoll mit Datum, Uhrzeit, Dauer und Art der Störung erleichtert es, die Beschwerde zu belegen und spätere Schritte nachvollziehbar zu begründen.',
    },
    {
      q: 'Kann ich wegen Lärmbelästigung sofort die Miete mindern?',
      a: 'Nicht automatisch. Zunächst müssen Sie den Vermieter über die Störung informieren und ihm Gelegenheit geben, tätig zu werden. Erst wenn ein erheblicher Mangel vorliegt und dieser angezeigt wurde, kommt eine Mietminderung nach § 536 BGB in Betracht – die Höhe hängt vom Einzelfall ab.',
    },
    {
      q: 'Was kann der Vermieter gegen die lärmende Mietpartei unternehmen?',
      a: 'Üblich sind zunächst eine Ansprache oder schriftliche Abmahnung der störenden Mietpartei. Hält die Störung trotzdem an, kann der Vermieter im Einzelfall weitergehende Schritte prüfen, etwa eine Kündigung gegenüber der störenden Mietpartei.',
    },
    {
      q: 'Was, wenn der Vermieter nicht reagiert?',
      a: 'Reagiert der Vermieter nicht innerhalb der gesetzten Frist, sollten Sie schriftlich nachfassen und die Störungen weiter dokumentieren. Je nach Ausmaß der Beeinträchtigung kann dann eine Mietminderung sinnvoll sein.',
    },
    {
      q: 'Gilt dieses Schreiben auch für Baulärm oder Lärm von außerhalb des Hauses?',
      a: 'Dieses Schreiben ist auf Störungen durch eine andere Mietpartei im selben Haus zugeschnitten. Bei Baulärm, Verkehrslärm oder anderen externen Quellen gelten teils andere Zuständigkeiten und Maßstäbe; sprechen Sie Ihren Vermieter dennoch an, wenn die Störung von einer Wohnung ausgeht, für die er verantwortlich ist.',
    },
  ],
  lastReviewed: '2026-07-13',
};

export default config;
