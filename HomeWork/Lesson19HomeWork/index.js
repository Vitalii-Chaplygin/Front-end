// Создайте базовый класс Transport, представляющий транспортное средство. У транспортного средства должны быть следующие свойства:
// make (марка)
// model (модель)
// year (год выпуска)
// Добавьте в класс Transport метод displayMainInfo(), который выводит всю информацию о транспортном средстве в консоль.
// Создайте два подкласса, расширяющих класс Transport:
// Car - представляет автомобиль. Дополнительные свойства:
// numDoors (количество дверей)
// isConvertible (является ли кабриолетом)
// Motorcycle - представляет мотоцикл. Дополнительные свойства:
// numWheels (количество колес)
// hasSideCar (имеет ли боковую коляску)
// Создайте по два экземпляра для классов Car и Motorcycle
// Для демонстрации результатов вызовите метод displayMainInfo() для каждого экземпляра (4 вызова).

class Transport {
  constructor(options) {
    this.make = options.make;
    this.model = options.model;
    this.year = options.year;
  }

  displayMainInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

class Car extends Transport {
  constructor(options) {
    super(options);
    this.numDoors = options.numDoors;
    this.isConvertible = options.isConvertible;
  }
  displayMainInfo() {
    super.displayMainInfo();
    console.log(
      `NumDoors: ${this.numDoors},  IsConvertible: ${this.isConvertible}`
    );
  }
}

class Motorcycle extends Transport {
  constructor(options) {
    super(options);
    this.numWheels = options.numWheels;
    this.hasSideCar = options.hasSideCar;
  }
  displayMainInfo() {
    super.displayMainInfo();
    console.log(`NumWeels: ${this.numWheels},  HasSideCar: ${this.hasSideCar}`);
  }
}

const bmw = new Car({
  make: "BMW",
  model: "X6",
  year: 2023,
  numDoors: 4,
  isConvertible: false,
});

const audi = new Car({
  make: "Audi",
  model: "XR8 GT II",
  year: 2020,
  numDoors: 2,
  isConvertible: false,
});

const harley = new Motorcycle({
  make: "Harley-Davidson",
  model: "Freewheeler",
  year: 2019,
  numWheels: 3,
  hasSideCar: false,
});

const honda = new Motorcycle({
  make: "Honda",
  model: "FCBR1000RR-R Fireblade",
  year: 2024,
  numWheels: 2,
  hasSideCar: false,
});

console.log("CARS");
bmw.displayMainInfo();
console.log("");
audi.displayMainInfo();
console.log("");
console.log("MOTO");
harley.displayMainInfo();
console.log("");
honda.displayMainInfo();


function displayTransportInfo(transport) {
  const list = document.getElementById("listTtansport"); 

  const listItem = document.createElement("li"); 
  
  const textContent = document.createTextNode(
   
  //  transport.displayMainInfo()
    `Make: ${transport.make}, Model: ${transport.model}, Year: ${transport.year}`
  );

 
  listItem.appendChild(textContent);
  list.appendChild(listItem);
}



const auto = document.getElementById("auto");
auto.addEventListener("click", () => {
  displayTransportInfo(bmw);
  displayTransportInfo(audi);
});

const moto = document.getElementById("moto");
moto.addEventListener("click", () => {
  displayTransportInfo(harley);
  displayTransportInfo(honda);
});
