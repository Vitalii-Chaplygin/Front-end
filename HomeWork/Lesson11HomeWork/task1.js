// Задача1:
// Есть массив строк. Вывести каждую строку в div и вывести в документ

const arrString = [
  "Name: Cristiano",
  "Last name: Ronaldo",
  "Age: 39",
  "Football player",
];
for (let i = 0; i < arrString.length; i++) {
  const divTask1 = document.createElement("div");
  const p = document.createElement("p");

  p.textContent = arrString[i];
  p.style.fontSize = "30px";
  divTask1.style.marginLeft="10px"
  divTask1.id = "divId_task1";

  divTask1.appendChild(p);

  document.body.appendChild(divTask1);
}
