(function() {
  'use strict';
  /*
  // 4. Conditionally load the webcomponents polyfill if needed by the browser.
  // This feature detect will need to change over time as browsers implement
  // different features.
  var webComponentsSupported = ('registerElement' in document
    && 'import' in document.createElement('link')
    && 'content' in document.createElement('template'));

  if (!webComponentsSupported) {
    var script = document.createElement('script');
    script.async = true;
    script.src = '//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.12/webcomponents-lite.min.js';
    script.onload = loadElements;
    document.head.appendChild(script);
  } else {
    loadElements();
  }
  
  function loadElements() {
    var bundle = document.createElement('link');
    bundle.rel = 'import';
    bundle.href = 'elements/elements.html';
    document.head.appendChild(bundle);
    bundle.onload = function() {
      console.log('bundle.onload');
      var loadEl = document.getElementById('splash');
      loadEl.addEventListener('transitionend', loadEl.remove());
      document.body.classList.remove('loading');
    };
  }
  
  function finishLazyLoading() {
    // (Optional) Use native Shadow DOM if it's available in the browser.
    window.Polymer = window.Polymer || { dom: 'shadow' };

    // 6. Fade splash screen, then remove.
    var onImportLoaded = function () {
      console.log('onImportLoaded');
      var loadEl = document.getElementById('splash');
      loadEl.addEventListener('transitionend', loadEl.remove);

      document.body.classList.remove('loading');
    
      // App is visible and ready to load some data!
    };

    var link = document.querySelector('#bundle');

    // 5. Go if the async Import loaded quickly. Otherwise wait for it.
    // crbug.com/504944 - readyState never goes to complete until Chrome 46.
    // crbug.com/505279 - Resource Timing API is not available until Chrome 46.
    if (link.import && link.import.readyState === 'complete') {
      onImportLoaded();
    } else {
      link.addEventListener('load', onImportLoaded);
    }
  }
  */
  
  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  
  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    console.log('WebComponentsReady');
  });

})();
