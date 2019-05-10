/**
 * This method returns a number representation of currency string
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.fromCurrency = function () {
  //regex checks if input starts with a number and ends with a number
  let regex = /^\d+\,?\d+[.]\d+$/g;

  //If true replace and converts the (,) to ('').
  return regex.test(this) === false
    ? 'Input should be in currency format'
    : Number(this.replace(/[,]/g, ""));
};

module.exports = String.prototype.fromCurrency;
