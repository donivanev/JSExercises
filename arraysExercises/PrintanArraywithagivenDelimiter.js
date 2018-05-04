function PrintAnArrayWithAGivenDelimiter(array) {

    let delimeter = array[array.length - 1];
    array.pop();

    let result = '';

    for(let i = 0; i < array.length; i++){
        i === 0 ? result += array[i] : result += delimeter + array[i];
    }

    console.log(result);
}