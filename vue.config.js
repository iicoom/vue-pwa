module.exports = {
   baseUrl: process.env.NODE_ENV === 'production'
        ? '/pwa/'
        : '/', 
   pwa: {
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "src/service-worker.js"
        }
    },
}
