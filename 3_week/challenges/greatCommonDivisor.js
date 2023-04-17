
function greatestCommonDivisor ( a , b ){
    if ( a > b) {
        let c = b
        b = a
        a = c
    }
    let greatestCommonDivisorNum = 0
    for (let i = 1; i < a; i ++){
        if ( a%i == 0 & b%i ==0){
            greatestCommonDivisorNum = i;
        }        
    }
    console.log(greatestCommonDivisorNum)
}

greatestCommonDivisor( 69 , 169)