'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function () {
    function Piece(player) {
        _classCallCheck(this, Piece);

        this.player = player;
    }

    _createClass(Piece, [{
        key: 'getAvailableMoves',
        value: function getAvailableMoves(board) {
            throw new Error('This method must be implemented, and return a list of available moves');
        }
    }, {
        key: 'moveTo',
        value: function moveTo(board, newSquare) {
            var currentSquare = board.findPiece(this);
            board.movePiece(currentSquare, newSquare);
        }
    }]);

    return Piece;
}();

exports.default = Piece;