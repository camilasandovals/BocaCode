//By M. Sandoval

//Create a function which returns the number of true values in an array.
const testArray1 = [ true, false, false, true, false, false, false, true, true, true, false, ]
const testArray2 = [true, false, false, true, null, false, 0, 1, "false"];

const trueValues = (array) => {
  let sum = 0;
  for (let element of array) {
    if (element == true) {
      sum++;
    }
  }
  console.log(sum);
};

trueValues(testArray1);
trueValues(testArray2);
