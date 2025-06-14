// sw.js (Service Worker)
const CACHE_NAME = 'research-portfolio-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/enhanced-style.css',
  '/js/enhanced-main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
