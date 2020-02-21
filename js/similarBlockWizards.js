'use strict';

(function () {
  var SIMILAR_CHARACTER_COUNT = 4;
  var SETUP_SIMILAR_BLOCK = document.querySelector('.setup-similar');
  var SIMILAR_WIZARD_LIST = document.querySelector('.setup-similar-list');
  var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  SETUP_SIMILAR_BLOCK.classList.remove('hidden');

  var createWizard = function () {
    var similarCharacter = {
      name: window.util.NAMES[window.arrayRandomElement(window.util.NAMES)] + ' ' + window.util.SURNAMES[window.arrayRandomElement(window.util.SURNAMES)],
      coatColor: window.util.COAT_COLORS[window.arrayRandomElement(window.util.COAT_COLORS)],
      eyesColor: window.util.EYES_COLORS[window.arrayRandomElement(window.util.EYES_COLORS)]
    };
    return similarCharacter;
  };

  var renderWizard = function () {
    var character = createWizard();
    var similarWizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
    similarWizardElement.querySelector('.setup-similar-label').textContent = character.name;
    similarWizardElement.querySelector('.wizard-coat').style.fill = character.coatColor;
    similarWizardElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;
    var fragment = document.createDocumentFragment();
    fragment.appendChild(similarWizardElement);
    return fragment;
  };

  var appendWizard = function () {
    for (var i = 0; i < SIMILAR_CHARACTER_COUNT; i++) {
      SIMILAR_WIZARD_LIST.appendChild(renderWizard());
    }
  };

  appendWizard();
})();
