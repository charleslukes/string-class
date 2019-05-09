/**
 * Implementing an uppercase method without using the toUpperCase JS method.
 * Using the JS charCodeAt and fromCharCode
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.toUpper = function () {
  //placeholder for the capitalized words
  var captitalizedWords = "";

  //iterate each charaters of the word
  for (var index = 0; index < this.length; index++) {
    //hold the character code of the character
    var characterCode = this.charCodeAt(index);

    //specifying the range of character code for small letters
    if (characterCode >= 97 && characterCode <= 122) {
      //converts the letter to a capital letter
      captitalizedWords += String.fromCharCode(characterCode - 32);
    } else {
      //holds characters that are not small letters
      captitalizedWords += this[index];
    }
  }

  //outputs the converted string
  return captitalizedWords;
};

module.export = String.prototype.toUpper;