const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  //change seconds into degrees
  const secondsDegrees = ((seconds/60) * 360) +90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log("sec",seconds);

  const minutes = now.getMinutes();
  //change minutes into degrees
  const minuteDegrees = ((minutes/60) * 360) +90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  console.log("min", minutes);

  const hour = now.getHours();
  //change hours into degrees
  const hourDegrees = ((hour/12) * 360) +90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log("hour", hour);
}

setInterval(setDate, 1000)