let timerId = setTimeout(sayHello, 3000); // Старт функции спустя 3сек, один раз
clearTimeout(timerId); // остановить таймер

let timerRepeatId = setInterval(sayHello, 3000); // Запуск функции каждые 3сек.
clearTimeout(timerRepeatId);

function sayHello() {
   console.log('Hello World');
}


let timerWhileId = setTimeout(function log() {
   console.log("hello");
   setTimeout(log, 3000); // Рекурсивный вывод функции пр-нее, чем setInterval
}, 3000);
clearTimeout(timerWhileId);