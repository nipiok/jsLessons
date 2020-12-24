'use strict'; /* Говорит, что используется новый стандарт ES6
Усторевшие правила не будут работать. Можно запускать в отдельных функциях */

let answer = +prompt("Сколько вам лет?", ""); // Строка приобразуется в число

console.log("arr" + +" - object"); // Унарный плюс, "arrNaN"
console.log("arr" + " - object"); // Сложение строки

let incr = 10,
   decr = 10;
console.log(incr++); // После вывода переменной произойдёт событие ++
console.log(--decr); // До вывода произойдёт вычитание, вывелется результат --

console.log(5%2); // Остаток от деления

console.log("2" == 2); // true, не строегое равенство
console.log("2" === 2); // false

let isChecked = true,
   isClose = false;
console.log(isChecked && isClose); // false
console.log(isChecked && !isClose); // true
console.log(isChecked || isClose); // true