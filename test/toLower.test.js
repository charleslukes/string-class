let toLower = require('../src/toLower')
describe('toLower method ', function () {
  it('Should be defined', function (){
    expect(toLower).toBeDefined();
  });
  it('Should return a string of capital letters ', function () {
    expect('ABC'.toLower()).toBe('abc');
  });
  
})