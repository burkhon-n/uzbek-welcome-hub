/**
 * Performance Monitoring & Optimization Utilities
 * Tracks Core Web Vitals and page performance metrics
 */

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  cls?: number; // Cumulative Layout Shift
  fid?: number; // First Input Delay
  ttfb?: number; // Time to First Byte
}

/**
 * Initialize Web Vitals monitoring
 * Reports metrics to Yandex.Metrika and Google Analytics if available
 */
export const initializeWebVitals = () => {
  if (typeof window === 'undefined') return;

  const metrics: PerformanceMetrics = {};

  // Use PerformanceObserver if available
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.lcp = Math.round(lastEntry.renderTime || lastEntry.loadTime);
        reportMetrics(metrics);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.error('[v0] LCP observer failed:', e);
    }

    // Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            metrics.cls = (metrics.cls || 0) + (entry as any).value;
          }
        }
        reportMetrics(metrics);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.error('[v0] CLS observer failed:', e);
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        metrics.fid = Math.round((firstEntry as any).processingDuration);
        reportMetrics(metrics);
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.error('[v0] FID observer failed:', e);
    }
  }

  // Get TTFB from navigation timing
  if ('performance' in window && 'timing' in performance) {
    const nav = performance.timing;
    if (nav.responseStart > nav.fetchStart) {
      metrics.ttfb = nav.responseStart - nav.fetchStart;
    }
  }

  // Report metrics after page load
  if (document.readyState === 'complete') {
    reportMetrics(metrics);
  } else {
    window.addEventListener('load', () => reportMetrics(metrics));
  }
};

/**
 * Report metrics to analytics services
 */
const reportMetrics = (metrics: PerformanceMetrics) => {
  // Report to Yandex.Metrika if available
  if ('ym' in window) {
    const yandexMetrics: Record<string, number> = {};
    if (metrics.fcp) yandexMetrics['FCP'] = metrics.fcp;
    if (metrics.lcp) yandexMetrics['LCP'] = metrics.lcp;
    if (metrics.cls) yandexMetrics['CLS'] = Math.round(metrics.cls * 1000);
    if (metrics.fid) yandexMetrics['FID'] = metrics.fid;
    if (metrics.ttfb) yandexMetrics['TTFB'] = metrics.ttfb;
    
    Object.entries(yandexMetrics).forEach(([key, value]) => {
      try {
        (window as any).ym(106792790, 'setUserID', `${key}:${value}`);
      } catch (e) {
        console.error('[v0] Failed to report metric to Yandex:', e);
      }
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[v0] Performance Metrics:', metrics);
  }
};

/**
 * Lazy load images with Intersection Observer
 */
export const observeImages = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

/**
 * Prefetch links on hover for faster navigation
 */
export const prefetchLinks = () => {
  if (typeof window === 'undefined' || !('requestIdleCallback' in window)) {
    return;
  }

  const links = document.querySelectorAll('a[href^="/"]');
  
  const prefetchLink = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  };

  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      const href = link.getAttribute('href');
      if (href) {
        (window as any).requestIdleCallback(() => prefetchLink(href));
      }
    });
  });
};

export default {
  initializeWebVitals,
  observeImages,
  prefetchLinks,
};
