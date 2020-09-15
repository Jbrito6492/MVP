module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/server";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/app/App.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/app/App.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _rooms_StudyBuddy_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rooms/StudyBuddy.jsx */ \"./client/src/components/rooms/StudyBuddy.jsx\");\n/* harmony import */ var _home_Main_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/Main.jsx */ \"./client/src/components/home/Main.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _chatroom_ChatRoom_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../chatroom/ChatRoom.jsx */ \"./client/src/components/chatroom/ChatRoom.jsx\");\n/* harmony import */ var _sign_in_Auth_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sign_in/Auth.jsx */ \"./client/src/components/sign_in/Auth.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6___default()([\"\\nfont-family: sans-serif;\\ndisplay: flex;\\nflex-flow: no-wrap;\\nbackground-color:#333;\\ncolor:#fff;\\npadding:20px;\\nmargin:20px 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_14___default.a.div(_templateObject());\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      view: '',\n      username: ''\n    };\n    _this.changeView = _this.changeView.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{\n    key: \"changeView\",\n    value: function changeView(option) {\n      this.setState({\n        username: option\n      });\n    }\n  }, {\n    key: \"renderView\",\n    value: function renderView() {\n      if (this.state.username === '') {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_sign_in_Auth_jsx__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n          changeView: this.changeView\n        }));\n      } else if (this.state.view === 'main') {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_home_Main_jsx__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          changeView: this.changeView\n        }));\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_chatroom_ChatRoom_jsx__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          name: this.state.username,\n          changeView: this.changeView\n        }));\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, this.renderView()));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwL0FwcC5qc3g/NTdhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTdHVkeUJ1ZGR5IGZyb20gJy4uL3Jvb21zL1N0dWR5QnVkZHkuanN4JztcbmltcG9ydCBNYWluIGZyb20gJy4uL2hvbWUvTWFpbi5qc3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDaGF0Um9vbSBmcm9tICcuLi9jaGF0cm9vbS9DaGF0Um9vbS5qc3gnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi4vc2lnbl9pbi9BdXRoLmpzeCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5mb250LWZhbWlseTogc2Fucy1zZXJpZjtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWZsb3c6IG5vLXdyYXA7XG5iYWNrZ3JvdW5kLWNvbG9yOiMzMzM7XG5jb2xvcjojZmZmO1xucGFkZGluZzoyMHB4O1xubWFyZ2luOjIwcHggMDtcbmA7XG5cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlldzogJycsXG4gICAgICB1c2VybmFtZTogJycsXG4gICAgfVxuICAgIHRoaXMuY2hhbmdlVmlldyA9IHRoaXMuY2hhbmdlVmlldy5iaW5kKHRoaXMpO1xuICB9XG4gIGNoYW5nZVZpZXcob3B0aW9uKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VybmFtZTogb3B0aW9uXG4gICAgfSlcbiAgfVxuICByZW5kZXJWaWV3KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnVzZXJuYW1lID09PSAnJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj48QXV0aCBjaGFuZ2VWaWV3PXt0aGlzLmNoYW5nZVZpZXd9IC8+PC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnZpZXcgPT09ICdtYWluJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj48TWFpbiBjaGFuZ2VWaWV3PXt0aGlzLmNoYW5nZVZpZXd9IC8+PC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENoYXRSb29tIG5hbWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IGNoYW5nZVZpZXc9e3RoaXMuY2hhbmdlVmlld30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7IHRoaXMucmVuZGVyVmlldygpfVxuICAgICAgPC9kaXY+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFXQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFPQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQU9BOzs7O0FBdkNBO0FBQ0E7QUF5Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/app/App.jsx\n");

/***/ }),

