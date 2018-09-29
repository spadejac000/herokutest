// global variables
let dealer;
let player1 = true;
let playerBet;
let bet = false;
let card = document.getElementById('card');
let betAmount = document.getElementById('betAmount');
let doubleDownButton = document.getElementById('double-down');
let splitButton = document.getElementById('split-button');
let splitHitButton = document.getElementById('splitHitButton');
let splitDoubleDownButton = document.getElementById('splitDoubleDownButton');
let splitStandButton = document.getElementById('splitStandButton');
let dealAudio = document.getElementById('deal-audio');
let shuffleAudio = document.getElementById('shuffle-audio');
let coinsAudio = document.getElementById('coins-audio');
let winAudio = document.getElementById('win-audio');
let tieAudio = document.getElementById('tie-audio');
let loseAudio = document.getElementById('lose-audio');
let standButton = document.getElementById('stand');
let hitButton = document.getElementById('hit');
let cardBack = document.getElementsByClassName('cardBack')[0];
let player1Box = document.getElementsByClassName('player1Box')[0];
let dealerCardBox = document.getElementsByClassName('dealerCardBox')[0];
let tieGame = document.getElementsByClassName('nobodyWins')[0];
let dealerWins = document.getElementsByClassName('dealerWins')[0];
let youWin = document.getElementsByClassName('youWin')[0];
let extraBet = document.getElementsByClassName('extra-bet')[0];
let extraPlayerBox = document.getElementsByClassName('extraPlayerBox')[0];
let amountOfMoney = document.getElementsByClassName('amountOfMoney')[0];
let image = document.getElementsByClassName('image');
let splitButtonsContainer = document.getElementsByClassName('splitButtonsContainer')[0];
// var splitBox = document.getElementsByClassName('player1Box')[0].cloneNode(false);
let playerBoxArray = document.getElementsByClassName('player1Box')[0];
let dealerArray = [];
let playerArray = [];
let secondPlayerArray = [];
let newPlayerArray = [];
let beginGame = true;
let p1Total = checkForAce(playerArray);
let newP1Total = checkForAce(newPlayerArray);
let secondP1Total = checkForAce(secondPlayerArray);
let dealTotal = checkForAce(dealerArray);
let cardsArray = [
  {
    rank: 1,
    suit: "clubs",
    cardImage: "images/AC.png",
  },
  {
    rank: 2,
    suit: "clubs",
    cardImage: "images/2C.png",
  },
  {
    rank: 3,
    suit: "clubs",
    cardImage: "images/3C.png",
  },
  {
    rank: 4,
    suit: "clubs",
    cardImage: "images/4C.png",
  },
  {
    rank: 5,
    suit: "clubs",
    cardImage: "images/5C.png",
  },
  {
    rank: 6,
    suit: "clubs",
    cardImage: "images/6C.png",
  },
  {
    rank: 7,
    suit: "clubs",
    cardImage: "images/7C.png",
  },
  {
    rank: 8,
    suit: "clubs",
    cardImage: "images/8C.png",
  },
  {
    rank: 9,
    suit: "clubs",
    cardImage: "images/9C.png",
  },
  {
    rank: 10,
    suit: "clubs",
    cardImage: "images/10C.png",
  },
  {
    rank: 10,
    suit: "clubs",
    cardImage: "images/JC.png",
  },
  {
    rank: 10,
    suit: "clubs",
    cardImage: "images/QC.png",
  },
  {
    rank: 10,
    suit: "clubs",
    cardImage: "images/KC.png",
  },
  {
    rank: 2,
    suit: "diamonds",
    cardImage: "images/2D.png",
  },
  {
    rank: 3,
    suit: "diamonds",
    cardImage: "images/3D.png",
  },
  {
    rank: 4,
    suit: "diamonds",
    cardImage: "images/4D.png",
  },
  {
    rank: 5,
    suit: "diamonds",
    cardImage: "images/5D.png",
  },
  {
    rank: 6,
    suit: "diamonds",
    cardImage: "images/6D.png",
  },
  {
    rank: 7,
    suit: "diamonds",
    cardImage: "images/7D.png",
  },
  {
    rank: 8,
    suit: "diamonds",
    cardImage: "images/8D.png",
  },
  {
    rank: 9,
    suit: "diamonds",
    cardImage: "images/9D.png",
  },
  {
    rank: 10,
    suit: "diamonds",
    cardImage: "images/10D.png",
  },
  {
    rank: 10,
    suit: "diamonds",
    cardImage: "images/JD.png",
  },
  {
    rank: 10,
    suit: "diamonds",
    cardImage: "images/QD.png",
  },
  {
    rank: 10,
    suit: "diamonds",
    cardImage: "images/KD.png",
  },
  {
    rank: 1,
    suit: "hearts",
    cardImage: "images/AH.png",
  },
  {
    rank: 2,
    suit: "hearts",
    cardImage: "images/2H.png",
  },
  {
    rank: 3,
    suit: "hearts",
    cardImage: "images/3H.png",
  },
  {
    rank: 4,
    suit: "hearts",
    cardImage: "images/4H.png",
  },
  {
    rank: 5,
    suit: "hearts",
    cardImage: "images/5H.png",
  },
  {
    rank: 6,
    suit: "hearts",
    cardImage: "images/6H.png",
  },
  {
    rank: 7,
    suit: "hearts",
    cardImage: "images/7H.png",
  },
  {
    rank: 8,
    suit: "hearts",
    cardImage: "images/8H.png",
  },
  {
    rank: 9,
    suit: "hearts",
    cardImage: "images/9H.png",
  },
  {
    rank: 10,
    suit: "hearts",
    cardImage: "images/10H.png",
  },
  {
    rank: 10,
    suit: "hearts",
    cardImage: "images/JH.png",
  },
  {
    rank: 10,
    suit: "hearts",
    cardImage: "images/QH.png",
  },
  {
    rank: 10,
    suit: "hearts",
    cardImage: "images/KH.png",
  },
  {
    rank: 1,
    suit: "spades",
    cardImage: "images/AS.png",
  },
  {
    rank: 2,
    suit: "spades",
    cardImage: "images/2S.png",
  },
  {
    rank: 3,
    suit: "spades",
    cardImage: "images/3S.png",
  },
  {
    rank: 4,
    suit: "spades",
    cardImage: "images/4S.png",
  },
  {
    rank: 5,
    suit: "spades",
    cardImage: "images/5S.png",
  },
  {
    rank: 6,
    suit: "spades",
    cardImage: "images/6S.png",
  },
  {
    rank: 7,
    suit: "spades",
    cardImage: "images/7S.png",
  },
  {
    rank: 8,
    suit: "spades",
    cardImage: "images/8S.png",
  },
  {
    rank: 9,
    suit: "spades",
    cardImage: "images/9S.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/10S.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/JS.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/QS.png",
  },
  {
    rank: 10,
    suit: "spades",
    cardImage: "images/KS.png",
  },
];

