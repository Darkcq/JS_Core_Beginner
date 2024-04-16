/*Напишите функцию, которая одновременно
извлекает данные из нескольких API и
возвращает объединенный результат,
используя Promises.*/

function fetchDataFromMultipleAPIs(apiUrls) {
  const promises = apiUrls.map((url) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при запросе к API: ${url}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error.message);
        return null;
      });
  });

  return Promise.all(promises).then((results) => {
    return results.filter((result) => result !== null);
  });
}

const apiUrls = [
  "https://api.example.com/data1",
  "https://api.example.com/data2",
  "https://api.example.com/data3",
];

fetchDataFromMultipleAPIs(apiUrls)
  .then((combinedResults) => {
    console.log("Объединенные результаты из нескольких API:", combinedResults);
  })
  .catch((error) => {
    console.error("Ошибка при получении данных из нескольких API:", error);
  });
