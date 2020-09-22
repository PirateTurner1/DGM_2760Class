// giving the h1-h2 header.
document.querySelector('header > h1').innerText = "The Arborist"
document.querySelector('header > h2').innerText = "Events and Arrays"

// the tree list.
const trees = ['Oak', 'Pine', 'Aspen', 'Cedar', 'Bald Cypress', 'Cherry']
const errorElement = Document.querySelector('error')
const displayResults = document.querySelector('#displayResults')

//displayResults.textContent = 'testing here right now!'
//errorElement.textContent = 'testing here right now!'

//displaying the list of trees inside the div.
const listTrees = () => {
    let treeList = '';
    //for {i=0; i < trees.length; i++}{}
    trees.forEach(tree =>{
        treeList += `${tree} </br>`    
    })
    displayResults.textContent = `${treeList} <span> ${trees.length} elements long! </span>`
}

listTress()

/*
//adding a redwood tree to the end in the old way of scripting it.
let addTreeStart = function() {  //(var) is the old way from let, or const.
    trees.push("Redwood");
    listTrees();
};
const redwood = document.getElementById('add_redwood');
redwood.onclick = addTreeStart;
*/

//the more concise and better way of scripting to add a redwood tree.
document.querySelector('#add_redwood').onclick = () => {
    tree.push('redwood')
    listTrees()
}

//adding a pear tree to the start.
document.querySelector('#add_pear').onclick = () => {
    tree.unshift('pear')  // (pop) popping out the start of the list and replacing it. 
    listTrees()
}

//removing trees from the array.
document.querySelector('#remove_tree1').onclick = () => {
    if(trees.length != 0) {
        trees.shift();
        listTrees();
    }else {
        errorElement. textContent = "dude, I can not remove the first tree! cuz, there are No TREES!"
    }
}
