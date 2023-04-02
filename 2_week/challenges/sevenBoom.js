//By M. Sandoval

//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

const sevenBoom = (array) => {
    for (let element of array) {
        element = element.toString()
        for (let i=0; i< element.length; i++)  {
           if (element[i] == 7) {
                return console.log('Boom!')
           }
        }     
    }
    return console.log("there is no 7 in the array")
}


sevenBoom([1, 2, 3, 4, 5, 6, 7])
sevenBoom([8, 6, 33, 100])
sevenBoom([2, 55, 60, 97, 86])