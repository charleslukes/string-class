/**
 * This method checks if a string has a vowel letter using regex
 * 
 * author: charles-ebuka-chiakwa
 */


String.prototype.hasVowel = function () {
  //regex checks if the word has a,e,i,o,u in it.
  var reg = /[aeiou]+/gi;

  //return true for words that contain vowels else false
  return (reg.test(this));
}

module.export = String.prototype.hasVowel;
