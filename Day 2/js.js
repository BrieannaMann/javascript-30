
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  function setDate(){
    const now = new Date();
    const hours = now.getHours();
    const hoursDegrees = ((hours/ 12)* 360) + 90;
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes/ 60) * 360)+ 90;
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/ 60) * 360)+ 90;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  setInterval(setDate, 1000);
