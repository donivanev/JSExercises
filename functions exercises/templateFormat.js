function templateFormat(arrayOfStrings) {

    console.log(`<?xml version="1.0" encoding="UTF-8"?>`);
    console.log(`<quiz>`);
    for(let i = 0; i < arrayOfStrings.length; i += 2){
        console.log(`<question>`);
        console.log(`${arrayOfStrings[i]}`);
        console.log(`</question>`);
        console.log(`<answer>`);
        console.log(`${arrayOfStrings[i+1]}`);
        console.log(`</answer>`);
    }
    console.log(`</quiz>`);
}
