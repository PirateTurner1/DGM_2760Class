// pick a random number between 0 and 16

const correct number = Math.floor(Math.random() * 15)

console.log( the correct number is `${correctNumber}`)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0

function evalGuess(){
    totalGuesses += 1 
    gamerGuess = document.querySelector('#guessing').nodeValue

    const feedback = document.querySelector('#feedback')
}