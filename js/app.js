"use strict";
const inputEl = document.getElementById('guess-input')
const result = document.getElementById('guess-message')
const yourGuess = document.getElementById('current-guess')
const computerGeuss = document.getElementById('computer-guess')
const guessHistory = document.getElementById('guess-history')
const submitBtn = document.getElementById('submit-btn')
const restartBtn = document.getElementById('restart-btn')

let randomNumber;
let history = [];
let attempts = 0
const maxTries = 3

function initializeGame(){
    attempts = 0
    history = []
    submitBtn.disabled = false
    guessNumber.innerText = ""
    computerGeuss.innerText = ""
    result.innerText = ""
    guessHistory.innerHTML = ""
}

function guessNumber(){
    const userInput = Number(inputEl.value)
    yourGuess.innerText = userInput
    history.push(userInput)
    inputEl.value = ""
    
}

function computerGuessNumber(){
    randomNumber = Math.floor(Math.random() * 10)
    computerGeuss.innerText = randomNumber
}

function gameResult(){
    const userInput = Number(yourGuess.innerText)
   if(userInput === randomNumber){
    result.innerText = "Won!"
    submitBtn.disabled = true
   }else if(userInput < randomNumber){
    result.innerText = "Your guess is too low"
   }else if(userInput > randomNumber){
    result.innerText = "Your guess is too high"
   }else if(userInput !== randomNumber){
    result.innerText = "You lose!"
   }
}

function render (){
    if(attempts < maxTries){
        attempts++
        guessNumber()
        computerGuessNumber()
        gameResult()
    }
     if(attempts >= maxTries){
        submitBtn.disabled = true
        result.innerText = "Game over!"
    }
 
}

function restartGame(){
    initializeGame()
}
function yourGuessHistory(){
    guessHistory.innerHTML = ""; // Clear history display
    history.forEach((guess, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `Guess ${index + 1}: ${guess}`;
        guessHistory.appendChild(listItem);
    });
}

submitBtn.addEventListener('click', function(){
    render()
})

restartBtn.addEventListener('click', function(){
   restartGame()
})

initializeGame() 