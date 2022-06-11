const userChoiceDisplay = document.getElementById("user-choice");
const opponentDisplay = document.getElementById('opponent-choice');

const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
let userChoice;
connectIo();

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    oppChoice();
   
}))


function connectIo(){

    socket = io.connect();

    socket.on("connect", () => {
        if (socket.connected) {
          console.log("Connected Only Once" + socket.id)
          socket.emit("userconnect", {
            userId: socket.id,
          })
        }
      });
}

function oppChoice(){
    socket.emit("opponent_choice", userChoice);
    console.log(userChoice);
    
    socket.on("result", (data) => {
        opponentDisplay.innerHTML = JSON.stringify(data.opponentChoice);
      });
}



/* possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    let test = generateComputerChoice();
    computerChoiceDisplay.innerHTML = test;
    finalResult(userChoice, test);
}))

function generateComputerChoice(){
    const cpuChoices = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * cpuChoices.length);
    return cpuChoices[random];
}

function finalResult(user, cpu){
    if (user === cpu) resultDisplay.innerHTML = "Draw";
    if (user === "Rock"){
        if(cpu === "Paper")resultDisplay.innerHTML = "You Lost";
        if(cpu === "Scissors")resultDisplay.innerHTML = "You Win";
    }
    if (user === "Paper"){
        if(cpu === "Rock")resultDisplay.innerHTML = "You Win";
        if(cpu === "Scissors")resultDisplay.innerHTML = "You Lost";
    }
    if (user === "Scissors"){
        if(cpu === "Rock")resultDisplay.innerHTML = "You Lost";
        if(cpu === "Scissors")resultDisplay.innerHTML = "You Win";
    }
    
} */