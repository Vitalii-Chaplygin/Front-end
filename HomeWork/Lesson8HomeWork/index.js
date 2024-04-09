let int = 30;
let Str = "Привет!!";
let bool = true;
console.log(Str);
console.log("Мне: " + int + " лет");
console.log("Тебе больше 18: " + bool);

//============================================

let userName = "Jon";
let user2Name = userName;

//userName='Bill';

if (userName === user2Name) {
  console.log("У Вас одинаковые имена: " + userName);
} else {
  console.log("У Вас разные имена");
  console.log("Имя первого пользователя: " + userName);
  console.log("Имя второго пользователя: " + user2Name);
}

//=============================================================

let numberArrey = [3, 45, 66, 19, 6, 89];
for (let i = 0; i < numberArrey.length; i++) {

}
console.log("Элементы с индексами 0,2,4 = [" +numberArrey[0] +"," +numberArrey[2] +"," + numberArrey[4]+"]");

//===================================================================================

let numberArrey2 = [10, 25, 39, 19, 8, 89];
let str ="[";
for (let i = numberArrey2.length - 1; i >= 0; i--) {
  str = str + numberArrey2[i] + ",";
}

console.log("Элементы массива в обратном направлении: " + str + "]");
