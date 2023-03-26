// By M. Sandoval

const words = ["Wow","RACEcar","vdewe3q","dEed","nOoN","stuff","LEvEL","Paladin","RaDaR","famous","Taxi"];
const isPalindrome = () => {
    for(let element of words){
        element = element.toLowerCase()
        let newword = ""
        for(let j=(element.length-1); j>=0; j--){
            newword = newword + element[j]
        }
        if (newword == element){
            console.log(`✅ ${element} is palindrome`)
        } else {
            console.log(`❌ ${element} is not palindrome`)
        }
    }
}

isPalindrome()