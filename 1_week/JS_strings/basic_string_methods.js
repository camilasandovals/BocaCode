//By M. Sandoval

//1. Set variable 
const message = "     Here goes message      "

//2. Properties 
//Lengh
const strLength = message => console.log(message.length);

//To upperCase
const toUpper = message => console.log(message.toUpperCase());

//To lowerCase 
const toLower = message => console.log(message.toLowerCase());

//Trim
const toTrim = message => console.log(message.trim());

//Replace 
const toReplace = message => {
    subject = "goes"
    replace = "is your amazing"
    console.log(message.replace(subject, replace)); }

//Substring
const toSubstring = message => console.log(message.substring(10,15))
const toSubstring2 = message => console.log(message.substring(15))

//IndexOf
const toIndexof = message => console.log(message.indexOf('m'))

//Split
const toSplit = message => console.log(message.split(' '))
const toSplit2 = message => console.log(message.split(''))


// 3. Invoking functions
strLength(message)
toUpper(message)
toLower(message)
toTrim(message)
toReplace(message)
toSubstring(message)
toSubstring2(message)
toIndexof(message)
toSplit(message)
toSplit2(message)