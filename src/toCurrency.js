/**
 * This method return currency representation of String
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.toCurrency = function () {
  //regex checks that input is only a number with a dot in it.
  var regex = /\b(?!\D)([0-9]+\.[0-9]+)\b/g;

  //checks for valid input and return expected result
  return regex.test(this)
  //places a comma at every three interval from the dot in the number
    ? this.replace(/\d(?=(\d{3}){1,}(\.))/g, "$&,")
    : "Input must in currency format";
};

module.exports = String.prototype.toCurrency;
