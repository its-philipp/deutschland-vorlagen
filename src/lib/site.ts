// Site-wide constants. Keep SITE_URL in sync with `site` in astro.config.mjs
// (the sitemap integration reads it from there, canonical/OG tags from here).
export const SITE_URL = 'https://deutschland-vorlagen.de';
export const SITE_NAME = 'Deutschlandvorlagen';

/** Receive-only address (Cloudflare Email Routing → the owner's mailbox). */
export const CONTACT_EMAIL = 'kontakt@deutschland-vorlagen.de';

/**
 * Public mirror of this site's code. Not the repository work happens in —
 * it is published from the private monorepo by scripts/publish-…​.sh, which
 * ships an allowlist. The site links here because the privacy claim on every
 * page ("nothing leaves your browser") should be readable, not just credible.
 */
export const GITHUB_REPO = 'https://github.com/its-philipp/deutschland-vorlagen';

/**
 * The wordmark is set in two tones: the place in ink, the thing you get in
 * the brand blue. Split here rather than hard-coded in the header so the two
 * halves can never drift from SITE_NAME. Keep in sync with public/logo.svg.
 */
export const SITE_NAME_PARTS: readonly [string, string] = [
  'Deutschland',
  'vorlagen',
];
export const CURRENT_YEAR = 2026;

/** Absolute URL for canonical/OG tags. `path` must start with '/'. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
