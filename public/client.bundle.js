/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/index.jsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.jsx":
/*!************************!*\
  !*** ./client/App.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ "./client/store/actions/index.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/app.css */ "./client/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var is_online__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! is-online */ "./node_modules/is-online/browser.js");
/* harmony import */ var is_online__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(is_online__WEBPACK_IMPORTED_MODULE_6__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









function App(_ref) {
  var route = _ref.route;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthenticated = _useSelector.isAuthenticated;

  var theme = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.theme;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__["getLocation"])());
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__["fetchHashtags"])());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: theme,
    className: _css_app_css__WEBPACK_IMPORTED_MODULE_5___default.a.body
  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes));
}

var loadData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return is_online__WEBPACK_IMPORTED_MODULE_6___default()();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadData() {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  component: isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(_css_app_css__WEBPACK_IMPORTED_MODULE_5___default.a)(App),
  loadData: loadData
});

/***/ }),

/***/ "./client/Routes.js":
/*!**************************!*\
  !*** ./client/Routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.jsx */ "./client/App.jsx");
/* harmony import */ var _pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/HomePage.jsx */ "./client/pages/HomePage.jsx");
/* harmony import */ var _pages_LogInPage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/LogInPage.jsx */ "./client/pages/LogInPage.jsx");
/* harmony import */ var _pages_SignUpPage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/SignUpPage.jsx */ "./client/pages/SignUpPage.jsx");
/* harmony import */ var _pages_UserPage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/UserPage.jsx */ "./client/pages/UserPage.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = ([_objectSpread(_objectSpread({}, _App_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]), {}, {
  routes: [_objectSpread(_objectSpread({}, _pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]), {}, {
    path: '/',
    exact: true
  }), _objectSpread(_objectSpread({}, _pages_LogInPage_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]), {}, {
    path: '/login'
  }), _objectSpread(_objectSpread({}, _pages_SignUpPage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]), {}, {
    path: '/signup'
  }), _objectSpread(_objectSpread({}, _pages_UserPage_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]), {}, {
    path: '/main'
  })]
})]);

/***/ }),

/***/ "./client/components/carousel/Carousel.jsx":
/*!*************************************************!*\
  !*** ./client/components/carousel/Carousel.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _css_carousel_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/carousel.css */ "./client/css/carousel.css");
/* harmony import */ var _css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_carousel_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function ControlledCarousel(props) {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.hashtag;
  }),
      activeHashtags = _useSelector.activeHashtags;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(activeHashtags),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1]; // const items = ["#nightout", "#chill", "#studybuddy"];


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setItems(activeHashtags);
  }, [items, activeHashtags]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    item: true,
    xs: 12,
    direction: "column",
    justify: "center",
    align: "center",
    className: _css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default.a.carousel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, null, items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: _css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default.a.item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      hashtag: "#".concat(item)
    }));
  }))));
}

var Item = function Item(_ref) {
  var hashtag = _ref.hashtag;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthenticated = _useSelector2.isAuthenticated;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, hashtag), isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default.a.button,
    onClick: console.log("link to room")
  }, "Check it out!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default.a)(ControlledCarousel));

/***/ }),

/***/ "./client/components/footer/Footer.jsx":
/*!*********************************************!*\
  !*** ./client/components/footer/Footer.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/footer.css */ "./client/css/footer.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_footer_css__WEBPACK_IMPORTED_MODULE_7__);








var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#1D1D1D"
    },
    secondary: {
      main: "#C38FFF"
    }
  }
});

var Footer = function Footer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.footerLeft
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "secondary",
    "aria-label": "add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "main",
    fontSize: "large"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_footer_css__WEBPACK_IMPORTED_MODULE_7___default.a.footerRight
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_css_footer_css__WEBPACK_IMPORTED_MODULE_7___default.a)(Footer));

/***/ }),

/***/ "./client/components/form/AuthForm.jsx":
/*!*********************************************!*\
  !*** ./client/components/form/AuthForm.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/loginForm.css */ "./client/css/loginForm.css");
/* harmony import */ var _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_loginForm_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions */ "./client/store/actions/index.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var AuthForm = function AuthForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      isAuthenticated = _ref.isAuthenticated,
      customText = _ref.customText,
      buttonText = _ref.buttonText,
      page = _ref.page;
  var token = isAuthenticated.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: "",
    email: "",
    password: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    fixed: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.chatform,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handleSubmit(state);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
    component: "h1",
    variant: "h5"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.textfield,
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    onChange: handleChange,
    autoFocus: true
  }), page === "signup" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
    component: "h1",
    variant: "h5"
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], _defineProperty({
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.textfield,
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "username",
    name: "username",
    label: "Username",
    autoFocus: true,
    onChange: handleChange
  }, "required", true))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
    component: "h1",
    variant: "h5"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.textfield,
    variant: "outlined",
    margin: "normal",
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    onChange: handleChange,
    autoComplete: "current-password",
    required: true,
    fullWidth: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttoncontainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: page === "login" ? "/main" : "/login",
    onClick: function onClick() {
      return handleSubmit(state);
    },
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: _css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttontext
  }, buttonText))))));
};

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_css_loginForm_css__WEBPACK_IMPORTED_MODULE_5___default.a)(AuthForm));

/***/ }),

/***/ "./client/components/header/Header.jsx":
/*!*********************************************!*\
  !*** ./client/components/header/Header.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/index.js */ "./client/store/actions/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/header.css */ "./client/css/header.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Header = function Header(_ref) {
  var showNavMenu = _ref.showNavMenu,
      isAuthenticated = _ref.isAuthenticated;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      email = _useSelector.email;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.coords;
  }),
      longitude = _useSelector2.lng,
      latitude = _useSelector2.lat;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var handleChange = function handleChange(e) {
    setSearch(_objectSpread(_objectSpread({}, search), {}, _defineProperty({}, e.target.name, e.target.value)));
    console.log(search);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__["incrementHashtag"])({
      search: search,
      email: email,
      location: {
        longitude: longitude,
        latitude: latitude
      }
    }));
    setSearch("");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons__WEBPACK_IMPORTED_MODULE_2__["IconContext"].Provider, {
    value: {
      color: "#C38FFF"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchContainer
  }, isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "search",
    name: "hashtag",
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a.headerIconContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a.headerIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "#",
    onClick: function onClick() {
      return showNavMenu ? dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__["hideNavigation"])()) : dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__["showNavigation"])());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaBars"], {
    size: 35,
    color: "#C38FFF"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a)(Header));

/***/ }),

/***/ "./client/components/map/Map.jsx":
/*!***************************************!*\
  !*** ./client/components/map/Map.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mapStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapStyles.js */ "./client/components/map/mapStyles.js");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");
/* harmony import */ var _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/index.js */ "./client/store/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/Footer.jsx */ "./client/components/footer/Footer.jsx");
/* harmony import */ var _slider_Slider_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slider/Slider.jsx */ "./client/components/slider/Slider.jsx");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_map_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../css/map.css */ "./client/css/map.css");
/* harmony import */ var _css_map_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_map_css__WEBPACK_IMPORTED_MODULE_8__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var libraries = ["places"];
var mapContainerStyle = {
  width: "750px",
  height: "750px",
  borderRadius: "7px"
};
var options = {
  styles: _mapStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  disableDefaultUI: true,
  zoomControl: true
};

var Map = function Map(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var location = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.coords;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.map;
  }),
      radius = _useSelector.radius;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    location: location,
    visible: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      marker = _useState2[0],
      setMarker = _useState2[1];

  var _useLoadScript = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["useLoadScript"])({
    googleMapsApiKey: "AIzaSyAV7gz5JA_vBDlqrZS9Bl-9-NMKIMgcjds",
    libraries: libraries
  }),
      isLoaded = _useLoadScript.isLoaded,
      loadError = _useLoadScript.loadError;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__["getLocation"])());
  }, []);
  var onMapClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var coords = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    };
    var lat = coords.lat,
        lng = coords.lng;
    setMarker(_objectSpread(_objectSpread({}, marker), {}, {
      visible: true,
      location: {
        lat: lat,
        lng: lng
      }
    }));
  }, [marker]);
  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var onMapLoad = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (map) {
    mapRef.current = map;
  }, []);
  if (loadError) return "error loading maps";
  if (!isLoaded) return "loading maps";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_map_css__WEBPACK_IMPORTED_MODULE_8___default.a.mapContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
    mapContainerStyle: mapContainerStyle,
    zoom: 10,
    center: location,
    options: options,
    onClick: onMapClick,
    onLoad: onMapLoad
  }, marker.visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    position: {
      lat: marker.location.lat,
      lng: marker.location.lng
    },
    onClick: function onClick() {
      setMarker(_objectSpread(_objectSpread({}, marker), {}, {
        visible: false
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["Circle"], {
    options: {
      fillColor: "red"
    },
    center: {
      lat: marker.location.lat,
      lng: marker.location.lng
    },
    radius: radius
  })) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_slider_Slider_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_css_map_css__WEBPACK_IMPORTED_MODULE_8___default.a)(Map));

