//By M. Sandoval 

//This function is the same than enoughtBeds but shorter

//1. Write the function
const numCouples = 4
const numAdults = 0
const numKids = 2
const numQueenBeds = 2
const numSingleBeds = 4

//2. Create function
const enoughBeds = 
    (numQueenBeds, numSingleBeds, numCouples, numAdults, numKids) => (numSingleBeds + numQueenBeds*2 < numCouples*2 + numAdults + numKids)? 
    'Not enought beds' : 'Enough beds'

//3. Print to console
console.log(enoughBeds(numQueenBeds, numSingleBeds, numCouples, numAdults, numKids))


