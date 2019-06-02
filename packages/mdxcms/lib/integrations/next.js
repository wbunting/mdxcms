"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _mdxcms = _interopRequireDefault(require("../backends/mdxcms"));

var _useCMSReload = _interopRequireDefault(require("../react/useCMSReload"));

var withMDXCMS = function withMDXCMS(meta) {
  return function (Component) {
    var _Component = function _Component(_ref) {
      var pageProps = _ref.pageProps,
          mdx = _ref.mdx,
          etag = _ref.etag;
      (0, _useCMSReload.default)(etag);
      return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
        mdx: mdx
      }));
    };

    _Component.getInitialProps =
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx) {
        var pageProps, res, pathname, mdx, etag;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pageProps = {};
                res = ctx.res, pathname = ctx.pathname;
                _context.next = 4;
                return (0, _mdxcms.default)((0, _objectSpread2.default)({
                  pathname: pathname
                }, meta));

              case 4:
                mdx = _context.sent;
                etag = require('crypto').createHash('md5').update(mdx).digest('hex');

                if (res) {
                  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
                  res.setHeader('X-version', etag);
                }

                if (!Component.getInitialProps) {
                  _context.next = 11;
                  break;
                }

                _context.next = 10;
                return Component.getInitialProps(ctx);

              case 10:
                pageProps = _context.sent;

              case 11:
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  mdx: mdx,
                  etag: etag
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    return _Component;
  };
};

var _default = withMDXCMS;
exports.default = _default;