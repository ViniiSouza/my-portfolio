---
version: 1
name: Carta náutica
description: Portfolio of a backend engineer. Navy ink on a cool, slightly blue paper replaces plain black and white; chart magenta, the color nautical charts use for navigation marks, is the only accent and appears only where it carries meaning. One grotesque (Familjen Grotesk) for all text, monospace strictly for code. Code panels are navy in both themes and are the main visual of the page.
---

# Carta náutica

The identity comes from the flagship project (Maritime Flow, maritime traffic control) and from nautical charts: navy ink, chart paper, magenta marks. Tokens live in `src/styles/main.css`.

## Colors

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--bg` | `#eef3f6` | `#07182a` | Page canvas |
| `--surface` | `#ffffff` | `#0c2136` | Featured project, cards |
| `--surface-2` | `#e3ebf1` | `#13304b` | Hover fill |
| `--ink` | `#0c2238` | `#e4edf4` | Headings, primary button fill |
| `--ink-2` | `#2b425a` | `#b3c3d1` | Body text |
| `--ink-3` | `#4d6276` | `#8fa6ba` | Secondary text, role line |
| `--line` | `#cdd9e2` | `#17324d` | Hairlines, card borders |
| `--line-strong` | `#9fb3c3` | `#2a4a68` | Button borders, minor rules |
| `--accent` | `#b0186e` | `#ff6fb1` | Chart magenta (see rules) |
| `--code-bg` | `#0c2238` | `#041120` | Code panels (navy in both themes) |

Code tokens: keyword `#ff7ab8`, string `#9fd6c8`, type `#9cc3ee`, function `#ffffff`, comment `#7f97ad` italic, constant `#f7b7d6`, foreground `#dbe6ef`.

All text pairs pass WCAG AA (4.5:1) in both themes.

### Where magenta is allowed

Only these, nowhere else:

1. Underline under the role highlight in the hero ("C# e .NET").
2. The rule above the hero aside sentence.
3. Project category labels ("Sistemas distribuídos").
4. Link underlines, nav hover underline, primary button hover, focus ring.

No magenta fills on large areas, no gradients, no glows.

## Typography

- **Familjen Grotesk** (variable, self-hosted via Fontsource) for all text. Weights: 700 for the name, section titles, project titles; 600 for small headings and labels; 500 for the role line, buttons and nav; 400 for body.
- **JetBrains Mono** only inside code panels and for file paths under them. Never for labels, eyebrows, chips or UI text.
- Labels are sentence case, never uppercase with tracking.
- Scale: name `clamp(3rem → 6.25rem)` at -0.035em; section title `clamp(2.25rem → 3.5rem)` at -0.03em; project title `clamp(2rem → 2.75rem)`; body 17px/1.65.

## Shape and space

- Radius: controls 6px, surfaces 10px, chips 4px.
- Rules: 2px `--ink` rule over grouped lists (stack, more projects); 1px `--line` elsewhere.
- Container 1160px, gutter `clamp(1rem, 4vw, 2.5rem)`, section spacing `clamp(5rem, 11vw, 8.5rem)`.
- Only the featured project is an elevated surface; project cards are bordered.
- No big-number tiles: metrics belong inside sentences, with context.

## Motion

- Hero enters with a short staggered rise (0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`).
- Sections fade up once when they enter the viewport.
- Hover: color and underline changes, 0.2s. Buttons press down 1px.
- Everything is disabled under `prefers-reduced-motion`.

## Copy

- No em or en dashes anywhere (checked by `tests/texts.test.js`).
- Plain sentences written the way the owner speaks. No "Open to new opportunities" badges or "Focus / Based in" label grids.
- Every code snippet is copied from the real repositories, with cuts marked by `// ...`.