/***/ }),

/***/ "./client/components/map/mapStyles.js":
/*!********************************************!*\
  !*** ./client/components/map/mapStyles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "featureType": "landscape.man_made",
  "elementType": "geometry",
  "stylers": [{
    "color": "#f7f1df"
  }]
}, {
  "featureType": "landscape.natural",
  "elementType": "geometry",
  "stylers": [{
    "color": "#d0e3b4"
  }]
}, {
  "featureType": "landscape.natural.terrain",
  "elementType": "geometry",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "poi.business",
  "elementType": "all",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "poi.medical",
  "elementType": "geometry",
  "stylers": [{
    "color": "#fbd3da"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#bde6ab"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#ffe15f"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#efd151"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "black"
  }]
}, {
  "featureType": "transit.station.airport",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#cfb2db"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#a2daf2"
  }]
}]);

/***/ }),

/***/ "./client/components/navigation/Navigation.jsx":
/*!*****************************************************!*\
  !*** ./client/components/navigation/Navigation.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_Map_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/Map.jsx */ "./client/components/map/Map.jsx");
/* harmony import */ var _slider_Slider_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slider/Slider.jsx */ "./client/components/slider/Slider.jsx");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/index.js */ "./client/store/actions/index.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../css/navbar.css */ "./client/css/navbar.css");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17__);



















var Navigation = function Navigation(_ref) {
  var isAuthenticated = _ref.isAuthenticated;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useDispatch"])();
  var nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons__WEBPACK_IMPORTED_MODULE_13__["IconContext"].Provider, {
    value: {
      color: "#C38FFF"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navText, " ").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "/",
    onClick: function onClick() {
      return dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_15__["hideMap"])());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.reactIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillHome"], {
    size: 35,
    color: "#C38FFF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navText, " ").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "/",
    onClick: function onClick() {
      return dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_15__["showMap"])());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.reactIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_si__WEBPACK_IMPORTED_MODULE_11__["SiOpenstreetmap"], {
    size: 35,
    color: "#C38FFF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Map"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navText, " ").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "/main",
    onClick: function onClick() {
      return dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_15__["hideMap"])());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.reactIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__["BsChatQuote"], {
    size: 35,
    color: "#C38FFF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Chat"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navText, " ").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "/",
    onClick: function onClick() {
      return dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_15__["endSession"])());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.reactIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__["HiOutlineLogout"], {
    size: 35,
    color: "#C38FFF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Log Out"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navText, " ").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.reactIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_10__["RiLightbulbFlashLine"], {
    size: 35,
    color: "#C38FFF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Light Mode"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navText, " ").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.reactIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaMoon"], {
    size: 35,
    color: "#C38FFF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Dark Mode")))), !isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navText, " ").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "/signup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.reactIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoMdCreate"], {
    size: 35,
    color: "#C38FFF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Sign Up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navText, " ").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.reactIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__["BiLogIn"], {
    size: 35,
    color: "#C38FFF"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Log In")))))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a.navContainer
  }, nav);
};

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_16___default()(_css_navbar_css__WEBPACK_IMPORTED_MODULE_17___default.a)(Navigation));

/***/ }),

/***/ "./client/components/room/ChatView.jsx":
/*!*********************************************!*\
  !*** ./client/components/room/ChatView.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_room_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/room.css */ "./client/css/room.css");
/* harmony import */ var _css_room_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_room_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_example_profile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/example-profile.png */ "./client/images/example-profile.png");





var ChatView = function ChatView(_ref) {
  var isTyping = _ref.isTyping,
      chat = _ref.chat,
      username = _ref.username;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.chatMessageList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageContent
  }, chat.map(function (message, index) {
    console.log(message);
    return username === message.username ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "".concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.youMessage, " ").concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: message.id,
      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.youMessageContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageText
    }, message.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageTime
    }, message.date))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "".concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageRow, " ").concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.otherMessage)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_example_profile_png__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageText
    }, message.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageTime
    }, message.date)));
  }), isTyping && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.youMessageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.loading, " ").concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageText)
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a)(ChatView));

/***/ }),

/***/ "./client/components/room/ConversationList.jsx":
/*!*****************************************************!*\
  !*** ./client/components/room/ConversationList.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_example_profile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/example-profile.png */ "./client/images/example-profile.png");
/* harmony import */ var _css_conversationList_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/conversationList.css */ "./client/css/conversationList.css");
/* harmony import */ var _css_conversationList_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_conversationList_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);





var ConversationList = function ConversationList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_conversationList_css__WEBPACK_IMPORTED_MODULE_2___default.a.conversationList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_conversationList_css__WEBPACK_IMPORTED_MODULE_2___default.a.conversation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_example_profile_png__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_conversationList_css__WEBPACK_IMPORTED_MODULE_2___default.a.titleText
  }, "Jorge Garcia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_conversationList_css__WEBPACK_IMPORTED_MODULE_2___default.a.createdDate
  }, "Oct 10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_conversationList_css__WEBPACK_IMPORTED_MODULE_2___default.a.conversationMessage
  }, "this is a message from Jorge")));
};

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_css_conversationList_css__WEBPACK_IMPORTED_MODULE_2___default.a)(ConversationList));

/***/ }),

/***/ "./client/components/room/Room.jsx":
/*!*****************************************!*\
  !*** ./client/components/room/Room.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/index.js */ "./client/store/actions/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/socketio.client.js */ "./client/helpers/socketio.client.js");
/* harmony import */ var _ChatView_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChatView.jsx */ "./client/components/room/ChatView.jsx");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _css_room_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../css/room.css */ "./client/css/room.css");
/* harmony import */ var _css_room_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_room_css__WEBPACK_IMPORTED_MODULE_15__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#1D1D1D"
    },
    secondary: {
      main: "#C38FFF"
    }
  }
});

var Room = function Room(_ref) {
  var username = _ref.username;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var rooms = ["StudyBuddy", "NetflixAndChill", "Excercise"];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(rooms[0]),
      _useState2 = _slicedToArray(_useState, 2),
      room = _useState2[0],
      setRoom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: username,
    message: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isUser = _useState6[0],
      setIsUser = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      chat = _useState8[0],
      setChat = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_2__["getDate"])());
    if (room) Object(_helpers_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__["connectSocket"])(room);
    Object(_helpers_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__["subscribeToChat"])(function (err, data) {
      if (err) return;
      setChat(function (prevChats) {
        return [].concat(_toConsumableArray(prevChats), [data]);
      });
    });
    return function () {
      console.log("clean up");
      setChat([]);
      Object(_helpers_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__["disconnectSocket"])();
    };
  }, [room]);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var username = state.username,
        message = state.message;
    var now = dayjs__WEBPACK_IMPORTED_MODULE_7___default()();
    Object(_helpers_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__["sendMessage"])(room, username, message, now.format("h:mm:ss a"));
    setState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        message: ""
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_room_css__WEBPACK_IMPORTED_MODULE_15___default.a.newMessageContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_13__["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "secondary",
    "aria-label": "add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default.a, {
    color: "main",
    fontSize: "large"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChatView_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    chat: chat,
    username: state.username
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: _css_room_css__WEBPACK_IMPORTED_MODULE_15___default.a.chatForm,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "send it",
    type: "text",
    name: "message",
    value: state.message,
    onChange: function onChange(e) {
      setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, e.target.name, e.target.value)));
    },
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__["HiOutlinePaperClip"], {
    className: _css_room_css__WEBPACK_IMPORTED_MODULE_15___default.a.chatFormIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__["BiSend"], {
    className: _css_room_css__WEBPACK_IMPORTED_MODULE_15___default.a.chatFormSendIcon,
    onClick: handleSubmit
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_14___default()(_css_room_css__WEBPACK_IMPORTED_MODULE_15___default.a)(Room));

/***/ }),

