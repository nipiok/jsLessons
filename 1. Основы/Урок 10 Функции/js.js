'use strict';

let number = 20,
   zero = 0; // Глобальные переменные

/* Function Declaration, аналогично переменной var, такие функции 
   создаются до выполнения кода. */
function showFirstMessage(text) {
   console.log(text);

   let num = 20; // Локальная перменная. Видна только внутри функции
   number = 10; // Глобальная переменная, будет изменена везде
   let zero = 1; // В функции будет использоваться локальная

   console.log(num);
   console.log(number);
   console.log(zero);
}

showFirstMessage('Привет');
console.log(number);
console.log(zero);



/* Function Expression, создается в момент выполнения кода, 
   если задавать через var, работает так же */
let calc = function(a, b) {
   return (a + b);
};

console.log(calc(3,4));



/* Function Expression Через стрелку */
let calcMinus = (a, b) => a-b;

console.log(calcMinus(5,4));



function retVar() {
   let num = 50;
   return num;
}

let anotherNum = retVar();
console.log(anotherNum);



let str = "test";
console.log(str.length); // Свойство строки (информация), длинна
console.log(str.toUpperCase()); // Метод строки (манипуляция), upperCase

let twelve = "12.2";
console.log(Math.round(twelve)); // Метод числа, округление к ближайшему

let eleven = "11.2px";
/* Метод числа, перевод числа в другу систему исчисления, Число 
приводится к целому. строка преобразуется в число, 
отбрасывая буквы с началм и конца */
console.log(parseInt(eleven)); 
console.log(parseFloat(eleven)); // Число после запятой сохраняется