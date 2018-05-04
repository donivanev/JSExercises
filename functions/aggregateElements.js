function aggregate(array) {

    let firstNum = array[0];
    let secondNum = array[1];
    let thirdNum = array[2];

    function sum(firstNum, secondNum, thirdNum) {
        return firstNum + secondNum + thirdNum;
    }

    function inverseSum(firstNum, secondNum, thirdNum) {
        return 1 / firstNum + 1 / secondNum + 1 / thirdNum;
    }

    function concat(firstNum, secondNum, thirdNum) {
        return `${firstNum}${secondNum}${thirdNum}`;
    }

    sum(array[0], array[1], array[2]);
    inverseSum(array[0], array[1], array[2]);
    concat(array[0], array[1], array[2]);
}

aggregate(1, 2, 3);