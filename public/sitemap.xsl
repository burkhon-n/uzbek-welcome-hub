<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="sm xhtml image">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="noindex,nofollow"/>
        <title>Sitemap — ferfer.pharmevo.uz</title>
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f8f9fa; color: #212529; }
          header { background: #E91E8C; color: #fff; padding: 24px 32px; }
          header h1 { font-size: 1.4rem; font-weight: 700; letter-spacing: -0.02em; }
          header p { font-size: 0.85rem; opacity: 0.85; margin-top: 4px; }
          main { max-width: 900px; margin: 32px auto; padding: 0 16px 64px; }
          .meta { background: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px; font-size: 0.85rem; color: #6c757d; display: flex; gap: 24px; flex-wrap: wrap; }
          .meta span b { color: #212529; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; border: 1px solid #dee2e6; }
          thead { background: #f1f3f5; }
          th { padding: 12px 16px; text-align: left; font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6c757d; border-bottom: 1px solid #dee2e6; }
          td { padding: 14px 16px; border-bottom: 1px solid #f1f3f5; font-size: 0.875rem; vertical-align: top; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f8f9fa; }
          .url-link { color: #E91E8C; text-decoration: none; font-weight: 500; word-break: break-all; }
          .url-link:hover { text-decoration: underline; }
          .badge { display: inline-block; background: #fff0f7; color: #E91E8C; border: 1px solid #f8aad4; border-radius: 4px; padding: 2px 8px; font-size: 0.75rem; font-weight: 600; }
          .hreflang { display: flex; gap: 6px; flex-wrap: wrap; }
          .lang-tag { display: inline-block; background: #e9ecef; color: #495057; border-radius: 4px; padding: 2px 7px; font-size: 0.75rem; font-family: monospace; }
          .image-cell { font-size: 0.8rem; color: #6c757d; }
          .image-cell a { color: #6c757d; text-decoration: none; }
          .image-cell a:hover { text-decoration: underline; }
          footer { text-align: center; font-size: 0.78rem; color: #adb5bd; padding-bottom: 32px; }
        </style>
      </head>
      <body>
        <header>
          <h1>XML Sitemap — Ferfer®</h1>
          <p>ferfer.pharmevo.uz · This file is read by search engine crawlers</p>
        </header>
        <main>
          <div class="meta">
            <span>URLs: <b><xsl:value-of select="count(sm:urlset/sm:url)"/></b></span>
            <span>Format: <b>Sitemap Protocol 0.9 + hreflang + Image</b></span>
            <span>Encoding: <b>UTF-8</b></span>
          </div>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Priority</th>
                <th>Languages</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <tr>
                  <td>
                    <a class="url-link" href="{sm:loc}">
                      <xsl:value-of select="sm:loc"/>
                    </a>
                    <xsl:if test="sm:changefreq">
                      <br/><span style="font-size:0.75rem;color:#adb5bd">
                        <xsl:value-of select="sm:changefreq"/>
                      </span>
                    </xsl:if>
                  </td>
                  <td style="white-space:nowrap;color:#6c757d">
                    <xsl:value-of select="substring(sm:lastmod,1,10)"/>
                  </td>
                  <td>
                    <span class="badge"><xsl:value-of select="sm:priority"/></span>
                  </td>
                  <td>
                    <div class="hreflang">
                      <xsl:for-each select="xhtml:link[@rel='alternate']">
                        <span class="lang-tag"><xsl:value-of select="@hreflang"/></span>
                      </xsl:for-each>
                    </div>
                  </td>
                  <td class="image-cell">
                    <xsl:if test="image:image">
                      <a href="{image:image/image:loc}" target="_blank" rel="noopener">
                        <xsl:value-of select="image:image/image:title"/>
                      </a>
                    </xsl:if>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
        <footer>
          Generated by ferfer.pharmevo.uz · Read by Google, Yandex and other search engines
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
