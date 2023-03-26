//By M. Sandoval 

//This code describe of examples of functions

function message(firstName){
    console.log('hello ' + firstName)
}

function getMeow(){
    console.log('meow')
}

function getSumTotal(num1, num2){
    console.log(num1+num2)
}

function makePie(quantity){
    const pie = '🥧'.repeat(quantity)
    console.log(pie)
}

function makeAnimal(animal, quantity){
    return animal.repeat(quantity)
}

//invoke the function 
const result = "There are many animals " + makeAnimal('🐶',3);
console.log(result)



