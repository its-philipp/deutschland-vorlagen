/**
 * Print a real page and COUNT THE SHEETS.
 *
 * The print preview shows *what* appears, never *on how many sheets* — this
 * project has already shipped a bug where every generator page printed five
 * sheets, four of them blank, and three reviews missed it because nobody
 * counted. The rule since then: after touching layout, ad slots or print CSS,
 * print and count.
 *
 * Hydration matters here. The print block is scoped with
 * `body:has(#print-letter)`, and `#print-letter` only exists once the Preact
 * island has mounted — so a headless print that does not wait for hydration
 * measures the unhydrated page and reports a false regression.
 *
 * Playwright is deliberately NOT a dependency of this project: its install
 * step downloads browser binaries, and Cloudflare Pages installs
 * devDependencies on every deploy. Install it for the check and remove it
 * again, or run the check where it is already present.
 *
 * Usage:
 *   npm run build
 *   python3 -m http.server 4321 --directory dist &   # not `serve -s`: the
 *                                                    # SPA rewrite serves the
 *                                                    # homepage for every URL
 *   npm i --no-save playwright && npm run check:print -- http://127.0.0.1:4321
 */
import { chromium } from 'playwright';
import { readFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const base = process.argv[2] ?? 'http://127.0.0.1:4321';

/** Generator pages must print exactly one sheet with the sample letter absent. */
const LETTER_PAGES = [
  '/mietrecht/kaution-zurueckfordern/',
  '/arbeit/kuendigung-arbeitsvertrag/',
  '/behoerden/widerspruch-bescheid/',
  '/vertraege/kuendigung-stromvertrag/',
  '/versicherung/widerspruch-beitragserhoehung-pkv/',
];

/** Pages without a letter print normally — no expectation beyond "not empty". */
const PLAIN_PAGES = ['/', '/ratgeber/kuendigungsfristen-uebersicht/', '/ueber-uns/'];

function pageCount(pdfPath) {
  const data = readFileSync(pdfPath);
  return data.toString('latin1').match(/\/Type\s*\/Page[^s]/g)?.length ?? 0;
}

const out = mkdtempSync(join(tmpdir(), 'printcheck-'));
// Kein fest verdrahteter Pfad: `/opt/pw-browsers/chromium` gibt es nur in der
// Cloud-Umgebung, auf dem Laptop des Owners nicht — das Skript scheiterte dort
// vor dem ersten Seitenaufruf. Ohne Angabe sucht Playwright seinen eigenen
// Browser; `PW_CHROMIUM` bleibt als Notausgang für Umgebungen mit
// vorinstalliertem Binary.
const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
);
const page = await browser.newPage();
let failures = 0;

for (const path of LETTER_PAGES) {
  await page.goto(base + path, { waitUntil: 'networkidle' });
  // Wait for the island: without it the print block does not apply at all.
  await page.waitForSelector('#print-letter', { timeout: 15000 });
  const pdf = join(out, path.replaceAll('/', '_') + '.pdf');
  await page.pdf({ path: pdf, format: 'A4', printBackground: false });
  const n = pageCount(pdf);
  // The specimen letter must not print — it would double the sheets.
  const text = await page.evaluate(() => document.body.innerText);
  const hasSpecimen = text.includes('So sieht das fertige Schreiben aus');
  if (n !== 1) {
    failures++;
    console.error(`✗ ${path} — ${n} Seiten (erwartet: 1)`);
  } else {
    console.log(`✓ ${path} — 1 Seite${hasSpecimen ? ' (Beispielbrief steht auf der Seite, druckt nicht mit)' : ''}`);
  }
}

for (const path of PLAIN_PAGES) {
  await page.goto(base + path, { waitUntil: 'networkidle' });
  const pdf = join(out, path.replaceAll('/', '_') + '.pdf');
  await page.pdf({ path: pdf, format: 'A4', printBackground: false });
  console.log(`· ${path} — ${pageCount(pdf)} Seiten (ohne Brief, keine Vorgabe)`);
}

await browser.close();

if (failures) {
  console.error(`\n${failures} Seite(n) drucken nicht auf einem Blatt.`);
  process.exit(1);
}
console.log('\nAlle Generatorseiten drucken auf genau einem Blatt.');
