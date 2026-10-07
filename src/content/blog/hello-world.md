---
title: 'Hello, world'
description: 'The first post on my new blog, and how to write the next one.'
pubDate: '2026-10-07'
---

Welcome to the blog. This is a sample post so you can see how things look.

## How to write a new post

1. Add a new `.md` file to `src/content/blog/`. The file name becomes the URL, so `my-first-post.md` is served at `/blog/my-first-post/`.
2. Put the front matter at the top (title, description, date), like this post does.
3. Write in Markdown below it. Commit and push, and the site rebuilds on its own.

Set `draft: true` in the front matter to keep a post hidden until it's ready.

> Quotes, **bold**, *italics*, [links](https://astro.build), lists and code all work.

```js
console.log('code blocks work too');
```
