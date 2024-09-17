function inputNumber() {
    let value;
    for(let i = 0; i < 10; i++) {
        value = prompt(`Enter a number greater than 100 (iteration - ${i+1}):`);
        if(isNaN(+value) || +value > 100) {
            break;
        }
    }
    console.log(value);
};

inputNumber();
