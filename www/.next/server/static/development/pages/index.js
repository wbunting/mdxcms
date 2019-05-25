module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../node_modules/string-hash/index.js":
/*!********************************************!*\
  !*** ../node_modules/string-hash/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "../node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!*********************************************************!*\
  !*** ../node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "../node_modules/styled-jsx/dist/style.js":
/*!************************************************!*\
  !*** ../node_modules/styled-jsx/dist/style.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "../node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "../node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!**************************************************************!*\
  !*** ../node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "../node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "../node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "../node_modules/styled-jsx/style.js":
/*!*******************************************!*\
  !*** ../node_modules/styled-jsx/style.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "../node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./components/Container.jsx":
/*!**********************************!*\
  !*** ./components/Container.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/willbunting/Documents/GitHub/mdxcms/www/components/Container.jsx";


function Container(_ref) {
  var center = _ref.center,
      vCenter = _ref.vCenter,
      dark = _ref.dark,
      gray = _ref.gray,
      wide = _ref.wide,
      small = _ref.small,
      padding = _ref.padding,
      overflow = _ref.overflow,
      minHeight = _ref.minHeight,
      dotBackground = _ref.dotBackground,
      children = _ref.children,
      mobileStyle = _ref.mobileStyle,
      divider = _ref.divider,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["center", "vCenter", "dark", "gray", "wide", "small", "padding", "overflow", "minHeight", "dotBackground", "children", "mobileStyle", "divider"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2973338827", [padding ? '4rem' : '0', wide ? '0' : '1rem', wide && !small ? '' : 'max-width: 1024px;', small ? 'max-width: 682px;' : '', center ? 'text-align: center;' : '', dark ? 'background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);' : '', dark ? 'color: #f1f1f1;' : '', gray ? 'background-color: #f6f6f6;' : '', wide && !overflow ? 'overflow: hidden;' : '', minHeight ? "min-height: ".concat(minHeight, "px;") : '', vCenter ? 'display: flex; align-items: center;' : '', dotBackground ? "\n          background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);\n          background-size: 28px 28px;\n        " : '', divider ? "border-top: 1px solid rgba(0,0,0,0.1);" : '', padding ? '4rem' : '0', wide ? '0' : '2rem', padding ? '4rem' : '0', wide ? '0' : '1rem', mobileStyle || '']]]) + " " + (props.className != null && props.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2973338827",
    dynamic: [padding ? '4rem' : '0', wide ? '0' : '1rem', wide && !small ? '' : 'max-width: 1024px;', small ? 'max-width: 682px;' : '', center ? 'text-align: center;' : '', dark ? 'background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);' : '', dark ? 'color: #f1f1f1;' : '', gray ? 'background-color: #f6f6f6;' : '', wide && !overflow ? 'overflow: hidden;' : '', minHeight ? "min-height: ".concat(minHeight, "px;") : '', vCenter ? 'display: flex; align-items: center;' : '', dotBackground ? "\n          background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);\n          background-size: 28px 28px;\n        " : '', divider ? "border-top: 1px solid rgba(0,0,0,0.1);" : '', padding ? '4rem' : '0', wide ? '0' : '2rem', padding ? '4rem' : '0', wide ? '0' : '1rem', mobileStyle || ''],
    __self: this
  }, ".__jsx-style-dynamic-selector{width:100%;margin:0 auto;padding:".concat(padding ? '4rem' : '0', " ").concat(wide ? '0' : '1rem', ";").concat(wide && !small ? '' : 'max-width: 1024px;', " ").concat(small ? 'max-width: 682px;' : '', " ").concat(center ? 'text-align: center;' : '', " ").concat(dark ? 'background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);' : '', " ").concat(dark ? 'color: #f1f1f1;' : '', " ").concat(gray ? 'background-color: #f6f6f6;' : '', " ").concat(wide && !overflow ? 'overflow: hidden;' : '', " ").concat(minHeight ? "min-height: ".concat(minHeight, "px;") : '', " ").concat(vCenter ? 'display: flex; align-items: center;' : '', " ").concat(dotBackground ? "\n          background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);\n          background-size: 28px 28px;\n        " : '', " ").concat(divider ? "border-top: 1px solid rgba(0,0,0,0.1);" : '', ";}.__jsx-style-dynamic-selector:after{content:'';display:table;clear:both;}@media screen and (max-width:960px){div.__jsx-style-dynamic-selector{padding:").concat(padding ? '4rem' : '0', " ").concat(wide ? '0' : '2rem', ";}}@media screen and (max-width:640px){div.__jsx-style-dynamic-selector{padding:").concat(padding ? '4rem' : '0', " ").concat(wide ? '0' : '1rem', ";").concat(mobileStyle || '', ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9Db250YWluZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CUyxBQUdvQixBQWlCQSxBQU8yRCxBQU1BLFdBN0J4RCxBQWlCQSxjQWhCb0QsQUFpQnZELFdBQ2IsZ0NBS0UsQUFPRCx1QkFsQkYsT0FrQkcsMlRBbEJGIiwiZmlsZSI6Ii9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9Db250YWluZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHtcbiAgY2VudGVyLFxuICB2Q2VudGVyLFxuICBkYXJrLFxuICBncmF5LFxuICB3aWRlLFxuICBzbWFsbCxcbiAgcGFkZGluZyxcbiAgb3ZlcmZsb3csXG4gIG1pbkhlaWdodCxcbiAgZG90QmFja2dyb3VuZCxcbiAgY2hpbGRyZW4sXG4gIG1vYmlsZVN0eWxlLFxuICBkaXZpZGVyLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnByb3BzfT5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogJHtwYWRkaW5nID8gJzRyZW0nIDogJzAnfSAke3dpZGUgPyAnMCcgOiAnMXJlbSd9O1xuICAgICAgICAke3dpZGUgJiYgIXNtYWxsID8gJycgOiAnbWF4LXdpZHRoOiAxMDI0cHg7J31cbiAgICAgICAgJHtzbWFsbCA/ICdtYXgtd2lkdGg6IDY4MnB4OycgOiAnJ31cbiAgICAgICAgJHtjZW50ZXIgPyAndGV4dC1hbGlnbjogY2VudGVyOycgOiAnJ31cbiAgICAgICAgJHtcbiAgICAgICAgICBkYXJrXG4gICAgICAgICAgICA/ICdiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTIxMjEyIDAlLCAjMzIzMjMyIDEwMCUpOydcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgICR7ZGFyayA/ICdjb2xvcjogI2YxZjFmMTsnIDogJyd9XG4gICAgICAgICR7Z3JheSA/ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2OycgOiAnJ31cbiAgICAgICAgJHt3aWRlICYmICFvdmVyZmxvdyA/ICdvdmVyZmxvdzogaGlkZGVuOycgOiAnJ31cbiAgICAgICAgJHttaW5IZWlnaHQgPyBgbWluLWhlaWdodDogJHttaW5IZWlnaHR9cHg7YCA6ICcnfVxuICAgICAgICAke3ZDZW50ZXIgPyAnZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsnIDogJyd9XG4gICAgICAgICR7XG4gICAgICAgICAgZG90QmFja2dyb3VuZFxuICAgICAgICAgICAgPyBgXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI0Q3RDdENywgI0Q3RDdENyAxcHgsICNGRkYgMXB4LCAjRkZGKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHggMjhweDtcbiAgICAgICAgYFxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgJHtcbiAgICAgICAgICBkaXZpZGVyID8gYGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7YCA6ICcnXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgOmFmdGVyIHtcbiAgICAgICAgLy8gQkZDXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICB9XG4gICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgdGFibGV0XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICBkaXYge1xuICAgICAgICAgIHBhZGRpbmc6ICR7cGFkZGluZyA/ICc0cmVtJyA6ICcwJ30gJHt3aWRlID8gJzAnIDogJzJyZW0nfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIG1vYmlsZVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiAke3BhZGRpbmcgPyAnNHJlbScgOiAnMCd9ICR7d2lkZSA/ICcwJyA6ICcxcmVtJ307XG4gICAgICAgICAgJHttb2JpbGVTdHlsZSB8fCAnJ31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufSJdfQ== */\n/*@ sourceURL=/Users/willbunting/Documents/GitHub/mdxcms/www/components/Container.jsx */")), children);
}

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/willbunting/Documents/GitHub/mdxcms/www/components/Header.jsx";




