// giving the top h1-h2 header.
document.querySelector('header > h1').innerText = "Pizza Emporium"
document.querySelector('header > h2').innerText = "Literal Objects"

//giving the body an h1-h2 header.
document.getElementById('head1').innerHTML = "Pizza Order Form";
document.getElementById('head2').innerHTML = "What I have learned is:";

// setting the doe, i mean the crust
const pizza = {
    crust: 'thin'
    size: 'small'
    toppings: 'pepperoni'

    buildPizza: function () {
        console.log ('building the pizza has been called for you!');
        message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with a ${pizza.topping} and cheese just for you!`;
        document.querySelector('#feedback').textContent = message;
    },
    shoppingList: () => {
        let flour = 1;
        if (pizza.crust === 'thick') flour *= 2;
        else if (pizza.crust === 'large') flour *= 2;
        else if (pizza.size === 'medium') flour = 1
        
        else (pizza.size === 'small') flour /= 1
        //i will do the same for for large properties
        message = `you will need to purchase ${flour} cups of flour and 1 lbs of ${pizza.toppings}. `;
        document.querySelector('#feedback').textContent = message
    }
}// do this same thing for toppings and all others that have a pizza thing to it. 




let thinButton = document.querySelector('#thin')
thinButton.addEventListener('click', function(){
    return pizza.crust = 'thin';
})

let buildButton = document.querySelector('#build')
buildButton.addEventListener('click, function(){
    return pizza.buildPizza()
})

//what we would like to see as a code...
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('thick').addEventListener('click', ()=> pizza.crust = 'thick')    
// do the same with toppings and size
document.querySelector('#build').addEventListener('click', pizza.buildPizza)
//hook up the shoppingList method, call it here. 
