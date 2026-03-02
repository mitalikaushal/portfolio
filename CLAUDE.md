# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static personal portfolio website for Mitali Kaushal, deployed to GitHub Pages at `https://mitalikaushal.github.io/portfolio`. It uses SCSS compiled to CSS with no build framework — just vanilla HTML, CSS (compiled from SCSS), and a single vanilla JS file.

## Commands

```bash
# Compile SCSS to dist/css/ (watch mode)
npm run sass

# Deploy dist/ folder to GitHub Pages
npm run deploy
```

There is no test suite and no dev server script in `package.json`. Use `live-server` (installed as a dependency) manually if needed:
```bash
npx live-server dist/
```

## Architecture

The `dist/` folder is the **served output** — it contains the final HTML, compiled CSS, JS, and all images. Do **not** edit `dist/css/main.css` directly; it is generated from SCSS.

**SCSS structure** (`scss/`):
- `_config.scss` — Variables (`$primary-color: #444`, `$secondary-color: #eece1a`), mixins (`easeOut`, `background`, media query mixins), and the `set-text-color()` function
- `_menu.scss` — Hamburger button and full-screen overlay navigation styles, including CSS-only entrance animations (translate3d slide-in)
- `_mobile.scss` — Responsive overrides via the media query mixins defined in `_config.scss`
- `main.scss` — Entry point; imports all partials and defines all page-level styles

**Pages** (all in `dist/`): `index.html`, `about.html`, `work.html`, `contact.html` — each page duplicates the same navigation header HTML and includes `js/main.js`.

**JS** (`dist/js/main.js`): Toggles `.show` and `.close` classes on the nav overlay elements when the hamburger button is clicked. This is the only JavaScript in the project.

## Key Conventions

- Theme colors are set in `scss/_config.scss`. Change `$primary-color` and `$secondary-color` there to retheme the entire site.
- The `set-text-color()` function auto-selects black or white text based on background lightness — always use it instead of hardcoding text colors.
- Navigation is identical across all pages; any nav changes must be replicated manually in all four HTML files.
- Images live in `dist/img/` (general) and `dist/img/projects/` (work page thumbnails).
- The background overlay on the home page (`#bg-img`) is controlled by `$show-home-image` and `$background-opacity` in `_config.scss`.
