// 'use strict' функции без this получаю undefine вместо window

function showThis (a, b) {
   console.log(this); // window{}
   function sum() {
      console.log(this); // Функция внутри функции привязана к тому же объекту

      return a + b; /* замыкание функции, параметры отсутствующие
      внутри функции, ищются на уровень выше */
      // return this.a + this.b; Функция не найдет у себя a и b, вернется NaN
   }
   console.log(sum());
}

showThis(3, 5);



// Для методов в объекте (функция) - this = этот самый объект
let obj = {
   a: 20,
   b: 15,
   sum: function() {
      console.log(this);
      function shout() {
         console.log(this);
      }
      shout(); // undefine/window тк не имеет контекста выполнения this
   },
};

obj.sum(); // this будет содержать в себе весь объект obj



// Выполнение функции с заданным контекстом this
let user = {
   name: "Jone",
};

function sayName (surname) {
   console.log(this);
   console.log(this.name + surname);
}

sayName.call(user, 'Smit'); /* Функции, через метод call передается
контекст выполнения (user[]) и через запятую дополнительные аргументы */
sayName.apply(user, ['Show']); // по аналогии с call, но может принимать массив



// Жесткая привяска контекста this
function count(number) {
   return this.a * number;
}

let double = count.bind({a:2}); /* Запись функции count в double, 
а метод bind устанавливает этой функции указанный this */

console.log(double(5));




// Использование this при работе с document
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
   console.log(this); // Получаем элемент на котором было применено событие
   this.style.backgroundColor = "red";

   function showThis() {
      console.log(this);
   }
   showThis(); // undefine/window, this не наследуется
});