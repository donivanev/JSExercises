function concatenateReversed(array) {

    let string = '';

    for(let i = 0; i < array.length; i++){
        string += array[i];
    }

    console.log(string.split("").reverse().join(""));
}

concatenateReversed(['I', 'am', 'student']);