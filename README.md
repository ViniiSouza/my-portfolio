# Portfolio

Link: https://www.souzavinicius.com/

Personal portfolio built with Vue 3 and Vite, available in Portuguese and English.

## Running

```bash
npm install
npm run dev      # local server
npm test         # unit and component tests
npm run build    # production build in dist/
```

Requires Node 20.19 or newer.

## Notes

- All visible text lives in `src/i18n/texts.js`. Both languages must keep the same structure (checked by `tests/texts.test.js`).
- The code shown in the project section comes from the real repositories and lives in `src/snippets/`. It is highlighted at build time by a small Vite plugin (`vite.config.js`), so the page ships no highlighter.
- Colors, fonts and radii are defined as tokens in `src/styles/main.css`, with light and dark themes following the system preference.
