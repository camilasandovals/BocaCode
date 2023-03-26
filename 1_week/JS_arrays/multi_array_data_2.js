//By M. Sandoval 

//This code shows the estructure of a multi array
const container = [
    ["parent first",  //0
    "second parent ",   //1
    [ "child first", "child second", [ "dog" , "cat"]]], //2

    ["parent first2",  //0
    "second parent2",   //1
    [ "child first2", "child second2", [ "dog2" , "cat2"]]],//2
]

console.log("DISPLAYING FIRST")
console.log(`   1 ${container[0][0]}`)
console.log(`   2 ${container[0][1]}`)
console.log(`   3 ${container[0][2][0]}`)
console.log(`   4 ${container[0][2][1]}`)
console.log(`   5 ${container[0][2][2][0]}`)
console.log(`   6 ${container[0][2][2][1]}`)

console.log("DISPLAYING SECOND")
console.log(`   1 ${container[1][0]}`)
console.log(`   2 ${container[1][1]}`)
console.log(`   3 ${container[1][2][0]}`)
console.log(`   4 ${container[1][2][1]}`)
console.log(`   5 ${container[1][2][2][0]}`)
console.log(`   6 ${container[1][2][2][1]}`)