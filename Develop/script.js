// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

   function generatePassword(){
    console.log("Look! You've clicked the Button!!");



    return" User's Generated Password Will Go Here! ";
   }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
