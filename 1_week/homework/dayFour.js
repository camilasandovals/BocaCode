//By M. Sandoval

// 1. Create an object called student, including 3 properties with their values
const student = {
    firstName : 'camila',
    lastName : 'sandoval',
    age : 26,
}

// 2. Create a function that removes the first element of the array below and adds “kiwi” to the end of the array.
let favoriteFruits = ['mango', 'lychee', 'strawberry', 'papaya']

const fruitsFunction = favoriteFruits => {
    favoriteFruits.shift()
    favoriteFruits.push('kiwi')
    console.log(favoriteFruits)
}

fruitsFunction(favoriteFruits)

