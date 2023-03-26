//By M Sandoval 

// Define an array of strings called "students" with three elements
var students = ["Maria", "Sergio", "Rosa"];

// Define a function called "callStudent" that takes one parameter called "student"
function callStudent (student) {
    // Log a string containing the value of the "student" parameter
    console.log(`Hi ${student}`);
}

// Create a while loop that executes as long as the "students" array has more than 0 elements
while(students > 0) {
    // Call the "shift()" method on the "students" array, which removes and returns the first element of the array
    // Pass the returned element as an argument to the "callStudent" function
    callStudent(students.shift());
}