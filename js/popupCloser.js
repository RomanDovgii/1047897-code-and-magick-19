'use strict';

(function () {
  var SETUP_BLOCK = document.querySelector('.setup');

  window.popupCloser = function () {
    SETUP_BLOCK.classList.add('hidden');
    SETUP_BLOCK.style.top = window.dragAndDrop.x;
    SETUP_BLOCK.style.left = window.dragAndDrop.y;
  };
})();
