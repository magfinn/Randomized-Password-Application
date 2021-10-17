
// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ];
var confirmNumbers = [0,1,2,3,4,5,6,7,8,9];
var confirmCharacters = [".","!",":","@","#","$","%","^","&","*","(",")","_","+","-","="];

//when the user clicks on generate password

//create eventListener for onclick generate password button

//input length
var promptLength = window.prompt ("How long do you want your password to be (choose a number between 9-128)");

console.log (promptLength);

//if user clicks "cancel" verify that they want to cancel (how do I include this throughout?)

//if ("Cancel"){
  //var confirmCancel = 
  //window.confirm ("Are you sure you would like to cancel your password generation?");
//}

//if yes, then cancel
//if(confirmCancel) {
  //window.alert("See you next time!");
  //console.log ("cancelled");
  //how do you end the submission?
//}

//if user selects number less than 9 or greater than 128, they get an error notice
if (promptLength >128 || promptLength < 9) {
  window.alert("Please choose a number between 9-128");
  var promptLength = window.prompt ("How long do you want your password to be (choose a number between 9-128)");
}

//input upperCase letters
var promptUppercase = window.prompt ("Should we include uppercase letters?")

if (promptUppercase ==="yes" || promptUppercase === "Yes") {
  console.log (upperCase);
}

//input numbers
var promptNumbers = window.prompt ("Would you like to include numbers in your password? (please type 'yes' or 'no')");

if (promptNumbers === "yes" ||  promptNumbers === "Yes") {
  console.log (confirmNumbers);
}

//input special characters
var promptCharacters = window.prompt ("How about special characters (yes or no)");

if(promptNumbers === "yes" || promptNumbers === "Yes") {
console.log (confirmCharacters);
}

console.log ("all possible outputs" + confirmCharacters + confirmNumbers + upperCase + alphabet)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//All possible options//
function writePassword() {
  (upperCase + alphabet + confirmCharacters + confirmNumbers);
} ;
var password = ("Your password is + writePassword")

//write all possible outcomes - haven't figured out how to pick random ones yet
writePassword ()

//display password
document.write=password




//use a for loop to create all possible options//


  
