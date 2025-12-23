# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for **Alimor**, an iOS food and mood tracking app. The site is built with Astro and styled with Tailwind CSS.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

- **Framework**: Astro 4.x with Tailwind CSS integration
- **Deployment**: GitHub Pages at `https://xWiseDev.github.io/AlimorSite`
- **Base path**: All assets and links use `/AlimorSite/` prefix due to GitHub Pages subdirectory hosting

### File Structure

```
src/
  layouts/Layout.astro   # Base HTML layout with global styles, meta tags, and custom CSS
  pages/
    index.astro          # Main landing page
    privacy.astro        # Privacy policy page
public/
  icon.png               # App icon
  screenshots/           # App screenshots for the landing page
  Download_on_the_App_Store_Badge.svg
```

### Custom Tailwind Colors

Defined in `tailwind.config.mjs`:
- `alimor-purple` (#7C5CDB) - Primary brand color
- `alimor-purple-light`, `alimor-purple-dark` - Variants
- `alimor-bg` (#F8F7FC) - Background
- `alimor-text`, `alimor-text-light` - Text colors

### Key Implementation Notes

- The base path `/AlimorSite/` is configured in `astro.config.mjs` and must be used for all internal links and asset references
- Global CSS animations (`.animate-float`, `.glass`) are defined in `Layout.astro`
- App Store ID is `6756018932` (referenced in apple-itunes-app meta tag)