/***/ "./client/src/components/chatroom/ChatRoom.jsx":
/*!*****************************************************!*\
  !*** ./client/src/components/chatroom/ChatRoom.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3___default()([\"\\nfont-family: sans-serif;\\nmax-width: 1100px;\\nbackground: #fff;\\nmargin: 30px auto;\\noverflow: hidden;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3___default()([\"\\nfont-family: sans-serif;\\nfont-size: 1.3rem;\\nborder: none;\\nborder-radius: 5px;\\npadding: 7px 10px;\\nbackground: black;\\ncolor: white;\\n&:hover {\\n  background: #FFA500;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default.a.connect('http://80');\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.button(_templateObject());\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div(_templateObject2());\n\nvar ChatRoom = function ChatRoom(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    message: '',\n    name: props.name\n  }),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),\n      chat = _useState4[0],\n      setChat = _useState4[1];\n\n  var handleChange = function handleChange(e) {\n    setState(_objectSpread(_objectSpread({}, state), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, e.target.name, e.target.value)));\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var name = state.name,\n        message = state.message;\n    socket.emit('message', {\n      name: name,\n      message: message\n    });\n    setState({\n      name: name,\n      message: ''\n    });\n  };\n\n  var renderChat = function renderChat() {\n    return chat.map(function (_ref, index) {\n      var name = _ref.name,\n          message = _ref.message;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h3\", null, name, \": \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"span\", null, message)));\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    socket.on('message', function (_ref2) {\n      var name = _ref2.name,\n          message = _ref2.message;\n      setChat([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(chat), [{\n        name: name,\n        message: message\n      }]));\n    });\n  });\n  var form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"label\", {\n    name: \"name\",\n    value: name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Input, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"input\", {\n    name: \"message\",\n    type: \"text\",\n    placeholder: \"whats the move\",\n    onChange: function onChange(e) {\n      return handleChange(e);\n    },\n    value: state.message,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Button, {\n    type: \"Submit\"\n  }, \"Send It\"));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    id: \"chatroom\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", null, form), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    id: \"chat\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h1\", null, \"Chat Log\"), renderChat()));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatRoom);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvY2hhdHJvb20vQ2hhdFJvb20uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2NoYXRyb29tL0NoYXRSb29tLmpzeD9lNWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly84MCcpO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5mb250LXNpemU6IDEuM3JlbTtcbmJvcmRlcjogbm9uZTtcbmJvcmRlci1yYWRpdXM6IDVweDtcbnBhZGRpbmc6IDdweCAxMHB4O1xuYmFja2dyb3VuZDogYmxhY2s7XG5jb2xvcjogd2hpdGU7XG4mOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGQTUwMDtcbn1cbmA7XG5jb25zdCBJbnB1dCA9IHN0eWxlZC5kaXZgXG5mb250LWZhbWlseTogc2Fucy1zZXJpZjtcbm1heC13aWR0aDogMTEwMHB4O1xuYmFja2dyb3VuZDogI2ZmZjtcbm1hcmdpbjogMzBweCBhdXRvO1xub3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IENoYXRSb29tID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBtZXNzYWdlOiAnJywgbmFtZTogcHJvcHMubmFtZSB9KTtcbiAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgbmFtZSwgbWVzc2FnZSB9ID0gc3RhdGU7XG4gICAgc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCB7IG5hbWUsIG1lc3NhZ2UgfSlcbiAgICBzZXRTdGF0ZSh7IG5hbWUsIG1lc3NhZ2U6ICcnIH0pXG4gIH1cblxuICBjb25zdCByZW5kZXJDaGF0ID0gKCkgPT4ge1xuICAgIHJldHVybiBjaGF0Lm1hcCgoeyBuYW1lLCBtZXNzYWdlIH0sIGluZGV4KSA9PiAoXG4gICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICA8aDM+XG4gICAgICAgICAge25hbWV9OiA8c3Bhbj57bWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICApKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCAoeyBuYW1lLCBtZXNzYWdlIH0pID0+IHtcbiAgICAgIHNldENoYXQoWy4uLmNoYXQsIHsgbmFtZSwgbWVzc2FnZSB9XSlcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGZvcm0gPSAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8bGFiZWwgbmFtZT1cIm5hbWVcIiB2YWx1ZT17bmFtZX0gLz5cbiAgICAgIDxJbnB1dD48aW5wdXQgbmFtZT1cIm1lc3NhZ2VcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwid2hhdHMgdGhlIG1vdmVcIiBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZSl9IHZhbHVlPXtzdGF0ZS5tZXNzYWdlfSByZXF1aXJlZCAvPjwvSW5wdXQ+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJTdWJtaXRcIj5TZW5kIEl0PC9CdXR0b24+XG4gICAgPC9mb3JtPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8IGRpdiBpZD1cImNoYXRyb29tXCIgPlxuICAgICAgPGRpdj57Zm9ybX08L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJjaGF0XCI+XG4gICAgICAgIDxoMT5DaGF0IExvZzwvaDE+XG4gICAgICAgIHtyZW5kZXJDaGF0KCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2RpdiA+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IENoYXRSb29tOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBWUE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/chatroom/ChatRoom.jsx\n");

/***/ }),

/***/ "./client/src/components/home/Main.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/home/Main.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Main = function Main(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"title\"\n  }, \"Whats the move?\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9NYWluLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9ob21lL01haW4uanN4PzZjZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPlxuICAgICAgV2hhdHMgdGhlIG1vdmU/XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/home/Main.jsx\n");

