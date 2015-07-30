(function () {

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
  
}());
