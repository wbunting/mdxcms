"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _isomorphicUnfetch = _interopRequireDefault(require("isomorphic-unfetch"));

var githubPages =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var owner, repo, pathname, filePath, url, result, mdx;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            owner = _ref.owner, repo = _ref.repo, pathname = _ref.pathname;
            filePath = pathname === '/' ? '/index' : pathname;
            url = "https://".concat(owner, ".github.io/").concat(repo).concat(filePath, ".mdx");
            _context.next = 5;
            return (0, _isomorphicUnfetch.default)(url);

          case 5:
            result = _context.sent;
            _context.next = 8;
            return result.text();

          case 8:
            mdx = _context.sent;
            return _context.abrupt("return", mdx);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function githubPages(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = githubPages;
exports.default = _default;