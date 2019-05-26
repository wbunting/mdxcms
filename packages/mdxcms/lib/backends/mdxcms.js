"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _isomorphicUnfetch = _interopRequireDefault(require("isomorphic-unfetch"));

var mdxcms =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var fileId, url, result, data, _JSON$parse, content;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileId = _ref.fileId;
            url = "https://mdxcms.com/api/file/".concat(fileId);
            _context.next = 4;
            return (0, _isomorphicUnfetch.default)(url, {
              credentials: 'include'
            });

          case 4:
            result = _context.sent;
            _context.next = 7;
            return result.text();

          case 7:
            data = _context.sent;
            _JSON$parse = JSON.parse(data), content = _JSON$parse.content;
            return _context.abrupt("return", content);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function mdxcms(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = mdxcms;
exports.default = _default;