// Assignment code here
var finalpassword="";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


    


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
function generatePassword(){
    var password="";
    var LowerCase= "acdefghijklmnopqrstuvwxyz";
    var UpperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var SpecialCharacters= "!@#$";
    var Numbers= "1234567890";
    var passwordlength= window.prompt("How many characters would you like your password to be?");
    if (passwordlength < 128 && passwordlength > 8)
    {
        var lowercase= window.confirm("Would you like to ahve lowercase letters");
       var uppercase= window.confirm("Would you like to have uppercase letters");
       var specialcharacters= window.confirm("Would you like to have special characters");
       var numbers= window.confirm("Would you like to have numbers");

       if(lowercase===true){
        finalpassword+= LowerCase;
       }
       if(uppercase===true){
        finalpassword+= UpperCase;
       }
       if(specialcharacters===true){
        finalpassword+= SpecialCharacters;
       }
       if(numbers===true){
        finalpassword+= Numbers;
       }
       for (var i =0; i<passwordlength; i++)
    {
    //var index=Math.floor(Math.random()*finalpassword.length)
    password += finalpassword.charAt(Math.floor(Math.random()*finalpassword.length));
    }
    return password; 
    
    }
   else{
    window.alert("Choose a number between 8 and 128");
   }
   console.log(password);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
