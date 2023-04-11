function primeFactors(num) {
    let factors = []
    for (let i=2; i<num; i ++){
        if (num % i == 0){
            factors.push(i)
        }
    }
    return factors
}
console.log(primeFactors(69))