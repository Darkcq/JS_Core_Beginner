/*Создайте класс под названием «Человек» со
свойствами имени, возраста и страны.
Включите метод для отображения сведений о
человеке. Создайте два экземпляра класса
«Человек» и отобразите их сведения.*/

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayInfo() {
    console.log(
      `Имя: ${this.name}; Возраст: ${this.age}; Страна: ${this.country}`
    );
  }
}

const person1 = new Person("Илья", 52, "Россия");
const person2 = new Person("Елена", 25, "Беларусь");

person1.displayInfo();
person2.displayInfo();
