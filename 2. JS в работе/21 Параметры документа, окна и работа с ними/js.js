let box = document.querySelector('.box'),
   btn = document.querySelectorAll('button');

// Область блока включая паддинг, с вычитом скролла, полос пкрокрутки и бордера
let width = box.clientWidth,
   height = box.clientHeight;

// Область блока включая паддинг, полосы прокрутки и бордер, без учёта скролла
let widthOffset = box.offsetWidth,
   heightOffset = box.offsetHeight;

// Вся область блока, включая скрол (не видимую часть), но без паддингов
let widthScroll = box.scrollWidth,
   heightScroll = box.scrollHeight;

// Все эти свойства доступны только для чтения
console.log(width);
console.log(height);
console.log(widthOffset);
console.log(heightOffset);
console.log(widthScroll);
console.log(heightScroll);


btn[0].addEventListener('click', function() {
   let boxHeightScroll = box.scrollHeight;
   box.style.height = boxHeightScroll + 'px';
});

/* srollTop, srollLeft - доступны для изменения, имеряет где находится 
бегунок прокрутки */
btn[1].addEventListener('click', function() {
   box.scrollTop = 0;
});


//Все координаты объекта - элемента
console.log(box.getBoundingClientRect());

// documentElement - все сожержимое документа
console.log(document.documentElement.clientHeight); //Высота видимой обл. стр-цы
console.log(document.documentElement.scrollTop); //Отступ сверху

// (x, y) Прокрутить страницу на указанное колличество пикселей 
scrollBy(0, 10);

// (x, y) Прокрутить в определенное место на странице
scrollTo(0, 10);