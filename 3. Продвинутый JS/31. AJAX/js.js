let inputRUB = document.getElementById('rub'),
   inputUSD = document.getElementById('usd');


inputRUB.addEventListener('input', () => {
   let request = new XMLHttpRequest();

   /* Аргументы метода open, XMLHttpRequest объекта
      request.open(method, url, async, login, password);
      metod - (get, post...)
      url - ссылка на файл/базу данных
      async - true, разрешить взаимодействие с сайтом до получения
      ответа от сервера
      login/password - при необходимости
   */

   request.open('GET', 'current.json');
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
   request.send(); //принимает аргумент body, в случаее post запроса

   /* Свойства XMLHttpRequest
      status (200, 404)
      statusText (OK, not found)
      responseText/response - текст ответа сервера
      readyState - сотсояние объекта
         UNSENT(0) - объект создан, еще не вызвался
         OPENED(1) - open() был вызван
         HEADERS-RECEIVED(2) - send() был вызван, Доступны заголовки и статус
         LOADING(3) - responseText начал загрузку
         DONE(4) - загрузка полностью завершена
   */

   /* События для XMLHttpRequest
      loadstart, progress, abort, timeout, loadend
      readystatechange - более гибкое событие, отслеживает все состояния объекта
      ...
   */

   request.addEventListener('readystatechange', function() {
      if (request.readyState === 4 && request.status === 200) {
         let data = JSON.parse(request.response); // свойство response - данные

         inputUSD.value = (inputRUB.value / data.usd).toFixed(2);
      } else {
         inputUSD.value = 'что-то пошло не так';
      }
   });
});