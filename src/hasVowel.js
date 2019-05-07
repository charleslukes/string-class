
String.prototype.hasVowel = function(){
  let reg = /[aeiou]/gi;
  return (reg.test(this))? true: false;
}

module.export = String.prototype.hasVowel;