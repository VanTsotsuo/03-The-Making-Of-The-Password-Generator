// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Button function conformation logged to console
  console.log("Hey! you clicked the button!")
   // 1.prompt the user for password criteria
  //   a. password length 0 < 28
  //   b.Lowercase, uppercase, special characters
  // 2.Input validation
  // 3.Genrate password
  // 4.Display password on screen
    
  return "Generated password will go here!"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
