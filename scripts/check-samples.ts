/**
 * Every generator's specimen letter must be complete: no gap markers, no
 * leftover placeholders. A gap means a required field has no `example`, and
 * the page would publish a letter with a blank line in it.
 *
 * Run: npm run check:samples
 */
import { generators } from '../src/data/registry';
import { sampleLetter } from '../src/lib/sample-letter';

let failures = 0;

for (const config of generators) {
  const { subject, body, emptyOptionalIds } = sampleLetter(config);
  const text = `${subject}\n${body}`;
  const problems: string[] = [];

  if (text.includes('____')) problems.push('gap marker (a required field has no example)');
  const leftover = [...text.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]);
  if (leftover.length) problems.push(`unsubstituted placeholders: ${leftover.join(', ')}`);

  const requiredWithoutExample = config.fields.filter(
    (f) => f.required && f.type !== 'select' && !f.example,
  );
  if (requiredWithoutExample.length) {
    problems.push(
      `required fields without example: ${requiredWithoutExample.map((f) => f.id).join(', ')}`,
    );
  }

  if (problems.length) {
    failures++;
    console.error(`✗ ${config.category}/${config.slug}`);
    for (const p of problems) console.error(`    ${p}`);
  } else {
    const dropped = emptyOptionalIds.length ? ` (optional dropped: ${emptyOptionalIds.join(', ')})` : '';
    console.log(`✓ ${config.category}/${config.slug}${dropped}`);
  }
}

if (failures) {
  console.error(`\n${failures} generator(s) produce an incomplete specimen letter.`);
  process.exit(1);
}
console.log(`\nAll ${generators.length} specimen letters render complete.`);
