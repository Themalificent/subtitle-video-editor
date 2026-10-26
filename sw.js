// Subtitle burner: keeps a copy of the app on the phone so it opens without internet.
// It opens from the copy straight away and refreshes the copy in the background when
// there's internet, so a newly uploaded version shows up the next time the app opens.
var CACHE = 'subtitle-burner';
var FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  var fresh = fetch(req).then(function(res){
    if (res && res.ok){ var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); }); }
    return res;
  });
  e.waitUntil(fresh.catch(function(){}));
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function(hit){ return hit || fresh; }));
});