var Header =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _PureComponent);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          height = _this$props.height,
          shadow = _this$props.shadow,
          zIndex = _this$props.zIndex,
          background = _this$props.background,
          defaultActive = _this$props.defaultActive,
          dotBackground = _this$props.dotBackground,
          children = _this$props.children;
      var desktopHeight = height.desktop || Number(height) || 0;
      var mobileHeight = height.mobile || desktopHeight;
      var tabletHeight = height.tablet || desktopHeight;
      var desktopShadow = shadow.desktop || (typeof shadow === 'boolean' ? shadow : false);
      var tabletShadow = shadow.tablet || (typeof shadow === 'boolean' ? shadow : false);
      var mobileShadow = shadow.mobile || (typeof shadow === 'boolean' ? shadow : false);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2300396296", [desktopHeight, defaultActive ? 0 : -desktopHeight, zIndex || 1000, tabletHeight, defaultActive ? 0 : -tabletHeight, mobileHeight, defaultActive ? 0 : -mobileHeight, zIndex || 1000, dotBackground ? "\n                background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);\n                background-size: 28px 28px;\n              " : 'background: rgba(255, 255, 255, 0);', background || 'rgba(255, 255, 255, 0.98)', desktopShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset', tabletShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset', mobileShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2300396296", [desktopHeight, defaultActive ? 0 : -desktopHeight, zIndex || 1000, tabletHeight, defaultActive ? 0 : -tabletHeight, mobileHeight, defaultActive ? 0 : -mobileHeight, zIndex || 1000, dotBackground ? "\n                background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);\n                background-size: 28px 28px;\n              " : 'background: rgba(255, 255, 255, 0);', background || 'rgba(255, 255, 255, 0.98)', desktopShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset', tabletShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset', mobileShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset']]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_7___default()('fixed-container active', {
          'show-logo': dotBackground
        }) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2300396296",
        dynamic: [desktopHeight, defaultActive ? 0 : -desktopHeight, zIndex || 1000, tabletHeight, defaultActive ? 0 : -tabletHeight, mobileHeight, defaultActive ? 0 : -mobileHeight, zIndex || 1000, dotBackground ? "\n                background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);\n                background-size: 28px 28px;\n              " : 'background: rgba(255, 255, 255, 0);', background || 'rgba(255, 255, 255, 0.98)', desktopShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset', tabletShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset', mobileShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset'],
        __self: this
      }, "header.__jsx-style-dynamic-selector{left:0;width:100%;height:".concat(desktopHeight, "px;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:").concat(defaultActive ? 0 : -desktopHeight, "px;z-index:").concat(zIndex || 1000, ";}@media screen and (max-width:960px){header.__jsx-style-dynamic-selector{height:").concat(tabletHeight, "px;top:").concat(defaultActive ? 0 : -tabletHeight, "px;}}@media screen and (max-width:640px){header.__jsx-style-dynamic-selector{height:").concat(mobileHeight, "px;top:").concat(defaultActive ? 0 : -mobileHeight, "px;}}.fixed-container.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;left:0;z-index:").concat(zIndex || 1000, ";-webkit-transition:box-shadow 0.5s ease,background 0.2s ease;transition:box-shadow 0.5s ease,background 0.2s ease;").concat(dotBackground ? "\n                background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);\n                background-size: 28px 28px;\n              " : 'background: rgba(255, 255, 255, 0);', ";}.active.__jsx-style-dynamic-selector{background:").concat(background || 'rgba(255, 255, 255, 0.98)', ";border-bottom:2px solid #efefef;box-shadow:").concat(desktopShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset', ";pointer-events:auto;}@media screen and (max-width:960px){.active.__jsx-style-dynamic-selector{border-bottom:2px solid #efefef;box-shadow:").concat(tabletShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset', ";}}@media screen and (max-width:640px){.active.__jsx-style-dynamic-selector{border-bottom:2px solid #efefef;box-shadow:").concat(mobileShadow ? '0px 6px 20px rgba(0, 0, 0, 0.06)' : 'unset', ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DVyxBQUdzQixBQVVpQyxBQU1BLEFBS3RCLEFBWXNCLEFBT04sQUFNQSxPQTdDdkIsV0FDMkIsQUFvQnpCLGNBbUI4QixBQU1BLE1BcENOLEFBTUEsRUFpQkwsZ0JBL0JSLGdCQWdDaUIsQ0F2QnpDLEFBTUEsQUF3QkEsQUFNQSxPQTVDZ0IsWUFtQk0scUJBYUYsT0EvQmUsYUFnQ3JDLHNCQS9CdUMsZUFrQlIsc0JBakIvQixxR0FrQnFCLDZGQUNSLFdBQ0osT0FDOEIscUNBQ2lCLGtIQUMxQiw2QkFDOUIiLCJmaWxlIjoiL1VzZXJzL3dpbGxidW50aW5nL0RvY3VtZW50cy9HaXRIdWIvbWR4Y21zL3d3dy9jb21wb25lbnRzL0hlYWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHNoYWRvdyxcbiAgICAgIHpJbmRleCxcbiAgICAgIGJhY2tncm91bmQsXG4gICAgICBkZWZhdWx0QWN0aXZlLFxuICAgICAgZG90QmFja2dyb3VuZCxcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBkZXNrdG9wSGVpZ2h0ID0gaGVpZ2h0LmRlc2t0b3AgfHwgTnVtYmVyKGhlaWdodCkgfHwgMDtcbiAgICBjb25zdCBtb2JpbGVIZWlnaHQgPSBoZWlnaHQubW9iaWxlIHx8IGRlc2t0b3BIZWlnaHQ7XG4gICAgY29uc3QgdGFibGV0SGVpZ2h0ID0gaGVpZ2h0LnRhYmxldCB8fCBkZXNrdG9wSGVpZ2h0O1xuXG4gICAgY29uc3QgZGVza3RvcFNoYWRvdyA9XG4gICAgICBzaGFkb3cuZGVza3RvcCB8fCAodHlwZW9mIHNoYWRvdyA9PT0gJ2Jvb2xlYW4nID8gc2hhZG93IDogZmFsc2UpO1xuICAgIGNvbnN0IHRhYmxldFNoYWRvdyA9XG4gICAgICBzaGFkb3cudGFibGV0IHx8ICh0eXBlb2Ygc2hhZG93ID09PSAnYm9vbGVhbicgPyBzaGFkb3cgOiBmYWxzZSk7XG4gICAgY29uc3QgbW9iaWxlU2hhZG93ID1cbiAgICAgIHNoYWRvdy5tb2JpbGUgfHwgKHR5cGVvZiBzaGFkb3cgPT09ICdib29sZWFuJyA/IHNoYWRvdyA6IGZhbHNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdmaXhlZC1jb250YWluZXIgYWN0aXZlJywge1xuICAgICAgICAgICAgJ3Nob3ctbG9nbyc6IGRvdEJhY2tncm91bmRcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6ICR7ZGVza3RvcEhlaWdodH1weDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICB0b3A6ICR7ZGVmYXVsdEFjdGl2ZSA/IDAgOiAtZGVza3RvcEhlaWdodH1weDtcbiAgICAgICAgICAgICAgei1pbmRleDogJHt6SW5kZXggfHwgMTAwMH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogJHt0YWJsZXRIZWlnaHR9cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAke2RlZmF1bHRBY3RpdmUgPyAwIDogLXRhYmxldEhlaWdodH1weDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7bW9iaWxlSGVpZ2h0fXB4O1xuICAgICAgICAgICAgICAgIHRvcDogJHtkZWZhdWx0QWN0aXZlID8gMCA6IC1tb2JpbGVIZWlnaHR9cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maXhlZC1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgei1pbmRleDogJHt6SW5kZXggfHwgMTAwMH07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgJHtkb3RCYWNrZ3JvdW5kXG4gICAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNEN0Q3RDcsICNEN0Q3RDcgMXB4LCAjRkZGIDFweCwgI0ZGRik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyOHB4IDI4cHg7XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiAnYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsnfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2JhY2tncm91bmQgfHwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45OCknfTtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZmVmZWY7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7ZGVza3RvcFNoYWRvd1xuICAgICAgICAgICAgICA/ICcwcHggNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSdcbiAgICAgICAgICAgICAgOiAndW5zZXQnfTtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmZWZlZjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAke3RhYmxldFNoYWRvd1xuICAgICAgICAgICAgICA/ICcwcHggNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSdcbiAgICAgICAgICAgICAgOiAndW5zZXQnfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZmVmZWY7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHttb2JpbGVTaGFkb3dcbiAgICAgICAgICAgICAgPyAnMHB4IDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiknXG4gICAgICAgICAgICAgIDogJ3Vuc2V0J307XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/willbunting/Documents/GitHub/mdxcms/www/components/Header.jsx */")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);



/***/ }),

