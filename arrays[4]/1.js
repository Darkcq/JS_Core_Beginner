/*Напишите функцию, которая принимает массив с числами и увеличивает каждое
число из массива на 10 процентов.*/

function increaseByTenPercent(numbers) {
  const increasedNumbers = [];
  for (let number of numbers) {
    const increasedNumber = number * 1.1;
    increasedNumbers.push(increasedNumber);
  }
  return increasedNumbers;
}

// Пример использования:
const numbers = [11, 47, 52];
const increasedNumbers = increaseByTenPercent(numbers);
console.log("Исходный массив:", numbers);
console.log("Массив с увеличенными числами на 10%:", increasedNumbers);
