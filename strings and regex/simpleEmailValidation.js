function simpleEmailValidation(inputEmail) {

    let emailPattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;

    if(emailPattern.test(inputEmail) === true){
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

simpleEmailValidation("valid@email.bg");