let toUpper = require('./toUpper');
let toLower = require('./toLower');
/**
 * This method alternate the character of a string
 * 
 * author: charles-ebuka-chiakwa
 */

 String.prototype.inverseCase = function() {
   let alternateString = '';

   //iterate through each character of string
   for (let index = 0; index < this.length; index++) {
     //holds the charcode value of the current character
     let characterCode = this.charCodeAt(index);

     //check the value of the character
     if(characterCode >= 97 && characterCode <= 122 ){
       //uses the toUpper method already created
       alternateString += this[index].toUpper();
     }
     else{
       //uses the toLower method already created
       alternateString += this[index].toLower();
     }
   }
   //return the alternated string output
   return alternateString;
 }

console.log('Mr Ben'.inverseCase());
