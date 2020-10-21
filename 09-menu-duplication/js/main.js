// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "Menu Duplication";
document.querySelector('header > h2').innerText = "Media Query's";

function duplicateMenu() {
    //get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')
    // create the new list items for the bottom of the page
    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        // 'copy' the textContent from upper menu to new menu 
        let bottomNav = document.querySelector('#smallNavArea')
        newLink.textContent = menuItem.textContent
        console.log(menuItem.textContent)
        // append children to make them appear in the DOM
        newLI.appendChild(newLink)
        newList.appendChild(newLI)
        bottomNav.appendChild(newList)

    })
}

duplicateMenu()