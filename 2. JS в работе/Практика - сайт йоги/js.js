window.addEventListener('DOMContentLoaded', function() {
   
   'use strict'

   
   // Табы
   let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

   function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
         tabContent[i].classList.remove('show');
         tabContent[i].classList.add('hide');
      }
   }

   hideTabContent(1);

   function showTabContent (b) {
      if (tabContent[b].classList.contains('hide')) {
         tabContent[b].classList.remove('hide');
         tabContent[b].classList.add('show');
      }
   }

   info.addEventListener('click', function(e) {
      let target = e.target;

      if (target && target.classList.contains('info-header-tab')) {
         for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
               hideTabContent(0);
               showTabContent(i);
               break;
            }
         }
      }
   });


   // Таймер
   function getDeadline() {
      let nowYear = new Date().getFullYear(),
      nowMounth = new Date().getMonth() + 1,
      nowDayPlusOne = new Date().getDate() + 1;

      if (nowMounth == 2) {
         if (nowDayPlusOne > 28) {
            nowDayPlusOne = 1;
            nowMounth = nowMounth + 1;
         }
      }
      if (nowMounth <= 9) {
         nowMounth = '0' + nowMounth;
      }
      if (nowDayPlusOne <= 9) {
         nowDayPlusOne = '0' + nowDayPlusOne;
      }

      let deadline = nowYear + '-' + nowMounth + '-' + nowDayPlusOne + ':00:00:00';

      return deadline;
   }

   function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor((t / 1000) % 60),
         minutes = Math.floor((t / 1000 / 60) % 60),
         hours = Math.floor(t / 1000 / 60 / 60);
         //hours = Math.floor((t/1000 / 60 / 60) % 24); еслм будет отсчет дней
         //days = Math.floor(t / 1000 / 60 / 60 / 24);

      if (seconds <= 9) {
         seconds = '0' + seconds;
      }
      if (minutes <= 9) {
         minutes = '0' + minutes;
      }
      if (hours <= 9) {
         hours = '0' + hours;
      }

      return {
         'total': t,
         'hours' : hours,
         'minutes' : minutes,
         'seconds' : seconds,
      };
   }

   function setClock(id, endtime) {
      let timer = document.getElementById(id),
         hours = timer.querySelector('.hours'),
         minutes = timer.querySelector('.minutes'),
         seconds = timer.querySelector('.seconds'),
         timeInterval = setTimeout(function interval() {
            updateClock();
            setTimeout(interval, 1000);
         }, 1000);
      
      function updateClock() {
         let t = getTimeRemaining(endtime);

         hours.textContent = t.hours;
         minutes.textContent = t.minutes;
         seconds.textContent = t.seconds;

         if (t.total <= 0) {
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            clearInterval(timeInterval);
         }
      }
   }

   setClock('timer', getDeadline());
   

});