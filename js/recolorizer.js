'use strict';

(function () {
  var SETUP_FORM = document.querySelector('.setup-wizard-form');
  var WIZARD_APPEARANCE = SETUP_FORM.querySelector('.setup-wizard-appearance');
  var WIZARD_COAT = SETUP_FORM.querySelector('.wizard-coat');
  var WIZARD_EYES = SETUP_FORM.querySelector('.wizard-eyes');
  var WIZARD_FIREBALL = SETUP_FORM.querySelector('.setup-fireball-wrap');

  window.recolorizer = {
    coat: function () {
      WIZARD_COAT.addEventListener('click', function () {
        var randomNumber = window.arrayRandomElement(window.util.COAT_COLORS);
        WIZARD_COAT.style.fill = window.util.COAT_COLORS[randomNumber];
        WIZARD_APPEARANCE.querySelector('input[name="coat-color"]').value = window.util.COAT_COLORS[randomNumber];
      });
    },
    eyes: function () {
      WIZARD_EYES.addEventListener('click', function () {
        var randomNumber = window.arrayRandomElement(window.util.EYES_COLORS);
        WIZARD_EYES.style.fill = window.util.EYES_COLORS[randomNumber];
        WIZARD_APPEARANCE.querySelector('input[name="eyes-color"]').value = window.util.EYES_COLORS[randomNumber];
      });
    },
    fireball: function () {
      WIZARD_FIREBALL.addEventListener('click', function () {
        var randomNumber = window.arrayRandomElement(window.util.FIREBALL_COLORS);
        WIZARD_FIREBALL.style.background = window.util.FIREBALL_COLORS[randomNumber];
        WIZARD_FIREBALL.querySelector('input[name="fireball-color"]').value = window.util.FIREBALL_COLORS[randomNumber];
      });
    }

  };
})();
