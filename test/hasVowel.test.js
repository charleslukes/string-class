let hasVowel = require('../src/hasVowel')

describe('HasVowel method ', () => {
  it('Should be defined ', () => {
    expect(hasVowel).toBeDefined();
  });
  it('Should return true if string has vowel ', () => {
    expect('Ebc'.hasVowel()).toBeTruthy();
  });
  it('Should return false if string has no vowel ', () => {
    expect('crt'.hasVowel()).toBeFalsy();
  })
})