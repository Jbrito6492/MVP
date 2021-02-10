exports.ids = ["pages-SignupPage-jsx"];
exports.modules = {

/***/ "./client/pages/SignupPage.jsx":
/*!*************************************!*\
  !*** ./client/pages/SignupPage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Header.jsx */ \"./client/components/header/Header.jsx\");\n/* harmony import */ var _components_form_AuthForm_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/AuthForm.jsx */ \"./client/components/form/AuthForm.jsx\");\n/* harmony import */ var _components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/carousel/Carousel.jsx */ \"./client/components/carousel/Carousel.jsx\");\n/* harmony import */ var _components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/Footer.jsx */ \"./client/components/footer/Footer.jsx\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions */ \"./client/store/actions/index.js\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/app.css */ \"./client/css/app.css\");\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_8__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar SignupPage = function SignupPage(props) {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      isAuthenticated = _useSelector.isAuthenticated;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"We'll never share your info with anyone else.\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      customText = _useState2[0],\n      setCustomText = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"Sign Up\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      buttonText = _useState4[0],\n      setButtonText = _useState4[1];\n\n  var handleSignup = function handleSignup(state) {\n    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_6__[\"createUser\"])(state));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_app_css__WEBPACK_IMPORTED_MODULE_8___default.a.appContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AuthForm_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    isAuthenticated: isAuthenticated,\n    customText: customText,\n    buttonText: buttonText,\n    handleSubmit: handleSignup,\n    page: \"signup\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_css_app_css__WEBPACK_IMPORTED_MODULE_8___default.a)(SignupPage));\n\n//# sourceURL=webpack:///./client/pages/SignupPage.jsx?");

/***/ })

};;