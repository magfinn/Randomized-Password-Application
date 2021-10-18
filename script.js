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

const lowerCase = ("abcdefghijklmnopqrstuvwxyz");

const upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

const numbers = ("0123456789");

const characters = (".!:@#$%^&*()_+-=")

var possibleOutcomes = ("all possible outputs " + confirmCharacters + confirmNumbers + confirmUppercase + lowerCase);


//when the user clicks on generate password

//create eventListener for onclick generate password button


//input length

var confirmLength = function () {
  var promptLength = window.prompt ("How long do you want your password to be (choose a number between 9-128)");
  //if length is within parameters, move on
  if (promptLength>8 && promptLength<129) {
      confirmLength = promptLength;
      console.log (promptLength);
      confirmUppercase ();
    } else if (promptLength < 9 || promptLength >128) {
      window.alert("Please choose a number between 9-128");
      return confirmLength();
    };
  };

//input upperCase letters
var confirmUppercase = function () {
  var promptUppercase = window.prompt ("Would you like your password to include uppercase letters (yes or no)?");
  if (promptUppercase ==="yes" || promptUppercase === "Yes") {
    confirmUppercase=upperCase;
    console.log (upperCase);
    confirmNumbers();
  } else if (promptUppercase ==="No" || promptUppercase === "no")  {
      confirmUppercase=("");
      console.log (confirmUppercase);
      confirmNumbers();
  } else {
      window.alert ("Please answer 'yes' or 'no'");
      return confirmUppercase();
  }
};

//input numbers
var confirmNumbers = function() {
  var promptNumbers = window.prompt ("Would you like to include numbers in your password (yes or no)?");
  if (promptNumbers === "yes" ||  promptNumbers === "Yes") {
    confirmNumbers= (numbers);
    console.log (numbers);
    confirmCharacters();
  } else if (promptNumbers === "no" || promptNumbers === "No") {
    confirmNumbers= ("");
    console.log (confirmNumbers);
    confirmCharacters();
  } else {
    window.alert ("Please answer 'yes' or 'no'")
    return confirmNumbers ();
  }
};

//input special characters
var confirmCharacters = function () {
  var promptCharacters = window.prompt ("Would you like to include speical characters (yes or no)?");
  if(promptCharacters === "yes" || promptCharacters === "Yes") {
    confirmCharacters = characters;
    console.log (characters);
    possibleOutcomes();
    generatePassword();
  } else if (promptCharacters === "no" || promptCharacters === "No") {
    confirmCharacters = ("");
    possibleOutcomes ();
    generatePassword ();
  } else {
    window.alert ("Please answer 'yes' or 'no'");
    return confirmCharacters ();
  };
};

//generate password
var generatePassword = function () {
  window.alert ("Your password is ready!");
  print.card-body (possibleOutcomes);
}

confirmLength ();

//confirmNumbers ();

//confirmCharacters();

//generatePassword ();

//possibleOutcomes ();
