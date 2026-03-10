import { Helmet } from "react-helmet-async";

type OgType = "website" | "article" | "product";

export type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImagePath?: string;
  ogType?: OgType;
  noIndex?: boolean;
  language?: string;
  ogLocale?: string;
  ogLocaleAlternate?: string;
};

const DEFAULT_SITE_URL = "https://ferfer.pharmevo.uz";

function getSiteUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined;
  const siteUrl = (fromEnv || DEFAULT_SITE_URL).trim().replace(/\/+$/, "");
  return siteUrl || DEFAULT_SITE_URL;
}

function toAbsoluteUrl(siteUrl: string, path: string): string {
  if (!path) return siteUrl;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function SEO({
  title,
  description,
  canonicalPath,
  ogImagePath = "/og-image.jpg",
  ogType = "website",
  noIndex = false,
  language,
  ogLocale,
  ogLocaleAlternate,
}: SEOProps) {
  const siteUrl = getSiteUrl();
  const canonicalUrl = toAbsoluteUrl(siteUrl, canonicalPath ?? "/");
  const ogImageUrl = ogImagePath ? toAbsoluteUrl(siteUrl, ogImagePath) : undefined;
  const isLovablePreview =
    typeof window !== "undefined" && window.location.hostname.includes("lovable.app");

  return (
    <Helmet
      prioritizeSeoTags
      htmlAttributes={language ? { lang: language } : undefined}
    >
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="robots"
        content={
          noIndex || isLovablePreview
            ? "noindex,nofollow"
            : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
        }
      />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      {ogLocale && <meta property="og:locale" content={ogLocale} />}
      {ogLocaleAlternate && (
        <meta property="og:locale:alternate" content={ogLocaleAlternate} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
    </Helmet>
  );
}

