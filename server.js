const express = require('express');
const path = require('path');
const app = express();

const BOT_UA = /Googlebot|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|GPTBot|PerplexityBot|ClaudeBot|Google-Extended|anthropic-ai|CCBot|Applebot|ia_archiver/i;

function isBot(req) {
  return BOT_UA.test(req.headers['user-agent'] || '');
}

app.get('/', (req, res, next) => {
  const lang = req.query.lang;
  if (lang === 'ru' || lang === 'uz') {
    return res.redirect(301, `/${lang}`);
  }
  return next();
});

app.get('/ru', (req, res, next) => {
  if (isBot(req)) {
    return res.sendFile(path.join(__dirname, 'dist', 'prerender-ru.html'));
  }
  return next();
});

app.get('/uz', (req, res, next) => {
  if (isBot(req)) {
    return res.sendFile(path.join(__dirname, 'dist', 'prerender-uz.html'));
  }
  return next();
});

app.get('/llm', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'llm.html'));
});

app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders(res, filePath) {
    if (filePath.endsWith('.xml')) {
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    }
    if (filePath.endsWith('.xsl')) {
      res.setHeader('Content-Type', 'application/xslt+xml; charset=utf-8');
    }
  },
}));

app.get('/amp', (req, res) => {
  res.redirect(301, '/amp/ru');
});

app.get('/amp/ru', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'amp-ru.html'));
});

app.get('/amp/uz', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'amp-uz.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
