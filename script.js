// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //declaring character type variables
  var charTypes = {
    upperCaseLetters : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',],
    lowerCaseLetters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numbers : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    specialChars : [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~'],
  }

  //determine number of characters in PW
  function passwordLength() {
    var i = window.prompt("Enter length of desired password. Must be at least 8 characters long.");

    //user must imput number in allowed range, otherwise they are asked to enter another number
    if (i >= 8 && i <= 128){
      charTypes.length = i;
    } else {
      window.alert("Please input a number between 8 and 128.")
      passwordLength();
      return;
    }
  }

  //confirm to include UPPERCASE LETTERS
  function passwordUpper() {
    var i = window.confirm("Do you want to include UPPERCASE letters?");

    if (i == true) {
      charTypes.upperCase = true;
    }
  }

  //confirm to include LOWERCASE LETTERS
  function passwordLower() {
    var i = window.confirm("Do you want to include LOWERCASE letters?");

    if (i == true) {
      charTypes.lowerCase = true;
    }
  }

  //confirm to include NUMBERS
  function passwordNumeric() {
    var i = window.confirm("Do you want to include NUMBERS?");

    if (i == true) {
      charTypes.numeric = true;
    }
  }

  //confirm to include SPECIAL CHARACTERS
  function passwordSpecChar() {
    var i = window.confirm("Do you want to unclude SPECIAL CHARACTERS?");

    if (i == true) {
      charTypes.specials = true;
    }
  }

  //
  passwordLength();
  passwordUpper();
  passwordLower();
  passwordNumeric();
  passwordSpecChar();

  //create an array for included characters
  var characterArray = [];
  
  //user input will determine what is included in array
  if (charTypes.length == 0){
    return;
  }
  if (charTypes.upperCase === true) {
    characterArray = characterArray.concat(charTypes.upperCaseLetters);
  }
  if (charTypes.lowerCase === true) {
    characterArray = characterArray.concat(charTypes.lowerCaseLetters);
  }
  if (charTypes.numeric === true) {
    characterArray = characterArray.concat(charTypes.numbers);
  }
  if (charTypes.specials === true) {
    characterArray = characterArray.concat(charTypes.specialChars);
  }
  
  //function to generate PW by randomizing all confirmed character types
  function generatePassword(){
    var passwordArray = [];

    for (i = 0; i < charTypes.length; i++) {
      var index = Math.floor((Math.random() * characterArray.length));
      passwordArray.push(characterArray[index]);
    }

    var passwordString = passwordArray.join('');
    return passwordString;
  }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
