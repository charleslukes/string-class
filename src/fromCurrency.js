/**
 * This method returns a number representation of curremcy string
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.fromCurrency = function () {
  //regex checks if input is valid
  var regex = /^\d+\,?\d+[.]\d+$/g;

  //if true replace and converts to a number
  return regex.test(this) === false
    ? "Input should be in currency format"
    : Number(this.replace(/[,]/g, ""));
};

module.exports = String.prototype.fromCurrency;
