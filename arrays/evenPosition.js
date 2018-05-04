function evenPosition(array) {

    let newArray = [];

    for (let i in array){
        if(i % 2 === 0) newArray[i] = array[i];
    }

    console.log(newArray.filter(x => x !== ' ').join(' '));
}