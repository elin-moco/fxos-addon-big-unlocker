(function () {
  var MANIFEST_URL = '/fxos-addon-big-unlocker/manifest.webapp';

  // If injecting into an app that was already running at the time
  // the app was enabled, simply initialize it.
  if (document.documentElement) {
    initialize();
  }

  // Otherwise, we need to wait for the DOM to be ready before
  // starting initialization since add-ons are usually (always?)
  // injected *before* `document.documentElement` is defined.
  else {
    window.addEventListener('DOMContentLoaded', initialize);
  }

  function initialize() {

    // Just a small shortcut to repeat myself less
    var $$ = document.getElementById.bind(document);

    // Remove existing control, for when this addon is re-run.
    var containerEl = $$('lockscreen-icon-container');
    containerEl.setAttribute('style', 'transform: scale(1.2, 1.5); bottom: 5%;');
  }
  
  function uninitialize() {
    var $$ = document.getElementById.bind(document);
    var containerEl = $$('lockscreen-icon-container');
    containerEl.removeAttribute('style');
  }

  navigator.mozApps.mgmt.onenabledstatechange = function(event) {
    var app = event.application;
    if (app.manifestURL.indexOf(MANIFEST_URL) > 0 && !app.enabled) {
      uninitialize();
    }
  };
}());
