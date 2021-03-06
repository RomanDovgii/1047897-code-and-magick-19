'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  var StatusCode = {
    OK: 200,
    BAD: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUEST: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    IM_A_TEAPOT: 418,
    TOO_MANY_REQUESTS: 429,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTER: 501,
    BAD_GETAWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEAWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    LOOP_DETECTED: 508,
    BANDWIDTH_LIMIT_EXCEEDED: 509,
    NOT_EXTENDED: 510,
    NETWORK_AUTHENTICATION_REQUIRED: 511,
    UNKNOWN_ERROR: 520,
    WEB_SERVER_IS_DOWN: 521,
    CONNECTION_TIMED_OUT: 522,
    ORIGIN_IS_UNREACHABLE: 523,
    A_TIMEOUT_OCCURED: 524,
    SSL_HANDSHAKE_FAILED: 525,
    INVALID_SSL_CERTIFICATE: 526
  };

  window.util = {
    NAMES: NAMES,
    SURNAMES: SURNAMES,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,

    ENTER_KEY_CODE: ENTER_KEY_CODE,
    ESC_KEY_CODE: ESC_KEY_CODE,

    STATUS_CODE: StatusCode
  };
})();
