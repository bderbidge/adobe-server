const chai = require('chai');
const expect = require('chai').expect;
const {execute} = require('../../model/romanNumeral');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

let req = {
  query: {
    query: null,
  },
};

describe('Roman Numeral', function() {
  it('Should error out if no query provided ', async () => {
    let newReq = req;

    expect(execute(newReq)).eventually.equal(null);
  });

  it('Should Error out if not query param in the URI', async () => {
    let newReq = req;
    newReq.query.query = null;

    expect(execute(newReq)).eventually.equal(null);
  });

  it('Should error on invalid query string type', async () => {
    let newReq = req;
    newReq.query.query = 'two hundred';

    expect(execute(newReq)).eventually.equal(null);
  });

  it('Should error on out of bounds number 0', async () => {
    let newReq = req;
    newReq.query.query = '0';

    expect(execute(newReq)).eventually.equal(null)
  });

  it('Should error on out of bounds number -1', async () => {
    let newReq = req;
    newReq.query.query = '-1';

    expect(execute(newReq)).eventually.equal(null);
  });

  it('Should error on out of bounds number -1000', async () => {
    let newReq = req;
    newReq.query.query = '-1000';

    expect(execute(newReq)).eventually.equal(null);
  });

  it('4000 Should should return IV', async () => {
    let newReq = req;
    newReq.query.query = '4000';

    expect(execute(newReq)).eventually.equal('--<br>IV');
  });

  it('1 should return roman numeral I', async () => {
    let newReq = req;
    newReq.query.query = '1';

    expect(execute(newReq)).eventually.equal('I')
  });

  it('1 type number should return roman numeral I', async () => {
    let newReq = req;
    newReq.query.query = 1;

    expect(execute(newReq)).eventually.equal('I')
  });

  it('256 should return roman numeral CCLVI', async () => {
    let newReq = req;
    newReq.query.query = '256';

    expect(execute(newReq)).eventually.equal('CCLVI')
  });

  it('3999 should return roman numeral MMMCMXCIX', async () => {
    let newReq = req;
    newReq.query.query = '3999';

    expect(execute(newReq)).eventually.equal('---<br>IIICMXCIX')
  });

  it('25459 should return roman numeral XXVCDLIX', async () => {
    let newReq = req;
    newReq.query.query = '25459';

    expect(execute(newReq)).eventually.equal('---<br>XXVCDLIX')
  });

  it('1000000 should return roman numeral -<br>-<br>I', async () => {
    let newReq = req;
    newReq.query.query = '1000000';

    expect(execute(newReq)).eventually.equal('-<br>-<br>I')
  });

  it('1000001 should return roman numeral -<br>-<br>II', async () => {
    let newReq = req;
    newReq.query.query = '1000001';

    expect(execute(newReq)).eventually.equal('-<br>-<br>II')
  });

  it('1000 should return roman numeral -<br>I', async () => {
    let newReq = req;
    newReq.query.query = '1000';

    expect(execute(newReq)).eventually.equal('-<br>I')
  });

  it('999999 should return roman numeral ------<br>CMXCIXCMXCIX', async () => {
    let newReq = req;
    newReq.query.query = '999999';

    expect(execute(newReq)).eventually.equal('------<br>CMXCIXCMXCIX')
  });

  it('1000999 should return roman numeral -<br>-<br>ICMXCIX', async () => {
    let newReq = req;
    newReq.query.query = '1000999';

    expect(execute(newReq)).eventually.equal('-<br>-<br>ICMXCIX')
  });

  it('100100 should return roman numeral -<br>CC', async () => {
    let newReq = req;
    newReq.query.query = '100100';

    expect(execute(newReq)).eventually.equal('-<br>CC')
  });

});