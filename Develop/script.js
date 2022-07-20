// Assignment code here
// global variables
let selectLower = false;
let selectUpper = false;
let selectNumber = false;
let selectSpecial = false;
let selectLength = false;
let selectLengthNum = 0;
let randomSelection = 0;
let newPassword = "";
let newPasswordTemp = "";
let index = 0;
buildPassword = "";

// function to build password
function generatePassword() {
  // call inputs to from the screen
  getInputs();
  // convert length of password to an integer
  selectLengthNum = parseInt(selectLength);
  // build the password validating choice of password criteria
  for (
    var i = 0;
    i < selectLengthNum && newPassword.length < selectLengthNum;
    i++
  ) {
    randomSpecial = Math.floor(Math.random() * (4 - 1) + 1);
    // Check if lowercase characters required in password.
    if (selectLower) {
      buildPassword = getLowerCase();
      newPassword += buildPassword;
    }
    // Check if uppercase characters required in password.

    if (selectUpper) {
      buildPassword = getUpperCase();
      newPassword += buildPassword;
    }
    // Check if numbers are required in password.

    if (selectNumber) {
      buildPassword = getNumber();
      newPassword += buildPassword;
    }
    // Check if special characters required in password. There are several special characters
    // four groups of special characters from the ascii extended table can be selected at random

    if (selectSpecial && randomSpecial === 1) {
      buildPassword = getSpecial(33, 47);
      newPassword += buildPassword;
    }

    if (selectSpecial && randomSpecial === 2) {
      buildPassword = getSpecial(58, 64);
      newPassword += buildPassword;
    }

    if (selectSpecial && randomSpecial === 3) {
      buildPassword = getSpecial(91, 96);
      newPassword += buildPassword;
    }

    if (selectSpecial && randomSpecial === 4) {
      buildPassword = getSpecial(123, 126);
      newPassword += buildPassword;
    }
  }

  return newPassword;
}

// display pronts to confirm user choice as to criteria for the password creation.
function getInputs() {
  // display message to select password criteria
  selectLower = confirm("Do you want lowercase letters in your password? ");

  selectUpper = confirm("Do you want to uppercase letters in your password? ");
  selectNumber = confirm("Do you want numbers in your password? ");
  selectSpecial = confirm("Do you want special characters in your password? ");

  // Check for valid input or the number is within the range 8 to 128
  selectLength = 0;
  while (selectLength < 8 || selectLength > 128 || isNaN(selectLength)) {
    selectLength = prompt(
      "How many numbers do you want in your password (8-128) Only? "
    );
  }
}

// random selection of lowercase letters
function getLowerCase() {
  let randomAscii = "";
  let lowerLetter = "";
  // check if lowercase characters selected
  if (selectLower) {
    // find lowercase character in ascii extended table using math random and converting it to an integer
    randomAscii = Math.floor(Math.random() * (122 - 97) + 97);
    lowerLetter = String.fromCharCode(randomAscii);
  }

  return lowerLetter;
}

// random selection of uppercase letters
function getUpperCase() {
  let randomAscii = "";
  let upperLetter = "";
  // check if uppercase characters selected
  if (selectUpper) {
    // find uppercase character in ascii extended table using math random and converting it to an integer
    randomAscii = Math.floor(Math.random() * (90 - 65) + 65);
    upperLetter = String.fromCharCode(randomAscii);
  }

  return upperLetter;
}

// random selection of numbers between 0 and 9
function getNumber() {
  let randomAscii = "";
  let number = "";
  // check if special characters selected
  if (selectNumber) {
    // find number in ascii extended table using math random and converting it to an integer
    randomAscii = Math.floor(Math.random() * (57 - 48) + 48);
    number = String.fromCharCode(randomAscii);
  }

  return number;
}

// random selection of special characters
function getSpecial(minNum, maxNum) {
  let randomAscii = "";
  let specialChar = "";
  // check if special characters selected
  if (selectSpecial) {
    // find special character in ascii extended table using math random and converting it to an integer

    randomAscii = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    specialChar = String.fromCharCode(randomAscii);
  }

  return specialChar;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
