'use strict';

// constants//
var SIMILAR_CHARACTER_COUNT = 4;

// Lists//
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// DOM elements//
var SETUP_BLOCK = document.querySelector('.setup');
var SETUP_SIMILAR_BLOCK = document.querySelector('.setup-similar');
var SIMILAR_WIZARD_LIST = document.querySelector('.setup-similar-list');
var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var SETUP_USER_NAME = document.querySelector('.setup-user-name');
var SETUP_OPEN_ICON = document.querySelector('.setup-open-icon');
var CLOSE_SETUP_BLOCK = document.querySelector('.setup-close');
var SETUP_SUBMIT = document.querySelector('.setup-submit');
var SETUP_FORM = document.querySelector('.setup-wizard-form');
var WIZARD_COAT = SETUP_FORM.querySelector('.wizard-coat');
var WIZARD_EYES = SETUP_FORM.querySelector('.wizard-eyes');
var WIZARD_FIREBALL = SETUP_FORM.querySelector('.setup-fireball-wrap');
var WIZARD_APPEARANCE = SETUP_FORM.querySelector('.setup-wizard-appearance');

// buttons //

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

// functions//
var createRandomNumber = function (array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  return randomNumber;
};

var createWizard = function () {
  var similarCharacter = {
    name: NAMES[createRandomNumber(NAMES)] + ' ' + SURNAMES[createRandomNumber(SURNAMES)],
    coatColor: COAT_COLORS[createRandomNumber(COAT_COLORS)],
    eyesColor: EYES_COLORS[createRandomNumber(EYES_COLORS)]
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

var openPopup = function () {
  SETUP_BLOCK.classList.remove('hidden');
};

var closePopup = function () {
  SETUP_BLOCK.classList.add('hidden');
};

var onDocumentEscPress = function () {
  SETUP_USER_NAME.focused = false;

  SETUP_USER_NAME.onfocus = function () {
    this.focused = true;
  };

  SETUP_USER_NAME.onblur = function () {
    this.focused = false;
  };

  document.addEventListener('keydown', function (evt) {
    if ((evt.keyCode === ESC_KEY_CODE) && (SETUP_USER_NAME.focused === false) && (SETUP_BLOCK.classList.contains('hidden') === false)) {
      closePopup();
    }
  });
};

var onCloseButtonClick = function () {
  CLOSE_SETUP_BLOCK.addEventListener('click', function () {
    closePopup();
  });
};

var onCloseButtonEnterPress = function () {
  CLOSE_SETUP_BLOCK.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      closePopup();
    }
  });
};

var onUserIconClick = function () {
  SETUP_OPEN_ICON.addEventListener('click', function () {
    openPopup();
  });
};

var onUserIconEnterPress = function () {
  SETUP_OPEN_ICON.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY_CODE) {
      openPopup();
    }
  });
};

var onSubmitButtonClick = function () {
  SETUP_SUBMIT.addEventListener('click', function (evt) {
    evt.preventDefault();
    SETUP_FORM.submit();
  });
};

var onSubmitButtonEnterPress = function () {
  SETUP_SUBMIT.focused = false;

  SETUP_SUBMIT.onfocus = function () {
    this.focused = true;
  };

  SETUP_SUBMIT.onblur = function () {
    this.focused = false;
  };

  if ((SETUP_BLOCK.classList.contains('hidden')) && (SETUP_SUBMIT.focused = true)) {
    SETUP_SUBMIT.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEY_CODE) {
        evt.preventDefault();
        SETUP_FORM.submit();
      }
    });
  }
};

var popupActionsHandler = function () {
  onCloseButtonClick();
  onCloseButtonEnterPress();
  onUserIconClick();
  onUserIconEnterPress();
  onSubmitButtonClick();
  onSubmitButtonEnterPress();
  onDocumentEscPress();
};

var onCoatBlockClick = function () {
  WIZARD_COAT.addEventListener('click', function () {
    var randomNumber = createRandomNumber(COAT_COLORS);
    WIZARD_COAT.style.fill = COAT_COLORS[randomNumber];
    WIZARD_APPEARANCE.querySelector('input[name="coat-color"]').value = COAT_COLORS[randomNumber];
  });
};

var onEyesBlockClick = function () {
  WIZARD_EYES.addEventListener('click', function () {
    var randomNumber = createRandomNumber(EYES_COLORS);
    WIZARD_EYES.style.fill = EYES_COLORS[randomNumber];
    WIZARD_APPEARANCE.querySelector('input[name="eyes-color"]').value = EYES_COLORS[randomNumber];
  });
};

var onFireballBlockClick = function () {
  WIZARD_FIREBALL.addEventListener('click', function () {
    var randomNumber = createRandomNumber(FIREBALL_COLORS);
    WIZARD_FIREBALL.style.background = FIREBALL_COLORS[randomNumber];
    WIZARD_FIREBALL.querySelector('input[name="fireball-color"]').value = FIREBALL_COLORS[randomNumber];
  });
};

// programm//


SETUP_SIMILAR_BLOCK.classList.remove('hidden');

onFireballBlockClick();
onEyesBlockClick();
onCoatBlockClick();
popupActionsHandler();
appendWizard();
