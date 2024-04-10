const arrNum = [2, 4, 6, 8, 10];

let string = "[";
for (let i = 0; i < arrNum.length; i++) {
  string = string + arrNum[i] * 2 + (i != arrNum.length - 1 ? "," : "]");
}
console.log("начальный массив: [" + arrNum + "]");

console.log("массив с удвоением элементов: " + string);

console.log("================================================= \n");

const arrNum2 = [20, 88, "hello", true];
console.log("начальный массив: ["+arrNum2+"]");
let a = arrNum2[arrNum2.length - 1];
arrNum2[arrNum2.length - 1] = arrNum2[0];
arrNum2[0] = a;

console.log("масссив после перемены значений 1 элемента с последним: [" + arrNum2 + "]");

console.log("================================================= \n");

let isThereFive = null;
const arrNum3 = [78, 4, 90, 5, 456, "5", 45, 6];
for (let i = 0; i < arrNum3.length; i++) {
  if (arrNum3[i] === 5) {
    isThereFive = true;
    break;
  }
}
if (isThereFive) {
  console.log("5 Найдено");
} else {
  console.log("5 Отсутствует");
}

console.log("================================================= \n");

const arrNum4 = [10, 15, 20, 25, 30];
let summ = 0;
let arrLenght = arrNum4.length;
for (let i = 0; i < arrNum4.length; i++) {
  summ = summ + arrNum4[i];
}
let averageValue = summ / arrLenght;
console.log("Среднее значение элементов: "+averageValue);
