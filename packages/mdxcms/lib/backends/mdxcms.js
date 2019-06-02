"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/json/stringify"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _isomorphicUnfetch = _interopRequireDefault(require("isomorphic-unfetch"));

var mdxcms =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var pathname, apiToken, repositoryName, url, body, result, _ref3, content;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pathname = _ref.pathname, apiToken = _ref.apiToken, repositoryName = _ref.repositoryName;
            url = "".concat(process.env.HOST, "/api/file");
            body = {
              pathname: pathname,
              apiToken: apiToken,
              repositoryName: repositoryName
            };
            _context.next = 5;
            return (0, _isomorphicUnfetch.default)(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: (0, _stringify.default)(body) // body data type must match "Content-Type" header

            });

          case 5:
            result = _context.sent;
            _context.next = 8;
            return result.json();

          case 8:
            _ref3 = _context.sent;
            content = _ref3.content;
            return _context.abrupt("return", content);

          case 11:
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