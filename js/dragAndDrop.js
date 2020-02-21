'use strict';

(function () {
  var SETUP = document.querySelector('.setup');
  var SETUP_UPLOAD = document.querySelector('.upload');

  var resetCoords = {
    x: SETUP.style.top,
    y: SETUP.style.left,
  };

  SETUP_UPLOAD.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      SETUP.style.top = (SETUP.offsetTop - shift.y) + 'px';
      SETUP.style.left = (SETUP.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          SETUP_UPLOAD.removeEventListener('click', onClickPreventDefault);
        };
        SETUP_UPLOAD.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.dragAndDrop = {
    x: resetCoords.x,
    y: resetCoords.y
  };
})();
