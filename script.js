// Assignment code here
let passLength = 0;
let letts = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let nums = ['0','1','2','3','4','5','6','7','8','9'];
let special = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','{','[',']','}',';',':','<','>',',','.','?','/'];
let randomPass = [];

passLength = prompt("how long is your new password?");
if (passLength < 8) {
  alert("please enter a longer password.");
  document.location.reload();
} else if (passLength > 128) {
  alert("please enter a shorter password.");
  document.location.reload();
} else {
  alert("your new password will be " + passLength + " characters long.");
}

let confirmLetts = confirm("do you want lowercase letters in your new password?");
if (confirmLetts){ 
  alert("okay, lowercase letters will be in your password.");
} else { 
  alert("okay, no lowercase letters will be in your new password."); 
}

let confirmCaps = confirm("do you want uppercase letters in your new password?");
if (confirmCaps){
  alert("okay, uppercase letters will be in your password.");
} else {
  alert("okay, no uppercase letters will be in your new password.");
}

let confirmNums = confirm("do you want numbers in your new password?");
if (confirmNums){
  alert("okay, numbers will be in your password.");
} else {
  alert("okay, no numbers will be in your new password.");
}

let confirmSpecial = confirm("do you want special characters in your new password?");
if (confirmSpecial){
  alert("okay, special characters will be in your password.");
} else {
  alert("okay, no special characters will be in your new password.");
}

if (!confirmLetts && !confirmCaps && !confirmNums && !confirmSpecial) {
  alert("uh.. your password must have characters in it...");
  document.location.reload();
}

function generatePassword(){

    if (confirmLetts) {
       randomPass = randomPass.concat(letts);
    };

    if (confirmCaps) {
      randomPass = randomPass.concat(caps);
    };

    if (confirmNums) {
      randomPass = randomPass.concat(nums);
    };

    if (confirmSpecial) {
      randomPass = randomPass.concat(special);
    };

    let password = "";
      for (let i = 0; i < passLength; i++) {
        password += randomPass[Math.floor(Math.random() * (passLength.length))];
      }
      return password;
  }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