// This function allows you to make a bet
const placeBet = (e) => {
  document.getElementById('coins-audio').play();
  if (document.getElementById('betAmount').value > parseInt(document.getElementsByClassName('amountOfMoney')[0].innerHTML)) {
    alert("You don't have enough money!");
} else if (document.getElementById('betAmount').value >= 5) {
  document.getElementsByClassName('amountOfMoney')[0].innerHTML -= document.getElementById('betAmount').value;
  document.getElementsByClassName('amountOfMoney')[0].style.display = 'inline-block';
    document.getElementById('bet').disabled = true;
    document.getElementById('deal').disabled = false;
  }
};

// This function draws a random card for anyone
var drawCard = function() {
    return cardsArray[Math.floor(Math.random() * 51)];
}

//deal randomly give cards to player/dealer from a deck
function deal() {
    if(beginGame === true) {
        document.getElementById('deal-audio').play();
        var card = drawCard();
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.className = 'image';
        document.getElementsByClassName('player1Box')[0].appendChild(cardElement);
        playerArray.push(card.rank);
        card = drawCard();
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.className = 'image';
        document.getElementsByClassName('dealerCardBox')[0].appendChild(cardElement);
        dealerArray.push(card.rank);
        card = drawCard();
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.className = 'image';
        cardElement.style.top = "12px";
        cardElement.style.left = "12px";
        document.getElementsByClassName('player1Box')[0].appendChild(cardElement);
        playerArray.push(card.rank);
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/red_back.png');
        cardElement.className = 'cardBack';
        cardElement.style.top = "12px";
        cardElement.style.left = "12px";
        document.getElementsByClassName('dealerCardBox')[0].appendChild(cardElement);
        card = drawCard();
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.className = 'image';
        cardElement.style.top = "12px";
        cardElement.style.left = "12px";
        document.getElementsByClassName('dealerCardBox')[0].appendChild(cardElement);
        dealerArray.push(card.rank);
      }
      document.getElementById('hit').disabled = false;
      document.getElementById('stand').disabled = false;
      document.getElementById('double-down').disabled = false;
      document.getElementById('split-button').disabled = false;
      document.getElementById('deal').disabled = true;
      beginGame = false;
      let splitBox = document.getElementsByClassName('player1Box')[0].cloneNode(false);
      if(!splitBox.hasChildNodes()) {
        p1Total = checkForAce(playerArray);
      } else {
        newP1Total = checkForAce(newPlayerArray);
      }
      dealTotal = checkForAce(dealerArray);
      blackJack();
  }

