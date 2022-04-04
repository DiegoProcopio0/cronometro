const viewWatch = document.querySelector(".cronometro");
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = 0;

function twoDigits(digit) {
  if (digit < 10) {
    return `0${digit}`;
  } else {
    return digit;
  }
}

function start() {
  watch();
  interval = setInterval(() => watch(), 1000);
}

function pause() {
  clearInterval(interval);
}

function clearTimer() {
  clearInterval(interval);
  hours = 0;
  seconds = 0;
  seconds = 0;
  viewWatch.innerHTML = "00:00:00";
}

function watch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  } else if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  viewWatch.innerHTML = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(
    seconds
  )} `;
}
