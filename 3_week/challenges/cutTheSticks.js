// By M. Sandoval 

//https://www.hackerrank.com/challenges/cut-the-sticks/problem

function cutTheSticks( array ) {
    let sticks_cut = [] //to store the length of each new array (see line 8)
  while (array.length > 0) { 
    sticks_cut.push(array.length)
    array = array.sort() //so that the first element is the shortest stick
    array = array.map(function(num) { // each number of the array minus the shortest stick
        return (num - array[0]) 
    })
    array = array.filter(function(num2) { //so that we eliminate elements of the array = to 0
        return num2>0
    }) 
}
    return sticks_cut //returns the solution
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))
//console.log(cutTheSticks([1, 2, 3, 4, 3, 3 , 2 ,1]))
