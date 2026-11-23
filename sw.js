const V="emac-v6";
const CORE=["./","index.html","styles.css","app.js","data.js","manifest.webmanifest","icon.svg"];
const OPTIONAL=["icon-192.png","icon-512.png","pub.json"];

self.addEventListener("install",event=>event.waitUntil((async()=>{
  const cache=await caches.open(V);
  // Core files are required: fail installation rather than silently caching a broken shell.
  await cache.addAll(CORE);
  // Store optional assets when available; the app can still open if a school key is not configured.
  await Promise.all(OPTIONAL.map(async file=>{
    try{await cache.add(file)}catch(error){console.warn("Optional offline asset unavailable:",file,error)}
  }));
})()));

self.addEventListener("activate",event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key!==V).map(key=>caches.delete(key)));
  await self.clients.claim();
})()));

self.addEventListener("fetch",event=>{
  const request=event.request;
  const url=new URL(request.url);
  if(request.method!=="GET"||url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cached=await caches.match(request);
    if(cached)return cached;
    try{
      const response=await fetch(request);
      if(response.ok){
        const cache=await caches.open(V);
        await cache.put(request,response.clone());
      }
      return response;
    }catch(error){
      if(request.mode==="navigate"){
        const shell=await caches.match("./index.html");
        if(shell)return shell;
      }
      throw error;
    }
  })());
});
