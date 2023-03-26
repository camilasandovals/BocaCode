/*By M. Sandoval
Objective: Define basic array methods*/

//1. Define array
const sampleArray = [
    "yellow flower",
    "pink shoes",
    "black bag"
];
console.log(sampleArray)

//2. Methods
// Pop
const deleteLast = array => {
    console.log("Pop: " + array.pop())
    console.log(array) }

// Push
const addLast = (array, varToAdd) => {
    console.log("Push: " + array.push(varToAdd))
    console.log(array) } 

// Shift
const Shift = (array) => {
    console.log("Shift: " + array.shift())
    console.log(array) } 


// Unshift
const unShift = (array, varToAdd) => {
    console.log("Unshift: " + array.unshift(varToAdd))
    console.log(array) } 


//3. Invoke function
deleteLast(sampleArray)
addLast(sampleArray, "PUSH")
Shift(sampleArray)
unShift(sampleArray, "UNSHIFT")