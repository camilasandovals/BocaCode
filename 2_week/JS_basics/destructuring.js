//By M. Sandoval

//OBJECTS
//Define the object
let car = {
    make: 'Audi',
    model: 'A3',
    year: 2018,
    color: 'gray'
}

//Destructure the object
const { make, model, year, color } = car 

//Now you can print to console the property as a variable
console.log(make)


//ARRAYS
//Define the array
const colors = ['pink', 'orange', 'blue', 'red']

//Destructure the array
const [primary, secondary, third] = colors

//Print to console
console.log(third)
