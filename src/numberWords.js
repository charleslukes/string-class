/**
 * This method return numbers in words
 *
 * author: charles-ebuka-chiakwa
 */

String.prototype.numberWords = function() {
  var stringNumbers = "";

  //append each digit to its string value
  var numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };

  //iterates through the input
  for (var index = 0; index < this.length; index++) {

    //regex ensures that the input is only digits
    var regex = /[^\d+]/g;

    //returns true if input is not a number string
    if (regex.test(this)) return "Input must be string of numbers only";
    
    //append the string values of the numbers
    stringNumbers += numbers[this[index]] + " ";
  }
  return stringNumbers;
};

module.exports = String.prototype.numberWords;
console.log("323".numberWords());
