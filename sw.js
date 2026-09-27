// Major Exam Creator offline support. Change VERSION when you upload new files.
const VERSION = 'majorexam-v1';
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/fonts.css",
  "./fonts/source-serif-4-latin-500-normal.woff2",
  "./fonts/source-serif-4-latin-600-normal.woff2",
  "./fonts/source-serif-4-latin-700-normal.woff2",
  "./fonts/source-sans-3-latin-400-normal.woff2",
  "./fonts/source-sans-3-latin-500-normal.woff2",
  "./fonts/source-sans-3-latin-600-normal.woff2",
  "./fonts/source-sans-3-latin-700-normal.woff2",
  "./fonts/jetbrains-mono-latin-400-normal.woff2",
  "./fonts/jetbrains-mono-latin-500-normal.woff2",
  "./lib/xlsx-js-style.bundle.js",
  "./lib/docx.umd.js",
  "./lib/jspdf.umd.min.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-48.png"
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // Page: try the internet first so updates show up, fall back to the saved copy offline.
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return r;
  })));
});
