//By M. Sandoval 

// Here we have an array called countNumber that contains a list of numbers.
const countNumber = [1, 3, 7, 6, 13, 20, 2, 5, 33, 9, 14];

// We create two variables to keep track of the number of odd and even elements in the array.
let odd = 0;
let even = 0;

// This is a function called getOdd that doesn't take any arguments.
const getOdd = () => {
// Here we loop through each element in the countNumber array using a for loop and assign it to the variable "element".
for (let element of countNumber) {
// We check if the current element is odd by checking if it's remainder when divided by 2 is equal to 1.
// If it is, we increase the value of the "odd" variable by 1, otherwise we increase the value of the "even" variable by 1.
(element % 2 == 1) ? odd++ : even++;
}
// We print the value of the "odd" variable to the console.
console.log(odd);
}

// We call the getOdd function to execute the code inside it.
getOdd();