var toCurrency = require('../src/toCurrency');

describe("toCurrency method ", function () {
  it("Should be defined ", function () {
    expect(toCurrency).toBeDefined();
  });
  it("Should return the currency representation ", function () {
    expect('111111.11'.toCurrency()).toBe('111,111.11');
  });
  it("Should return the currency representation ", function () {
    expect('11111111'.toCurrency()).toBe('Input must in currency format');
  });
});