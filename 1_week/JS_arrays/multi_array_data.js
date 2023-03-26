//By M. Sandoval 

//This code shows the estructure of a multi array
const container = [
    "parent first",  //0
    "second parent ",   //1
    [ "child first", "child second", [ "dog" , "cat"]] //2
]

console.log(`1 ${container[0]}`)
console.log(`2 ${container[1]}`)
console.log(`3 ${container[2][0]}`)
console.log(`4 ${container[2][1]}`)
console.log(`5 ${container[2][2][0]}`)
console.log(`6 ${container[2][2][1]}`)