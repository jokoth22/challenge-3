//initialized variables to create password
var options = "";
var count = 0;

//initialized password character options as an object
var choices = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  nums: '0123456789',
  special: '!@#$%^&*()'
};

//alert informing user they will be asked a series of questions about creating a password

//Ask user for length of password while checking to if input is a numerical value between 8-128
let passwordLength = prompt("How many characters would you like your password to have? Choose between 8-128?");
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Invalid input. Please enter a number between 8-128.");
}
//To do: use confirm box to ask yes or no for options && create temp variable
//ask user for uppercase letters
let includeUpper = confirm("Would you like your password to include uppercase letters? (Y/N)\n Y - OK or N-Cancel.");
if (includeUpper) {
  options += choices.upper;
  count++;
}
console.log(count);
console.log(options);
//ask user for lowercase letters
let includeLower = confirm("Would you like your password to include lowercase letters? (Y/N)\n Y - OK or N-Cancel.");
if (includeLower) {
  options += choices.lower;
  count++;
}
console.log(count);
console.log(options);
//ask user for numbers letters
let includeNumbers = confirm("Would you like your password to include numbers? (Y/N)\n Y - OK or N-Cancel.");
if (includeNumbers) {
  options += choices.nums;
  count++;
}
console.log(count);
console.log(options);
//ask user for special letters
let includeSpecial = confirm("Would you like your password to include special characters? (Y/N)\n Y - OK or N-Cancel.");
if (includeSpecial) {
  options += choices.special;
  count++;
}
console.log(count);
console.log(options);

//check user choose at least one character type is chosen or create random password from all
if (count === 0) {
  options = choices.upper + choices.lower + choices.nums + choices.special;
  console.log(options);
}

//generates password with identified characters and length as input
function generatePassword(options, length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * options.length);
    password += options.charAt(randomIndex);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(options, passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);