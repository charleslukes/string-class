let toUpper = require('./toUpper');
let toLower = require('./toLower');
/**
 * This method alternates the string its acalled with.
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.alternatingCase = function () {
  let alternatesString = '';

  //looping through all input characters to access them one by one
  for (let index = 0; index < this.length; index++) {

    //converts characters at even indexes to upper case
    if (index % 2 === 1) {
      alternatesString += this[index].toUpper();
    } else {
      // converts characters at odd indexes to lower case
      alternatesString += this[index].toLower();
    }
  }
  //return converted string 
  return alternatesString;
};

module.exports = String.prototype.alternatingCase;
