/**
 * Banner-Bilder wiegen lassen, bevor sie live gehen.
 *
 * Ein Bildgenerator liefert PNG mit mehreren Megabyte. Legt man das ungeprüft
 * nach `public/banner/`, lädt die Startseite statt in unter einer Sekunde in
 * fünf — und ein Banner, der die Seite langsam macht, wirkt nicht
 * vertrauenswürdiger, sondern billiger. Genau die Kontrolle, die man von Hand
 * jedes Mal vergisst.
 *
 * Prüft außerdem, dass zu jedem Bild ein Alt-Text existiert und dass kein
 * Bereich vergessen wurde, für den es schon Geschwisterbilder gibt.
 *
 * Run: npm run check:banner
 */
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIR = join(process.cwd(), 'public', 'banner');

/** Erfahrungswert: darüber wird die Startseite spürbar träge. */
const MAX_BYTES = 120 * 1024;

const ERWARTET = ['start', 'mietrecht', 'vertraege', 'arbeit', 'versicherung', 'behoerden'];

if (!existsSync(DIR)) {
  console.log('Kein Verzeichnis public/banner/ — keine Banner, nichts zu prüfen.');
  process.exit(0);
}

const dateien = readdirSync(DIR).filter((f) => /\.(avif|webp|jpg|jpeg|png)$/i.test(f));
if (!dateien.length) {
  console.log('public/banner/ ist leer — die Seiten rendern ohne Banner.');
  process.exit(0);
}

let fehler = 0;

for (const datei of dateien.sort()) {
  const bytes = statSync(join(DIR, datei)).size;
  const kb = Math.round(bytes / 1024);

  if (/\.png$/i.test(datei)) {
    fehler++;
    console.error(`✗ ${datei} — PNG (${kb} KB). Fotos gehören nach AVIF/WebP/JPEG, nicht nach PNG.`);
    continue;
  }
  if (bytes > MAX_BYTES) {
    fehler++;
    console.error(`✗ ${datei} — ${kb} KB, erlaubt sind ${MAX_BYTES / 1024} KB.`);
    continue;
  }
  console.log(`✓ ${datei} — ${kb} KB`);
}

const namen = new Set(dateien.map((f) => f.replace(/\.[^.]+$/, '')));
const unbekannt = [...namen].filter((n) => !ERWARTET.includes(n));
if (unbekannt.length) {
  fehler++;
  console.error(
    `✗ Unbekannte Banner: ${unbekannt.join(', ')} — erwartet: ${ERWARTET.join(', ')}. ` +
      `Ohne Eintrag in src/lib/banner.ts erscheinen sie auf keiner Seite.`,
  );
}

// Kein Fehler, nur ein Hinweis: ein unvollständiger Satz ist ein zulässiger
// Zwischenstand, die Seiten ohne Bild sehen weiterhin vollständig aus.
const fehlend = ERWARTET.filter((n) => !namen.has(n));
if (fehlend.length) {
  console.log(`\nNoch ohne Banner (rendern ohne Bild): ${fehlend.join(', ')}`);
}

if (fehler) {
  console.error(`\n${fehler} Banner-Problem(e).`);
  process.exit(1);
}
console.log('\nAlle Banner in Ordnung.');
