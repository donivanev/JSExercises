function rounding([number, precision]) {

    precision = Number(rounding);
    if(precision > 15) {
        precision = 15;
    }

    number = Number(number).toFixed(precision);
    console.log(Number(number));
}

rounding([3.1415926535897932384626433832795, 2]);