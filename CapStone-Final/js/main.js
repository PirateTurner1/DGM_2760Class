// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "CapStone!";
document.querySelector('header > h2').innerText = "Final Project!";

//giving the body an h1-h2 header.
document.getElementById('head1').innerHTML = "Pirates Game!";
document.getElementById('head2').innerHTML = "This page demonstrates:";


// i could use a few buttons to conjure up a short story.  
// i could use dice or something to role out a game with lots of random feed back
// i could make a hotel of different characters 
// i could make a game to create the weather pattern.
//buttons to a worded sentence of query's.

async function getPirateData() {
    try {
        const response = await fetch('js/pirate.json')
        return await response.json() //this returns the JSON objects

    }catch (error) {
        console.error(error)
    }
}

let pirateData = {}
getPirateData().then(data => pirateData = data)
console.log(pirateData)
//storing in a variable to document
let selectAll = document.querySelectorAll('a')
selectAll.forEach (() => addEventListener('click', pirateInfo))
console.log(selectAll)

function pirateInfo(event) {
    let pirateChoice = pirateData.pirates.find(pirate => {
        return event.target.id === pirate.name.toLowerCase()
    })
    console.log(pirateChoice)

    document.querySelector('#pirateName').textContent = `${pirateChoice.name} the Pirate`
    document.querySelector('#shipName').textContent = `${pirateChoice.shipName}`
    document.querySelector('#crewNumber').textContent = `${pirateChoice.crewNumber}`
    document.querySelector('#killed').textContent = `${pirateChoice.killed}`
    document.querySelector('#cursed').textContent = `${pirateChoice.cursed[0] + pirateChoice.cursed[1]}`
    document.querySelector('#playing').textContent = `${pirateChoice.playing}`
        
    let picturePlacement = document.querySelector('#picture')
    picturePlacement.src = `${pirateChoice.picture}`
    let picture = document.querySelector('#picture')


}


let correctNumber = Math.floor(Math.random() * 6 + 1)
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
