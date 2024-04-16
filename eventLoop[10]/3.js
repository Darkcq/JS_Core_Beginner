/*Сделайте функцию, которая будет
генерировать случайные числа от 1 до 10.
Сделайте так, чтобы сгенерированное число
было задержкой функции setTimeout в
секундах. Оберните все это в промис. Пусть
промис выполнится успешно, если
сгенерировано число от 1 до 5, и с ошибкой -
если от 6 до 10.*/

function generateRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.ceil(Math.random() * 10);

    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve(randomNumber);
      } else {
        reject(new Error(`Сгенерировано число от 6 до 10: ${randomNumber}`));
      }
    }, randomNumber * 1000);
  });
}

generateRandomNumber()
  .then((randomNumber) => {
    console.log("Сгенерированное число от 1 до 5:", randomNumber);
  })
  .catch((error) => {
    console.error("Ошибка:", error.message);
  });
