// By M. Sandoval

// Create an object called "student" with 3 properties: "firstName", "lastName", and "age" and their respective values.
const student = {
firstName : 'camila', // The first name of the student is "Camila".
lastName : 'sandoval', // The last name of the student is "Sandoval".
age : 26, // The age of the student is 26.
}

// Create a function called "fruitsFunction" that takes an array of fruits as a parameter.
let favoriteFruits = ['mango', 'lychee', 'strawberry', 'papaya']

const fruitsFunction = favoriteFruits => {
favoriteFruits.shift() // Removes the first element of the array.
favoriteFruits.push('kiwi') // Adds "kiwi" to the end of the array.
console.log(favoriteFruits) // Prints the updated array of favorite fruits.
}

// Call the "fruitsFunction" with the "favoriteFruits" array as the parameter.
fruitsFunction(favoriteFruits)