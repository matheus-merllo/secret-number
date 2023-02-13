const lowerNumber = 1;
const higherNumber = 100;
const secretNumber = raffleNumber(11, higherNumber);

const elementLowerNumber = document.getElementById('lower-number');
const elementHigherNumber = document.getElementById('higher-number');

elementLowerNumber.innerHTML = lowerNumber;
elementHigherNumber.innerHTML = higherNumber;

function raffleNumber(min, max){
    return parseInt(Math.random() * (max - min) + min);
}