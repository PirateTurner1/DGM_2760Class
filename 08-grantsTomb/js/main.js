// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "Grant's Tomb";
document.querySelector('header > h2').innerText = "Literal Objects";

//giving the body an h1-h2 header.
document.getElementById('head1').innerHTML = "Grant's Tomb";
document.getElementById('head2').innerHTML = "What I have learned is:";


const question = {
    stem: "who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Austin",
    option3: "Grant",
    option4: "John",
    correct: 3,

    // display the question to the user!
    display: () => {
        document.querySelector('#stem').textContent = question.stem;
        document.querySelector('#answer1').textContent = question.option1;
        document.querySelector('#answer2').textContent = question.option2;
        document.querySelector('#answer3').textContent = question.option3;
        document.querySelector('#answer4').textContent = question.option4;
    },

    check: (userChoice) => {
        //use button click events and button listeners
        if (userChoice === question.correct) {
            document.querySelector('.feedback').textContent = "YOU ARE CORRECT! "
        }else {
            document.querySelector('.feedback').textContent = "You are INCORRECT! There is only one answer!"
        }
    
    }
}

//we know that the answer is 3 from Above.
document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()