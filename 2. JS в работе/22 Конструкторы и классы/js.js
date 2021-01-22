// Тот же функционал что в js-old, но через класс
class User {
   constructor (name, id) {
      this.name = name;
      this.id = id;
      this.human = true;
   }
   hello() {
      console.log(`Hello ${this.name}`);
   }
   exit() {
      console.log(`Пользователь ${this.name} вышел`);
   }
}

let ivan = new User('Ivan', 25),
   alex = new User('Alex', 35);

console.log(ivan);
console.log(alex);

alex.hello();
ivan.exit();