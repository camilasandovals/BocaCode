function isPrime(num) {
    let quantityOfDivisors=0
    for (let i=0; i<=num; i ++){
        if (num % i == 0){
            quantityOfDivisors ++
        }
    }
    if (quantityOfDivisors > 2 ){
        return `${num} is not a prime number`
    }
    return `${num} is a prime number`
}

console.log(isPrime(211))