function impUnits(number) {

    let integer = number / 12;
    let residue = number % 12;

    console.log(`${Math.trunc(integer)}'-${residue}"`);
}