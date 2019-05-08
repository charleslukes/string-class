var toLower = require('../src/toLower')

describe('toLower method ', function () {
  it('Should be defined', function (){
    expect(toLower).toBeDefined();
  });
  it('Should return a string of lowercase letters ', function () {
    expect('ABC'.toLower()).toBe('abc');
  });
  it('Should return a string of lowercase letters ', function () {
    expect('ABC123'.toLower()).toBe('abc123');
  });
})