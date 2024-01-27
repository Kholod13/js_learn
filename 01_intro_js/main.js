//console print
console.log("Hello wold!");
//task 01
//-01
// prompt - dialog window for input
/*
let year = prompt("Input your year");
const age = 2024 - year;
//alert - dialog window with buttons 'yes' and 'no'
alert(`You are ${age} years old`);
//-02
let gb = prompt("Input size SD card");
let numFiles = (gb * 1024) / 820;
alert(`SD can must ${numFiles} files`);

//task 02
//-01
let num = prompt("Input num 0-9");
let sym;
if(num == 0){
   sym = ")";
}
if(num == 1){
   sym = "!";
}
if(num == 2){
   sym = "@";
}
if(num == 3){
   sym = "#";
}
if(num == 4){
   sym = "$";
}
if(num == 5){
   sym = "%";
}
if(num == 6){
   sym = "^";
}
if(num == 7){
   sym = "&";
}
if(num == 8){
   sym = "*";
}
if(num == 9){
   sym = "(";
}
alert(`Your sym \"${sym}\"`);
//-02
let year = prompt("Input year");

if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
   alert("year is intercalary");
}
else{
   alert("year is not intercalary");
}
//-03
let day = parseInt(prompt("Input day:"));
let month = parseInt(prompt("Input month (1-12):"));
let year = parseInt(prompt("Input year:"));

function intercalaryYear(year) {
   return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
}

function daysInMonth(month, year) {
   return new Date(year, month, 0).getDate();
}
let daysInCurrentMonth = daysInMonth(month, year);

if (day >= 1 && day <= daysInCurrentMonth) {
   // Знайти наступну за введеною датою
   var nextDay = day + 1;
   var nextMonth = month;
   var nextYear = year;

   // Перевірити, чи потрібно перейти на наступний місяць або рік
   if (nextDay > daysInCurrentMonth) {
       nextDay = 1;
       nextMonth++;

       if (nextMonth > 12) {
           nextMonth = 1;
           nextYear++;
       }
   }
   alert("Next date: " + nextDay + "." + nextMonth + "." + nextYear);
}else{
   alert("You input invalid data!");
}
//task 03
//-01
let firstN = prompt("Input first number");
let lastN = prompt("Input last number");

let sum;
for(let i = firstN; i <lastN; i++){
   sum += i;
}
alert(`Summ = ${sum}`);
*/
//-02
