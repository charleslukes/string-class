/**
 * This method returns a length of the words in the string.
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.wordCount = function () {

  //checks if word match, word must be letters, numbers or special characters 
  //returns the number of words in the sentence.
  return this.match(/\b\w+[,.?]?/gi).length;
};
module.exports = String.prototype.wordCount;
