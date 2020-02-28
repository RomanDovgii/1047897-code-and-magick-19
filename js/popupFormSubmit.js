'use strict';

(function () {
  var FORM = document.querySelector('.setup-wizard-form');
  var SUBMIT_BUTTON = FORM.querySelector('.setup-submit');

  FORM.addEventListener('submit', function (evt) {
    SUBMIT_BUTTON.textContent = 'Данные сохраняются...';
    SUBMIT_BUTTON.disabled = true;

    window.upload(new FormData(FORM), function () {
      window.popupCloser();
      SUBMIT_BUTTON.textContent = 'Сохранить';
      SUBMIT_BUTTON.disabled = false;
    });

    evt.preventDefault();
  });
})();