/***/ }),

/***/ "./client/src/components/rooms/StudyBuddy.jsx":
/*!****************************************************!*\
  !*** ./client/src/components/rooms/StudyBuddy.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar StudyBuddy = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(StudyBuddy, _React$Component);\n\n  var _super = _createSuper(StudyBuddy);\n\n  function StudyBuddy(props) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, StudyBuddy);\n\n    return _super.call(this, props);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(StudyBuddy, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, \"StudyBuddy Chat\");\n    }\n  }]);\n\n  return StudyBuddy;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudyBuddy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcm9vbXMvU3R1ZHlCdWRkeS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcm9vbXMvU3R1ZHlCdWRkeS5qc3g/NTliMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTdHVkeUJ1ZGR5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+U3R1ZHlCdWRkeSBDaGF0PC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0dWR5QnVkZHk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFHQTs7OztBQVJBO0FBQ0E7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/rooms/StudyBuddy.jsx\n");

/***/ }),

/***/ "./client/src/components/sign_in/Auth.jsx":
/*!************************************************!*\
  !*** ./client/src/components/sign_in/Auth.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7___default()([\"\\nfont-family: sans-serif;\\nmax-width: 1100px;\\nbackground: #fff;\\nmargin: 30px auto;\\noverflow: hidden;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7___default()([\"\\nfont-family: sans-serif;\\nfont-size: 1.3rem;\\nborder: none;\\nborder-radius: 5px;\\npadding: 7px 10px;\\nbackground: black;\\ncolor: white;\\n&:hover {\\n  background: #FFA500;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.button(_templateObject());\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject2());\n\nvar Auth = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Auth, _React$Component);\n\n  var _super = _createSuper(Auth);\n\n  function Auth(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Auth);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      name: '',\n      password: ''\n    };\n    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Auth, [{\n    key: \"handleChange\",\n    value: function handleChange(e) {\n      this.setState(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, e.target.name, e.target.value));\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      var _this2 = this;\n\n      e.preventDefault();\n      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/auth', {\n        params: {\n          name: this.state.name,\n          password: this.state.password\n        }\n      }).then(function () {\n        var name = _this2.state.name;\n\n        _this2.props.changeView(name);\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit,\n        className: \"form\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"h1\", null, \"Join\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Input, {\n        id: \"username\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"input\", {\n        placeholder: \"username\",\n        name: \"name\",\n        type: \"text\",\n        onChange: this.handleChange,\n        required: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Input, {\n        id: \"password\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"input\", {\n        placeholder: \"password\",\n        name: \"password\",\n        type: \"password\",\n        onChange: this.handleChange,\n        required: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Button, {\n        type: \"Submit\"\n      }, \"Join\"));\n    }\n  }]);\n\n  return Auth;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc2lnbl9pbi9BdXRoLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9zaWduX2luL0F1dGguanN4P2VjNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuZm9udC1zaXplOiAxLjNyZW07XG5ib3JkZXI6IG5vbmU7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5wYWRkaW5nOiA3cHggMTBweDtcbmJhY2tncm91bmQ6IGJsYWNrO1xuY29sb3I6IHdoaXRlO1xuJjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGRkE1MDA7XG59XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5kaXZgXG5mb250LWZhbWlseTogc2Fucy1zZXJpZjtcbm1heC13aWR0aDogMTEwMHB4O1xuYmFja2dyb3VuZDogI2ZmZjtcbm1hcmdpbjogMzBweCBhdXRvO1xub3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNsYXNzIEF1dGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF4aW9zLnBvc3QoJy9hdXRoJywge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VWaWV3KG5hbWUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICA8aDE+Sm9pbjwvaDE+XG4gICAgICAgIDxJbnB1dCBpZD1cInVzZXJuYW1lXCI+PGlucHV0IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPjwvSW5wdXQ+XG4gICAgICAgIDxJbnB1dCBpZD1cInBhc3N3b3JkXCI+PGlucHV0IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+PC9JbnB1dD5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwiU3VibWl0XCI+Sm9pbjwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQWFBO0FBQ0E7QUFPQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBOzs7O0FBekNBO0FBQ0E7QUEyQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/sign_in/Auth.jsx\n");

/***/ }),

