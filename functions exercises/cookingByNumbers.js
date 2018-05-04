function cookingByNum(array) {

    let number = Number(array[0]);

    for(let i = 0; i < array.length; i++){

        let input = array[i];
        checkInputAndReturnResult(input);
    }

    function checkInputAndReturnResult(input) {
        switch (input){
            case 'chop': console.log(number / 2); number = number / 2; break;
            case 'dice': console.log(Math.sqrt(number)); number = Math.sqrt(number); break;
            case 'spice': console.log(number + 1); number = number + 1; break;
            case 'bake': console.log(number * 3); number = number * 3 ;break;
            case 'fillet': console.log(number - (number * 20 / 100)); number = number - (number * 20 / 100); break;
        }
    }
}
