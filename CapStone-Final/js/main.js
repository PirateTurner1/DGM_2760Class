// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "CapStone!";
document.querySelector('header > h2').innerText = "Final Project!";

//giving the body an h1-h2 header.
document.getElementById('head1').innerHTML = "Pirates Game!";
document.getElementById('head2').innerHTML = "This page demonstrates:";

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
//putting the API and the user functions together
function pirateInfo(event) {
    let pirateChoice = pirateData.pirates.find(pirate => {
        return event.target.id === pirate.name.toLowerCase()
    })
    console.log(pirateChoice)

    //putting it on display.
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

/*
Note:  there is a message that states that "${pirateChoice.name}" shows as undefined.
but only as the game in the next part is played from here down.
However, everything else works smoothly.  
*/

//giving the dice info.
const sides = ["d1.png", "d2.png", "d3.png", "d4.png", "d5.png", "d6.png"];
const side_alt = ["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];

//generating random dice role
function throwDice() {
    //create a random integer between 1 and 6
    var rand1 = Math.floor(Math.random()*6) + 1;
    var rand2 = Math.floor(Math.random()*6) + 1;
    var rand3 = Math.floor(Math.random()*6) + 1;
    var rand4 = Math.floor(Math.random()*6) + 1;

    // Set Image src
    document.getElementById("playerDice1").src = "images/d" + rand1 + ".png";
    document.getElementById("playerDice2").src = "images/d" + rand2 + ".png";
    document.getElementById("pirateDice1").src = "images/e" + rand3 + ".png";
    document.getElementById("pirateDice2").src = "images/e" + rand4 + ".png";

    // Set Image alt
    document.getElementById("playerDice1").alt = side_alt[rand1 - 1];
    document.getElementById("playerDice2").alt = side_alt[rand2 - 1];
    document.getElementById("pirateDice1").alt = side_alt[rand3 - 1];
    document.getElementById("pirateDice2").alt = side_alt[rand4 - 1];


    who_won(rand1,rand2,rand3,rand4,);  
 

    function who_won(rand1, rand2, rand3, rand4) {
        let player_points = rand1 + rand2 + 2;
        let pirate_points = rand3 + rand4 + 2;
        let giffy = winner(player_points, pirate_points);
        document.getElementById("message").src = "images/" + giffy;
        document.getElementById("message").alt = giffy;
    }

    function winner(player, pirate) {
        if (player > pirate) {
            document.querySelector('#feedback').innerHTML = `${userMessage}`;// you win!
            return "jarDirt.gif";
        }else if (pirate == player) {
            document.querySelector('#feedback').innerHTML = `${gameMessage}`; //its a tie!
            return "JackSparrow.gif"
        }else {
            document.querySelector('#feedback').innerHTML = `${fateMessage}`; //${pirateChoice.name} this keeps showing undefined...
            return "DavyJones.gif"
        }
    }

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor( Math.random() *(max - min + 1)) + min;
    // The maximum is inclusive and so is the minimum also inclusive.
}

let fate = getRandomIntInclusive(1, 5)
let user = getRandomIntInclusive(1, 5)
let game = getRandomIntInclusive(1, 5)


//giving the function to the show results to the user wins.
function getUserMessage(user) {
    let message
    switch (user) {  //this is a switch statement. 
        case 1:
            message = "SO, you think you've Won, do you?"
            break;
        case 2:
            message = "You cheated! You PIRATE!"
            break;
        case 3:
            message = "This is either madness, or brilliance!"
            break;
        case 4:
            message = "I’ve got a jar of dirt! Enough winning!"
            break;
        case 5:
            message = "I will make you pay for what you did to me!"
            break;
    }
    return message

}
const userMessage = getUserMessage(user);

//giving the function to the show results to the pirates win.
function getFortune(fate) {
    let message
    switch (fate) { 
        case 1:
            message = "You're a LIAR and you will spend eternity on my ship!"
            break;
        case 2:
            message = "You are without a doubt the worst pirate I’ve ever heard of."
            break;
        case 3:
            message = "You best start believing in ghost stories, you're in one!"
            break;
        case 4:
            message = "You're off the edge of the map, mate. Here there be monsters. "
            break;
        case 5:
            message = "What are you?...  DEATH! You Loose!"
            break;
    }
    return message

}
const fateMessage = getFortune(fate);

//giving the function to the show results to the pirates win.
function getGameMessage(game) {
    let message
    switch (fate) { 
        case 1:
            message = "Did everyone see that? Because I will not be doing it again."
            break;
        case 2:
            message = "If you were waiting for the opportune moment, that was it."
            break;
        case 3:
            message = "Take what ye can! Give nothin' back!"
            break;
        case 4:
            message = "Capt'n I wish to report a mutiny, I can name fingers and point names!"
            break;
        case 5:
            message = "Nobody move! I dropped me brain!!"
            break;
    }
    return message

}
const gameMessage = getGameMessage(game);
