//By M. Sandoval 

const countNumber = [1,3,7,6,13,20,2,5,33,9,14];
let odd = 0
let even = 0

const getOdd = () => {
    for(let element of countNumber) { (element % 2 ==1 )? odd++ : even++}
    console.log(odd)
}

getOdd()
