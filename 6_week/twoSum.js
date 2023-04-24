//Given an array of numbers and a target, return the indices of the two numbers in the array that add up to the target

array = [11,3,7,5,6,13,4]

function twoSum(target) {
    for(let i =0; i<array.length; i++){
        for (let j = i +1; j<array.length; j++){
            if(array[i] + array[j] == 20) {
                return [i,j]
            }
        }
    }
}

// console.log(twoSum(20))

function twoSum2(array, target) {
    let hashmap = {}
    for(let i = 0; i< array.length; i ++){
        // console.log(hashmap)
        const otherNumber =  target - array[i]
        // console.log(otherNumber)
        if(hashmap[otherNumber]) { //if(hashmap[otherNumber] !== undefined) {
            return [hashmap[otherNumber], i]
        } else {
            hashmap[array[i]] = i
        }
    }
}

console.log(twoSum2(array, 20))

// function twoSum2(target) {
//     let hashmap = {}
//     for(let i = 0; i< array.length; i ++){
//         const otherNumber =  target - array[i]
//         if(hashmap[otherNumber]) {
//             return [hashmap[otherNumber], i]
//         } else {
//             hashmap[otherNumber] = i
//         }
//     }
// } 