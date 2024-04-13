/*Напишите функцию, которая многократно выполняет заданную операцию через
фиксированный интервал, используя setInterval()*/

function repeatOperation(operation, interval, repetitions) {
  let count = 0;
  const intervalId = setInterval(() => {
    operation();
    count++;
    if (count === repetitions) {
      clearInterval(intervalId);
    }
  }, interval);
}

// Пример использования:
function printMessage() {
  console.log("Выполняю операцию...");
}

repeatOperation(printMessage, 1000, 5);
