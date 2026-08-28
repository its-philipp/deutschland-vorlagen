/**
 * External reference check: every cited source must resolve — and must be the
 * norm we claim it is.
 *
 * Why this is a script and no longer a note. MEMORY.md carried the rule "run
 * the external link check from an unproxied machine before every launch" since
 * 2026-07-12. That is an instruction to a person, and this repo has already
 * learned once what those are worth: the placeholder rule was a note too, until
 * deutschland-kosten went live with {{DOMAIN}} in every canonical tag. So the
 * check became a script the moment the environment could reach the sources
 * again (2026-08-28).
 *
 * Two levels:
 *   1. every external href in dist/ must answer 200 (following redirects),
 *   2. every `legalBasis` ref must appear in the page it links to. A wrong URL
 *      that still answers 200 — § 634 pointing at __635.html — passes level 1
 *      and fails here.
 *
 * Deliberately NOT part of `npm run build`: it depends on other people's
 * servers, and a transient 503 must never fail a deploy. Run it before a
 * launch and after touching legalBasis.
 *
 * Usage: npm run build && npm run check:links
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { generators } from '../src/data/registry';
import { guides } from '../src/data/guides-registry';

const TIMEOUT_MS = 20_000;
const UA = 'Mozilla/5.0 (compatible; deutschland-vorlagen link check)';

function htmlFiles(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}

/**
 * A link check must tell "broken" from "could not check". EUR-Lex answers 202
 * (Accepted) when it throttles a client — the document is fine, the request
 * just was not served. Reporting that as a dead reference is a false alarm,
 * and false alarms are what teach people to click past real findings.
 *
 * So: retry the soft statuses with a short backoff, and if they persist,
 * report the reference as unverified rather than failing the run.
 */
const SOFT_STATUS = (s: number) => s === 202 || s === 429 || s >= 500;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchOnce(url: string): Promise<{ status: number; body: string }> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'user-agent': UA },
    });
    if (!res.ok) return { status: res.status, body: '' };
    // gesetze-im-internet.de sends no charset at all and its bytes are not
    // valid UTF-8 (latin-1 umlauts), while "§" arrives as the numeric entity
    // &#167;. Both together made the first version of this check report all 79
    // German references as wrong. Decode by declared charset, fall back to
    // latin-1, and normalise the entity before matching.
    const charset =
      /charset=([\w-]+)/i.exec(res.headers.get('content-type') ?? '')?.[1] ?? 'iso-8859-1';
    const buf = await res.arrayBuffer();
    let body: string;
    try {
      body = new TextDecoder(charset.toLowerCase()).decode(buf);
    } catch {
      body = new TextDecoder('iso-8859-1').decode(buf);
    }
    body = body.replace(/&#167;|&sect;/g, '§').replace(/&nbsp;/g, ' ');
    return { status: res.status, body };
  } catch (e) {
    return { status: 0, body: String(e) };
  } finally {
    clearTimeout(t);
  }
}

async function fetchText(url: string): Promise<{ status: number; body: string }> {
  let last = { status: 0, body: '' };
  for (let attempt = 0; attempt < 3; attempt++) {
    last = await fetchOnce(url);
    if (!SOFT_STATUS(last.status)) return last;
    if (attempt < 2) await sleep(1500 * (attempt + 1));
  }
  return last;
}

/**
 * gesetze-im-internet.de writes the Sozialgesetzbuch with arabic numerals
 * ("SGB 10"), everyone else with roman ones ("SGB X"). Without this map the
 * check reports a correct link as pointing at the wrong statute.
 */
const SGB_NUMERALS: Record<string, string> = {
  I: '1', II: '2', III: '3', IV: '4', V: '5', VI: '6', VII: '7',
  VIII: '8', IX: '9', X: '10', XI: '11', XII: '12', XIV: '14',
};

/** "§ 573c Abs. 1 BGB" → { num: "573c", law: "BGB" }; EU articles carry no law. */
function parseRef(ref: string): { num: string; law: string | null } | null {
  const m = ref.match(/(?:§|Art\.)\s*([0-9]+[a-z]?)/i);
  if (!m) return null;
  // The law abbreviation is the last word, unless the ref names an EU act.
  if (/Verordnung|DSGVO/i.test(ref)) return { num: m[1], law: null };
  const words = ref.trim().split(/\s+/);
  let law = words.at(-1) ?? null;
  // "§ 25 SGB X" — the abbreviation is two words, and the numeral differs.
  if (law && words.at(-2) === 'SGB') law = `SGB (?:${law}|${SGB_NUMERALS[law] ?? law})`;
  return { num: m[1], law };
}

/** The page title of gesetze-im-internet.de is "§ 70 VwGO - Einzelnorm". */
function titleOf(body: string): string {
  const m = /<title>([\s\S]*?)<\/title>/i.exec(body);
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
}

