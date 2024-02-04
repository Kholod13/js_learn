document.addEventListener('DOMContentLoaded', function () {
    var car = {
       model: "volkswagen",
       year: 2009,
       speed: 88,
    }
    let distance = 44;

    function InputValues(car){
       car.model = prompt("Input car model");
       car.year = prompt("Input car year");
       car.speed = prompt("Input car average speed");
       distance = prompt("Input distance for driving(km)");
    }

    function ShowInfo(car){
       alert(`Info\nCar: model ${car.model} year ${car.year} and average speed is ${car.speed}km/h\nDistance: ${distance}km`);
    }

    function CalcOvercomeDistance(car){
       let time = distance / car.speed;
       return time;
    }
    InputValues(car);
    ShowInfo(car);
    let time = CalcOvercomeDistance(car);

    // Замість document.write
    var text = document.getElementById("myText");
    if (text) {
        text.textContent = `You need ${time} hours for overcome ${distance}km`;
    } else {
        console.error("Element with id 'myText' not found.");
    }
});
