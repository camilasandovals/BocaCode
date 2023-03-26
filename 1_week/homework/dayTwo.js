//By M. Sandoval

//1.   Write a switch statement that takes an animal and logs the sound that animal makes to the console. Include at least 3 animals.

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


//2.   Write a function that takes the name of a fruit and logs the color of that fruit to the console. Use an if-else statement. Include at least 4 fruit options.  Invoke the function.

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

getFruitColor(fruitName);

//3.   Write a function that adds two numbers together.  Invoke the function.

const addNumber = (num1 , num2) => console.log(num1 + num2);

addNumber(3,2)
