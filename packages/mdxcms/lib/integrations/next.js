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

var _githubPages = _interopRequireDefault(require("../backends/githubPages"));

var getFetcher = function getFetcher(backend) {
  switch (backend) {
    case 'github':
      return _githubPages.default;

    default:
      throw new Error('unrecognized backend');
  }
};

var withMDXCMS = function withMDXCMS(backend) {
  return function (meta) {
    return function (Component) {
      var _Component = function _Component(_ref) {
        var pageProps = _ref.pageProps,
            mdx = _ref.mdx,
            etag = _ref.etag;
        return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
          mdx: mdx,
          etag: etag
        }));
      };

      _Component.getInitialProps =
      /*#__PURE__*/
      function () {
        var _ref3 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(_ref2) {
          var res, pathname, pageProps, dataFetcher, mdx, etag;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  res = _ref2.res, pathname = _ref2.pathname;
                  pageProps = {};
                  dataFetcher = getFetcher(backend);
                  _context.next = 5;
                  return dataFetcher((0, _objectSpread2.default)({}, meta, {
                    pathname: pathname
                  }));

                case 5:
                  mdx = _context.sent;
                  etag = require("crypto").createHash("md5").update(mdx).digest("hex");

                  if (res) {
                    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
                    res.setHeader("X-version", etag);
                  }

                  if (!Component.getInitialProps) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 11;
                  return Component.getInitialProps(ctx);

                case 11:
                  pageProps = _context.sent;

                case 12:
                  return _context.abrupt("return", {
                    pageProps: pageProps,
                    mdx: mdx,
                    etag: etag
                  });

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }();

      return _Component;
    };
  };
};

var _default = withMDXCMS;
exports.default = _default;