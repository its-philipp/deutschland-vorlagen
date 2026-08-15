/**
 * Guide config schema — the contract for /ratgeber/ pages.
 *
 * A guide is the part of this site that is NOT a form: an explanatory piece
 * that stands on its own and leads into the generators where one fits. Same
 * discipline as a generator config applies to the § citations — verified
 * against the primary text, never guessed.
 *
 * Deliberately a separate schema from GeneratorConfig: a guide has no fields,
 * no letter template, and its body is prose, so sharing one type would mean a
 * type where half the properties are optional and nothing is enforced.
 */
import type { FaqItem, LegalRef } from './generator-config';
import type { IconName } from './icons';

export interface GuideSection {
  heading: string;
  /** Body paragraphs, rendered in order. */
  paragraphs: string[];
  /**
   * Optional definition list under the paragraphs — used where the content is
   * genuinely a set of parallel cases (letter forms, deadlines per contract
   * type) rather than prose.
   */
  list?: { term: string; text: string }[];
}

export interface GuideConfig {
  /** URL slug: /ratgeber/[slug]/ */
  slug: string;
  /** H1 — targets exactly one long-tail keyword. */
  h1: string;
  /** <title>, ≤ 65 chars. */
  metaTitle: string;
  /** Meta description, ≤ 150 chars. */
  metaDescription: string;
  /** Card teaser on the hub and lead paragraph on the page. */
  intro: string;
  /** Sprite mark (src/components/IconSprite.astro). */
  icon: IconName;
  sections: GuideSection[];
  /** Verified references, listed at the foot of the guide. */
  legalBasis: LegalRef[];
  faq: FaqItem[];
  /** Generator slugs this guide leads into (must exist in the registry). */
  relatedGenerators: string[];
  /** ISO date of last content review, shown as "Stand: …". */
  lastReviewed: string;
}
