/* eslint-disable linebreak-style */
// const chai = require('chai');
// const chaiHttp = require('chai-http');
import chai from 'chai';
import chaiHttp from 'chai-http';

const api = require('./app');

chai.use(chaiHttp);
chai.should();
// eslint-disable-next-line no-undef
describe('main', () => {
  // eslint-disable-next-line no-undef
  it('get', (done) => {
    chai.request(api)
      .get('/')
      .set('content-type', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
  // eslint-disable-next-line no-undef
  it('get', (done) => {
    chai.request(api)
      .get('/')
      .set('content-type', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
