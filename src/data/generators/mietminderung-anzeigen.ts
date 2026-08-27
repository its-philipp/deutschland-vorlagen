import type { GeneratorConfig } from '../../lib/generator-config';

/**
 * Legal refs verified against gesetze-im-internet.de on 2026-07-12.
 */
const config: GeneratorConfig = {
  slug: 'mietminderung-anzeigen',
  category: 'mietrecht',
  categoryLabel: 'Mietrecht',
  h1: 'Mängelanzeige mit Mietminderung: Muster zum Ausfüllen',
  metaTitle: 'Mängelanzeige & Mietminderung: Kostenloses Muster 2026',
  metaDescription:
    'Mängel in der Mietwohnung anzeigen und Mietminderung ankündigen: Schreiben online ausfüllen und als PDF speichern – kostenlos, mit § 536 BGB.',
  intro:
    'Mit diesem Generator zeigen Sie Ihrem Vermieter einen Mangel an Ihrer Mietwohnung an und kündigen zugleich eine Mietminderung an – als fertiges Schreiben zum Ausfüllen, direkt im Browser.',
  fields: [
    {
      id: 'mangelBeschreibung',
      label: 'Beschreibung des Mangels',
      type: 'textarea',
      required: true,
      hint: 'Beschreiben Sie Art, Ort und Ausmaß des Mangels möglichst genau.',
      example: 'Schimmelbildung an der Außenwand im Schlafzimmer, ca. 1 m² großer Fleck unterhalb des Fensters',
    },
    {
      id: 'mangelSeitDatum',
      label: 'Mangel besteht seit / aufgefallen am',
      type: 'date',
      required: true,
      hint: 'Datum, an dem der Mangel aufgetreten ist oder Ihnen erstmals aufgefallen ist.',
      example: '01.07.2026',
    },
    {
      id: 'minderungProzent',
      label: 'Geplante Minderung in %',
      type: 'text',
      required: true,
      hint: 'Prozentsatz, um den Sie die Miete mindern möchten. Die angemessene Höhe hängt vom Einzelfall ab (siehe Erklärung unten).',
      example: '20',
    },
    {
      id: 'beseitigungsfrist',
      label: 'Frist zur Mängelbeseitigung',
      type: 'text',
      required: true,
      hint: 'Angemessene Frist, innerhalb derer der Vermieter den Mangel beheben soll.',
      example: '14 Tage',
    },
  ],
  subjectTemplate:
    'Mängelanzeige und Ankündigung der Mietminderung ab {{mangelSeitDatum}}',
  bodyTemplate: `Sehr geehrte Damen und Herren,

hiermit zeige ich Ihnen gemäß § 536c BGB an, dass die von mir gemietete Wohnung seit dem {{mangelSeitDatum}} folgenden Mangel aufweist:

{{mangelBeschreibung}}

Ich fordere Sie auf, den Mangel innerhalb einer Frist von {{beseitigungsfrist}} ab Zugang dieses Schreibens zu beseitigen.

Da die Tauglichkeit der Mietsache durch den Mangel gemindert ist, mindere ich die Miete gemäß § 536 BGB ab sofort um {{minderungProzent}} % bis zur vollständigen Beseitigung des Mangels. Zukünftige Zahlungen erfolgen entsprechend gemindert; das Recht, bereits gezahlte Beträge zurückzufordern, behalte ich mir vor.

Bitte bestätigen Sie mir den Erhalt dieses Schreibens sowie einen Termin zur Mängelbeseitigung schriftlich.

Mit freundlichen Grüßen

{{absenderName}}`,
  legalBasis: [
    {
      ref: '§ 536 BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__536.html',
      note: 'Mindert ein Mangel die Tauglichkeit der Mietsache zum vertragsgemäßen Gebrauch, ist die Miete kraft Gesetzes angemessen herabgesetzt; eine unerhebliche Minderung der Tauglichkeit bleibt außer Betracht.',
    },
    {
      ref: '§ 536c BGB',
      url: 'https://www.gesetze-im-internet.de/bgb/__536c.html',
      note: 'Der Mieter muss einen während der Mietzeit auftretenden Mangel dem Vermieter unverzüglich anzeigen. Unterlässt er dies, haftet er für den daraus entstehenden Schaden und kann seine Rechte aus § 536 BGB verlieren, soweit der Vermieter wegen der fehlenden Anzeige nicht abhelfen konnte.',
    },
  ],
  explainer: {
    whenHeading: 'Wann ist eine Mietminderung möglich?',
    deadlineHeading: 'Ab wann können Sie die Miete mindern?',
    legalHeading: 'Was das BGB zum Mangel der Mietsache sagt',
    when:
      'Dieses Schreiben nutzen Sie, wenn an Ihrer Mietwohnung ein Mangel auftritt, der deren Nutzung beeinträchtigt – etwa Schimmel, ein Heizungsausfall oder Feuchtigkeitsschäden. Die Mängelanzeige informiert den Vermieter offiziell und ist Voraussetzung dafür, dass Sie Ihr Recht auf Mietminderung nicht gefährden.',
    deadline:
      'Eine feste gesetzliche Frist für die Anzeige gibt es nicht – § 536c BGB verlangt lediglich, dass Sie „unverzüglich“, also ohne schuldhaftes Zögern, anzeigen. Für die Mängelbeseitigung selbst räumen Sie dem Vermieter in diesem Schreiben eine angemessene Frist ein.',
    legal:
      'Die Mietminderung tritt bei einem erheblichen Mangel kraft Gesetzes ein (§ 536 BGB) – Sie müssen sie nicht gesondert „beantragen“, sollten sie aber ankündigen und dokumentieren. Voraussetzung ist, dass Sie den Mangel unverzüglich anzeigen (§ 536c BGB); andernfalls können Ihre Rechte eingeschränkt sein. Wie hoch die angemessene Minderung im Einzelfall ausfällt, hängt vom konkreten Mangel und seinem Ausmaß ab – bekannte Mietminderungstabellen bieten hierzu lediglich eine grobe Orientierung, keine verbindliche Vorgabe.',
  },
  faq: [
    {
      q: 'Muss ich den Mangel zuerst anzeigen, bevor ich die Miete mindere?',
      a: 'Ja. Nach § 536c BGB müssen Sie einen während der Mietzeit auftretenden Mangel dem Vermieter unverzüglich anzeigen. Unterlassen Sie die Anzeige, können Sie Ihr Recht auf Mietminderung verlieren, soweit der Vermieter den Mangel mangels Kenntnis nicht beheben konnte.',
    },
    {
      q: 'Wie hoch darf ich die Miete mindern?',
      a: 'Das Gesetz nennt keinen festen Prozentsatz – die Minderung muss „angemessen“ sein und richtet sich nach dem Ausmaß der Beeinträchtigung (§ 536 BGB). Häufig zitierte Mietminderungstabellen aus der Rechtsprechung geben eine Orientierung, sind aber nicht verbindlich, da jeder Fall individuell zu bewerten ist.',
    },
    {
      q: 'Ab wann gilt die Minderung – ab der Anzeige oder rückwirkend?',
      a: 'Die Minderung tritt kraft Gesetzes bereits mit dem Auftreten des Mangels ein, nicht erst mit der Anzeige. Praktisch ist es aber ratsam, den Mangel zügig anzuzeigen und die Minderung schriftlich anzukündigen, um Streit über den Zeitpunkt zu vermeiden.',
    },
    {
      q: 'Was passiert, wenn der Vermieter die Frist zur Mängelbeseitigung verstreichen lässt?',
      a: 'Reagiert der Vermieter nicht oder beseitigt er den Mangel nicht fristgerecht, kann je nach Fall neben der fortlaufenden Minderung auch ein Anspruch auf Selbstbeseitigung mit Kostenerstattung oder Schadensersatz nach § 536a BGB in Betracht kommen. Prüfen Sie die weiteren Schritte im Einzelfall.',
    },
    {
      q: 'Kann ich die Miete auch dann mindern, wenn ich den Mangel selbst verursacht habe?',
      a: 'Nein. Das Minderungsrecht nach § 536 BGB setzt einen Mangel der Mietsache voraus, den nicht der Mieter selbst zu vertreten hat. Haben Sie den Mangel durch eigenes Verhalten verursacht, scheidet eine Minderung in der Regel aus.',
    },
  ],
  lastReviewed: '2026-07-12',
};

export default config;
