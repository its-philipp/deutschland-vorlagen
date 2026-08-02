import type { IconName } from '../lib/icons';
import type { GeneratorConfig } from '../lib/generator-config';
import { CATEGORY_ICONS } from './registry';

/**
 * One mark per letter, keyed by slug. Chosen by subject where the subject has
 * a picture (Flug, Strom, Auto, Haustier) and by what the letter *does* where
 * it does not (Kündigung, Widerspruch, Geldforderung) — the point is that two
 * neighbouring cards in the same hub never carry the same mark.
 *
 * Every new generator needs an entry here; without one the card falls back to
 * its category mark, which is correct but says nothing.
 */
export const GENERATOR_ICONS: Record<string, IconName> = {
  // Mietrecht
  'mietminderung-anzeigen': 'warning',
  'kaution-zurueckfordern': 'euro',
  'widerspruch-nebenkostenabrechnung': 'receipt',
  'untermieterlaubnis-anfragen': 'users',
  'kuendigung-mietvertrag': 'contract-x',
  'haustierhaltung-erlaubnis': 'paw',
  'laermbelaestigung-beschwerde': 'sound',
  'nachmieter-vorschlagen': 'home',

  // Verträge & Verbraucher
  'widerspruch-inkasso-forderung': 'objection',
  'maengelruege-handwerker': 'warning',
  'fluggastrechte-entschaedigung': 'plane',
  'kuendigung-fitnessstudio': 'dumbbell',
  'widerruf-online-kauf': 'cart',
  'reklamation-kaufvertrag': 'package',
  'kuendigung-handyvertrag': 'phone',
  'kuendigung-streaming-abo': 'play',
  'datenauskunft-dsgvo': 'lock',
  'kuendigung-stromvertrag': 'bolt',
  'schufa-eintrag-loeschung': 'database',

  // Arbeit & Beruf
  'kuendigung-arbeitsvertrag': 'contract-x',
  'arbeitszeugnis-anfordern': 'certificate',
  'teilzeit-antrag': 'clock',
  'urlaubsabgeltung-fordern': 'sun',
  'elternzeit-antrag': 'calendar',
  'ueberstunden-auszahlung': 'euro',

  // Versicherung & Bank
  'kuendigung-kfz-versicherung': 'car',
  'kuendigung-hausratversicherung': 'home',
  'kuendigung-haftpflichtversicherung': 'shield',
  'widerspruch-beitragserhoehung-pkv': 'objection',
  'kuendigung-girokonto': 'card',
  'p-konto-umwandlung': 'lock',

  // Behörden & Widersprüche
  'einspruch-bussgeldbescheid': 'euro',
  'widerspruch-bescheid': 'objection',
  'rundfunkbeitrag-befreiung': 'broadcast',
  'akteneinsicht-behoerde': 'folder',
};

export function iconFor(g: Pick<GeneratorConfig, 'slug' | 'category'>): IconName {
  return GENERATOR_ICONS[g.slug] ?? CATEGORY_ICONS[g.category] ?? 'doc';
}
