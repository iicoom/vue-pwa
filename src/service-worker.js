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
