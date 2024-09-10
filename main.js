let value = +prompt("Enter an integer greater than 1 :");

if(!isNaN(value) && Number.isInteger(value) && value > 1) {
    let isSimple = true;
    for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            isSimple = false;
            break;
        }
    }
    if(isSimple) {
        console.log("This is a simple number");
    }
    else {
        console.log("This isn't a simple number");
    }
}
else {
    console.log("Invalid value");
}
