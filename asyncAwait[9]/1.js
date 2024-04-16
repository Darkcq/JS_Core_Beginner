/*Напишите функцию, которая использует
async/await для загрузки данных с удаленного
сервера (например, с помощью API) и
возвращает полученный результат.*/

async function fetchDataFromServer(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка при запросе к серверу: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

const apiUrl = "https://api.example.com/data";

fetchDataFromServer(apiUrl)
  .then((result) => {
    if (result !== null) {
      console.log("Полученные данные:", result);
    } else {
      console.log("Ошибка при получении данных");
    }
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });
