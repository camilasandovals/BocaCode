var students = ["Maria", "Sergio", "Rosa"]

function callStudent (student) {
    console.log(`Hi ${student}`)
}

while(students>0){
    callStudent(students.shift())
}