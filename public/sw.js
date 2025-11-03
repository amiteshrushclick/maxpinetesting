// Service Worker for advanced caching strategy
const CACHE_NAME = 'maxpine-v1';
const STATIC_CACHE = 'maxpine-static-v1';
const DYNAMIC_CACHE = 'maxpine-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/src/index.css',
  '/Maxpine_logo_2.png'
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first for static assets
  CACHE_FIRST: 'cache-first',
  // Network first for dynamic content
  NETWORK_FIRST: 'network-first',
  // Stale while revalidate for images
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) return;

  // Skip external domains (CDNs like ImageKit) - let browser handle them directly
  if (url.hostname !== self.location.hostname) {
    return; // Don't intercept external requests
  }

  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Skip caching for video files - they cause issues with partial content (206)
  if (isVideo(url)) {
    return fetch(request); // Just fetch, don't cache
  }
  
  // Static assets - Cache First
  if (isStaticAsset(url)) {
    return cacheFirst(request, STATIC_CACHE);
  }
  
  // Images - Stale While Revalidate
  if (isImage(url)) {
    return staleWhileRevalidate(request, DYNAMIC_CACHE);
  }
  
  // API calls - Network First
  if (isAPI(url)) {
    return networkFirst(request, DYNAMIC_CACHE);
  }
  
  // HTML pages - Network First with fallback
  if (isHTML(request)) {
    return networkFirst(request, DYNAMIC_CACHE);
  }
  
  // Default - Network First
  return networkFirst(request, DYNAMIC_CACHE);
}

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    // Don't cache partial responses (status 206)
    if (networkResponse.ok && networkResponse.status !== 206) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache first failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network First Strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    // Don't cache partial responses (status 206) - common for video files
    if (networkResponse.ok && networkResponse.status !== 206) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', { status: 503 });
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    // Don't cache partial responses (status 206)
    if (networkResponse.ok && networkResponse.status !== 206) {
      const cache = caches.open(cacheName);
      cache.then(c => c.put(request, networkResponse.clone()));
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

// Helper functions
function isStaticAsset(url) {
  return url.pathname.includes('/assets/') || 
         url.pathname.endsWith('.css') || 
         url.pathname.endsWith('.js') ||
         url.pathname.endsWith('.png') ||
         url.pathname.endsWith('.jpg') ||
         url.pathname.endsWith('.jpeg') ||
         url.pathname.endsWith('.webp') ||
         url.pathname.endsWith('.svg');
}

function isImage(url) {
  return url.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i);
}

function isAPI(url) {
  return url.pathname.startsWith('/api/') || 
         url.hostname.includes('api');
}

function isHTML(request) {
  return request.headers.get('accept').includes('text/html');
}

function isVideo(url) {
  return url.pathname.match(/\.(mp4|webm|ogg|mov|avi|mkv)$/i);
}
