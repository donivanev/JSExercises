function extractAnNonDecreasingSubsequenceFromAnArray(array) {

    array = array.map(Number);
    let currentBiggestNum = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < array.length; i++) {

        let currentNumber = array.shift();

        if(currentNumber >= currentBiggestNum) {
            currentBiggestNum = currentNumber;
            console.log(currentNumber);
        }
    }
}