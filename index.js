let currTime = new Date();
let currSec = currTime.getSeconds();
let currMin = currTime.getMinutes();
let currHour = currTime.getHours();

const secHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".minute-hand");


const changeTime = () => {
  let intervalTime = new Date();
  let hours =
    intervalTime.getHours() > 12
      ? intervalTime.getHours() - 12
      : intervalTime.getHours();

  secHand.style.transform = `translateY(-50%) rotateZ(${
    (intervalTime.getSeconds() / 60) * 360
  }deg)`;
  hourHand.style.transform = `translateY(-50%) rotateZ(${
    (hours / 12 + intervalTime.getMinutes() / 3600) * 360
  }deg)`;
  minHand.style.transform = `translateY(-50%) rotateZ(${
    (intervalTime.getMinutes() / 60 + intervalTime.getSeconds() / 3660) * 360
  }deg)`;
};

window.onload = changeTime;
setInterval(changeTime, 100);
