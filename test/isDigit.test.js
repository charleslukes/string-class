var isDigit = require('../src/isDigit')

describe("isDigit method ", function () {
  it("Should be defined ", function () {
    expect(isDigit).toBeDefined();
  });
  it("Should return true if a digit only ", function () {
    expect('3'.isDigit()).toBeTruthy();
  });
  it("Should return false if not a digit only ", function () {
    expect('34'.isDigit()).toBeFalsy();
  });
});