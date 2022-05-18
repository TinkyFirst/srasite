// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('sv.js').then(function(registration) {
//     console.log('ServiceWorker registration successful with scope: ', registration.scope);
//   }).catch(function(err) {
//     //registration failed :(
//     console.log('ServiceWorker registration failed: ', err);
//   });
// }else {
//   console.log('No service-worker on this browser');
// }
self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
      })
  );
});