const daysHTML = document.getElementById("DayCount");
const hoursHTML = document.getElementById("HourCount");
const minsHTML = document.getElementById("MinuteCount");
const secondsHTML = document.getElementById("SecondCount");

var days;
var hours;
var mins;
var secs;

function countdownTimer(){
  const endTime = new Date(2022, 5, 17)
  const current = new Date()
  
  const secsLeft = Math.floor((endTime-current)/1000)

  days = Math.floor(secsLeft / 86400)
  hours = Math.floor(secsLeft / 3600) % 24
  mins = Math.floor(secsLeft / 60) % 60
  secs = secsLeft % 60

  editHTML()
}

function editHTML(){
  daysHTML.innerHTML = niceLook(days)
  hoursHTML.innerHTML = niceLook(hours)
  minsHTML.innerHTML = niceLook(mins)
  secondsHTML.innerHTML = niceLook(secs)
}

function niceLook(num){
  if(num < 10){
    return '0' + num
  }else{
    return num
  }
}

countdownTimer()
setInterval(countdownTimer, 500)