document.querySelector('header > h1').innerText = "The Guessing Game"
document.querySelector('header > h2').innerText = "Loops"

// pick a random number between 0 and 16

const correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1;

console.log( 'the correct number is `${correctNumber}`')

function evalGuess(){
    totalGuesses += 1 
    gamerGuess = document.querySelector('#guessing').Value
    console.log(totalGuesses, gamerGuesses)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
       feedback.innerText = 'You WIN!'
       giveAward()
    }
    else if (gamerGuess > correctNumber && gamerGuess < 16){
        feedback.innerText = 'Too High, try again!'
    }
    else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too Low, try again!'
    }
    else {
        feedback.innerText = 'Please choose a number between 1-15! try again'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerGuesses

}

function giveAward() {
    console.log('congratulations!')
    switch (totalGuesses){
        case 1:
        case 2:
        case 3:
            console.log('blue ribbons for you!')
            imagePath = 'images/blueribbon.jpg'
        break;
        case 4:
        case 5:
            console.log('red ribbons for you!')
            imagePath = 'images/red-ribbon.jpg'
        break;
        case 6:
        case 7:
            console.log('yellow ribbons for you!')
            imagePath = 'images/yellow-ribbon.jpeg'
        break;
        case 8:
        case 9:
        case 10:
            console.log('sorry no ribbon for you!')
        //do the rest here!!!
    }

    const awardImage = document.createElement('img') // this creates an image element <img>
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')
    ribbon.appendChild(awardImage)
// only append the child if the ribbon element does not have any child nodes yet!
// look up child nodes on mdn

}