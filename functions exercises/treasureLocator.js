function treasureLocator(array) {

    for(let i = 0; i < array.length; i+=2){

        treasureIsland(array[i], array[i+1])
    }

    function treasureIsland(firstCoordinate, secondCoordinate) {

        if((firstCoordinate >= 1 && firstCoordinate <= 3) && (secondCoordinate >= 1 && secondCoordinate <= 3)){
            console.log('Tuvalu');
        } else if((firstCoordinate >= 0 && firstCoordinate <= 2) && (secondCoordinate >= 6 && secondCoordinate <= 8)){
            console.log('Tonga');
        } else if((firstCoordinate >= 8 && firstCoordinate <= 9) && (secondCoordinate >= 0 && secondCoordinate <= 1)){
            console.log('Tokelau');
        } else if((firstCoordinate >= 5 && firstCoordinate <= 7) && (secondCoordinate >= 3 && secondCoordinate <= 6)){
            console.log('Samoa');
        } else if((firstCoordinate >= 4 && firstCoordinate <= 9) && (secondCoordinate >= 7 && secondCoordinate <= 8)){
            console.log('Cook');
        } else {
            console.log('On the bottom of the ocean');
        }
    }
}