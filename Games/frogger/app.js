const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseBtn = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currentIndex = 0;
console.log(squares)
function moveFrog() {
    squares[currentIndex].classList.add('frog')

}

document.addEventListener("keydown", moveFrog);