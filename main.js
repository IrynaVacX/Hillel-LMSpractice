function removeSymbols(str, arrSymbols) {
    return str ? str.split('').filter(element => !arrSymbols.includes(element)).join('') : "Empty string";
}

let str = prompt("Enter a string :");
let arrSymbols = [...new Set(prompt("Enter symbols to remove :"))];

console.log(removeSymbols(str, arrSymbols));
