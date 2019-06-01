"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _useFocus = _interopRequireDefault(require("./useFocus"));

var useCMSReload = function useCMSReload(etag) {
  var focused = (0, _useFocus.default)();

  _react.default.useEffect(function () {
    if (focused) {
      fetch(window.location, {
        headers: {
          pragma: "no-cache"
        }
      }).then(function (res) {
        if (res.ok && res.headers.get("x-version") !== etag) {
          window.location.reload();
        }
      });
    }
  }, [focused]);
};

var _default = useCMSReload;
exports.default = _default;