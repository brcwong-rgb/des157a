(function(){
"use strict";
console.log("reading js");

const dice = document.querySelector("#dice");
const coinArea = document.querySelector("#coin-area");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const message = document.querySelector("#message");

const startBtn = document.querySelector("#startgame");
const rollBtn = document.querySelector("#roll");
const resetBtn = document.querySelector("#reset");


const rollSound = new Audio("audio/rolldice.mp3");
const resetSound = new Audio("audio/reset.mp3");

let scores = [0,0];
let player = 0;  
let gamePlaying = false;

const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

const playerDivs = [document.querySelector("#player1"), document.querySelector("#player2")];

function setActivePlayer(){
    playerDivs.forEach((div, idx) => {
        if(idx === player){
            div.classList.add("active");
        } else {
            div.classList.remove("active");
        }
    });
}


startBtn.addEventListener("click", function(){
    gamePlaying = true;
    player = 0; 
    message.innerHTML = `<p>Player ${player+1} starts!</p>`;
    coinArea.innerHTML = "";
    dice.style.display = "inline";
    setActivePlayer();

    startBtn.style.display = "none";   
    rollBtn.style.display = "inline";   
    resetBtn.style.display = "inline";  
});


rollBtn.addEventListener("click", function(){
    if(!gamePlaying) return;


    rollSound.currentTime = 0;
    rollSound.play();

    let roll = Math.floor(Math.random()*8) + 1; 
    coinArea.innerHTML = ""; 
    dice.style.display = "inline"; 

    if(roll <= 6){
     
        dice.src = diceImages[roll-1];
        scores[player] += roll;
        message.innerHTML = `<p>Player ${player+1} rolled a ${roll}</p>`;
    } else {
        
        dice.style.display = "none";
        let coinImg = document.createElement("img");

        if(roll === 7){
            coinImg.src = "images/beardcoin.png";
            scores[player] += 15;
            message.innerHTML = `<p>Player ${player+1} hit the Beard coin! +15 points</p>`;
        } else if(roll === 8){
            coinImg.src = "images/baldcoin.png";
            scores[player] = 0;
            message.innerHTML = `<p>Player ${player+1} hit the Bald coin! Score reset to 0</p>`;
        }

        coinArea.appendChild(coinImg); 
    }

    updateScores();
    checkWinner();
    switchPlayer(); 
});


function switchPlayer(){
    player = player === 0 ? 1 : 0;
    setActivePlayer();
    if(gamePlaying) message.innerHTML += `<p>Player ${player+1}'s turn</p>`;
}


function updateScores(){
    score1.textContent = scores[0];
    score2.textContent = scores[1];
}


function checkWinner(){
    if(scores[player] >= 30){
        message.innerHTML = `<h2>Player ${player+1} wins!</h2>`;
        gamePlaying = false;
    }
}


resetBtn.addEventListener("click", function(){
   
    resetSound.play();

    setTimeout(function(){
        location.reload();
    }, 300);
});

})();