//By M. Sandoval

let car = {
    make: 'Audi',
    model: 'A3',
    year: 2018,
    color: 'gray'
}

const miles = 31_000
car = {...car, miles}

console.log(car.miles)