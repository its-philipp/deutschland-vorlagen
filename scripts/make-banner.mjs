/**
 * Erzeugt die Banner-Motive mit gpt-image-2 und legt sie fertig zugeschnitten
 * nach `public/banner/`.
 *
 *   node scripts/make-banner.mjs            # alle, die noch fehlen
 *   node scripts/make-banner.mjs mietrecht  # eines neu erzeugen
 *   node scripts/make-banner.mjs --force    # alle neu
 *
 * Der Schlüssel kommt aus `.env` im Repo-Wurzelverzeichnis (`OPENAI_API_KEY`)
 * und wird nirgends ausgegeben. `.env` ist über `.gitignore` ausgeschlossen.
 *
 * **Die Prompts stehen hier und nicht im Chatverlauf**, weil das Impressum die
 * Bilder als KI-generiert ausweist. Wer das nachvollziehen will, soll sehen
 * können, womit sie entstanden sind — und wer ein Motiv ersetzen will, hat die
 * Vorlage, ohne sie neu zu erfinden.
 *
 * Zwei Regeln stecken in jedem Prompt, und sie sind der eigentliche Trick:
 * **keine Menschen** (an Händen und Gesichtern sieht man die Herkunft sofort)
 * und **kein lesbarer Text** (ein Generator schreibt auf ein deutsches Formular
 * Pseudo-Deutsch — auf einer Seite über Rechtsschreiben der peinlichste
 * denkbare Fehler).
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ZIEL = join(ROOT, 'public', 'banner');
const MODELL = 'gpt-image-2';

/** Erzeugt wird im Querformat und danach auf das Bannerformat beschnitten. */
const ERZEUGUNGSGROESSE = '1536x1024';

/** Grenze aus `check-banner.mjs` — hier gleich beim Kodieren eingehalten. */
const MAX_BYTES = 120 * 1024;

const GEMEINSAM =
  'Soft diffused window light from the upper left, long gentle shadow. ' +
  'Muted palette of paper white, grey-green (#DDE2DE) and deep ink (#1F2421), ' +
  'one small deep-blue (#2B4C7E) accent. Shallow depth of field, background ' +
  'dissolving into soft grey. Quiet documentary product photography, no styling ' +
  'props, no decoration. No people, no hands, no faces. No readable text, no ' +
  'letterforms, no numbers, no logos anywhere — any paper surface blank or out ' +
  'of focus. Wide banner composition with generous empty space on the right.';

const MOTIVE = {
  // Startseite: Konzept B „Die Aktenmappe" — die Bildmarke des Designs als Foto.
  start: {
    hoehe: 500,
    prompt:
      'Photorealistic close-up of a grey-green (#DDE2DE) cardboard document folder ' +
      'lying on a plain off-white desk surface, slightly opened, a few white sheets ' +
      'fanned out inside, a stamped manila envelope beside it, a fountain pen resting ' +
      'diagonally. Overhead soft diffused daylight, no harsh shadows. Archival, orderly, ' +
      'German office aesthetic without nostalgia kitsch. Macro-adjacent sharpness on the ' +
      'folder edge, background falling off softly. ' +
      GEMEINSAM,
  },
  // Reiter: System 1 „Ein Gegenstand, ganz nah" — gleiches Licht, gleiche
  // Palette, gleicher Abstand; nur der Gegenstand wechselt. Nur so werden die
  // fünf als Satz erkennbar.
  mietrecht: {
    hoehe: 360,
    prompt:
      'Photorealistic macro still life of a small bunch of door keys on a worn brass ring, ' +
      'resting on a plain off-white paper surface. ' +
      GEMEINSAM,
  },
  vertraege: {
    hoehe: 360,
    prompt:
      'Photorealistic macro still life of a stack of white sheets held together by a single ' +
      'black paper clip, edges slightly uneven, resting on a plain off-white paper surface. ' +
      GEMEINSAM,
  },
  arbeit: {
    hoehe: 360,
    // Zweiter Anlauf. Der erste zeigte eine Tischuhr, der das Textverbot
    // Ziffern und Zeiger genommen hatte — übrig blieb eine nicht erkennbare
    // Metallscheibe. Ein Locher trägt von Haus aus keine Schrift und bleibt
    // trotzdem auf den ersten Blick ein Bürogegenstand.
    prompt:
      'Photorealistic macro still life of a heavy metal office hole punch in dark grey, seen ' +
      'from a low three-quarter angle, its two punch heads and the worn lever clearly visible, ' +
      'standing on a plain off-white paper surface with two small paper discs beside it. ' +
      GEMEINSAM,
  },
  versicherung: {
    hoehe: 360,
    // Zweiter Anlauf. Der erste hatte einen runden Stempelabdruck, und in
    // dessen Ring standen Pseudo-Buchstaben — unscharf, aber erkennbar als
    // Schriftversuch. Ein Stempel *verlangt* Text; deshalb trägt das Motiv
    // jetzt den Faden-und-Knopf-Verschluss als Merkmal, der ohne Schrift
    // auskommt.
    prompt:
      'Photorealistic macro still life of a closed grey-green document envelope with a red ' +
      'string-and-button closure, the string wound in a figure eight around two eyelets, ' +
      'lying on a plain off-white paper surface. Completely blank envelope surface, ' +
      'no stamp, no marking of any kind. ' +
      GEMEINSAM,
  },
  behoerden: {
    hoehe: 360,
    prompt:
      'Photorealistic macro still life of a worn wooden rubber stamp standing upright next to ' +
      'an open ink pad, on a plain off-white paper surface. The stamp face is turned away and ' +
      'unreadable. ' +
      GEMEINSAM,
  },
};

