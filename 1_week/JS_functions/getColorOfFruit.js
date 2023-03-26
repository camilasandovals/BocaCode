// 1. Set variables
const fruitName = 'pear'

// 2. Create the function named getColorOfFruit
const getColorOfFruit = function (fruitName){

    if (fruitName == 'banana') {
        return fruitName + ' is yellow' 
    } else if (fruitName === 'apple') {
        return fruitName + ' is red' 
    } else {
        return fruitName + ' is neither yellow nor red'
    }

}

// 3. Print the larger number to the console
console.log(getColorOfFruit(fruitName))
