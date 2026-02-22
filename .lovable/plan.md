

## SEO Optimization Based on Research Analysis

### Summary of Findings from the PDF

The research document covers two main areas: (1) removing Lovable platform traces, and (2) advanced SEO/GEO optimization for React SPAs. Since this is a Lovable-hosted project, some recommendations (SSR, Next.js migration, infrastructure changes) are not applicable. Below are the **actionable changes** within the current constraints.

---

### Changes to Implement

#### 1. Semantic HTML Improvements (All Section Components)

Replace generic `<div>` wrappers with proper semantic HTML elements (`<article>`, `<section>`, `<nav>`, `<main>`, `<header>`, `<footer>`) to improve crawler comprehension and GEO (Generative Engine Optimization) for AI bots.

**Files:** `AboutSection.tsx`, `BenefitsSection.tsx`, `CertificatesSection.tsx`, `PartnersSection.tsx`, `FAQSection.tsx`, `HeroSection.tsx`, `Index.tsx`

- Use `<article>` for standalone content blocks (e.g., each benefit card, each FAQ item)
- Ensure proper heading hierarchy: only one `<h1>` on the page (in HeroSection), all sections use `<h2>`, sub-items use `<h3>` -- this is already mostly correct

#### 2. GEO: Update `robots.txt` for AI Crawlers

Add explicit `Allow` directives for AI bot user-agents so that LLMs (ChatGPT, Perplexity, Claude, Gemini) can discover and cite the content.

**File:** `public/robots.txt`

```
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: *
Allow: /

Sitemap: https://ferfer.pharmevo.uz/sitemap.xml
Host: ferfer.pharmevo.uz
```

#### 3. GEO: Create `public/llm.txt` (Static Summary for AI Crawlers)

A lightweight, JavaScript-free text file that AI crawlers can ingest directly -- an emerging GEO best practice from the research.

**File:** `public/llm.txt` -- Plain text summary of the product, composition, benefits, and contact info.

#### 4. Update `index.html` Meta Tags

- Add `<meta name="generator" content="">` (empty or remove any auto-generated generator tag if present)
- Ensure the `<link rel="alternate" hreflang>` tags use the new URL-based language paths (`/ru` and `/uz`) instead of query parameters
- Update sitemap references to match the new URL structure

**File:** `index.html`

```html
<link rel="alternate" hreflang="ru" href="https://ferfer.pharmevo.uz/ru" />
<link rel="alternate" hreflang="uz" href="https://ferfer.pharmevo.uz/uz" />
<link rel="alternate" hreflang="x-default" href="https://ferfer.pharmevo.uz/ru" />
```

#### 5. Update `sitemap.xml` to Match URL-Based Routing

Update all URLs from `/?lang=uz` to `/uz` and from `/` to `/ru`.

**File:** `public/sitemap.xml`

#### 6. Update JSON-LD Structured Data in `index.html`

- Update the WebSite schema `potentialAction` target URL
- Update all canonical/alternate URLs to use `/ru` and `/uz` paths
- Ensure the FAQ schema is comprehensive

#### 7. Add Dynamic `<title>` and Meta Description per Language

Create a small `useEffect` in `Index.tsx` that updates `document.title` and the meta description based on the current language, so crawlers that do execute JS get language-appropriate metadata.

**File:** `src/pages/Index.tsx`

#### 8. Update Canonical Link Dynamically

Add a `useEffect` that updates the `<link rel="canonical">` href based on the current language route (`/ru` or `/uz`).

**File:** `src/pages/Index.tsx`

---

### What is NOT Changed (and Why)

| Recommendation from PDF | Why Not Applicable |
|---|---|
| Remove `lovable-tagger` from `package.json` | Dev-only dependency, does not affect production build or SEO |
| SSR / SSG / Next.js migration | Not possible within Lovable platform |
| Proxy-based pre-rendering (Prerender.io) | Infrastructure-level change, outside scope |
| Google Indexing API integration | Requires GCP setup outside this codebase |
| Remove Lovable badge | Managed via Lovable project settings, not code |
| Git history rewriting | Version control operation, not code change |
| Custom domain setup | Already configured at `ferfer.pharmevo.uz` |

---

### Technical Summary

```text
Files to modify:
  - public/robots.txt         (add AI bot directives)
  - public/sitemap.xml        (update URLs to /ru and /uz paths)
  - index.html                (update hreflang, canonical, JSON-LD URLs)
  - src/pages/Index.tsx        (dynamic title, meta desc, canonical per language)

Files to create:
  - public/llm.txt             (static AI-friendly content summary)

Sections to enhance with semantic HTML:
  - AboutSection.tsx           (article tags for feature cards)
  - BenefitsSection.tsx        (article tags for benefit items)
  - FAQSection.tsx             (already using proper structure)
  - PartnersSection.tsx        (article tags for partner cards)
```

### Build Fix Reminder
You must still manually add `"build:dev": "vite build --mode development"` to the `scripts` section of `package.json` to resolve the deployment error.

