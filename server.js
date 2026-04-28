const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  const lang = req.query.lang;

  if (lang === 'ru' || lang === 'uz') {
    return res.redirect(301, `/${lang}`);
  }

  return res.redirect(301, '/ru');
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
