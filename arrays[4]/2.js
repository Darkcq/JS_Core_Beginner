/*Напишите функцию, которая принимает массив с числами и находит сумму первой
половины элементов этого массива.*/

function sumFirstHalf(numbers) {
    const halfIndex = Math.ceil(numbers.length / 2);
    let sum = 0;
    for (let i = 0; i < halfIndex; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  // Пример использования:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = sumFirstHalf(numbers);
  console.log("Сумма первой половины элементов массива:", sum);
  