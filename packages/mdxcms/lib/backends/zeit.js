"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _isomorphicUnfetch = _interopRequireDefault(require("isomorphic-unfetch"));

var zeit =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var url, file, path, result, data;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _ref.url, file = _ref.file;
            path = "".concat(url, "/").concat(file);
            _context.next = 4;
            return (0, _isomorphicUnfetch.default)(path, {
              credentials: 'include'
            });

          case 4:
            result = _context.sent;
            _context.next = 7;
            return result.text();

          case 7:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function zeit(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = zeit;
exports.default = _default;