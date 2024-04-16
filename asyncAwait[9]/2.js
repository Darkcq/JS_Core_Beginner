/*Напишите функцию, которая сначала
загружает данные с одного сервера, а затем
использует эти данные для выполнения
запроса к другому серверу. Используйте
async/await для обеспечения
последовательного выполнения запросов.*/

async function loadDataFromFirstServer(firstUrl) {
  try {
    const response = await fetch(firstUrl);

    if (!response.ok) {
      throw new Error(
        `Ошибка при загрузке данных с первого сервера: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

async function sendDataToSecondServer(secondUrl, data) {
  try {
    const response = await fetch(secondUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Ошибка при отправке данных на второй сервер: ${response.status}`
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Пример использования функции
const firstServerUrl = "https://api.example.com/first-data";
const secondServerUrl = "https://api.example.com/second-data";

(async () => {
  try {
    const firstData = await loadDataFromFirstServer(firstServerUrl);

    if (firstData !== null) {
      console.log("Получены данные с первого сервера:", firstData);
      const result = await sendDataToSecondServer(secondServerUrl, firstData);
      if (result !== null) {
        console.log("Получен результат от второго сервера:", result);
      } else {
        console.log("Ошибка при отправке данных на второй сервер");
      }
    } else {
      console.log("Ошибка при загрузке данных с первого сервера");
    }
  } catch (error) {
    console.error("Ошибка:", error);
  }
})();
