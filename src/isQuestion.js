/**
 * This method checks if a string is a question or not using regex
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.isQuestion = function () {
  let regex = /[?]/g;

  //test the word returns true if word contains (?) else returns false;
  return regex.test(this);
};

module.exports = String.prototype.isQuestion;
