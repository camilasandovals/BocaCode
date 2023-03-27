//By M. Sandoval

//Define variable
let grades = [81, 42, 69, 91, 86, 93]

//Find lowest grade
lowestGrade = Math.min(...grades)
console.log("Lowest grade is: " + lowestGrade)

//Add a new number in a list without using shift
grades = [94, ...grades]
console.log("New array, 94 was added: " + grades)