const failures: string[] = [];
const unverified: string[] = [];
const fail = (msg: string) => {
  failures.push(msg);
  console.error(`✗ ${msg}`);
};

// ---- level 1: every external href answers 200 -------------------------------
const urls = new Set<string>();
for (const f of htmlFiles('dist')) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(/href="(https?:\/\/[^"]+)"/g)) {
    const u = m[1].replace(/&amp;/g, '&');
    if (!u.includes('deutschland-vorlagen.de')) urls.add(u);
  }
}
console.log(`${urls.size} externe Adressen im dist/`);
const bodies = new Map<string, string>();
for (const u of [...urls].sort()) {
  const { status, body } = await fetchText(u);
  if (status === 200) bodies.set(u, body);
  else if (SOFT_STATUS(status)) {
    unverified.push(`${status} — ${u}`);
    console.log(`· ${status} (Dienst drosselt oder ist gestört) — ${u}`);
  } else fail(`${status || 'Netzfehler'} — ${u}`);
}

// ---- level 2: the linked page really carries the cited norm ------------------
// Keyed by ref AND url, with the config that carries it. A plain Map<ref,url>
// deduplicates by ref, so one config's wrong URL is silently overwritten by
// another config's correct one for the same paragraph — a negative test with a
// deliberately broken link passed because of exactly that.
const refs = new Map<string, { ref: string; url: string; sources: string[] }>();
const addRef = (source: string, ref: string, url: string) => {
  const key = `${ref}|${url}`;
  const e = refs.get(key) ?? { ref, url, sources: [] };
  e.sources.push(source);
  refs.set(key, e);
};
for (const g of generators) for (const l of g.legalBasis) addRef(g.slug, l.ref, l.url);
for (const g of guides) for (const l of g.legalBasis) addRef(`ratgeber/${g.slug}`, l.ref, l.url);

let checked = 0;
for (const { ref, url, sources } of [...refs.values()].sort((a, b) => a.ref.localeCompare(b.ref))) {
  const where = sources.join(', ');
  // A ref whose URL is not among dist's external links must NOT be skipped:
  // the first version of this check did exactly that, and a negative test with
  // two deliberately wrong URLs passed. A silent skip in a checker is worse
  // than no checker, because it reports success.
  let body = bodies.get(url);
  if (body === undefined) {
    const res = await fetchText(url);
    if (res.status !== 200) {
      if (SOFT_STATUS(res.status)) {
        unverified.push(`${res.status} — ${url} (${where})`);
        console.log(`· ${ref} in ${where} — ${res.status}, nicht prüfbar`);
      } else {
        fail(`${res.status || 'Netzfehler'} — ${url} (aus legalBasis von ${where}, nicht im dist/)`);
      }
      continue;
    }
    body = res.body;
    bodies.set(url, body);
  }
  if (!body) continue; // level 1 already reported this one as unreachable
  // Court decisions ("BGH, Urteil vom …") carry no norm number. Their URL is
  // still checked for reachability by level 1; there is nothing to match here.
  const parsed = parseRef(ref);
  if (!parsed) {
    console.log(`· ${ref} — Rechtsprechung, nur auf Erreichbarkeit geprüft`);
    continue;
  }
  // A PDF has no <title> to compare against; level 1 is what we get.
  if (/\.pdf($|\?)/i.test(url)) {
    console.log(`· ${ref} — PDF-Quelle, nur auf Erreichbarkeit geprüft`);
    continue;
  }
  const { num, law } = parsed;
  if (url.includes('eur-lex')) {
    // EU acts are one document per URL; the article is a section inside it.
    if (!new RegExp(`Artikel\\s+${num}\\b`).test(body)) {
      fail(`"${ref}" in ${where}: Artikel ${num} steht nicht in ${url}`);
    }
  } else {
    // The title carries both the norm and the law, so it catches a wrong
    // paragraph AND a link into the wrong statute.
    const title = titleOf(body);
    if (!new RegExp(`§\\s*${num}\\b`).test(title)) {
      fail(`"${ref}" in ${where}: ${url} führt den Titel "${title}"`);
    } else if (law && !new RegExp(`\\b(?:${law})\\b`, 'i').test(title)) {
      fail(`"${ref}" in ${where}: ${url} gehört zu einem anderen Gesetz — Titel "${title}"`);
    }
  }
  checked++;
}

console.log(`${checked} Fundstellen gegen die verlinkte Quelle geprüft`);
if (failures.length) {
  console.error(`\n${failures.length} Problem(e).`);
  process.exit(1);
}
if (unverified.length) {
  console.log(
    `\n${unverified.length} Adresse(n) nicht prüfbar (Drosselung/Störung beim Anbieter) — kein Fehler, aber auch kein Beleg.`,
  );
}
console.log('\nAlle erreichbaren Adressen in Ordnung, alle prüfbaren Fundstellen belegt.');