/***/ "./database/controllers/user.js":
/*!**************************************!*\
  !*** ./database/controllers/user.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var User = __webpack_require__(/*! ../models/user.js */ \"./database/models/user.js\");\n\nexports.create = function (req, res) {\n  User.create({\n    user: req.body.user\n  }).then(function () {\n    res.sendStatus(200);\n  })[\"catch\"](function (err) {\n    console.log(err);\n    res.send(200);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9jb250cm9sbGVycy91c2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvY29udHJvbGxlcnMvdXNlci5qcz81Yzk5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXIgPSByZXF1aXJlKCcuLi9tb2RlbHMvdXNlci5qcycpO1xuXG5leHBvcnRzLmNyZWF0ZSA9IChyZXEsIHJlcykgPT4ge1xuICBVc2VyLmNyZWF0ZSh7XG4gICAgdXNlcjogcmVxLmJvZHkudXNlclxuICB9KVxuICAudGhlbigoKSA9PiB7XG4gICAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbiAgfSlcbiAgLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICByZXMuc2VuZCgyMDApO1xuICB9KTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./database/controllers/user.js\n");

/***/ }),

/***/ "./database/index.js":
/*!***************************!*\
  !*** ./database/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nmongoose.connect('mongodb://localhost/the_move', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\nvar db = mongoose.connection;\ndb.on('error', function () {\n  console.log('mongoose connection error');\n});\ndb.once('open', function () {\n  console.log('mongoose connected successfully');\n});\nmodule.exports = db;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGFiYXNlL2luZGV4LmpzPzdhMmYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC90aGVfbW92ZScsIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlfSApXG5cbmNvbnN0IGRiID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcblxuZGIub24oJ2Vycm9yJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnbW9uZ29vc2UgY29ubmVjdGlvbiBlcnJvcicpO1xufSk7XG5cbmRiLm9uY2UoJ29wZW4nLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdtb25nb29zZSBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/index.js\n");

/***/ }),

/***/ "./database/models/user.js":
/*!*********************************!*\
  !*** ./database/models/user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar userSchema = mongoose.Schema({\n  username: String\n});\nvar user = mongoose.model('user', userSchema);\nmodule.exports = user;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhYmFzZS9tb2RlbHMvdXNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RhdGFiYXNlL21vZGVscy91c2VyLmpzPzA4NjMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcm5hbWU6IFN0cmluZyxcbn0pO1xuXG5jb25zdCB1c2VyID0gbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/models/user.js\n");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar App = __webpack_require__(/*! ../client/src/components/app/App.jsx */ \"./client/src/components/app/App.jsx\")[\"default\"];\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar app = express();\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar layout = __webpack_require__(/*! ./templates/layout.js */ \"./server/templates/layout.js\");\n\nvar server = __webpack_require__(/*! http */ \"http\").createServer(app);\n\nvar routes = __webpack_require__(/*! ./routes/routes.js */ \"./server/routes/routes.js\");\n\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar db = __webpack_require__(/*! ../database/index.js */ \"./database/index.js\");\n\nvar io = __webpack_require__(/*! socket.io */ \"socket.io\")(server);\n\nio.on('connection', function (socket) {\n  // welcome user\n  socket.emit('message', 'Whats the move?'); // runs when client disconnects\n\n  socket.on('disconnect', function () {\n    io.emit('message', 'A user has left the chat');\n  });\n  socket.on('message', function (_ref) {\n    var name = _ref.name,\n        message = _ref.message;\n    io.emit('message', {\n      name: name,\n      message: message\n    });\n  });\n});\nvar port = process.env.PORT || 80;\napp.use(morgan('dev'));\napp.use(bodyParser.json());\napp.use(cors());\napp.use(express[\"static\"]('public'));\napp.get('/', function (req, res) {\n  var title = 'Whats the Move';\n  var content = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(App, null));\n  res.send(layout(title, content));\n});\napp.use('/', routes);\nserver.listen(port, function () {\n  console.log(\"listening on port \".concat(port));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanM/MGE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdERPTVNlcnZlciA9IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKTtcbmNvbnN0IEFwcCA9IHJlcXVpcmUoJy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAvQXBwLmpzeCcpLmRlZmF1bHQ7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcbmNvbnN0IGxheW91dCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2xheW91dC5qcycpXG5jb25zdCBzZXJ2ZXIgPSByZXF1aXJlKCdodHRwJykuY3JlYXRlU2VydmVyKGFwcClcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzL3JvdXRlcy5qcycpO1xuY29uc3QgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5jb25zdCBkYiA9IHJlcXVpcmUoJy4uL2RhdGFiYXNlL2luZGV4LmpzJyk7XG5jb25zdCBpbyA9IHJlcXVpcmUoJ3NvY2tldC5pbycpKHNlcnZlcik7XG5cbmlvLm9uKCdjb25uZWN0aW9uJywgc29ja2V0ID0+IHtcbiAgLy8gd2VsY29tZSB1c2VyXG4gIHNvY2tldC5lbWl0KCdtZXNzYWdlJywgJ1doYXRzIHRoZSBtb3ZlPycpXG5cbiAgLy8gcnVucyB3aGVuIGNsaWVudCBkaXNjb25uZWN0c1xuICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XG4gICAgaW8uZW1pdCgnbWVzc2FnZScsICdBIHVzZXIgaGFzIGxlZnQgdGhlIGNoYXQnKVxuICB9KVxuXG4gIHNvY2tldC5vbignbWVzc2FnZScsICh7IG5hbWUsIG1lc3NhZ2UgfSkgPT4ge1xuICAgIGlvLmVtaXQoJ21lc3NhZ2UnLCB7IG5hbWUsIG1lc3NhZ2UgfSlcbiAgfSlcbn0pXG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwO1xuXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoY29ycygpKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG5cbiAgY29uc3QgdGl0bGUgPSAnV2hhdHMgdGhlIE1vdmUnO1xuICBjb25zdCBjb250ZW50ID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoPEFwcCAvPik7XG4gIHJlcy5zZW5kKGxheW91dCh0aXRsZSwgY29udGVudCkpXG59KTtcblxuYXBwLnVzZSgnLycsIHJvdXRlcyk7XG5cbnNlcnZlci5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/index.js\n");

