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
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js?v3', {
      scope: '.' // THIS IS REQUIRED FOR RUNNING A PROGRESSIVE WEB APP FROM A NON_ROOT PATH
  }).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
  });
}