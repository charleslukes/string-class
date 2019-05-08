let fromCurrency = require('../src/fromCurrency')

describe("fromCurrency method ", function() {
  it("Should be defined ", function() {
    expect(fromCurrency).toBeDefined();
  });
  it("Should be return the number format of currency string ", function() {
    expect('11,111.11'.fromCurrency()).toBe(11111.11);
  });
});