/***/ "./client/components/slider/Slider.jsx":
/*!*********************************************!*\
  !*** ./client/components/slider/Slider.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ "./client/store/actions/index.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: #c38fff;\n  font-size: 18px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Styles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());

var Slider = function Slider(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var location = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.coords;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    value: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var handleClick = function handleClick() {
    var value = state.value;
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__["setRadiusInMiles"])({
      radius: value,
      location: location
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styles, {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "value"
  }, state.value, " miles radius", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "range",
    min: 0,
    max: 85,
    name: "value",
    className: "slider",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__["BiSend"], {
    size: 28,
    color: "#C38FFF",
    onClick: handleClick
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./client/css/app.css":
/*!****************************!*\
  !*** ./client/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./app.css */ "./node_modules/css-loader/dist/cjs.js?!./client/css/app.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/css/carousel.css":
/*!*********************************!*\
  !*** ./client/css/carousel.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./carousel.css */ "./node_modules/css-loader/dist/cjs.js?!./client/css/carousel.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/css/conversationList.css":
/*!*****************************************!*\
  !*** ./client/css/conversationList.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./conversationList.css */ "./node_modules/css-loader/dist/cjs.js?!./client/css/conversationList.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/css/footer.css":
/*!*******************************!*\
  !*** ./client/css/footer.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./footer.css */ "./node_modules/css-loader/dist/cjs.js?!./client/css/footer.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/css/header.css":
/*!*******************************!*\
  !*** ./client/css/header.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./header.css */ "./node_modules/css-loader/dist/cjs.js?!./client/css/header.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/css/loginForm.css":
/*!**********************************!*\
  !*** ./client/css/loginForm.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./loginForm.css */ "./node_modules/css-loader/dist/cjs.js?!./client/css/loginForm.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/css/map.css":
/*!****************************!*\
  !*** ./client/css/map.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./map.css */ "./node_modules/css-loader/dist/cjs.js?!./client/css/map.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/css/navbar.css":
/*!*******************************!*\
  !*** ./client/css/navbar.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./client/css/navbar.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/css/room.css":
/*!*****************************!*\
  !*** ./client/css/room.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./room.css */ "./node_modules/css-loader/dist/cjs.js?!./client/css/room.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./client/helpers/socketio.client.js":
/*!*******************************************!*\
  !*** ./client/helpers/socketio.client.js ***!
  \*******************************************/
/*! exports provided: connectSocket, disconnectSocket, subscribeToChat, sendMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectSocket", function() { return disconnectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToChat", function() { return subscribeToChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


var socket;
var connectSocket = function connectSocket(room) {
  socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:5000', {
    transports: ['websocket', 'polling', 'flashsocket']
  });
  console.log('connecting socket...');
  if (socket && room) socket.emit('join', room);
};
var disconnectSocket = function disconnectSocket() {
  console.log('disconnecting socket...');
  if (socket) socket.disconnect();
};
var subscribeToChat = function subscribeToChat(cb) {
  if (!socket) return true;
  socket.on('chat', function (msg) {
    console.log('websocket event received');
    return cb(null, msg);
  });
};
var sendMessage = function sendMessage(room, username, message, date) {
  if (socket) socket.emit('chat', {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
    room: room,
    username: username,
    message: message,
    date: date
  });
};

/***/ }),

/***/ "./client/images/example-profile.png":
/*!*******************************************!*\
  !*** ./client/images/example-profile.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/4ccdf5c2faec48ebcff6195fcec52bdc-example-profile.png");

/***/ }),

/***/ "./client/images/hashtag.svg":
/*!***********************************!*\
  !*** ./client/images/hashtag.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/54a0a08696c4c4a8c83117a912e30f89-hashtag.svg");

/***/ }),

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Routes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Routes.js */ "./client/Routes.js");
/* harmony import */ var _store_reducers_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/reducers/index.js */ "./client/store/reducers/index.js");
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ "./node_modules/isomorphic-style-loader/StyleContext.js");
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_11__);












var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_8___default.a.create({
  baseURL: "/api"
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_store_reducers_index_js__WEBPACK_IMPORTED_MODULE_10__["default"], window.INITIAL_STATE, Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_6__["default"].withExtraArgument(axiosInstance)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

var insertCss = function insertCss() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var removeCss = styles.map(function (style) {
    return style._insertCss();
  });
  return function () {
    return removeCss.forEach(function (dispose) {
      return dispose();
    });
  };
};

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_11___default.a.Provider, {
  value: {
    insertCss: insertCss
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__["renderRoutes"])(_Routes_js__WEBPACK_IMPORTED_MODULE_9__["default"]))))), document.querySelector("#root"));

/***/ }),

/***/ "./client/pages/HomePage.jsx":
/*!***********************************!*\
  !*** ./client/pages/HomePage.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Header.jsx */ "./client/components/header/Header.jsx");
/* harmony import */ var _components_navigation_Navigation_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navigation/Navigation.jsx */ "./client/components/navigation/Navigation.jsx");
/* harmony import */ var _components_room_ConversationList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/room/ConversationList.jsx */ "./client/components/room/ConversationList.jsx");
/* harmony import */ var _components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/Footer.jsx */ "./client/components/footer/Footer.jsx");
/* harmony import */ var _components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/carousel/Carousel.jsx */ "./client/components/carousel/Carousel.jsx");
/* harmony import */ var _components_room_Room_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/room/Room.jsx */ "./client/components/room/Room.jsx");
/* harmony import */ var _components_map_Map_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/map/Map.jsx */ "./client/components/map/Map.jsx");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions */ "./client/store/actions/index.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/app.css */ "./client/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_11__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var HomePage = function HomePage(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthenticated = _useSelector.isAuthenticated,
      username = _useSelector.username;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      hashtags = _useState2[0],
      setHashtags = _useState2[1];

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.map;
  }),
      showMap = _useSelector2.showMap;

  var showNavigation = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.nav;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_9__["fetchHashtags"])());
  }, [hashtags, setHashtags]);

  var renderView = function renderView() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _css_app_css__WEBPACK_IMPORTED_MODULE_10___default.a.appContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      showNavMenu: showNavigation,
      isAuthenticated: isAuthenticated
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation_Navigation_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isAuthenticated: isAuthenticated
    }), showMap && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_map_Map_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null), !showMap && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null), !showMap && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderView());
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_11___default()(_css_app_css__WEBPACK_IMPORTED_MODULE_10___default.a)(HomePage)
});

/***/ }),

/***/ "./client/pages/LogInPage.jsx":
/*!************************************!*\
  !*** ./client/pages/LogInPage.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Header.jsx */ "./client/components/header/Header.jsx");
/* harmony import */ var _components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/carousel/Carousel.jsx */ "./client/components/carousel/Carousel.jsx");
/* harmony import */ var _components_form_AuthForm_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/AuthForm.jsx */ "./client/components/form/AuthForm.jsx");
/* harmony import */ var _components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/Footer.jsx */ "./client/components/footer/Footer.jsx");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions */ "./client/store/actions/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/app.css */ "./client/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var LogInPage = function LogInPage(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthenticated = _useSelector.isAuthenticated;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Thank you for being a part of our community."),
      _useState2 = _slicedToArray(_useState, 2),
      customText = _useState2[0],
      setCustomText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Sign In"),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonText = _useState4[0],
      setButtonText = _useState4[1];

  var handleSignin = function handleSignin(state) {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_6__["startSession"])(state));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_app_css__WEBPACK_IMPORTED_MODULE_9___default.a.appContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AuthForm_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isAuthenticated: isAuthenticated,
    customText: customText,
    buttonText: buttonText,
    handleSubmit: handleSignin,
    page: "login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_css_app_css__WEBPACK_IMPORTED_MODULE_9___default.a)(LogInPage)
});

/***/ }),

/***/ "./client/pages/SignUpPage.jsx":
/*!*************************************!*\
  !*** ./client/pages/SignUpPage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Header.jsx */ "./client/components/header/Header.jsx");
