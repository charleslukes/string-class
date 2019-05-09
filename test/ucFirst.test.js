var ucFirst = require("../src/ucFirst");

describe("ucFirst method ", function () {
  it("Should be defined ", function () {
    expect(ucFirst).toBeDefined();
  });
  it("Should capitalized the first character of a word ", function () {
    expect('egg'.ucFirst()).toBe('Egg');
  });
  it("Should capitalized the first character of a word ", function () {
    expect('i am fine'.ucFirst()).toBe('I am fine');
  });
});
