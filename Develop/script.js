// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Button function conformation logged to console
  console.log("Hey! you clicked the button!");
   // 1.prompt the user for password criteria
  prompt("How many charcters would you like your password to contain?");
  //   a. password length 0 < 28
  //   b.Lowercase, uppercase, special characters
  window.confirm("Do you want to include special charcters?");
  //  alart("Click OK to confirm including speacial charcters");
  window.confirm("Do you want to include special charcters?");
  window.confirm("Do you want to include numbers?");
  window.confirm("Do your want to include lowercase charcters");
  window.confirm("Do you want to include uppercase charcters")
  // 2.Input validation
  // 3.Genrate password
  // 4.Display password on screen
    
  return "Generated password will go here!"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
 
 /* if (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  
    passwordText.value = password;
    
    
  }
  */
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}
