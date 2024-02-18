var time = {
   hours: 23,
   minutes: 59,
   seconds: 59,

   ShowTime: function(){
      let h = this.hours;
      let m = this.minutes;
      let s = this.seconds;

      if(this.hours == 0){
         h = "00";
      }
      if(this.minutes == 0){
         m = "00";
      }
      if(this.seconds == 0){
         s = "00";
      }

      console.log(`Time: ${h}:${m}:${s}`);
   },
   TimePlus: function(){
      this.seconds++;
      if(this.seconds == 60){
         this.seconds = 0;

         this.minutes++;
         if(this.minutes == 60){
            this.minutes = 0;

            this.hours++;
            if(this.hours == 24){
               this.hours = 0;
            }
         }
      }
   },
   TimeMinus: function(){
      time.seconds--;
   },
}
//using functions
/*
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
*/

//using methods
time.ShowTime();
time.TimePlus();
time.ShowTime();
time.TimePlus();
time.ShowTime();