/***/ "./components/Icons/Github.jsx":
/*!*************************************!*\
  !*** ./components/Icons/Github.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/willbunting/Documents/GitHub/mdxcms/www/components/Icons/Github.jsx";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    x: "0px",
    y: "0px",
    viewBox: "0 0 16 16",
    width: "16",
    height: "16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#111111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#111111",
    d: "M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/Logo.jsx":
/*!*****************************!*\
  !*** ./components/Logo.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/willbunting/Documents/GitHub/mdxcms/www/components/Logo.jsx";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var size = _ref.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: size || 40,
    viewBox: "0 0 141 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      // visually centering
      transform: 'translateX(4%)',
      shapeRendering: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M38.0334 25V10.2241",
    stroke: "black",
    "stroke-width": "4",
    "stroke-linecap": "square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M29.0332 19.1594L38.1074 28.2336L47.0506 19.2904",
    stroke: "black",
    "stroke-width": "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2 30.2856V13.6429L11.2338 22.8767L20.5213 13.5891V30.1657",
    stroke: "black",
    "stroke-width": "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M72.6592 28.512L53.1473 9",
    stroke: "#F9AC00",
    "stroke-width": "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M53.4077 28.512L72.9196 9",
    stroke: "#F9AC00",
    "stroke-width": "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M100.844 22.875C100.771 24.0208 100.521 25.0521 100.094 25.9688C99.6771 26.8854 99.1146 27.6667 98.4062 28.3125C97.6979 28.9583 96.8542 29.4583 95.875 29.8125C94.8958 30.1562 93.8125 30.3281 92.625 30.3281C91.2812 30.3281 90.0885 30.0833 89.0469 29.5938C88.0052 29.0938 87.1302 28.401 86.4219 27.5156C85.7135 26.6198 85.1719 25.5469 84.7969 24.2969C84.4219 23.0469 84.2344 21.6719 84.2344 20.1719V17.1094C84.2344 15.599 84.4323 14.2188 84.8281 12.9688C85.224 11.7188 85.7865 10.6458 86.5156 9.75C87.2448 8.85417 88.125 8.16146 89.1562 7.67188C90.1979 7.17188 91.3646 6.92188 92.6562 6.92188C93.9062 6.92188 95.0156 7.09896 95.9844 7.45312C96.9635 7.80729 97.7969 8.3125 98.4844 8.96875C99.1719 9.625 99.7135 10.4271 100.109 11.375C100.505 12.3229 100.755 13.3906 100.859 14.5781H96.4844C96.4427 13.901 96.3385 13.3073 96.1719 12.7969C96.0156 12.2865 95.7812 11.8646 95.4688 11.5312C95.1667 11.1875 94.7812 10.9323 94.3125 10.7656C93.8542 10.5885 93.3021 10.5 92.6562 10.5C91.9792 10.5 91.3906 10.6458 90.8906 10.9375C90.3906 11.2292 89.974 11.6562 89.6406 12.2188C89.3177 12.7812 89.0781 13.474 88.9219 14.2969C88.7656 15.1094 88.6875 16.0365 88.6875 17.0781V20.1719C88.6875 22.4115 89 24.0677 89.625 25.1406C90.2604 26.2135 91.2604 26.75 92.625 26.75C93.7708 26.75 94.6771 26.4479 95.3438 25.8438C96.0104 25.2292 96.3802 24.2396 96.4531 22.875H100.844ZM109.656 7.25L111.812 15.7969L114.266 7.25H119.719V30H115.688V23.2656L115.875 12.625L112.891 22.5H110.719L108.047 13.0469L108.234 23.2656V30H104.203V7.25H109.656ZM135.297 24.0625C135.297 23.6562 135.224 23.276 135.078 22.9219C134.943 22.5677 134.703 22.2396 134.359 21.9375C134.026 21.625 133.583 21.3438 133.031 21.0938C132.49 20.8333 131.812 20.5938 131 20.375C130.01 20.1042 129.062 19.7656 128.156 19.3594C127.26 18.9531 126.469 18.4635 125.781 17.8906C125.094 17.3177 124.542 16.651 124.125 15.8906C123.719 15.1302 123.516 14.2552 123.516 13.2656C123.516 12.3073 123.719 11.4375 124.125 10.6562C124.531 9.875 125.094 9.20833 125.812 8.65625C126.531 8.10417 127.38 7.68229 128.359 7.39062C129.339 7.08854 130.401 6.9375 131.547 6.9375C132.734 6.9375 133.818 7.10938 134.797 7.45312C135.786 7.79688 136.635 8.28125 137.344 8.90625C138.052 9.52083 138.604 10.2552 139 11.1094C139.396 11.9635 139.594 12.901 139.594 13.9219H135.312C135.292 13.4115 135.198 12.9427 135.031 12.5156C134.875 12.0885 134.635 11.724 134.312 11.4219C134 11.1094 133.604 10.8698 133.125 10.7031C132.656 10.526 132.104 10.4375 131.469 10.4375C130.885 10.4375 130.365 10.5104 129.906 10.6562C129.458 10.7917 129.078 10.9896 128.766 11.25C128.453 11.5 128.214 11.8021 128.047 12.1562C127.891 12.5 127.812 12.875 127.812 13.2812C127.812 13.7083 127.917 14.0938 128.125 14.4375C128.344 14.7812 128.656 15.0938 129.062 15.375C129.469 15.6458 129.958 15.8958 130.531 16.125C131.115 16.3542 131.771 16.5677 132.5 16.7656C133.542 17.0677 134.5 17.4375 135.375 17.875C136.25 18.3125 137 18.8333 137.625 19.4375C138.26 20.0312 138.75 20.7135 139.094 21.4844C139.448 22.2448 139.625 23.0938 139.625 24.0312C139.625 25.0312 139.422 25.9219 139.016 26.7031C138.62 27.474 138.068 28.1302 137.359 28.6719C136.651 29.2031 135.807 29.6094 134.828 29.8906C133.849 30.1615 132.781 30.2969 131.625 30.2969C130.906 30.2969 130.188 30.2292 129.469 30.0938C128.76 29.9688 128.078 29.7708 127.422 29.5C126.776 29.2292 126.172 28.8906 125.609 28.4844C125.047 28.0781 124.557 27.6042 124.141 27.0625C123.734 26.5208 123.411 25.9062 123.172 25.2188C122.943 24.5312 122.828 23.7708 122.828 22.9375H127.141C127.161 23.625 127.281 24.2135 127.5 24.7031C127.719 25.1927 128.021 25.5938 128.406 25.9062C128.802 26.2188 129.271 26.4479 129.812 26.5938C130.365 26.7396 130.969 26.8125 131.625 26.8125C132.208 26.8125 132.724 26.7448 133.172 26.6094C133.63 26.474 134.016 26.2865 134.328 26.0469C134.641 25.8073 134.88 25.5208 135.047 25.1875C135.214 24.8438 135.297 24.4688 135.297 24.0625Z",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ "./components/Logo.jsx");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _Icons_Github__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Icons/Github */ "./components/Icons/Github.jsx");
var _jsxFileName = "/Users/willbunting/Documents/GitHub/mdxcms/www/components/Navbar.jsx";


// forked from https://github.com/zeit/next-site/blob/master/www/components/navbar.js @c95a37b8a91161a7e152f4935d3850fd13d7c302








