
var request = require('supertest');
describe('Test Roman Numeral Route', function() {
  var server;

  beforeEach(function() {
    server = require('../../server');
  });

  afterEach(function() {
    server.close();
  });

  it('404 everything else', function(done) {
    request(server).get('/foo/bar').expect(404, done);
  });

  it('responds to /romannumeral post', function(done) {
    request(server).post('/romannumeral').expect(404, done);
  });

  it('responds to /romannumeral put', function(done) {
    request(server).put('/romannumeral').expect(404, done);
  });

  it('responds to /romannumeral delete', function(done) {
    request(server).delete('/romannumeral').expect(404, done);
  });

  it('responds to /romannumeral get', function(done) {
    request(server).get('/romannumeral').expect(400, done);
  });

  it('responds to /romannumeral?query=twohundred', function(done) {
    request(server).get('/romannumeral?query=twohundred').expect(400, done);
  });

  it('responds to /romannumeral?query=38a', function(done) {
    request(server).get('/romannumeral?query=38a').expect(400, done);
  });

  it('responds to /romannumeral?query=3@@', function(done) {
    request(server).get('/romannumeral?query=3@@').expect(400, done);
  });

  it('responds to /romannumeral?query=-1', function(done) {
    request(server).get('/romannumeral?query=-1').expect(400, done);
  });

  it('responds to /romannumeral?query=0', function(done) {
    request(server).get('/romannumeral?query=0').expect(400, done);
  });

  it('responds to /romannumeral?query=266', function(done) {
    request(server).get('/romannumeral?query=266').expect(200, done);
  });

  it('responds to /romannumeral?query=255', function(done) {
    request(server).get('/romannumeral?query=255').expect(200, done);
  });

  it('responds to /romannumeral?query=1', function(done) {
    request(server).get('/romannumeral?query=1').expect(200, done);
  });

  it('responds to /romannumeral?query=3999', function(done) {
    request(server).get('/romannumeral?query=3999').expect(200, done);
  });

  it('responds to /romannumeral?query=4000', function(done) {
    request(server).get('/romannumeral?query=4000').expect(400, done);
  });
});