function captureTheNumbers(array) {

    // let regex = /[0-9]+/;
    //
    // for (let i = 0; i < array.length; i++) {
    //     let newArray = array.split(' ');
    //     if(regex.test(array[i])) {
    //         console.log(newArray[i].split(/[^0-9]+/).join('\n'));
    //     }
    // }

    // let numbers = [];
    // let regex = /\d+/g;
    // let text = "";
    //
    // for (let i = 0; i < array.length; i++) {
    //     let currentSentence = array[i];
    //     text += currentSentence;
    // }
    //
    // let match = regex.exec(text);
    //
    // while (match) {
    //     numbers.push(match[0]);
    //     match = regex.exec(text);
    // }
    //
    // console.log(numbers.join(" "));

    let text = array.join(' ');
    let regex = /\d+/g;
    let numbers = text.match(regex);
    console.log(numbers.join(' '));
}

captureTheNumbers("The300 What is that? I think it’s the 3rd movie. Lets watch it at 22:45");