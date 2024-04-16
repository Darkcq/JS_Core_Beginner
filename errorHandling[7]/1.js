/*Напишите функцию, которая принимает
число в качестве параметра и выдает
пользовательскую ошибку, если число не
является целым числом.*/

function checkInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Введенное значение не является целым числом");
  }
}

try {
  checkInteger(5);
  console.log("Число является целым");

  checkInteger(3.14);
  console.log("Число не целое");
} catch (error) {
  console.error(error.message);
}
