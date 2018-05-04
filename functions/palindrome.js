function isPalindrome(string) {

    for (let i = 0; i < string.length / 2; i++) return string[i] === string[string.length - i - 1];

}