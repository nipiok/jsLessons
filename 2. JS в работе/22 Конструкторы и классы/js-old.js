// Функция - конструктор. При вызове в переменной, создает в ней объект
// Все функции - объекты
// Используются такие функции для шаблонизации однотипных действий(юзеры,товары)
function User(name, id) {
   this.name = name; // Функция может содержать свойства
   this.id = id;
   this.human = true;
   this.hello = function () { // И методы
      // обращение к свойству внутри этого объекта
      console.log('Hello ' + this.name);
   };
}

/* Добавление новых методов/свойств в конструктор(функцию-объект или объект)
   и они будут наследоваться потомкам */
User.prototype.exit = function(name) {
   console.log('Пользователь ' + this.name + ' вышел');
};

let ivan = new User('Ivan', 25),
   alex = new User('Alex', 35);

console.log(ivan);
console.log(alex);

alex.hello();
ivan.exit();