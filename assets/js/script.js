// Assignment Code
var generateBtn = document.querySelector("#generate");

//main function
function generatePassword() {
  var count = Number(
    prompt(
      "Please enter the amount of characters you would like in your password."
    )
  );

  //checking the number is in the range and is a number.
  if (count < 8 || count > 128 || !count) {
    alert(
      "The number you enter needs to be in the range of 8 and 128. Try again, please!"
    );
    return;
  }

  //declaring character groups variables
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()_+=~`/.|<>,\"';:'";
  var numbers = "0123456789";
  var random = []; // will contain the groups the user selected
  var genPassword = ""; // final generated password

  //ckecking for lowercase characters
  var isLetters = window.confirm(
    "CLick Ok to confirm including lowercase characters"
  );
  if (isLetters) {
    random += letters;
    genPassword += getRandom(letters); //adding at least 1 character
  }
  //checking for uppercase letters
  var isUppercase = window.confirm(
    "Click Ok to confirm including Uppercase characters"
  );
  if (isUppercase) {
    random += uppercase;
    genPassword += getRandom(uppercase);
  }
  //checking for special characters
  var isSpecialCharacters = window.confirm(
    "Click Ok to confirm including special characters"
  );
  if (isSpecialCharacters) {
    random += specialCharacters;
    genPassword += getRandom(specialCharacters);
  }
  //checking for numbers
  var isNumber = window.confirm("Click Ok to confirm including numbers ");
  if (isNumber) {
    random += numbers;
    genPassword += getRandom(numbers);
  }
  //checking to pick at least 1 group of characters
  if (random.length == 0) {
    alert(
      "The password cannot be generated. At least 1 character group needs to be shosen."
    );
    return;
  }
  // picks remaining characters for the generated password

  var startIndex = genPassword.length; //start from the last character added

  for (var i = startIndex; i < count; i++) {
    genPassword += random[Math.floor(Math.random() * random.length)];
  }
  return genPassword;
}

//returns a random character from the passed in array
function getRandom(chars) {
  var randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}

// password function to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //preventing undefined result
  if (password == undefined || null) {
    return;
  }
  passwordText.value = password;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);
