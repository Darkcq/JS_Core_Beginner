/*Напишите функцию, выполняющую серию
асинхронных операций последовательно,
используя Promises*/

function sequentialAsyncOperations(operations) {
  return operations.reduce((promiseChain, currentOperation) => {
    return promiseChain.then((chainResults) =>
      currentOperation().then((currentResult) => [
        ...chainResults,
        currentResult,
      ])
    );
  }, Promise.resolve([]));
}

const asyncOperation1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Асинхронная операция 1 выполнена");
      resolve("Результат операции 1");
    }, 1000);
  });
};

const asyncOperation2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Асинхронная операция 2 выполнена");
      resolve("Результат операции 2");
    }, 2000);
  });
};

const asyncOperation3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Асинхронная операция 3 выполнена");
      resolve("Результат операции 3");
    }, 1500);
  });
};

const operations = [asyncOperation1, asyncOperation2, asyncOperation3];

sequentialAsyncOperations(operations)
  .then((results) => {
    console.log("Все операции выполнены:", results);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
