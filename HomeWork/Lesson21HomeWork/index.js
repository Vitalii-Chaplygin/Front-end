// Создайте функцию delay, которая принимает число (value) и возвращает промис.
// Промис должен разрешиться через 5 секунд и вернуть удвоенное значение аргумента value (в resolve).
// Если аргумент не является числом, промис должен быть отклонен с текстом ошибки "The argument is not a number" (в reject)

const delay = (value) => 
   new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof value !== 'number') {
        reject("The argument is not a number");
      } else {
        resolve(value * 2);
      }
    }, 5000);
  });
;
delay(4+'4')
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
