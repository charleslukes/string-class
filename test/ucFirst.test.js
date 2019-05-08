let ucFirst = require("../src/ucFirst");

describe("ucFirst method ", function() {
  it("Should be defined ", function() {
    expect(ucFirst).toBeDefined();
  });
  it("Should capitalized the first character of a word ", function() {
    expect('egg'.ucFirst()).toBe('Egg');
  });
});
