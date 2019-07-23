var toUpper = require('../src/toUpper')

describe('toUpper method ', function () {
  it('Should be defined ', function () {
    expect(toUpper).toBeDefined();
  });
  it('Should return a string of capital letters ', function () {
    expect('abc'.toUpper()).toBe('ABC');
  });
  it('Should return a string of capital letters ', function () {
    expect('abc123'.toUpper()).toBe('ABC123');
  });
})