/* harmony import */ var _components_form_AuthForm_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/AuthForm.jsx */ "./client/components/form/AuthForm.jsx");
/* harmony import */ var _components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/carousel/Carousel.jsx */ "./client/components/carousel/Carousel.jsx");
/* harmony import */ var _components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/Footer.jsx */ "./client/components/footer/Footer.jsx");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions */ "./client/store/actions/index.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/app.css */ "./client/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_8__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var SignupPage = function SignupPage(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthenticated = _useSelector.isAuthenticated;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("We'll never share your info with anyone else."),
      _useState2 = _slicedToArray(_useState, 2),
      customText = _useState2[0],
      setCustomText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Sign Up"),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonText = _useState4[0],
      setButtonText = _useState4[1];

  var handleSignup = function handleSignup(state) {
    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_6__["createUser"])(state));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_app_css__WEBPACK_IMPORTED_MODULE_8___default.a.appContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AuthForm_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isAuthenticated: isAuthenticated,
    customText: customText,
    buttonText: buttonText,
    handleSubmit: handleSignup,
    page: "signup"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  component: isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_css_app_css__WEBPACK_IMPORTED_MODULE_8___default.a)(SignupPage)
});

/***/ }),

/***/ "./client/pages/UserPage.jsx":
/*!***********************************!*\
  !*** ./client/pages/UserPage.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Header.jsx */ "./client/components/header/Header.jsx");
/* harmony import */ var _components_navigation_Navigation_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navigation/Navigation.jsx */ "./client/components/navigation/Navigation.jsx");
/* harmony import */ var _components_room_ConversationList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/room/ConversationList.jsx */ "./client/components/room/ConversationList.jsx");
/* harmony import */ var _components_room_Room_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/room/Room.jsx */ "./client/components/room/Room.jsx");
/* harmony import */ var _components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/Footer.jsx */ "./client/components/footer/Footer.jsx");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ "./node_modules/isomorphic-style-loader/withStyles.js");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/app.css */ "./client/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_8__);










var UserPage = function UserPage(props) {
  var showNavigation = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.nav;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.map;
  }),
      showMap = _useSelector.showMap;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.auth;
  }),
      isAuthenticated = _useSelector2.isAuthenticated,
      username = _useSelector2.username;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_app_css__WEBPACK_IMPORTED_MODULE_8___default.a.appContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showNavMenu: showNavigation,
    isAuthenticated: isAuthenticated
  }), showNavigation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation_Navigation_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isAuthenticated: isAuthenticated
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_room_ConversationList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_room_Room_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    username: username
  })));
};

function loadData() {
  console.log("data from user page loading");
}

/* harmony default export */ __webpack_exports__["default"] = ({
  component: isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_css_app_css__WEBPACK_IMPORTED_MODULE_8___default.a)(UserPage),
  loadData: loadData
});

/***/ }),

/***/ "./client/store/actions/index.js":
/*!***************************************!*\
  !*** ./client/store/actions/index.js ***!
  \***************************************/
/*! exports provided: START_SESSION, startSession, CREATE_USER, createUser, END_SESSION, endSession, FETCH_USERS, fetchUsers, GET_LOCATION, getLocation, FIND_USERS, findUsers, GET_DISTANCE_BETWEEN_USERS, getDistanceBetweenUsers, HIDE_MAP, SHOW_MAP, showMap, hideMap, SET_RADIUS_IN_MILES, setRadiusInMiles, INCREMENT_HASHTAG, DECREMENT_HASHTAG, FETCH_HASHTAGS, incrementHashtag, decrementHashtag, fetchHashtags, GET_DATE, getDate, CHANGE_THEME_DARK, CHANGE_THEME_LIGHT, toDarkMode, toLightMode, SHOW_NAV, HIDE_NAV, showNavigation, hideNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_SESSION", function() { return START_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSession", function() { return startSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_USER", function() { return CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_SESSION", function() { return END_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endSession", function() { return endSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USERS", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOCATION", function() { return GET_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_USERS", function() { return FIND_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUsers", function() { return findUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DISTANCE_BETWEEN_USERS", function() { return GET_DISTANCE_BETWEEN_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenUsers", function() { return getDistanceBetweenUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_MAP", function() { return HIDE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MAP", function() { return SHOW_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMap", function() { return showMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMap", function() { return hideMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RADIUS_IN_MILES", function() { return SET_RADIUS_IN_MILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRadiusInMiles", function() { return setRadiusInMiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_HASHTAG", function() { return INCREMENT_HASHTAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_HASHTAG", function() { return DECREMENT_HASHTAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_HASHTAGS", function() { return FETCH_HASHTAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementHashtag", function() { return incrementHashtag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementHashtag", function() { return decrementHashtag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHashtags", function() { return fetchHashtags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DATE", function() { return GET_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_THEME_DARK", function() { return CHANGE_THEME_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_THEME_LIGHT", function() { return CHANGE_THEME_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDarkMode", function() { return toDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLightMode", function() { return toLightMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_NAV", function() { return SHOW_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_NAV", function() { return HIDE_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNavigation", function() { return showNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNavigation", function() { return hideNavigation; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/////////////////////////////////////
/////////  AUTHENTICATION  /////////
////////////////////////////////////
var START_SESSION = 'start_session';
var startSession = function startSession(credentials) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.post('/login', credentials);

            case 2:
              res = _context.sent;
              dispatch({
                type: START_SESSION,
                payload: res
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};
var CREATE_USER = 'create_user';
var createUser = function createUser(credentials) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.post('/register', credentials);

            case 2:
              res = _context2.sent;
              dispatch({
                type: CREATE_USER,
                payload: res
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var END_SESSION = 'end_session';
var endSession = function endSession() {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.post('/logout');

            case 2:
              res = _context3.sent;
              dispatch({
                type: END_SESSION
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
}; /////////////////////////////////////
///////////////  User  /////////////
///////////////////////////////////

var FETCH_USERS = 'fetch_users';
var fetchUsers = function fetchUsers() {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return api.get('/users');

            case 2:
              res = _context4.sent;
              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
}; //////////////////////////////////////
//////////////// Map  ////////////////
/////////////////////////////////////

var GET_LOCATION = 'get_location';
function getLocation() {
  return function (dispatch) {
    var geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(function (position) {
      var _position$coords = position.coords,
          lat = _position$coords.latitude,
          lng = _position$coords.longitude;
      dispatch({
        type: GET_LOCATION,
        payload: {
          lat: lat,
          lng: lng
        }
      });
    });
  };
}
;
var FIND_USERS = 'find_users';
var findUsers = function findUsers(coords) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var GET_DISTANCE_BETWEEN_USERS = 'get_distance_between_users';
var getDistanceBetweenUsers = function getDistanceBetweenUsers() {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({
                type: GET_DISTANCE_BETWEEN_USERS,
                payload: res
              });

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x16, _x17, _x18) {
      return _ref6.apply(this, arguments);
    };
  }();
};
var HIDE_MAP = 'hide_map';
var SHOW_MAP = 'show_map';
var showMap = function showMap() {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              dispatch({
                type: SHOW_MAP
              });

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x19, _x20, _x21) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var hideMap = function hideMap() {
  return /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dispatch, getState, api) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              dispatch({
                type: HIDE_MAP
              });

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x22, _x23, _x24) {
      return _ref8.apply(this, arguments);
    };
  }();
};
var SET_RADIUS_IN_MILES = 'set_radius_in_miles';
var setRadiusInMiles = function setRadiusInMiles(obj) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return api.post('/mapradius', obj);

            case 2:
              res = _context9.sent;
              dispatch({
                type: SET_RADIUS_IN_MILES,
                payload: res
              });

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x25, _x26, _x27) {
      return _ref9.apply(this, arguments);
    };
  }();
}; /////////////////////////////////////
////////////  Hashtags  ////////////
////////////////////////////////////

var INCREMENT_HASHTAG = 'increment_hashtag';
var DECREMENT_HASHTAG = 'decrement_hashtag';
var FETCH_HASHTAGS = 'fetch_hashtags';
var incrementHashtag = function incrementHashtag(hashtag) {
  return /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return api.post('/hashtag', hashtag);

            case 2:
              res = _context10.sent;
              dispatch({
                type: INCREMENT_HASHTAG,
                payload: res
              });

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x28, _x29, _x30) {
      return _ref10.apply(this, arguments);
    };
  }();
};
var decrementHashtag = function decrementHashtag() {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return api.patch('/hashtag');

            case 2:
              res = _context11.sent;
              dispatch({
                type: DECREMENT_HASHTAG,
                payload: res
              });

            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x31, _x32, _x33) {
      return _ref11.apply(this, arguments);
    };
  }();
};
var fetchHashtags = function fetchHashtags() {
  return /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return api.get('/hashtag');

            case 2:
              res = _context12.sent;
              dispatch({
                type: FETCH_HASHTAGS,
                payload: res
              });

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x34, _x35, _x36) {
      return _ref12.apply(this, arguments);
    };
  }();
}; //////////////////////////////////////
/////////////// Date  ////////////////
/////////////////////////////////////

var GET_DATE = 'get_date';
var getDate = function getDate() {
  return function (dispatch, getState, api) {
    dispatch({
      type: GET_DATE
    });
  };
}; //////////////////////////////////////
/////////////// Theme  ///////////////
/////////////////////////////////////

var CHANGE_THEME_DARK = 'change_theme_dark';
var CHANGE_THEME_LIGHT = 'change_theme_light';
var toDarkMode = function toDarkMode() {
  return function (dispatch, getState, api) {
    dispatch({
      type: CHANGE_THEME_DARK
    });
  };
};
var toLightMode = function toLightMode() {
  return function (dispatch, getState, api) {
    dispatch({
      type: CHANGE_THEME_LIGHT
    });
  };
}; ///////////////////////////////////
//////////  Navigation  //////////
//////////////////////////////////

var SHOW_NAV = 'show_nav';
var HIDE_NAV = 'hide_nav';
var showNavigation = function showNavigation() {
  return function (dispatch, getState, api) {
    dispatch({
      type: SHOW_NAV
    });
  };
};
var hideNavigation = function hideNavigation() {
  return function (dispatch, getState, api) {
    dispatch({
      type: HIDE_NAV
    });
  };
};

/***/ }),

