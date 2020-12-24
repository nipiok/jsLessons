'use strict';

if ('0') { // Строка "0" - true
   console.log('Верно');
};


let num = 50;

if (num < 49) {
   console.log('Неверно!');
} else if (num > 100) {
   console.log('Много!');
} else {
   console.log('Верно!');
}
// Или тернарный оператор (есть так же бинарный, унарный)
(num == 50) ? console.log('Верно!') : console.log('Неверно!');
// Или switch
switch (num) {
   case num < 49:
      console.log('Неверно!');
      break;
   case num > 100:
      console.log('Много!');
      break;
   case num > 80:
      console.log('Много!');
      break;
   case 50: /*Если мы хоти получить в условии опеределённое значение, 
   "переменная" и  ""=="" не записывается */
      console.log('Верно!');
      break;
   default:
      console.log('Не верное число');
      break;
}