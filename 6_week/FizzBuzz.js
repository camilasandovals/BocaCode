function FizzBuzz(n) {
    for(let i = 1; i <= n ; i++) {
        let fizzbuzz = ""
        if(i%3==0) {
            fizzbuzz = fizzbuzz + "Fizz"
        }
        if(i%5==0) {
            fizzbuzz = fizzbuzz + "Buzz"
        }
        if(fizzbuzz==""){
            fizzbuzz = i
        }
        console.log(fizzbuzz)
    }
}

FizzBuzz(55)