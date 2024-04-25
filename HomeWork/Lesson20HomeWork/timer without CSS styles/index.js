// Создайте простой таймер на веб-странице, который будет отсчитывать время назад от 60 секунд.
// При достижении 0 секунд таймер должен остановиться.
// Стилизуйте его

const addTimer = () => {
  console.log("Start Timer");
  let count = 60;
  const intervalId = setInterval(() => {
    count -= 1;
    console.log(count);
    if (count === 0) {
      console.log("Timer End");
      clearInterval(intervalId);
    }
  }, 500);
};
addTimer();
