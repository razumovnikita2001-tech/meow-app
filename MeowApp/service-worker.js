const CACHE_NAME = 'cat-cache-v2';
const urlsToCache = [
  'index.html',
  'MA.png',
  'cry.png',
  'mu-1.mp3',
  'mu-2.mp3',
  'mu-3.mp3',
  'mu-4.mp3',
  'mu-5.mp3',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});