function Navbar(_ref) {
  var className = _ref.className,
      hideLogo = _ref.hideLogo,
      route = _ref.route,
      isMobile = _ref.isMobile;

  if (isMobile) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: className,
      center: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "jsx-251550507" + " " + "expand f5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "251550507",
      __self: this
    }, "nav.jsx-251550507{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;height:96px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}nav.jsx-251550507 .links.jsx-251550507{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1;}nav.jsx-251550507 .dropdown.jsx-251550507{-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 -5px;text-align:left;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}nav.jsx-251550507 .links.jsx-251550507 a.jsx-251550507{display:inline-block;padding:5px 8px;color:inherit;-webkit-text-decoration:none;text-decoration:none;}nav.jsx-251550507 .links.jsx-251550507 a.active.jsx-251550507{color:#0070f3;}nav.jsx-251550507 .links.jsx-251550507 a.selected.jsx-251550507{color:#0070f3;font-weight:600;}nav.jsx-251550507 .logo.jsx-251550507{font-size:0;text-align:center;overflow:hidden;}nav.jsx-251550507 .logo.jsx-251550507 a.jsx-251550507{display:inline-block;padding-right:4px;}nav.jsx-251550507 .links.jsx-251550507 .icons.jsx-251550507{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.jsx-251550507 .links.jsx-251550507 .icons.jsx-251550507 a.jsx-251550507{position:relative;padding:5px;line-height:1;margin-right:1rem;}nav.jsx-251550507 .links.jsx-251550507 .icons.jsx-251550507 a.jsx-251550507 .badge.jsx-251550507{position:absolute;display:inline-block;right:0px;bottom:4px;width:8px;height:8px;border-radius:4px;background-color:#2bdb66;pointer-events:none;}nav.jsx-251550507 .links.jsx-251550507 .icons.jsx-251550507 a.no-margin.jsx-251550507{margin-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCYSxBQUdtQyxBQVNMLEFBS0MsQUFTTyxBQU9QLEFBR0EsQUFJRixBQUtTLEFBSVIsQUFLSyxBQU1BLEFBV0gsWUE5QkcsRUFQcEIsQUFHa0IsQ0FtQ2xCLEdBcEVTLEFBbURLLEFBTVMsR0FqQ0wsQUFrQkUsU0FScEIsQUFJa0IsQUFjRixPQTNCQSxFQWtCaEIsQUFlWSxLQUxRLEVBZHBCLEdBb0JhLEVBMURDLEFBeUJTLEdBWlIsTUE4Q0gsRUFOWixDQXBEZSxPQTJERixJQXBEUSxBQXFDRCxPQWdCQSxXQWZDLE9BZ0JNLEVBcEMzQix1QkFxQ3NCLElBakROLFNBWmdCLEtBYWQsRUFpRGxCLGNBOUMrQixTQVRuQixVQUNaLFFBcUNBLG1FQTVDcUIsNkJBZ0JyQixnRUFmaUIseURBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gZm9ya2VkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC1zaXRlL2Jsb2IvbWFzdGVyL3d3dy9jb21wb25lbnRzL25hdmJhci5qcyBAYzk1YTM3YjhhOTExNjFhN2UxNTJmNDkzNWQzODUwZmQxM2Q3YzMwMlxuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgTURYQ01TTG9nbyBmcm9tICcuL0xvZ28nO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ3JlYmFzcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJztcblxuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSAnLi9JY29ucy9HaXRodWInO1xuXG5mdW5jdGlvbiBOYXZiYXIoeyBjbGFzc05hbWUsIGhpZGVMb2dvLCByb3V0ZSwgaXNNb2JpbGUgfSkge1xuICBpZiAoaXNNb2JpbGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gY2VudGVyPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImV4cGFuZCBmNVwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTZweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYgLmxpbmtzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAtNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgLy8gZW5sYXJnZSB0aGUgY2xpY2thYmxlIGFyZWFcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYgLmxpbmtzIGEuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYgLmxpbmtzIGEuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5sb2dvIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5sb2dvIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyAuaWNvbnMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyAuaWNvbnMgYSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyAuaWNvbnMgYSAuYmFkZ2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJkYjY2O1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIGEubm8tbWFyZ2luIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgIHshaGlkZUxvZ28gJiYgKFxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9XCJNRFhDTVNcIj5cbiAgICAgICAgICAgICAgICAgIDxNRFhDTVNMb2dvIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93YnVudGluZy9tZHhjbXNcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1EWENNUyBvbiBHaXRIdWJcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxHaXRIdWJMb2dvIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzIG11dGUgZHJvcGRvd25cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCIvZG9jc1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHJvdXRlLnN0YXJ0c1dpdGgoJy9kb2NzJylcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiRG9jdW1lbnRhdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERvY3NcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCIvYmxvZ1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHJvdXRlLnN0YXJ0c1dpdGgoJy9ibG9nJylcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiQmxvZ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBjZW50ZXI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImYtcmVzZXRcIj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3Mge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3MgYSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgLy8gZW5sYXJnZSB0aGUgY2xpY2thYmxlIGFyZWFcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3MgYS5idXR0b24ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3MgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5saW5rcyBhLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxvZ28ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgLy8gdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMCUsIDApO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOmdsb2JhbCguYWN0aXZlKSBuYXYgLmxvZ28sXG4gICAgICAgICAgICA6Z2xvYmFsKC5zaG93LWxvZ28pIG5hdiAubG9nbyB7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5sb2dvIGEge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIC5pY29ucyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIC5pY29ucyBhIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5saW5rcyAuaWNvbnMgYSAuYmFkZ2Uge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYmRiNjY7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5saW5rcyAuaWNvbnMgYS5uby1tYXJnaW4ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDU1Mgb25seSBtZWRpYSBxdWVyeSBmb3IgbW9iaWxlICsgU1NSXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIHshaGlkZUxvZ28gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwcmVmZXRjaD5cbiAgICAgICAgICAgICAgPGEgYXJpYS1sYWJlbD1cIk1EWENNU1wiPlxuICAgICAgICAgICAgICAgIDxNRFhDTVNMb2dvIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiLyNhYm91dFwiIHByZWZldGNoPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdtdXRlJywge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvYWJvdXQnKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJBYm91dFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIi9kb2NzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXV0ZScsIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHJvdXRlLnN0YXJ0c1dpdGgoJy9kb2NzJylcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgdGl0bGU9XCJEb2N1bWVudGF0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBEb2NzXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2J1bnRpbmcvbWR4Y21zXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1EWENNUyBvbiBHaXRIdWJcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8R2l0SHViTG9nbyAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvZXhhbXBsZXNcIiBwcmVmZXRjaD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXV0ZScsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogcm91dGUuc3RhcnRzV2l0aCgnL2V4YW1wbGVzJylcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiRXhhbXBsZXNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFeGFtcGxlc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgey8qIDxhXG4gICAgICAgICAgICBocmVmPVwiL2Jsb2dcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdtdXRlJywge1xuICAgICAgICAgICAgICBzZWxlY3RlZDogcm91dGUuc3RhcnRzV2l0aCgnL2Jsb2cnKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIHByZWZldGNoPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdtdXRlJywge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvbG9naW4nKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgdGl0bGU9XCJMb2dpblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCIgcHJlZmV0Y2g+XG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICBiZz1cIndoaXRlXCIgXG4gICAgICAgICAgICAgIGJvcmRlciBcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJibGFja1wiIFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezR9XG4gICAgICAgICAgICAgIHB4PXsyfVxuICAgICAgICAgICAgICBweT17MC41fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiSm9pbiBGcmVlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSm9pbiBGcmVlXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcigoeyByb3V0ZXIsIGhpZGVMb2dvID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCB7IHJvdXRlIH0gPSByb3V0ZXI7XG5cbiAgY29uc3QgaGlkZUxvZ29EZXNrdG9wID1cbiAgICB0eXBlb2YgaGlkZUxvZ28uZGVza3RvcCA9PT0gJ2Jvb2xlYW4nXG4gICAgICA/IGhpZGVMb2dvLmRlc2t0b3BcbiAgICAgIDogdHlwZW9mIGhpZGVMb2dvID09PSAnYm9vbGVhbidcbiAgICAgICAgPyBoaWRlTG9nb1xuICAgICAgICA6IGZhbHNlO1xuICBjb25zdCBoaWRlTG9nb01vYmlsZSA9XG4gICAgdHlwZW9mIGhpZGVMb2dvLm1vYmlsZSA9PT0gJ2Jvb2xlYW4nXG4gICAgICA/IGhpZGVMb2dvLm1vYmlsZVxuICAgICAgOiB0eXBlb2YgaGlkZUxvZ28gPT09ICdib29sZWFuJ1xuICAgICAgICA/IGhpZGVMb2dvXG4gICAgICAgIDogZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhclxuICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItZGVza3RvcFwiXG4gICAgICAgIHJvdXRlPXtyb3V0ZX1cbiAgICAgICAgaGlkZUxvZ289e2hpZGVMb2dvRGVza3RvcH1cbiAgICAgICAgaXNNb2JpbGU9e2ZhbHNlfVxuICAgICAgLz5cbiAgICAgIDxOYXZiYXJcbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLW1vYmlsZVwiXG4gICAgICAgIHJvdXRlPXtyb3V0ZX1cbiAgICAgICAgaGlkZUxvZ289e2hpZGVMb2dvTW9iaWxlfVxuICAgICAgICBpc01vYmlsZVxuICAgICAgLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAubmF2YmFyLWRlc2t0b3Age1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDFweCkge1xuICAgICAgICAgICAgLm5hdmJhci1tb2JpbGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59KTsiXX0= */\n/*@ sourceURL=/Users/willbunting/Documents/GitHub/mdxcms/www/components/Navbar.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-251550507" + " " + "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, !hideLogo && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      "aria-label": "MDXCMS",
      className: "jsx-251550507",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-251550507" + " " + "links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-251550507" + " " + "icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "https://github.com/wbunting/mdxcms",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      "aria-label": "MDXCMS on GitHub",
      rel: "noreferrer",
      target: "_blank",
      className: "jsx-251550507",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_Github__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-251550507" + " " + "links mute dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/docs",
      title: "Documentation",
      className: "jsx-251550507" + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        selected: route.startsWith('/docs')
      }) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Docs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/blog",
      title: "Blog",
      className: "jsx-251550507" + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        selected: route.startsWith('/blog')
      }) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Blog"))));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: className,
    center: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-1637842221" + " " + "f-reset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1637842221",
    __self: this
  }, "nav.jsx-1637842221{position:relative;-webkit-flex:1;-ms-flex:1;flex:1;height:48px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.jsx-1637842221 .links.jsx-1637842221{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1;pointer-events:auto;}nav.jsx-1637842221 .links.jsx-1637842221 a.jsx-1637842221{display:inline-block;padding:5px;margin-left:-5px;margin-right:2rem;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}nav.jsx-1637842221 .links.jsx-1637842221 a.button.jsx-1637842221{margin-right:0;cursor:pointer;}nav.jsx-1637842221 .links.jsx-1637842221 a.jsx-1637842221:hover{color:#111;}nav.jsx-1637842221 .links.jsx-1637842221 a.selected.jsx-1637842221{color:#0070f3;font-weight:600;}nav.jsx-1637842221 .logo.jsx-1637842221{position:absolute;width:100%;font-size:0;text-align:center;overflow:hidden;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;pointer-events:none;opacity:0;}.active nav.jsx-1637842221 .logo.jsx-1637842221,.show-logo nav.jsx-1637842221 .logo.jsx-1637842221{pointer-events:auto;opacity:1;}nav.jsx-1637842221 .logo.jsx-1637842221 a.jsx-1637842221{display:inline-block;}nav.jsx-1637842221 .links.jsx-1637842221 .icons.jsx-1637842221{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}nav.jsx-1637842221 .links.jsx-1637842221 .icons.jsx-1637842221 a.jsx-1637842221{position:relative;line-height:1;margin-right:1rem;}nav.jsx-1637842221 .links.jsx-1637842221 .icons.jsx-1637842221 a.jsx-1637842221 .badge.jsx-1637842221{position:absolute;display:inline-block;right:0px;bottom:4px;width:8px;height:8px;border-radius:4px;background-color:#2bdb66;pointer-events:none;}nav.jsx-1637842221 .links.jsx-1637842221 .icons.jsx-1637842221 a.no-margin.jsx-1637842221{margin-right:0;}@media screen and (max-width:640px){.logo.jsx-1637842221{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJVyxBQUdpQyxBQVFMLEFBTVEsQUFTTixBQUlKLEFBR0csQUFJSSxBQWFFLEFBS0MsQUFHUixBQUlLLEFBS0EsQUFXSCxBQUtBLFdBcERqQixFQXFERSxDQWxEZ0IsQ0FQRCxBQW9EakIsR0EzRVMsQUFrQ0ksQUF5QkcsQUFLTyxFQWhCWCxDQWpDRSxBQXFDZCxRQWpCYyxDQVhkLEFBT0EsQUFrQkEsRUFXb0IsQ0E1Q0QsTUFpRFAsRUE3QlEsUUE4QlAsQ0FqRE8sQUE0Q3BCLENBNURjLFFBb0NJLENBOEJOLEdBakVHLEtBZ0JRLEVBa0RWLElBNURRLEFBK0NBLENBakJNLE1BK0JQLGtCQUNPLG1CQW5ERSxNQW9EUCxTQS9CQSxJQXJDVSxPQXFFaEMsU0E5QlksVUFDWixJQWxDWSxBQStDWixVQTlDc0IsR0FVdEIsaUJBVEEsdURBUHFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvd2lsbGJ1bnRpbmcvRG9jdW1lbnRzL0dpdEh1Yi9tZHhjbXMvd3d3L2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZvcmtlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQtc2l0ZS9ibG9iL21hc3Rlci93d3cvY29tcG9uZW50cy9uYXZiYXIuanMgQGM5NWEzN2I4YTkxMTYxYTdlMTUyZjQ5MzVkMzg1MGZkMTNkN2MzMDJcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IE1EWENNU0xvZ28gZnJvbSAnLi9Mb2dvJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWJhc3MnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5cbmltcG9ydCBHaXRIdWJMb2dvIGZyb20gJy4vSWNvbnMvR2l0aHViJztcblxuZnVuY3Rpb24gTmF2YmFyKHsgY2xhc3NOYW1lLCBoaWRlTG9nbywgcm91dGUsIGlzTW9iaWxlIH0pIHtcbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGNlbnRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJleHBhbmQgZjVcIj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk2cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5kcm9wZG93biB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubGlua3MgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIC8vIGVubGFyZ2UgdGhlIGNsaWNrYWJsZSBhcmVhXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyBhLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyBhLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubG9nbyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubG9nbyBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIGEge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIGEgLmJhZGdlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiZGI2NjtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYgLmxpbmtzIC5pY29ucyBhLm5vLW1hcmdpbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICB7IWhpZGVMb2dvICYmIChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiTURYQ01TXCI+XG4gICAgICAgICAgICAgICAgICA8TURYQ01TTG9nbyAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2J1bnRpbmcvbWR4Y21zXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNRFhDTVMgb24gR2l0SHViXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R2l0SHViTG9nbyAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rcyBtdXRlIGRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiL2RvY3NcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvZG9jcycpXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0aXRsZT1cIkRvY3VtZW50YXRpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb2NzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiL2Jsb2dcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvYmxvZycpXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0aXRsZT1cIkJsb2dcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gY2VudGVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmLXJlc2V0XCI+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIGEge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIC8vIGVubGFyZ2UgdGhlIGNsaWNrYWJsZSBhcmVhXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIGEuYnV0dG9uIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3MgYS5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5sb2dvIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAlLCAwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDpnbG9iYWwoLmFjdGl2ZSkgbmF2IC5sb2dvLFxuICAgICAgICAgICAgOmdsb2JhbCguc2hvdy1sb2dvKSBuYXYgLmxvZ28ge1xuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubG9nbyBhIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5saW5rcyAuaWNvbnMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5saW5rcyAuaWNvbnMgYSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIGEgLmJhZGdlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJkYjY2O1xuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIGEubm8tbWFyZ2luIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIG1vYmlsZSArIFNTUlxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICB7IWhpZGVMb2dvICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcHJlZmV0Y2g+XG4gICAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9XCJNRFhDTVNcIj5cbiAgICAgICAgICAgICAgICA8TURYQ01TTG9nbyAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi8jYWJvdXRcIiBwcmVmZXRjaD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXV0ZScsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogcm91dGUuc3RhcnRzV2l0aCgnL2Fib3V0JylcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiQWJvdXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIvZG9jc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ211dGUnLCB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvZG9jcycpXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHRpdGxlPVwiRG9jdW1lbnRhdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRG9jc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3didW50aW5nL21keGNtc1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNRFhDTVMgb24gR2l0SHViXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdpdEh1YkxvZ28gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2V4YW1wbGVzXCIgcHJlZmV0Y2g+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ211dGUnLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHJvdXRlLnN0YXJ0c1dpdGgoJy9leGFtcGxlcycpXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0aXRsZT1cIkV4YW1wbGVzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRXhhbXBsZXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgIHsvKiA8YVxuICAgICAgICAgICAgaHJlZj1cIi9ibG9nXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXV0ZScsIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHJvdXRlLnN0YXJ0c1dpdGgoJy9ibG9nJylcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICA8L2E+ICovfVxuICAgICAgICAgIFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBwcmVmZXRjaD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXV0ZScsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogcm91dGUuc3RhcnRzV2l0aCgnL2xvZ2luJylcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiTG9naW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIHByZWZldGNoPlxuICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiIFxuICAgICAgICAgICAgICBib3JkZXIgXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiYmxhY2tcIiBcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0fVxuICAgICAgICAgICAgICBweD17Mn1cbiAgICAgICAgICAgICAgcHk9ezAuNX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkpvaW4gRnJlZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEpvaW4gRnJlZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoKHsgcm91dGVyLCBoaWRlTG9nbyA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3QgeyByb3V0ZSB9ID0gcm91dGVyO1xuXG4gIGNvbnN0IGhpZGVMb2dvRGVza3RvcCA9XG4gICAgdHlwZW9mIGhpZGVMb2dvLmRlc2t0b3AgPT09ICdib29sZWFuJ1xuICAgICAgPyBoaWRlTG9nby5kZXNrdG9wXG4gICAgICA6IHR5cGVvZiBoaWRlTG9nbyA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgID8gaGlkZUxvZ29cbiAgICAgICAgOiBmYWxzZTtcbiAgY29uc3QgaGlkZUxvZ29Nb2JpbGUgPVxuICAgIHR5cGVvZiBoaWRlTG9nby5tb2JpbGUgPT09ICdib29sZWFuJ1xuICAgICAgPyBoaWRlTG9nby5tb2JpbGVcbiAgICAgIDogdHlwZW9mIGhpZGVMb2dvID09PSAnYm9vbGVhbidcbiAgICAgICAgPyBoaWRlTG9nb1xuICAgICAgICA6IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXJcbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLWRlc2t0b3BcIlxuICAgICAgICByb3V0ZT17cm91dGV9XG4gICAgICAgIGhpZGVMb2dvPXtoaWRlTG9nb0Rlc2t0b3B9XG4gICAgICAgIGlzTW9iaWxlPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICA8TmF2YmFyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1tb2JpbGVcIlxuICAgICAgICByb3V0ZT17cm91dGV9XG4gICAgICAgIGhpZGVMb2dvPXtoaWRlTG9nb01vYmlsZX1cbiAgICAgICAgaXNNb2JpbGVcbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgLm5hdmJhci1kZXNrdG9wIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpIHtcbiAgICAgICAgICAgIC5uYXZiYXItbW9iaWxlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufSk7Il19 */\n/*@ sourceURL=/Users/willbunting/Documents/GitHub/mdxcms/www/components/Navbar.jsx */"), !hideLogo && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1637842221" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    "aria-label": "MDXCMS",
    className: "jsx-1637842221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1637842221" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/docs",
    title: "Documentation",
    className: "jsx-1637842221" + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()('mute', {
      selected: route.startsWith('/docs')
    }) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Docs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1637842221" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://github.com/wbunting/mdxcms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    "aria-label": "MDXCMS on GitHub",
    rel: "noreferrer",
    target: "_blank",
    className: "jsx-1637842221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icons_Github__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1637842221" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    title: "Login",
    className: "jsx-1637842221" + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()('mute', {
      selected: route.startsWith('/login')
    }) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "Login")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    bg: "white",
    border: true,
    borderColor: "black",
    borderRadius: 4,
    px: 2,
    py: 0.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    title: "Join Free",
    className: "jsx-1637842221" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, "Join Free"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_ref2) {
  var router = _ref2.router,
      _ref2$hideLogo = _ref2.hideLogo,
      hideLogo = _ref2$hideLogo === void 0 ? false : _ref2$hideLogo;
  var route = router.route;
  var hideLogoDesktop = typeof hideLogo.desktop === 'boolean' ? hideLogo.desktop : typeof hideLogo === 'boolean' ? hideLogo : false;
  var hideLogoMobile = typeof hideLogo.mobile === 'boolean' ? hideLogo.mobile : typeof hideLogo === 'boolean' ? hideLogo : false;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Navbar, {
    className: "navbar-desktop",
    route: route,
    hideLogo: hideLogoDesktop,
    isMobile: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Navbar, {
    className: "navbar-mobile",
    route: route,
    hideLogo: hideLogoMobile,
    isMobile: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2103757422",
    __self: this
  }, "@media screen and (max-width:640px){.navbar-desktop{display:none;}}@media screen and (min-width:641px){.navbar-mobile{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9OYXZiYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1XUyxBQUk0QixBQUtBLGFBSmYsQUFLQSIsImZpbGUiOiIvVXNlcnMvd2lsbGJ1bnRpbmcvRG9jdW1lbnRzL0dpdEh1Yi9tZHhjbXMvd3d3L2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZvcmtlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQtc2l0ZS9ibG9iL21hc3Rlci93d3cvY29tcG9uZW50cy9uYXZiYXIuanMgQGM5NWEzN2I4YTkxMTYxYTdlMTUyZjQ5MzVkMzg1MGZkMTNkN2MzMDJcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IE1EWENNU0xvZ28gZnJvbSAnLi9Mb2dvJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWJhc3MnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5cbmltcG9ydCBHaXRIdWJMb2dvIGZyb20gJy4vSWNvbnMvR2l0aHViJztcblxuZnVuY3Rpb24gTmF2YmFyKHsgY2xhc3NOYW1lLCBoaWRlTG9nbywgcm91dGUsIGlzTW9iaWxlIH0pIHtcbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGNlbnRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJleHBhbmQgZjVcIj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk2cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5kcm9wZG93biB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubGlua3MgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIC8vIGVubGFyZ2UgdGhlIGNsaWNrYWJsZSBhcmVhXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyBhLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2IC5saW5rcyBhLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubG9nbyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubG9nbyBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIGEge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIGEgLmJhZGdlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiZGI2NjtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXYgLmxpbmtzIC5pY29ucyBhLm5vLW1hcmdpbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICB7IWhpZGVMb2dvICYmIChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiTURYQ01TXCI+XG4gICAgICAgICAgICAgICAgICA8TURYQ01TTG9nbyAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2J1bnRpbmcvbWR4Y21zXCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNRFhDTVMgb24gR2l0SHViXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R2l0SHViTG9nbyAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rcyBtdXRlIGRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiL2RvY3NcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvZG9jcycpXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0aXRsZT1cIkRvY3VtZW50YXRpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEb2NzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiL2Jsb2dcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvYmxvZycpXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0aXRsZT1cIkJsb2dcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gY2VudGVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmLXJlc2V0XCI+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIGEge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIC8vIGVubGFyZ2UgdGhlIGNsaWNrYWJsZSBhcmVhXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIGEuYnV0dG9uIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXYgLmxpbmtzIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3MgYS5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5sb2dvIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAlLCAwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDpnbG9iYWwoLmFjdGl2ZSkgbmF2IC5sb2dvLFxuICAgICAgICAgICAgOmdsb2JhbCguc2hvdy1sb2dvKSBuYXYgLmxvZ28ge1xuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubG9nbyBhIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5saW5rcyAuaWNvbnMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2IC5saW5rcyAuaWNvbnMgYSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIGEgLmJhZGdlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJkYjY2O1xuICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdiAubGlua3MgLmljb25zIGEubm8tbWFyZ2luIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ1NTIG9ubHkgbWVkaWEgcXVlcnkgZm9yIG1vYmlsZSArIFNTUlxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICB7IWhpZGVMb2dvICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcHJlZmV0Y2g+XG4gICAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9XCJNRFhDTVNcIj5cbiAgICAgICAgICAgICAgICA8TURYQ01TTG9nbyAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi8jYWJvdXRcIiBwcmVmZXRjaD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXV0ZScsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogcm91dGUuc3RhcnRzV2l0aCgnL2Fib3V0JylcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiQWJvdXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIvZG9jc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ211dGUnLCB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiByb3V0ZS5zdGFydHNXaXRoKCcvZG9jcycpXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHRpdGxlPVwiRG9jdW1lbnRhdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRG9jc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3didW50aW5nL21keGNtc1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNRFhDTVMgb24gR2l0SHViXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdpdEh1YkxvZ28gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2V4YW1wbGVzXCIgcHJlZmV0Y2g+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ211dGUnLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHJvdXRlLnN0YXJ0c1dpdGgoJy9leGFtcGxlcycpXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICB0aXRsZT1cIkV4YW1wbGVzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRXhhbXBsZXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICAgIHsvKiA8YVxuICAgICAgICAgICAgaHJlZj1cIi9ibG9nXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXV0ZScsIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHJvdXRlLnN0YXJ0c1dpdGgoJy9ibG9nJylcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICA8L2E+ICovfVxuICAgICAgICAgIFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBwcmVmZXRjaD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbXV0ZScsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogcm91dGUuc3RhcnRzV2l0aCgnL2xvZ2luJylcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiTG9naW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIHByZWZldGNoPlxuICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiIFxuICAgICAgICAgICAgICBib3JkZXIgXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiYmxhY2tcIiBcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0fVxuICAgICAgICAgICAgICBweD17Mn1cbiAgICAgICAgICAgICAgcHk9ezAuNX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkpvaW4gRnJlZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEpvaW4gRnJlZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoKHsgcm91dGVyLCBoaWRlTG9nbyA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3QgeyByb3V0ZSB9ID0gcm91dGVyO1xuXG4gIGNvbnN0IGhpZGVMb2dvRGVza3RvcCA9XG4gICAgdHlwZW9mIGhpZGVMb2dvLmRlc2t0b3AgPT09ICdib29sZWFuJ1xuICAgICAgPyBoaWRlTG9nby5kZXNrdG9wXG4gICAgICA6IHR5cGVvZiBoaWRlTG9nbyA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgID8gaGlkZUxvZ29cbiAgICAgICAgOiBmYWxzZTtcbiAgY29uc3QgaGlkZUxvZ29Nb2JpbGUgPVxuICAgIHR5cGVvZiBoaWRlTG9nby5tb2JpbGUgPT09ICdib29sZWFuJ1xuICAgICAgPyBoaWRlTG9nby5tb2JpbGVcbiAgICAgIDogdHlwZW9mIGhpZGVMb2dvID09PSAnYm9vbGVhbidcbiAgICAgICAgPyBoaWRlTG9nb1xuICAgICAgICA6IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXJcbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLWRlc2t0b3BcIlxuICAgICAgICByb3V0ZT17cm91dGV9XG4gICAgICAgIGhpZGVMb2dvPXtoaWRlTG9nb0Rlc2t0b3B9XG4gICAgICAgIGlzTW9iaWxlPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICA8TmF2YmFyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1tb2JpbGVcIlxuICAgICAgICByb3V0ZT17cm91dGV9XG4gICAgICAgIGhpZGVMb2dvPXtoaWRlTG9nb01vYmlsZX1cbiAgICAgICAgaXNNb2JpbGVcbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgLm5hdmJhci1kZXNrdG9wIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpIHtcbiAgICAgICAgICAgIC5uYXZiYXItbW9iaWxlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufSk7Il19 */\n/*@ sourceURL=/Users/willbunting/Documents/GitHub/mdxcms/www/components/Navbar.jsx */"));
}));

