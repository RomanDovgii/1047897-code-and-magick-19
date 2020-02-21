'use strict';

(function () {
  var SETUP = document.querySelector('.setup');
  window.popupDefaultPositionRestoration = function () {
    SETUP.style.top = window.dragAndDrop.x;
    SETUP.style.left = window.dragAndDrop.y;
  };

})();
