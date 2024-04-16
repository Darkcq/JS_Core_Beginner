/*Создайте класс под названием
«Прямоугольник» со свойствами ширины и
высоты. Включите два метода расчета
площади и периметра прямоугольника.
Создайте экземпляр класса «Прямоугольник»
и вычислите его площадь и периметр*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(5, 10);

const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log("Площадь:", area);
console.log("Периметр:", perimeter);