/***/ }),

/***/ "./components/Page.jsx":
/*!*****************************!*\
  !*** ./components/Page.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/polyfill */ "./lib/polyfill.js");
var _jsxFileName = "/Users/willbunting/Documents/GitHub/mdxcms/www/components/Page.jsx";





function Page(_ref) {
  var title = _ref.title,
      description = _ref.description,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1995789564",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1995789564",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title || 'MDXCMS - The Markdown CMS'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description || 'MDXCMS is a dead simple CMS for modern sites.',
    className: "jsx-1995789564",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1879557452",
    __self: this
  }, ".jsx-1995789564{overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9QYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlMsQUFHK0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9QYWdlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCAnLi4vbGliL3BvbHlmaWxsJztcblxuZnVuY3Rpb24gUGFnZSh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZSB8fCAnTURYQ01TIC0gVGhlIE1hcmtkb3duIENNUyd9PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gfHwgJ01EWENNUyBpcyBhIGRlYWQgc2ltcGxlIENNUyBmb3IgbW9kZXJuIHNpdGVzLidcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgICB7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICAqLFxuICAgICAgICAgICo6YmVmb3JlLFxuICAgICAgICAgICo6YWZ0ZXIge1xuICAgICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJyxcbiAgICAgICAgICAgICAgJ094eWdlbicsICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJyxcbiAgICAgICAgICAgICAgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmMztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBbcm9sZT0nZ3JpZCddOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMixcbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICMwMDc0ZGU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICM2OGI1ZmI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2UsXG4gICAgICAgICAgICAgIHNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlOmJlZm9yZSxcbiAgICAgICAgICBjb2RlOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcmUgY29kZTpiZWZvcmUsXG4gICAgICAgICAgcHJlIGNvZGU6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRlbW8tZm9vdGVyIC5ub3RlIGNvZGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAuMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZi1yZXNldCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mMCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuODAyMDMyNDcwNzAzMTI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNjAxODA2NjQwNjI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNDIzODI4MTI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjY1NjI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTI1ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mNSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODg4ODg4ODg4ODg4ODg4OGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZjYge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc5MDEyMzQ1Njc5MDEyMzRlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZ3MSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZncyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mdzMge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZ3NCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnc1IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mdzYge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZ3NyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnc4IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mdzkge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNzE3MTcxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubXV0ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRjIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc3BsYXktbm9uZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlzcGxheS1tb2JpbGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc3BsYXktdGFibGV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAuZGlzcGxheS1tb2JpbGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oaWRlLW1vYmlsZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgICAgICAgICAuZGlzcGxheS10YWJsZXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oaWRlLXRhYmxldCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGFbcm9sZT0nYnV0dG9uJ10ge1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vLXRhcC1oaWdobGlnaHQsXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm8tdGFwLWNhbGxvdXQge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm8tZHJhZyB7XG4gICAgICAgICAgICB1c2VyLWRyYWc6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52aXN1YWxseS1oaWRkZW4ge1xuICAgICAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10sXG4gICAgICAgICAgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10ge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICAgICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgICAgIHRhYi1zaXplOiA0O1xuICAgICAgICAgICAgaHlwaGVuczogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLmNvbW1lbnQsXG4gICAgICAgICAgLnRva2VuLnByb2xvZyxcbiAgICAgICAgICAudG9rZW4uZG9jdHlwZSxcbiAgICAgICAgICAudG9rZW4uY2RhdGEge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5uYW1lc3BhY2Uge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uc3RyaW5nLFxuICAgICAgICAgIC50b2tlbi5hdHRyLXZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDI4MjY1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4ucHVuY3R1YXRpb24sXG4gICAgICAgICAgLnRva2VuLm9wZXJhdG9yIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4udXJsLFxuICAgICAgICAgIC50b2tlbi5zeW1ib2wsXG4gICAgICAgICAgLnRva2VuLmJvb2xlYW4sXG4gICAgICAgICAgLnRva2VuLnZhcmlhYmxlLFxuICAgICAgICAgIC50b2tlbi5jb25zdGFudCB7XG4gICAgICAgICAgICBjb2xvcjogIzM2YWNhYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLmF0cnVsZSxcbiAgICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4uc2VsZWN0b3IsXG4gICAgICAgICAgLmxhbmd1YWdlLWpzb24gLnRva2VuLmJvb2xlYW4sXG4gICAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLWNzcyddIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5ib29sZWFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4ua2V5d29yZCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmMDA3ODtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5mdW5jdGlvbixcbiAgICAgICAgICAudG9rZW4udGFnLFxuICAgICAgICAgIC50b2tlbi5jbGFzcy1uYW1lLFxuICAgICAgICAgIC50b2tlbi5udW1iZXIsXG4gICAgICAgICAgLnRva2VuLnRhZyAudG9rZW4ucHVuY3R1YXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYW5ndWFnZS1hdXRvaG90a2V5IC50b2tlbi50YWcge1xuICAgICAgICAgICAgY29sb3I6ICM5YTA1MGY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5zZWxlY3RvcixcbiAgICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4ua2V5d29yZCB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDA5ZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLmltcG9ydGFudCxcbiAgICAgICAgICAudG9rZW4uYm9sZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLml0YWxpYyB7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5kZWxldGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uaW5zZXJ0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFuZ3VhZ2UtanNvbiAudG9rZW4ucHJvcGVydHksXG4gICAgICAgICAgLmxhbmd1YWdlLW1hcmtkb3duIC50b2tlbi50aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYW5ndWFnZS1tYXJrZG93biAudG9rZW4uY29kZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYW5ndWFnZS1tYXJrZG93biAudG9rZW4ubGlzdCxcbiAgICAgICAgICAubGFuZ3VhZ2UtbWFya2Rvd24gLnRva2VuLmhyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFuZ3VhZ2UtbWFya2Rvd24gLnRva2VuLnVybCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmMDA3ODtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5zZWxlY3RvciB7XG4gICAgICAgICAgICBjb2xvcjogIzJiOTFhZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLnByb3BlcnR5LFxuICAgICAgICAgIC50b2tlbi5lbnRpdHkge1xuICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5hdHRyLW5hbWUsXG4gICAgICAgICAgLnRva2VuLnJlZ2V4IHtcbiAgICAgICAgICAgIGNvbG9yOiAjZDk5MzFlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uZGlyZWN0aXZlLnRhZyAudGFnIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XG4gICAgICAgICAgICBjb2xvcjogIzM5M2EzNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnIHBhdGgsXG4gICAgICAgICAgc3ZnIGNpcmNsZSB7XG4gICAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGdlb21ldHJpY3ByZWNpc2lvbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgW2RhdGEtcmVhY2gtc2tpcC1saW5rXSB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAtMXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFtkYXRhLXJlYWNoLXNraXAtbGlua106Zm9jdXMge1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGNsaXA6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXX0= */\n/*@ sourceURL=/Users/willbunting/Documents/GitHub/mdxcms/www/components/Page.jsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3720992121",
    __self: this
  }, "html{line-height:1.15;-webkit-text-size-adjust:100%;height:100%;box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}body{position:relative;min-height:100%;margin:0;line-height:1.65;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;font-weight:400;min-width:320px;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}html,body{background-color:#fff;color:#111;}::selection{background-color:#0070f3;color:#fff;}[role='grid']:focus{outline:none;}svg{text-rendering:optimizeLegibility;}h1,h2,h3{margin:0;}a{color:#0074de;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}a:hover{color:#68b5fb;}code{font-size:0.9em;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace, serif;}code:before,code:after{content:'`';}pre code:before,pre code:after{content:none;}.demo-footer .note code{background:rgba(0,0,0,0.2);padding:0.2rem;margin:0 0.1rem;border-radius:2px;}iframe{width:100%;height:100%;border:none;}.f-reset{font-size:1rem;}.f0{font-size:1.802032470703125em;}.f1{font-size:1.601806640625em;}.f2{font-size:1.423828125em;}.f3{font-size:1.265625em;}.f4{font-size:1.125em;}.f5{font-size:0.8888888888888888em;}.f6{font-size:0.7901234567901234em;}.fw1{font-weight:100;}.fw2{font-weight:200;}.fw3{font-weight:300;}.fw4{font-weight:400;}.fw5{font-weight:500;}.fw6{font-weight:600;}.fw7{font-weight:700;}.fw8{font-weight:800;}.fw9{font-weight:900;}.subtitle{color:#717171;}.mute{color:#757575;}.tc{text-align:center;}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 -1.5rem;}.column{-webkit-flex:1;-ms-flex:1;flex:1;padding:0 1.5rem;}.display-none{display:none;}.display-mobile{display:none;}.display-tablet{display:none;}@media screen and (max-width:640px){.display-mobile{display:unset;}.hide-mobile{display:none;}}@media screen and (max-width:960px){.display-tablet{display:unset;}.hide-tablet{display:none;}}a[role='button']{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.no-tap-highlight,a{-webkit-touch-callout:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.no-tap-callout{-webkit-touch-callout:none;}.no-drag{-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-drag:none;-webkit-user-select:none;-ms-user-select:none;}.visually-hidden{-webkit-clip:rect(0 0 0 0);clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;overflow:hidden;position:absolute;}code[class*='language-'],pre[class*='language-']{color:#000;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;font-size:0.95em;line-height:1.4em;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#999;}.token.namespace{opacity:0.7;}.token.string,.token.attr-value{color:#028265;}.token.punctuation,.token.operator{color:#000;}.token.url,.token.symbol,.token.boolean,.token.variable,.token.constant{color:#36acaa;}.token.atrule,.language-autohotkey .token.selector,.language-json .token.boolean,code[class*='language-css']{font-weight:600;}.language-json .token.boolean{color:#0070f3;}.token.keyword{color:#ff0078;font-weight:bolder;}.token.function,.token.tag,.token.class-name,.token.number,.token.tag .token.punctuation{color:#0070f3;}.language-autohotkey .token.tag{color:#9a050f;}.token.selector,.language-autohotkey .token.keyword{color:#00009f;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.deleted{color:red;font-weight:bolder;}.token.inserted{color:#0070f3;font-weight:bolder;}.language-json .token.property,.language-markdown .token.title{color:#000;font-weight:bolder;}.language-markdown .token.code{color:#0070f3;font-weight:normal;}.language-markdown .token.list,.language-markdown .token.hr{color:#999;}.language-markdown .token.url{color:#ff0078;font-weight:bolder;}.token.selector{color:#2b91af;}.token.property,.token.entity{color:#ff0000;}.token.attr-name,.token.regex{color:#d9931e;}.token.directive.tag .tag{background:#ffff00;color:#393a34;}svg{shape-rendering:crispEdges;}svg path,svg circle{shape-rendering:geometricprecision;}[data-reach-skip-link]{border:0;-webkit-clip:rect(0 0 0 0);clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;overflow:hidden;position:absolute;}[data-reach-skip-link]:focus{padding:1rem;position:fixed;top:10px;left:10px;background:white;z-index:1;width:auto;height:auto;-webkit-clip:auto;clip:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsYnVudGluZy9Eb2N1bWVudHMvR2l0SHViL21keGNtcy93d3cvY29tcG9uZW50cy9QYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QlMsQUFHOEIsQUFRRSxBQUdELEFBbUJJLEFBSUcsQUFJWixBQUdxQixBQUt6QixBQUdLLEFBS0EsQUFHRSxBQU9KLEFBSUMsQUFHaUIsQUFNbkIsQUFLSSxBQUdlLEFBR0gsQUFHSCxBQUdILEFBR0gsQUFHYSxBQUdBLEFBR2YsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0YsQUFHQSxBQUdJLEFBR0wsQUFLTixBQUlNLEFBR0EsQUFHQSxBQUlHLEFBR0QsQUFLQyxBQUdELEFBSVUsQUFRRSxBQU1BLEFBR1osQUFRSSxBQVdSLEFBZUEsQUFHQyxBQUlFLEFBSUgsQUFPRyxBQU1FLEFBR0YsQUFHQSxBQVFBLEFBR0EsQUFJQSxBQUlHLEFBR0MsQUFHUixBQUlJLEFBS0gsQUFJRyxBQUtILEFBR0csQUFJQSxBQUlBLEFBSUEsQUFHSyxBQUlRLEFBSVEsQUFHMUIsQUFVSSxTQXBTZixBQTJScUIsQ0EvQ0EsQ0E3TVAsQUF1SUUsQUFlaEIsQUFXQSxBQXFEcUIsQUFTckIsQ0E1T0EsQUFzS0EsQ0FoTUEsQUE4QkEsQUFtRkEsQUFHQSxBQUdBLEFBT0UsQUFRQSxBQXVLZSxDQWxTTSxBQUt2QixBQStFQSxBQUdBLEFBeUJFLEFBUUEsQUFpRUYsQUFXQSxBQVNBLEFBR3FCLEFBUXJCLEFBR0EsQUFJQSxBQWNxQixBQVNBLEFBUUEsQUFJckIsQUFJQSxBQUlBLENBek9BLENBdkJTLEFBK0NULEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQXlIQSxDQTNQZ0MsQUFvUmhDLENBelFrQixBQXNGbEIsQUEwQ0EsQUE0SUEsQ0EvUUEsQUFzVGdCLEVBaE9oQixDQWhFYSxDQWdEQyxDQWFkLENBekRhLEFBOElXLEFBcUNOLEVBOUlELEFBaUJqQixBQWdHeUIsQUFNekIsQUFvSUEsQ0FrQlcsQ0F6RFgsQ0F0TUEsQUErTUEsQ0FoTUEsQUFHQSxFQXhFQSxBQW9IbUIsQUErR25CLEFBNkJBLEFBU0EsQUFRQSxBQWVBLENBblRXLEFBNkJYLENBc0NBLEFBdVBBLENBblNBLENBa1RZLElBL0hNLENBOUlBLENBM0RDLEdBNExOLENBeE1DLEFBZ0xTLEFBcUtKLEdBbE1uQixBQXFDcUIsS0FpSlIsRUFoSUQsQUFhVSxDQTlJRixDQXZFSSxDQWNRLElBa0NILEFBcVNqQixFQVpBLENBaElFLENBekJZLENBUWdCLEtBNUNyQixBQTBNUixFQTlRYixBQWtRYyxDQTNJSyxBQXVCQyxFQVpSLEVBek1aLElBc1ZjLEdBWkYsQ0FoSUQsR0ExQlEsR0FzQ0EsRUFpSVAsQ0E1SU0sQUFnSUEsV0FuSmxCLEdBK0JvQixFQVhBLEFBZ0lBLFdBWXBCLENBeFNBLElBd0thLEVBWGIsQUFnSUEsU0FwSGUsR0FoS2Ysa0JBc0l3QixLQW5ETCxVQXFDbkIsT0FwQ0EsQUFtRHlCLHVCQUNFLEdBbkxWLEFBNE1qQixlQTNNa0IsT0FtTEssU0FsTEwsWUFtTGxCLElBbExnQixjQUNlLDZCQUNLLGtDQUNDLG1DQUNELGtDQUNYLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvd2lsbGJ1bnRpbmcvRG9jdW1lbnRzL0dpdEh1Yi9tZHhjbXMvd3d3L2NvbXBvbmVudHMvUGFnZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgJy4uL2xpYi9wb2x5ZmlsbCc7XG5cbmZ1bmN0aW9uIFBhZ2UoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGUgfHwgJ01EWENNUyAtIFRoZSBNYXJrZG93biBDTVMnfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIHx8ICdNRFhDTVMgaXMgYSBkZWFkIHNpbXBsZSBDTVMgZm9yIG1vZGVybiBzaXRlcy4nXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAge1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgKixcbiAgICAgICAgICAqOmJlZm9yZSxcbiAgICAgICAgICAqOmFmdGVyIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY1O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXG4gICAgICAgICAgICAgICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsXG4gICAgICAgICAgICAgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIDo6c2VsZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgW3JvbGU9J2dyaWQnXTpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEsXG4gICAgICAgICAgaDIsXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3NGRlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjhiNWZiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlLFxuICAgICAgICAgICAgICBzZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29kZTpiZWZvcmUsXG4gICAgICAgICAgY29kZTphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnXFxgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJlIGNvZGU6YmVmb3JlLFxuICAgICAgICAgIHByZSBjb2RlOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZW1vLWZvb3RlciAubm90ZSBjb2RlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwLjFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmcmFtZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmYtcmVzZXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZjAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjgwMjAzMjQ3MDcwMzEyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZjEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjYwMTgwNjY0MDYyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZjIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjQyMzgyODEyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZjMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI2NTYyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZjQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjEyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZjUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg4ODg4ODg4ODg4ODg4ODhlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmY2IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OTAxMjM0NTY3OTAxMjM0ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mdzEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZ3MiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnczIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mdzQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZ3NSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnc2IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mdzcge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZ3OCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZnc5IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogIzcxNzE3MTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm11dGUge1xuICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50YyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXNwbGF5LW5vbmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc3BsYXktbW9iaWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXNwbGF5LXRhYmxldCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgLmRpc3BsYXktbW9iaWxlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGlkZS1tb2JpbGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgICAgLmRpc3BsYXktdGFibGV0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGlkZS10YWJsZXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhW3JvbGU9J2J1dHRvbiddIHtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uby10YXAtaGlnaGxpZ2h0LFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vLXRhcC1jYWxsb3V0IHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vLWRyYWcge1xuICAgICAgICAgICAgdXNlci1kcmFnOiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmlzdWFsbHktaGlkZGVuIHtcbiAgICAgICAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICBtYXJnaW46IC0xcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLFxuICAgICAgICAgIHByZVtjbGFzcyo9J2xhbmd1YWdlLSddIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgICAgICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgICAgd29yZC1icmVhazogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgICAgICB0YWItc2l6ZTogNDtcbiAgICAgICAgICAgIGh5cGhlbnM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5jb21tZW50LFxuICAgICAgICAgIC50b2tlbi5wcm9sb2csXG4gICAgICAgICAgLnRva2VuLmRvY3R5cGUsXG4gICAgICAgICAgLnRva2VuLmNkYXRhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4ubmFtZXNwYWNlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLnN0cmluZyxcbiAgICAgICAgICAudG9rZW4uYXR0ci12YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAyODI2NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLnB1bmN0dWF0aW9uLFxuICAgICAgICAgIC50b2tlbi5vcGVyYXRvciB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLnVybCxcbiAgICAgICAgICAudG9rZW4uc3ltYm9sLFxuICAgICAgICAgIC50b2tlbi5ib29sZWFuLFxuICAgICAgICAgIC50b2tlbi52YXJpYWJsZSxcbiAgICAgICAgICAudG9rZW4uY29uc3RhbnQge1xuICAgICAgICAgICAgY29sb3I6ICMzNmFjYWE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5hdHJ1bGUsXG4gICAgICAgICAgLmxhbmd1YWdlLWF1dG9ob3RrZXkgLnRva2VuLnNlbGVjdG9yLFxuICAgICAgICAgIC5sYW5ndWFnZS1qc29uIC50b2tlbi5ib29sZWFuLFxuICAgICAgICAgIGNvZGVbY2xhc3MqPSdsYW5ndWFnZS1jc3MnXSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFuZ3VhZ2UtanNvbiAudG9rZW4uYm9vbGVhbiB7XG4gICAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLmtleXdvcmQge1xuICAgICAgICAgICAgY29sb3I6ICNmZjAwNzg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uZnVuY3Rpb24sXG4gICAgICAgICAgLnRva2VuLnRhZyxcbiAgICAgICAgICAudG9rZW4uY2xhc3MtbmFtZSxcbiAgICAgICAgICAudG9rZW4ubnVtYmVyLFxuICAgICAgICAgIC50b2tlbi50YWcgLnRva2VuLnB1bmN0dWF0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFuZ3VhZ2UtYXV0b2hvdGtleSAudG9rZW4udGFnIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOWEwNTBmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uc2VsZWN0b3IsXG4gICAgICAgICAgLmxhbmd1YWdlLWF1dG9ob3RrZXkgLnRva2VuLmtleXdvcmQge1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwOWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5pbXBvcnRhbnQsXG4gICAgICAgICAgLnRva2VuLmJvbGQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5pdGFsaWMge1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uZGVsZXRlZCB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLmluc2VydGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlLWpzb24gLnRva2VuLnByb3BlcnR5LFxuICAgICAgICAgIC5sYW5ndWFnZS1tYXJrZG93biAudG9rZW4udGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFuZ3VhZ2UtbWFya2Rvd24gLnRva2VuLmNvZGUge1xuICAgICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFuZ3VhZ2UtbWFya2Rvd24gLnRva2VuLmxpc3QsXG4gICAgICAgICAgLmxhbmd1YWdlLW1hcmtkb3duIC50b2tlbi5ociB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlLW1hcmtkb3duIC50b2tlbi51cmwge1xuICAgICAgICAgICAgY29sb3I6ICNmZjAwNzg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uc2VsZWN0b3Ige1xuICAgICAgICAgICAgY29sb3I6ICMyYjkxYWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi5wcm9wZXJ0eSxcbiAgICAgICAgICAudG9rZW4uZW50aXR5IHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9rZW4uYXR0ci1uYW1lLFxuICAgICAgICAgIC50b2tlbi5yZWdleCB7XG4gICAgICAgICAgICBjb2xvcjogI2Q5OTMxZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRva2VuLmRpcmVjdGl2ZS50YWcgLnRhZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xuICAgICAgICAgICAgY29sb3I6ICMzOTNhMzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyBwYXRoLFxuICAgICAgICAgIHN2ZyBjaXJjbGUge1xuICAgICAgICAgICAgc2hhcGUtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIFtkYXRhLXJlYWNoLXNraXAtbGlua10ge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBbZGF0YS1yZWFjaC1za2lwLWxpbmtdOmZvY3VzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBjbGlwOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il19 */\n/*@ sourceURL=/Users/willbunting/Documents/GitHub/mdxcms/www/components/Page.jsx */"), children);
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./lib/polyfill.js":
/*!*************************!*\
  !*** ./lib/polyfill.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_fn_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/fn/array/find */ "core-js/fn/array/find");
