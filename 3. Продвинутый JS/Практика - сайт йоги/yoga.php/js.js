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



   //Form через объект класс FormData, через Promise
   let message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Мы свяжемся с вами',
      failure: 'Произошла ошыбка',
   };
   
   let form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

   statusMessage.classList.add('status');

   form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.appendChild(statusMessage);

      let formData = new FormData(form);

      function postData (data) {
         return new Promise (function(resolve, reject) {
            let request = new XMLHttpRequest();

            request.open('POST', 'server.php');
            request.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');
            request.send(data);
            console.log(request);

            request.onreadystatechange = function() { // событие повешано через on(название события)
               if (request.readyState < 4) {
                  resolve();
               } else if (request.readyState === 4) {
                  if (request.status === 200) {
                     resolve();
                  } else {
                     reject();
                  }
               }
            };
         });
      }

      function inputClear () {
         for (let i = 0; i < input.length; i++) {
            input[i].value = '';
         } // актуально для всех методов получения html элементов
         // input.forEach(value => {
         //   value.value = '';
         // }); только если input получены через querySelectorAll
      }

      postData(formData)
                        .then(() => statusMessage.innerHTML = message.loading)
                        .then(() => statusMessage.innerHTML = message.success)
                        .catch(() => statusMessage.innerHTML = message.failure)
                        .then(inputClear);   
   });



   //Form через JSON
   let formJson = document.getElementById('form'),
      inputJson = formJson.getElementsByTagName('input'),
      statusMessageJson = document.createElement('div');

   statusMessageJson.classList.add('status');

   formJson.addEventListener('submit', function(e) {
      e.preventDefault();
      formJson.appendChild(statusMessageJson);

      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      let formData = new FormData(formJson);

      let obj = {};
      formData.forEach(function (value, i) {
         obj[i] = value;
      });

      let json = JSON.stringify(obj);
      request.send(json);

      request.addEventListener('readystatechange', function() {
         if (request.readyState < 4) {
            statusMessageJson.innerHTML = message.loading;
         } else if (request.readyState === 4 && request.status === 200) {
            statusMessageJson.innerHTML = message.success;
         } else {
            statusMessageJson.innerHTML = message.failure;
         }
      });

      for (let i = 0; i < inputJson.length; i++) {
         inputJson[i].value = '';
      }
   });


   
   //Slider
   let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');


   showSlides(slideIndex);
   
   function showSlides(n) {
      if (n > slides.length) {
         slideIndex = 1;
      }
      if (n < 1) {
         slideIndex = slides.length;
      }

      slides.forEach((slide) => slide.style.display = "none");

      dots.forEach((dot) => dot.classList.remove('dot-active'));

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add('dot-active');
   }

   function plusSlides(n) {
      showSlides(slideIndex += n);
   }

   function currentSlide(n) {
      showSlides(slideIndex = n);
   }

   prev.addEventListener('click', function() {
      plusSlides(-1);
   });

   next.addEventListener('click', function() {
      plusSlides(1);
   });

   dotsWrap.addEventListener('click', function(e) {
      for (let i = 1; i < dots.length + 1; i++) {
         if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
            currentSlide(i);
         }
      }
   });



   //calc
   let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

   totalValue.textContent = '0';

   persons.addEventListener('change', function() {
      personsSum = +this.value;
      total = (daysSum + personsSum) * 4000;

      if (restDays.value == '' || personsSum == 0) {
         totalValue.textContent = 0;
      } else {
         totalValue.textContent = total;
      }
   });

   restDays.addEventListener('change', function() {
      daysSum = +this.value;
      total = (daysSum + personsSum) * 4000;

      if (persons.value == '' || daysSum == 0) {
         totalValue.textContent = 0;
      } else {
         totalValue.textContent = total;
      }
   });

   place.addEventListener('change', function () {
      if (persons.value == '' || daysSum == 0 || persons.value == '' || daysSum == 0) {
         totalValue.textContent = 0;
      } else {
         let a = total;
         a *= this.options[this.selectedIndex].value;
         totalValue.textContent = a;
      }
      console.log(this);
   });

});