function capitalizeTheWords(string) {

    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 0) {
            string[i] = string[i].toUpperCase();
        } else if (string[i] === ' ') {
            string[i + 1] = string[i + 1].toUpperCase();
        }
    }

    console.log(string);
}

capitalizeTheWords("Capitalize these words");

