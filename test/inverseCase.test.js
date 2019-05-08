let inverseCase = require('../src/inverseCase')

describe("fromCurrency method ", function() {
  it("Should be defined ", function() {
    expect(inverseCase).toBeDefined();
  });
  it("Should be alternate the string in question ", function() {
    expect('Mr Ben'.inverseCase()).toBe('mR bEN');
  });
  it("Should be alternate the string in question ", function() {
    expect('Mr Charles'.inverseCase()).toBe('mR cHARLES');
  });
});