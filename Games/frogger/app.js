const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseBtn = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');

let currentIndex = 76;
const width = 9;
let timerId; 
let currentTime = 20;

function moveFrog(e) {

    squares[currentIndex].classList.remove('frog');

    switch(e.key){
            case 'ArrowLeft':
                if(currentIndex % width !== 0) currentIndex -=1;
                break;
            case 'ArrowRight':
                if(currentIndex % width < width -1) currentIndex += 1;
                break;
            case 'ArrowUp':
                if(currentIndex - width >=0) currentIndex -= width;
                break;
            case 'ArrowDown':
                if(currentIndex + width < width * width) currentIndex += width;
                break;
    }
    squares[currentIndex].classList.add('frog');
    
}




function autoMoveLogs(){
    currentTime--;
    timeLeftDisplay.innerHTML = currentTime;
    logsLeft.forEach(p => moveLogLeft(p));
    logsRight.forEach(p => moveLogRight(p));
    carsLeft.forEach(p => moveCarLeft(p));
    carsRight.forEach(p => moveCarRight(p));
    lose();
}

function moveLogLeft (p){
    switch(true){
        case p.classList.contains('l1'):
            p.classList.remove('l1');
            p.classList.add('l2');
            break
        case p.classList.contains('l2'):
            p.classList.remove('l2');
            p.classList.add('l3');
            break
        case p.classList.contains('l3'):
            p.classList.remove('l3');
            p.classList.add('l4');
            break
        case p.classList.contains('l4'):
            p.classList.remove('l4');
            p.classList.add('l5');
            break
        case p.classList.contains('l5'):
            p.classList.remove('l5');
            p.classList.add('l1');
            break
    }
}

function moveLogRight (p){
    switch(true){
        case p.classList.contains('l1'):
            p.classList.remove('l1');
            p.classList.add('l5');

            break
        case p.classList.contains('l2'):
            p.classList.remove('l2');
            p.classList.add('l1');
            break
        case p.classList.contains('l3'):
            p.classList.remove('l3');
            p.classList.add('l2');
            break
        case p.classList.contains('l4'):
            p.classList.remove('l4');
            p.classList.add('l3');
            break
        case p.classList.contains('l5'):
            p.classList.remove('l5');
            p.classList.add('l4');
            break
    }
}

function moveCarLeft (p){
    switch(true){
        case p.classList.contains('c1'):
            p.classList.remove('c1');
            p.classList.add('c2');
            
            break
        case p.classList.contains('c2'):
            p.classList.remove('c2');
            p.classList.add('c3');
            
            break
        case p.classList.contains('c3'):
            p.classList.remove('c3');
            p.classList.add('c1');
            
            break
    }
}

function moveCarRight (p){
    switch(true){
        case p.classList.contains('c1'):
            p.classList.remove('c1');
            p.classList.add('c3');
            
            break
        case p.classList.contains('c2'):
            p.classList.remove('c2');
            p.classList.add('c1');
            
            break
        case p.classList.contains('c3'):
            p.classList.remove('c3');
            p.classList.add('c2');
            
            break
    }
}




function lose(){
    if(squares[currentIndex].classList.contains('c1') ||
    squares[currentIndex].classList.contains('l4') ||
    squares[currentIndex].classList.contains('l5') ||
    currentTime <=0
    ){
        resultDisplay.textContent = "GameOVer"
        clearInterval(timerId);
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener("keydown", moveFrog)
    }else if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = "You Win"
        clearInterval(timerId);
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener("keydown", moveFrog)
    }
}

startPauseBtn.addEventListener('click', () => {
    if(timerId){
        clearInterval(timerId);
        timerId = null;
        document.removeEventListener("keydown", moveFrog);
    } else {
        timerId = setInterval(autoMoveLogs, 1000)
        document.addEventListener("keydown", moveFrog);
    }
})