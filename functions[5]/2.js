/*Напишите функцию для применения
алгоритма сортировки пузырьком.*/

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

// Пример использования:
const array = [64, 52, 25, 12, 223, 11, 90, 112, 20];
console.log("Исходный массив:", array);
const sortedArray = bubbleSort(array);
console.log("Отсортированный массив:", sortedArray);
