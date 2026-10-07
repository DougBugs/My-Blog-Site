# My Blog

A minimal blog built with [Astro](https://astro.build). Posts are Markdown files; the site builds to plain static HTML, so it hosts for free on Cloudflare.

## Make it yours (do this first)

1. `astro.config.mjs`: change `site` to your real domain, e.g. `https://yourdomain.com`
2. `src/consts.ts`: set your blog title and description
3. `src/pages/about.astro`: write your About page
4. Delete or edit `src/content/blog/hello-world.md`

## Write a post

Add a file to `src/content/blog/`, for example `my-first-post.md`:

```md
---
title: 'My first post'
description: 'One-line summary shown on the home page.'
pubDate: '2026-10-08'
---

Your content in Markdown here.
```

The file name becomes the URL (`/blog/my-first-post/`). Add `draft: true` to hide a post until it is ready.

## Run it on your computer (optional)

Needs Node.js 20 or newer.

```
npm install
npm run dev
```

Then open http://localhost:4321

## Deploy free on Cloudflare

1. Create a new repository on GitHub and upload all the files from this folder (not `node_modules` or `dist`).
2. In the Cloudflare dashboard go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**, and pick your repo.
3. Use these build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. You will get a free `*.pages.dev` address.
5. Open the project's **Custom domains** tab, click **Set up a custom domain**, and enter your domain. Because the domain is already on Cloudflare, the DNS record is added for you.

If the dashboard offers only the Workers flow instead of Pages, choose the Git-connect option, use the same build command, and set the deploy command to `npx wrangler deploy` with assets directory `dist`.

From then on, every push to GitHub rebuilds and publishes the site automatically.
