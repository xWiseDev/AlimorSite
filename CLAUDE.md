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
- **Deployment**: GitHub Pages with custom domain `https://alimor.app`
- **CI/CD**: GitHub Actions workflow in `.github/workflows/deploy.yml` deploys on push to `main`

### File Structure

```
src/
  layouts/Layout.astro   # Base HTML layout with SEO meta tags, structured data, and global CSS
  pages/
    index.astro          # Main landing page
    privacy.astro        # Privacy policy page
    support.astro        # Support/contact page
    terms.astro          # Terms of service page
public/
  icon.png               # App icon
  screenshots/           # App screenshots (main.png, entry.png, progress.png, calendar.png)
  Download_on_the_App_Store_Badge.svg
  CNAME                  # Custom domain configuration
  robots.txt             # Search engine crawling rules
```

### Custom Tailwind Colors

Defined in `tailwind.config.mjs`:
- `alimor-purple` (#7C5CDB) - Primary brand color
- `alimor-purple-light`, `alimor-purple-dark` - Variants
- `alimor-bg` (#F8F7FC) - Background
- `alimor-text`, `alimor-text-light` - Text colors

### Key Implementation Notes

- **SEO**: Layout.astro includes structured data schemas (MobileApplication, Organization), Open Graph tags, and Twitter cards
- **Global CSS classes** defined in Layout.astro:
  - `.animate-float`, `.animate-fade-in-up`, `.animate-scale-in` - Animations
  - `.glass`, `.glass-card` - Glassmorphism effects
  - `.stagger-1` through `.stagger-4` - Animation delays
  - `.screenshot-shadow` - Apple-style shadow for screenshots
  - `.btn-hover`, `.touch-target` - Interactive elements
- **App Store ID**: `6756018932` (used in apple-itunes-app meta tag)
- **Sitemap**: Auto-generated via `@astrojs/sitemap` integration
