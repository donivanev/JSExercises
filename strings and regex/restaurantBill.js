function restaurantBill(array) {

    let arrayWithProducts = [];
    let sum = 0;

    for(let i = 0; i <= array.length; i++) {
        if (i % 2 === 0) {
            arrayWithProducts[i] = array[i];
        }
    }
    for(let i = 0; i <= array.length; i++) {
        if (i % 2 !== 0) {
            sum += Number(array[i]);
        }
    }

    arrayWithProducts = arrayWithProducts.filter(function(x){return x});

    console.log(`You purchased ${arrayWithProducts.join(', ')} for a total sum of ${sum}`);
}