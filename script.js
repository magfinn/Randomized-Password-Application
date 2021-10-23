
var generateBtnEl = document.getElementById("generate");
var passwordEl = document.getElementById ("password");

//define characters for password
//yes answers to prompts add the array to the password string, no answers add ""//
const lowerCaseConst = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCaseConst = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbersConst = ['0','1','2','3','4','5','6','7','8','9'];
const charactersConst = ['"','.','!',':','@','#','$','%','^','&','*','(',')','_','+','-','='];

//window prompts//
//prompt length
var promptLength = function () {
  window.prompt ("How long do you want your password to be (choose a number between 9-128)");
  if (promptLength < 9 || promptLength >128) {
    window.alert("Please choose a number between 9-128");
  } else {promptUppercase()};
};


//prompt case value
var promptUppercase = function () {
  window.prompt ("Would you like your password to include uppercase letters (yes or no)?");
  if (promptUppercase === "yes" || promptUppercase === "Yes") {
    promptUppercase = upperCaseConst;
  } else if (promptUppercase === "no" || promptUppercase === "No") {
    promptUppercase = ""
    };
    promptNumbers();
    console.log (promptUppercase);
};
//prompt numbers
var promptNumbers = function () {
  window.prompt ("Would you lie to incude numbers in your password (yes or no)?");
  if (promptNumbers === "yes" ||  promptNumbers === "Yes") {
        promptNumbers = numbersConst;
  } else if (promptNumbers == "no" || promptNumbers == "No") {
    promptNumbers = "";
  };
  console.log (promptNumbers);
  promptCharacters();
};

//prompt special characters
var promptCharacters = function () {
  window.prompt ("Would you like to include special characters (such as !@#$%)?");
  if (promptNumbers === "yes" ||  promptNumbers === "Yes") {
    promptCharacters = charactersConst;
  } else if (promptNumbers == "no" || promptNumbers == "No") {
    promptCharacters = "";
  };
  console.log(promptCharacters);
  generatePassword();
};
var numbers = promptNumbers;
var characters = promptCharacters;
var uppercase = promptUppercase;

var generatePassword = function() {
  (lowerCaseConst.concat({numbers, characters, uppercase}));
  var randomize = function () {
    for (i =0; i<promptLength.length;i++) {
      password += generatePassword.charAt(
      Math.floor(Math.random()) * passwordString);
      };
}; console.log (password);
};

document.getElementById("generate").addEventListener("click", function () {
  promptLength();
});
