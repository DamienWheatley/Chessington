'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static((0, _path.join)(__dirname, 'frontend')));

app.listen(3000, function () {
  return console.log('Chessington is ready to go!');
});