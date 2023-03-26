//By M. Sandoval 

//This code writes a function that takes a person’s name and greets the person.

// 1. Set variable
const firstName = 'Todd'

// 2. Create function (both of them do the same)
// More efficient way of writing a function:
const greetPerson = (firstName) => `Hi ${firstName}, efficient way`
//Longer option of writing a function:
const greetPerson2 = function (firstName) { return `Hi ${firstName}, long way`}

//3. Print the message to the console
console.log(greetPerson(firstName))
console.log(greetPerson2(firstName))



