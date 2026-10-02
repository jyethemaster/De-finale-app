// Offline cache. Bump VERSION whenever you update index.html so phones fetch the new version.
const VERSION="woorden-v1";
const FILES=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-maskable-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(
    fetch(e.request).then(r=>{const c=r.clone();caches.open(VERSION).then(ch=>ch.put(e.request,c));return r})
      .catch(()=>caches.match(e.request).then(m=>m||caches.match("./index.html")))
  );
});
