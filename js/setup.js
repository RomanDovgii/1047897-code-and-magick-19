'use strict';

// constants//
var SIMILAR_CHARACTER_COUNT = 4;

// Lists//
var NAME_LIST = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME_LIST = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR_LIST = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR_LIST = ['black', 'red', 'blue', 'yellow', 'green'];

// DOM elements//
var SETUP_BLOCK = document.querySelector('.setup');
var SETUP_SIMILAR_BLOCK = document.querySelector('.setup-similar');
var SIMILAR_WIZARD_LIST = document.querySelector('.setup-similar-list');
var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// functions//
var createWizard = function () {
  var similarCharacter = {
    name: NAME_LIST[Math.floor(Math.random() * NAME_LIST.length)] + ' ' + SURNAME_LIST[Math.floor(Math.random() * SURNAME_LIST.length)],
    coatColor: COAT_COLOR_LIST[Math.floor(Math.random() * COAT_COLOR_LIST.length)],
    eyesColor: EYES_COLOR_LIST[Math.floor(Math.random() * EYES_COLOR_LIST.length)]
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

// Work with DOM//
SETUP_BLOCK.classList.remove('hidden');
SETUP_SIMILAR_BLOCK.classList.remove('hidden');
appendWizard();
