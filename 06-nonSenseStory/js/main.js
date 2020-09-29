// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "The Nonsense Story";
document.querySelector('header > h2').innerText = "String Manipulation";
//giving the second h1-h2 header
document.getElementById('head1').innerHTML = "The Tail of...";
document.getElementById('head2').innerHTML = "What I have learned is:";
//putting the nouns, verbs, and adjectives in order.
function tellStory() {
    let nounString = document.querySelector('#nounTextArea').value
    
    let adjectiveString = document.querySelector('#adjectiveTextArea').value

    let verbString = document.querySelector('#verbTextArea').value
    
    //telling the story
    let storyArea = "There once was a speedy hare who bragged about how fast he could run."
    "Tired of hearing him boast, Slow and Steady, the tortoise, challenged him to a race."
    "All the animals in the forest gathered to watch."
    "Hare ran down the road for a while and then paused to rest."
    "He looked back at Slow and Steady and cried out,"
    "How do you expect to win this race when you are walking along at your slow, slow pace?"
    "Hare stretched himself out alongside the road and fell asleep, thinking,"
    "There is plenty of time to relax."
    "Slow and Steady walked and walked. He never, ever stopped until he came to the finish line."
    "The animals who were watching cheered so loudly for Tortoise, they woke up Hare."
    "Hare stretched and yawned and began to run again, but it was too late. Tortoise was over the line."
    "After that, Hare always reminded himself,"
     "Don't brag about your lightning pace, for Slow and Steady won the race!"
    
    document.querySelector('#storyP').textContent = storyArea

}

document.querySelector('#storyButton').onclick = tellStory

console.log()