/***/ }),

/***/ "./server/routes/routes.js":
/*!*********************************!*\
  !*** ./server/routes/routes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var router = __webpack_require__(/*! express */ \"express\").Router();\n\nvar controllers = __webpack_require__(/*! ../../database/controllers/user.js */ \"./database/controllers/user.js\");\n\nrouter.post('/auth', controllers.create);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvcm91dGVzL3JvdXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvcm91dGVzLmpzPzVhNTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpLlJvdXRlcigpO1xuY29uc3QgY29udHJvbGxlcnMgPSByZXF1aXJlKCcuLi8uLi9kYXRhYmFzZS9jb250cm9sbGVycy91c2VyLmpzJyk7XG5cbnJvdXRlci5wb3N0KCcvYXV0aCcsIGNvbnRyb2xsZXJzLmNyZWF0ZSlcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/routes/routes.js\n");

/***/ }),

/***/ "./server/templates/layout.js":
/*!************************************!*\
  !*** ./server/templates/layout.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (title, content) {\n  return \"\\n<!DOCTYPE html>\\n  <html lang=\\\"en\\\">\\n    <head>\\n      <meta charset=\\\"UTF-8\\\">\\n      <title>\".concat(title, \"</title>\\n    </head>\\n    <body>\\n    <div id=\\\"root\\\">\").concat(content, \"</div>\\n    <script type=\\\"text/javascript\\\" src=\\\"client_bundle.js\\\"></script>\\n    </body>\\n  </html>\\n\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvdGVtcGxhdGVzL2xheW91dC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZlci90ZW1wbGF0ZXMvbGF5b3V0LmpzPzkxM2MiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAodGl0bGUsIGNvbnRlbnQpID0+YFxuPCFET0NUWVBFIGh0bWw+XG4gIDxodG1sIGxhbmc9XCJlblwiPlxuICAgIDxoZWFkPlxuICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XG4gICAgICA8dGl0bGU+JHt0aXRsZX08L3RpdGxlPlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICA8ZGl2IGlkPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cbiAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJjbGllbnRfYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9ib2R5PlxuICA8L2h0bWw+XG5gXG47Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/templates/layout.js\n");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiP2U0ZTUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/assertThisInitialized\n");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIj8yNGIzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/classCallCheck\n");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIj8zNmExIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/createClass\n");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIj8xODhkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/defineProperty\n");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIj8yMGE4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/getPrototypeOf\n");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIj83NGJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/inherits\n");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI/MDNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/possibleConstructorReturn\n");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI/MGRiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/slicedToArray\n");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/taggedTemplateLiteral\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbFwiPzk3NWQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWxcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/taggedTemplateLiteral\n");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIj80ZDliIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@babel/runtime/helpers/toConsumableArray\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIj83ZTllIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZDE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///http\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZ2FuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCI/MzIwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///morgan\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLWRvbS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj81M2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmlvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCI/Y2IzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///socket.io\n");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmlvLWNsaWVudC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIj84YmM1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///socket.io-client\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });