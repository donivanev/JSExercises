function PrintEveryNthElementFromAnArray(array) {

    let n = Number(array[array.length - 1]);
    array.pop();

    for(let i = 0; i < array.length; i+=n){

        console.log(array[i]);
    }
}