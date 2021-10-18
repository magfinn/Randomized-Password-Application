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

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var confirmUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];

var confirmNumbers = [0,1,2,3,4,5,6,7,8,9];

var confirmCharacters = [".","!",":","@","#","$","%","^","&","*","(",")","_","+","-","="];

var possibleOutcomes = ("all possible outputs" + confirmCharacters + confirmNumbers + confirmUppercase + alphabet);

function generatePassword () {
  console.log (possibleOutcomes);
  window.alert ("your password is ready");
};

function password () {
  numbers + alphabet + characters + upperCase;
  document.write (password);
};





//when the user clicks on generate password

//create eventListener for onclick generate password button

//input length

var length = function () {
  var promptLength = window.prompt ("How long do you want your password to be (choose a number between 9-128)");
  //if length is within parameters, move on
  if (promptLength>8 && promptLength<129) {
    console.log (promptLength);
    upperCase ();
    } else if (promptLength < 9 || promptLength >128) {
    window.alert("Please choose a number between 9-128");
    return length();
    };
  };

//input upperCase letters
var upperCase = function () {
  var promptUppercase = window.prompt ("Should we include uppercase letters?");
  if (promptUppercase ==="yes" || promptUppercase === "Yes") {
    upperCase=confirmUppercase;
    console.log (upperCase);
  } else if (promptUppercase ==="No" || promptUppercase === "no") {
    upperCase=[];
    console.log (upperCase);
  } else {
    window.alert ("Please answer 'yes' or 'no'");
    return upperCase ();
  }
};

//input numbers
var numbers = function () {
  var promptNumbers = window.prompt ("Would you like to include numbers in your password? (please type 'yes' or 'no')");
  if (promptNumbers === "yes" ||  promptNumbers === "Yes") {
    numbers= confirmNumbers;
    console.log (confirmNumbers);
  } else if (promptNumbers === "no" || promptNumbers === "No") {
    numbers= [];
    console.log (numbers);
  } else {
    window.alert ("Please answer 'yes' or 'no'")
    return numbers ();
  }
};

//input special characters
var characters = function () {
  var promptCharacters = window.prompt ("How about special characters (yes or no)");
  if(promptCharacters === "yes" || promptCharacters === "Yes") {
    characters = confirmCharacters;
    console.log (confirmCharacters);
    generatePassword ();
  } else if (promptCharacters === "no" || promptCharacters === "No") {
    characters = [];
  } else {
    window.alert ("Please answer 'yes' or 'no'");
    return characters ();
  };
};

length ();

numbers ();

characters();

generatePassword ();

password ();
