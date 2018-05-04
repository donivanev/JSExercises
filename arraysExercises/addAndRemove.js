function addAndRemove(array) {

    let number = 0;
    let newArr = [];
    let count = 0;

    if(array[0] === "remove") {
        for (let i of array) {
            if (array[i] !== "add") {
                count++;
            }
        }
        if (count === array.length) {
            console.log("Empty");
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === "add") {
                number++;
                newArr[i] = number;
            } else if (array[i] === "remove") {
                number++;
                newArr[i] = number;
                newArr.splice(1, i);
            }
        }
    }

    console.log(newArr.filter(x => x !== '').join('\n'));
}
