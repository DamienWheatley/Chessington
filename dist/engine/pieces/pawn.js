'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = require('./piece');

var _piece2 = _interopRequireDefault(_piece);

var _square4 = require('../square');

var _square5 = _interopRequireDefault(_square4);

var _player = require('../player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pawn = function (_Piece) {
    _inherits(Pawn, _Piece);

    function Pawn(player) {
        _classCallCheck(this, Pawn);

        return _possibleConstructorReturn(this, (Pawn.__proto__ || Object.getPrototypeOf(Pawn)).call(this, player));
    }

    _createClass(Pawn, [{
        key: 'getAvailableMoves',
        value: function getAvailableMoves(board) {
            var currentSquare = board.findPiece(this);
            if (this.player === _player2.default.WHITE) {
                if (currentSquare.equals(_square5.default.at(2, 0))) {
                    var square = new _square5.default(3, 0);
                    return [square];
                } else if (currentSquare.equals(_square5.default.at(1, 7))) {
                    var _square = [];
                    _square.push(new _square5.default(2, 7), new _square5.default(3, 7));
                    return _square;
                }
            } else if (this.player === _player2.default.BLACK) {
                if (currentSquare.equals(_square5.default.at(5, 0))) {
                    var _square2 = new _square5.default(4, 0);
                    return [_square2];
                } else if (currentSquare.equals(_square5.default.at(6, 7))) {
                    var _square3 = [];
                    _square3.push(new _square5.default(4, 7), new _square5.default(5, 7));
                    return _square3;
                }
            }
        }
    }]);

    return Pawn;
}(_piece2.default);

exports.default = Pawn;