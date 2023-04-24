    function palindromeNum(x) {
        const stringX = x + '';
        const midPoint = Math.floor(stringX.length / 2)
        for (let i = 0; i < midPoint; i++){
            const start = i;
            const end = (stringX.length - 1) -i;
            if(stringX[start] !== stringX[end]) return false
        }
        return true 
    }

console.log(palindromeNum(121))
console.log(palindromeNum(10))