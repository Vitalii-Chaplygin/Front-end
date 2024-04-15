// Задача2:
// Написать калькулятор квадратного уравнения (дискрименант и корни)
// пользователь вводит три переменных   a, b , c
// и ему выводится ответ в x1 и  x2  в любом виде.

const calc = (calculatorEvent) => {
  const form1 = document.forms.formName;
  const a = form1.elements.number-inta.value;
  const b = form1.elements.number-intb.value;
  const c = form1.elements.number-intc.value;
  const D = b * b - 4 * a * c;
  if (D < 0) {
    return " у уровнения нет корней";
  } else if (D === 0) {
    return "у уровнения один корень " + (-b / (2 * a));
  } else {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    return "у уровнении два корня " + x1 + "и" + x2;
  }
};

document.getElementById("formId").addEventListener("submit", (calculatorEvent) => {
  const result = calc(calculatorEvent);
  console.log(result);
});