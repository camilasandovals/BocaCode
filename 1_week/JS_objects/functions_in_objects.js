//By M. Sandoval

const newObject = {
    firstName : 'Maria',
    lastName : 'Sandoval',
    favoriteAnimal: 'Panda',
    favoriteFood: 'Sushi',
    FavoriteMovie: 'Interestellar',
    information: function(){
        console.log(`Hi, my name is ${this.firstName} ${this.lastName} and I love to watch ${this.FavoriteMovie} while I eat ${this.favoriteFood}`)
    }
}

newObject.information()