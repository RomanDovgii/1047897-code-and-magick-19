'use strict';

(function () {
  var SETUP_OPEN_ICON = document.querySelector('.setup-open-icon');

  window.popupOpen = {
    click: function () {
      SETUP_OPEN_ICON.addEventListener('click', function () {
        window.popupOpener();
      });
    },
    enter: function () {
      SETUP_OPEN_ICON.addEventListener('keydown', function (evt) {
        if (evt.keyCode === window.util.ENTER_KEY_CODE) {
          window.popupOpener();
        }
      });
    }
  };
})();
