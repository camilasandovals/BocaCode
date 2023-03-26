//By M. Sandoval

//1. Write a function that multiplies two numbers. Invoke the function.
const getMultiplier = (num1 , num2) => console.log(num1 * num2)
getMultiplier(2,2)
//2. Write a function named assignGrade, that takes one argument, a number score (example: 90).
//3. Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
const assignGrade = score => {
    if(score>=90){
        console.log('A')
    }else if(score>=70 && score<90){
        console.log('B')
    }else if(score>=50 && score<70){
        console.log('C')
    }else if(score>30 && score<50){
        console.log('D')
    }else{
        console.log('F')
    }
}   
//4. Invoke that function for a few different scores and log the result to make sure it works for each case.
assignGrade(90)
assignGrade(70)
assignGrade(50)
assignGrade(40)
assignGrade(10)
//5. Write an array containing items of the same data type.
myArray = [1, 2, 3, 4, 5, 6]
//6. Write a function to get the first element in an array. Invoke the function. 
const getFirst = myArray => console.log(myArray[0])

getFirst(myArray)