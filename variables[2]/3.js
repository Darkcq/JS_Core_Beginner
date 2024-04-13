/*Напишите код, в котором попытаетесь обратиться к переменной до её объявления с
использованием var, let и const. Определите, какие переменные допускают такое
использование, а какие нет.*/

console.log(x); // undefined
var x = 10;

console.log(y); // Ошибка: "Cannot access 'y' before initialization"
let y = 20;

console.log(z); // Ошибка: "Cannot access 'z' before initialization"
const z = 30;
