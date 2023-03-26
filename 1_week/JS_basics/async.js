//By M. Sandoval

/*Asynchronous code allows the program to be executed 
immediately where the synchronous code will block further 
execution of the remaining code until it finishes the current one. 
This may not look like a big problem but when you see it in a bigger 
picture you realize that it may lead to delaying the User Interface.*/

// Print the string 'Start' to the console
console.log('Start')

// Create a new timer using setTimeout function, which will run a function after a delay of 1000 milliseconds (1 second)
setTimeout(() => {
    // Print the string 'Middle' to the console
    console.log('Middle')
}, 1000)

// Print the string 'End' to the console
console.log('End')

// Print the string 'Start' to the console
console.log('Start')

// Create a new timer using setTimeout function, which will run a function after a delay of 0 milliseconds (immediately)
setTimeout(() => {
    // Print the string 'Middle' to the console
    console.log('Middle')
}, 0)

// Print the string 'End' to the console
console.log('End')