// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "The Nonsense Story";
document.querySelector('header > h2').innerText = "String Manipulation";

//giving the body an h1-h2 header.
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

// the nouns that were taken out were: Hare, turtle, animal, forest, road.
// the adjectives that were taken out were: speedy, brag /or bragged, slow, steady, lightning.
// the verbs that were taken out were: run /or ran, cried, walking /or walked, reminded.


