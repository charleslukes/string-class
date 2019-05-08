let hasVowel = require('../src/hasVowel')

describe('HasVowel method ', function (){
  it('Should be defined ', function () {
    expect(hasVowel).toBeDefined();
  });
  it('Should return true if string has vowel ', function () {
    expect('Ebc'.hasVowel()).toBeTruthy();
  });
  it('Should return false if string has no vowel ', function () {
    expect('crt'.hasVowel()).toBeFalsy();
  })
})