
var generateBtnEl = document.getElementById("generate");
var passwordEl = document.getElementById("password");

//define characters for password
const lowerCaseConst = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseConst = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersConst = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const charactersConst = ['"', '.', '!', ':', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=']


var passWordLength;

var useUpper = false;
var useNumbers = false;
var useSpecial = false;

//window prompts//
var promptLength = function () {
  passWordLength = parseInt(window.prompt("How long do you want your password to be (choose a number between 9-128)?"));
  if (isNaN(passWordLength)) {
    window.alert("Pleae use only numbers");
    passWordLength = parseInt(window.prompt("How long do you want your password to be (choose a number between 9-128)?"))
  }
  while (passWordLength < 9 || passWordLength > 128) {
    window.alert("Please choose a number between 9-128");
    passWordLength = parseInt(window.prompt("How long do you want your password to be (choose a number between 9-128)?"));
  }
};

var promptUppercase = function () {
  useUpper = window.confirm("Would you like your password to include uppercase letters? (select ok for yes and cancel for no)");
};
var promptNumbers = function () {
  useNumbers = window.confirm("Would you like to incude numbers in your password? (select ok for yes and cancel for no)");
};
var promptCharacters = function () {
  useSpecial = window.confirm("Would you like to include special characters (such as !@#$%)? (select ok for yes and cancel for no)");
};
// var prompts= [promptLength, promptNumbers, promptCharacters, promptUppercase];

function generatePassword() {
  promptLength();

  promptUppercase();
  promptNumbers();
  promptCharacters();

  const passWordLetters = [lowerCaseConst];

  if (useUpper) {
    passWordLetters.push(upperCaseConst);
  }
  if (useNumbers) {
    passWordLetters.push(numbersConst);
  }
  if (useSpecial) {
    passWordLetters.push(charactersConst);
  }

  var password = "";

  // run as long as the user wants their password to be
  for (let i = 0; i < passWordLength; i++) {
    const charactersArray = passWordLetters[i % passWordLetters.length];
    const randomCharacter = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    password += randomCharacter;
  }

  passwordEl.textContent = password;
}

document.getElementById("generate").addEventListener("click", generatePassword);