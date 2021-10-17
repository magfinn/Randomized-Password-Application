
// Assignment Code
var generateBtn = document.querySelector("#generate");


//when the user clicks on generate password


//create eventListener for onclick generate password button

//input length
var promptLength = window.prompt ("How long do you want your password to be (choose a number between 9-128)");

console.log (promptLength);

//if user clicks "cancel" verify that they want to cancel (how do I include this throughout?)
if ("Cancel"){
  var confirmCancel = 
  window.confirm ("Are you sure you would like to cancel your password generation?");
}
//if yes, then cancel
if(confirmCancel) {
  window.alert("See you next time!");
  console.log ("cancelled");
  //how do you end the submission?
}

//if user selects number less than 9 or greater than 128, they get an error notice
if (promptLength >128 || promptLength < 9) {
  window.alert("Please choose a number between 9-128");
  var promptLength = window.prompt ("How long do you want your password to be (choose a number between 9-128)");
}

//input numbers
var promptNumbers = window.prompt ("Would you like to include numbers in your password?");

console.log (promptNumbers);

//if user selects "yes" then exclude numbers from password
if(promptNumbers = "yes" || promptNumbers = "Yes");
console.log ("confirmNumbers");

//if user selects "no" then include numbers in password - maybe I don't need to create a false statement?


//input special characters
var promptCharacters = window.prompt ("Would you like to include special characters '&!#%' in your password?");

console.log (promptCharacters);

//if user selects "yes" then include special characters from password
if(promptNumbers = "yes" || promptNumbers = "Yes");
console.log ("confirmCharacters");

//if user selects "no" then exclude special characters from password - maybe I don't need to include a false answer?










// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var password = ("Your password is")
//how to concat a random password)



//display password
document.write=password