// function to double your money before 
let doubleDown = () => {
  document.getElementById('deal-audio').play();
  if(parseInt(document.getElementById('betAmount').value) <= parseInt(document.getElementsByClassName('amountOfMoney')[0].innerHTML)) {
    document.getElementsByClassName('amountOfMoney')[0].innerHTML = parseInt(document.getElementsByClassName('amountOfMoney')[0].innerHTML) - parseInt(document.getElementById('betAmount').value);
    document.getElementById('betAmount').value *= 2;
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.className = 'image';
    document.getElementsByClassName('player1Box')[0].appendChild(cardElement).style.transform = 'rotate(90deg) translateX(50px) translateY(-45px)';
    playerArray.push(card.rank);
    card = drawCard();
    stand();
  } else {
    alert("you don't have enough money, Stupid!")
  }
}

// split double down button

let splitDoubleDown = () => {
  document.getElementById('deal-audio').play();
  if(parseInt(document.getElementById('betAmount').value) <= parseInt(document.getElementsByClassName('amountOfMoney')[0].innerHTML)) {
    document.getElementsByClassName('amountOfMoney')[0].innerHTML = parseInt(document.getElementsByClassName('amountOfMoney')[0].innerHTML) - parseInt(document.getElementById('betAmount').value);
    document.getElementById('betAmount').value *= 2;
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.className = 'image';
    document.getElementById('dumbBox').appendChild(cardElement).style.transform = 'rotate(90deg) translateX(50px) translateY(-45px)';
    secondPlayerArray.push(card.rank);
    card = drawCard();
    splitStand();
    document.getElementById('splitHitButton').disabled = true;
    document.getElementById('splitDoubleDownButton').disabled = true;
    document.getElementById('splitStandButton').disabled = true;

  } else {
    alert("you don't have enough money, Stupid!")
  }
}

// This function is when you're delt a card without hitting
var autoDraw = () => {
  let card = drawCard();
  let cardElement = document.createElement('img');
  cardElement.setAttribute('src', card.cardImage);
  cardElement.className = 'image';
  document.getElementsByClassName('player1Box')[0].appendChild(cardElement).setAttribute('style', 'top: 12px; left: 12px;');
  playerArray.push(card.rank);
  card = drawCard();
}

