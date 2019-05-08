let toUpper = require('../src/toUpper')

describe('toUpper method ', () => {
  it('Should be defined ', () => {
    expect(toUpper).toBeDefined();
  });
  it('Should return a string of capital letters ', () => {
    expect('abc'.toUpper()).toBe('ABC');
  });
  it('Should return a string of capital letters ', () => {
    expect('abc123'.toUpper()).toBe('ABC123');
  });
})