let age = document.getElementById('age');


function showUser(surname, name, age) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + age);
}
//showUser('Masha', 'Valeryvna', age.getAttribute('value'));


class User {
   constructor (surname, name, age) {
      this.surname = surname;
      this.name = name;
      this.age = age;
   }
   showUser() {
      alert(`Пользователь ${this.surname} ${this.name}, его возраст ${this.age}`);
    }
}
let masha = new User('Masha', 'Valeryvna', age.getAttribute('value'));
//masha.showUser();


class Options {
   constructor(height, width, bg, fontSize, textAlign, textContent) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
      this.textContent = textContent;
   }
   createDiv() {
      let div = document.createElement('div');

      div.style.height = `${this.height}px`;
      div.style.width = `${this.width}px`;
      div.style.background = this.bg;
      div.style.fontSize = `${this.fontSize}px`;
      div.style.textAlign = this.textAlign;
      div.textContent = this.textContent;

      document.body.append(div);
   }
}

let browBlock = new Options(100, 200, 'red', 22, 'center', 'ЗДРАСТЕ!');
browBlock.createDiv();