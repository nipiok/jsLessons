/* Стрелочная ф-ция, анонимна, нет своего контекста вызова (this), 
невозможно сделать рекурсию */
let fun = () => {
    console.log(this);
};

fun(); // window/undefine


let obj = {
    number: 5,
    sayNumber: function() { // Метод
        let say = () => {
            console.log(this); // Функция обращающается к методу
        };
        say(); 
    }
};

obj.sayNumber(); // Получит содержимое obj{} у своего родителя


let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show(); /* Получит эелемент $btn. Так как: 
    конектс вызова для обработчика события (addEventListener) =
    elm $btn, а стрелочная функция берет себе контекст родителя
    */
});

/* При использование именной функции, контекст вызова не
наследуется, у каждой функции он свой */