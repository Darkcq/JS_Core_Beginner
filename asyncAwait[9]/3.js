/*Напишите функцию, которая параллельно
загружает данные с нескольких удаленных
серверов, используя Promise.all в сочетании с
async/await*/

async function fetchDataFromMultipleServers(urls) {
  try {
    const promises = urls.map(async (url) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Ошибка при запросе к серверу: ${url}`);
      }

      return response.json();
    });

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

const serverUrls = [
  "https://api.example.com/data1",
  "https://api.example.com/data2",
  "https://api.example.com/data3",
];

(async () => {
  try {
    const data = await fetchDataFromMultipleServers(serverUrls);

    if (data !== null) {
      console.log("Полученные данные:", data);
    } else {
      console.log("Ошибка при загрузке данных с серверов");
    }
  } catch (error) {
    console.error("Ошибка:", error);
  }
})();
