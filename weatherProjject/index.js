const key = "8da7eb98827f0176fac0aabb476afe00";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const url1 =
  "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=8da7eb98827f0176fac0aabb476afe00";

const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("btn");
const cardDisplay = document.querySelector(".card");
form.onsubmit = showWeather;

async function showWeather(e) {
  e.preventDefault();
  cardDisplay.style.display = "block";
  if (!input.value.trim()) {
    return;
  }
  const cityInformation = await getWeather(input.value.trim());
  weather(cityInformation);
  
}

async function getWeather(name) {
  const getUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&units=metric`;
  const respons = await fetch(getUrl);
  const data = await respons.json();
  // console.log(data);
  return data;
}

function weather(data) {

  const cityName = document.getElementById("name");
  const temperature = document.getElementById("temp");
  const description = document.getElementById("desc");

  cityName.textContent = data.name;
  temperature.textContent = Math.round(data.main.temp) + "°C";
  description.textContent = data.weather[0].main;
}
