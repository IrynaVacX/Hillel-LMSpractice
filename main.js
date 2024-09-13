function calculateArithmeticMeanValue(arr) {
    let onlyNumArr = arr.filter(element => typeof element === "number");

    if(onlyNumArr.length === 0) {
        return "No numbers";
    }

    return onlyNumArr.reduce((acc, num) => acc + num) / onlyNumArr.length;
}

let arr = ["qwe", 13, true, 43, 'u', [1,2,3], 103];
console.log(calculateArithmeticMeanValue(arr));
