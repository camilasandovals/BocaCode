//By M. Sandoval

// This line declares a constant variable named "Farenheit" and sets its value to 80.
const Farenheit = 80;

// This line declares a function called "converter" that takes one argument, "Farenheit".
function converter(Farenheit) {
// This line creates a new variable called "celsious" and sets its value to the result of subtracting 32 from the "Farenheit" argument.
let celsious = Farenheit - 32;
// This line updates the value of the "celsious" variable by multiplying it by 5/9.
celsious = (5 / 9) * celsious;
// This line logs a message to the console that includes the original Fahrenheit temperature and the Celsius temperature calculated in the previous lines.
console.log(`Today is ${Farenheit}F (${celsious.toFixed(2)}C).`);

// This code block is commented out, but it does the same thing as the lines above.
// const celsious = (Farenheit -32) * (5/9)
// console.log (celsious)
}

// This line calls the "converter" function and passes in the value of the "Farenheit" constant as an argument.
converter(Farenheit);