// This function allows you to split your initial hand before you hit
const split = () => {
  // if (playerArray[0] === playerArray[1]) {
    document.getElementById('deal-audio').play();
    document.getElementById('hit').disabled = false;
    document.getElementById('deal').disabled = true;
    document.getElementById('split-button').disabled = true;
    document.getElementsByClassName('amountOfMoney')[0].innerHTML = parseInt(document.getElementsByClassName('amountOfMoney')[0].innerHTML) - parseInt(document.getElementById('betAmount').value);
    document.getElementById('betAmount').value *= 2;
    let splitBox = document.getElementsByClassName('player1Box')[0].cloneNode(false);
    document.getElementsByClassName('extraPlayerBox')[0].appendChild(splitBox).style.transform = 'translateX(100px)';
    splitBox.setAttribute('id', 'dumbBox');
    (splitBox).appendChild(document.getElementsByClassName('player1Box')[0].childNodes[1]).setAttribute('style', 'top: 0; left: 0');
    document.getElementsByClassName('player1Box')[0].childNodes.clean = function(deleteValue) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {         
          this.splice(i, 1);
          i--;
        }
      }
      return this;
    };
    autoDraw();
    let card = drawCard();
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.className = 'image';
    (splitBox).appendChild(cardElement).setAttribute('style', 'top: 12px; left: 12px;');
    playerArray.push(card.rank);
    card = drawCard();
    secondPlayerArray = [];
    for (let i=0;i<playerArray.length;i++){
        if ((i+2)%2==0) {
            newPlayerArray.push(playerArray[i]);
        }
        else {
          secondPlayerArray.push(playerArray[i]);
        }
    }
    let extraPlayerBox = document.getElementsByClassName('extraPlayerBox')[0];
    let splitButtonsContainer = document.getElementsByClassName('splitButtonsContainer')[0];
    document.getElementById('extraButtonsContainer').appendChild(splitButtonsContainer).setAttribute('style', 'display: block; text-align: center;');
    [document.getElementsByClassName('player1Box')[0]].push(splitBox);
    document.getElementById('extraButtonsContainer').style.display = 'block';
  // }
}

// function to remove card back
function removeCardBack() {
 var elem = document.getElementsByClassName('cardBack')[0];
 let dealerCardBox = document.getElementsByClassName('dealerCardBox')[0];
 dealerCardBox.removeChild(elem);
}

const hitSplitHand = () => {
  if((document.getElementsByClassName('player1Box')[0].cloneNode(false)).childNodes.length === 2) {
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    cardElement.style.top = ((document.getElementsByClassName('player1Box')[0].cloneNode(false)).children.length * 12).toString() + "px";
    cardElement.style.left = ((document.getElementsByClassName('player1Box')[0].cloneNode(false)).children.length * 18).toString() + "px";
    (document.getElementsByClassName('player1Box')[0].cloneNode(false)).appendChild(cardElement);
    secondPlayerArray.push(card.rank);
  } else {
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    cardElement.style.top = ((document.getElementsByClassName('player1Box')[0].cloneNode(false)).children.length * 12).toString() + "px";
    cardElement.style.left = ((document.getElementsByClassName('player1Box')[0].cloneNode(false)).children.length * 18).toString() + "px";
    (document.getElementsByClassName('player1Box')[0].cloneNode(false)).appendChild(cardElement);
    secondPlayerArray.push(card.rank);
    p1Total = checkForAce(secondPlayerArray);
    dealTotal = checkForAce(dealerArray);
    winner(p1Total, dealTotal);
  }
}

