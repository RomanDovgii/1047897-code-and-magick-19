'use strict';

(function () {
  var SETUP_BLOCK = document.querySelector('.setup');

  window.popupOpener = function () {
    SETUP_BLOCK.classList.remove('hidden');
  };
})();
