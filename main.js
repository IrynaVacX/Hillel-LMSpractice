class Calculator {
    add(n1, n2) {
        return n1 + n2;
    }
    subtract(n1, n2) {
        return n1 - n2;
    }
    multiply(n1, n2) {
        return n1 * n2;
    }
    divide(n1, n2) {
        if(n2 === 0) {
            return "Cannot divide by zero";
        }
        return n1 / n2;
    }
}
   
const calc = new Calculator();
   
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4
