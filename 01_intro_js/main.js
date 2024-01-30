/*
//console print
console.log("Hello wold!");
//task 01
//-01
// prompt - dialog window for input
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
//-02
let string = prompt("Input number");

let num = 0;
for(let i = 0; i < string.length; i++){
   if (!isNaN(parseInt(string[i]))) {
      num++;
  }
}
alert(`You have numbers: ${num}`);
//-03
let stringUser = prompt("Input 10 numbers");
let array = [];
let string = "";

// fill array
for (let i = 0; i < stringUser.length; i++) {
    if (stringUser[i] !== " ") {
        string += stringUser[i];
    } else {
        array.push(string);
        string = "";
    }
}

// calculate
let positive = 0;
let negative = 0;
let nulls = 0;
let odd = 0;
let even = 0;

for (let i = 0; i < array.length; i++) {
    // Use parseInt to convert the array element to a number
    let num = parseInt(array[i]);

    if (isNaN(num)) {
        alert("Invalid input. Please enter numeric values.");
        break;
    }

    if (num === 0) {
        nulls++;
    }
    if (num > 0) {
        positive++;
    }
    if (num < 0) {
        negative++;
    }
    if (num % 2 === 0) {
        even++;
    }
    if (num % 2 !== 0) {
        odd++;
    }
}

// Display results
alert(`\"${stringUser}\"\nStatistic\npositive: ${positive}\nnegative: ${negative}\neven: ${even}\nodd: ${odd}\nnulls: ${nulls}`);
//66 43 55 44 0 -9 -8 -7 -6 0
*/
//-04
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for (let i = 0; true; i++) {
   let userInput = confirm("Day of week: " + daysOfWeek[i]);
   if (!userInput) {
      break;
   }

   if (i === daysOfWeek.length - 1) {
      i = -1;
   }
}
