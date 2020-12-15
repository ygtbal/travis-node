const chai = require('chai');
const chaiHttp = require('chai-http');

const api = require('./app');

chai.use(chaiHttp);
chai.should();
describe('main', () => {
  it('get', (done) => {
    chai.request(api)
    .get('/')
    .set('content-type', 'application/json')
    .end((err, res) => {
      res.should.have.status(200);
      res.should.be.a('object');
      done();
    })
  })
});