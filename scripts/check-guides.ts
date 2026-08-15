/**
 * Guide consistency: no dead cross-links, no over-long meta, no guide whose
 * § citations are not also carried by a generator config.
 *
 * The last check is the important one. Guides were written in a session with
 * no outbound network, so every reference had to come from the pool that was
 * already verified against the primary text. This script is what keeps that
 * true as guides get edited: a new § here has to be verified and cited by a
 * generator first, or the check fails and says so.
 *
 * Run: npm run check:guides
 */
import { guides } from '../src/data/guides-registry';
import { generators } from '../src/data/registry';

const verifiedRefs = new Map<string, string>();
for (const g of generators) {
  for (const l of g.legalBasis) verifiedRefs.set(l.ref, l.url);
}

const generatorSlugs = new Set(generators.map((g) => g.slug));
let failures = 0;

const fail = (slug: string, msg: string) => {
  failures++;
  console.error(`✗ ${slug}: ${msg}`);
};

const seenSlugs = new Set<string>();

for (const guide of guides) {
  if (seenSlugs.has(guide.slug)) fail(guide.slug, 'duplicate slug');
  seenSlugs.add(guide.slug);

  if (guide.metaTitle.length > 65) {
    fail(guide.slug, `metaTitle ${guide.metaTitle.length} chars (max 65)`);
  }
  if (guide.metaDescription.length > 150) {
    fail(guide.slug, `metaDescription ${guide.metaDescription.length} chars (max 150)`);
  }

  for (const slug of guide.relatedGenerators) {
    if (!generatorSlugs.has(slug)) fail(guide.slug, `relatedGenerators: no such generator "${slug}"`);
  }

  for (const ref of guide.legalBasis) {
    const knownUrl = verifiedRefs.get(ref.ref);
    if (!knownUrl) {
      fail(
        guide.slug,
        `"${ref.ref}" is cited by no generator — verify it against the primary text and cite it from a generator config first`,
      );
    } else if (knownUrl !== ref.url) {
      fail(guide.slug, `"${ref.ref}" links to ${ref.url}, generators link to ${knownUrl}`);
    }
  }

  if (guide.sections.length === 0) fail(guide.slug, 'no sections');
  if (guide.faq.length < 3) fail(guide.slug, `only ${guide.faq.length} FAQ entries (min 3)`);

  if (failures === 0 || !Object.is(failures, failures)) {
    // noop — keeps the success line below readable
  }
}

for (const guide of guides) {
  const words =
    guide.sections.reduce(
      (n, s) =>
        n +
        s.paragraphs.join(' ').split(/\s+/).length +
        (s.list?.reduce((m, i) => m + i.text.split(/\s+/).length, 0) ?? 0),
      0,
    ) + guide.faq.reduce((n, f) => n + f.a.split(/\s+/).length, 0);
  console.log(`  ${String(words).padStart(4)} Wörter  ${guide.slug}`);
}

if (failures) {
  console.error(`\n${failures} problem(s) found.`);
  process.exit(1);
}
console.log(`\nAll ${guides.length} guides consistent.`);
