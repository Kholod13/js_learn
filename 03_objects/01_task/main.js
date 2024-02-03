var time = {
   hours: 21,
   minutes: 23,
   seconds: 44
}
function ShowTime(time){
   console.log(`Time: ${time.hours}:${time.minutes}:${time.seconds}`);
}
function TimePlus(time){
   time.seconds++;
}
function TimeMinus(time){
   time.seconds--;
}
ShowTime(time);
TimeMinus(time);
ShowTime(time);
TimePlus(time);
ShowTime(time);