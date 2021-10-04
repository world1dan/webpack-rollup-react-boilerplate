const CACHE = "0.0.1";

const staticAssets = [
  
]


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            return cache.addAll(staticAssets)
        })
    )
})



self.addEventListener('activate', () => {
	caches.keys().then((keys) => {
		if (!keys.includes(CACHE)) {
			caches.open(CACHE).then((cache) => {
				return cache.addAll(staticAssets)
			})
		}

		keys.map((key) => {
			if (key != CACHE) {
				caches.delete(key)
			}
		})
	})
})



async function getResponse(request) {
	const responce = await caches.match(request)
	return responce ?? fetch(request)
}

self.addEventListener('fetch', (event) => {
	event.respondWith(getResponse(event.request))
});
