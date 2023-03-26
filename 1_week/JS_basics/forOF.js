//By M. Sandoval

// Initiate string variable with it's value
var students = ["Maria", "Sergio", "Rosa"]

// Create function
function callStudent (student) {
    console.log(`Hi ${student}`)
}

//Invoke function
for(let student of students){
    callStudent(student)
}