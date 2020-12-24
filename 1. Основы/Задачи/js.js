'use strict';

let x = 5;
console.log(x++); // 5. Декремент применяется, но после вывода

console.log([] + false - null + true); /* NaN 
Пустой объект(массив) приводится к строке, [] + false = "false"
Вычитание из строки приводит к NaN */
console.log([] - false - null + true); // 1 [], false, null приводятся к 0

let y = 1, z = y = 2;
console.log(z); // 2

console.log([ ] + 1 + 2); // "12"

console.log('2'[0]); // 2
console.log('2'[2]); // undefined

console.log(2 && 1 && null && 0 && undefined); // null

console.log(null || 2 && 3 || 4); // 3

console.log([] == []); /* false, массивы даже с одинаковым содержим не
могут быть равны, так как находятся в разных ячейках памяти */
var arr = [];
let c = arr, b = arr;
console.log(c == b); /* true, обе переменных обращаются
к одному и тому же объекту */

let inf = +"Infinity"; // Infinity - числовое значение

console.log("ёжик" > "яблоко"); // true, в unicode Ё имеет больий индекс

console.log(0 || "" || 2 || undefined || true || false); // 2