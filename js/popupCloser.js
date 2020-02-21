'use strict';

(function () {
  var SETUP_BLOCK = document.querySelector('.setup');

  window.popupCloser = function () {
    SETUP_BLOCK.classList.add('hidden');
  };
})();
