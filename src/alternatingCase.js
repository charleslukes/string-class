let toUpper = require("./toUpper");
let toLower = require("./toLower");
/**
 * This method alternates the string its acalled with.
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.alternatingCase = function () {
  var alternatesString = "";

  //iterate overeach character of the input
  for (var index = 0; index < this.length; index++) {
    //converts second character to upper case
    if (index % 2 === 1) {
      alternatesString += this[index].toUpper();
    } else {
      alternatesString += this[index].toLower();
    }
  }
  //return converted output
  return alternatesString;
};

module.exports = String.prototype.alternatingCase;
