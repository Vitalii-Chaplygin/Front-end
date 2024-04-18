// Есть массив чисел - нужно выбрать все числа больше 5
// (использовать функцию высшего порядка)

// делаем событие Click
const btn = document.getElementById("btnId");
const btnClear = document.getElementById("btnIdClear");

btn.addEventListener("click", () => {
  let length = document.getElementById("length").value;
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;
  let outputStartArray= document.getElementById("outputStartArray");
  let output = document.getElementById("output");
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push(randomInt(min, max));
  }
  const startArray = array;
   outputStartArray.innerHTML ="Start Array: " +"[" + [startArray.join(" | ")] + "]";

  const result = array.filter((n) => n > 5);
  output.innerHTML ="Sort Array: "+ "[" + [result.join(" | ")] + "]";


});

// генератор случайного числа
function randomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

const clear = () => {
  btnClear.addEventListener("click", () => {
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("outputStartArray").innerHTML = "";
    document.getElementById("length").value = "";
  });
};
clear();
