var chessington =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Player = Object.freeze({
    WHITE: Symbol('white'),
    BLACK: Symbol('black')
});

exports.default = Player;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Square = function () {
    function Square(row, col) {
        _classCallCheck(this, Square);

        this.row = row;
        this.col = col;
    }

    _createClass(Square, [{
        key: "equals",
        value: function equals(otherSquare) {
            return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
        }
    }, {
        key: "toString",
        value: function toString() {
            return "Row " + this.row + ", Col " + this.col;
        }
    }], [{
        key: "at",
        value: function at(row, col) {
            return new Square(row, col);
        }
    }]);

    return Square;
}();

exports.default = Square;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var GameSettings = Object.freeze({
    BOARD_SIZE: 8
});

exports.default = GameSettings;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createChessBoard = createChessBoard;

var _board = __webpack_require__(5);

var _board2 = _interopRequireDefault(_board);

var _gameSettings = __webpack_require__(3);

var _gameSettings2 = _interopRequireDefault(_gameSettings);

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

var _square = __webpack_require__(2);

var _square2 = _interopRequireDefault(_square);

var _pawn = __webpack_require__(6);

var _pawn2 = _interopRequireDefault(_pawn);

var _rook = __webpack_require__(7);

var _rook2 = _interopRequireDefault(_rook);

var _knight = __webpack_require__(8);

var _knight2 = _interopRequireDefault(_knight);

var _bishop = __webpack_require__(9);

var _bishop2 = _interopRequireDefault(_bishop);

var _queen = __webpack_require__(10);

var _queen2 = _interopRequireDefault(_queen);

var _king = __webpack_require__(11);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

var _gameSettings = __webpack_require__(3);

var _gameSettings2 = _interopRequireDefault(_gameSettings);

var _square = __webpack_require__(2);

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

var _square4 = __webpack_require__(2);

var _square5 = _interopRequireDefault(_square4);

var _player = __webpack_require__(1);

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

var _square = __webpack_require__(2);

var _square2 = _interopRequireDefault(_square);

var _player = __webpack_require__(1);

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Knight = function (_Piece) {
    _inherits(Knight, _Piece);

    function Knight(player) {
        _classCallCheck(this, Knight);

        return _possibleConstructorReturn(this, (Knight.__proto__ || Object.getPrototypeOf(Knight)).call(this, player));
    }

    _createClass(Knight, [{
        key: 'getAvailableMoves',
        value: function getAvailableMoves(board) {
            return new Array(0);
        }
    }]);

    return Knight;
}(_piece2.default);

exports.default = Knight;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

var _square = __webpack_require__(2);

var _square2 = _interopRequireDefault(_square);

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bishop = function (_Piece) {
    _inherits(Bishop, _Piece);

    function Bishop(player) {
        _classCallCheck(this, Bishop);

        return _possibleConstructorReturn(this, (Bishop.__proto__ || Object.getPrototypeOf(Bishop)).call(this, player));
    }

    _createClass(Bishop, [{
        key: 'getAvailableMoves',
        value: function getAvailableMoves(board) {
            if (this.player === _player2.default.WHITE) {
                var square = [];
                square.push(new _square2.default(0, 1), new _square2.default(1, 2), new _square2.default(3, 4), new _square2.default(4, 5), new _square2.default(5, 6), new _square2.default(6, 7), new _square2.default(0, 5), new _square2.default(1, 4), new _square2.default(3, 2), new _square2.default(4, 1), new _square2.default(5, 0));
                return square;
            }
        }
    }]);

    return Bishop;
}(_piece2.default);

exports.default = Bishop;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queen = function (_Piece) {
    _inherits(Queen, _Piece);

    function Queen(player) {
        _classCallCheck(this, Queen);

        return _possibleConstructorReturn(this, (Queen.__proto__ || Object.getPrototypeOf(Queen)).call(this, player));
    }

    _createClass(Queen, [{
        key: 'getAvailableMoves',
        value: function getAvailableMoves(board) {
            return new Array(0);
        }
    }]);

    return Queen;
}(_piece2.default);

exports.default = Queen;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var King = function (_Piece) {
    _inherits(King, _Piece);

    function King(player) {
        _classCallCheck(this, King);

        return _possibleConstructorReturn(this, (King.__proto__ || Object.getPrototypeOf(King)).call(this, player));
    }

    _createClass(King, [{
        key: 'getAvailableMoves',
        value: function getAvailableMoves(board) {
            return new Array(0);
        }
    }]);

    return King;
}(_piece2.default);

exports.default = King;

/***/ })
/******/ ]);