let toUpper = require("./toUpper");

/**
 *This method uppercase the firt character of every word.
 * Using the already created toUpper method.
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.ucFirst = function() {
  //capitalize the first character of the word
  let capitalizedChar = this[0].toUpper();

  //concate the capitalized character with the new word
  //the slice remove the character at index 0.
  capitalizedChar += this.slice(1);

  //returns the ucFirst result
  return capitalizedChar;
};

module.export = String.prototype.ucFirst;