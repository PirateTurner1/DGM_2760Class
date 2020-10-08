// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "Pizza Emporium";
document.querySelector('header > h2').innerText = "Literal Objects";

//giving the body an h1-h2 header.
document.getElementById('head1').innerHTML = "The Pizza  Order Form";
document.getElementById('head2').innerHTML = "What I have learned is:";

// setting the doe, i mean the crust.
const pizza = {
    crust: 'thin',
    size: 'large',
    topping: 'pepperoni',
    veggieTopping: 'pineapple',

    //putting the pizza buttons together.
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `We are baking your ${pizza.size} Pizza with ${pizza.crust} crust, with ${pizza.topping} and ${pizza.veggieTopping} toppings. It will be ready in 20 minutes!`
        document.querySelector('#feedback').textContent = message
    },

    //putting the list and math together.
    shoppingList: () => {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        else if (pizza.size === 'small') flour /= 1
        else if (pizza.size === 'large') flour *= 3
        else if (pizza.crust === 'thin') flour /= 1
        else if (pizza.crust === 'stuffed') flour *= 3
        message = `You will need to have ${flour} cups of flour and 1-lb of ${pizza.topping} and 16-oz of ${pizza.veggieTopping}.`
        document.querySelector('#feedback').textContent = message
    }
}

/* 
//noted by instructions but does not work well.  
let thinButton = document.querySelector('#thin')
thinButton.addEventListener('click', function(){
    return pizza.crust = 'thin' 
})

let buildButton = document.querySelector('#build')
buildButton.addEventListener('click',function() {
    return pizza.buildPizza()
})
*/

//Radio buttons from the user.
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')
document.querySelector('#stuffed').addEventListener('click', ()=> pizza.crust = 'stuffed')

document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage') 
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')
document.querySelector('#ham').addEventListener('click', () => pizza.topping = 'ham')
document.querySelector('#chicken').addEventListener('click', () => pizza.topping = 'chicken')

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#medium').addEventListener('click', ()=> pizza.size = 'medium')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#pineapple').addEventListener('click', () => pizza.veggieTopping = 'pineapple')
document.querySelector('#mushrooms').addEventListener('click', () => pizza.veggieTopping = 'mushrooms')
document.querySelector('#peppers').addEventListener('click', () => pizza.veggieTopping = 'peppers')
document.querySelector('#olives').addEventListener('click', () => pizza.veggieTopping = 'olives')

//Action buttons for the users feedback.
document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)