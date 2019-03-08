const expect = require('chai').expect;
const {execute} = require('../../routes/romanNumeralRoute');

const req = {
  query: {
    query: null,
  },
};

const res = {
  sendCalledWith: '',
  httpstatus: 200,
  json: {
    error: null,
  },
  send: function(arg) {
    this.sendCalledWith = arg;
  },
  status: function(arg) {
    this.httpstatus = arg;
  },
  json: function(arg) {
    this.json = arg;
  },
  end: function() {

  }
};

describe('Roman Numeral Route', function() {
  it('Should error out if no query provided ', function() {
    let newReq = {...req};
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {

      expect(newRes.sendCalledWith).to.equal('');
      expect(newRes.httpstatus).to.equal(400);

    });
  });


  it('10 should return roman numeral X', function() {
    let newReq = {...req};
    let newRes = {...res};
    newReq.query.query = '10';
    execute(newReq, newRes).then((data) => {

      expect(newRes.sendCalledWith).to.equal('X');
      expect(newRes.httpstatus).to.equal(200);

    });
  });

  it('Should Error out if not query param in the URI', function() {
    let newReq = {...req};
    newReq.query.query = null;
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('');
      expect(newRes.httpstatus).to.equal(400);
    });
  });

  it('Should error on invalid query string type', function() {
    let newReq = {...req};
    newReq.query.query = 'two hundred';
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('');
      expect(newRes.httpstatus).to.equal(400);
    });
  });

  it('Should error on out of bounds number 0', function() {
    let newReq = {...req};
    newReq.query.query = '0';
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('');
      expect(newRes.httpstatus).to.equal(400);
    });
  });

  it('Should error on out of bounds number -1', function() {
    let newReq = {...req};
    newReq.query.query = '-1';
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('');
      expect(newRes.httpstatus).to.equal(400);
    });
  });

  it('Should error on out of bounds number -1000', function() {
    let newReq = {...req};
    newReq.query.query = '-1000';
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('');
      expect(newRes.httpstatus).to.equal(400);
    });
  });

  it('Should error on out of bounds number 4000', function() {
    let newReq = {...req};
    newReq.query.query = '4000';
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('');
      expect(newRes.httpstatus).to.equal(400);
    });
  });

  it('1 should return roman numeral I', function() {
    let newReq = {...req};
    newReq.query.query = '1';
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('I');
      expect(newRes.httpstatus).to.equal(200);
    });
  });

  it('1 type number should return roman numeral I', function() {
    let newReq = {...req};
    newReq.query.query = 1;
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('I');
      expect(newRes.httpstatus).to.equal(200);
    });
  });

  it('256 should return roman numeral CCLVI', function() {
    let newReq = {...req};
    newReq.query.query = '256';
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('CCLVI');
      expect(newRes.httpstatus).to.equal(200);
    });
  });

  it('3999 should return roman numeral MMMCMXCIX', function() {
    let newReq = {...req};
    newReq.query.query = '3999';
    let newRes = {...res};

    execute(newReq, newRes).then((data) => {
      expect(newRes.sendCalledWith).to.equal('MMMCMXCIX');
      expect(newRes.httpstatus).to.equal(200);
    });
  });

});