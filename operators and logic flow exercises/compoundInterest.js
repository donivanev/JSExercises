function compInterest(args) {

    let principalSum = args[0];
    let interestRate = args[1] / 100;
    let compoundingPeriod = 12 / args[2];
    let timespan = args[3];

    let f = principalSum * ((1 + (interestRate / compoundingPeriod)) ** (compoundingPeriod * timespan));

    console.log(f.toFixed(2));
}