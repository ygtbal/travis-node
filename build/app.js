"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("./server/src/models"));

/* eslint-disable linebreak-style */

/* eslint-disable no-console */
var app = (0, _express["default"])();
var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('Server is running on PORT port');
});
app.get('/', function (req, res) {
  return res.json({
    message: "Host is runnin on ".concat(port)
  });
});
app.get('/books', function (req, res) {
  _models["default"].Book.findAll({}).then(function (data) {
    return res.json({
      data: data
    });
  })["catch"](function (err) {
    return res.json({
      data: err
    });
  });
});
module.exports = app;