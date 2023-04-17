newPerson = {}

function formHandler( firstName, lastName, email, phone){
    newPerson.firstName = firstName
    newPerson.lastName = lastName
    newPerson.email = email
    newPerson.phone = phone

    return console.log(newPerson)
}

formHandler("Maria", "Sandoval", "maria@gmail.com", "76346")


function formHandler2 (firstName, lastName, email, phone ) {
    const newPerson2 = {firstName, lastName, email, phone}
    return newPerson2
}

formHandler2("Maria", "Sandoval", "maria@gmail.com", "76346")