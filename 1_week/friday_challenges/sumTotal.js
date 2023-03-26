//By M. Sandoval

const sumInt = [6,1,643,234,123,4,7,9];
let sum = 0

const getSum = () => {
    for(let element of sumInt){
        sum += element
    }
    console.log(sum)
}

getSum()

