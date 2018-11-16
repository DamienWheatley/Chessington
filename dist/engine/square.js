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