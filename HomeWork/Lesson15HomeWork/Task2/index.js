// Есть массив продуктов: каждый продукт - это объект с полями:
// имя, цена, производитель значения можно задать на свое усмотрение
// написать функцию фильтрации продуктов цена выше 5000

const milk = { name: "milk", price: 15, manufacturer: "ferma" };
const bike = { name: "Crossride Matrix", price: 7000, manufacturer: "England" };
const car = { name: "BMW", price: 40000, manufacturer: "Germany" };
const beer = { name: "Bavaria", price: 20, manufacturer: "Germany" };

const productList = [milk, bike, car, beer];

const func = () => {
  const productSort = productList.filter(product => product.price > 5000);
  console.log(productSort);
};

func();
