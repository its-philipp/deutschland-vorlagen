/**
 * Cross-link consistency for the "Diese Schreiben gehören oft dazu" block.
 *
 * The block exists because until 2026-08-27 no generator page linked to any
 * other generator page — two internal links each, and 14 URLs stuck on
 * "Discovered – currently not indexed" for want of a crawl path. Three things
 * can quietly undo that again, so each is a failure here:
 *
 *  1. A cluster naming a slug that no longer exists. `relatedFor` drops it
 *     silently so the page never renders a dead link — which is right at
 *     runtime and wrong at build time, where nobody would notice the page
 *     losing its third card.
 *  2. A generator with no cluster of its own. It still gets the category
 *     fallback, but the fallback is a worse page than a hand-picked cluster,
 *     and it should be a deliberate exception, not something that creeps in
 *     with the next batch.
 *  3. A letter nobody links to. The point is crawl paths; a page that is
 *     linked from no cluster is exactly the island the block was built to
 *     remove.
 *
 * Run: npm run check:related
 */
import { generators } from '../src/data/registry';
import { RELATED_GENERATORS } from '../src/data/related-generators';

const slugs = new Set(generators.map((g) => g.slug));
let failures = 0;

const fail = (where: string, msg: string) => {
  failures++;
  console.error(`✗ ${where}: ${msg}`);
};

// 1. every referenced slug exists, nothing points at itself, no duplicates
for (const [slug, cluster] of Object.entries(RELATED_GENERATORS)) {
  if (!slugs.has(slug)) {
    fail(slug, 'Cluster für einen Generator, den es nicht (mehr) gibt');
    continue;
  }
  if (!cluster.note.trim()) fail(slug, 'note ist leer');
  if (cluster.slugs.length < 3) {
    fail(slug, `nur ${cluster.slugs.length} verwandte Schreiben (mindestens 3)`);
  }
  const seen = new Set<string>();
  for (const target of cluster.slugs) {
    if (target === slug) fail(slug, 'verweist auf sich selbst');
    if (seen.has(target)) fail(slug, `nennt ${target} doppelt`);
    seen.add(target);
    if (!slugs.has(target)) fail(slug, `verweist auf unbekannten Slug ${target}`);
  }
}

// 2. every generator has a cluster of its own
for (const g of generators) {
  if (!RELATED_GENERATORS[g.slug]) {
    fail(g.slug, 'kein eigenes Cluster — fiele auf die Kategorie-Notlösung zurück');
  }
}

// 3. every generator is linked from at least one cluster
const linked = new Set<string>();
for (const cluster of Object.values(RELATED_GENERATORS)) {
  for (const target of cluster.slugs) linked.add(target);
}
for (const g of generators) {
  if (!linked.has(g.slug)) {
    fail(g.slug, 'wird von keinem Cluster verlinkt — bleibt eine Insel');
  }
}

if (failures > 0) {
  console.error(`\n${failures} Fehler in den Querverweisen.`);
  process.exit(1);
}

const inbound = new Map<string, number>();
for (const cluster of Object.values(RELATED_GENERATORS)) {
  for (const target of cluster.slugs) {
    inbound.set(target, (inbound.get(target) ?? 0) + 1);
  }
}
const counts = [...inbound.values()];
console.log(
  `✓ ${generators.length} Generatoren, alle mit eigenem Cluster; ` +
    `${counts.reduce((a, b) => a + b, 0)} Querverweise, ` +
    `je Seite ${Math.min(...counts)}–${Math.max(...counts)} eingehend.`,
);
