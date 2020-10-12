// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "Grant's Tomb";
document.querySelector('header > h2').innerText = "Literal Objects";

//giving the body an h1-h2 header.
document.getElementById('head1').innerHTML = "Grant's Tomb";
document.getElementById('head2').innerHTML = "What I have learned is:";


const question = {
    stem: "who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Austin",
    option4: "John",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        // display the question to the user of options here!
        //set the ui or div element here. 

    },
    check: (userChoice) => {
        //use button click events and button listeners
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "YOU ARE CORRECT!"
        } //else...
    
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
  //we know that the answer is 2 from Above.
document.querySelector('#answer2').addEventListener('click', () => question.check(2))

question.display