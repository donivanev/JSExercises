function negPos(inputArray) {

    let array = inputArray.map(Number);
    let result = [];

    for (let i of array) {
        if (i < 0) {
            result.unshift(i);
        } else {
            result.push(i);
        }
    }

    result.forEach(result => console.log(result));
}
