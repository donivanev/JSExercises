function oddOrEven(number) {
    if(Number.isInteger(number) === false){
        console.log("invalid");
    } else if (number % 2 !== 0){
        console.log("odd");
    } else {
        console.log("even");
    }
}