function stand() {
    if (document.getElementById('dumbBox') === null) {
      removeCardBack();
      while (dealerArray.reduce(function(acc, curVal) {return acc + curVal}) < 17) {
        var card = drawCard();
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', card.cardImage);
        cardElement.setAttribute('class', 'image');
        cardElement.style.top = (document.getElementsByClassName('dealerCardBox')[0].children.length * 12).toString() + "px";
        cardElement.style.left = (document.getElementsByClassName('dealerCardBox')[0].children.length * 12).toString() + "px";
        document.getElementsByClassName('dealerCardBox')[0].appendChild(cardElement);
        dealerArray.push(card.rank);
        document.getElementById('double-down').disabled = true;
        document.getElementById('double-down').disabled = true;
      }
      p1Total = checkForAce(playerArray);
      dealTotal = checkForAce(dealerArray);
      winner(p1Total, dealTotal);
    } else {
      document.getElementById('stand').disabled = true;
      document.getElementById('hit').disabled = true;
      document.getElementById('splitHitButton').disabled = false;
      document.getElementById('splitDoubleDownButton').disabled = false;
      document.getElementById('splitStandButton').disabled = false;
    }
}

// function for split stand button

let splitStand = () => {
  removeCardBack();
  while (dealerArray.reduce(function(acc, curVal) {return acc + curVal}) < 17) {
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.setAttribute('class', 'image');
    cardElement.style.top = (document.getElementsByClassName('dealerCardBox')[0].children.length * 12).toString() + "px";
    cardElement.style.left = (document.getElementsByClassName('dealerCardBox')[0].children.length * 12).toString() + "px";
    document.getElementsByClassName('dealerCardBox')[0].appendChild(cardElement);
    dealerArray.push(card.rank);
  }
  p1Total = checkForAce(newPlayerArray);
  dealTotal = checkForAce(dealerArray);
  winner(p1Total, dealTotal);
  p1Total = checkForAce(secondPlayerArray);
  dealTotal = checkForAce(dealerArray);
  winner(p1Total, dealTotal);
  document.getElementById('splitHitButton').disabled = true;
  document.getElementById('splitDoubleDownButton').disabled = true;
  document.getElementById('splitStandButton').disabled = true;
}

function blackJack() {
  if(p1Total === 21 && dealTotal !== 21) {
    document.getElementsByClassName('youWin')[0].style.display = 'block';
    document.getElementsByClassName('amountOfMoney')[0].innerHTML = parseInt(document.getElementsByClassName('amountOfMoney')[0].innerHTML) + parseInt(document.getElementById('betAmount').value * 2);
    document.getElementById('win-audio').play();
    disableButtons();
  } else if(dealTotal === 21 && p1Total !== 21) {
    document.getElementsByClassName('dealerWins')[0].style.display = 'block';
    // remove the card back
    document.getElementsByClassName('cardBack')[0].remove();
    document.getElementById('lose-audio').play();
    disableButtons();
  } else if(dealTotal === 21 && p1Total === 21) {
    // remove the card back
    document.getElementsByClassName('cardBack')[0].remove();
    document.getElementsByClassName('nobodyWins')[0].style.display = 'block';
    document.getElementById('tie-audio').play();
    disableButtons();
  } else {
  }
}

function bust() {
  if (p1Total > 21) {
    document.getElementsByClassName('dealerWins')[0].style.display = 'block';
    let moneyPerHand = parseInt(document.getElementById('betAmount').value) / parseInt([document.getElementsByClassName('player1Box')[0]].length);
    document.getElementById('betAmount').value = parseInt(moneyPerHand) * parseInt([document.getElementsByClassName('player1Box')[0]].length - 1);
    [document.getElementsByClassName('player1Box')[0]].shift();
    disableButtons();
    document.getElementById('lose-audio').play();
    if(document.getElementById('dumbBox')) {
      document.getElementById('splitHitButton').disabled = false;
      document.getElementById('splitDoubleDownButton').disabled = false;
      document.getElementById('splitStandButton').disabled = false;
    }
  }
}

let splitBust = () => {
  if(checkForAce(secondPlayerArray) > 21) {
    document.getElementById('splitHitButton').disabled = true;
    document.getElementById('splitDoubleDownButton').disabled = true;
    document.getElementById('splitStandButton').disabled = true;
  }
}

