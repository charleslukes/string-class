var alternatingCase = require('../src/alternatingCase')
describe("alternatingCase method ", function() {
  it("Should be defined ", function() {
    expect(alternatingCase).toBeDefined();
  });
  it("Should be defined ", function() {
    expect('Onomatopia'.alternatingCase()).toBe('oNoMaToPiA');
  });
  it("Should be defined ", function() {
    expect('charles'.alternatingCase()).toBe('cHaRlEs');
  });
});