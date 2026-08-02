// Single switch for advertising. Set ADSENSE_CLIENT to the AdSense publisher
// ID ('ca-pub-…') to turn ads on; leave it empty to keep them off.
//
// One constant deliberately drives all four places ads are visible, so the
// site can never end up advertising while the Datenschutzerklärung claims it
// does not — which would be a factually false privacy notice:
//   1. the AdSense script in BaseLayout.astro
//   2. /ads.txt (src/pages/ads.txt.ts)
//   3. section 4 of datenschutz.astro (ads + consent, or "no advertising")
//   4. the consent-withdrawal button on that page
//
// Consent itself is NOT handled here. Serving ads to EEA users requires a
// Google-certified CMP; we use Google's own ("Privacy & messaging" in the
// AdSense account), which ships inside the AdSense script and is configured
// in Google's UI, not in this repo. Do not add a hand-rolled cookie banner —
// it would not be certified and would suppress ad serving.
// AdSense shows this as "pub-1252540428933200"; the script tag's client
// parameter needs the "ca-" prefix, ads.txt does not (ADSENSE_PUB_ID strips it).
// Annotated as `string` on purpose: without it TypeScript narrows to the
// literal and calls the emptiness check below an impossible comparison.
export const ADSENSE_CLIENT: string = 'ca-pub-1252540428933200';

export const ADS_ENABLED: boolean = ADSENSE_CLIENT !== '';

/** ads.txt wants the bare `pub-…` form, the script tag wants `ca-pub-…`. */
export const ADSENSE_PUB_ID = ADSENSE_CLIENT.replace(/^ca-/, '');
