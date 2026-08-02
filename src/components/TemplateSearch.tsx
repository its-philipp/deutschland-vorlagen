import { useMemo, useState } from 'preact/hooks';
import type { IconName } from '../lib/icons';

export interface TemplateItem {
  title: string;
  intro: string;
  path: string;
  category: string;
  categoryLabel: string;
  icon: IconName;
  /** Category accent, used for the register strip and the mark. */
  accent: string;
}

interface Props {
  items: TemplateItem[];
  /** Heading level of the group headings, so the page keeps one H1. */
  groupHeading?: 'h2' | 'h3';
}

/**
 * Filter across all templates. The list is server-rendered by Astro, so every
 * link is in the static HTML for crawlers; typing only narrows what is shown.
 */

/** "Kündigung" and "kuendigung" must find the same page. */
function fold(s: string): string {
  return s
    .toLowerCase()
    .replaceAll('ä', 'ae')
    .replaceAll('ö', 'oe')
    .replaceAll('ü', 'ue')
    .replaceAll('ß', 'ss')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function TemplateSearch({ items, groupHeading = 'h2' }: Props) {
  const [query, setQuery] = useState('');

  const haystack = useMemo(
    () => items.map((i) => fold(`${i.title} ${i.intro} ${i.categoryLabel}`)),
    [items],
  );

  const terms = fold(query.trim()).split(/\s+/).filter(Boolean);
  const matches = items.filter(
    (_, idx) => terms.length === 0 || terms.every((t) => haystack[idx].includes(t)),
  );

  // Keyed by slug, not by run: a category may appear more than once in the
  // input order without producing two groups with the same key.
  const byCategory = new Map<string, { label: string; slug: string; items: TemplateItem[] }>();
  for (const item of matches) {
    const group = byCategory.get(item.category);
    if (group) group.items.push(item);
    else
      byCategory.set(item.category, {
        label: item.categoryLabel,
        slug: item.category,
        items: [item],
      });
  }
  const groups = [...byCategory.values()];

  const Heading = groupHeading;

  return (
    <div>
      <div class="flex max-w-lg items-stretch overflow-hidden rounded-sheet border-2 border-stamp bg-paper">
        <label class="sr-only" for="vorlagen-suche">
          Vorlage suchen
        </label>
        <input
          id="vorlagen-suche"
          type="search"
          value={query}
          onInput={(e) => setQuery((e.currentTarget as HTMLInputElement).value)}
          placeholder="Kaution, Kündigung, Widerspruch …"
          class="w-full px-3 py-2.5 text-sm outline-none placeholder:text-ink-mute"
        />
        <span
          class="flex items-center bg-stamp px-4 text-paper"
          aria-hidden="true"
        >
          <svg class="h-[18px] w-[18px]">
            <use href="#i-search"></use>
          </svg>
        </span>
      </div>

      <p class="mt-3 text-sm text-ink-mute" role="status">
        {terms.length === 0
          ? `${items.length} Vorlagen`
          : matches.length === 1
            ? '1 Vorlage gefunden'
            : `${matches.length} Vorlagen gefunden`}
      </p>

      {matches.length === 0 && (
        <p class="mt-6 text-ink-soft">
          Zu „{query}“ gibt es noch keine Vorlage. Versuchen Sie es mit einem
          kürzeren Suchwort — etwa „Kündigung“ oder „Widerspruch“.
        </p>
      )}

      {groups.map((group) => (
        <section
          key={group.slug}
          class="mt-9"
          style={`--accent: ${group.items[0].accent}`}
        >
          <Heading class="flex items-center gap-2.5 font-display text-lg font-semibold">
            <span class="h-4 w-[3px] shrink-0 bg-(--accent)" aria-hidden="true"></span>
            <a href={`/${group.slug}/`} class="hover:text-(--accent)">
              {group.label}
            </a>
          </Heading>
          <ul class="mt-4 grid gap-4 sm:grid-cols-2">
            {group.items.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  style={`--accent: ${item.accent}`}
                  class="card-sheet relative flex h-full gap-3 p-4 pt-5 transition hover:-translate-y-px hover:shadow-sheet"
                >
                  <span class="absolute inset-x-4 top-0 h-[3px] bg-(--accent)"></span>
                  <svg class="mt-0.5 h-5 w-5 shrink-0 text-(--accent)" aria-hidden="true">
                    <use href={`#i-${item.icon}`}></use>
                  </svg>
                  <span class="block">
                    <span class="font-display font-semibold text-ink">
                      {item.title}
                    </span>
                    <span class="mt-1 block text-sm text-ink-soft">{item.intro}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
