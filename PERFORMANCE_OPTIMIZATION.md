# Performance Optimization Guide

## Overview
This document outlines the performance and SEO optimizations implemented for the Ferfer® website to improve rankings on Google and Yandex search engines.

## Implemented Optimizations

### 1. Build Optimization (Vite)
- **Code Splitting**: Vendor libraries separated into chunks for better caching
- **Minification**: Terser configured with aggressive compression
- **Console Removal**: Production builds strip console logs for smaller bundle size
- **Source Maps**: Disabled in production to reduce build artifacts

### 2. Server-Side Optimization (Express)
- **Gzip Compression**: All text-based responses compressed with level 6 compression
- **Cache Headers**: Strategic cache control for assets
  - Static assets (JS, CSS, images): `Cache-Control: public, max-age=31536000, immutable` (1 year)
  - HTML: `Cache-Control: public, max-age=3600, must-revalidate` (1 hour)
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy
- **ETag Support**: Efficient cache revalidation

### 3. Client-Side Performance
- **Image Optimization**: WebP format with PNG fallback
- **Lazy Loading**: Images and resources loaded on demand
- **Preloading**: Next carousel images preloaded before transition
- **Async Decoding**: Images decoded asynchronously to prevent blocking
- **Responsive Images**: Different sizes for different viewports

### 4. SEO Enhancements
- **Meta Tags**: Complete Open Graph, Twitter Card, and structured data
- **Structured Data (JSON-LD)**:
  - Product schema with ratings and reviews
  - Organization schema with contact information
  - FAQ schema with all questions
  - WebSite schema for search configuration
- **Sitemap.xml**: Complete site structure with images and language alternates
- **robots.txt**: Proper crawl directives for Google and Yandex
- **Canonical URLs**: Prevent duplicate content issues
- **Hreflang Tags**: Language alternates (Russian and Uzbek)

### 5. Monitoring & Analytics
- **Web Vitals Tracking**: Core Web Vitals monitoring
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)
  - First Input Delay (FID)
  - Time to First Byte (TTFB)
- **Yandex.Metrika**: Full integration with event tracking
- **Google Analytics**: Through schema markup

### 6. Deployment Configurations
- **.htaccess** (Apache): GZIP compression, cache headers, SPA routing
- **web.config** (IIS): Cache control, SPA routing, MIME types
- **manifest.json** (PWA): Progressive Web App support for offline viewing

## Performance Metrics Target

| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint (FCP) | < 1.8s | - |
| Largest Contentful Paint (LCP) | < 2.5s | - |
| Cumulative Layout Shift (CLS) | < 0.1 | - |
| Time to First Byte (TTFB) | < 600ms | - |
| Lighthouse Score | > 90 | - |

## Google Search Console Setup
1. Add property: `https://ferfer.pharmevo.uz`
2. Verify site with provided code (already in index.html)
3. Submit sitemap.xml at: `https://ferfer.pharmevo.uz/sitemap.xml`
4. Monitor Core Web Vitals in Search Console

## Yandex Webmaster Setup
1. Add property: `https://ferfer.pharmevo.uz`
2. Verify site (use DNS, HTML meta, or file verification)
3. Submit sitemap at: `https://ferfer.pharmevo.uz/sitemap.xml`
4. Configure crawl speed in Yandex Webmaster

## Local Testing & Monitoring

### Test Performance Locally
```bash
npm run build
npm run preview
```

### Monitor Web Vitals
Performance metrics are automatically collected and reported to Yandex.Metrika. Check real-time data in:
1. Yandex.Metrika dashboard
2. Google Search Console > Experience tab
3. Browser DevTools > Lighthouse

### Bundle Analysis
After build, check `dist/stats.html` for bundle composition.

## Recommendations for Further Improvement

1. **Image Optimization**
   - Use ImageOptim or TinyPNG for manual compression
   - Generate multiple sizes for responsive images
   - Consider using next-gen image formats

2. **Font Optimization**
   - Use `font-display: swap` (already configured)
   - Consider system fonts fallback
   - Preload critical fonts if needed

3. **Code Splitting**
   - Split route-based code chunks
   - Lazy load non-critical components
   - Use React.lazy() for heavy components

4. **Content Optimization**
   - Add more rich snippets for products
   - Create FAQ schema for common questions
   - Add review schema when available

5. **Link Building**
   - Generate backlinks from reputable healthcare sites
   - Submit to Uzbekistan business directories
   - Create content partnerships with health blogs

6. **Technical SEO**
   - Regular crawl analysis with Screaming Frog
   - Monitor 404 errors and redirects
   - Check for indexability issues
   - Test mobile-friendliness regularly

## Monitoring Tools

### Free Tools
- **Google Search Console**: Monitor search visibility
- **Google PageSpeed Insights**: Ongoing performance monitoring
- **Yandex Webmaster**: Track Yandex search performance
- **GTmetrix**: Detailed performance analysis
- **Lighthouse**: Built-in Chrome DevTools

### Paid Tools (Optional)
- **Semrush**: Comprehensive SEO audit
- **Ahrefs**: Backlink analysis
- **Moz Pro**: Ranking tracking
- **Screaming Frog**: Technical SEO crawling

## Deployment Checklist

- [ ] Build production bundle: `npm run build`
- [ ] Test: `npm run preview`
- [ ] Verify cache headers working
- [ ] Check sitemap.xml accessibility
- [ ] Test robots.txt: `yoursite.com/robots.txt`
- [ ] Verify meta tags in page source
- [ ] Check structured data with Schema.org validator
- [ ] Submit to Google Search Console
- [ ] Submit to Yandex Webmaster
- [ ] Monitor Core Web Vitals for 7 days
- [ ] Check Yandex.Metrika integration
- [ ] Test mobile performance
- [ ] Verify HTTPS everywhere
- [ ] Check security headers

## Questions & Support

For SEO and performance questions:
1. Check Google Search Central: https://developers.google.com/search
2. Yandex Webmaster Help: https://yandex.com/support/webmaster/
3. Web.dev Performance Guide: https://web.dev/performance/
