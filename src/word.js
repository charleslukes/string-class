/**
 * This method returns a list of the words in the string, as an Array
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.word = function () {
  
  //return an array of words that contains both letters, numbers and some special characters
  return this.match(/\b\w+[,.?]?/gi);
};
module.exports = String.prototype.word;
