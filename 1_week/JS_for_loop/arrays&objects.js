// Given the following array, output each fruit

const fruits = ['apple', 'banana', 'orange', 'kiwi', 'grapes']

const getFruits = fruits => {
  for(let i=0; i<fruits.length; i++)
  { 
    console.log(` ${fruits[i]}`)
  }
}
console.log(`Printing fruits:`)
getFruits(fruits)
// Given the following array, output each student's first name

const students = [
  {
    firstName: 'Ilan',
    lastName: 'Vaks',
    gender: 'male',
  },
  {
    firstName: 'Kaniel',
    lastName: 'Tapper',
    gender: 'male',
  },
  {
    firstName: 'Meghann',
    lastName: 'Stamper',
    gender: 'female',
  },
]

console.log('Printing first names of objects:')

const firstName = students => {
  for(let i=0; i<students.length; i++){
    console.log(` ${students[i].firstName}`)
  }
}

firstName(students)