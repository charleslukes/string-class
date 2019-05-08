/**
 * This method returns a length of the words in the string.
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.wordCount = function() {
  //returns the number of words in the string
  return this.match(/\b\w+[,.?]?/gi).length;
};
module.exports = String.prototype.wordCount;
