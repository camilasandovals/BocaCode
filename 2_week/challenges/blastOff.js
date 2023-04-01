//By M. Sandoval

//Create a function that count downs from 20 to 1, then on the number 0 say "blast off".

const blastOff = () => {
    for(let i=20; i>=1; i--){
        console.log(i)
    }
    console.log("Blast off 🚀")
}

blastOff()