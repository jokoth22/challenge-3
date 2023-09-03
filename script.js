// Assignment code here

//What happens if they say no to all?
//code is only works if all responses are yes -


//Asking user for password length; should I use var or let?
let passwordLength = prompt("How many characters would you like your password to be? Choose between 8-128");
if (passwordLength < 8 || passwordLength >128) {
  console.log("Please enter a value between 8-128");
  passwordLength = prompt("1. How many characters would you like your password to be? Choose between 8-128");
}

//ask user for password case
var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let upper= prompt("2. Would you like your password to include uppercase letters? (Y/N)");

//Need to check for appropriate responses
if (upper.toLowerCase() != "n" || upper.toLowerCase() != "y"){
  console.log("Please enter Y or N");
  upper= prompt("2b. Would you like your password to include uppercase letters? (Y/N)");
}

//removing all uppercase letters from the string
if (upper.toLowerCase()=== "n"){
  for (var i=0; i<chars.length; i++){
    if (chars[i] === chars[i].toUppercase() ){
      chars=chars.substring(0, i-1) + chars.substring(i+1);
    }
  }
}

//ask user if they want lower case
let lower= prompt("3. Would you like your password to include lowercase lettters? (Y/N)");

//Need to check for appropriate responses
if (lower.toLowerCase() != "n" || lower.toLowerCase() != "y"){
  console.log("Please enter Y or N");
  lower= prompt("3b. Would you like your password to include uppercase letters? (Y/N)");
}

//removing all lowercase letters from the string
if (lower.toLowerCase()=== "n"){
  for (var i=0; i<chars.length; i++){
    if (chars[i] === chars[i].toLowercase() ){
      chars=chars.substring(0, i-1) + chars.substring(i+1);
    }
  }
}


//ask user if they desire numbers
let numbers= prompt("4. Would you like your password to include numbers? (Y/N)");

//Need to check for appropriate responses
if (numbers.toLowerCase() != "n" || numbers.toLowerCase() != "y"){
  console.log("Please enter Y or N");
  numbers= prompt("4b. Would you like your password to include uppercase letters? (Y/N)");
}

//removing all numbers from the string
if (numbers.toLowerCase()=== "n"){
  for (var i=0; i<chars.length; i++){
    if (chars[i] == 1 || chars[i] == 2 || chars[i] == 3 || chars[i] == 4 || chars[i] == 5 || chars[i] == 6 || chars[i] == 7 || chars[i] == 8 || chars[i] == 9 || chars[i] == 0 ){
      chars = chars.substring(0, i-1) + chars.substring(i+1);
    }
  }
}

//ask user if they desire special characters
let special= prompt("5. Would you like your password to include special characters? (Y/N)");

//Need to check for appropriate responses
if (special.toLowerCase() != "n" || special.toLowerCase() != "y"){
  console.log("Please enter Y or N");
  special= prompt("5b. Would you like your password to include special characters? (Y/N)");
}

//removing all special characters from the string !@#$%^&*()
if (special.toLowerCase()=== "n"){
  for (var i=0; i<chars.length; i++){
    if (chars[i] == "!" || chars[i] == "@" || chars[i] == "#" || chars[i] == "$"|| chars[i] == "%" || chars[i] == "^" || chars[i] == "&" || chars[i] == "*" || chars[i] == "(" || chars[i] == ")" ){
      chars = chars.substring(0, i-1) + chars.substring(i+1);
    }
  }
}

function generatePassword (){
  var password="";
  for (var i=0; i<passwordLength; i++){
    var random= Math.floor(Math.random()*chars.length);
    password += chars.substring(random, random+1);
  }
  return password;
}

//create generatePassword() function
//for loop to create password
//need Math.random to create password

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
