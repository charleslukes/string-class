/**
 * This method return currency representation of String
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.toCurrency = function() {
  //regex input validation
  var regex = /\b(?!\D)([0-9]+\.[0-9]+)\b/g;

  //checks for valid input and return expected result
  return regex.test(this)
    ? this.replace(/\d(?=(\d{3}){1,}(\.))/g, "$&,")
    : "Input must in currency format";
};

module.exports = String.prototype.toCurrency;