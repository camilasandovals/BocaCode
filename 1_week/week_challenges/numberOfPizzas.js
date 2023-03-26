//By M. Sandoval

//This code helps you to get the number of boxes of pizza that 
//you need for your party

//1. Set variables, so that the function works for any number
const numAdults = 30  //this variable tells you how many adults are in the party
const slicePizza = 8 //each box of pizza has 8 slices
const eatPizza = 3  //each person in the party eats 3 slices


//2. Create the function
function numPizza( numAdults, slicePizza, eatPizza) {
    const totalPizza =(numAdults * eatPizza) / slicePizza
    return Math.ceil(totalPizza)
}

//3. Invoke function and show in terminal
console.log(numPizza(numAdults, slicePizza, eatPizza))