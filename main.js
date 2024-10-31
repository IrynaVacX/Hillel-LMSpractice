"use strict";
const timeValue = 133;

function startTimer(timeLeft) {
  const timerElement = document.getElementById("timer");

  const interval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent = (minutes < 10 ? "0" : "") + 
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
    }
  }, 1000);
}

startTimer(timeValue);
