// Assignment code here
//output is not correct i.e. yes upper and no the rest
//accepting values outside 8 and 128

//Asking user for password length; should I use var or let?
let passwordLength = prompt("How many characters would you like your password to have? Choose between 8-128?");
while (passwordLength < 8 || passwordLength >128) {
  console.log("Please enter a value between 8-128");
  passwordLength;
}

//create function to answer questions --> checks for correct format
function getResponse(question) {
  let response= prompt(question);
  while (response.toLowerCase() !== "n" && response.toLowerCase() !== "y") {
    console.log("Please enter Y or N");
    response= prompt(question);
  }
  return response;
}

let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let upper= getResponse("2. Would you like your password to include uppercase letters? (Y/N)");
if (upper.toLowerCase()=== "n"){
  for (var i=0; i<chars.length; i++){
    if (chars[i] === chars[i].toUpperCase() ){
      chars=chars.substring(0, i-1) + chars.substring(i+1);
    }
  }
}

//ask user if they want lower case
let lower= getResponse("3. Would you like your password to include lowercase lettters? (Y/N)");

//removing all lowercase letters from the string
if (lower.toLowerCase()=== "n"){
  for (var i=0; i<chars.length; i++){
    if (chars[i] === chars[i].toLowerCase() ){
      chars=chars.substring(0, i-1) + chars.substring(i+1);
    }
  }
}

//ask user if they desire numbers
let numbers= getResponse("4. Would you like your password to include numbers? (Y/N)");

//removing all numbers from the string
if (numbers.toLowerCase()=== "n"){
  for (var i=0; i<chars.length; i++){
    if (chars[i] == 1 || chars[i] == 2 || chars[i] == 3 || chars[i] == 4 || chars[i] == 5 || chars[i] == 6 || chars[i] == 7 || chars[i] == 8 || chars[i] == 9 || chars[i] == 0 ){
      chars = chars.substring(0, i-1) + chars.substring(i+1);
    }
  }
}
//ask user if they desire special characters
let special= getResponse("5. Would you like your password to include special characters? (Y/N)");

//removing all special characters from the string !@#$%^&*()
if (special.toLowerCase()=== "n"){
  for (var i=0; i<chars.length; i++){
    if (chars[i] == "!" || chars[i] == "@" || chars[i] == "#" || chars[i] == "$"|| chars[i] == "%" || chars[i] == "^" || chars[i] == "&" || chars[i] == "*" || chars[i] == "(" || chars[i] == ")" ){
      chars = chars.substring(0, i-1) + chars.substring(i+1);
    }
  }
}

//create generatePassword() function
//for loop to create password
//need Math.random to create password
function generatePassword (){
  let password="";
  for (let i=0; i<passwordLength; i++){
    let random= Math.floor(Math.random()*chars.length);
    password += chars.charAt(random);
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
