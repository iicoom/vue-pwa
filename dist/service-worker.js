importScripts("/pwa/precache-manifest.39561856f192fce1bdc59618b4d3e428.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// version 2
//self.__precacheManifest = [].concat(self.__precacheManifest || []);
//workbox.precaching.suppressWarnings();
//workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// install new service worker when ok, then reload page.
self.addEventListener("message", msg=>{
    if (msg.data.type === 'SKIP_WAITING'){
        self.skipWaiting()
    }
})

