/**
 * This method return numbers in words
 * 
 * author: charles-ebuka-chiakwa
 */

 String.prototype.numberWords = function() {
  var stringNumbers = '';
  var numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }

  for (var index = 0; index < this.length; index++) {
    var regex = /[^\d+]/g
    if(regex.test(this)) return 'Input must be string of numbers only';
    stringNumbers += numbers[this[index]] + ' ';
  }
  return stringNumbers;
 }
