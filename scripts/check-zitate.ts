/**
 * Jede Norm, die ein Brief behauptet, muss die Seite belegen können.
 *
 * Die Projektregel lief bisher nur in eine Richtung: `check:guides` verlangt,
 * dass ein § im Ratgeber von einer Generator-Config getragen wird. Die
 * Gegenrichtung war ungeprüft — und sie ist die schärfere. Der Ratgeber bleibt
 * zu Hause; **der Brief geht an eine Behörde oder ein Unternehmen.** Wer darin
 * „nach Art. 18 DSGVO die Einschränkung der Verarbeitung" verlangt, erhebt eine
 * Forderung, und die Seite, die den Brief ausgibt, muss sagen können, worauf
 * sie beruht.
 *
 * Gefunden am 2026-08-28 an `schufa-eintrag-loeschung`: Der Brief berief sich
 * auf Art. 18 und Art. 12 Abs. 3 DSGVO, die `legalBasis` führte nur Art. 16,
 * Art. 17 DSGVO und § 31 BDSG.
 *
 * ZUR NORMERKENNUNG: Die naive Fassung zerschnitt „§ 203 Abs. 2 VVG" zu
 * „§ 203 Abs" und meldete zwei korrekte Configs als fehlerhaft. Das Kürzel
 * steht **hinter** der Kette aus Abs./Satz/Nr./Halbsatz, nicht direkt hinter
 * der Nummer. Beide Seiten werden deshalb auf (Art oder §, Nummer, Gesetz)
 * normalisiert, damit „§ 203 Abs. 2 VVG" im Brief und „§ 203 VVG" in der
 * legalBasis als dieselbe Norm gelten.
 *
 * Run: npm run check:zitate
 */
import { generators } from '../src/data/registry';

/** „§ 203 Abs. 2 Satz 1 VVG" → { art: '§', nummer: '203', gesetz: 'VVG' } */
const NORM = new RegExp(
  [
    '(§{1,2}|Art\\.)\\s*(\\d+[a-z]?)',
    // Abs./Satz/Nr.-Kette, auch mit „und"/„,"-Aufzählungen: „Abs. 1 und 2",
    // „Abs. 1 Satz 1 Nr. 1". Sie darf leer sein — dann folgt das Kürzel direkt.
    '((?:\\s*(?:Abs\\.|Absatz|Satz|S\\.|Nr\\.|Halbsatz|Hs\\.)\\s*\\d+[a-z]?(?:\\s*(?:und|bis|,)\\s*\\d+[a-z]?)*)*)',
    // Das Kürzel. Der Ausschluss ist der Kern: Ohne ihn matcht die leere Kette
    // und „Abs" wird zum Gesetz — genau so meldete die erste Fassung zwei
    // korrekte Configs als fehlerhaft („§ 203 Abs" statt „§ 203 VVG").
    '\\s+(?!Abs\\.|Absatz|Satz|S\\.|Nr\\.|Halbsatz|Hs\\.)([A-ZÄÖÜ][A-Za-zÄÖÜäöüß-]*)',
  ].join(''),
  'g',
);

interface Zitat {
  art: string;
  nummer: string;
  gesetz: string;
}
const schluessel = (z: Zitat) => `${z.art.startsWith('Art') ? 'Art' : '§'} ${z.nummer} ${z.gesetz}`;

function zitate(text: string): Zitat[] {
  const out: Zitat[] = [];
  for (const m of text.matchAll(NORM)) {
    out.push({ art: m[1], nummer: m[2], gesetz: m[4] });
  }
  return out;
}

let geprueft = 0;
const fehler: string[] = [];

for (const g of generators) {
  const brief = `${g.subjectTemplate}\n${g.bodyTemplate}`;
  const belegt = new Set(g.legalBasis.flatMap((l) => zitate(l.ref).map(schluessel)));
  const imBrief = new Map(zitate(brief).map((z) => [schluessel(z), z]));

  for (const [k] of imBrief) {
    geprueft++;
    if (!belegt.has(k)) {
      fehler.push(
        `${g.category}/${g.slug}: Der Brief beruft sich auf ${k}, die legalBasis führt nur ${[...belegt].join(', ') || '(nichts)'}`,
      );
    }
  }
}

console.log(`${generators.length} Generatoren, ${geprueft} Normzitate in Brieftexten geprüft`);
if (fehler.length) {
  console.error(`\n${fehler.length} Zitat(e) ohne Beleg auf der eigenen Seite:`);
  for (const f of fehler) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log('Jede im Brief genannte Norm steht auch in der legalBasis ihrer Seite.');
