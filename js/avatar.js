'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var FILE_CHOOSER = document.querySelector('.upload input[type=file]');
  var PREVIEW = document.querySelector('.setup-user-pic');
  var PREVIEW_MAIN = document.querySelector('.setup-open-icon');

  var uploadFile = function () {
    var file = FILE_CHOOSER.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        PREVIEW.src = reader.result;
        PREVIEW_MAIN.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  FILE_CHOOSER.addEventListener('change', uploadFile);
})();
