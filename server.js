const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

// Enable compression for all responses
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Set security and performance headers
app.use((req, res, next) => {
  // Cache control for static assets
  if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2|eot|ttf|otf)$/)) {
    res.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // HTML files - revalidate frequently
  if (req.url.endsWith('.html') || !req.url.includes('.')) {
    res.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  }
  
  // Security headers
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('X-Frame-Options', 'SAMEORIGIN');
  res.set('X-XSS-Protection', '1; mode=block');
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  next();
});

// Serve static files from dist with aggressive caching
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  etag: false,
}));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), {
    headers: {
      'Cache-Control': 'public, max-age=3600, must-revalidate'
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
