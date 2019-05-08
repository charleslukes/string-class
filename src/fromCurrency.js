/**
 * This method returns a number representation of curremcy string
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.fromCurrency = function() {
  let regex = /^\d+\,?\d+[.]\d+$/g;
  
  return (regex.test(this) === false)
    ? "Input should be in currency format"
    : Number(this.replace(/[,]/g, ""));
};

