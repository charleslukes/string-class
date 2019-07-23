var numberWords = require('../src/numberWords');

describe("numberWords method ", function () {
  it("Should be defined ", function () {
    expect(numberWords).toBeDefined();
  });
  it("Should return string of actual numbers ", function () {
    expect('234'.numberWords()).toBe('two three four ');
  });
  it("Should return string of actual numbers ", function () {
    expect('.234'.numberWords()).toBe('Input must be string of numbers only');
  });
});