let toUpper = require('./toUpper');
let toLower = require('./toLower');
/**
 * This method alternate the character of a string
 * 
 * author: charles-ebuka-chiakwa
 */

 String.prototype.inverseCase = function () {
   let invertString = '';

   //looping through all input characters to access them one by one
   for (let index = 0; index < this.length; index++) {
     //holds the charcode value of the current character
     let characterCode = this.charCodeAt(index);

     //check if the charcode value of the character is between 97 and 122
     if(characterCode >= 97 && characterCode <= 122 ){
       //uses the toUpper method to make character Uppercase
       invertString += this[index].toUpper();
     }
     else{
       //uses the toLower method to make character Lowercase
       invertString += this[index].toLower();
     }
   }
   //return the inverted string as output
   return invertString;
 }

 module.exports = String.prototype.inverseCase;
