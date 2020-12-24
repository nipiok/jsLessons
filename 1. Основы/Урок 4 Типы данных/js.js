'use strict';

let number = 5;
console.log(4 / 0); // Infinity
console.log("str" * 2); // NaN

var string = "hello";
var sym = Symbol(); // Символ
var boolean = true;
null; // Переменная/объект не существует
undefined; // Переменная/объект существует, но значение не задано
var obj = {}, arr = []; //Объекты, массив так же является объектом

var persone = {
   name: "John",
   age: "21",
   isMarried: false,
};
console.log(persone.name);
console.log(persone["name"]);

let photos = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(photos[1]); // нумирация с 0

