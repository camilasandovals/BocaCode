function FizzBuzz(n) {
    for(let i = 1; i < n ; i++) {
        let fizzbuzz = ""
        if(i%3==0) {
            fizzbuzz = fizzbuzz + "Fizz"
        }
        else if(i%5==0) {
            fizzbuzz = fizzbuzz + "Buzz"
        }
        else{
            fizzbuzz = i
        }
        console.log(fizzbuzz)
    }
}

FizzBuzz(15)