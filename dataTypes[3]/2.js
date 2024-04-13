/*Напишите функцию, которая принимает строку и выводит в консоль последний
символ строки.*/

function printLastCharacter(str) {
  if (str.length === 0) {
    console.log("Строка пуста");
  } else {
    console.log("Последний символ строки:", str.charAt(str.length - 1));
  }
}

// Пример использования:
printLastCharacter("Тевирп");
