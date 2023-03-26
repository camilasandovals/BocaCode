//By M. Sandoval

// This line creates an array of strings called "students" and initializes it with three names.
var students = ["Maria", "Sergio", "Rosa"];

// This line creates a function called "callStudent" that takes one argument, "student".
function callStudent(student) {
// This line logs a string to the console that greets the student whose name is passed in as an argument.
console.log(`Hi ${student}`);
}

// This line starts a loop that will run as many times as there are elements in the "students" array.
for(let i=0; i<students.length; i++) {
// This line calls the "callStudent" function and passes in the i-th element of the "students" array as an argument.
callStudent(students[i]);
}

/*Overall, this code creates an array of three student names, defines a function called "callStudent" that greets a student by name, and then uses a loop to call that function once for each student in the array. The output of this code will be:

Hi Maria
Hi Sergio
Hi Rosa

This code could be used to greet a class of students by name, for example.*/