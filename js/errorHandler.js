'use strict';

(function () {
  var FORM = document.querySelector('.setup-wizard-form');
  var SUBMIT_BUTTON = FORM.querySelector('.setup-submit');

  window.renderError = function (errorMessage) {
    var ERROR_BLOCK = document.querySelector('.error-block');

    if (ERROR_BLOCK !== null) {
      ERROR_BLOCK.remove();
    }

    var errorBlock = document.createElement('div');
    errorBlock.style = 'z-index: 50; margin: 0 auto; text-align: center; background-color: #DA641A; width: 100%;';
    errorBlock.style.position = 'fixed';
    errorBlock.style.left = 0;
    errorBlock.style.right = 0;
    errorBlock.style.fontSize = '40px';
    errorBlock.classList.add('error-block');
    errorBlock.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', errorBlock);
    SUBMIT_BUTTON.textContent = 'Сохранить';
    SUBMIT_BUTTON.disabled = false;
  };
})();