// Determine winner
function winner(p1, deal) {
  if((p1 > deal && p1 < 22) || (deal > 21 && p1 < 22)) {
      // player wins
      document.getElementsByClassName('youWin')[0].style.display = 'block';
      document.getElementsByClassName('amountOfMoney')[0].innerHTML = parseInt(document.getElementsByClassName('amountOfMoney')[0].innerHTML) + parseInt(document.getElementById('betAmount').value * 2);
      document.getElementById('win-audio').play();
      disableButtons();
  } else if ((p1 < deal && deal < 22) || (p1 > 21 && deal < 22) || p1 > 21) {
      // dealer wins.
      document.getElementsByClassName('dealerWins')[0].style.display = 'block';
      document.getElementById('lose-audio').play();
      disableButtons();
  } else {
    // push. nobody wins.
    document.getElementsByClassName('nobodyWins')[0].style.display = 'block';
    document.getElementsByClassName('amountOfMoney')[0].innerHTML = parseInt(document.getElementsByClassName('amountOfMoney')[0].innerHTML) + parseInt(document.getElementById('betAmount').value);
    document.getElementById('tie-audio').play();
    disableButtons();
  }
}

function checkForAce(arr) {
  var numOfAces = 0;
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === 1) {
      numOfAces++;
    } else {
        total = total + arr[i];
    }
  }
  for(var i = 0; i < numOfAces; i++) {
   if((total + 11) > 21) {
     total = total + 1;
     numOfAces--;
   } else {
      total = total + 11;
   }
  }
  return total;
}

// This function disables all buttons except replay when youWin, dealerWins, or nobodyWins pops up
function disableButtons() {
  document.getElementById('deal').disabled = true;
  document.getElementById('hit').disabled = true;
  document.getElementById('stand').disabled = true;
}

// This function clears the table
function replay() {
  document.getElementById('shuffle-audio').play();
  document.getElementById('bet').disabled = false;
  document.getElementById('deal').disabled = false;
  document.getElementById('stand').disabled = true;
  document.getElementById('deal').disabled = true;
  document.getElementById('double-down').disabled = true;
  document.getElementById('split-button').disabled = true;
  playerArray = [];
  newPlayerArray = [];
  secondPlayerArray = [];
  dealerArray = [];
  while (document.getElementsByClassName('dealerCardBox')[0].hasChildNodes()) {
    document.getElementsByClassName('dealerCardBox')[0].removeChild(document.getElementsByClassName('dealerCardBox')[0].lastChild);
  }
  while (document.getElementsByClassName('player1Box')[0].hasChildNodes()) {
    document.getElementsByClassName('player1Box')[0].removeChild(document.getElementsByClassName('player1Box')[0].lastChild);
  }
  [].forEach.call(document.querySelectorAll('.image'),function(e){
    e.parentNode.removeChild(e);
  });
  document.getElementsByClassName('nobodyWins')[0].style.display = 'none';
  document.getElementsByClassName('youWin')[0].style.display = 'none';
  document.getElementsByClassName('dealerWins')[0].style.display = 'none';
  document.getElementById('extraButtonsContainer').style.display = 'none';
  if(document.getElementById('dumbBox') !== null) {
    console.log(document.getElementById('dumbBox'));
    document.getElementById('dumbBox').style.display === "none";
    document.getElementById('dumbBox') === null;
    let dumbBox = document.getElementById("dumbBox");
    dumbBox.parentNode.removeChild(dumbBox);
  }
  document.getElementById('extraPlayerBox').innerHTML === '';
  
  
  beginGame = true;
}

