function censorship(string, array) {

    for (let current of array) {

        let replaced = '-'.repeat(current.length);

        while (string.indexOf(current) > -1) {

            string = string.replace(current, replaced);
        }
    }

    return string;
}