/***/ "./client/store/reducers/authReducer.js":
/*!**********************************************!*\
  !*** ./client/store/reducers/authReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./client/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  isAuthenticated: false,
  username: null,
  email: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["START_SESSION"]:
      return _objectSpread(_objectSpread({}, state), action.payload.data);

    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["END_SESSION"]:
      return {
        isAuthenticated: false,
        username: null,
        email: null
      };

    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["CREATE_USER"]:
      return _objectSpread(_objectSpread({}, state), action.payload.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/reducers/dateReducer.js":
/*!**********************************************!*\
  !*** ./client/store/reducers/dateReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/index.js */ "./client/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var now = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_index_js__WEBPACK_IMPORTED_MODULE_1__["GET_DATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        date: now.format("h:mm:ss a")
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/reducers/hashtagReducer.js":
/*!*************************************************!*\
  !*** ./client/store/reducers/hashtagReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./client/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  activeHashtags: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_HASHTAG"]:
      return _objectSpread(_objectSpread({}, state), action.payload.data);

    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_HASHTAG"]:
      return _objectSpread(_objectSpread({}, state), action.payload.data);

    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_HASHTAGS"]:
      return _objectSpread(_objectSpread({}, state), action.payload.data);

    default:
      return state;
  }

  ;
});

/***/ }),

/***/ "./client/store/reducers/index.js":
/*!****************************************!*\
  !*** ./client/store/reducers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _usersReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersReducer.js */ "./client/store/reducers/usersReducer.js");
/* harmony import */ var _authReducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer.js */ "./client/store/reducers/authReducer.js");
/* harmony import */ var _locationReducer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locationReducer.js */ "./client/store/reducers/locationReducer.js");
/* harmony import */ var _themeReducer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themeReducer.js */ "./client/store/reducers/themeReducer.js");
/* harmony import */ var _mapReducer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapReducer.js */ "./client/store/reducers/mapReducer.js");
/* harmony import */ var _hashtagReducer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hashtagReducer.js */ "./client/store/reducers/hashtagReducer.js");
/* harmony import */ var _dateReducer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dateReducer.js */ "./client/store/reducers/dateReducer.js");
/* harmony import */ var _navigationReducer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigationReducer.js */ "./client/store/reducers/navigationReducer.js");









