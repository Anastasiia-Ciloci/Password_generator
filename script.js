// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(
    prompt(
      "Please enter the amount of characters you would like in your password."
    )
  );

  console.log("you entered: " + count);

  if (count < 8 || count > 128) {
    alert(
      "The number you enter needs to be in the range of 8 and 128. Try again, please!"
    );
    return;
  }

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()_+=~`/.|<>,\"';:'";
  var numbers = "0123456789";
  var random = [];

  var isLetters = window.confirm(
    "CLick Ok to confirm including lowercase characters"
  );
  if (isLetters) {
    random = letters;
  }

  var isUppercase = window.confirm(
    "Click Ok to confirm including Uppercase characters"
  );
  if (isUppercase) {
    random += uppercase;
  }

  var isSpecialCharacters = window.confirm(
    "Click Ok to confirm including special characters"
  );
  if (isSpecialCharacters) {
    random += specialCharacters;
  }

  var isNumber = window.confirm("Click Ok to confirm including numbers ");
  if (isNumber) {
    random += numbers;
  }

  if (random.length == 0) {
    alert(
      "The password cannot be generated. At least 1 character group needs to be shosen."
    );
    return;
  }

  var genPassword = "";

  // all cases
  for (var i = 0; i < count; i++) {
    genPassword += random[Math.floor(Math.random() * random.length)];
  }

  console.log(genPassword);
  return genPassword;
}

// for (var i = 0; i < count; i++) {
//   var random = Math.floor(Math.random * random.length);}

//console.log(genPassword);
//return random();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password == undefined || null) {
    return;
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
