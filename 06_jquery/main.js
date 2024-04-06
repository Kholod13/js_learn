const $colors = $('.colors');
const $addBlock = $('.btn');
function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i < $colors.children().length; i++){
   $colors.children().eq(i).css('background', `#${getRandomInt(0,999999)}`);
}

$colors.children().on('click', function (){
   $(this).remove();
});

$addBlock.on('click', function (){
   const newBlock = $('<div class="clr"></div>').appendTo($colors);

   newBlock.on('click', function() {
      $(this).remove();
   });
   newBlock.css('background', `#${getRandomInt(0, 999999)}`);
});
//task2

const $btnNext = $('.btnNext');
const $color = $('.color');
let clrIdentificator = true;
$btnNext.on('click', function (){
   let backgroundColor = $color.css('background-color');

   if(backgroundColor === 'rgb(255, 0, 0)') {
      $color.css('background-color', 'yellow');
      console.log("yellow");
   } else if(backgroundColor === 'rgb(255, 255, 0)') {
      $color.css('background-color', 'green');
      console.log("green");
   } else if(backgroundColor === 'rgb(0, 128, 0)') {
      $color.css('background-color', 'red');
      console.log("red");
   }
});