/* harmony import */ var core_js_fn_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_find_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/fn/array/find-index */ "core-js/fn/array/find-index");
/* harmony import */ var core_js_fn_array_find_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_find_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/array/from */ "core-js/fn/array/from");
/* harmony import */ var core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_fn_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/fn/object/entries */ "core-js/fn/object/entries");
/* harmony import */ var core_js_fn_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_fn_object_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/fn/object/values */ "core-js/fn/object/values");
/* harmony import */ var core_js_fn_object_values__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_object_values__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_fn_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/fn/symbol/iterator */ "core-js/fn/symbol/iterator");
/* harmony import */ var core_js_fn_symbol_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_symbol_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_fn_string_starts_with__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/fn/string/starts-with */ "core-js/fn/string/starts-with");
/* harmony import */ var core_js_fn_string_starts_with__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_string_starts_with__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rebass_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rebass/mdx */ "@rebass/mdx");
/* harmony import */ var _rebass_mdx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rebass_mdx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/amp */ "next/amp");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/runtime */ "@mdx-js/runtime");
/* harmony import */ var _mdx_js_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Page */ "./components/Page.jsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Container */ "./components/Container.jsx");
/* harmony import */ var mdxcms_lib_react_useCMSReload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mdxcms/lib/react/useCMSReload */ "mdxcms/lib/react/useCMSReload");
/* harmony import */ var mdxcms_lib_react_useCMSReload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mdxcms_lib_react_useCMSReload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mdxcms_lib_integrations_next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mdxcms/lib/integrations/next */ "mdxcms/lib/integrations/next");
/* harmony import */ var mdxcms_lib_integrations_next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mdxcms_lib_integrations_next__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/willbunting/Documents/GitHub/mdxcms/www/pages/index.js";