const BREITE = 1600;

function schluessel() {
  const env = join(ROOT, '..', '.env');
  const raw = readFileSync(env, 'utf8');
  const m = raw.match(/^\s*(?:export\s+)?OPENAI_API_KEY\s*=\s*['"]?(.+?)['"]?\s*$/m);
  if (!m) throw new Error(`OPENAI_API_KEY steht nicht in ${env}.`);
  return m[1];
}

async function erzeuge(name, prompt, key) {
  const antwort = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      model: MODELL,
      prompt,
      size: ERZEUGUNGSGROESSE,
      n: 1,
    }),
  });

  const json = await antwort.json();
  if (!antwort.ok) {
    throw new Error(`${name}: HTTP ${antwort.status} — ${json.error?.message ?? 'unbekannt'}`);
  }
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) throw new Error(`${name}: Antwort ohne Bilddaten.`);
  return Buffer.from(b64, 'base64');
}

const sips = (...args) => execFileSync('/usr/bin/sips', args, { stdio: 'pipe' });

/**
 * Zuschneiden, skalieren, kodieren.
 *
 * Erzeugt wird 3:2, gebraucht wird 3,2:1 bzw. 4,4:1 — der Zuschnitt ist also
 * kräftig. Deshalb steht in jedem Prompt „generous empty space on the right":
 * der Gegenstand sitzt links, und was der Beschnitt nimmt, ist leere Fläche.
 */
function verarbeite(rohPfad, name, hoehe) {
  const zielHoeheImOriginal = Math.round((1536 * hoehe) / BREITE);
  sips('-c', String(zielHoeheImOriginal), '1536', rohPfad);
  sips('--resampleHeightWidth', String(hoehe), String(BREITE), rohPfad);

  const jpg = join(ZIEL, `${name}.jpg`);
  const webp = join(ZIEL, `${name}.webp`);

  // JPEG als Rückfall: Qualität so weit senken, bis die Grenze eingehalten ist.
  for (const q of [75, 68, 60, 52, 45]) {
    sips('-s', 'format', 'jpeg', '-s', 'formatOptions', String(q), rohPfad, '--out', jpg);
    if (statSync(jpg).size <= MAX_BYTES) break;
  }

  // WebP ist das Format, das die Seite tatsächlich ausliefert.
  execFileSync('cwebp', ['-quiet', '-q', '72', jpg, '-o', webp], { stdio: 'pipe' });

  return { jpg: statSync(jpg).size, webp: statSync(webp).size };
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const gewuenscht = args.filter((a) => !a.startsWith('--'));
  const namen = (gewuenscht.length ? gewuenscht : Object.keys(MOTIVE)).filter((n) => {
    if (!MOTIVE[n]) throw new Error(`Unbekanntes Motiv: ${n}`);
    if (!force && existsSync(join(ZIEL, `${n}.webp`))) {
      console.log(`– ${n}: liegt schon da (--force überschreibt)`);
      return false;
    }
    return true;
  });
  if (!namen.length) return;

  const key = schluessel();
  mkdirSync(ZIEL, { recursive: true });

  for (const name of namen) {
    const { prompt, hoehe } = MOTIVE[name];
    process.stdout.write(`… ${name} `);
    const png = await erzeuge(name, prompt, key);
    const roh = join(ZIEL, `${name}.roh.png`);
    writeFileSync(roh, png);
    const groessen = verarbeite(roh, name, hoehe);
    rmSync(roh);
    console.log(
      `→ ${BREITE}×${hoehe}, webp ${Math.round(groessen.webp / 1024)} KB, ` +
        `jpg ${Math.round(groessen.jpg / 1024)} KB`,
    );
  }

  console.log('\nFertig. Jetzt: npm run check:banner && npm run build');
}

main().catch((e) => {
  console.error(`\n${e.message}`);
  process.exit(1);
});
