//if (promptLength = Cancel){
  //var confirmCancel = 
  //window.confirm ("Are you sure you would like to cancel your password generation?");
  
//if yes, then cancel
//if(confirmCancel) {
  //window.alert("See you next time!");
  //console.log ("cancelled");
//} else {
  //promptUppercase;
//}
  //how do you end the submission?
//}


// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var confirmUppercase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ];

var confirmNumbers = [0,1,2,3,4,5,6,7,8,9];

var confirmCharacters = [".","!",":","@","#","$","%","^","&","*","(",")","_","+","-","="];

var possibleOutcomes = ("all possible outputs" + confirmCharacters + confirmNumbers + confirmUppercase + alphabet);

function generatePassword () {
  console.log (possibleOutcomes);
  window.alert ("your password is ready");
}

function password() {
password= Math.floor (Math.random()* length);
console.log (password);
}




//when the user clicks on generate password

//create eventListener for onclick generate password button

//input length

var length = function () {
  var promptLength = window.prompt ("How long do you want your password to be (choose a number between 9-128)");
  //if length is within parameters, move on
  if (promptLength>8 && promptLength<129) {
    console.log (promptLength);
    upperCase ();
  } else {
    window.alert("Please choose a number between 9-128");
    length();
  }
}

//input upperCase letters
var upperCase = function () {
  var promptUppercase = window.prompt ("Should we include uppercase letters?");
  if (promptUppercase ==="yes" || promptUppercase === "Yes") {
    console.log (confirmUppercase);
  } else {
    numbers();
  }
}

//input numbers
var numbers = function () {
  var promptNumbers = window.prompt ("Would you like to include numbers in your password? (please type 'yes' or 'no')");
  if (promptNumbers === "yes" ||  promptNumbers === "Yes") {
    console.log (confirmNumbers);
  } else {
    characters();
  }
}

//input special characters
var characters = function () {
  var promptCharacters = window.prompt ("How about special characters (yes or no)");
  if(promptCharacters === "yes" || promptCharacters === "Yes") {
    console.log (confirmCharacters);
    generatePassword ();
  } else {
    generatePassword();
  }
} 

length ();

numbers ();

characters();

generatePassword ();

password ();
