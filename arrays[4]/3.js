/*Напишите функцию, которая принимает массив с числами и находит сумму квадратов
элементов этого массива. */

function sumOfSquares(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number * number;
  }
  return sum;
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log("Сумма квадратов элементов массива:", result);
