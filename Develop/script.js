// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Button function conformation logged to console
  console.log("Hey! you clicked the button!")
 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
