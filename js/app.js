"use strict";
const inputEl = document.getElementById('guess-input')
const result = document.getElementById('guess-message')
const yourGuess = document.getElementById('current-guess')
const computerGeuss = document.getElementById('computer-guess')
const guessHistory = document.getElementById('guess-history')
const submitBtn = document.getElementById('submit-btn')
const restartBtn = document.getElementById('restart-btn')

let randomNumber;
function guessNumber(){
    yourGuess.innerText = inputEl.value
    inputEl.value = ""
}

function computerGuessNumber(){
    randomNumber = Math.floor(Math.random() * 10)
    computerGeuss.innerText = randomNumber
}

function gameResult(){
   if(inputEl.value === randomNumber){
    result.innerText = "Won!"
   }else{
    result.innerText = "lose!"
   }
}

function render (){
    guessNumber()
    computerGuessNumber()
    gameResult()
}

function restartGame(){

}

submitBtn.addEventListener('click', function(){
    render()
})

