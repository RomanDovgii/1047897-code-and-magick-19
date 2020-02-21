'use strict';

(function () {
  var SETUP_USER_NAME = document.querySelector('.setup-user-name');
  var SETUP_BLOCK = document.querySelector('.setup');
  var CLOSE_SETUP_BLOCK = document.querySelector('.setup-close');

  window.popupClose = {
    click: function () {
      CLOSE_SETUP_BLOCK.addEventListener('click', function () {
        window.popupCloser();
        window.popupDefaultPositionRestoration();
      });
    },
    enter: function () {
      CLOSE_SETUP_BLOCK.addEventListener('keydown', function (evt) {
        if (evt.keyCode === window.util.ENTER_KEY_CODE) {
          window.popupCloser();
          window.popupDefaultPositionRestoration();
        }
      });
    },
    esc: function () {
      document.addEventListener('keydown', function (evt) {
        if ((evt.keyCode === window.util.ESC_KEY_CODE) && (document.activeElement !== SETUP_USER_NAME) && (SETUP_BLOCK.classList.contains('hidden') === false)) {
          window.popupCloser();
          window.popupDefaultPositionRestoration();
        }
      });
    }
  };
})();
