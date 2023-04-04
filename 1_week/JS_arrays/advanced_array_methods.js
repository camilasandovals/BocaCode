//By M. Sandoval

// sort, filter, find, findindex, some, every, foreach

const fruit = [
  "apple",
  "pineapple",
  "banana",
  "dragon",
  "strawberry",
  "mango",
  "kenep",
];

// SORT

console.log(`original array: ${fruit}`);
//console.log("original array:" , fruit);
console.log(`sorted array: ${fruit.sort()}`);
console.log(`current array: ${fruit}`);

//FILTER

const age = [
  10,
  8,
  20,
  100,
  50,
  40,
  20
]

const ageFilter = age.filter( function(age) {
  return age > 18;
})
console.log(ageFilter)

const ageFilter2 = age.filter( (age) => {
  return age > 30;
})
console.log(ageFilter2)


//FIND
const ageFind = age.find( (age) => {
  return age>18
})
console.log(ageFind)

//FIND INDEX
const ageFindIndex = age.findIndex( (age) => {
  return age>18
})
console.log(ageFindIndex)

//SOME  (true or false)
const ageSome = age.some( (age) => {
  return age>100
})
console.log(ageSome)

//EVERY  (true or false)
const ageEvery = age.every( (age) => {
  return age > 0;
})
console.log(ageEvery)

//FOR EACH
const superHeros = [
  "Batman",
  "Superman",
  "Wonder Woman",
  "Spider Woman",
  "Black Widow",
]

superHeros.forEach( (whateverIcallit) => {
  return whateverIcallit
})

console.log(superHeros)