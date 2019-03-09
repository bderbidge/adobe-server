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

    expect(execute(newReq)).eventually.equal('IV');
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

    expect(execute(newReq)).eventually.equal('IIICMXCIX')
  });

  it('25459 should return roman numeral XXVCDLIX', async () => {
    let newReq = req;
    newReq.query.query = '25459';

    expect(execute(newReq)).eventually.equal('XXVCDLIX')
  });

  it('5000000 should return roman numeral -<br>-<br>V', async () => {
    let newReq = req;
    newReq.query.query = '5000000';

    expect(execute(newReq)).eventually.equal('-<br>-<br>V')
  });
});