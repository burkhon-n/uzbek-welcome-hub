# Uzbek Welcome Hub (Ferfer)

React + Vite single-page app with multilingual routing (`/ru`, `/uz`) and SEO-friendly metadata (canonical, Open Graph, Twitter cards) managed in React.

## Local development

```bash
npm install
npm run dev
```

## Build & run production

```bash
npm run build
npm run preview
```

Or serve the `dist/` folder with the included Express server:

```bash
npm run build
npm run start
```

## SEO configuration

- **Canonical base URL**: set `VITE_SITE_URL` at build time (e.g. `https://ferfer.pharmevo.uz`).
- **robots / sitemap**: in `public/robots.txt` and `public/sitemap.xml`.
