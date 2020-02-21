'use strict';

(function () {
  window.arrayRandomElement = function (array) {
    var randomNumber = Math.floor(Math.random() * array.length);
    return randomNumber;
  };
})();
