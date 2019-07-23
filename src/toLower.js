
/**
 * Implementing an lowercase method without using the toLowerCase JS method.
 * Using the JS charCodeAt and fromCharCode
 *
 * author: charles-ebuka-chiakwa
 */

 String.prototype.toLower = function () {
   //placeholder for the lowered words
  let captitalizedWords = '';

  //looping through all input characters to access them one by one
  for (let index = 0; index < this.length; index++) {
    //hold the character code of the character at that index
    let characterCode = this.charCodeAt(index);

    //specifying the range of character code for capital letters
    if (characterCode >= 65 && characterCode <= 90) {
      //converts the letter to lowercase
      captitalizedWords += String.fromCharCode(characterCode + 32);
    } else {
      //holds characters that are uppercase
      captitalizedWords += this[index];
    }
  }

  //outputs the converted string
  return captitalizedWords;
 }

 module.export = String.prototype.toLower;
 