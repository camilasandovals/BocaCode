//By M. Sandoval 

//This function helps people to see if their vacation rental has the amount of beds they need depending on how many adults and kids are 


//1. Write the function
const numCouples = 4
const numAdults = 0
const numKids = 2
const numQueenBeds = 2
const numSingleBeds = 4

//2. Create function
const enoughBeds = function (numQueenBeds, numSingleBeds, numCouples, numAdults, numKids) {
    if (numSingleBeds + numQueenBeds*2 < numCouples*2 + numAdults + numKids){
        return 'Not enought beds'
    } else {
        return 'Enough beds'
    }
}

//3. Print to console
console.log(enoughBeds(numQueenBeds, numSingleBeds, numCouples, numAdults, numKids))


