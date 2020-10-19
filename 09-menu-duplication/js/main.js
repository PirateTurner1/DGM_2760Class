function duplicateMenu() {
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    //create the new list of items from the button of the page.
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        //'copy' the textContent from the uper menu to a new menu
        // then appendChild to make then all appear in the DOM 

    })
}

duplicateMenu()