/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  users: _usersReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _authReducer_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  coords: _locationReducer_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  theme: _themeReducer_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  map: _mapReducer_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  hashtag: _hashtagReducer_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  date: _dateReducer_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  nav: _navigationReducer_js__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./client/store/reducers/locationReducer.js":
/*!**************************************************!*\
  !*** ./client/store/reducers/locationReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./client/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lng: 40.7,
    lat: 54
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["GET_LOCATION"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/reducers/mapReducer.js":
/*!*********************************************!*\
  !*** ./client/store/reducers/mapReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./client/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  showMap: false,
  radius: 20
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["SHOW_MAP"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        showMap: true
      });

    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["HIDE_MAP"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        showMap: false
      });

    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["SET_RADIUS_IN_MILES"]:
      return _objectSpread(_objectSpread({}, state), action.payload.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/reducers/navigationReducer.js":
/*!****************************************************!*\
  !*** ./client/store/reducers/navigationReducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./client/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["SHOW_NAV"]:
      return true;

    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["HIDE_NAV"]:
      return false;

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/reducers/themeReducer.js":
/*!***********************************************!*\
  !*** ./client/store/reducers/themeReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./client/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialTheme = {
  backgroundColor: '#FFF',
  color: '#333',
  height: '100vh'
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialTheme;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["CHANGE_THEME_DARK"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        backgroundColor: '#333',
        color: '#FFF',
        height: '100vh'
      });

    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["CHANGE_THEME_LIGHT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        backgroundColor: '#FFF',
        color: '#333',
        height: '100vh'
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/reducers/usersReducer.js":
/*!***********************************************!*\
  !*** ./client/store/reducers/usersReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ "./client/store/actions/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__["FETCH_USERS"]:
      return action.payload.data;

    default:
      return state;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/app.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/app.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: grid;\n  place-items: center center;\n}\n\nhtml {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 10px;\n}\n\nglobal::-webkit-scrollbar {\n  display: none;\n}\n\n.client-css-app__appContainer--2BtIa {\n  display: grid;\n  grid: 'headerLeft headerRight' 71px 'leftPane mainContent' 1fr 'footer chatForm' 78px / 275px 1fr;\n  min-width: 800px;\n  max-width: 100vw;\n  max-height: 100vh;\n  width: 100vw;\n  background: #FFF;\n  border-radius: 10px;\n  height: 100vh;\n}", "",{"version":3,"sources":["webpack://client/css/app.css"],"names":[],"mappings":"AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iGAAiG;EACjG,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\nhtml:global, body:global {\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody:global {\n  display: grid;\n  place-items: center center;\n}\n\nhtml:global {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 10px;\n}\n\nglobal::-webkit-scrollbar {\n  display: none;\n}\n\n.appContainer {\n  display: grid;\n  grid: 'headerLeft headerRight' 71px 'leftPane mainContent' 1fr 'footer chatForm' 78px / 275px 1fr;\n  min-width: 800px;\n  max-width: 100vw;\n  max-height: 100vh;\n  width: 100vw;\n  background: #FFF;\n  border-radius: 10px;\n  height: 100vh;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"appContainer": "client-css-app__appContainer--2BtIa"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/carousel.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/carousel.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".client-css-carousel__carousel--1vWSn {\n  background: #1D1D1D;\n  border-left: 1px solid #292929;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n}\n\n.client-css-carousel__item--35XWx {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 15px;\n  color: #eee;\n  height: 45vh;\n  width: 85vw;\n}\n\np {\n  font-size: 20px;\n}\n\n.client-css-carousel__button--2S7KU {\n  color: #eee !important;\n  font-size: 16px !important;\n}", "",{"version":3,"sources":["webpack://client/css/carousel.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;AAC5B","sourcesContent":[".carousel {\n  background: #1D1D1D;\n  border-left: 1px solid #292929;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 15px;\n  color: #eee;\n  height: 45vh;\n  width: 85vw;\n}\n\np {\n  font-size: 20px;\n}\n\n.button {\n  color: #eee !important;\n  font-size: 16px !important;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"carousel": "client-css-carousel__carousel--1vWSn",
	"item": "client-css-carousel__item--35XWx",
	"button": "client-css-carousel__button--2S7KU"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/conversationList.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/conversationList.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".client-css-conversationList__conversationList--LCGOg {\n  background: #1D1D1D;\n  grid-area: leftPane;\n  border-right: 1px solid #1D1D1D;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.client-css-conversationList__conversation--1KNMM.client-css-conversationList__active--1V0lp, .client-css-conversationList__conversation--1KNMM:hover {\n  background: #2D2D2D;\n  cursor: pointer;\n}\n\n.client-css-conversationList__conversation--1KNMM>img {\n  grid-row: span 2;\n  height: 40px;\n  width: 40px;\n  border-radius: 100%;\n}\n\n.client-css-conversationList__conversation--1KNMM {\n  display: grid;\n  grid-template-columns: 40px 1fr max-content;\n  grid-gap: 10px;\n  color: #ddd;\n  background: #1D1D1D;\n  font-size: 1.3rem;\n  border-bottom: 1px solid #2D2D2D;\n  padding: 20px 20px 20px 15px;\n}\n\n.client-css-conversationList__titleText--i2C0g {\n  font-weight: bold;\n  color: #eee;\n  padding-left: 5px;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.client-css-conversationList__createdDate--2_S-v {\n  color: #ddd;\n  white-space: nowrap;\n  font-size: 1rem;\n}\n\n.client-css-conversationList__conversationMessage--3q5xN {\n  grid-column: span 2;\n  padding-left: 5px;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}", "",{"version":3,"sources":["webpack://client/css/conversationList.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2CAA2C;EAC3C,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,gCAAgC;EAChC,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;AACzB","sourcesContent":[".conversationList {\n  background: #1D1D1D;\n  grid-area: leftPane;\n  border-right: 1px solid #1D1D1D;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.conversation.active, .conversation:hover {\n  background: #2D2D2D;\n  cursor: pointer;\n}\n\n.conversation>img {\n  grid-row: span 2;\n  height: 40px;\n  width: 40px;\n  border-radius: 100%;\n}\n\n.conversation {\n  display: grid;\n  grid-template-columns: 40px 1fr max-content;\n  grid-gap: 10px;\n  color: #ddd;\n  background: #1D1D1D;\n  font-size: 1.3rem;\n  border-bottom: 1px solid #2D2D2D;\n  padding: 20px 20px 20px 15px;\n}\n\n.titleText {\n  font-weight: bold;\n  color: #eee;\n  padding-left: 5px;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.createdDate {\n  color: #ddd;\n  white-space: nowrap;\n  font-size: 1rem;\n}\n\n.conversationMessage {\n  grid-column: span 2;\n  padding-left: 5px;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"conversationList": "client-css-conversationList__conversationList--LCGOg",
	"conversation": "client-css-conversationList__conversation--1KNMM",
	"active": "client-css-conversationList__active--1V0lp",
	"titleText": "client-css-conversationList__titleText--i2C0g",
	"createdDate": "client-css-conversationList__createdDate--2_S-v",
	"conversationMessage": "client-css-conversationList__conversationMessage--3q5xN"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/footer.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/footer.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".client-css-footer__footerLeft--10X1W {\n  grid-area: footer;\n  background: #242424;\n  display: grid;\n  grid: 40px / 40px;\n  align-content: center;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: 0 0 0 10px;\n  padding: 0 15px;\n}\n\n.client-css-footer__footerLeft--10X1W a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #C38FFF;\n  border-radius: 100%;\n  color: #1D1D1D;\n  text-decoration: none;\n  font-size: 3.8rem;\n  flex-direction: column;\n}\n\n.client-css-footer__footerRight--2hy3X {\n  grid-area: chatForm;\n  background: #242424;\n}", "",{"version":3,"sources":["webpack://client/css/footer.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,qBAAqB;EACrB,yCAAyC;EACzC,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB","sourcesContent":[".footerLeft {\n  grid-area: footer;\n  background: #242424;\n  display: grid;\n  grid: 40px / 40px;\n  align-content: center;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: 0 0 0 10px;\n  padding: 0 15px;\n}\n\n.footerLeft a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #C38FFF;\n  border-radius: 100%;\n  color: #1D1D1D;\n  text-decoration: none;\n  font-size: 3.8rem;\n  flex-direction: column;\n}\n\n.footerRight {\n  grid-area: chatForm;\n  background: #242424;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footerLeft": "client-css-footer__footerLeft--10X1W",
	"footerRight": "client-css-footer__footerRight--2hy3X"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/header.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/header.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/hashtag.svg */ "./client/images/hashtag.svg");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".client-css-header__searchContainer--w53Zl {\n  background: #242424;\n  grid-area: headerLeft;\n  display: grid;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 10px 0 0 0;\n  border-bottom: 1px solid #111111;\n}\n\n.client-css-header__header--208Pd {\n  display: grid;\n  grid: 36px / 5fr 1fr;\n  align-content: center;\n  align-items: center;\n  grid-area: headerRight;\n  color: #eee;\n  font-weight: bold;\n  font-size: 2.0rem;\n  border-radius: 0 10px 0 0;\n  padding: 0 20px;\n  border-bottom: 1px solid #111111;\n  background: #242424;\n}\n\n.client-css-header__headerIconContainer--3ZNEO {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  justify-items: end;\n  align-items: center;\n  list-style-type: none;\n  max-width: 236px;\n  place-content: center center;\n}\n\n.client-css-header__headerIcon--266qC {\n  cursor: pointer;\n  width: 38px;\n  height: 38px;\n  color: #C38FFF;\n}\n\n.client-css-header__headerIcon--266qC:hover {\n  background: #2D2D2D;\n  cursor: pointer;\n}\n\n.client-css-header__searchContainer--w53Zl input {\n  color: #111111;\n  outline: none;\n  font-weight: bold;\n  border-radius: 2px;\n  height: 30px;\n  border: 0;\n  padding-left: 48px !important;\n  padding-right: 20px !important;\n  font-size: 1.4rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat #eee;\n  background-position: 15px center !important;\n  background-size: 20px 20px;\n  width: 95%;\n}\n\n.client-css-header__searchContainer--w53Zl input:focus {\n  border-bottom: 2px solid #C38FFF !important;\n}\n\n.client-css-header__searchContainer--w53Zl input::placeholder {\n  color: #1D1D1D;\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://client/css/header.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,6BAA6B;EAC7B,8BAA8B;EAC9B,iBAAiB;EACjB,kEAAuD;EACvD,2CAA2C;EAC3C,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB","sourcesContent":[".searchContainer {\n  background: #242424;\n  grid-area: headerLeft;\n  display: grid;\n  align-items: center;\n  padding: 0 10px;\n  border-radius: 10px 0 0 0;\n  border-bottom: 1px solid #111111;\n}\n\n.header {\n  display: grid;\n  grid: 36px / 5fr 1fr;\n  align-content: center;\n  align-items: center;\n  grid-area: headerRight;\n  color: #eee;\n  font-weight: bold;\n  font-size: 2.0rem;\n  border-radius: 0 10px 0 0;\n  padding: 0 20px;\n  border-bottom: 1px solid #111111;\n  background: #242424;\n}\n\n.headerIconContainer {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  justify-items: end;\n  align-items: center;\n  list-style-type: none;\n  max-width: 236px;\n  place-content: center center;\n}\n\n.headerIcon {\n  cursor: pointer;\n  width: 38px;\n  height: 38px;\n  color: #C38FFF;\n}\n\n.headerIcon:hover {\n  background: #2D2D2D;\n  cursor: pointer;\n}\n\n.searchContainer input {\n  color: #111111;\n  outline: none;\n  font-weight: bold;\n  border-radius: 2px;\n  height: 30px;\n  border: 0;\n  padding-left: 48px !important;\n  padding-right: 20px !important;\n  font-size: 1.4rem;\n  background: url('../images/hashtag.svg') no-repeat #eee;\n  background-position: 15px center !important;\n  background-size: 20px 20px;\n  width: 95%;\n}\n\n.searchContainer input:focus {\n  border-bottom: 2px solid #C38FFF !important;\n}\n\n.searchContainer input::placeholder {\n  color: #1D1D1D;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"searchContainer": "client-css-header__searchContainer--w53Zl",
	"header": "client-css-header__header--208Pd",
	"headerIconContainer": "client-css-header__headerIconContainer--3ZNEO",
	"headerIcon": "client-css-header__headerIcon--266qC"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/loginForm.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/loginForm.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".client-css-loginForm__container--1BqUx {\n  display: flex;\n  background: #1D1D1D;\n  justify-content: center;\n}\n\n.client-css-loginForm__customform--p9mYq, .client-css-loginForm__label--1oxSP {\n  color: #eee !important;\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 15px;\n}\n\n.client-css-loginForm__customform--p9mYq {\n  display: flex;\n  background: #1D1D1D;\n  align-items: center;\n  outline: none;\n  border-radius: 4px;\n  letter-spacing: 1.4px;\n  white-space: normal;\n  justify-content: center;\n}\n\n.client-css-loginForm__textfield--Pmn4g {\n  background: #eee !important;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  min-width: 250px;\n}\n\np {\n  color: #eee;\n  padding-bottom: 7px;\n}\n\n.client-css-loginForm__buttoncontainer--3DLRM {\n  padding-top: 15px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.client-css-loginForm__buttontext--1ZgVO {\n  background: #C38FFF !important;\n  color: #eee;\n  font-size: 18px !important;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}", "",{"version":3,"sources":["webpack://client/css/loginForm.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;EAC3B,6BAA6B;EAC7B,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;EAC9B,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf","sourcesContent":[".container {\n  display: flex;\n  background: #1D1D1D;\n  justify-content: center;\n}\n\n.customform, .label {\n  color: #eee !important;\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 15px;\n}\n\n.customform {\n  display: flex;\n  background: #1D1D1D;\n  align-items: center;\n  outline: none;\n  border-radius: 4px;\n  letter-spacing: 1.4px;\n  white-space: normal;\n  justify-content: center;\n}\n\n.textfield {\n  background: #eee !important;\n  border-bottom: 1px solid #ddd;\n  background: transparent;\n  min-width: 250px;\n}\n\np {\n  color: #eee;\n  padding-bottom: 7px;\n}\n\n.buttoncontainer {\n  padding-top: 15px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.buttontext {\n  background: #C38FFF !important;\n  color: #eee;\n  font-size: 18px !important;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "client-css-loginForm__container--1BqUx",
	"customform": "client-css-loginForm__customform--p9mYq",
	"label": "client-css-loginForm__label--1oxSP",
	"textfield": "client-css-loginForm__textfield--Pmn4g",
	"buttoncontainer": "client-css-loginForm__buttoncontainer--3DLRM",
	"buttontext": "client-css-loginForm__buttontext--1ZgVO"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/map.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/map.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".client-css-map__mapContainer--FsDTN {\n  grid-area: mainContent;\n  background: #111111;\n  scrollbar-width: none;\n  border-bottom: #292929;\n  border-left: 1px solid #292929;\n  display: flex;\n  justify-content: center;\n  background: #1D1D1D;\n  padding: 30px 275px 0 0;\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}", "",{"version":3,"sources":["webpack://client/css/map.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf","sourcesContent":[".mapContainer {\n  grid-area: mainContent;\n  background: #111111;\n  scrollbar-width: none;\n  border-bottom: #292929;\n  border-left: 1px solid #292929;\n  display: flex;\n  justify-content: center;\n  background: #1D1D1D;\n  padding: 30px 275px 0 0;\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"mapContainer": "client-css-map__mapContainer--FsDTN"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/navbar.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/navbar.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".client-css-navbar__navContainer--1VqKg {\n  background: #1D1D1D;\n  grid-area: leftPane;\n  border-right: 1px solid #1D1D1D;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.client-css-navbar__navRow--UrDOY {\n  display: grid;\n  grid-template-columns: 40px 1fr max-content;\n  grid-gap: 10px;\n  color: #ddd;\n  background: #1D1D1D;\n  font-size: 1.3rem;\n  border-bottom: 1px solid #2D2D2D;\n  padding: 20px 20px 20px 15px;\n}\n\n.client-css-navbar__navRow--UrDOY:hover {\n  background: #2D2D2D;\n  cursor: pointer;\n}\n\n.client-css-navbar__reactIcon--3f34w {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 75px;\n  padding: 0 25px;\n}\n\n.client-css-navbar__navText--2B1iQ {\n  font-weight: bold;\n  color: #eee;\n  padding-left: 5px;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.client-css-navbar__navText--2B1iQ a {\n  text-decoration: none;\n  color: #f5f5f5;\n  font-size: 18px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n}\n\nnav, ul, li {\n  list-style: none;\n  list-style-position: outside;\n  padding: 0;\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://client/css/navbar.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,2CAA2C;EAC3C,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,gCAAgC;EAChC,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,4BAA4B;EAC5B,UAAU;EACV,SAAS;AACX","sourcesContent":[".navContainer {\n  background: #1D1D1D;\n  grid-area: leftPane;\n  border-right: 1px solid #1D1D1D;\n  overflow-y: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.navRow {\n  display: grid;\n  grid-template-columns: 40px 1fr max-content;\n  grid-gap: 10px;\n  color: #ddd;\n  background: #1D1D1D;\n  font-size: 1.3rem;\n  border-bottom: 1px solid #2D2D2D;\n  padding: 20px 20px 20px 15px;\n}\n\n.navRow:hover {\n  background: #2D2D2D;\n  cursor: pointer;\n}\n\n.reactIcon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 75px;\n  padding: 0 25px;\n}\n\n.navText {\n  font-weight: bold;\n  color: #eee;\n  padding-left: 5px;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.navText a {\n  text-decoration: none;\n  color: #f5f5f5;\n  font-size: 18px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n}\n\nnav, ul, li {\n  list-style: none;\n  list-style-position: outside;\n  padding: 0;\n  margin: 0;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navContainer": "client-css-navbar__navContainer--1VqKg",
	"navRow": "client-css-navbar__navRow--UrDOY",
	"reactIcon": "client-css-navbar__reactIcon--3f34w",
	"navText": "client-css-navbar__navText--2B1iQ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/room.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/room.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".client-css-room__newMessageContainer--DdZG- {\n  background: #1D1D1D;\n}\n\n.client-css-room__newMessageContainer--DdZG- {\n  background: #242424;\n  display: grid;\n  grid: 40px / 40px;\n  align-content: center;\n  grid-area: footer;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: 0 0 0 10px;\n  padding: 0 15px;\n}\n\n.client-css-room__newMessageContainer--DdZG- a {\n  display: grid;\n  place-content: center center;\n  background: #C38FFF;\n  border-radius: 100%;\n  color: #1D1D1D;\n  text-decoration: none;\n  font-size: 3.6rem;\n}\n\n.client-css-room__chatTitle--FsQFH, .client-css-room__chatForm--31_6e {\n  background: #292929;\n  color: #eee;\n}\n\n.client-css-room__chatTitleIcon--2KSWU, .client-css-room__chatFormIcon--105Qw, .client-css-room__chatFormSendIcon--2KIdV, .client-css-room__roomButtons--2l5wW {\n  cursor: pointer;\n}\n\n.client-css-room__chatFormIcon--105Qw, .client-css-room__chatFormSendIcon--2KIdV {\n  width: 34px;\n  height: 34px;\n  color: #C38FFF;\n}\n\n.client-css-room__chatTitle--FsQFH {\n  display: grid;\n  grid: 36px / 2fr 1fr;\n  align-content: center;\n  align-items: center;\n  grid-area: headerRight;\n  font-weight: bold;\n  font-size: 2.0rem;\n  border-radius: 0 10px 0 0;\n  padding: 0 20px;\n  border-bottom: solid;\n  border-bottom: #2d2d2d;\n}\n\n.client-css-room__roomButtons--2l5wW {\n  outline: none;\n  padding: 10px;\n  font-weight: bold;\n  border: 2px solid #ddd;\n  background-color: #1D1D1D;\n  color: #eee;\n  border-radius: 6px;\n  font-size: 1.2rem;\n}\n\n.client-css-room__titleIconContainer--3kG7u {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-self: stretch;\n  align-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.client-css-room__messageRow--1GuBC {\n  margin-bottom: 20px;\n  display: grid;\n  grid-auto-columns: 70%;\n}\n\n.client-css-room__messageRow--1GuBC img {\n  border-radius: 100%;\n  grid-row: span 2;\n  height: 40px;\n  width: 40px;\n}\n\n.client-css-room__messageTime--18FuA {\n  display: flex;\n  font-size: 1.3rem;\n  color: #777;\n  justify-content: flex-end;\n}\n\n.client-css-room__messageText--3P11W {\n  padding: 9px 14px;\n  font-size: 1.6rem;\n  margin-bottom: 5px;\n}\n\n.client-css-room__youMessage--3k75W .client-css-room__messageText--3P11W {\n  background: #C38FFF;\n  color: #242424;\n  border: 1px solid #242424;\n  border-radius: 14px 14px 0px 14px;\n}\n\n.client-css-room__messageContent--3K6Sc {\n  display: grid;\n}\n\n.client-css-room__youMessage--3k75W {\n  justify-content: end;\n  justify-items: end;\n}\n\n.client-css-room__youMessage--3k75W .client-css-room__messageContent--3K6Sc {\n  justify-items: end;\n}\n\n.client-css-room__otherMessage--63Clv .client-css-room__messageText--3P11W {\n  background: #eee;\n  color: #111;\n  border: 1px solid #ddd;\n  border-radius: 14px 14px 14px 0;\n}\n\n.client-css-room__otherMessage--63Clv {\n  justify-items: start;\n}\n\n.client-css-room__otherMessage--63Clv .client-css-room__messageContent--3K6Sc {\n  grid-template-columns: 48px 1fr;\n  grid-column-gap: 15px;\n}\n\n.client-css-room__chatForm--31_6e {\n  display: grid;\n  align-content: center;\n  align-items: center;\n  grid: 51px / 1fr 40px 40px;\n  grid-gap: 15px;\n  grid-area: chatForm;\n  border-radius: 0 0 10px 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 0 22px 0 42px;\n}\n\n.client-css-room__chatForm--31_6e input {\n  outline: none;\n  padding: 15px;\n  border: 2px solid #ddd;\n  color: #330;\n  border-radius: 6px;\n  font-size: 1.4rem;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.client-css-room__roomButtons--2l5wW:hover {\n  background: #2D2D2D;\n}\n\n.client-css-room__chatMessageList--hUbS8 {\n  grid-area: mainContent;\n  background: #111111;\n  scrollbar-width: none;\n  border-bottom: #292929;\n  border-left: 1px solid #292929;\n  display: flex;\n  flex-direction: column-reverse;\n  background: #1D1D1D;\n  padding: 0 20px;\n  overflow-y: scroll;\n}\n\n.client-css-room__youMessageContainer--9HGtU {\n  padding: 3px 0;\n}\n\n.client-css-room__loading--1TFvB {\n  display: grid;\n  width: 25px;\n}\n\n.client-css-room__loading--1TFvB:after {\n  overflow: hidden;\n  -webkit-animation: client-css-room__ellipsis--1xaR9 steps(4, end) 900ms infinite;\n  animation: client-css-room__ellipsis--1xaR9 steps(4, end) 900ms infinite;\n  content: \"\\2026\";\n  /* ascii code for the ellipsis character */\n  width: 0px;\n}\n\n@keyframes client-css-room__ellipsis--1xaR9 {\n  to {\n    width: 1.25em;\n  }\n}\n\n@-webkit-keyframes client-css-room__ellipsis--1xaR9 {\n  to {\n    width: 1.25em;\n  }\n}", "",{"version":3,"sources":["webpack://client/css/room.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;EACjB,yCAAyC;EACzC,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,+BAA+B;EAC/B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,0BAA0B;EAC1B,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,yCAAyC;EACzC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,gFAAwD;EACxD,wEAAgD;EAChD,gBAAgB;EAChB,0CAA0C;EAC1C,UAAU;AACZ;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF","sourcesContent":[".newMessageContainer {\n  background: #1D1D1D;\n}\n\n.newMessageContainer {\n  background: #242424;\n  display: grid;\n  grid: 40px / 40px;\n  align-content: center;\n  grid-area: footer;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  border-radius: 0 0 0 10px;\n  padding: 0 15px;\n}\n\n.newMessageContainer a {\n  display: grid;\n  place-content: center center;\n  background: #C38FFF;\n  border-radius: 100%;\n  color: #1D1D1D;\n  text-decoration: none;\n  font-size: 3.6rem;\n}\n\n.chatTitle, .chatForm {\n  background: #292929;\n  color: #eee;\n}\n\n.chatTitleIcon, .chatFormIcon, .chatFormSendIcon, .roomButtons {\n  cursor: pointer;\n}\n\n.chatFormIcon, .chatFormSendIcon {\n  width: 34px;\n  height: 34px;\n  color: #C38FFF;\n}\n\n.chatTitle {\n  display: grid;\n  grid: 36px / 2fr 1fr;\n  align-content: center;\n  align-items: center;\n  grid-area: headerRight;\n  font-weight: bold;\n  font-size: 2.0rem;\n  border-radius: 0 10px 0 0;\n  padding: 0 20px;\n  border-bottom: solid;\n  border-bottom: #2d2d2d;\n}\n\n.roomButtons {\n  outline: none;\n  padding: 10px;\n  font-weight: bold;\n  border: 2px solid #ddd;\n  background-color: #1D1D1D;\n  color: #eee;\n  border-radius: 6px;\n  font-size: 1.2rem;\n}\n\n.titleIconContainer {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-self: stretch;\n  align-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.messageRow {\n  margin-bottom: 20px;\n  display: grid;\n  grid-auto-columns: 70%;\n}\n\n.messageRow img {\n  border-radius: 100%;\n  grid-row: span 2;\n  height: 40px;\n  width: 40px;\n}\n\n.messageTime {\n  display: flex;\n  font-size: 1.3rem;\n  color: #777;\n  justify-content: flex-end;\n}\n\n.messageText {\n  padding: 9px 14px;\n  font-size: 1.6rem;\n  margin-bottom: 5px;\n}\n\n.youMessage .messageText {\n  background: #C38FFF;\n  color: #242424;\n  border: 1px solid #242424;\n  border-radius: 14px 14px 0px 14px;\n}\n\n.messageContent {\n  display: grid;\n}\n\n.youMessage {\n  justify-content: end;\n  justify-items: end;\n}\n\n.youMessage .messageContent {\n  justify-items: end;\n}\n\n.otherMessage .messageText {\n  background: #eee;\n  color: #111;\n  border: 1px solid #ddd;\n  border-radius: 14px 14px 14px 0;\n}\n\n.otherMessage {\n  justify-items: start;\n}\n\n.otherMessage .messageContent {\n  grid-template-columns: 48px 1fr;\n  grid-column-gap: 15px;\n}\n\n.chatForm {\n  display: grid;\n  align-content: center;\n  align-items: center;\n  grid: 51px / 1fr 40px 40px;\n  grid-gap: 15px;\n  grid-area: chatForm;\n  border-radius: 0 0 10px 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 0 22px 0 42px;\n}\n\n.chatForm input {\n  outline: none;\n  padding: 15px;\n  border: 2px solid #ddd;\n  color: #330;\n  border-radius: 6px;\n  font-size: 1.4rem;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.roomButtons:hover {\n  background: #2D2D2D;\n}\n\n.chatMessageList {\n  grid-area: mainContent;\n  background: #111111;\n  scrollbar-width: none;\n  border-bottom: #292929;\n  border-left: 1px solid #292929;\n  display: flex;\n  flex-direction: column-reverse;\n  background: #1D1D1D;\n  padding: 0 20px;\n  overflow-y: scroll;\n}\n\n.youMessageContainer {\n  padding: 3px 0;\n}\n\n.loading {\n  display: grid;\n  width: 25px;\n}\n\n.loading:after {\n  overflow: hidden;\n  -webkit-animation: ellipsis steps(4, end) 900ms infinite;\n  animation: ellipsis steps(4, end) 900ms infinite;\n  content: \"\\2026\";\n  /* ascii code for the ellipsis character */\n  width: 0px;\n}\n\n@keyframes ellipsis {\n  to {\n    width: 1.25em;\n  }\n}\n\n@-webkit-keyframes ellipsis {\n  to {\n    width: 1.25em;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"newMessageContainer": "client-css-room__newMessageContainer--DdZG-",
	"chatTitle": "client-css-room__chatTitle--FsQFH",
	"chatForm": "client-css-room__chatForm--31_6e",
	"chatTitleIcon": "client-css-room__chatTitleIcon--2KSWU",
	"chatFormIcon": "client-css-room__chatFormIcon--105Qw",
	"chatFormSendIcon": "client-css-room__chatFormSendIcon--2KIdV",
	"roomButtons": "client-css-room__roomButtons--2l5wW",
	"titleIconContainer": "client-css-room__titleIconContainer--3kG7u",
	"messageRow": "client-css-room__messageRow--1GuBC",
	"messageTime": "client-css-room__messageTime--18FuA",
	"messageText": "client-css-room__messageText--3P11W",
	"youMessage": "client-css-room__youMessage--3k75W",
	"messageContent": "client-css-room__messageContent--3K6Sc",
	"otherMessage": "client-css-room__otherMessage--63Clv",
	"chatMessageList": "client-css-room__chatMessageList--hUbS8",
	"youMessageContainer": "client-css-room__youMessageContainer--9HGtU",
	"loading": "client-css-room__loading--1TFvB",
	"ellipsis": "client-css-room__ellipsis--1xaR9"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.js.map