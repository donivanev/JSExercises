function findVariableNamesInSentences(string) {

    let regex = /_[A-za-z0-9]+/g;

    let result = string.match(regex);
    result = result.toString().split(/_/);
    console.log(result.join(''));
}

findVariableNamesInSentences("The _id and _age variables are both integers.");