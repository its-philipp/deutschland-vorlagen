import type { GeneratorConfig } from '../lib/generator-config';
import type { IconName } from '../lib/icons';
import einspruchBussgeldbescheid from './generators/einspruch-bussgeldbescheid';
import mietminderungAnzeigen from './generators/mietminderung-anzeigen';
import kautionZurueckfordern from './generators/kaution-zurueckfordern';
import widerspruchNebenkostenabrechnung from './generators/widerspruch-nebenkostenabrechnung';
import widerspruchInkassoForderung from './generators/widerspruch-inkasso-forderung';
import elternzeitAntrag from './generators/elternzeit-antrag';
import untermieterlaubnisAnfragen from './generators/untermieterlaubnis-anfragen';
import maengelruegeHandwerker from './generators/maengelruege-handwerker';
import fluggastrechteEntschaedigung from './generators/fluggastrechte-entschaedigung';
import kuendigungFitnessstudio from './generators/kuendigung-fitnessstudio';
import kuendigungMietvertrag from './generators/kuendigung-mietvertrag';
import haustierhaltungErlaubnis from './generators/haustierhaltung-erlaubnis';
import laermbelaestigungBeschwerde from './generators/laermbelaestigung-beschwerde';
import nachmieterVorschlagen from './generators/nachmieter-vorschlagen';
import kuendigungArbeitsvertrag from './generators/kuendigung-arbeitsvertrag';
import arbeitszeugnisAnfordern from './generators/arbeitszeugnis-anfordern';
import teilzeitAntrag from './generators/teilzeit-antrag';
import urlaubsabgeltungFordern from './generators/urlaubsabgeltung-fordern';
import widerrufOnlineKauf from './generators/widerruf-online-kauf';
import reklamationKaufvertrag from './generators/reklamation-kaufvertrag';
import kuendigungHandyvertrag from './generators/kuendigung-handyvertrag';
import kuendigungKfzVersicherung from './generators/kuendigung-kfz-versicherung';
import widerspruchBescheid from './generators/widerspruch-bescheid';
import kuendigungHausratversicherung from './generators/kuendigung-hausratversicherung';
import kuendigungHaftpflichtversicherung from './generators/kuendigung-haftpflichtversicherung';
import widerspruchBeitragserhoehungPkv from './generators/widerspruch-beitragserhoehung-pkv';
import kuendigungGirokonto from './generators/kuendigung-girokonto';
import pKontoUmwandlung from './generators/p-konto-umwandlung';
import rundfunkbeitragBefreiung from './generators/rundfunkbeitrag-befreiung';
import akteneinsichtBehoerde from './generators/akteneinsicht-behoerde';
import kuendigungStreamingAbo from './generators/kuendigung-streaming-abo';
import datenauskunftDsgvo from './generators/datenauskunft-dsgvo';
import kuendigungStromvertrag from './generators/kuendigung-stromvertrag';
import schufaEintragLoeschung from './generators/schufa-eintrag-loeschung';
import ueberstundenAuszahlung from './generators/ueberstunden-auszahlung';

/** All live generators. Add each new config here — order = display order
 *  (batch order: docs/CONCEPT.md launch backlog first, then batch 2). */
