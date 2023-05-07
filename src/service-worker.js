// version 2
//self.__precacheManifest = [].concat(self.__precacheManifest || []);
//workbox.precaching.suppressWarnings();
//workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// install new service worker when ok, then reload page.
self.addEventListener("message", msg=>{
    console.log('self.addEventListener', msg.data.action=='SKIP_WAITING')
    if (msg.data.action=='SKIP_WAITING'){
        self.skipWaiting()
    }
})
