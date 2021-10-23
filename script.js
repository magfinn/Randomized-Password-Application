
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector ('#password');
var password = 
generatePassword () = password;
promptLength () = length;
promptUppercase ()= uppercase;
promptNumbers () = numbers;
promptCharacters () = characters;
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
};

//prompt case value
var promptUppercase = function () {
  window.prompt ("Would you like your password to include uppercase letters (yes or no)?");
  if (promptUppercase ==="yes" || promptUppercase === "Yes") {
    promptUppercase = upperCaseConst;
    console.log (promptUppercase)
  } else if (promptUppercase ==="No" || promptUppercase === "no")  {
      promptUppercase = ("");
  //if user does not provide a yes or no answer, alert and send back to prompt
  } else {
      window.alert ("Please answer 'yes' or 'no'");
      return;
};
//prompt numbers
var promptNumbers = function () {
  window.prompt ("Would you lie to incude numbers in your password (yes or no)?");
  if (promptNumbers === "yes" ||  promptNumbers === "Yes") {
    promptNumbers = numbersConst;
    console.log (promptNumbers);
  } else if (promptNumbers == "no" || promptNumbers == "No") {
    promptNumbers = "";
  };
};
//prompt special characters
var promptCharacters = function () {
  window.prompt ("Would you like to include special characters (such as !@#$%)?");
  if (promptNumbers === "yes" ||  promptNumbers === "Yes") {
    promptCharacters = charactersConst;
    console.log (promptNumbers);
  } else if (promptNumbers == "no" || promptNumbers == "No") {
    promptCharacters = "";
  };
};
var prompts = [promptLength, promptNumbers, promptUppercase, promptCharacters];
var passwordString = "promptCharacters, promptNumbers, promptUppercase, lowerCase";

var generatePassword = function () {
    for (let i= 0; i < length; i++) {
      password += passwordString.charAt(
      Math.floor(Math.random()) * passwordString);
      };
      console.log(generatePassword);
};

//click button to begin prompts//

var startPrompts = function () {
 for (let i = 0; i < prompts.length; i++) {
   prompts = array[i];
 } if (i<prompts.length){
   generatePassword ();
 } console.log (prompts [i]);
};

generateBtn.addEventListener("click", startPrompts())