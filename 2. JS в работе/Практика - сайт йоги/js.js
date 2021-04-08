window.addEventListener('DOMContentLoaded', function() {
   
   'use strict';

   // Табы
   class Tabs {
      constructor(obj) {
         this.wrap = document.querySelector(obj.wrap);
         this.tabItem = document.querySelectorAll(obj.tabItem);
         this.contentItem = document.querySelectorAll(obj.contentItem);
      }
      hideContentItem(a) {
         for (let i = a; i < this.contentItem.length; i++) {
            this.contentItem[i].classList.remove('show');
            this.contentItem[i].classList.add('hide');
         }
      }
      showContentItem (b) {
         if (this.contentItem[b].classList.contains('hide')) {
            this.contentItem[b].classList.remove('hide');
            this.contentItem[b].classList.add('show');
         }
      }
   }

   let yogaTabs = new Tabs({
      wrap: '.info',
      tabItem: '.info-header-tab',
      contentItem: '.info-tabcontent'
   });

   yogaTabs.hideContentItem(1);

   yogaTabs.wrap.addEventListener('click', function(e) {
      let target = e.target;

      if (target && target.classList.contains('info-header-tab')) {
         for (let i = 0; i < yogaTabs.tabItem.length; i++) {
            if (target == yogaTabs.tabItem[i]) {
               yogaTabs.hideContentItem(0);
               yogaTabs.showContentItem(i);
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
         nowMounth = `0${nowMounth}`;
      }
      if (nowDayPlusOne <= 9) {
         nowDayPlusOne = `0${nowDayPlusOne}`;
      }

      let deadline = `${nowYear}-${nowMounth}-${nowDayPlusOne}:00:00:00`;

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
         seconds = `0${seconds}`;
      }
      if (minutes <= 9) {
         minutes = `0${minutes}`;
      }
      if (hours <= 9) {
         hours = `0${hours}`;
      }

      return {
         total: t,
         hours: hours,
         minutes: minutes,
         seconds: seconds,
      };
   }

   function setClock(id, endtime) {
      let timer = document.getElementById(id),
         hours = timer.querySelector('.hours'),
         minutes = timer.querySelector('.minutes'),
         seconds = timer.querySelector('.seconds');
      
      let timeInterval = setTimeout(function interval() {
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
   


   // Модальное окно\
   let more = document.querySelectorAll('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

   for (let i = 0; i < more.length; i++) {
      more[i].addEventListener('click', function() {
         overlay.style.display = 'block';
         this.classList.add('more-splash');
         document.body.style.overflow = 'hidden';
      });
   }
   
   close.addEventListener('click', function() {
      overlay.style.display = 'none';

      for (let i = 0; i < more.length; i++) {
         if (more[i].classList.contains('more-splash')) {
            more[i].classList.remove('more-splash');
         }
      }
      
      document.body.style.overflow = '';
   });
   

});