var Home = function Home(_ref) {
  var mdx = _ref.mdx,
      etag = _ref.etag;
  var isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_2__["useAmp"])();
  mdxcms_lib_react_useCMSReload__WEBPACK_IMPORTED_MODULE_8___default()(etag);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: 48,
    shadow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hideLogo: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Next.js - The React Framework",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rebass_mdx__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mdx_js_runtime__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, mdx)))));
};

/* harmony default export */ __webpack_exports__["default"] = (mdxcms_lib_integrations_next__WEBPACK_IMPORTED_MODULE_9___default()('github')({
  owner: 'wbunting',
  repo: 'mdxcms-content'
})(Object(next_amp__WEBPACK_IMPORTED_MODULE_2__["withAmp"])(Home, {
  hybrid: true
})));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/willbunting/Documents/GitHub/mdxcms/www/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@mdx-js/runtime":
/*!**********************************!*\
  !*** external "@mdx-js/runtime" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdx-js/runtime");

/***/ }),

/***/ "@rebass/mdx":
/*!******************************!*\
  !*** external "@rebass/mdx" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rebass/mdx");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/fn/array/find":
/*!****************************************!*\
  !*** external "core-js/fn/array/find" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/array/find");

/***/ }),

/***/ "core-js/fn/array/find-index":
/*!**********************************************!*\
  !*** external "core-js/fn/array/find-index" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/array/find-index");

/***/ }),

/***/ "core-js/fn/array/from":
/*!****************************************!*\
  !*** external "core-js/fn/array/from" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/array/from");

/***/ }),

/***/ "core-js/fn/object/entries":
/*!********************************************!*\
  !*** external "core-js/fn/object/entries" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/object/entries");

/***/ }),

/***/ "core-js/fn/object/values":
/*!*******************************************!*\
  !*** external "core-js/fn/object/values" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/object/values");

/***/ }),

/***/ "core-js/fn/string/starts-with":
/*!************************************************!*\
  !*** external "core-js/fn/string/starts-with" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/string/starts-with");

/***/ }),

/***/ "core-js/fn/symbol/iterator":
/*!*********************************************!*\
  !*** external "core-js/fn/symbol/iterator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "mdxcms/lib/integrations/next":
/*!***********************************************!*\
  !*** external "mdxcms/lib/integrations/next" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdxcms/lib/integrations/next");

/***/ }),

/***/ "mdxcms/lib/react/useCMSReload":
/*!************************************************!*\
  !*** external "mdxcms/lib/react/useCMSReload" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdxcms/lib/react/useCMSReload");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/amp":
/*!***************************!*\
  !*** external "next/amp" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/amp");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map