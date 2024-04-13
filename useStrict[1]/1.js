/*Напишите функцию для расчета факториала числа. Функция должна принимать число в
качестве аргумента и возвращать его факториал. Учтите использование строгого режима.*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Пример использования:
console.log(`Факториал числа 5 равен ${factorial(5)}`);
