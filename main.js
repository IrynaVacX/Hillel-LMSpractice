let value = +prompt("Enter an integer :");

if(!isNaN(value) && Number.isInteger(value)) {
    for(let i = 1; i <= 100; i++) {
        if(i * i <= value) {
            console.log(i);
        }
    }
}
else {
    console.log("Invalid value");
}
