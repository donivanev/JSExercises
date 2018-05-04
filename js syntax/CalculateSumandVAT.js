function calcSumAndVat(arr) {
    let sum = 0;
    let vat = 0;
    let total = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    vat = sum * 20 / 100;
    total = sum + vat;

    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total);
}
