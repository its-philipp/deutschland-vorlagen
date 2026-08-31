/**
 * Runtime smoke test for the generator island.
 *
 * MEMORY.md carries the lesson from baustellen-info: "a green Astro build
 * proves nothing about a client island". This project had no runtime test at
 * all — `check:samples` renders the specimen letter through `renderTemplate`
 * in Node, which is the same function the island uses but not the same
 * environment, and it only ever exercises the FIRST option of a select.
 *
 * So this fills every field in a real browser and asserts what a visitor would
 * see:
 *   1. the island mounts (#print-letter exists),
 *   2. the finished letter has no gap markers and no unsubstituted {{fields}},
 *   3. a date typed into a date input reaches the letter as TT.MM.JJJJ, never
 *      as the ISO value the input emits (a portfolio-wide gotcha),
 *   4. the LAST option of every select is exercised, not just the first,
 *   5. print and copy controls are present.
 *
 * Same operating constraints as check:print — needs playwright and a static
 * server without SPA rewrite:
 *   npm run build
 *   (cd dist && python3 -m http.server 4399) &
 *   npm run check:runtime -- http://127.0.0.1:4399
 */
import { chromium } from 'playwright';
// -expect-error — reines Node-Hilfsmodul ohne Typdeklaration, siehe dort.
import { statischerServer } from './static-server.mjs';
import { generators } from '../src/data/registry';

// Ohne Argument startet der Pruefer seinen eigenen Server ueber dist/ — siehe
// static-server.mjs. Eine uebergebene Adresse hat weiterhin Vorrang.
const eigenerServer = process.argv[2] ? null : await statischerServer('dist');
const base = process.argv[2] ?? eigenerServer.base;
const TEST_DATE_ISO = '2026-03-12';
const TEST_DATE_DE = '12.03.2026';

const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
);
const page = await browser.newPage();
let failures = 0;
const fail = (where: string, msg: string) => {
  failures++;
  console.error(`✗ ${where}: ${msg}`);
};

for (const config of generators) {
  const path = `/${config.category}/${config.slug}/`;
  await page.goto(base + path, { waitUntil: 'domcontentloaded' });
  try {
    await page.waitForSelector('#print-letter', { timeout: 20000 });
  } catch {
    fail(path, 'die Insel ist nicht gestartet (#print-letter fehlt)');
    continue;
  }

  // Fill every control the visitor would fill. Selects take their LAST option
  // so the branch the server-rendered specimen never reaches gets exercised.
  // Passed as a STRING on purpose: tsx compiles an inline arrow through
  // esbuild, which injects `__name(...)` helpers. Those exist in Node, not in
  // the page, so an inline callback dies with "__name is not defined".
  const fillSource = `(iso) => {
    const setNative = (el, v) => {
      const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement : HTMLInputElement;
      const setter = Object.getOwnPropertyDescriptor(proto.prototype, 'value').set;
      setter.call(el, v);
      el.dispatchEvent(new Event('input', { bubbles: true }));
    };
    let selects = 0;
    for (const el of Array.from(document.querySelectorAll('input, textarea, select'))) {
      if (el instanceof HTMLSelectElement) {
        const opts = Array.from(el.options).filter((o) => o.value !== '');
        if (opts.length === 0) continue;
        el.value = opts[opts.length - 1].value;
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('input', { bubbles: true }));
        selects++;
      } else if (el instanceof HTMLInputElement) {
        if (el.type === 'date') setNative(el, iso);
        else if (el.type === 'number') setNative(el, '42');
        else setNative(el, 'Testwert');
      } else if (el instanceof HTMLTextAreaElement) {
        setNative(el, 'Testwert');
      }
    }
    return { selects };
  }`;
  // A string handed to page.evaluate is evaluated as an EXPRESSION, and a
  // second argument is ignored — so `fillSource` alone just evaluates to a
  // function object and nothing is ever filled. The first version of this
  // check therefore "found" a gap marker on the first page: an artefact of an
  // empty form, not a bug in the site. Wrap it in a call with the argument
  // baked in.
  const filled = (await page.evaluate(
    `(${fillSource})(${JSON.stringify(TEST_DATE_ISO)})`,
  )) as { selects: number };

  const letter = (await page.locator('#print-letter').innerText()).trim();

  if (letter.includes('____')) fail(path, 'Lückenmarkierung im fertigen Brief');
  const leftover = [...letter.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]);
  if (leftover.length) fail(path, `nicht ersetzte Platzhalter: ${leftover.join(', ')}`);

  const hasDateField = config.fields.some((f) => f.type === 'date');
  if (hasDateField) {
    if (letter.includes(TEST_DATE_ISO)) {
      fail(path, `ISO-Datum ${TEST_DATE_ISO} steht im Brief — muss ${TEST_DATE_DE} sein`);
    } else if (!letter.includes(TEST_DATE_DE)) {
      fail(path, `Datum erscheint weder als ${TEST_DATE_DE} noch als ISO — kommt es überhaupt an?`);
    }
  }

  const printBtn = await page.getByRole('button', { name: /Drucken/i }).count();
  const copyBtn = await page.getByRole('button', { name: /Kopieren|Kopiert/i }).count();
  if (printBtn === 0) fail(path, 'kein Druckknopf');
  if (copyBtn === 0) fail(path, 'kein Kopierknopf');

  if (failures === 0 || !process.env.QUIET) {
    console.log(
      `✓ ${path} — Brief ${letter.length} Zeichen, ${filled.selects} Auswahlfeld(er) auf der letzten Option`,
    );
  }
}

await browser.close();
await eigenerServer?.schliessen();

if (failures) {
  console.error(`\n${failures} Laufzeitfehler.`);
  process.exit(1);
}
console.log(`\n${generators.length} Generatoren im Browser ausgefüllt — alle Briefe vollständig.`);
