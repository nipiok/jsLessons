'use strict';

let button = document.querySelectorAll('button'),
   wrap = document.querySelector('.wrapper'),
   link = document.querySelector('a');

// button[0].onclick = function() {
//    alert('Вы нажали первую кнопку');
// }; устаревшее

button[0].addEventListener('click', function(event) {
   console.log(event);
   let target = event.target;
   target.style.backgroundColor = '#444';
   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
   // target выводит весь элемент button
});

button[1].addEventListener('mouseenter', function() {
   console.log('Вы навели на вторую кнопку');
});

wrap.addEventListener('click', function() {
   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
}); /* При клике на .wrapper в области кнопки #btn, произойдёт всплытие
и его события. */

link.addEventListener('click', function(event) {
   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
   // return false; устаревший метод отмены стандартного поведения браузера 
   event.preventDefault();
});

button.forEach(function(item){
   item.addEventListener('mouseleave', function() {
      console.log('Вышли');
   });
});