export const generators: GeneratorConfig[] = [
  // Batch 1 (launch backlog #1–#10)
  einspruchBussgeldbescheid,
  mietminderungAnzeigen,
  kautionZurueckfordern,
  widerspruchNebenkostenabrechnung,
  widerspruchInkassoForderung,
  elternzeitAntrag,
  untermieterlaubnisAnfragen,
  maengelruegeHandwerker,
  fluggastrechteEntschaedigung,
  kuendigungFitnessstudio,
  // Batch 2
  kuendigungMietvertrag,
  haustierhaltungErlaubnis,
  laermbelaestigungBeschwerde,
  nachmieterVorschlagen,
  kuendigungArbeitsvertrag,
  arbeitszeugnisAnfordern,
  teilzeitAntrag,
  urlaubsabgeltungFordern,
  widerrufOnlineKauf,
  reklamationKaufvertrag,
  kuendigungHandyvertrag,
  kuendigungKfzVersicherung,
  widerspruchBescheid,
  // Batch 3 — grows versicherung (Versicherung & Bank) and behoerden, which
  // were the two thinnest hubs after batch 2.
  kuendigungHausratversicherung,
  kuendigungHaftpflichtversicherung,
  widerspruchBeitragserhoehungPkv,
  kuendigungGirokonto,
  pKontoUmwandlung,
  rundfunkbeitragBefreiung,
  akteneinsichtBehoerde,
  kuendigungStreamingAbo,
  datenauskunftDsgvo,
  kuendigungStromvertrag,
  schufaEintragLoeschung,
  ueberstundenAuszahlung,
];

export interface Category {
  slug: string;
  label: string;
  generators: GeneratorConfig[];
}

/** Sprite icon per category (src/components/IconSprite.astro). Per-letter
 *  marks live in generator-icons.ts. */
export const CATEGORY_ICONS: Record<string, IconName> = {
  mietrecht: 'key',
  arbeit: 'case',
  vertraege: 'doc',
  versicherung: 'shield',
  behoerden: 'stamp',
};

/**
 * Accent colour per category. Taken from the logo (Siegelrot und Aktenocker
 * sind die entsättigten Schwarz-Rot-Gold-Streifen, Stempelblau die Marke) und
 * dem Aktendeckelgrün, damit die Seite Abwechslung bekommt, ohne aus dem
 * Farbklima zu fallen. Alle fünf liegen über 4,5:1 auf Weiß.
 *
 * Gilt für Reiter, Kartenkante und Icons — also alles, was eine Seite einem
 * Rechtsgebiet zuordnet. Bedienelemente (Knöpfe, Suche, Links) bleiben
 * Stempelblau: eine Farbe heißt "hier kann man etwas tun", die anderen heißen
 * "hier ist man".
 */
export const CATEGORY_ACCENTS: Record<string, string> = {
  mietrecht: '#2F6B54', // Kanzleigrün
  vertraege: '#8C2F2A', // Siegelrot
  arbeit: '#6B4A2F', // Leder
  versicherung: '#8A6A1F', // Aktenocker
  behoerden: '#2B4C7E', // Stempelblau
};

/** Fallback accent — the brand's own blue. */
export const DEFAULT_ACCENT = '#2B4C7E';

export function accentFor(categorySlug: string): string {
  return CATEGORY_ACCENTS[categorySlug] ?? DEFAULT_ACCENT;
}

/** Shortened tab labels — the hub labels are too long for a single tab row. */
export const CATEGORY_NAV_LABELS: Record<string, string> = {
  mietrecht: 'Mietrecht',
  vertraege: 'Verträge',
  arbeit: 'Arbeit',
  versicherung: 'Versicherung',
  behoerden: 'Behörden',
};

/** Display order of the categories (navigation, hub cards, homepage list).
 *  Deliberate, not batch order: everyday topics first, Behörden last. */
const CATEGORY_ORDER = ['mietrecht', 'vertraege', 'arbeit', 'versicherung', 'behoerden'];

export function categories(): Category[] {
  const map = new Map<string, Category>();
  for (const g of generators) {
    const existing = map.get(g.category);
    if (existing) {
      existing.generators.push(g);
    } else {
      map.set(g.category, {
        slug: g.category,
        label: g.categoryLabel,
        generators: [g],
      });
    }
  }
  return [...map.values()].sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a.slug);
    const bi = CATEGORY_ORDER.indexOf(b.slug);
    // A category missing from the order list sorts last rather than first.
    return (ai < 0 ? Infinity : ai) - (bi < 0 ? Infinity : bi);
  });
}

export function generatorPath(g: GeneratorConfig): string {
  return `/${g.category}/${g.slug}/`;
}
