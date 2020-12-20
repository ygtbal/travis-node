"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

/* eslint-disable linebreak-style */
// const chai = require('chai');
// const chaiHttp = require('chai-http');
var api = require('./app');

_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should(); // eslint-disable-next-line no-undef


describe('main', function () {
  // eslint-disable-next-line no-undef
  it('get', function (done) {
    _chai["default"].request(api).get('/').set('content-type', 'application/json').end(function (err, res) {
      res.should.have.status(200);
      res.should.be.a('object');
      done();
    });
  }); // eslint-disable-next-line no-undef

  it('get', function (done) {
    _chai["default"].request(api).get('/').set('content-type', 'application/json').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});