let toUpper = require('./toUpper');
let toLower = require('./toLower');
/**
 * This method alternate the character of a string
 * 
 * author: charles-ebuka-chiakwa
 */

 String.prototype.inverseCase = function() {
   var invertString = '';

   //iterate through each character of string
   for (var index = 0; index < this.length; index++) {
     //holds the charcode value of the current character
     var characterCode = this.charCodeAt(index);

     //check the value of the character
     if(characterCode >= 97 && characterCode <= 122 ){
       //uses the toUpper method already created
       invertString += this[index].toUpper();
     }
     else{
       //uses the toLower method already created
       invertString += this[index].toLower();
     }
   }
   //return the inverted string output
   return invertString;
 }

 module.exports = String.prototype.inverseCase;