/*Напишите функцию, которая извлекает
данные из API и отменяет запрос, если он
занимает больше указанного времени.*/

function fetchDataWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const timer = setTimeout(() => {
      controller.abort();
      reject(new Error("Время запроса истекло"));
    }, timeout);
    fetch(url, { signal })
      .then((response) => {
        clearTimeout(timer);
        if (!response.ok) {
          throw new Error(`Ошибка при запросе к API: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
const apiUrl = "https://api.example.com/data";
const timeout = 5000;
fetchDataWithTimeout(apiUrl, timeout)
  .then((data) => {
    console.log("Полученные данные:", data);
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error.message);
  });
