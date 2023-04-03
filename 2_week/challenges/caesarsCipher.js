//By M. Sandoval

//Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

//Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

//const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
let newWord = ""

const caesarCipher = (s , k, alphabet) => {
    for(let element of s){
        if (element == '-'){
            newWord += element
        }
        else{
            newWord += alphabet[alphabet.indexOf(element) + k]
        }
    }
    console.log(newWord)
}

caesarCipher("middle-Outz", 2, alphabet) // "okffng-Qwvb"

// newWord += alphabet[alphabet.findIndex(
//     (alphabet, element) => {
//         return alphabet == element
//     }
// )]