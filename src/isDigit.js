/**
 * This method returns true if the input is just a digit
 * 
 * author: charles-ebuka-chiakwa
 */

 String.prototype.isDigit = function() {
   var regex = /^\d$/g;
   return regex.test(this);
 } 