/**
 * This method returns true if the input is just a digit
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.isDigit = function() {
  var regex = /^\d$/g;

  //test and ensures input is a single digit
  return regex.test(this);
};

module.exports = String.prototype.isDigit;
