const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', '/images/blank.png')
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.append(card);
    }
}

createBoard()

function checkMatch(){

    const cards = document.querySelectorAll('img')
    const optionOneID = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if(optionOneID == optionTwoId){
        cards[optionOneID].setAttribute('src', '/images/blank.png');
        cards[optionTwoId].setAttribute('src', '/images/blank.png');
        alert("YOu have clicked the same Image")
    }
 
    else if (cardsChosen[0] == cardsChosen[1]){
         alert("You found a match")
         cards[optionOneID].setAttribute('src', '/images/white.png');
         cards[optionTwoId].setAttribute('src', '/images/white.png');
         cards[optionOneID].removeEventListener('click', flipCard);
         cards[optionTwoId].removeEventListener('click', flipCard);
         cardsWon.push(cardsChosen);
     }else {
        cards[optionOneID].setAttribute('src', '/images/blank.png');
        cards[optionTwoId].setAttribute('src', '/images/blank.png');
     }
     cardsChosen = [];
     cardsChosenIds = [];

     if(cardsWon.length == cardArray.length / 2){
        resultDisplay.innerHTML = "Congratulations"
     }
 } 

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
   if(cardsChosen.length === 2) {
         setTimeout( checkMatch, 500)
    }
}

