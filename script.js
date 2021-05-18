// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatedPasswordText = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPasswordText;
}


var confirmLength = "";
var selectedOptions = [];


function generatePassword() {

  
  /*---------------------------This is Prompt for password Length;------------------------------*/
  confirmLength = (prompt("How many characters you'd like, must be 8 - 128 characters"));
  while(confirmLength <= 7 || confirmLength >= 129){
    //alert("your password must be 8 - 128 character XXX");
    confirmLength = (prompt("You have a wrong input. Please pick between 8 - 128 characters"));
  }

  var lowerCaseChars, upperCaseChars, numericChars, specialChars;


while(selectedOptions.length == 0){

    lowerCaseChars = (prompt("Do you want to use lowercase characters? Press Y for YES and N for NO"));
    while(!(lowerCaseChars.toUpperCase() == 'Y' || lowerCaseChars.toUpperCase() == 'N')){
      lowerCaseChars = (prompt("Wrong input. Do you want to use lowercase characters? Press Y for YES and N for NO"));
    }

    if(lowerCaseChars.toUpperCase() == 'Y'){
      selectedOptions.push("lowerCaseChars");
    }

    upperCaseChars = (prompt("Do you want to use uppercase characters? Press Y for YES and N for NO"));
    while(!(upperCaseChars.toUpperCase() == 'Y' || upperCaseChars.toUpperCase() == 'N')){
      upperCaseChars = (prompt("Wrong input. Do you want to use uppercase characters? Press Y for YES and N for NO"));
    }


    if(upperCaseChars.toUpperCase() == 'Y'){
      selectedOptions.push("upperCaseChars");
    }

    numericChars = (prompt("Do you want to use numeric characters? Press Y for YES and N for NO"));
    while(!(numericChars.toUpperCase() == 'Y' || numericChars.toUpperCase() == 'N')){
      numericChars = (prompt("Wrong input. Do you want to use numeric characters? Press Y for YES and N for NO"));
    }

    if(numericChars.toUpperCase() == 'Y'){
      selectedOptions.push("numericChars");
    }

    specialChars = (prompt("Do you want to use special characters? Press Y for YES and N for NO"));
    while(!(specialChars.toUpperCase() == 'Y' || specialChars.toUpperCase() == 'N')){
      specialChars = (prompt("Wrong input. Do you want to use special characters? Press Y for YES and N for NO"));
    }

    if(specialChars.toUpperCase() == 'Y'){
      selectedOptions.push("specialChars");
    }

    if(lowerCaseChars.toUpperCase() == 'N' && upperCaseChars.toUpperCase() == 'N' &&  numericChars.toUpperCase() == 'N' && specialChars.toUpperCase() == 'N'){
      alert("At least one of the options must be YES.")
      selectedOptions = [];
    }else{
      alert("Successful choices")
      console.log(selectedOptions);
      for(var i = 0; i < selectedOptions.length; i++){
        generateChars(i);
      }

      for(var x = generatedPasswordText.length; x < parseInt(confirmLength);x++){
        generateChars((Math.floor((Math.random() * selectedOptions.length) + 1)) - 1);
       }

       console.log("YOUR PASSWORD GENERATED IS: " + generatedPasswordText);

      }//else 



    

  }//while loop main
}



function genLowerCaseChars(){
  var strLowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numRandom = Math.floor((Math.random() * strLowerCase.length) + 1);

  return strLowerCase.substring(numRandom,numRandom - 1);
}


function genNumericChars(){
  var strNumChars = "0123456789";
  var numRandom = Math.floor((Math.random() * strNumChars.length) + 1);

  return strNumChars.substring(numRandom,numRandom - 1);
}


function genSpecialChars(){
  var strSpecialChars = "!@#$%&*";
  var numRandom = Math.floor((Math.random() * strSpecialChars.length) + 1);

  return strSpecialChars.substring(numRandom,numRandom - 1);
}


function generateChars(i){
     console.log(i);
     if(selectedOptions[i] == "lowerCaseChars"){
      generatedPasswordText = generatedPasswordText + genLowerCaseChars();
     }else if(selectedOptions[i] == "upperCaseChars"){
      generatedPasswordText = generatedPasswordText + genLowerCaseChars().toUpperCase();
     }else if(selectedOptions[i] == "numericChars"){
      generatedPasswordText = generatedPasswordText + genNumericChars();
     }else if(selectedOptions[i] == "specialChars"){
      generatedPasswordText = generatedPasswordText + genSpecialChars();
     }

}
generateBtn.addEventListener("click", writePassword);