/*Напишите функцию, которая принимает
массив URL-адресов и параллельно
загружает содержимое каждого URL-адреса с
помощью Promises*/

function fetchURLs(urls) {
  const promises = urls.map((url) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка загрузки URL: ${url}`);
        }
        return response.text();
      })
      .then((content) => {
        console.log(`Содержимое загруженного URL ${url}:`, content);
        return content;
      })
      .catch((error) => {
        console.error(error.message);
        return null;
      });
  });

  return Promise.all(promises);
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

fetchURLs(urls)
  .then((contents) => {
    console.log("Все URL загружены:", contents);
  })
  .catch((error) => {
    console.error("Ошибка загрузки URL:", error);
  });
