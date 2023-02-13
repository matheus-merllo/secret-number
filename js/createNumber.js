const lowerNumber = 1;
const higherNumber = 100;
const secretNumber = raffleNumber();

const elementLowerNumber = document.getElementById('lower-number');
const elementHigherNumber = document.getElementById('higher-number');

elementLowerNumber.innerHTML = lowerNumber;
elementHigherNumber.innerHTML = higherNumber;

function raffleNumber(){
    return parseInt(Math.random() * higherNumber + 1);
}