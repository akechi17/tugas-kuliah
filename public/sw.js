const CACHE_NAME = 'komputer-masyarakat-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/vite.svg',
  '/audio/music.mp3',
  '/fonts/4dd591d8-4168-4263-b05b-7183ddaff1f4.woff2',
  '/fonts/90882e39-7091-4415-b231-1e068ccdcc6f.woff'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Navigasi (HTML): network-first agar deploy baru langsung terlihat,
  // cache hanya dipakai saat offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return response;
        })
        .catch(() =>
          caches.match(req).then((r) => r || caches.match('/index.html'))
        )
    );
    return;
  }

  // Aset statis (audio, font, gambar): cache-first.
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(CACHE_NAME)
          .then((cache) => {
            cache.put(event.request, responseToCache);
          });

        return response;
      });
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});
