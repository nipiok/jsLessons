'use strict';

window.addEventListener('DOMContentLoaded', function() {

   let touchMe = document.querySelector('.touch-me');

   touchMe.addEventListener('touchstart', function(e) {
      e.preventDefault();
      console.log('Red box: touchstart');
      console.log(e.target);
      console.log(e.touches[0].target); // аналогично target, [0] - номер пальца
      console.log(e.touches); // Все пальцы использованные в этом событии
      console.log(e.changedTouches); // Список пальцев(объектов), что взаимедойствали с экраном
      console.log(e.targetTouches); // Те пальцы что взаимодействуют с touchMe
   }); // Аналогично клику, клик так же работает на мобильных

   touchMe.addEventListener('touchmove', function(e) {
      e.preventDefault();
      console.log('Red box: ' + e.touches[0].pageX);
   }); // Движение зажатым пальцем в области элемениа

   touchMe.addEventListener('touchend', function(e) {
      e.preventDefault();
      console.log('Red box: touchend');
   }); // Выполняется когда палец отпущен с элемента

});