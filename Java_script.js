"use strict";

//window.alert("Hello, World!");
document.getElementById("dateNow").innerHTML =
   "m/d/y" + "<br>" + "h:t:m:s"

// document.getElementById("days").textContent = "dd";
// document.getElementById("hrs").textContent = "hh";
// document.getElementById("mins").textContent = "mm";
// document.getElementById("secs").textContent = "ss";

runClock();
setInterval("runClock()", 1000)

function runClock() {
   var currentDay = new Date()

   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   document.getElementById("dateNow").innerHTML =
      dateStr + "<br>" + timeStr; /*"<br>" stands for line-break, make the text after on a new line*/

   //How many days until our event?
   
   // var newYear = new Date("January 1, 2019");
   // newYear.setFullYear(currentDay.getFullYear() + 1);

   // var daysLeft = (newYear - currentDay) / 1000 / 60 / 60 / 24;

   // document.getElementById("days").textContent = Math.floor(daysLeft)

   // var hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   // document.getElementById("hrs").textContent = Math.floor(hoursLeft);

   // var minsLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
   // document.getElementById("mins").textContent = Math.floor(minsLeft);

   // var secondsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
   // document.getElementById("secs").textContent = Math.floor(secondsLeft);


}


// Event Handler
var theImage = document.getElementById("discord");
theImage.onmouseover = goToIreland;


// Named function
function goToIreland() {
   theImage.src = "MySQL.png";
}

// Event Listener
// Anonymous function (no name after function)
theImage.addEventListener("mouseout", function (){
   //code in my anon function
   theImage.src = "discord_bot.jpg";
});