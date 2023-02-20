const counters = document.querySelectorAll(".counter");
const timer = 500;
let counter = [0, 0, 0];
let timeToFinish = [12000, 6000, 7500];

let timeCounter = [0, 0, 0];

counters[0].textContent = 0;
counters[1].textContent = 0;
counters[2].textContent = 0;

const interval1 = setInterval(() => {
  counter[0] += timeToFinish[0] / timer;
  counters[0].textContent = counter[0].toFixed(0);

  timeCounter[0]++;
  if (timeCounter[0] >= timer) {
    clearInterval(interval1);
  }
}, 1);

const interval2 = setInterval(() => {
  counter[1] += timeToFinish[1] / timer;
  counters[1].textContent = counter[1].toFixed(0);

  timeCounter[1]++;
  if (timeCounter[1] >= timer) {
    clearInterval(interval2);
  }
}, 1);

const interval3 = setInterval(() => {
  counter[2] += timeToFinish[2] / timer;
  counters[2].textContent = counter[2].toFixed(0);

  timeCounter[2]++;
  if (timeCounter[2] >= timer) {
    clearInterval(interval3);
  }
}, 1);
