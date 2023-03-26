//By M. Sandoval

//Switch statement for displaying the sound of the pet

const pet = 'dog'

switch (pet){
    case 'cat':
        console.log('meow')
        break
    case 'dog':
        console.log('woof')
        break
    case 'bird':
        console.log('cheep')
        break
    case 'duck':
    case 'goose':
        console.log('quack')
        break
    default:
        console.log('cool pet')
        break
}