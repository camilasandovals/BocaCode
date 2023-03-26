//By M. Sandoval

// Define an array of integers called "sumInt"
const sumInt = [6,1,643,234,123,4,7,9];

// Initialize a variable called "sum" to 0
let sum = 0;

// Define a function called "getSum" that calculates the sum of the elements in "sumInt" and logs the result
const getSum = () => {
    // Use a "for...of" loop to iterate over the elements in "sumInt"
    for(let element of sumInt){
        // Add the value of the current element to "sum"
        sum += element;
    }
    // Log the value of "sum"
    console.log(sum);
}

// Call the "getSum" function
getSum();
