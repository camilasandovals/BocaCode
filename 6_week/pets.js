let pets = [
    {petName: 'ryder', age: 4, type: 'dog'},
    {petName: 'Jack', age: 3, type: 'dog'},
    {petName: 'hammy', age: 14, type: 'hamster'},
    {petName: 'annie', age: 4, type: 'cat'},
    {petName: 'lucas', age: 9, type: 'dog'},
]

function isDog() {

    for (element of pets){
       if(element.type == 'dog') {
            element.woof = true
       }else {
        element.woof = false
       }
    }
    return console.log(pets)
}

isDog(pets)

function isDog2() {
    pets = pets.map(pet => {
        pet.woof = pet.type === 'dog'
        return pet
    })

    return console.log(pets)
}

isDog2(pets)

function isDog3() {
    for(let i = 0; i< pets.length; i++){
        pets[i].woof = pets[i].type === 'dog'
    }
    return console.log(pets)
}