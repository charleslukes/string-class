var inverseCase = require('../src/inverseCase')

describe("inverse method ", function() {
  it("Should be defined ", function() {
    expect(inverseCase).toBeDefined();
  });
  it("Should inverse the string in question ", function() {
    expect('Mr Ben'.inverseCase()).toBe('mR bEN');
  });
  it("Should be inverse the string in question ", function() {
    expect('Mr Charles'.inverseCase()).toBe('mR cHARLES');
  });
});