// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "The Nonsense Story";
document.querySelector('header > h2').innerText = "String Manipulation";

//giving the second h1-h2 header
document.getElementById('head1').innerHTML = "The Tail of The Tortoise And The Hair.";
document.getElementById('head2').innerHTML = "What I have learned is:";

//putting the nouns, verbs, and adjectives in order.
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

    let storyArea = `Once upon a time, There was a speedy ${nounArray[1]} who bragged about how fast he could ${verbArray[0]}. 
    Tired of hearing him boast, the ${adjectiveArray[0]} ${nounArray[1]}, challenged him to a race.
    All the ${nounArray[2]}s in the forest gathered to watch.
    ${nounArray[0]} ${verbArray[0]} down the road for a while and then paused to rest.
    He looked back at the ${nounArray[0]} and cried out,
    'How do you expect to win this race when you are ${verbArray[0]}ing along at your ${verbArray[0]}, slow pace?'
    The ${nounArray[0]} stretched himself out alongside the road and fell asleep, thinking,'There is plenty of time to relax.'
    But the ${adjectiveArray[0]} ${nounArray[0]} ${verbArray[0]} and walked. He never, ever ${verbArray[0]}ed until he came to the finish line.
    The ${nounArray[0]}s who were watching cheered so loudly for ${nounArray[0]}, they woke up the sleeping ${nounArray[0]}.
    The ${adjectiveArray[0]} ${nounArray[0]} got back up and began to run again, but it was too late. the ${nounArray[0]} was over the line.
    After that, the ${nounArray} always reminded himself,
    'Do not brag about your lightning pace, for ${verbArray[0]} and ${adjectiveArray[0]} wins the race!'`
    
    document.querySelector('#story').textContent = storyArea

}

document.querySelector('#tellStoryButton').onclick = tellStory

console.log()