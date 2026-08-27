import type { GuideConfig } from '../lib/guide-config';
import { generators } from './registry';
import type { GeneratorConfig } from '../lib/generator-config';
import schreibenRichtigVersenden from './guides/schreiben-richtig-versenden';
import widerspruchEinspruchWiderruf from './guides/widerspruch-einspruch-widerruf';
import kuendigungsfristenUebersicht from './guides/kuendigungsfristen-uebersicht';
import schriftformTextformKuendigungsbutton from './guides/schriftform-textform-kuendigungsbutton';
import geschaeftsbriefDin5008 from './guides/geschaeftsbrief-din-5008';
import widerspruchSchreiben from './guides/widerspruch-schreiben';
import akteneinsichtBeantragen from './guides/akteneinsicht-beantragen';
import inkassoForderungBestreiten from './guides/inkasso-forderung-bestreiten';
import maengelHandwerkerRuegen from './guides/maengel-handwerker-ruegen';
import nachmieterStellen from './guides/nachmieter-stellen';
import fluggastrechteVerspaetung from './guides/fluggastrechte-verspaetung';
import widerspruchsbescheidErhalten from './guides/widerspruchsbescheid-erhalten';
import pkvBeitragserhoehung from './guides/pkv-beitragserhoehung';

/** All published guides. Order = display order on /ratgeber/. */
export const guides: GuideConfig[] = [
  widerspruchEinspruchWiderruf,
  widerspruchSchreiben,
  akteneinsichtBeantragen,
  inkassoForderungBestreiten,
  maengelHandwerkerRuegen,
  nachmieterStellen,
  fluggastrechteVerspaetung,
  widerspruchsbescheidErhalten,
  pkvBeitragserhoehung,
  kuendigungsfristenUebersicht,
  schriftformTextformKuendigungsbutton,
  schreibenRichtigVersenden,
  geschaeftsbriefDin5008,
];

export function guidePath(g: GuideConfig): string {
  return `/ratgeber/${g.slug}/`;
}

/**
 * Resolve a guide's `relatedGenerators` slugs to configs. A slug that no
 * longer exists is dropped rather than rendered as a dead link; the build
 * check (`npm run check:guides`) is what turns that into a visible error.
 */
export function relatedGeneratorsOf(guide: GuideConfig): GeneratorConfig[] {
  return guide.relatedGenerators
    .map((slug) => generators.find((g) => g.slug === slug))
    .filter((g): g is GeneratorConfig => Boolean(g));
}

/**
 * Guides that apply to every letter on this site, whichever one it is: how a
 * letter has to be built, and how to prove it arrived. Used as the fallback so
 * no generator page is a dead end — the alternative was 22 of 35 pages with no
 * way onward except the navigation.
 */
const UNIVERSAL_GUIDE_SLUGS = [
  'schreiben-richtig-versenden',
  'geschaeftsbrief-din-5008',
];

/**
 * The guides that point at a given generator, for cross-linking back. Falls
 * back to the universal ones where no guide names this letter specifically.
 */
export function guidesForGenerator(slug: string): GuideConfig[] {
  const specific = guides.filter((g) => g.relatedGenerators.includes(slug));
  if (specific.length > 0) return specific;
  return guides.filter((g) => UNIVERSAL_GUIDE_SLUGS.includes(g.slug));
}
