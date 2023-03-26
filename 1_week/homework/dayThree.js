//By M. Sandoval

//1. Write a function that multiplies two numbers. Invoke the function.
const getMultiplier = (num1 , num2) => console.log(num1 * num2) // The 'getMultiplier' function is declared with two parameters 'num1' and 'num2' which are multiplied using the '*' operator, and the result is logged to the console. The function is then invoked with arguments 2 and 2.
getMultiplier(2,2)
//2. Write a function named assignGrade, that takes one argument, a number score (example: 90).
//3. Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
const assignGrade = score => { // The 'assignGrade' function is declared with a parameter 'score'.
if(score>=90){ // If the score is greater than or equal to 90, 'A' is logged to the console.
console.log('A')
}else if(score>=70 && score<90){ // If the score is between 70 and 89 (inclusive), 'B' is logged to the console.
console.log('B')
}else if(score>=50 && score<70){ // If the score is between 50 and 69 (inclusive), 'C' is logged to the console.
console.log('C')
}else if(score>30 && score<50){ // If the score is between 31 and 49 (inclusive), 'D' is logged to the console.
console.log('D')
}else{ // If the score is less than or equal to 30, 'F' is logged to the console.
console.log('F')
}
}
//4. Invoke that function for a few different scores and log the result to make sure it works for each case.
assignGrade(90) // The 'assignGrade' function is invoked with argument 90.
assignGrade(70) // The 'assignGrade' function is invoked with argument 70.
assignGrade(50) // The 'assignGrade' function is invoked with argument 50.
assignGrade(40) // The 'assignGrade' function is invoked with argument 40.
assignGrade(10) // The 'assignGrade' function is invoked with argument 10.

//5. Write an array containing items of the same data type.
myArray = [1, 2, 3, 4, 5, 6] // An array 'myArray' is declared and initialized with 6 elements of type number.

//6. Write a function to get the first element in an array. Invoke the function.
const getFirst = myArray => console.log(myArray[0]) // The 'getFirst' function is declared with a parameter 'myArray' and the first element of the array is logged to the console using the index notation. The function is then invoked with the 'myArray' array as its argument.

getFirst(myArray) // The 'getFirst' function is invoked with the 'myArray' array.