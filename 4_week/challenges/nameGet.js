
const person = {
    firstName : 'Camila',
    lastName: 'Sandoval',
    phone: 7645

}

function getFullName ( object) {
    return console.log(`The name is ${object.firstName} ${object.lastName}`)
}

getFullName (person)