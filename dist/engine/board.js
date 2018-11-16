'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

var _gameSettings = require('./gameSettings');

var _gameSettings2 = _interopRequireDefault(_gameSettings);

var _square = require('./square');

var _square2 = _interopRequireDefault(_square);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
    function Board(currentPlayer) {
        _classCallCheck(this, Board);

        this.currentPlayer = currentPlayer ? currentPlayer : _player2.default.WHITE;
        this.board = this.createBoard();
    }

    _createClass(Board, [{
        key: 'createBoard',
        value: function createBoard() {
            var board = new Array(_gameSettings2.default.BOARD_SIZE);
            for (var i = 0; i < board.length; i++) {
                board[i] = new Array(_gameSettings2.default.BOARD_SIZE);
            }
            return board;
        }
    }, {
        key: 'setPiece',
        value: function setPiece(square, piece) {
            this.board[square.row][square.col] = piece;
        }
    }, {
        key: 'getPiece',
        value: function getPiece(square) {
            return this.board[square.row][square.col];
        }
    }, {
        key: 'findPiece',
        value: function findPiece(pieceToFind) {
            for (var row = 0; row < this.board.length; row++) {
                for (var col = 0; col < this.board[row].length; col++) {
                    if (this.board[row][col] === pieceToFind) {
                        return _square2.default.at(row, col);
                    }
                }
            }
            throw new Error('The supplied piece is not on the board');
        }
    }, {
        key: 'movePiece',
        value: function movePiece(fromSquare, toSquare) {
            var movingPiece = this.getPiece(fromSquare);
            if (!!movingPiece && movingPiece.player === this.currentPlayer) {
                this.setPiece(toSquare, movingPiece);
                this.setPiece(fromSquare, undefined);
                this.currentPlayer = this.currentPlayer === _player2.default.WHITE ? _player2.default.BLACK : _player2.default.WHITE;
            }
        }
    }]);

    return Board;
}();

exports.default = Board;