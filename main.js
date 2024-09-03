let number = 10369;

let n1 = Math.floor(number / 10000);
let n2 = Math.floor(number / 1000 % 10);
let n3 = Math.floor(number / 100 % 10);
let n4 = Math.floor(number / 10 % 10);
let n5 = number % 10;

console.log(number);
console.log(`${n1} ${n2} ${n3} ${n4} ${n5}`);
