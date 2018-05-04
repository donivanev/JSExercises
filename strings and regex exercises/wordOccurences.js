function wordOccurences(string, word) {

    // string = string.toLowerCase();
    // string = string.split(/[,\.!? \/]/g);
    // let counter = 0;
    //
    // for (let i = 0; i < string.length; i++){
    //     if(word === string[i]) {
    //         counter++;
    //     }
    // }
    //
    // console.log(counter);

    let count = 0;
    let regex = new RegExp("\\b"+word+"\\b", "gi");
    let match = regex.exec(string);

    while(match) {
        count++;
        match = regex.exec(string);
    }

    console.log(count);
}

wordOccurences("How do you plan on achieving that? How? How can you even think of that?", "how");