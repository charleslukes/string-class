let word = require('../src/word')

describe("isQuestion method ", function() {
  it("Should be defined ", function() {
    expect(word).toBeDefined();
  });
  it("Should return an array of words ", function() {
    expect('hey, i am turned to an array?'.word())
    .toEqual(['hey,', 'i', 'am', 'turned', 'to', 'an', 'array?']);
  });
  it("Should return an array of words ", function() {
    expect('turn me bro'.word()).toEqual(['turn', 'me', 'bro']);
  });
});