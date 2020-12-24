'use strict';

let arr = [1, 2, 3, 'four', 5];

arr.pop(); // удалить последний элемент массива
arr.push('5'), // добваить в конец массива
arr.shift(); // удалить первый элемент
arr.unshift('1'); // добавить в начало массива

for (let i = 0; i < arr.length; i++) { // перебор значений массива
   console.log(arr[i]);
} 

arr.forEach(function(item, i, mass) { // перебор значений массива
   console.log(i + ': ' + item + ' (массив: ' + arr + ')');
});



let mass = [1,3,4,6,7];

for (let key of mass) { // получить значения массива. С in будут ключи
   console.log(key);
} 



let ans = prompt('', ''),
   arr2 = [];

arr2 = ans.split(','); // преобраздвание строки в массив
console.log(arr);



let arr3 = [1, 15, 2],
   str = arr3.join(', '), // массив в строку
   str2 = arr3.sort(); // алфавитный порядок, посимвольно

function compareNum(a, b) {
   return a-b;
}

let str3 = arr3.sort(compareNum); // сортировка по правилам callback функции

console.log(str3);



