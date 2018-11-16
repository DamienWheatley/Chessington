'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = require('./piece');

var _piece2 = _interopRequireDefault(_piece);

var _square = require('../square');

var _square2 = _interopRequireDefault(_square);

var _player = require('../player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rook = function (_Piece) {
    _inherits(Rook, _Piece);

    function Rook(player) {
        _classCallCheck(this, Rook);

        return _possibleConstructorReturn(this, (Rook.__proto__ || Object.getPrototypeOf(Rook)).call(this, player));
    }

    _createClass(Rook, [{
        key: 'getAvailableMoves',
        value: function getAvailableMoves(board) {
            if (this.player === _player2.default.WHITE) {
                var square = [];
                square.push(new _square2.default(1, 0), new _square2.default(1, 1), new _square2.default(1, 3), new _square2.default(1, 4), new _square2.default(1, 5), new _square2.default(1, 6), new _square2.default(1, 7), new _square2.default(0, 2), new _square2.default(2, 2), new _square2.default(3, 2), new _square2.default(4, 2), new _square2.default(5, 2), new _square2.default(6, 2), new _square2.default(7, 2));
                return square;
            }
        }
    }]);

    return Rook;
}(_piece2.default);

exports.default = Rook;