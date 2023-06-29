const chai = require('chai');
const expect = chai.expect;
const Blocks = require('../src');

describe('Blocks', function() {
  describe('#createData', function() {
    it('should do something', async function(done) {
      const blocks = new Blocks({ privateKey: 'yourPrivateKey'});
      const result = await blocks.createData('Hello again!','ethereum',undefined,undefined,1.3);

      // Make assertions about the result
      console.log(result)
      expect(result).to.be.an('object');
      done();
    }).timeout(10000);
  });

  describe('#fetchData', function() {
    it('should do something', async function(done) {
      const blocks = new Blocks({ privateKey: 'yourPrivateKey'});
      const result = await blocks.fetchData('0xb8115e9b4bd4881b87ad3af61e1099c762125de7c7db627b33f821f19b110156','ethereum');

      // Make assertions about the result
      console.log(result)
      expect(result).to.be.an('object');
      done();
    }).timeout(5000);
  });
});