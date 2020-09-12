document.querySelector('header > h1').innerText = "The Guessing Game"
document.querySelector('header > h2').innerText = "Loops"

// pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 15 + 1)
console.log(`The correctNumber is ${correctNumber}`)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0


// if, else statement to give feedback to the user. 
function evalGuess() {
    totalGuesses += 1 
    gamerGuess = document.querySelector('#guess').value
    //console.log(totalGuesses, gamerGuess)

    const feedback = document.querySelector('#feedback')
    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'You are correct! \n You win!'
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Your Guess was Too High,\n try again'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Your Guess was Too Low,\n try again'
    } else {
        feedback.innerText = 'Please choose a number\n between 1 and 15 \n and try again!'
        totalGuesses -= 1
    }
        document.querySelector('#attempts').innerText = totalGuesses    
}

//giving the function to the show results to the user.
function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3: 
            imagePath = 'images/blue-ribbon.jpg'
            break;
        case 4: 
        case 5:
        case 6: 
            imagePath = 'images/red-ribbon.jpg'
        break;
        default: 
            imagePath = 'images/yellow-ribbon.jpg'
        
        /* //i looked at the instructions... though this idea was good and does work. 
        case 7:
        case 8:
        case 9:    
            imagePath = 'images/yellow-ribbon.jpg'
        break;
        default: 
            imagePath = "images/no-ribbonArt.png"*/
    }

    // appending the child to create the results on the display.
    const awardImage = document.createElement('img') // this Creates an 'img' in html
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')
    ribbon.appendChild(awardImage)
    document.getElementById('buttonId').setAttribute("disabled", "disabled");

    // note to self...only append child if the ribbon element does not have any child nodes yet 
}
