// giving the h1-h2 header.
document.querySelector('header > h1').innerText = "Fortune Telling"
document.querySelector('header > h2').innerText = "Switching Statements"

//giving the fortune telling.a1
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor( Math.random() *(max - min + 1)) + min;
    // The maximum is inclusive and the minimum is also inclusive.
}

let month = getRandomIntInclusive(1, 12)
let day = getRandomIntInclusive(1, 30)
let fate = getRandomIntInclusive(1, 5)


function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January";
            break;
        case 2:
            name = "February";
            break;
        case 3:
            name = "March";
            break;
        case 4:
            name = "April";
            break;
        case 5:
            name = "May";
            break;
        case 6:
            name = "June";
            break;
        case 7:
            name = "July";
            break;
        case 8:
            name = "August";
            break;
        case 9:
            name = "September";
            break;
        case 10:
            name = "October";
            break;
        case 11:
            name = "November";
            break;
        case 12:
            name = "December";
            break;            
        default:
            name = "In the distant, or near future,"
            break;
    }
    return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message: 'have success today, Your in good hands!'
            break;
        case 2:
            message: 'be the best you can be, Someone or something important is approaching!'
            break;
        case 3:
            message: 'be grateful and not lazy for today, the details are important!'
            break;
        case 4:
            message: 'know that better and more important things are yet to come your way if you keep trying! '
            break;
        case 5:
            message: 'stay inside, it will be raining on everything you do!'
            break;
        default:
            message = "An error with your fortune has occured. Try again."
        break;                    
    }
    return message
}

const monthName = getMonthName(month);
const fateMessage = getFortune(fate);

const fortuneRevealed = `on ${monthName} ${day}, you will ${fate}`;
document.querySelector('main p#fortune'). innerText = fortuneRevealed;