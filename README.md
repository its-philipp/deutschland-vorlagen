# Deutschlandvorlagen

Quellcode von [deutschland-vorlagen.de](https://deutschland-vorlagen.de) —
kostenlose deutsche Musterbriefe als interaktive Generatoren: Formular
ausfüllen, fertig formatiertes Schreiben drucken oder als PDF speichern.

## Warum der Code offen liegt

Die Seite verspricht, dass Ihre Eingaben das Gerät nicht verlassen. Ein
Versprechen, das man nachlesen kann, ist mehr wert als eines, das man glauben
muss. Konkret nachprüfbar:

- Es gibt kein Backend. Die Seite ist ein statischer Export
  ([Astro](https://astro.build), `output: 'static'`); Formular, Brieftext und
  Druckansicht laufen vollständig im Browser
  (`src/components/Generator.tsx`).
- Keine Datenbank, kein Formular-Endpunkt, kein Analytics-Skript.
- Schriften liegen im eigenen Bundle, nicht bei einem CDN — Google Fonts per
  URL einzubinden überträgt IP-Adressen ohne Einwilligung
  (LG München I, 20.01.2022, 3 O 17493/20).
- Was die Seite an Dritte auslagert, steht vollständig in der
  [Datenschutzerklärung](https://deutschland-vorlagen.de/datenschutz/):
  Hosting bei Cloudflare und Google AdSense samt zertifiziertem
  Consent-Banner.

## Fehler gefunden?

Ein falscher Paragraf, eine abgelaufene Frist, ein schiefer Satz im Brief:
bitte melden — [Issue anlegen](../../issues/new/choose) oder formlos an
kontakt@deutschland-vorlagen.de. Fristen und Rechtsgrundlagen sind das, wofür
die Seite da ist; Hinweise dazu sind besonders willkommen.

Pull Requests sind willkommen für Code, Barrierefreiheit und Tippfehler. Bei
inhaltlichen Änderungen an Briefvorlagen bitte erst ein Issue: jede Vorlage
wird gegen die Primärquelle geprüft, bevor sie live geht.

## Entwicklung

```sh
npm install
npm run dev     # localhost:4321
npm run build   # statischer Export nach dist/
npm run check   # Typprüfung
```

Ein Generator ist ein Konfigurationsobjekt in `src/data/generators/`
(Felder, Brieftext mit Platzhaltern, Rechtsgrundlagen, FAQ), eingetragen in
`src/data/registry.ts`. Die Oberfläche dazu ist **eine** gemeinsame
Komponente — es gibt bewusst keinen Code pro Brief.

## Lizenz

**Der Quellcode steht unter der [MIT-Lizenz](LICENSE)** — Layout, Komponenten,
Generator-Logik, Icons, alles unter `src/components/`, `src/layouts/`,
`src/lib/`, `src/pages/`, `src/styles/` und `public/`.

**Nicht davon erfasst sind die Inhalte:** die Briefvorlagen und Seitentexte in
`src/data/` (insbesondere `src/data/generators/`) sowie Marke, Logo und Name
„Deutschlandvorlagen". Dafür sind **alle Rechte vorbehalten**. Sie dürfen
diese Texte lesen, prüfen und für Ihr eigenes Schreiben verwenden — nicht aber
als Sammlung weiterveröffentlichen oder in ein eigenes Angebot übernehmen.

## Kein Rechtsrat

Die Vorlagen sind allgemeine Muster zum Selbst-Ausfüllen und dienen der
allgemeinen Information. Sie sind keine Rechtsberatung im Sinne des
Rechtsdienstleistungsgesetzes und ersetzen keine Beratung im Einzelfall. Alle
Angaben ohne Gewähr.
