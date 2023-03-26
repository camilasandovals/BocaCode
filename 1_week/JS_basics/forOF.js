//By M. Sandoval

var students = ["Maria", "Sergio", "Rosa"]

function callStudent (student) {
    console.log(`Hi ${student}`)
}

for(let student of students){
    callStudent(student)
}