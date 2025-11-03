import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals (logging disabled)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          // LCP monitoring - logging disabled
        }
        if (entry.entryType === 'first-input') {
          // FID monitoring - logging disabled
        }
        if (entry.entryType === 'layout-shift') {
          // CLS monitoring - logging disabled
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor resource loading (logging disabled)
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const loadTime = entry.responseEnd - entry.startTime;
          if (loadTime > 1000) { // Log slow resources
          }
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
