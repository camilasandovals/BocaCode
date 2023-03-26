//By M. Sandoval 

//This code creates a function that takes two numbers and returns the larger number.

// 1. Set variables
const num1 = 0;
const num2 = 7;

// 2. Create the function
const getLargerNumber = function (num1 , num2){

    if (num1 > num2) {
        return num1 + ' is larger than ' + num2 
    } else if (num2 > num1) {
        return num2 + ' is larger than ' + num1
    } else {
        return `num1 and num2 are ${num1}`
    }

}

// 3. Print the larger number to the console
console.log(getLargerNumber(num1 , num2))

