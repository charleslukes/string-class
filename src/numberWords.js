/**
 * This method return numbers in words
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.numberWords = function () {
  let stringNumbers = '';

  //append each digit to its string value
  let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };

  //looping through all input characters to access them one by one
  for (let index = 0; index < this.length; index++) {

    //regex checks if the input contains values that are not numbers
    let regex = /[^\d+]/g;

    //If input contains values that are not number it return a warning string
    if (regex.test(this)) return "Input must be string of numbers only";
    
    //holds the string values of the numbers
    stringNumbers += numbers[this[index]] + " ";
  }
  //return the values as output
  return stringNumbers;
};

module.exports = String.prototype.numberWords;
