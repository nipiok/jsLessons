'use strict';

window.addEventListener('DOMContentLoaded', function() {

   // new RegExp('pattern', 'flags'); // способ задать паттерн
   // /pattern/flags // способ задать паттерн

   let ans = prompt('Введите ваше имя');
   /* 
      Классы поиска
      . - применить ко всем символам
      \d - Найти все цифры \D - инверсия
      \w - Все буквы \W
      \s - Все пробелы \S
      
      flag может принимать инструкции: 
      i - поиск вне зависимости от регистра
      g - global, поиск всех вхождений 
      m - многострочность

      Символы что нужно экранировать: \, $, [], ?, | и т.д 

      Если нужно несколько, пишутся слитно в любой последовательности */
   
   let reg = /n/gi;
   /* поиск в строке регулярного выражения/ Возвращает 
      позицию найденого элемента, -1 в случае отсутствия */
   //console.log(ans.search(reg)); // метод находит только первое вхождение
   console.log(reg.test(ans)); // true - если есть совпадения
   console.log(ans.match(reg)); // метод находит ВСЕ вхождение, иначе null

   let pass = prompt('Введите пароль'); 
   console.log(pass.replace(/./g, "*"));

   alert('12-34-56'.replace(/-/g, ':')); // замена "-" на ":"

   let ans2 = prompt('Введите число'); 
   let reg2 = /\d/g;
   console.log(ans2.match(reg2)); // Выведит только числа

   console.log("Me name is R2D2".match(/\w\d\w\d/i)); //R2D2

   console.log('a/as'.match(/\//i)); // \ - экранитьрование спец символа.

});