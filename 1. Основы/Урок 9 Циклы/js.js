'use strict';

let num = 50;

while (num < 55) {
   console.log(num);
   num++;
}

do { // Сперва сделать, после проверить
   console.log(num);
   num++;
} while (num < 55);


for (let index = 1; index < 8; index++) {
   if (index == 6) { // Прервет цикл если переменная = 6
      break;
   }
   if (index == 4) { // Пропустит итерацию цикла, если переменная = 4
      continue;
   }
   console.log(index);
}