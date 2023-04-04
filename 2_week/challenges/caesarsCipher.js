//By M. Sandoval

//Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

//Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let newWord = ""

const caesarCipher = (s , k) => {
    for(let element of s){
        if (element == '-'){
            newWord += element
        } else {
        let index = alphabet.indexOf(element.toLowerCase())
        if(index + k > (alphabet.length -1)){
            newWord += alphabet[k-1]
        }
        else{
            newWord += alphabet[index + k]
        }
    }
    }
    console.log(newWord)
}

caesarCipher("middle-Outz", 2) // "okffng-Qwvb"

// function caesarCipher(s, k) {
//     return s.replace(/[a-z]/gi, m => {
//       const c = m < "a" ? 65 : 97;
//       return String.fromCharCode((m.charCodeAt(0) - c + k) % 26 + c)
//     });
//   }


// newWord += alphabet[alphabet.findIndex(
//     (alphabet, element) => {
//         return alphabet == element
//     }
// )]