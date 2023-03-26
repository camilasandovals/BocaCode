//By M. Sandoval 

//This code writes a function that takes a number and returns true if the number is even or false if it is odd.

// 1. Set variable
const num = 3

// 2. Create function
// Option 1 = This is the first and longer way of creating a function
function checkNumber1(num) {
    module = num % 2 //num module 2, if the remainder is 0, is even, otherwise is odd
    if (module === 0){
        return num + ' is an even number'        
    } else {
        return num + ' is an odd number'        
    }
}

// Option 2 = This is the second way of creating a function
const checkNumber2 = function (num) {
    module = num % 2
    if (module === 0){
        return num + ' is an even number'        
    } else {
        return num + ' is an odd number'        
    }
}


// Option 3 
const checkNumber3 = num => {
    if (module === 0){
        return num + ' is an even number'        
    } else {
        return num + ' is an odd number'        
    }    
}

// Option 4 = This is the forth and shortest way of creating a function
const checkNumber4 = num => (num % 2 === 0)? `${num} is an even number` : `${num} is an odd number`  

//3. Show result in terminal
console.log(checkNumber1(num)) //Option 1
console.log(checkNumber2(num)) //Option 2
console.log(checkNumber3(num)) //Option 3
console.log(checkNumber4(num)) //Option 4