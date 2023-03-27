//By M. Sandoval

function myCar(brand, model, year){
    this.brand = brand,
    this.model = model,
    this.year = year
}

const mariacar = new myCar('Toyota', 'Corolla', 2021);
const sergiocar = new myCar('Ford', 'Fiesta', 2018);

console.log(mariacar)
console.log(sergiocar)