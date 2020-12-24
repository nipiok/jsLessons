let menuItems = document.querySelectorAll('.menu .menu-item'),
   menuWrapper = document.querySelector('.menu'),
   title = document.getElementById('title'),
   adv = document.getElementsByClassName('adv'),
   column = document.querySelectorAll('.column'),
   promptID = document.getElementById('prompt');


menuWrapper.insertBefore(menuItems[2], menuItems[1]);
document.body.style.background = 'url(img/apple_true.jpg)';
title.textContent = 'Мы продаем только подленную технику Apple';
column[1].removeChild(adv[0]);

let question = prompt('Ваше отношение к технике Apple?', '');
promptID.textContent = question;
