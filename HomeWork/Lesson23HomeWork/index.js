

const btn = document.getElementById("btn");
const app = document.getElementById("app");

const urlGeorgiaUniversiti =
  "http://universities.hipolabs.com/search?country=Georgia";

const listeorgiaUniversiti = () => {
  fetch(urlGeorgiaUniversiti)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка загрузки" + response.status);
      }
      return response.json();
    })
    .then((data) => {
      const title = document.createElement("h1");
      title.textContent = "Университеты Грузии";
      app.append(title);
      const ul = document.createElement("ul");

      data.forEach((univer) => {
        const li = document.createElement("li");
        li.textContent = univer.name;
        ul.appendChild(li);
      });

      app.appendChild(ul);
    })
    
};

btn.addEventListener("click", listeorgiaUniversiti);










const key = '8da7eb98827f0176fac0aabb476afe00';

const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'