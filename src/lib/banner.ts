import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Banner-Bilder — vorhanden oder nicht, ohne Registrierung (Owner-Wunsch
 * 2026-08-15: „so wenig Arbeit wie möglich").
 *
 * Statt einer Liste, die jemand pflegen muss, sieht dieses Modul beim Build im
 * Dateisystem nach. Liegt `public/banner/<name>.avif` (oder `.webp`/`.jpg`),
 * erscheint der Banner; liegt nichts da, erscheint nichts, und die Seite sieht
 * aus wie heute. Kein Platzhalter, kein kaputtes Bildsymbol, keine Änderung am
 * Code nötig — Datei ablegen, bauen, fertig.
 *
 * Das ist bewusst Build-Zeit-Logik: die Seite ist statisch, `existsSync` läuft
 * also genau einmal je Build und nie im Browser.
 *
 * **Dateien gehören nicht ins Repo, wenn sie groß sind.** Prüfmaß steht in
 * `scripts/check-banner.mjs`: 120 KB je Datei. Ein Hero, der eine Sekunde
 * Ladezeit kostet, macht die Seite nicht vertrauenswürdiger, sondern langsamer.
 */

const DIR = join(process.cwd(), 'public', 'banner');

/** Reihenfolge = Priorität im `<picture>`: modern zuerst, JPEG als Rückfall. */
const FORMATE = [
  { ext: 'avif', type: 'image/avif' },
  { ext: 'webp', type: 'image/webp' },
  { ext: 'jpg', type: 'image/jpeg' },
] as const;

export interface Banner {
  quellen: { srcset: string; type: string }[];
  /** Der Rückfall für `<img src>` — immer das letzte vorhandene Format. */
  src: string;
  alt: string;
  breite: number;
  hoehe: number;
}

/**
 * Die Alt-Texte.
 *
 * Sie benennen, was zu sehen ist, und beschreiben keine Stimmung: Wer die Seite
 * vorgelesen bekommt, hat von „ruhige, dokumentarische Atmosphäre" nichts,
 * von „Aktendeckel mit Papieren" schon. Ein Banner ist Dekoration; würde er
 * Information tragen, stünde sie im Text.
 */
const ALT: Record<string, string> = {
  start: 'Ein graugrüner Aktendeckel mit einigen Blättern, daneben ein Umschlag und ein Füller',
  mietrecht: 'Ein Schlüsselbund an einem Messingring auf hellem Papier',
  vertraege: 'Ein Stapel weißer Blätter, zusammengehalten von einer schwarzen Büroklammer',
  arbeit: 'Eine schlichte Tischuhr aus Stahl, auf dem Rücken liegend',
  versicherung: 'Ein verschlossener Umschlag mit einem unscharfen runden Stempelabdruck',
  behoerden: 'Ein Stempel steht aufrecht neben einem geöffneten Stempelkissen',
};

/** Startseite breiter als die Reiter — sie ist das erste Bild, nicht das zwanzigste. */
const MASSE: Record<'start' | 'hub', { breite: number; hoehe: number }> = {
  start: { breite: 1600, hoehe: 500 },
  hub: { breite: 1600, hoehe: 360 },
};

export function bannerFuer(name: string): Banner | null {
  const vorhanden = FORMATE.filter((f) => existsSync(join(DIR, `${name}.${f.ext}`)));
  if (!vorhanden.length) return null;

  const alt = ALT[name];
  if (!alt) {
    // Lieber der Build als eine Seite mit einem Bild ohne Beschreibung.
    throw new Error(
      `Banner "${name}" hat keinen Alt-Text in src/lib/banner.ts. ` +
        `Ein Bild ohne Alt-Text gehört nicht auf eine Seite.`,
    );
  }

  const { breite, hoehe } = MASSE[name === 'start' ? 'start' : 'hub'];
  return {
    quellen: vorhanden.map((f) => ({ srcset: `/banner/${name}.${f.ext}`, type: f.type })),
    src: `/banner/${name}.${vorhanden[vorhanden.length - 1].ext}`,
    alt,
    breite,
    hoehe,
  };
}
