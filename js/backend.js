'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';


    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case window.util.STATUS_CODE.OK:
          onSuccess(xhr.response);
          break;
        case window.util.STATUS_CODE.BAD:
          window.renderError('Увы, запрос с вашей стороны оказался не верен');
          break;
        case window.util.STATUS_CODE.UNAUTHORIZED:
          window.renderError('Увы, вы не авторизованы, чтобы сделать это');
          break;
        case window.util.STATUS_CODE.PAYMENT_REQUEST:
          window.renderError('Увы, но сначала нужно задонатить');
          break;
        case window.util.STATUS_CODE.FORBIDDEN:
          window.renderError('Увы, но это запрещено');
          break;
        case window.util.STATUS_CODE.NOT_FOUND:
          window.renderError('Увы, такой страницы не существует');
          break;
        case window.util.STATUS_CODE.METHOD_NOT_ALLOWED:
          window.renderError('');
          break;
        case window.util.STATUS_CODE.NOT_ACCEPTABLE:
          window.renderError('Увы, это недопустимо');
          break;
        case window.util.STATUS_CODE.PROXY_AUTHENTICATION_REQUIRED:
          window.renderError('Увы, но сперва нужна аутентификация прокси');
          break;
        case window.util.STATUS_CODE.REQUEST_TIMEOUT:
          window.renderError('Увы, но истекло время ождания запроса');
          break;
        case window.util.STATUS_CODE.CONFLICT:
          window.renderError('Увы, но произошел конфлик');
          break;
        case window.util.STATUS_CODE.GONE:
          window.renderError('Увы, но эта часть была удалена');
          break;
        case window.util.STATUS_CODE.IM_A_TEAPOT:
          window.renderError('Увы, но мы людисты, все что не человек - не имеет доступа');
          break;
        case window.util.STATUS_CODE.TOO_MANY_REQUESTS:
          window.renderError('Увы, но вы совершили слишком много запросов, подождите немного');
          break;
        case window.util.STATUS_CODE.UNAVAILABLE_FOR_LEGAL_REASONS:
          window.renderError('Увы, но данное действие недоступно по причинам законодательства в вашей стране, попробуйте свергнуть власть');
          break;
        case window.util.STATUS_CODE.CLIENT_CLOSED_REQUEST:
          window.renderError('Увы, но вы закрыли соединение');
          break;
        case window.util.STATUS_CODE.INTERNAL_SERVER_ERROR:
          window.renderError('Извиняемся, но у нас произшла внутренняя ошибка сервера');
          break;
        case window.util.STATUS_CODE.NOT_IMPLEMENTER:
          window.renderError('Извиняемся, но у нас данная функция не реализована');
          break;
        case window.util.STATUS_CODE.BAD_GETAWAY:
          window.renderError('Извиняемся, но у нас случилась проблема со шлюзом');
          break;
        case window.util.STATUS_CODE.SERVICE_UNAVAILABLE:
          window.renderError('Извиняемся, но наш сервис недоступен');
          break;
        case window.util.STATUS_CODE.GATEAWAY_TIMEOUT:
          window.renderError('Извиняемся, но наш шлюз не отвечает');
          break;
        case window.util.STATUS_CODE.HTTP_VERSION_NOT_SUPPORTED:
          window.renderError('Извиняемся, но наша версия HTTP не поддерживается');
          break;
        case window.util.STATUS_CODE.VARIANT_ALSO_NEGOTIATES:
          window.renderError('Извиняемся, но наш вариант тоже проводит согласование');
          break;
        case window.util.STATUS_CODE.INSUFFICIENT_STORAGE:
          window.renderError('Извиняемся, но у нас на сервере закончилась память');
          break;
        case window.util.STATUS_CODE.LOOP_DETECTED:
          window.renderError('Извиняемся, но у нас обнаружено бесконечное перенаправление');
          break;
        case window.util.STATUS_CODE.BANDWIDTH_LIMIT_EXCEEDED:
          window.renderError('Извиняемся, но у нас исчерпана пропускная шина памяти');
          break;
        case window.util.STATUS_CODE.NOT_EXTENDED:
          window.renderError('Извиняемся, но у нас возникла проблема с расширением');
          break;
        case window.util.STATUS_CODE.NETWORK_AUTHENTICATION_REQUIRED:
          window.renderError('Извиняемся, но у нас требуется сетевая аутентификация');
          break;
        case window.util.STATUS_CODE.UNKNOWN_ERROR:
          window.renderError('Извиняемся, но у нас произошла неизвестная ошибка');
          break;
        case window.util.STATUS_CODE.WEB_SERVER_IS_DOWN:
          window.renderError('Извиняемся, но у наc сервер не работает');
          break;
        case window.util.STATUS_CODE.CONNECTION_TIMED_OUT:
          window.renderError('Извиняемся, но у наше соединение не отвечает');
          break;
        case window.util.STATUS_CODE.ORIGIN_IS_UNREACHABLE:
          window.renderError('Извиняемся, но у наш источник недоступен');
          break;
        case window.util.STATUS_CODE.A_TIMEOUT_OCCURED:
          window.renderError('Извиняемся, но у нас истекло время ожидания');
          break;
        case window.util.STATUS_CODE.SSL_HANDSHAKE_FAILED:
          window.renderError('Извиняемся, но у нас не удалось квитирование SSL');
          break;
        case window.util.STATUS_CODE.INVALID_SSL_CERTIFICATE:
          window.renderError('Извиняемся, но у нас недействительный сертификат SSL');
          break;
        default:
          window.renderError('Даже мы не знаем, что пошло не так');
          break;
      }

    });

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
