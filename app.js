if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sv.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    //registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}else {
  console.log('No service-worker on this browser');
}
 // helps you detect mobile browsers (to show a relevant message as the process of installing your PWA changes from browser to browser)
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Samsung: function () {
    return navigator.userAgent.match(
      /SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[A|N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i,
    );
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};