//By M. Sandoval

const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`   ${num[0]}  ${num[1]}  ${num[2]}  ${num[3]}  ${num[4]}  ${num[5]}  ${num[6]}  ${num[7]}  ${num[8]}  ${num[9]}`)
for (let element of num){
    const multiplication = num.map(x => x * element);
    console.log(`${element}  ${multiplication[0]}  ${multiplication[1]}  ${multiplication[2]}  ${multiplication[3]}  ${multiplication[4]}  ${multiplication[5]}  ${multiplication[6]}  ${multiplication[7]}  ${multiplication[8]}  ${multiplication[9]}`)
}




