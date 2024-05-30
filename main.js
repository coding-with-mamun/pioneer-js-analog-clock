// get elements
const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");

setInterval(() => {
  let time = new Date();
  let currentSecond = time.getSeconds();
  let currentMinutes = time.getMinutes();
  let currentHours = time.getHours();

  sec.style.transform = `rotate(${getClockTime(60, currentSecond)}deg)`;
  min.style.transform = `rotate(${getClockTime(60, currentMinutes)}deg)`;
  hour.style.transform = `rotate(${getClockTime(12, currentHours)}deg)`;
}, 1000);
