function removeElement(array, item) {
    let index;
    do {
        index = array.indexOf(item);
        if(index !== -1) {
            array.splice(index, 1);
        }
    } while(index !== -1);
}

const array = [1, 3, 4, 6, 2, 5, 7, 4];

removeElement(array, 4);

console.log(array);