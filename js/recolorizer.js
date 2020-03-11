'use strict';

(function () {
  var SETUP_FORM = document.querySelector('.setup-wizard-form');
  var WIZARD_APPEARANCE = SETUP_FORM.querySelector('.setup-wizard-appearance');
  var SIMILAR_WIZARD_LIST = document.querySelector('.setup-similar-list');
  var WIZARD_COAT = SETUP_FORM.querySelector('.wizard-coat');
  var WIZARD_EYES = SETUP_FORM.querySelector('.wizard-eyes');
  var WIZARD_FIREBALL = SETUP_FORM.querySelector('.setup-fireball-wrap');

  var wizards = [];
  var copyWizards = [];
  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';

  var successHandler = function (data) {
    wizards = data;
    copyWizards = wizards.slice();
    updateSimilarWizards();
  };

  var debounce = window.debounce(function () {
    updateSimilarWizards();
  });

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateSimilarWizards = function () {
    SIMILAR_WIZARD_LIST.innerHTML = '';
    window.render.similarWizards(copyWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var exportElementColor = function (type, number) {
    switch (type) {
      case WIZARD_COAT:
        coatColor = window.util.COAT_COLORS[number];
        break;
      case WIZARD_EYES:
        eyesColor = window.util.EYES_COLORS[number];
        break;
      default:
        coatColor = WIZARD_COAT.style.fill;
        eyesColor = WIZARD_EYES.style.fill;
        break;
    }
  };

  window.backend.load(successHandler);

  window.recolorizer = {
    coat: function () {
      WIZARD_COAT.addEventListener('click', function () {
        var randomNumber = window.arrayRandomElement(window.util.COAT_COLORS);
        WIZARD_COAT.style.fill = window.util.COAT_COLORS[randomNumber];
        WIZARD_APPEARANCE.querySelector('input[name="coat-color"]').value = window.util.COAT_COLORS[randomNumber];
        exportElementColor(WIZARD_COAT, randomNumber);
        debounce();
      });
    },
    eyes: function () {
      WIZARD_EYES.addEventListener('click', function () {
        var randomNumber = window.arrayRandomElement(window.util.EYES_COLORS);
        WIZARD_EYES.style.fill = window.util.EYES_COLORS[randomNumber];
        WIZARD_APPEARANCE.querySelector('input[name="eyes-color"]').value = window.util.EYES_COLORS[randomNumber];
        exportElementColor(WIZARD_EYES, randomNumber);
        debounce();
      });
    },
    fireball: function () {
      WIZARD_FIREBALL.addEventListener('click', function () {
        var randomNumber = window.arrayRandomElement(window.util.FIREBALL_COLORS);
        WIZARD_FIREBALL.style.background = window.util.FIREBALL_COLORS[randomNumber];
        WIZARD_FIREBALL.querySelector('input[name="fireball-color"]').value = window.util.FIREBALL_COLORS[randomNumber];
        exportElementColor(WIZARD_FIREBALL, randomNumber);
      });
    }
  };
})();
