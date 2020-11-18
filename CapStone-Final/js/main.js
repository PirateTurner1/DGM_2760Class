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

//const firstRandNum = Math.floor(Math.random() *6) + 1;
//const firstDiceImage =  'images/d' + firstRandNum + '.png';
//const secondRandNum = Math.floor(Math.random() *6) + 1;
//const secondDiceImage =  'images/e' + secondRandNum + '.png';


//if (firstRandNum > secondRandNum) {
    //document.querySelector('#feedback').innerHTML = 'the winner is: player 1'
    //giveAward()
//} else if (secondRandNum > firstRandNum) {
    //document.querySelector('#feedback').innerHTML = 'the winner is: the pirate!';
//}else {
   // document.querySelector('#feedback').innerHTML = 'its a draw, try again!';
//}


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


    who_won(rand1,rand2,rand3,rand4);
 

    function who_won(rand1, rand2, rand3, rand4) {
        let player_points = rand1 + rand2 + 2;
        let pirate_points = rand3 + rand4 + 2;
        let giffy = winner(player_points, pirate_points);
        document.getElementById("message").src = "images/" + giffy;
        document.getElementById("message").alt = giffy;
    }

    function winner(player, pirate) {
        if (player > pirate) {
            return "jarDirt.gif";
        }else if (pirate == player) {
            return "JackSparrow.gif"
        }else {
            return "DavyJones.gif"
        }
    }

   // const feedback = document.querySelector('#feedback')
    //if (gamerGuess == correctNumber) {
        //console.log(`gamerGuess is equal to correctNumber`)
       // feedback.innerText = 'You are correct! \n You win!'
       // giveAward()

}
//document.querySelectorAll('img')[1].setAttribute('src', firstDiceImage)
//document.querySelectorAll ('img')[2].setAttribute('src', firstDiceImage)
//document.querySelectorAll('img')[3].setAttribute('src', secondDiceImage)
//document.querySelectorAll ('img')[4].setAttribute('src', secondDiceImage)


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


