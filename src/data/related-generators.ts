import { generators } from './registry';
import type { GeneratorConfig } from '../lib/generator-config';

/**
 * Which letters belong to the same situation — the cross-links between
 * generator pages.
 *
 * Why this file exists: until 2026-08-27 not one of the 35 generator pages
 * linked to another generator page. Every letter was an island reachable only
 * from its category hub and the homepage, which Search Console counted as
 * exactly two internal links per page, and 14 URLs sat under "Discovered –
 * currently not indexed" for want of a crawl path.
 *
 * The grouping follows the SITUATION, not the category. Someone moving out of
 * a flat needs the termination, the successor tenant, the deposit and the
 * service-charge statement — and then the electricity contract, which lives
 * under `vertraege`. Grouping by category would have rebuilt the hubs we
 * already have; grouping by situation is what the reader is actually doing.
 *
 * Each entry carries its own `note`, so the block reads differently on every
 * page instead of becoming the next constant (the "Zum Weiterlesen" block
 * pointed 21 of 35 pages at the same two guides — that is the pattern to
 * avoid, not to repeat).
 */
export interface RelatedCluster {
  /** One sentence naming the situation these letters share. German, "Sie". */
  note: string;
  /** Generator slugs, most closely related first. 3–4 entries. */
  slugs: string[];
}

