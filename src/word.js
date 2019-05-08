/**
 * This method returns a list of the words in the string, as an Array
 * 
 * author: charles-ebuka-chiakwa
 */

 String.prototype.word = function() {
   return this.match(/\b\w+[,.?]?/gi)
 }
 