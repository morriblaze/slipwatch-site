# slipwatch-site

The website at slipwatch.app: the front page and the help pages for Slipwatch. Built with
Starlight (Astro). The project's brain is Joanna's Obsidian vault, not this folder.

## Rules

- **This repository is public.** Never copy anything from `C:\Dev\slipwatch` (the app's code,
  which stays private) into it.
- **No analytics, cookies, trackers, or scripts or fonts loaded from other sites.**
- **Every line on the site is a promise to customers.** Do not add claims.
- Nothing is pushed or published without Joanna's go.

## How the help pages work

- **Read `WRITING.md` before writing or changing any page.** It holds the writing and screenshot
  rules from Joanna's review.
- Pages live in `src/content/docs`. The menu and its order are in `astro.config.mjs`.
- Each page starts with `screens:`, the list of screens it shows. Readers never see it. When a
  screen changes, search for its name to find the pages to update.
- Screenshots live in `public/screenshots`, each named after its screen: PNG at double size,
  placed with an `<img>` tag at half that size (rules in `WRITING.md`). Not in `src/assets`, whose
  image step re-saves them as WebP (found 2026-10-12).
- A page with `draft: true` shows in the preview but is left out of the public site and its
  menu. Delete that line when the page is written. The front page's "Read the help" button
  appears on the public site once "Start here" is written.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Astro's documentation: https://docs.astro.build. Starlight's: https://starlight.astro.build
