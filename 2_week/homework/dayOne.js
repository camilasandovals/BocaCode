//By M. Sandoval 

//use destructuring to access the color property
let myCar = {brand: "Toyota", make: "Prius", color: "red"}

const {brand, make, color} = myCar

console.log(brand)

//Write a function that converts hours into seconds. Return the result. Invoke the function.

const hours = 3

function  getSeconds() {
    return hours*3600
}

console.log(getSeconds())
