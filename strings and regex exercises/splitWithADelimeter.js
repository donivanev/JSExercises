function splitWithADelimeter(string, delimeter) {

    let result = string.split(delimeter);
    console.log(result.join('\n'));

}

splitWithADelimeter("One-Two-Three-Four-Five", "-");