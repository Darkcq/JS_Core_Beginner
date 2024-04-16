/*Напишите функцию, которая принимает
callback функцию и вызывает ее после
задержки в 2 секунды.*/

function delayAndCall(callback) {
  setTimeout(callback, 2000);
}
console.log("Начало выполнения");
delayAndCall(() => {
  console.log("Callback функция вызвана после задержки в 2 секунды");
});
console.log("Конец выполнения");
