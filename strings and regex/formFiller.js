function formFiller(username, email, phone, array) {

    // let validPlaceholder1 = /<![A-Za-z][A-za-z]+!>/;
    // let validPlaceholder2 = /<@[A-Za-z][A-za-z]+@>/;
    // let validPlaceholder3 = /<\+[A-Za-z][A-za-z]+\+>/;
    //
    // for (let i = 0; i < array.length; i++) {
    //
    //     let tokens = array[3].split(' ');
    //     if (validPlaceholder1.test(tokens) === true) {
    //         tokens[i].replace(userName);
    //     } else if (validPlaceholder2.test(tokens) === true) {
    //         tokens[i].replace(email);
    //     } else if (validPlaceholder3.test(tokens) === true) {
    //         tokens[i].replace(phoneNumber);
    //     }
    // }
    //
    // console.log(array);
    array.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);

        console.log(line);
    });
}
formFiller('Pesho', 'pesho@softuni.bg', '90-60- 90',
    ['Hello, <!username!>!', 'Welcome to your Personal profile.', 'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);