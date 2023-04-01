
async function multiplyTwoNumbers(a,b){
    return a*b;
}

const answer = await multiplyTwoNumbers(10,30)
console.log(answer)


//---------------------------

async function testStuffOut(){
    const answer = await multiplyTwoNumbers(10,30)
    console.log(answer)
}

testStuffOut()