const V="emac-v10";
const CORE=["./","index.html","styles.css","app.js","data.js","manifest.webmanifest","icon.svg"];
const OPTIONAL=["icon-192.png","icon-512.png","keys.json"];

self.addEventListener("install",event=>event.waitUntil((async()=>{
  const cache=await caches.open(V);
  await cache.addAll(CORE);
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
  if(url.pathname.endsWith("/keys.json")){
    event.respondWith((async()=>{
      const cache=await caches.open(V);
      try{
        const response=await fetch(request,{cache:"no-store"});
        if(response.ok)await cache.put(request,response.clone());
        return response;
      }catch(error){
        const cached=await cache.match(request);
        if(cached)return cached;
        return new Response("Public licence keyring is unavailable.",{status:503,headers:{"Content-Type":"text/plain"}});
      }
    })());
    return;
  }
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
