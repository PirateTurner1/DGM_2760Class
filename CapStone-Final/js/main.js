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
        
    let picturePlacement = document.querySelector('#picture')
    picturePlacement.src = `${pirateChoice.picture}`

    let picture = document.querySelector('#picture')
    

}





/*

example 1:
// the tree list.
const trees = ['Oak', 'Pine', 'Aspen', 'Cedar', 'Bald Cypress', 'Cherry', 'Apple'];
const errorElement = document.querySelector('#error');
const displayResults = document.querySelector('#displayResults');

//displaying the list of trees inside the div.
const listTrees = () => {
    let treeList = '';
    //for {i=0; i < trees.length; i++}{}
    trees.forEach(tree => {
        treeList += `${tree} </br>`;
    })
    displayResults.innerHTML = `${treeList} <br><span> ${trees.length} elements long! </span>`;
}
listTrees()
// the tree list.
const trees = ['Oak', 'Pine', 'Aspen', 'Cedar', 'Bald Cypress', 'Cherry', 'Apple'];
const errorElement = document.querySelector('#error');
const displayResults = document.querySelector('#displayResults');

//displaying the list of trees inside the div.
const listTrees = () => {
    let treeList = '';
    //for {i=0; i < trees.length; i++}{}
    trees.forEach(tree => {
        treeList += `${tree} </br>`;
    })
    displayResults.innerHTML = `${treeList} <br><span> ${trees.length} elements long! </span>`;
}
listTrees()

*/
/*
example 2:

function tellStory() {
    let nounString = document.querySelector('#nouns').value
    nounString.toLowerCase()
    nounArray = nounString.split(/\s+/)
    
    let adjectiveString = document.querySelector('#adjectives').value
    adjectiveString.toLowerCase()
    adjectiveArray = adjectiveString.split(/\s+/)

    let verbString = document.querySelector('#verbs').value
    verbString.toLowerCase()
    verbArray = verbString.split(/\s+/)
    
    //the story with an array. (an array within arrays)
    let storyArea = `Once upon a time, There was a ${adjectiveArray[0]} ${nounArray[0]} who ${adjectiveArray[1]} about how fast he could ${verbArray[0]}. 
    Tired of hearing him boast, the ${adjectiveArray[2]} ${nounArray[1]}, challenged him to a race.
    All the ${nounArray[2]}s in the ${nounArray[3]} gathered to watch.
    The ${nounArray[0]} started off and ${verbArray[0]}ed down the ${nounArray[4]} for a while and then paused to rest.
    The ${nounArray[0]} looked back at the ${adjectiveArray[2]} ${nounArray[1]} and ${verbArray[1]} out,
    'How do you expect to win this race when you are ${verbArray[2]}ing along at your ${adjectiveArray[2]}, ${adjectiveArray[2]} pace?'
    The ${nounArray[0]} stepped himself off alongside the ${nounArray[4]} and fell asleep, thinking,'There is plenty of time to relax.'
    But the ${adjectiveArray[2]} and ${adjectiveArray[3]} ${nounArray[1]}, ${verbArray[2]}ed and ${verbArray[2]}ed. He never even stopped until he crossed the finish line.
    The ${nounArray[2]}s who were watching cheered so loudly for ${nounArray[1]}, that they woke up the ${nounArray[0]}.
    The ${nounArray[0]} got back up and began to ${verbArray[0]} again, but it was too late. The ${nounArray[1]} was over the line.
    After that, the ${nounArray[0]} always ${verbArray[3]} himself,
    'Do not ${adjectiveArray[1]} about your ${adjectiveArray[4]} pace, for ${adjectiveArray[2]} and ${adjectiveArray[3]} wins the race!'`
    
    //putting it all together.
    document.querySelector('#story').textContent = storyArea

}

//button action required. 
document.querySelector('#tellStoryButton').onclick = tellStory
*/
/*
example 3: 
const pizza = {
    crust: 'thin',
    size: 'large',
    topping: 'pepperoni',
    veggieTopping: 'pineapple',

    //putting the pizza buttons together.
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `We are baking your ${pizza.size} Pizza with ${pizza.crust} crust, with ${pizza.topping} and ${pizza.veggieTopping} toppings. It will be ready in 20 minutes!`
        document.querySelector('#feedback').textContent = message
    },

    //putting the list and math together.
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        else if (pizza.size === 'small') flour /= 1
        else if (pizza.size === 'large') flour *= 3
        else if (pizza.crust === 'thin') flour /= 1
        else if (pizza.crust === 'stuffed') flour *= 3
        message = `You will need to have ${flour} cups of flour and 1-lb of ${pizza.topping} and 16-oz of ${pizza.veggieTopping}.`
        document.querySelector('#feedback').textContent = message
    }
}

document.querySelector('#pineapple').addEventListener('click', () => pizza.veggieTopping = 'pineapple')
document.querySelector('#mushrooms').addEventListener('click', () => pizza.veggieTopping = 'mushrooms')
document.querySelector('#peppers').addEventListener('click', () => pizza.veggieTopping = 'peppers')
document.querySelector('#olives').addEventListener('click', () => pizza.veggieTopping = 'olives')

//Action buttons for the users feedback.
document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)


*/
/*
example 4: 
const question = {
    stem: "Who is Buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Austin",
    option3: "Grant",
    option4: "John",
    correct: 3,

    // displaying the question to the user!
    display: () => {
        document.querySelector('#stem').textContent = question.stem;
        document.querySelector('#answer1').textContent = question.option1;
        document.querySelector('#answer2').textContent = question.option2;
        document.querySelector('#answer3').textContent = question.option3;
        document.querySelector('#answer4').textContent = question.option4;
    },
    
    //using button click events and button listeners.
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector('.feedback').textContent = "YOU ARE CORRECT! "
        }else {
            document.querySelector('.feedback').textContent = "You are INCORRECT! There is only one right answer!"
        }
    
    }
}

//we know that the answer is 3 from Above.
document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

//putting everything on to html
question.display()

*/
/*
example 5: 

async function getHotelData() {
    try {
        const response = await fetch('js/hotel.json')
        return await response.json() //this returns the JSON objects

    }catch (error) {
        console.error(error)
    }
}


let hotelData = {}
getHotelData().then(data => hotelData = data)
console.log(hotelData)
//storing in a variable to document
let selectAll = document.querySelectorAll('a')
selectAll.forEach (() => addEventListener('click', hotelInfo))
console.log(selectAll)
//document.querySelector("#marriott").addEventListener('click',hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#pools').textContent = `${hotelChoice.pools}`
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes[0] + hotelChoice.roomTypes[1] + hotelChoice.roomTypes[2] + hotelChoice.roomTypes[3]}`
    
    let picturePlacement = document.querySelector('#picture')
    picturePlacement.src = `${hotelChoice.picture}`

    let picture = document.querySelector('#picture')
}


*/
/*
example: 6

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
/*            
    }

    // appending the child to create the results on the display.
    const awardImage = document.createElement('img') // this Creates an 'img' in html
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')
    ribbon.appendChild(awardImage)
    document.getElementById('buttonId').setAttribute("disabled", "disabled");

    // note to self...only append child if the ribbon element does not have any child nodes yet 
}

*/
