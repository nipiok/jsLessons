let timerId = setTimeout(sayHello, 3000); // Старт функции спустя 3сек, один раз
clearTimeout(timerId); // остановить таймер

let timerRepeatId = setInterval(sayHello, 3000); // Запуск функции каждые 3сек.
clearTimeout(timerRepeatId);

function sayHello() {
   console.log('Hello World');
}



let timerWhileId = setTimeout(function log() {
   console.log("hello");
   setTimeout(log, 3000); // Рекурсивный вывод функции лучше, чем setInterval
}, 3000);
clearTimeout(timerWhileId);



let btn = document.querySelector('.btn'),
   elem = document.querySelector('.box');

function myAnimation() {
   let pos = 0;

   let id = setInterval(frame, 10);
   function frame () {
      if (pos == 300) {
         clearInterval();
      } else {
         console.log(pos);
         pos++;
         elem.style.top = pos + 'px';
         elem.style.left = pos + 'px';
      }
   }
}

btn.addEventListener('click', myAnimation);



// Делегирование функции на всех имеющихся и будующих потомках
let btnBlock = document.querySelector('.btn-block'),
   btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
   if (event.target && event.target.tagName == 'BUTTON') {
      console.log("hello");
   }
});


// Найти потомка с конкретным классом
btnBlock.addEventListener('click', function(event) {
   if (event.target && event.target.classList.contains('first')) {
      console.log("hello");
   }
});


// Найти конкретный тег с конкретным классом
btnBlock.addEventListener('click', function(event) {
   if (event.target && event.target.matches('button.first')) {
      console.log("hello");
   }
});