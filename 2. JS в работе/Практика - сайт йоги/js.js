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
         yogaTabs.tabItem.forEach(function(item, key) {
            if (target == item) {
               yogaTabs.hideContentItem(0);
               yogaTabs.showContentItem(key);
            }
         });
      }
   });
  

   

   class Timer {
      constructor(obj) {
         this.id = document.getElementById(obj.id);
         this.nowYear = new Date().getFullYear();
         this.nowMounth = new Date().getMonth() + 1;
         this.dayLeft = obj.dayLeft;
         this.nowDayPlusOne = new Date().getDate() + obj.dayLeft;
      }
      getDeadline() {
         if (this.nowMounth == 2) {
            if (this.nowDayPlusOne > 28) {
               this.nowDayPlusOne = this.dayLeft;
               this.nowMounth = this.nowMounth + 1;
            }
         }
         if (this.nowDayPlusOne > 30) {
            let difference = this.nowDayPlusOne - 30;
            this.nowDayPlusOne = difference;
            this.nowMounth = this.nowMounth + 1;
         }
         if (this.nowDayPlusOne <= 9) {
            this.nowDayPlusOne = `0${this.nowDayPlusOne}`;
         }
         if (this.nowMounth > 11) {
            this.nowYear += 1;
            this.nowMounth = 1;
         }
         if (this.nowMounth <= 9) {
            this.nowMounth = `0${this.nowMounth}`;
         }
   
         let deadline = `${this.nowYear}-${this.nowMounth}-${this.nowDayPlusOne}:00:00:00`;
         return deadline;
      }
      getTimeRemaining(endtime) {
         let t = Date.parse(endtime) - new Date(),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            //hours = Math.floor(t / 1000 / 60 / 60), // если будет отсчет часов
            hours = Math.floor((t/1000 / 60 / 60) % 24), // если будет отсчет дней
            days = Math.floor(t / 1000 / 60 / 60 / 24); // если будет отсчет дней
   
         if (seconds <= 9) {
            seconds = `0${seconds}`;
         }
         if (minutes <= 9) {
            minutes = `0${minutes}`;
         }
         if (hours <= 9) {
            hours = `0${hours}`;
         }
         if (days <= 9) {
            days = `0${days}`;
         }
   
         return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
         };
      }
      setClock(endtime) {
         let timer = this.id,
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
         
         let timeInterval = setTimeout(function interval() {
            updateClock();
            setTimeout(interval, 1000);
         }, 1000);
         
         let updateClock = () => {
            let t = this.getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
   
            if (t.total <= 0) {
               days.textContent = '00';
               hours.textContent = '00';
               minutes.textContent = '00';
               seconds.textContent = '00';
               clearInterval(timeInterval);
            }
         };
      }
   }

   let yogaTimer = new Timer({
      id: 'timer',
      dayLeft: 17,
   });
   yogaTimer.setClock(yogaTimer.getDeadline());



   // // Таймер
   // function getDeadline() {
   //    let nowYear = new Date().getFullYear(),
   //       nowMounth = new Date().getMonth() + 1,
   //       nowDayPlusOne = new Date().getDate() + 1;

   //    if (nowMounth == 2) {
   //       if (nowDayPlusOne > 28) {
   //          nowDayPlusOne = 1;
   //          nowMounth = nowMounth + 1;
   //       }
   //    }
   //    if (nowMounth <= 9) {
   //       nowMounth = `0${nowMounth}`;
   //    }
   //    if (nowDayPlusOne <= 9) {
   //       nowDayPlusOne = `0${nowDayPlusOne}`;
   //    }

   //    let deadline = `${nowYear}-${nowMounth}-${nowDayPlusOne}:00:00:00`;

   //    return deadline;
   // }

   // function getTimeRemaining(endtime) {
   //    let t = Date.parse(endtime) - Date.parse(new Date()),
   //       seconds = Math.floor((t / 1000) % 60),
   //       minutes = Math.floor((t / 1000 / 60) % 60),
   //       hours = Math.floor(t / 1000 / 60 / 60);
   //       //hours = Math.floor((t/1000 / 60 / 60) % 24); еслм будет отсчет дней
   //       //days = Math.floor(t / 1000 / 60 / 60 / 24);

   //    if (seconds <= 9) {
   //       seconds = `0${seconds}`;
   //    }
   //    if (minutes <= 9) {
   //       minutes = `0${minutes}`;
   //    }
   //    if (hours <= 9) {
   //       hours = `0${hours}`;
   //    }

   //    return {
   //       total: t,
   //       hours: hours,
   //       minutes: minutes,
   //       seconds: seconds,
   //    };
   // }

   // function setClock(id, endtime) {
   //    let timer = document.getElementById(id),
   //       hours = timer.querySelector('.hours'),
   //       minutes = timer.querySelector('.minutes'),
   //       seconds = timer.querySelector('.seconds');
      
   //    let timeInterval = setTimeout(function interval() {
   //       updateClock();
   //       setTimeout(interval, 1000);
   //    }, 1000);
      
   //    function updateClock() {
   //       let t = getTimeRemaining(endtime);

   //       hours.textContent = t.hours;
   //       minutes.textContent = t.minutes;
   //       seconds.textContent = t.seconds;

   //       if (t.total <= 0) {
   //          hours.textContent = '00';
   //          minutes.textContent = '00';
   //          seconds.textContent = '00';
   //          clearInterval(timeInterval);
   //       }
   //    }
   // }

   // setClock('timer', getDeadline());
   


   // Модальное окно\
   let more = document.querySelectorAll('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

   more.forEach(function(item) {
      item.addEventListener('click', function() {
         overlay.style.display = 'block';
         document.body.style.overflow = 'hidden';
         this.classList.add('more-splash');
      });
   });
   
   close.addEventListener('click', function() {
      overlay.style.display = 'none';
      document.body.style.overflow = '';

      more.forEach(function(item) {
         if (item.classList.contains('more-splash')) {
            item.classList.remove('more-splash');
         }
      });
   });

});