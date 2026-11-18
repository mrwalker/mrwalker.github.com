# mwalker.info

Matt Walker's personal site. Astro 7 static site, deployed to Cloudflare Workers (static assets).

## Commands

Use **pnpm** (global `npm` is broken on this machine). `.npmrc` pins Node 24 for this project via `use-node-version`; pnpm downloads it automatically.

- `pnpm dev`: local dev server; **drafts are visible** here (yellow DRAFT badge)
- `pnpm build`: static build to `dist/`; drafts excluded
- `pnpm wrangler dev`: serve `dist/` exactly as Cloudflare will (honors `public/_redirects`)
- `pnpm run deploy`: build + `wrangler deploy` (needs `wrangler login`)

## Content

- **Long-form posts**: `src/content/writing/<slug>.md`. This site is the canonical home; Medium is a mirror (`mirrorName`/`mirrorUrl`). Set `canonical` only when a partner venue must stay canonical (e.g. Snowflake's blog). Schema: `src/content.config.ts`.
- **Notes** (short posts, usually from LinkedIn): `src/content/notes/<slug>.md` with `linkedin:` URL. `featured: true` puts it on the home page.
- `draft: true` hides an entry from builds, RSS and llms.txt.
- Source drafts live in `../mwalker-writer` (`tech-platform/blog-posts/`, `linkedin/`). Strip the `# Title` and `> Source:` header lines when copying; they become frontmatter.
- **Structured data**: `src/data/` holds `timeline.ts` (git-log career, newest first, `pin: true` = shown on home), `talks.ts`, `papers.ts`, `site.ts` (nav, socials, Mahal CTA copy).
- `/now` is hand-edited in `src/pages/now.astro`; bump the `updated` date.
- Resume: `src/pages/resume.astro` (standalone, print-styled; `/resume.html` 301s to it).

## Conventions

- Keep the look: dark animated grid, glitch name, Inter + JetBrains Mono, terminal/git metaphors (`$ cd ~/writing`, `git log`).
- Never invent facts (dates, titles, venues, metrics). Leave a field out rather than guess.
- `public/notes/miss-you.html` is the target of a QR code for Matt's kids. Never move or delete it.
- Generated for agents: `/llms.txt`, `/llms-full.txt`, `/rss.xml`, sitemap.
