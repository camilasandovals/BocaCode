//By M. Sandoval

/// Objective: return a friendly sentence 


sentence = "type Better PleAse!"

const convertSentence = text => {
    const newText = text.toLowerCase();
    const newText2 = newText[0].toUpperCase();
    const finalText = newText2 + newText.substring(1);
    return finalText
}

const result = convertSentence(sentence);

console.log('Original: ', sentence)
console.log('Result: ', result)