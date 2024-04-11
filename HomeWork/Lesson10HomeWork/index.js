function integer(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
const res = integer(8, 7);
console.log(res);
console.log("===============================================");

const str = "str";
function strAndInt(str, n) {
  return str.substring(0, n);
}
const result = strAndInt("hello", 4);
console.log(result);
const result2 = strAndInt("wonderful", 2);
console.log(result2);
const result3 = strAndInt("world", 5);
console.log(result3);
console.log("===============================================");

// Задача 3
// Напишите функцию, которая принимает массив и элемент,
// а затем возвращает true, если элемент присутствует в массиве,
// и false в противном случае (если есть повторения заданного элемента в массиве,
// то на задачу это никак не влияет). Результат вызова функции отобразите в консоле

function arrAndElement(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      return true;
    }
  }
  return false;
}
const result4 = arrAndElement([1, "hello", 45, "world", 66], 66);
console.log(result4);

console.log("===============================================");

const arrInteger = [45, 6, 78, 12, 78, 99, 4, 100];
console.log("Начальный массив: [" + arrInteger.join(",") + "]");

for (i = 0; i < arrInteger.length; i++) {
  for (k = 0; k < arrInteger.length; k++) {
    if (arrInteger[k] > arrInteger[k + 1]) {
      const firstElement = arrInteger[k];
      arrInteger[k] = arrInteger[k + 1];
      arrInteger[k + 1] = firstElement;
    }
  }
}

const result7 = arrInteger.join(",");
console.log("Отсортированный массив: [" + result7 + "]");
