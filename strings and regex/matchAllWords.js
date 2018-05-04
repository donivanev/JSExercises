function matchAllWords(string) {

    if (Array.isArray(string)) {
        string = string[0];
    }
    let words = string.match(/\w+/g);
    return words.join('|');
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');