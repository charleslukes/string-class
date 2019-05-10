/**
 * Implementing an uppercase method without using the toUpperCase JS method.
 * Using the JS charCodeAt and fromCharCode
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.toUpper = function () {
  //placeholder for the capitalized words
  let captitalizedWords = '';

  //looping through all input characters to access them one by one
  for (let index = 0; index < this.length; index++) {
    //hold the character code of the character at that index
    let characterCode = this.charCodeAt(index);

    //specifying the range of character code for small letters
    if (characterCode >= 97 && characterCode <= 122) {
      //converts the letter to a upper case
      captitalizedWords += String.fromCharCode(characterCode - 32);
    } else {
      //holds characters that are lower case
      captitalizedWords += this[index];
    }
  }

  //outputs the converted string
  return captitalizedWords;
};

module.export = String.prototype.toUpper;
