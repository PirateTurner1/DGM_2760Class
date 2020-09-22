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


// Sort the Array from A to Z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

// Make all the trees lower case
document.querySelector('#lowerTrees').onclick = () => {
    trees = trees.join(" <br>").toLowerCase()
    trees = trees.split(" ,")
    console.log(trees.length)
    listTrees()
}

//Get the name of tree number 3
document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        let thirdTree = trees[2]
        errorElement.textContent = thirdTree
        listTrees()
    } else {
        errorElement.innerHTML = "You need a third tree in the list to get the name. <br> Add some more trees!"
    }
   
}

// Get the name of tree number 4
document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
        let fourthTree = trees[3]
        errorElement.textContent = fourthTree
        console.log(trees.length)
        listTrees()
    } else {
        errorElement.innerHTML = 'You need a fourth tree in the list to get the name. <br> Add some more trees!';
    }

}