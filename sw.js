const V="emac-v4",F=["./","index.html","styles.css","app.js","data.js","manifest.webmanifest","icon.svg","icon-192.png","icon-512.png","pub.json"];
self.addEventListener("install",e=>e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(f=>c.add(f).catch(()=>{}))))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
