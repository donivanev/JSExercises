function processOddNumbers(array) {

    return array.filter((num, i) => i % 2 === 1).map(x => 2*x).reverse().join(' ');
}

processOddNumbers([10, 15, 20, 25]);