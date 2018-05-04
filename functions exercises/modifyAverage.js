function modifyAverage(input) {

    let digits = input.toString().split('');
    digits = digits.map(Number);

    let sum = digits.reduce((a,b) => a + b);
    while((sum / (digits.length)) <= 5){
        digits.push(9);
        sum += 9;
    }

    let number= " ";
    for(let i = 0; i < digits.length; i++){

        number += digits[i];
    }
    console.log(number);
}