export const RELATED_GENERATORS: Record<string, RelatedCluster> = {
  // — Auszug aus der Mietwohnung —————————————————————————————————
  'kuendigung-mietvertrag': {
    note: 'Ein Auszug ist selten mit einem Schreiben erledigt — das kommt meist dazu:',
    slugs: [
      'nachmieter-vorschlagen',
      'kaution-zurueckfordern',
      'widerspruch-nebenkostenabrechnung',
      'kuendigung-stromvertrag',
    ],
  },
  'nachmieter-vorschlagen': {
    note: 'Wer früher aus dem Vertrag will, braucht meist mehr als den Nachmietervorschlag:',
    slugs: [
      'kuendigung-mietvertrag',
      'kaution-zurueckfordern',
      'untermieterlaubnis-anfragen',
    ],
  },
  'kaution-zurueckfordern': {
    note: 'Nach dem Auszug hängen diese Schreiben meist am selben Vorgang:',
    slugs: [
      'widerspruch-nebenkostenabrechnung',
      'kuendigung-mietvertrag',
      'nachmieter-vorschlagen',
    ],
  },
  'widerspruch-nebenkostenabrechnung': {
    note: 'Wer die Abrechnung prüft, hat oft noch mit diesen Punkten zu tun:',
    slugs: [
      'kaution-zurueckfordern',
      'mietminderung-anzeigen',
      'kuendigung-mietvertrag',
    ],
  },

  // — Probleme in der Wohnung ————————————————————————————————————
  'mietminderung-anzeigen': {
    note: 'Mängel und Störungen in der Wohnung — die passenden Schreiben dazu:',
    slugs: [
      'laermbelaestigung-beschwerde',
      'widerspruch-nebenkostenabrechnung',
      'maengelruege-handwerker',
    ],
  },
  'laermbelaestigung-beschwerde': {
    note: 'Wenn die Störung bleibt, geht es meist mit diesen Schreiben weiter:',
    slugs: [
      'mietminderung-anzeigen',
      'kuendigung-mietvertrag',
      'widerspruch-nebenkostenabrechnung',
    ],
  },
  'haustierhaltung-erlaubnis': {
    note: 'Was Sie sonst noch vom Vermieter erlaubt bekommen müssen:',
    slugs: [
      'untermieterlaubnis-anfragen',
      'nachmieter-vorschlagen',
      'mietminderung-anzeigen',
    ],
  },
  'untermieterlaubnis-anfragen': {
    note: 'Rund um die Frage, wer außer Ihnen in der Wohnung wohnen darf:',
    slugs: [
      'haustierhaltung-erlaubnis',
      'nachmieter-vorschlagen',
      'kuendigung-mietvertrag',
    ],
  },

  // — Das Arbeitsverhältnis endet ————————————————————————————————
  'kuendigung-arbeitsvertrag': {
    note: 'Zum Ende eines Arbeitsverhältnisses gehören meist noch diese Schreiben:',
    slugs: [
      'arbeitszeugnis-anfordern',
      'urlaubsabgeltung-fordern',
      'ueberstunden-auszahlung',
    ],
  },
  'arbeitszeugnis-anfordern': {
    note: 'Was Ihnen nach dem letzten Arbeitstag sonst noch zusteht:',
    slugs: [
      'urlaubsabgeltung-fordern',
      'ueberstunden-auszahlung',
      'kuendigung-arbeitsvertrag',
    ],
  },
  'urlaubsabgeltung-fordern': {
    note: 'Offene Ansprüche nach Vertragsende — diese Schreiben gehören dazu:',
    slugs: [
      'ueberstunden-auszahlung',
      'arbeitszeugnis-anfordern',
      'kuendigung-arbeitsvertrag',
    ],
  },
  'ueberstunden-auszahlung': {
    note: 'Wenn es um Arbeitszeit und offene Ansprüche geht:',
    slugs: [
      'urlaubsabgeltung-fordern',
      'teilzeit-antrag',
      'arbeitszeugnis-anfordern',
    ],
  },

  // — Arbeitszeit ändern ——————————————————————————————————————————
  'teilzeit-antrag': {
    note: 'Anträge, mit denen Sie Ihre Arbeitszeit verändern:',
    slugs: ['elternzeit-antrag', 'ueberstunden-auszahlung', 'urlaubsabgeltung-fordern'],
  },
  'elternzeit-antrag': {
    note: 'Rund um Elternzeit und die Rückkehr in den Beruf:',
    slugs: ['teilzeit-antrag', 'ueberstunden-auszahlung', 'arbeitszeugnis-anfordern'],
  },

  // — Forderung, Inkasso, Schufa ——————————————————————————————————
  'widerspruch-inkasso-forderung': {
    note: 'Eine bestrittene Forderung zieht meist weitere Schritte nach sich:',
    slugs: [
      'schufa-eintrag-loeschung',
      'datenauskunft-dsgvo',
      'p-konto-umwandlung',
    ],
  },
  'schufa-eintrag-loeschung': {
    note: 'Wenn es um Ihre Daten und Ihre Bonität geht:',
    slugs: [
      'datenauskunft-dsgvo',
      'widerspruch-inkasso-forderung',
      'p-konto-umwandlung',
    ],
  },
  'p-konto-umwandlung': {
    note: 'Bei einer Pfändung sind das die Schreiben, die meist zusammengehören:',
    slugs: [
      'widerspruch-inkasso-forderung',
      'schufa-eintrag-loeschung',
      'kuendigung-girokonto',
    ],
  },
  'datenauskunft-dsgvo': {
    note: 'Was Sie mit der Auskunft anfangen können, wenn etwas nicht stimmt:',
    slugs: [
      'schufa-eintrag-loeschung',
      'widerspruch-inkasso-forderung',
      'akteneinsicht-behoerde',
    ],
  },

  // — Behörden und Bescheide ——————————————————————————————————————
  'widerspruch-bescheid': {
    note: 'Wenn Sie gegen eine Entscheidung der Behörde vorgehen:',
    slugs: [
      'akteneinsicht-behoerde',
      'einspruch-bussgeldbescheid',
      'rundfunkbeitrag-befreiung',
    ],
  },
  'akteneinsicht-behoerde': {
    note: 'Erst sehen, worauf sich die Behörde stützt — dann widersprechen:',
    slugs: [
      'widerspruch-bescheid',
      'datenauskunft-dsgvo',
      'einspruch-bussgeldbescheid',
    ],
  },
  'einspruch-bussgeldbescheid': {
    note: 'Andere Schreiben, mit denen Sie amtlichen Entscheidungen widersprechen:',
    slugs: [
      'widerspruch-bescheid',
      'akteneinsicht-behoerde',
      'rundfunkbeitrag-befreiung',
    ],
  },
  'rundfunkbeitrag-befreiung': {
    note: 'Weitere Schreiben an Behörden und öffentliche Stellen:',
    slugs: [
      'widerspruch-bescheid',
      'akteneinsicht-behoerde',
      'p-konto-umwandlung',
    ],
  },

  // — Gekaufte Ware, beauftragte Arbeit ————————————————————————————
  'reklamation-kaufvertrag': {
    note: 'Wenn eine Ware oder Leistung nicht in Ordnung ist:',
    slugs: [
      'widerruf-online-kauf',
      'maengelruege-handwerker',
      'fluggastrechte-entschaedigung',
      'widerspruch-inkasso-forderung',
    ],
  },
  'widerruf-online-kauf': {
    note: 'Widerruf, Reklamation oder Mängelrüge — was in Ihrem Fall passt:',
    slugs: [
      'reklamation-kaufvertrag',
      'maengelruege-handwerker',
      'kuendigung-streaming-abo',
    ],
  },
  'maengelruege-handwerker': {
    note: 'Wenn eine beauftragte Arbeit nicht stimmt, gehört das oft dazu:',
    slugs: [
      'reklamation-kaufvertrag',
      'mietminderung-anzeigen',
      'widerspruch-inkasso-forderung',
    ],
  },
  'fluggastrechte-entschaedigung': {
    note: 'Weitere Schreiben, mit denen Sie Geld zurückfordern:',
    slugs: [
      'reklamation-kaufvertrag',
      'widerruf-online-kauf',
      'kaution-zurueckfordern',
    ],
  },

  // — Laufende Verträge beenden ————————————————————————————————————
  'kuendigung-handyvertrag': {
    note: 'Laufende Verträge, die Menschen meist im selben Zug kündigen:',
    slugs: [
      'kuendigung-streaming-abo',
      'kuendigung-stromvertrag',
      'kuendigung-fitnessstudio',
    ],
  },
  'kuendigung-streaming-abo': {
    note: 'Abos und Verträge, die oft zusammen beendet werden:',
    slugs: [
      'kuendigung-handyvertrag',
      'kuendigung-fitnessstudio',
      'widerruf-online-kauf',
    ],
  },
  'kuendigung-fitnessstudio': {
    note: 'Verträge mit fester Laufzeit — die übrigen Kündigungsschreiben:',
    slugs: [
      'kuendigung-handyvertrag',
      'kuendigung-streaming-abo',
      'widerspruch-inkasso-forderung',
    ],
  },
  'kuendigung-stromvertrag': {
    note: 'Beim Umzug oder Anbieterwechsel kommen diese Schreiben zusammen:',
    slugs: [
      'kuendigung-mietvertrag',
      'kuendigung-handyvertrag',
      'kuendigung-girokonto',
    ],
  },

  // — Versicherungen und Bank —————————————————————————————————————
  'kuendigung-kfz-versicherung': {
    note: 'Weitere Versicherungen, die zum Stichtag gekündigt werden:',
    slugs: [
      'kuendigung-haftpflichtversicherung',
      'kuendigung-hausratversicherung',
      'widerspruch-beitragserhoehung-pkv',
    ],
  },
  'kuendigung-haftpflichtversicherung': {
    note: 'Die übrigen Versicherungsschreiben auf dieser Seite:',
    slugs: [
      'kuendigung-hausratversicherung',
      'kuendigung-kfz-versicherung',
      'widerspruch-beitragserhoehung-pkv',
    ],
  },
  'kuendigung-hausratversicherung': {
    note: 'Wenn Sie Ihre Versicherungen insgesamt durchgehen:',
    slugs: [
      'kuendigung-haftpflichtversicherung',
      'kuendigung-kfz-versicherung',
      'kuendigung-mietvertrag',
    ],
  },
  'widerspruch-beitragserhoehung-pkv': {
    note: 'Wenn ein Beitrag steigt — widersprechen oder wechseln:',
    slugs: [
      'kuendigung-haftpflichtversicherung',
      'kuendigung-kfz-versicherung',
      'widerspruch-bescheid',
    ],
  },
  'kuendigung-girokonto': {
    note: 'Rund um Konto und Zahlungsverkehr:',
    slugs: [
      'p-konto-umwandlung',
      'kuendigung-stromvertrag',
      'datenauskunft-dsgvo',
    ],
  },
};

/**
 * The related letters for one generator, resolved to configs.
 *
 * A slug that no longer exists is dropped rather than rendered as a dead
 * link; `npm run check:related` is what turns that into a visible error.
 * Where no cluster is defined, the fallback is the rest of the category —
 * worse than a hand-picked cluster, but never a dead end.
 */
export function relatedFor(config: GeneratorConfig): {
  note: string;
  items: GeneratorConfig[];
} {
  const cluster = RELATED_GENERATORS[config.slug];

  if (cluster) {
    const items = cluster.slugs
      .map((slug) => generators.find((g) => g.slug === slug))
      .filter((g): g is GeneratorConfig => Boolean(g) && g!.slug !== config.slug);
    if (items.length > 0) return { note: cluster.note, items };
  }

  return {
    note: `Weitere Schreiben aus dem Bereich ${config.categoryLabel}:`,
    items: generators
      .filter((g) => g.category === config.category && g.slug !== config.slug)
      .slice(0, 3),
  };
}
