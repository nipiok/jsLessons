'use strict';

let box = document.getElementById('box'),
   btn = document.getElementsByTagName('button'),
   circle = document.getElementsByClassName('circle'),
   heart = document.querySelectorAll('body .heart'),
   oneHeart = document.querySelector('body .heart'),
   wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = "blue";
btn[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

for (let i = 0; i < heart.length; i++) {
   heart[i].style.backgroundColor = "blue";
}

heart.forEach(function(item, key, arr) {
   item.style.backgroundColor = "blue";
}); // Не работает, если элементы получены через getElementsByTagName



let div = document.createElement('div'),
   text = document.createTextNode('Тут был Я');

div.classList.add('black');

// div.innerHTML = '<h2>Text</h2>';
div.textContent = 'Text';

// document.body.appendChild(div);
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[0]);

console.log(div); // <div class="black"></div>