function calcProductTwoNumbers(x) {
    return (y) => {
      return x * y;
    };
}

console.log(calcProductTwoNumbers(5)(3)); 
console.log(calcProductTwoNumbers(3)(4)); 
console.log(calcProductTwoNumbers(4)(5)); 