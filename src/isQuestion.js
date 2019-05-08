/**
 * This method checks if a string is a question or not using regex
 * 
 * author: charles-ebuka-chiakwa
 */

 String.prototype.isQuestion = function() {
   var regex = /[?]/g

   //test the word returns true if test pass else false;
   return regex.test(this);
 }

 module.exports = String.prototype.isQuestion;