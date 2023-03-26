//By M. Sandoval

//1. Here we have a switch statement that takes an animal and logs the sound that animal makes to the console. The variable "animal" is set to "dog", but we can change it to other animals like "cat" or "bird". Depending on the animal, the switch statement will log a different sound for each case.

const animal = 'dog';

switch (animal) {
case 'cat':
console.log('meow');
break;
case 'dog':
console.log('woof');
break;
case 'bird':
console.log('tweet')
break;
default:
console.log('animal does not match options')
}

//2. Here we have a function called "getFruitColor" that takes the name of a fruit and logs the color of that fruit to the console. The variable "fruitName" is set to "apple", but we can change it to other fruits like "banana" or "kiwi". Depending on the fruit, the function will log a different color using an if-else statement.

const fruitName = 'apple';

const getFruitColor = fruitName => {
if (fruitName == 'apple'){
console.log('red');
} else if (fruitName == 'banana'){
console.log('yellow');
} else if (fruitName == 'kiwi'){
console.log('green');
} else {
console.log('different color');
}
}

//We call the function using the "getFruitColor" and pass in the "fruitName" variable as an argument.

getFruitColor(fruitName);

//3. Here we have a function called "addNumber" that adds two numbers together. The function takes two parameters, "num1" and "num2", and logs the result of adding them to the console.

const addNumber = (num1 , num2) => console.log(num1 + num2);

//We call the function using the "addNumber" and pass in two numbers (3 and 2) as arguments.

addNumber(3,2)