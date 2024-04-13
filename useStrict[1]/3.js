/*Напишите функцию, которая принимает строку и возвращает количество гласных
букв в ней. Используйте строгий режим*/

function countVowels(str) {
    str = str.toLowerCase();
    const vowels = "аоуэыяёюеи";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Пример использования:
console.log(countVowels("Всем привет!"));
