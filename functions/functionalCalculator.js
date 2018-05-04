function functionalCalc(firstNumber, secondNumber, operator) {
        
    let calc = function(firstNumber, secondNumber, operator) { return operator(firstNumber, secondNumber) };
        let add = function(firstNumber, secondNumber) { return firstNumber + secondNumber };
        let subtract = function(firstNumber, secondNumber) { return firstNumber - secondNumber };
        let multiply = function(firstNumber, secondNumber) { return firstNumber * secondNumber };
        let divide = function(firstNumber, secondNumber) { return firstNumber / secondNumber };

        switch (operator) {
            case '+': return calc(firstNumber, secondNumber, add);
            case '-': return calc(firstNumber, secondNumber, subtract);
            case '*': return calc(firstNumber, secondNumber, multiply);
            case '/': return calc(firstNumber, secondNumber, divide);
        }
}