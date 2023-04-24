let pets = [
    {petName: 'ryder', age: 4, type: 'dog'},
    {petName: 'Jack', age: 3, type: 'dog'},
    {petName: 'hammy', age: 14, type: 'hamster'},
    {petName: 'annie', age: 4, type: 'cat'},
    {petName: 'lucas', age: 9, type: 'dog'},
]

function isDog(array) {

    for (element of pets){
       if(element.type == 'dog') {
            element.woof = true
       }else {
        element.woof = false
       }
    }
    return console.log(array)
}

isDog(pets)


