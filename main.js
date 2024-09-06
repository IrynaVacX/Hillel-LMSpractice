let num = +prompt("Enter a three-digit number :");
if(isNaN(num)) {
    alert("It's not a number");
}
else if (num > 999 || num < 100) {
    alert("It's not a three-digit number");
}
else {
    let n1 = Math.floor(num / 100);
    let n2 = Math.floor(num % 100 / 10);
    let n3 = num % 10;

    if(n1 === n2 && n2 == n3) {
        alert("All digits match");
    }
    else if(n1 === n2 || n2 == n3 || n3 === n1) {
        alert("At least 2 out of 3 digits match");
    }
    else {
        alert("ok");
    }
}
