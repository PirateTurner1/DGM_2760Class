// giving the h1-h2 header.
document.querySelector('header > h1').innerText = "Fortune Telling"
document.querySelector('header > h2').innerText = "Switching Statements"

//giving the random numbers.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor( Math.random() *(max - min + 1)) + min;
    // The maximum is inclusive and so is the minimum also inclusive.
}

let month = getRandomIntInclusive(1, 12)
let day = getRandomIntInclusive(1, 30)
let fate = getRandomIntInclusive(1, 10)


function getMonthName(month) {
    let name
    switch (month) {  //this is a switch statement. 
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

// writing out the future fortunes
function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'have success today, Your in good hands!'
            break;
        case 2:
            message = 'be the best you can be, Someone or something important is approaching!'
            break;
        case 3:
            message = 'be grateful and not lazy for today, the details are important!'
            break;
        case 4:
            message = 'know that better and more important things are yet to come your way if you keep trying! '
            break;
        case 5:
            message = 'stay inside, it will be raining on everything you do!'
            break;
        case 6:
            message = 'soon find that your eyes are bigger than your stomach!'
            break;
        case 7:
            message = 'try something new!'
            break;
        case 8:
            message = 'love and be loved!'
            break;
        case 9:
            message = 'not need to have the strength to let go of something, but to rather understand!'
            break;
        case 10:
            message = 'see that the odds are not in your favor!'
            break;
        default:
            message = "An error with your fortune has ocurred. Try again."
        break;                         
    }
    return message
}
// putting the string together and displaying it.
const monthName = getMonthName(month);
const fateMessage = getFortune(fate);
const fateRevealed = `On ${monthName} ${day}, you will ${fateMessage}`;
document.querySelector('#fortune').innerText = fateRevealed;