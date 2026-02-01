# SEO Setup Guide for Ferfer.uz

## Step 1: Google Search Console Setup

### A. Add Your Property
1. Visit: https://search.google.com/search-console
2. Click "Add Property"
3. Enter: `ferfer.uz`

### B. Verify Ownership (Choose one method)

#### Method 1: HTML File Upload (Recommended)
1. Download verification file from Google Search Console
2. Place it in `/public` folder of your project
3. Deploy the site
4. Click "Verify" in Search Console

#### Method 2: DNS Verification
1. Get TXT record from Google Search Console
2. Add to your domain DNS settings
3. Wait for DNS propagation (5-30 minutes)
4. Click "Verify" in Search Console

### C. Submit Sitemap
1. In Search Console, go to "Sitemaps" (left menu)
2. Enter: `https://ferfer.uz/sitemap.xml`
3. Click "Submit"

### D. Request Indexing
1. Go to "URL Inspection" tool
2. Enter each URL:
   - https://ferfer.uz/
   - https://ferfer.uz/#about
   - https://ferfer.uz/#benefits
   - https://ferfer.uz/#partners
   - https://ferfer.uz/#faq
3. Click "Request Indexing" for each

## Step 2: Yandex Webmaster (Important for Uzbekistan market)

### A. Add Site
1. Visit: https://webmaster.yandex.com
2. Click "Add Site"
3. Enter: `ferfer.uz`

### B. Verify Ownership
Similar to Google, use HTML file or Meta tag method

### C. Submit Sitemap
1. Go to "Indexing" → "Sitemap files"
2. Add: `https://ferfer.uz/sitemap.xml`

## Step 3: Create OG Image

Create a 1200x630px image with:
- Ferfer product photo
- Brand name/logo
- Key benefit (e.g., "Микрокапсулированное железо")
- Clean, professional design

Save as: `/public/og-image.jpg`

## Step 4: SSL Certificate

Ensure your hosting has SSL enabled:
- URL should be: `https://ferfer.uz` (not http://)
- Set up automatic redirect from HTTP to HTTPS

## Step 5: Performance Check

Run these tests:
1. **PageSpeed Insights**: https://pagespeed.web.dev
   - Enter: ferfer.uz
   - Target: 90+ score

2. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
   - Ensure all pages pass

## Step 6: Monitor Results

### Week 1-2: Initial Crawling
- Check Search Console for crawl errors
- Monitor index coverage

### Week 2-4: Early Rankings
- Check for brand keyword appearances
- Monitor organic clicks/impressions

### Month 2-3: Growth Phase
- Track keyword rankings
- Analyze user behavior
- Optimize based on data

## Expected Timeline

- **24-48 hours**: Google discovers your site
- **1-2 weeks**: Site appears in search for brand name
- **2-4 weeks**: Ranking for specific keywords begins
- **2-3 months**: Stable rankings achieved

## Quick Win Keywords

Target these for fast results:
1. "ферфер узбекистан" (brand + location)
2. "купить ферфер ташкент" (buy intent + location)
3. "pharm evo ferfer" (brand variations)
4. "ferfer цена" (price queries)

## Commands to Generate Sitemap Automatically

If you need to regenerate sitemap in the future, run:

\`\`\`bash
npm run build
# Sitemap is already configured at /public/sitemap.xml
\`\`\`

## Monitoring Commands

Check if your site is indexed:
\`\`\`bash
# Google
site:ferfer.uz

# Yandex  
site:ferfer.uz
\`\`\`

---

## Support Checklist

- [ ] Domain registered and DNS configured
- [ ] Hosting set up with HTTPS
- [ ] Site deployed and accessible
- [ ] robots.txt accessible at /robots.txt
- [ ] sitemap.xml accessible at /sitemap.xml
- [ ] OG image created and uploaded
- [ ] Google Search Console verified
- [ ] Yandex Webmaster verified
- [ ] Initial indexing requested
- [ ] Analytics installed (optional)

---

Need help? Check these resources:
- Google Search Console Help: https://support.google.com/webmasters
- Yandex Webmaster Help: https://yandex.com/support/webmaster
