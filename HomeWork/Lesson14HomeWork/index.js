// Задание
// Предположим вы получили объект с данными
// (создайте переменную, в которой будет храниться объект) - spaceship, в котором находятся характеристики космического корабля,
// такие как:name
// manufacturer
// crew
// maxSpeed
// Необходимо отобразить их на странице.
// Стилизация на ваше усмотрение
// Дополнительная задача: Создайте кнопку "Hide Manufacturer",
// которая будет скрывать manufacturer корабля на странице

const outputOnDisplay = () => {
  const spaceship = {
    name: "Orion",
    manufacturer: "	Lockheed Martin Airbus Defence and Space Arianespace",
    crew: { ShipCrew: ["Villi", "Tilli", "Billi", "Killi"] },
    Speed: 10000,
  };

  const divName = document.getElementById("nameId");
  divName.innerText = "name = " + spaceship.name;

  const manufacturerName = document.getElementById("manufacturerId");
  manufacturerName.innerText = "Manufacturer = " + spaceship.manufacturer;

  const crew1 = document.getElementById("crewId");
  const crewArray = spaceship.crew.ShipCrew;
  
  
  crew1.innerText = crewArray;







  const divSpeed = document.getElementById("maxSpeedId");
  divSpeed.innerText = "speed = " + spaceship.Speed + "km";
};
outputOnDisplay();

const hideManufacturer = () => {
  const buttonClear = document.getElementById("btn");
  buttonClear.addEventListener("click", () => {
    const manufacturerName = document.getElementById("manufacturerId");
    manufacturerName.style.display = "none";
  });
};
hideManufacturer();