var hit = () => {
  document.getElementById('deal-audio').play();
  if (document.getElementById('dumbBox') !== null) {
      document.getElementById('split-button').disabled = true;
      document.getElementById('double-down').disabled = true;
      var card = drawCard();
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.className = 'image';
      cardElement.style.top = (document.getElementsByClassName('player1Box')[0].children.length * 12).toString() + "px";
      cardElement.style.left = (document.getElementsByClassName('player1Box')[0].children.length * 12).toString() + "px";
      document.getElementsByClassName('player1Box')[0].appendChild(cardElement);
      newPlayerArray.push(card.rank);
      p1Total = checkForAce(newPlayerArray);
      dealTotal = checkForAce(dealerArray);
      bust();
  } else {
    document.getElementById('split-button').disabled = true;
    document.getElementById('double-down').disabled = true;
    var card = drawCard();
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', card.cardImage);
    cardElement.className = 'image';
    cardElement.style.top = (document.getElementsByClassName('player1Box')[0].children.length * 12).toString() + "px";
    cardElement.style.left = (document.getElementsByClassName('player1Box')[0].children.length * 12).toString() + "px";
    document.getElementsByClassName('player1Box')[0].appendChild(cardElement);
    playerArray.push(card.rank);
    p1Total = checkForAce(playerArray);
    dealTotal = checkForAce(dealerArray);
    bust();
  }
}

const splitHit = () => {
  if (document.getElementsByClassName('dealerWins')[0].style.display === 'block') {
    document.getElementsByClassName('dealerWins')[0].style.display = 'none';
  } else if (document.getElementsByClassName('youWin')[0].style.display === 'block') {
    document.getElementsByClassName('youWin')[0].style.display = 'none';
  } else if (document.getElementsByClassName('nobodyWins')[0].style.display === 'block') {
    document.getElementsByClassName('nobodyWins')[0].style.display = 'none';
  }
  var card = drawCard();
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', card.cardImage);
  cardElement.className = 'image';
  cardElement.style.top = (document.getElementById('dumbBox').children.length * 12).toString() + "px";
  cardElement.style.left = (document.getElementById('dumbBox').children.length * 18).toString() + "px";
  (document.getElementById('dumbBox')).appendChild(cardElement);
  secondPlayerArray.push(card.rank);
  p1Total = checkForAce(secondPlayerArray);
  dealTotal = checkForAce(dealerArray);
  bust();
  splitBust();
  if(p1Total > 21) {
    removeCardBack();
    while (dealerArray.reduce(function(acc, curVal) {return acc + curVal}) < 17) {
      var card = drawCard();
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', card.cardImage);
      cardElement.setAttribute('class', 'image');
      cardElement.style.top = (document.getElementsByClassName('dealerCardBox')[0].children.length * 12).toString() + "px";
      cardElement.style.left = (document.getElementsByClassName('dealerCardBox')[0].children.length * 12).toString() + "px";
      document.getElementsByClassName('dealerCardBox')[0].appendChild(cardElement);
      dealerArray.push(card.rank);
    }
    if ([document.getElementsByClassName('player1Box')[0]].length === 2) {
      p1Total = checkForAce(playerArray);
      dealTotal = checkForAce(dealerArray);
      winner(p1Total, dealTotal);
    }
  }
  document.getElementById('splitDoubleDownButton').disabled = true;
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('hit').disabled = true;
  document.getElementById('stand').disabled = true;
  document.getElementById('deal').disabled = true;
  document.getElementById('double-down').disabled = true;
  document.getElementById('split-button').disabled = true;
  document.getElementById('deal').disabled = true;
  document.getElementById('splitHitButton').disabled = true;
  document.getElementById('splitDoubleDownButton').disabled = true;
  document.getElementById('splitStandButton').disabled = true;
  document.getElementById('deal').addEventListener("click", deal);
  document.getElementById('stand').addEventListener('click', stand);
  document.getElementById('replay').addEventListener('click', replay);
  document.getElementById('double-down').addEventListener('click', doubleDown);
  document.getElementById('split-button').addEventListener('click', split);
  document.getElementById('splitHitButton').addEventListener('click', splitHit);
  document.getElementById('splitDoubleDownButton').addEventListener('click', splitDoubleDown);
  document.getElementById('splitStandButton').addEventListener('click', splitStand);
  document.getElementById('hit').addEventListener('click', hit);
  document.getElementById('bet').addEventListener('click', placeBet);
});