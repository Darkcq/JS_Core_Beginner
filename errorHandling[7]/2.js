/*Напишите функцию, которая использует блок
try-catch для перехвата и обработки ошибки
TypeError при доступе к свойству
неопределенного объекта.*/

function accessUndefinedProperty(obj) {
  try {
    console.log(obj.undefinedProperty);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Произошла ошибка TypeError:", error.message);
    } else {
      throw error;
    }
  }
}

const obj1 = {};
const obj2 = null;

accessUndefinedProperty(obj1);
accessUndefinedProperty(obj2);
