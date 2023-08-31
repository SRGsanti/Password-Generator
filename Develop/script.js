// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("Enter the desired length of the password (8 to 128 characters):");
  length = parseInt(length);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return "";
  }

  var lowercase = confirm("Include lowercase characters? Click OK for Yes or Cancel for No.");
  var uppercase = confirm("Include uppercase characters? Click OK for Yes or Cancel for No.");
  var numeric = confirm("Include numeric characters?  Click OK for Yes or Cancel for No.");
  var specialChars = confirm("Include special characters?  Click OK for Yes or Cancel for No.");

  var characterSet = "";

  if (lowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric) {
    characterSet += "0123456789";
  }

  if (specialChars) {
    characterSet += "!@#$%^&*()-=_+[]{}|;:,.<>/?";
  }

  if (!characterSet) {
    alert("Error: You must select at least one character type.");
    return "";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
