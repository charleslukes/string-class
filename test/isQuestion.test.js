var isQuestion = require('../src/isQuestion')

describe("isQuestion method ", function () {
  it("Should be defined ", function () {
    expect(isQuestion).toBeDefined();
  });
  it("Should return true if sentence is a question ", function () {
    expect("Hey, whats up?".isQuestion()).toBeTruthy();
  });
  it("Should return true if sentence is a question ", function () {
    expect("Hey, whats up".isQuestion()).toBeFalsy();
  });
});
