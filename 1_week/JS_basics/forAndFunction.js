var students = ["Maria", "Sergio", "Rosa"]

function callStudent (student) {
    console.log(`Hi ${student}`)
}

for(let i=0; i<students.length; i++){
    callStudent(students[i])
}