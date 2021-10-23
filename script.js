
var generateBtnEl = document.getElementById("generate");
var passwordEl = document.getElementById ("password");

//define characters for password
//yes answers to prompts add the array to the password string, no answers add ""//
const lowerCaseConst = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCaseConst = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbersConst = ['0','1','2','3','4','5','6','7','8','9'];
const charactersConst = ['"','.','!',':','@','#','$','%','^','&','*','(',')','_','+','-','=']


//window prompts//
var promptLength = function () {
  window.prompt ("How long do you want your password to be (choose a number between 9-128)")
};
var promptUppercase = function () {
  window.prompt ("Would you like your password to include uppercase letters (yes or no)?");
};
var promptNumbers = function () {
  window.prompt ("Would you like to incude numbers in your password (yes or no)?");
};
var promptCharacters = function () {
    window.prompt ("Would you like to include special characters (such as !@#$%)?");
};

//evaluate length
var length = function () {
  promptLength()
  if (promptLength < 9 || promptLength >128) {
    window.alert("Please choose a number between 9-128");
  } else {upperCaseValue()};
};

//evaluate uppercase
var upperCaseValue = function() {
promptUppercase();
if (promptUppercase === "yes" || promptUppercase === "Yes") {
  var uppercase = upperCaseConst;
} else if (promptUppercase === "no" || promptUppercase === "No") {
 var uppercase = "";
  };
  console.log(uppercase);
  numberValue ();
};

//evaluate numbers
var numberValue = function () {
  promptNumbers();
  if (promptNumbers === "yes" ||  promptNumbers === "Yes") {
        var numbers = numbersConst;
  } else if (promptNumbers == "no" ||       promptNumbers == "No") {
    var numbers = "";
  };
  charactersValue();
};

//evaluate special characters
var charactersValue = function () {
 promptCharacters();
  if (promptCharacters === "yes" ||  promptCharacters === "Yes") {
   var characters = charactersConst;
  } else if (promptCharacters == "no" || promptCharacters == "No") {
    var characters = "";
  };
  generatePassword();
};


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
  length();
});
