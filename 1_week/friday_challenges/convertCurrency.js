//By M. Sandoval

// This line creates a constant variable called "yen" and sets its value to 5.
const yen = 5;

// This line creates a function called "currency" that takes one argument, "yen".
function currency(yen) {
// This line creates a constant variable called "result" and sets its value to the result of multiplying the "yen" argument by 0.0077 (the current exchange rate for Japanese yen to US dollars).
const result = yen * 0.0077;
// This line returns a string that includes the original yen value and the US dollar value calculated in the previous line.
return `${yen} Yen is ${result} US Dollars.`;
}

// This line calls the "currency" function and passes in the value of the "yen" constant as an argument. The function returns a string, which is logged to the console.
console.log(currency(yen));