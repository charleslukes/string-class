/**
 * This method checks if a string is a question or not using regex
 * 
 * author: charles-ebuka-chiakwa
 */

 String.prototype.isQuestion = function() {
   let regex = /[?]/g
   return regex.test(this)? true: false;
 }

 module.exports = String.prototype.isQuestion;