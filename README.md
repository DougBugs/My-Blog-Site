# My Blog

A minimal blog built with [Astro](https://astro.build). Posts are Markdown files; the site builds to plain static HTML, so it hosts for free on Cloudflare.

- Live site: https://blog.ethangosling.com
- Repo: https://github.com/DougBugs/My-Blog-Site (branch: `main`)
- Author: Ethan Gosling

> **For LLMs / AI assistants:** read this whole file before changing anything. It tells you where everything lives and how to make the common edits (new post, restyle, change the title). Keep changes small and follow the existing conventions below.

## Quick reference

| I want to... | Edit this |
| --- | --- |
| Add a blog post | Create a new `.md` file in `src/content/blog/` |
| Change font, colours, spacing | `src/styles/global.css` |
| Change site title / tagline | `src/consts.ts` |
| Change header, nav links, footer, `<head>` tags | `src/layouts/BaseLayout.astro` |
| Change the home page (post list) | `src/pages/index.astro` |
| Change how a single post page looks | `src/pages/blog/[...id].astro` |
| Change the About page text | `src/pages/about.astro` |
| Change the RSS feed | `src/pages/rss.xml.js` |
| Change the site URL or integrations | `astro.config.mjs` |
| Change the post frontmatter fields | `src/content.config.ts` |
| Change the favicon | `public/favicon.svg` |

## Project structure

```
src/
  consts.ts                 SITE_TITLE and SITE_DESCRIPTION
  content.config.ts         Schema for blog post frontmatter
  content/blog/             ALL POSTS LIVE HERE (one .md file per post)
  layouts/BaseLayout.astro  Shared page shell: <head>, header, nav, footer
  pages/
    index.astro             Home page: list of posts, newest first
    about.astro             About page
    blog/[...id].astro      Template for each individual post
    rss.xml.js              RSS feed
  styles/global.css         ALL site styling (single stylesheet)
public/                     Static files served as-is (favicon.svg)
astro.config.mjs            Site URL + sitemap integration
```

## Adding a new post

1. Create a Markdown file in `src/content/blog/`.
2. The **filename becomes the URL**: `src/content/blog/4x-games.md` is served at `/blog/4x-games/`. Use lowercase kebab-case derived from the title (for example, "4X Games" becomes `4x-games.md`).
3. Start the file with this frontmatter, then write the post in Markdown below it:

```md
---
title: 'Post Title'
description: 'One sentence summary, shown on the home page and in link previews.'
pubDate: '2026-10-09'
---

First paragraph of the post...
```

Frontmatter fields (defined in `src/content.config.ts`):

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | String. Shown as the post's `<h1>`, so do NOT repeat it as a `#` heading in the body. |
| `description` | yes | String. One sentence. Used on the home page, RSS and meta tags. |
| `pubDate` | yes | `'YYYY-MM-DD'` in quotes. Posts are sorted newest first by this date. |
| `updatedDate` | no | `'YYYY-MM-DD'`. If set, the post shows "Updated ...". |
| `draft` | no | `true` hides the post from the home page, RSS and the build. Defaults to `false`. |

Writing conventions:

- Posts are plain Markdown: paragraphs, `*italics*`, `**bold**`, `## headings`, lists, `> quotes`, code blocks, links and images all work.
- Ethan writes casually, in first person, and sometimes swears. **Preserve his wording exactly.** Only fix obvious typos and capitalisation of proper nouns (game names, etc.). Do not rewrite, polish or "improve" his voice, and do not add content he didn't write.
- Put a blank line between paragraphs. Use single quotes around frontmatter values; if a value contains an apostrophe, wrap it in double quotes instead.
- Images: put files in `public/` (for example `public/images/pic.png`) and reference them as `![alt text](/images/pic.png)`.

Existing posts (use as a template): `src/content/blog/i-used-to-love-coding.md`, `src/content/blog/4x-games.md`.

## Font and styling

All styling is in one file: `src/styles/global.css`. There is no CSS framework.

- **Font:** `'Times New Roman', Times, serif` on `body` (a system font, nothing to download). Other elements use `font-family: inherit`, so changing the `body` font changes the whole site.
- **Base size:** `html { font-size: 18px; }`, with `line-height: 1.7` on the body.
- **Layout:** content is a single centred column, `.wrap` with `max-width: 680px` and 20px side padding.
- **Colours** are CSS variables on `:root`, with a dark-mode override inside `@media (prefers-color-scheme: dark)`. When changing colours, edit the variables (and update both the light and dark sets):

  | Variable | Light | Dark | Used for |
  | --- | --- | --- | --- |
  | `--bg` | `#fdfdfc` | `#141416` | page background |
  | `--fg` | `#1c1c1e` | `#e8e8ea` | main text |
  | `--muted` | `#6b6b70` | `#9a9aa2` | dates, descriptions, nav, footer |
  | `--accent` | `#2f5fd0` | `#7ea2ff` | links and hover colour |
  | `--border` | `#e4e4e0` | `#2a2a2e` | divider lines, title box border |
  | `--code-bg` | `#f2f2ee` | `#1e1e22` | code blocks and inline code |

- **Site title as a code block:** in `BaseLayout.astro` the title is rendered as `<a class="brand"><code>{SITE_TITLE}</code></a>`, and `header.site a.brand code` in the CSS gives it a bordered, rounded, bold box. To change the title text, edit `SITE_TITLE` in `src/consts.ts`, not the layout.
- **Useful class names:** `.wrap` (column), `header.site` / `footer.site`, `.post-list` (home page list), `.meta` (small grey date line), `article` (post body).
- When adding a font from the web (for example Google Fonts), add the `<link>` in `BaseLayout.astro`'s `<head>` and update the `font-family` on `body`.

## Site settings

- `src/consts.ts`: `SITE_TITLE` is currently `Blog(Ethan.thoughts)` and `SITE_DESCRIPTION` is `Thoughts on the current state of things`. They are used in the header, footer, `<title>`, meta tags and RSS feed.
- `astro.config.mjs`: `site` is `https://blog.ethangosling.com` (used for canonical URLs, RSS and the sitemap). The sitemap is generated automatically by `@astrojs/sitemap`.
- Dates are displayed in `en-AU` format (for example "9 October 2026").

## Running locally

```sh
npm install
npm run dev      # local dev server with live reload
npm run build    # builds static HTML into dist/ (run this to check for errors)
npm run preview  # serve the built site locally
```

Always run `npm run build` after changes. A post with a missing or invalid frontmatter field fails the build, and the error message names the file.

## Deploying

The site is static and hosted on Cloudflare, which is expected to rebuild and publish whenever `main` is pushed. So:

1. Create or edit files.
2. Run `npm run build` to confirm it succeeds.
3. Commit with a short message such as `Add post: 4X Games`.
4. Push to `main`.

Do not commit `node_modules/`, `dist/` or `.astro/` (they are in `.gitignore`).
