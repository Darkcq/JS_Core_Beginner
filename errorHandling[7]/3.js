/*Напишите функцию, которая принимает два
числа в качестве параметров и выдает
пользовательскую ошибку, если второе
число равно нулю*/

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Второе число не может быть равно нулю");
  }
  return a / b;
}

try {
  const result1 = divideNumbers(10, 2);
  console.log("Результат деления:", result1);

  const result2 = divideNumbers(8, 0);
  console.log("Ошибка");
} catch (error) {
  console.error(error.message);
}
