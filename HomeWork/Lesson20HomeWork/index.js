// Создайте простой таймер на веб-странице, который будет отсчитывать время назад от 60 секунд.
// При достижении 0 секунд таймер должен остановиться.
// Стилизуйте его

// const addTimer=()=>{
// let count = 60;
// const intervalId = setInterval(() => {
//   count -= 1;
//   console.log(count);
//   if (count === 0) {
//     console.log("Timer End");
//     clearInterval(intervalId);
//   }
// }, 500);}
// addTimer();

const houreDiv = document.querySelector(".hour");
const minuteDiv = document.querySelector(".minute");
const secondDiv = document.querySelector(".second");
const millesecondDiv = document.querySelector(".milliseccond");

const buttonStart = document.querySelector(".start");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");

let hour = 0,
  minute = 0,
  second = 0,
  milliseccond = 0,
  intervalTimer;

buttonStart.addEventListener("click", () => {
  clearInterval(intervalTimer);
  intervalTimer = setInterval(start, 10);
});

buttonPause.addEventListener("click", () => {
  clearInterval(intervalTimer);
});

buttonStop.addEventListener("click", () => {
  clearInterval(intervalTimer);
  resetToZero();
});

function start() {
  milliseccond++;
  if (milliseccond < 10) {
    millesecondDiv.innerText = "0" + milliseccond;
  } else {
    millesecondDiv.innerText = milliseccond;
  }

  if (milliseccond > 99) {
    second++;
    secondDiv.innerText = "0" + second;
    milliseccond = 0;
    millesecondDiv.innerText = "0" + milliseccond;
  }

  if (second < 10) {
    secondDiv.innerText = "0" + second;
  } else {
    secondDiv.innerText = second;
  }
  if (second > 60) {
    minute++;
    minuteDiv.innerText = "0" + minute;
    second = 0;
    secondDiv.innerText = "0" + second;
  }

  if (minute < 10) {
    minuteDiv.innerText = "0" + minute;
  } else {
    minuteDiv.innerText = minute;
  }
  if (minute > 60) {
    hour++;
    houreDiv.innerText = "0" + minute;
    minute = 0;
    minuteDiv.innerText = "0" + second;
  }
}

function resetToZero() {
  houreDiv.textContent = "00";
  minuteDiv.textContent = "00";
  secondDiv.textContent = "00";
  millesecondDiv.textContent = "00";
}
