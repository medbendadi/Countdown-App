const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");


const target = "13 Aug 2022";


function countdown(){
   const targetDate = new Date(target)
   const currentDate= new Date;

   const Total_seconds = (targetDate - currentDate) / 1000;

   const days = Math.floor(Total_seconds / 3600 / 24);

   const hours = Math.floor(Total_seconds / 3600) % 24;

   const minutes = Math.floor(Total_seconds / 60) %60;
   
   const seconds = Math.floor(Total_seconds)% 60;

   daysEL.innerHTML = format(days)
   hoursEL.innerHTML = format(hours)
   minutesEL.innerHTML = format(minutes)
   secondsEL.innerHTML = format(seconds)

   // console.log(days , hours  , minutes, seconds);
}

function format(time){
   return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)