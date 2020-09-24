// giving the h1-h2 header.
document.querySelector('header > h1').innerText = "The Arborist";
document.querySelector('header > h2').innerText = "Events and Arrays";

// the tree list.
const trees = ['Oak', 'Pine', 'Aspen', 'Cedar', 'Bald Cypress', 'Cherry', 'Apple'];
const errorElement = document.querySelector('#error');
const displayResults = document.querySelector('#displayResults');


//displayResults.textContent = 'testing here right now!'
//errorElement.textContent = 'testing here right now!'

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
    trees.push('redwood');
    listTrees();
}

//adding a pear tree to the start.
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('pear');  // (pop) popping out the start of the list and replacing it. 
    listTrees();
}

//removing trees from the array.
document.querySelector('#remove_tree1').onclick = () => {
    if(trees.length > 0) {
        trees.shift();
        listTrees();
    }else {
        errorElement.innerHTML = "Error! No more trees to be removed!";
    }
}

document.querySelector('#remove_tree2').onclick = () => {
    if(trees.length > 1) {
        trees.splice(1,1);//hey, i just realized i learned this method from a python class.
        listTrees();
    }else {
        errorElement.innerHTML = "Error! No more other trees to be removed!";
    }
}

document.querySelector('#remove_lastTree').onclick = () => {
    if(trees.length > 0) {
        trees.pop();
        listTrees();
    }else {
        errorElement.innerHTML = "Error! No more other trees to be removed!";
    }
}



// Sort the Array from A to Z
document.querySelector('#sortTrees').onclick = () => {
    if (trees.length > 0) {
        trees.sort()
        listTrees()
    } else {
        errorElement.innerHTML = "Error! No trees to sort!"
    }
}

// Make all the trees lower case
document.querySelector('#lowerTrees').onclick = () => {
        if (trees.length > 0) {
            var sorted = [];
            for (var i = 0; i < trees.length; i++) { //also, learned this method from python class
                sorted.push(trees[i].toLowerCase());//this is what worked best!
                trees.splice(i, 1, sorted[i])
            }
            sorted.sort();
            listTrees()    
}else {
    errorElement.innerHTML = "Error! can not lower Case!"
}
}

//Get the name of tree number 3
document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        let thirdTree = trees[2];
        errorElement.textContent = thirdTree;
        console.log(trees.length);
        listTrees();
    } else {
        errorElement.textContent = "Error! there is no third tree. Please, Add some more trees!"
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
        errorElement.textContent = 'Error! there is no fourth tree. Please, Add some more trees!';
    }

}