var wordCount = require('../src/wordCount')

describe("wordCount method ", function () {
  it("Should be defined ", function () {
    expect(wordCount).toBeDefined();
  });
  it("Should return a number ", function () {
    expect('aa'.wordCount()).toBe(1);
    expect('This is my word'.wordCount()).toBe(4);
    expect('give me the length'.wordCount()).toBe(4);
  });
});