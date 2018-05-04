function rotateArray(array) {

    let n = Number(array[array.length - 1]);
    array.pop();

    for(let i = 0; i < n % array.length; i++){

        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}