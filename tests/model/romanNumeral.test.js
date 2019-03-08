const expect = require('chai').expect;
const {execute} = require('../../model/romanNumeral');

const req = {
  query: {
    query: null,
  },
};

describe('Roman Numeral', function() {
  it('Should error out if no query provided ', function() {
    let newReq = req;
    execute(newReq).then((data) => {
      expect(data).to.equal(null);
    });
  });

  it('Should Error out if not query param in the URI', function() {
    let newReq = req;
    newReq.query.query = null;

    execute(newReq).then((data) => {
      expect(data).to.equal(null);
    });
  });

  it('Should error on invalid query string type', function() {
    let newReq = req;
    newReq.query.query = 'two hundred';

    execute(newReq).then((data) => {
      expect(data).to.equal(null);
    });
  });

  it('Should error on out of bounds number 0', function() {
    let newReq = req;
    newReq.query.query = '0';

    execute(newReq).then((data) => {
      expect(data).to.equal(null);
    });
  });

  it('Should error on out of bounds number -1', function() {
    let newReq = req;
    newReq.query.query = '-1';

    execute(newReq).then((data) => {
      expect(data).to.equal(null);
    });
  });

  it('Should error on out of bounds number -1000', function() {
    let newReq = req;
    newReq.query.query = '-1000';

    execute(newReq).then((data) => {
      expect(data).to.equal(null);
    });
  });

  it('Should error on out of bounds number 4000', function() {
    let newReq = req;
    newReq.query.query = '4000';

    execute(newReq).then((data) => {
      expect(data).to.equal(null);
    });
  });

  it('1 should return roman numeral I', function() {
    let newReq = req;
    newReq.query.query = '1';

    execute(newReq).then((data) => {
      expect(data).to.equal('I');
    });
  });

  it('1 type number should return roman numeral I', function() {
    let newReq = req;
    newReq.query.query = 1;

    execute(newReq).then((data) => {
      expect(data).to.equal('I');
    });
  });

  it('256 should return roman numeral CCLVI', function() {
    let newReq = req;
    newReq.query.query = '256';

    execute(newReq).then((data) => {
      expect(data).to.equal('CCLVI');
    });
  });

  it('3999 should return roman numeral MMMCMXCIX', function() {
    let newReq = req;
    newReq.query.query = '3999';

    execute(newReq).then((data) => {
      expect(data).to.equal('MMMCMXCIX');
    });
  });
});