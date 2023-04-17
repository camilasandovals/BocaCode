function removeDuplicate(arr) {
    
    arr = new Set(arr)
    return console.log(arr)
}

function removeDuplicate2(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i ++) {
        let exists = false
        for ( let j=i+1; j<arr.length; j++){
            if (arr[i] == arr[j]) {
                exists = true
            }
        }
        if (exists == false) {
            newArray.push(arr[i])
        } 
    }
    return console.log(newArray)
}

removeDuplicate([1,2,3,4,5,6,6,6,3,7,8,9,10,10,10])
removeDuplicate2([1,2,3,4,5,6,6,6,3,7,8,9,10,10,10])