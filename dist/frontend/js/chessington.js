'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createChessBoard = createChessBoard;

var _board = require('../../engine/board');

var _board2 = _interopRequireDefault(_board);

var _gameSettings = require('../../engine/gameSettings');

var _gameSettings2 = _interopRequireDefault(_gameSettings);

var _player = require('../../engine/player');

var _player2 = _interopRequireDefault(_player);

var _square = require('../../engine/square');

var _square2 = _interopRequireDefault(_square);

var _pawn = require('../../engine/pieces/pawn');

var _pawn2 = _interopRequireDefault(_pawn);

var _rook = require('../../engine/pieces/rook');

var _rook2 = _interopRequireDefault(_rook);

var _knight = require('../../engine/pieces/knight');

var _knight2 = _interopRequireDefault(_knight);

var _bishop = require('../../engine/pieces/bishop');

var _bishop2 = _interopRequireDefault(_bishop);

var _queen = require('../../engine/pieces/queen');

var _queen2 = _interopRequireDefault(_queen);

var _king = require('../../engine/pieces/king');

var _king2 = _interopRequireDefault(_king);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boardUI = void 0;
var board = void 0;

function squareToPositionString(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letters[square.col] + (square.row + 1).toString();
}

function positionStringToSquare(positionString) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return _square2.default.at(parseInt(positionString.charAt(1), 10) - 1, letters.indexOf(positionString.charAt(0)));
}

function pieceToPieceString(piece) {
    var playerString = piece.player === _player2.default.WHITE ? 'w' : 'b';

    if (piece instanceof _pawn2.default) {
        return playerString + 'P';
    } else if (piece instanceof _rook2.default) {
        return playerString + 'R';
    } else if (piece instanceof _knight2.default) {
        return playerString + 'N';
    } else if (piece instanceof _bishop2.default) {
        return playerString + 'B';
    } else if (piece instanceof _queen2.default) {
        return playerString + 'Q';
    } else if (piece instanceof _king2.default) {
        return playerString + 'K';
    }
}

function boardToPositionObject() {
    var position = {};
    for (var row = 0; row < _gameSettings2.default.BOARD_SIZE; row++) {
        for (var col = 0; col < _gameSettings2.default.BOARD_SIZE; col++) {
            var square = _square2.default.at(row, col);
            var piece = board.getPiece(square);

            if (!!piece) {
                position[squareToPositionString(square)] = pieceToPieceString(piece);
            }
        }
    }
    return position;
}

function onDragStart(source, piece, position, orientation) {
    return board.currentPlayer === _player2.default.WHITE && piece.search(/^w/) !== -1 || board.currentPlayer === _player2.default.BLACK && piece.search(/^b/) !== -1;
}

function onDrop(source, target) {
    var fromSquare = positionStringToSquare(source);
    var toSquare = positionStringToSquare(target);
    var pieceToMove = board.getPiece(fromSquare);

    if (!pieceToMove || !pieceToMove.getAvailableMoves(board).some(function (square) {
        return square.equals(toSquare);
    })) {
        return 'snapback';
    }
    pieceToMove.moveTo(board, toSquare);
    updateStatus();
}

function updateStatus() {
    var player = board.currentPlayer === _player2.default.WHITE ? 'White' : 'Black';
    document.getElementById('turn-status').innerHTML = player + ' to move';
}

function boardInStartingPosition() {
    var board = new _board2.default();

    for (var i = 0; i < _gameSettings2.default.BOARD_SIZE; i++) {
        board.setPiece(_square2.default.at(1, i), new _pawn2.default(_player2.default.WHITE));
        board.setPiece(_square2.default.at(6, i), new _pawn2.default(_player2.default.BLACK));
    }

    var _arr = [0, 7];
    for (var _i2 = 0; _i2 < _arr.length; _i2++) {
        var _i = _arr[_i2];
        board.setPiece(_square2.default.at(0, _i), new _rook2.default(_player2.default.WHITE));
        board.setPiece(_square2.default.at(7, _i), new _rook2.default(_player2.default.BLACK));
    }

    var _arr2 = [1, 6];
    for (var _i4 = 0; _i4 < _arr2.length; _i4++) {
        var _i3 = _arr2[_i4];
        board.setPiece(_square2.default.at(0, _i3), new _knight2.default(_player2.default.WHITE));
        board.setPiece(_square2.default.at(7, _i3), new _knight2.default(_player2.default.BLACK));
    }

    var _arr3 = [2, 5];
    for (var _i6 = 0; _i6 < _arr3.length; _i6++) {
        var _i5 = _arr3[_i6];
        board.setPiece(_square2.default.at(0, _i5), new _bishop2.default(_player2.default.WHITE));
        board.setPiece(_square2.default.at(7, _i5), new _bishop2.default(_player2.default.BLACK));
    }

    board.setPiece(_square2.default.at(0, 3), new _queen2.default(_player2.default.WHITE));
    board.setPiece(_square2.default.at(7, 3), new _queen2.default(_player2.default.BLACK));

    board.setPiece(_square2.default.at(0, 4), new _king2.default(_player2.default.WHITE));
    board.setPiece(_square2.default.at(7, 4), new _king2.default(_player2.default.BLACK));

    return board;
}

function createChessBoard() {
    board = boardInStartingPosition();
    boardUI = ChessBoard('chess-board', {
        showNotation: false,
        draggable: true,
        position: boardToPositionObject(board),
        onDragStart: onDragStart,
        onDrop: onDrop
    });
    updateStatus();
}