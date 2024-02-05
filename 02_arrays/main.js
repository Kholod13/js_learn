//task 1
var array = new Array(20);
for(let i = 0; i < array.length; i++){
   var random = Math.floor(Math.random() * 100);
   array[i] = random;
}
//task2
function ShowArr(array){
   console.log("Array");
   for(let i = 0; i < array.length; i++){
      console.log(`\[${i+1}\] - ${array[i]}`);
   }
}
ShowArr(array);
//task3
console.log("Elements in array % 7");
for(let i = 0; i < array.length; i++){
   if(array[i] % 7 == 0){
      console.log(`[${i+1}] - ${array[i]}`);
   }
}
//task4
console.log("Sort arr descending");
var arrDes = array.slice();

arrDes.sort(function(a, b) {
  return b - a; 
});

for(let i = 0; i < arrDes.length; i++){
   console.log(`\[${i+1}\] - ${arrDes[i]}`);
}
//task5
for(let i = 10; i < array.length; i++){
   array[i] = 0;
}
ShowArr(array);
//task6
array.slice(0, 3);
ShowArr(array);
//task7
function SameNumInArr(arr){
   for(let i = 0; i< arr.length; i++){
      for(let j = 0; j < arr.length; j++){
         if(arr[i] == arr[j]){
            return true;
         }
      }
   }

   return false;
}
//task8
var shortArr = new Array(array.length);
shortArr.slice(0);
shortArr.slice(array.length-1);
ShowArr(shortArr);
//task9
let evenNums = 0;
for(let i = 0; i < array; i++){
   if(array[i] % 2 == 0){
      evenNums++;
   }
}
console.log(`Even nums = ${evenNums}`);