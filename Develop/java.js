// var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
// var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var special = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"]

var numeric = "0123456789"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var special = " !#$%&()*+,-./:;<=>?@[^`{|}~"

// Create empty string to add possible characters to password
var characters = ""
var password = ""

var pwdLength;

// Ask user how long they want password
function askQuestion() {
    // clear out text area
    document.querySelector("#password").innerHTML = "";
    pwdLength = parseInt(prompt("How long would you like your password to be? Must be 8-128 characters: "))

    while ((pwdLength < 8) || (pwdLength > 128)) {
        alert("password must be between 8 and 128 characters")
        pwdLength = parseInt(prompt("How long would you like your password to be? Must be 8-128 characters: "))
    }

    var pwdUppercase = confirm("Do you want UPPERCASE letters in your password?");
    if (pwdUppercase) {
        characters = characters + uppercase;
        // console.log(characters);
    }
    var pwdLowercase = confirm("Do you want lowercase letters in your password?");
    if (pwdLowercase) {
        characters = characters + lowercase;
        // console.log(characters);
    }
    var pwdNumber = confirm("Do you want numbers in your password?");
    if (pwdNumber) {
        characters = characters + numeric;
        // console.log(characters);
    }
    var pwdSpecial = confirm("Do you want special characters in your password?");
    if (pwdSpecial) {
        characters = characters + special;
        // console.log(characters);
    }
    // Randomize password based on characters now in "possibleCharacterList" string * passwordLength
    for (var i = 0; i < pwdLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log(password)

    // return password in text area
    document.querySelector("#password").innerHTML = password;
}


// console.log(password)


