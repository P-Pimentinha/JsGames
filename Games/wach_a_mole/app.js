const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPOsition;
let timerID = null;
let currentTime = 60;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPOsition = randomSquare.id;
}


squares.forEach(square => {
    square.addEventListener('click', function () {
        if(square.id == hitPOsition) {
            result++;
            score.textContent = result;
            hitPOsition = null;
        }else{
            result--
            score.textContent = result;
        }
    })
})

function moveMole(){
    timerID = setInterval(randomSquare, 1000);
}

function countDown() {
    currentTime--
    score.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerID);
        clearInterval(timerID)
        alert('Game Over')
    }
}

moveMole();

let countDownTimerID = setInterval(countDown, 1000);



