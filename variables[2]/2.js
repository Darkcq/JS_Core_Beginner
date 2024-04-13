/*Попробуйте объявить переменную с тем же именем дважды, используя var, let и const.
Какие переменные позволяют повторное объявление, а какие нет?*/

var x = 10;
var x = 20;
console.log(x); // 20

let y = 10;
let y = 20; 
console.log(y); // Оштбка: "Identifier 'y' has already been declared"

const z = 10;
const z = 20;
console.log(z); // // Ошибка: "Identifier 'z' has already been declared"
