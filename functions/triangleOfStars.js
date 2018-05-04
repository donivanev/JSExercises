function triangleOfStars(number) {

    function upperPart(){

        for(let i = 1; i <= number; i++){
            console.log('*'.repeat(i));
        }
    }

    function lowerPart() {

        for(let i = number - 1; i >= 1; i--){
            console.log('*'.repeat(i));
        }
    }

    upperPart();
    lowerPart();
}

triangleOfStars(5);