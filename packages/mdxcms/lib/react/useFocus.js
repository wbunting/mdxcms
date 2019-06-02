"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var useFocus = function useFocus() {
  var _React$useState = _react.default.useState(null),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var onFocusEvent = function onFocusEvent(event) {
    setState(true);
  };

  var onBlurEvent = function onBlurEvent(event) {
    setState(false);
  };

  _react.default.useEffect(function () {
    window.addEventListener("focus", onFocusEvent);
    window.addEventListener("blur", onBlurEvent);
    return function () {
      window.removeEventListener("focus", onFocusEvent);
      window.removeEventListener("blur", onBlurEvent);
    };
  });

  return state;
};

var _default = useFocus;
exports.default = _default;