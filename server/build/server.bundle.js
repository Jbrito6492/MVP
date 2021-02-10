/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions */ \"./client/store/actions/index.js\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/app.css */ \"./client/css/app.css\");\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var is_online__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! is-online */ \"is-online\");\n/* harmony import */ var is_online__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(is_online__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\nfunction App(_ref) {\n  var route = _ref.route;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      isAuthenticated = _useSelector.isAuthenticated;\n\n  var theme = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.theme;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_4__[\"getLocation\"])());\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: theme,\n    className: _css_app_css__WEBPACK_IMPORTED_MODULE_6___default.a.body\n  }, !isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], {\n    to: \"/\"\n  }), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes));\n}\n\nvar loadData = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return is_online__WEBPACK_IMPORTED_MODULE_7___default()();\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function loadData() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_css_app_css__WEBPACK_IMPORTED_MODULE_6___default.a)(App),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./client/App.jsx?");

/***/ }),

/***/ "./client/Routes.js":
/*!**************************!*\
  !*** ./client/Routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.jsx */ \"./client/App.jsx\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HomePage.jsx */ \"./client/pages/HomePage.jsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar AsyncLogInPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"pages-LogInPage-jsx\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.all(/*! import() | pages-LogInPage-jsx */[__webpack_require__.e(\"default~pages-LogInPage-jsx~pages-SignupPage-jsx\"), __webpack_require__.e(\"pages-LogInPage-jsx\")]).then(__webpack_require__.bind(null, /*! ./pages/LogInPage.jsx */ \"./client/pages/LogInPage.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/LogInPage.jsx */ \"./client/pages/LogInPage.jsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/LogInPage.jsx\");\n  }\n});\nvar AsyncSignUpPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"pages-SignupPage-jsx\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return Promise.all(/*! import() | pages-SignupPage-jsx */[__webpack_require__.e(\"default~pages-LogInPage-jsx~pages-SignupPage-jsx\"), __webpack_require__.e(\"pages-SignupPage-jsx\")]).then(__webpack_require__.bind(null, /*! ./pages/SignupPage.jsx */ \"./client/pages/SignupPage.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/SignupPage.jsx */ \"./client/pages/SignupPage.jsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/SignupPage.jsx\");\n  }\n});\nvar AsyncUserPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"pages-UserPage-jsx\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | pages-UserPage-jsx */ \"pages-UserPage-jsx\").then(__webpack_require__.bind(null, /*! ./pages/UserPage.jsx */ \"./client/pages/UserPage.jsx\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/UserPage.jsx */ \"./client/pages/UserPage.jsx\");\n    }\n\n    return eval('require.resolve')(\"./pages/UserPage.jsx\");\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_objectSpread(_objectSpread({}, _App_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), {}, {\n  routes: [{\n    component: _pages_HomePage_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    path: '/',\n    exact: true\n  }, {\n    component: AsyncLogInPage,\n    path: '/login'\n  }, {\n    component: AsyncSignUpPage,\n    path: '/signup'\n  }, {\n    component: AsyncUserPage,\n    path: '/main'\n  }]\n})]);\n\n//# sourceURL=webpack:///./client/Routes.js?");

/***/ }),

/***/ "./client/components/carousel/Carousel.jsx":
/*!*************************************************!*\
  !*** ./client/components/carousel/Carousel.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ \"./client/store/actions/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-material-ui-carousel */ \"react-material-ui-carousel\");\n/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Item_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item.jsx */ \"./client/components/carousel/Item.jsx\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_carousel_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/carousel.css */ \"./client/css/carousel.css\");\n/* harmony import */ var _css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_carousel_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nfunction ControlledCarousel(props) {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.hashtags;\n  }),\n      hashtags = _useSelector.hashtags;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var isMounted = true;\n    if (isMounted) dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchHashtags\"])());\n    return function () {\n      isMounted = false;\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    container: true,\n    item: true,\n    xs: 12,\n    direction: \"column\",\n    justify: \"center\",\n    align: \"center\",\n    className: _css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default.a.carousel\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_4___default.a, null, hashtags.map(function (item, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index,\n      className: _css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default.a.item\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      hashtag: \"#\".concat(item)\n    }));\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_8___default()(_css_carousel_css__WEBPACK_IMPORTED_MODULE_7___default.a)(ControlledCarousel));\n\n//# sourceURL=webpack:///./client/components/carousel/Carousel.jsx?");

/***/ }),

/***/ "./client/components/carousel/Item.jsx":
/*!*********************************************!*\
  !*** ./client/components/carousel/Item.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ \"./client/store/actions/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/carousel.css */ \"./client/css/carousel.css\");\n/* harmony import */ var _css_carousel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_carousel_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar Item = function Item(_ref) {\n  var hashtag = _ref.hashtag;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      isAuthenticated = _useSelector.isAuthenticated;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, hashtag), isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    className: _css_carousel_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,\n    onClick: function onClick() {\n      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"navigateToRoom\"])(hashtag));\n    }\n  }, \"Check it out!\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_7___default()(_css_carousel_css__WEBPACK_IMPORTED_MODULE_6___default.a)(Item));\n\n//# sourceURL=webpack:///./client/components/carousel/Item.jsx?");

/***/ }),

/***/ "./client/components/footer/Footer.jsx":
/*!*********************************************!*\
  !*** ./client/components/footer/Footer.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Fab */ \"@material-ui/core/Fab\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Add */ \"@material-ui/icons/Add\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/footer.css */ \"./client/css/footer.css\");\n/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_footer_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar Footer = function Footer(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_footer_css__WEBPACK_IMPORTED_MODULE_4___default.a.footerLeft\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    style: {\n      color: \"#1D1D1D\"\n    },\n    \"aria-label\": \"add\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    style: {\n      color: \"#C38FFF\"\n    },\n    fontSize: \"large\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_footer_css__WEBPACK_IMPORTED_MODULE_4___default.a.footerRight\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_css_footer_css__WEBPACK_IMPORTED_MODULE_4___default.a)(Footer));\n\n//# sourceURL=webpack:///./client/components/footer/Footer.jsx?");

/***/ }),

/***/ "./client/components/header/Header.jsx":
/*!*********************************************!*\
  !*** ./client/components/header/Header.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ \"react-icons\");\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/index.js */ \"./client/store/actions/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/header.css */ \"./client/css/header.css\");\n/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_7__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var showNavMenu = _ref.showNavMenu,\n      isAuthenticated = _ref.isAuthenticated;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      email = _useSelector.email;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.hashtags;\n  }),\n      room = _useSelector2.room;\n\n  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user.location;\n  }),\n      longitude = _useSelector3.lng,\n      latitude = _useSelector3.lat;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    hashtag: \"\"\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      search = _useState2[0],\n      setSearch = _useState2[1];\n\n  var handleChange = function handleChange(e) {\n    setSearch(_objectSpread(_objectSpread({}, search), {}, _defineProperty({}, e.target.name, e.target.value)));\n  };\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[\"incrementHashtag\"])({\n      search: search,\n      email: email,\n      location: {\n        longitude: longitude,\n        latitude: latitude\n      }\n    })).then(function () {\n      dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[\"fetchHashtags\"])());\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n    setSearch(_objectSpread(_objectSpread({}, search), {}, {\n      hashtag: \"\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons__WEBPACK_IMPORTED_MODULE_2__[\"IconContext\"].Provider, {\n    value: {\n      color: \"#C38FFF\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a.searchContainer\n  }, isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    value: search.hashtag,\n    placeholder: \"search\",\n    name: \"hashtag\",\n    onChange: handleChange\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a.header\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, room && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"#\".concat(room))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a.headerIconContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a.headerIcon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n    to: \"#\",\n    onClick: function onClick() {\n      return showNavMenu ? dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[\"hideNavigation\"])()) : dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_3__[\"showNavigation\"])());\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__[\"FaBars\"], {\n    size: 35,\n    color: \"#C38FFF\"\n  })))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_6___default()(_css_header_css__WEBPACK_IMPORTED_MODULE_7___default.a)(Header));\n\n//# sourceURL=webpack:///./client/components/header/Header.jsx?");

/***/ }),

/***/ "./client/components/navigation/Navigation.jsx":
/*!*****************************************************!*\
  !*** ./client/components/navigation/Navigation.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"react-icons/hi\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ \"react-icons/io\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"react-icons/bs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ri */ \"react-icons/ri\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/si */ \"react-icons/si\");\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons */ \"react-icons\");\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _store_actions_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/index.js */ \"./client/store/actions/index.js\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../css/navbar.css */ \"./client/css/navbar.css\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Navigation = function Navigation(_ref) {\n  var isAuthenticated = _ref.isAuthenticated;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__[\"useSelector\"])(function (state) {\n    return state.hashtags;\n  }),\n      room = _useSelector.room;\n\n  var nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons__WEBPACK_IMPORTED_MODULE_11__[\"IconContext\"].Provider, {\n    value: {\n      color: \"#C38FFF\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"\".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navText, \" \").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navRow)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"], {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.reactIcon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__[\"AiFillHome\"], {\n    size: 35,\n    color: \"#C38FFF\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Home\"))), room && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"\".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navText, \" \").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navRow)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"], {\n    to: \"/main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.reactIcon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__[\"BsChatQuote\"], {\n    size: 35,\n    color: \"#C38FFF\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Chat\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"\".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navText, \" \").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navRow)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"], {\n    to: \"/\",\n    onClick: function onClick() {\n      return dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_13__[\"endSession\"])());\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.reactIcon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiOutlineLogout\"], {\n    size: 35,\n    color: \"#C38FFF\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Log Out\")))), !isAuthenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"\".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navText, \" \").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navRow)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"], {\n    to: \"/signup\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.reactIcon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_6__[\"IoMdCreate\"], {\n    size: 35,\n    color: \"#C38FFF\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Sign Up\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"\".concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navText, \" \").concat(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navRow)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Link\"], {\n    to: \"/login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.reactIcon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiLogIn\"], {\n    size: 35,\n    color: \"#C38FFF\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Log In\")))))));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a.navContainer\n  }, nav);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_14___default()(_css_navbar_css__WEBPACK_IMPORTED_MODULE_15___default.a)(Navigation));\n\n//# sourceURL=webpack:///./client/components/navigation/Navigation.jsx?");

/***/ }),

/***/ "./client/components/room/ChatView.jsx":
/*!*********************************************!*\
  !*** ./client/components/room/ChatView.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_room_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/room.css */ \"./client/css/room.css\");\n/* harmony import */ var _css_room_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_room_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_example_profile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/example-profile.png */ \"./client/images/example-profile.png\");\n\n\n\n\n\nvar ChatView = function ChatView(_ref) {\n  var isTyping = _ref.isTyping,\n      chat = _ref.chat,\n      username = _ref.username;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.chatMessageList\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageContent\n  }, chat.map(function (message, index) {\n    return username === message.username ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: message.id,\n      className: \"\".concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.youMessage, \" \").concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageRow)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.youMessageContainer\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageText\n    }, message.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageTime\n    }, message.date))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"\".concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageRow, \" \").concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.otherMessage)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageTime\n    }, message.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageContent\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: _images_example_profile_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageText\n    }, message.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageTime\n    }, message.date)));\n  }), isTyping && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.youMessageContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.loading, \" \").concat(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a.messageText)\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_css_room_css__WEBPACK_IMPORTED_MODULE_2___default.a)(ChatView));\n\n//# sourceURL=webpack:///./client/components/room/ChatView.jsx?");

/***/ }),

/***/ "./client/components/room/Room.jsx":
/*!*****************************************!*\
  !*** ./client/components/room/Room.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/index.js */ \"./client/store/actions/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"react-icons/bs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ \"react-icons/hi\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _socketio_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../socketio/socketio.client.js */ \"./socketio/socketio.client.js\");\n/* harmony import */ var _ChatView_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChatView.jsx */ \"./client/components/room/ChatView.jsx\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fab */ \"@material-ui/core/Fab\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Add */ \"@material-ui/icons/Add\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _css_room_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../css/room.css */ \"./client/css/room.css\");\n/* harmony import */ var _css_room_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_room_css__WEBPACK_IMPORTED_MODULE_13__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Room = function Room(_ref) {\n  var username = _ref.username;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.hashtags;\n  }),\n      room = _useSelector.room;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    username: username,\n    message: \"\"\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isUser = _useState4[0],\n      setIsUser = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      chat = _useState6[0],\n      setChat = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(Object(_store_actions_index_js__WEBPACK_IMPORTED_MODULE_2__[\"getDate\"])());\n    if (room) Object(_socketio_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__[\"connectSocket\"])(room);\n    Object(_socketio_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__[\"subscribeToChat\"])(function (err, data) {\n      if (err) return;\n      setChat(function (prevChats) {\n        return [].concat(_toConsumableArray(prevChats), [data]);\n      });\n    });\n    return function () {\n      setChat([]);\n      Object(_socketio_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__[\"disconnectSocket\"])();\n    };\n  }, [room]);\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var username = state.username,\n        message = state.message;\n    var now = dayjs__WEBPACK_IMPORTED_MODULE_7___default()();\n    Object(_socketio_socketio_client_js__WEBPACK_IMPORTED_MODULE_8__[\"sendMessage\"])(room, username, message, now.format(\"h:mm:ss a\"));\n    setState(function (prevState) {\n      return _objectSpread(_objectSpread({}, prevState), {}, {\n        message: \"\"\n      });\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _css_room_css__WEBPACK_IMPORTED_MODULE_13___default.a.newMessageContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    style: {\n      color: \"#C38FFF\"\n    },\n    \"aria-label\": \"add\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    style: {\n      color: \"#1D1D1D\"\n    },\n    fontSize: \"large\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChatView_jsx__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    chat: chat,\n    username: state.username\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: _css_room_css__WEBPACK_IMPORTED_MODULE_13___default.a.chatForm,\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"send it\",\n    type: \"text\",\n    name: \"message\",\n    value: state.message,\n    onChange: function onChange(e) {\n      setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, e.target.name, e.target.value)));\n    },\n    required: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__[\"HiOutlineEmojiHappy\"], {\n    className: _css_room_css__WEBPACK_IMPORTED_MODULE_13___default.a.chatFormIcon\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__[\"BiSend\"], {\n    className: _css_room_css__WEBPACK_IMPORTED_MODULE_13___default.a.chatFormSendIcon,\n    onClick: handleSubmit\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_12___default()(_css_room_css__WEBPACK_IMPORTED_MODULE_13___default.a)(Room));\n\n//# sourceURL=webpack:///./client/components/room/Room.jsx?");

/***/ }),

/***/ "./client/css/app.css":
/*!****************************!*\
  !*** ./client/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./app.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/css/app.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/css/app.css?");

/***/ }),

/***/ "./client/css/carousel.css":
/*!*********************************!*\
  !*** ./client/css/carousel.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./carousel.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/css/carousel.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/css/carousel.css?");

/***/ }),

/***/ "./client/css/footer.css":
/*!*******************************!*\
  !*** ./client/css/footer.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./footer.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/css/footer.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/css/footer.css?");

/***/ }),

/***/ "./client/css/header.css":
/*!*******************************!*\
  !*** ./client/css/header.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./header.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/css/header.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/css/header.css?");

/***/ }),

/***/ "./client/css/navbar.css":
/*!*******************************!*\
  !*** ./client/css/navbar.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./navbar.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/css/navbar.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/css/navbar.css?");

/***/ }),

/***/ "./client/css/room.css":
/*!*****************************!*\
  !*** ./client/css/room.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./room.css */ \"./node_modules/css-loader/dist/cjs.js?!./client/css/room.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/css/room.css?");

/***/ }),

/***/ "./client/images/example-profile.png":
/*!*******************************************!*\
  !*** ./client/images/example-profile.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/983e5bc160880af8291c9eb747415331-example-profile.png\");\n\n//# sourceURL=webpack:///./client/images/example-profile.png?");

/***/ }),

/***/ "./client/images/hashtag.svg":
/*!***********************************!*\
  !*** ./client/images/hashtag.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/54a0a08696c4c4a8c83117a912e30f89-hashtag.svg\");\n\n//# sourceURL=webpack:///./client/images/hashtag.svg?");

/***/ }),

/***/ "./client/pages/HomePage.jsx":
/*!***********************************!*\
  !*** ./client/pages/HomePage.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/Header.jsx */ \"./client/components/header/Header.jsx\");\n/* harmony import */ var _components_navigation_Navigation_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navigation/Navigation.jsx */ \"./client/components/navigation/Navigation.jsx\");\n/* harmony import */ var _components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer/Footer.jsx */ \"./client/components/footer/Footer.jsx\");\n/* harmony import */ var _components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/carousel/Carousel.jsx */ \"./client/components/carousel/Carousel.jsx\");\n/* harmony import */ var _components_room_Room_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/room/Room.jsx */ \"./client/components/room/Room.jsx\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions */ \"./client/store/actions/index.js\");\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/app.css */ \"./client/css/app.css\");\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nvar HomePage = function HomePage(props) {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      isAuthenticated = _useSelector.isAuthenticated,\n      username = _useSelector.username;\n\n  var showNavigation = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.nav;\n  });\n\n  var renderView = function renderView() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _css_app_css__WEBPACK_IMPORTED_MODULE_8___default.a.appContainer\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      showNavMenu: showNavigation,\n      isAuthenticated: isAuthenticated\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation_Navigation_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      isAuthenticated: isAuthenticated\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_carousel_Carousel_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, renderView());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_9___default()(_css_app_css__WEBPACK_IMPORTED_MODULE_8___default.a)(HomePage));\n\n//# sourceURL=webpack:///./client/pages/HomePage.jsx?");

/***/ }),

/***/ "./client/store/actions/index.js":
/*!***************************************!*\
  !*** ./client/store/actions/index.js ***!
  \***************************************/
/*! exports provided: START_SESSION, startSession, CREATE_USER, createUser, END_SESSION, endSession, FETCH_USERS, fetchUsers, GET_LOCATION, getLocation, FIND_USERS, findUsers, GET_DISTANCE_BETWEEN_USERS, getDistanceBetweenUsers, HIDE_MAP, SHOW_MAP, showMap, hideMap, SET_RADIUS_IN_MILES, setRadiusInMiles, INCREMENT_HASHTAG, DECREMENT_HASHTAG, FETCH_HASHTAGS, incrementHashtag, decrementHashtag, fetchHashtags, NAVIGATE_TO_ROOM, navigateToRoom, GET_DATE, getDate, CHANGE_THEME_DARK, CHANGE_THEME_LIGHT, toDarkMode, toLightMode, SHOW_NAV, HIDE_NAV, showNavigation, hideNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"START_SESSION\", function() { return START_SESSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startSession\", function() { return startSession; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CREATE_USER\", function() { return CREATE_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"END_SESSION\", function() { return END_SESSION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endSession\", function() { return endSession; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USERS\", function() { return FETCH_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsers\", function() { return fetchUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_LOCATION\", function() { return GET_LOCATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocation\", function() { return getLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FIND_USERS\", function() { return FIND_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findUsers\", function() { return findUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_DISTANCE_BETWEEN_USERS\", function() { return GET_DISTANCE_BETWEEN_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDistanceBetweenUsers\", function() { return getDistanceBetweenUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDE_MAP\", function() { return HIDE_MAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOW_MAP\", function() { return SHOW_MAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showMap\", function() { return showMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideMap\", function() { return hideMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_RADIUS_IN_MILES\", function() { return SET_RADIUS_IN_MILES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setRadiusInMiles\", function() { return setRadiusInMiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCREMENT_HASHTAG\", function() { return INCREMENT_HASHTAG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DECREMENT_HASHTAG\", function() { return DECREMENT_HASHTAG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_HASHTAGS\", function() { return FETCH_HASHTAGS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementHashtag\", function() { return incrementHashtag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decrementHashtag\", function() { return decrementHashtag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchHashtags\", function() { return fetchHashtags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NAVIGATE_TO_ROOM\", function() { return NAVIGATE_TO_ROOM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigateToRoom\", function() { return navigateToRoom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_DATE\", function() { return GET_DATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDate\", function() { return getDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_THEME_DARK\", function() { return CHANGE_THEME_DARK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_THEME_LIGHT\", function() { return CHANGE_THEME_LIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDarkMode\", function() { return toDarkMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toLightMode\", function() { return toLightMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOW_NAV\", function() { return SHOW_NAV; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDE_NAV\", function() { return HIDE_NAV; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showNavigation\", function() { return showNavigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideNavigation\", function() { return hideNavigation; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/////////////////////////////////////\n//////  AUTHENTICATION/ USER  //////\n////////////////////////////////////\nvar START_SESSION = 'start_session';\nvar startSession = function startSession(credentials) {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return api.post('/login', credentials);\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: START_SESSION,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar CREATE_USER = 'create_user';\nvar createUser = function createUser(credentials) {\n  return /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return api.post('/register', credentials);\n\n            case 2:\n              res = _context2.sent;\n              dispatch({\n                type: CREATE_USER,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\nvar END_SESSION = 'end_session';\nvar endSession = function endSession() {\n  return /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return api.post('/logout');\n\n            case 2:\n              res = _context3.sent;\n              dispatch({\n                type: END_SESSION\n              });\n\n            case 4:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x7, _x8, _x9) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\nvar FETCH_USERS = 'fetch_users';\nvar fetchUsers = function fetchUsers() {\n  return /*#__PURE__*/function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return api.get('/users');\n\n            case 2:\n              res = _context4.sent;\n              dispatch({\n                type: FETCH_USERS,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function (_x10, _x11, _x12) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n}; //////////////////////////////////////\n//////////////// Map  ////////////////\n/////////////////////////////////////\n\nvar GET_LOCATION = 'get_location';\nfunction getLocation() {\n  return function (dispatch) {\n    var geolocation = navigator.geolocation;\n    geolocation.getCurrentPosition(function (position) {\n      var _position$coords = position.coords,\n          lat = _position$coords.latitude,\n          lng = _position$coords.longitude;\n      dispatch({\n        type: GET_LOCATION,\n        payload: {\n          lat: lat,\n          lng: lng\n        }\n      });\n    });\n  };\n}\n;\nvar FIND_USERS = 'find_users';\nvar findUsers = function findUsers(coords) {\n  return /*#__PURE__*/function () {\n    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }));\n\n    return function (_x13, _x14, _x15) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n};\nvar GET_DISTANCE_BETWEEN_USERS = 'get_distance_between_users';\nvar getDistanceBetweenUsers = function getDistanceBetweenUsers() {\n  return /*#__PURE__*/function () {\n    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch, getState, api) {\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              dispatch({\n                type: GET_DISTANCE_BETWEEN_USERS,\n                payload: res\n              });\n\n            case 1:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6);\n    }));\n\n    return function (_x16, _x17, _x18) {\n      return _ref6.apply(this, arguments);\n    };\n  }();\n};\nvar HIDE_MAP = 'hide_map';\nvar SHOW_MAP = 'show_map';\nvar showMap = function showMap() {\n  return /*#__PURE__*/function () {\n    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dispatch, getState, api) {\n      return regeneratorRuntime.wrap(function _callee7$(_context7) {\n        while (1) {\n          switch (_context7.prev = _context7.next) {\n            case 0:\n              dispatch({\n                type: SHOW_MAP\n              });\n\n            case 1:\n            case \"end\":\n              return _context7.stop();\n          }\n        }\n      }, _callee7);\n    }));\n\n    return function (_x19, _x20, _x21) {\n      return _ref7.apply(this, arguments);\n    };\n  }();\n};\nvar hideMap = function hideMap() {\n  return /*#__PURE__*/function () {\n    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dispatch, getState, api) {\n      return regeneratorRuntime.wrap(function _callee8$(_context8) {\n        while (1) {\n          switch (_context8.prev = _context8.next) {\n            case 0:\n              dispatch({\n                type: HIDE_MAP\n              });\n\n            case 1:\n            case \"end\":\n              return _context8.stop();\n          }\n        }\n      }, _callee8);\n    }));\n\n    return function (_x22, _x23, _x24) {\n      return _ref8.apply(this, arguments);\n    };\n  }();\n};\nvar SET_RADIUS_IN_MILES = 'set_radius_in_miles';\nvar setRadiusInMiles = function setRadiusInMiles(obj) {\n  return /*#__PURE__*/function () {\n    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee9$(_context9) {\n        while (1) {\n          switch (_context9.prev = _context9.next) {\n            case 0:\n              _context9.next = 2;\n              return api.post('/mapradius', obj);\n\n            case 2:\n              res = _context9.sent;\n              dispatch({\n                type: SET_RADIUS_IN_MILES,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context9.stop();\n          }\n        }\n      }, _callee9);\n    }));\n\n    return function (_x25, _x26, _x27) {\n      return _ref9.apply(this, arguments);\n    };\n  }();\n}; /////////////////////////////////////\n////////////  Hashtags  ////////////\n////////////////////////////////////\n\nvar INCREMENT_HASHTAG = 'increment_hashtag';\nvar DECREMENT_HASHTAG = 'decrement_hashtag';\nvar FETCH_HASHTAGS = 'fetch_hashtags';\nvar incrementHashtag = function incrementHashtag(hashtag) {\n  return /*#__PURE__*/function () {\n    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee10$(_context10) {\n        while (1) {\n          switch (_context10.prev = _context10.next) {\n            case 0:\n              _context10.next = 2;\n              return api.post('/hashtag', hashtag);\n\n            case 2:\n              res = _context10.sent;\n              dispatch({\n                type: INCREMENT_HASHTAG,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context10.stop();\n          }\n        }\n      }, _callee10);\n    }));\n\n    return function (_x28, _x29, _x30) {\n      return _ref10.apply(this, arguments);\n    };\n  }();\n};\nvar decrementHashtag = function decrementHashtag() {\n  return /*#__PURE__*/function () {\n    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee11$(_context11) {\n        while (1) {\n          switch (_context11.prev = _context11.next) {\n            case 0:\n              _context11.next = 2;\n              return api.patch('/hashtag');\n\n            case 2:\n              res = _context11.sent;\n              dispatch({\n                type: DECREMENT_HASHTAG,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context11.stop();\n          }\n        }\n      }, _callee11);\n    }));\n\n    return function (_x31, _x32, _x33) {\n      return _ref11.apply(this, arguments);\n    };\n  }();\n};\nvar fetchHashtags = function fetchHashtags() {\n  return /*#__PURE__*/function () {\n    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee12$(_context12) {\n        while (1) {\n          switch (_context12.prev = _context12.next) {\n            case 0:\n              _context12.next = 2;\n              return api.get('/hashtag');\n\n            case 2:\n              res = _context12.sent;\n              dispatch({\n                type: FETCH_HASHTAGS,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context12.stop();\n          }\n        }\n      }, _callee12);\n    }));\n\n    return function (_x34, _x35, _x36) {\n      return _ref12.apply(this, arguments);\n    };\n  }();\n};\nvar NAVIGATE_TO_ROOM = 'navigate_to_room';\nvar navigateToRoom = function navigateToRoom(room) {\n  return /*#__PURE__*/function () {\n    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee13$(_context13) {\n        while (1) {\n          switch (_context13.prev = _context13.next) {\n            case 0:\n              _context13.next = 2;\n              return api.post('/room', {\n                room: room\n              });\n\n            case 2:\n              res = _context13.sent;\n              dispatch({\n                type: NAVIGATE_TO_ROOM,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context13.stop();\n          }\n        }\n      }, _callee13);\n    }));\n\n    return function (_x37, _x38, _x39) {\n      return _ref13.apply(this, arguments);\n    };\n  }();\n}; //////////////////////////////////////\n/////////////// Date  ////////////////\n/////////////////////////////////////\n\nvar GET_DATE = 'get_date';\nvar getDate = function getDate() {\n  return function (dispatch, getState, api) {\n    dispatch({\n      type: GET_DATE\n    });\n  };\n}; //////////////////////////////////////\n/////////////// Theme  ///////////////\n/////////////////////////////////////\n\nvar CHANGE_THEME_DARK = 'change_theme_dark';\nvar CHANGE_THEME_LIGHT = 'change_theme_light';\nvar toDarkMode = function toDarkMode() {\n  return function (dispatch, getState, api) {\n    dispatch({\n      type: CHANGE_THEME_DARK\n    });\n  };\n};\nvar toLightMode = function toLightMode() {\n  return function (dispatch, getState, api) {\n    dispatch({\n      type: CHANGE_THEME_LIGHT\n    });\n  };\n}; ///////////////////////////////////\n//////////  Navigation  //////////\n//////////////////////////////////\n\nvar SHOW_NAV = 'show_nav';\nvar HIDE_NAV = 'hide_nav';\nvar showNavigation = function showNavigation() {\n  return function (dispatch, getState, api) {\n    dispatch({\n      type: SHOW_NAV\n    });\n  };\n};\nvar hideNavigation = function hideNavigation() {\n  return function (dispatch, getState, api) {\n    dispatch({\n      type: HIDE_NAV\n    });\n  };\n};\n\n//# sourceURL=webpack:///./client/store/actions/index.js?");

/***/ }),

/***/ "./client/store/reducers/dateReducer.js":
/*!**********************************************!*\
  !*** ./client/store/reducers/dateReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/index.js */ \"./client/store/actions/index.js\");\n\n\nvar now = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_1__[\"GET_DATE\"]:\n      return now.format(\"h:mm:ss a\");\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/store/reducers/dateReducer.js?");

/***/ }),

/***/ "./client/store/reducers/hashtagReducer.js":
/*!*************************************************!*\
  !*** ./client/store/reducers/hashtagReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ \"./client/store/actions/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  hashtags: [],\n  room: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"INCREMENT_HASHTAG\"]:\n      var room = action.payload.data.hashtag;\n      var hashtags = state.hashtags.concat(room);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hashtags: hashtags,\n        room: room\n      });\n\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"DECREMENT_HASHTAG\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hashtags: action.payload.data\n      });\n\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_HASHTAGS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hashtags: action.payload.data\n      });\n\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"NAVIGATE_TO_ROOM\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        room: action.payload.data\n      });\n\n    default:\n      return state;\n  }\n\n  ;\n});\n\n//# sourceURL=webpack:///./client/store/reducers/hashtagReducer.js?");

/***/ }),

/***/ "./client/store/reducers/index.js":
/*!****************************************!*\
  !*** ./client/store/reducers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReducer.js */ \"./client/store/reducers/userReducer.js\");\n/* harmony import */ var _themeReducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themeReducer.js */ \"./client/store/reducers/themeReducer.js\");\n/* harmony import */ var _hashtagReducer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hashtagReducer.js */ \"./client/store/reducers/hashtagReducer.js\");\n/* harmony import */ var _dateReducer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dateReducer.js */ \"./client/store/reducers/dateReducer.js\");\n/* harmony import */ var _navigationReducer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigationReducer.js */ \"./client/store/reducers/navigationReducer.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  user: _userReducer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  theme: _themeReducer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  hashtags: _hashtagReducer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  date: _dateReducer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  nav: _navigationReducer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./client/store/reducers/index.js?");

/***/ }),

/***/ "./client/store/reducers/navigationReducer.js":
/*!****************************************************!*\
  !*** ./client/store/reducers/navigationReducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ \"./client/store/actions/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"SHOW_NAV\"]:\n      return true;\n\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"HIDE_NAV\"]:\n      return false;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/store/reducers/navigationReducer.js?");

/***/ }),

/***/ "./client/store/reducers/themeReducer.js":
/*!***********************************************!*\
  !*** ./client/store/reducers/themeReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ \"./client/store/actions/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialTheme = {\n  backgroundColor: '#FFF',\n  color: '#333',\n  height: '100vh'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialTheme;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_THEME_DARK\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        backgroundColor: '#333',\n        color: '#FFF',\n        height: '100vh'\n      });\n\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_THEME_LIGHT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        backgroundColor: '#FFF',\n        color: '#333',\n        height: '100vh'\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/store/reducers/themeReducer.js?");

/***/ }),

/***/ "./client/store/reducers/userReducer.js":
/*!**********************************************!*\
  !*** ./client/store/reducers/userReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index.js */ \"./client/store/actions/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {\n  isAuthenticated: false,\n  username: null,\n  email: null,\n  location: {\n    lng: 40.7128,\n    lat: -74.0060\n  },\n  users: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"START_SESSION\"]:\n      return _objectSpread(_objectSpread({}, state), action.payload.data);\n\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"END_SESSION\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isAuthenticated: false\n      });\n\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"CREATE_USER\"]:\n      return _objectSpread(_objectSpread({}, state), action.payload.data);\n\n    case _actions_index_js__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_USERS\"]:\n      return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), {}, {\n        data: data\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./client/store/reducers/userReducer.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/app.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/app.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html, body {\\n  height: 100%;\\n  overflow: hidden;\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  display: grid;\\n  place-items: center center;\\n}\\n\\nhtml {\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: 10px;\\n}\\n\\nglobal::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.client-css-app__appContainer--2BtIa {\\n  display: grid;\\n  grid: 'headerLeft headerRight' 71px 'leftPane mainContent' 1fr 'footer chatForm' 78px / 275px 1fr;\\n  min-width: 800px;\\n  max-width: 100vw;\\n  max-height: 100vh;\\n  width: 100vw;\\n  background: #FFF;\\n  border-radius: 10px;\\n  height: 100vh;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://client/css/app.css\"],\"names\":[],\"mappings\":\"AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iGAAiG;EACjG,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;AACf\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');\\nhtml:global, body:global {\\n  height: 100%;\\n  overflow: hidden;\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody:global {\\n  display: grid;\\n  place-items: center center;\\n}\\n\\nhtml:global {\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: 10px;\\n}\\n\\nglobal::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.appContainer {\\n  display: grid;\\n  grid: 'headerLeft headerRight' 71px 'leftPane mainContent' 1fr 'footer chatForm' 78px / 275px 1fr;\\n  min-width: 800px;\\n  max-width: 100vw;\\n  max-height: 100vh;\\n  width: 100vw;\\n  background: #FFF;\\n  border-radius: 10px;\\n  height: 100vh;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"appContainer\": \"client-css-app__appContainer--2BtIa\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack:///./client/css/app.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/carousel.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/carousel.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".client-css-carousel__carousel--1vWSn {\\n  background: #1D1D1D;\\n  border-left: 1px solid #292929;\\n  display: flex;\\n  justify-content: center;\\n  align-items: stretch;\\n}\\n\\n.client-css-carousel__item--35XWx {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding-top: 15px;\\n  color: #eee;\\n  height: 45vh;\\n  width: 85vw;\\n}\\n\\np {\\n  font-size: 20px;\\n}\\n\\n.client-css-carousel__button--2S7KU {\\n  color: #eee !important;\\n  font-size: 16px !important;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://client/css/carousel.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;AAC5B\",\"sourcesContent\":[\".carousel {\\n  background: #1D1D1D;\\n  border-left: 1px solid #292929;\\n  display: flex;\\n  justify-content: center;\\n  align-items: stretch;\\n}\\n\\n.item {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding-top: 15px;\\n  color: #eee;\\n  height: 45vh;\\n  width: 85vw;\\n}\\n\\np {\\n  font-size: 20px;\\n}\\n\\n.button {\\n  color: #eee !important;\\n  font-size: 16px !important;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"carousel\": \"client-css-carousel__carousel--1vWSn\",\n\t\"item\": \"client-css-carousel__item--35XWx\",\n\t\"button\": \"client-css-carousel__button--2S7KU\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack:///./client/css/carousel.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/footer.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/footer.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".client-css-footer__footerLeft--10X1W {\\n  grid-area: footer;\\n  background: #242424;\\n  display: grid;\\n  grid: 40px / 40px;\\n  align-content: center;\\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\\n  border-radius: 0 0 0 10px;\\n  padding: 0 15px;\\n}\\n\\n.client-css-footer__footerLeft--10X1W a {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background: #C38FFF;\\n  border-radius: 100%;\\n  color: #1D1D1D;\\n  text-decoration: none;\\n  font-size: 3.8rem;\\n  flex-direction: column;\\n}\\n\\n.client-css-footer__footerRight--2hy3X {\\n  grid-area: chatForm;\\n  background: #242424;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://client/css/footer.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,qBAAqB;EACrB,yCAAyC;EACzC,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB\",\"sourcesContent\":[\".footerLeft {\\n  grid-area: footer;\\n  background: #242424;\\n  display: grid;\\n  grid: 40px / 40px;\\n  align-content: center;\\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\\n  border-radius: 0 0 0 10px;\\n  padding: 0 15px;\\n}\\n\\n.footerLeft a {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background: #C38FFF;\\n  border-radius: 100%;\\n  color: #1D1D1D;\\n  text-decoration: none;\\n  font-size: 3.8rem;\\n  flex-direction: column;\\n}\\n\\n.footerRight {\\n  grid-area: chatForm;\\n  background: #242424;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"footerLeft\": \"client-css-footer__footerLeft--10X1W\",\n\t\"footerRight\": \"client-css-footer__footerRight--2hy3X\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack:///./client/css/footer.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/header.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/header.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/hashtag.svg */ \"./client/images/hashtag.svg\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".client-css-header__searchContainer--w53Zl {\\n  background: #242424;\\n  grid-area: headerLeft;\\n  display: grid;\\n  align-items: center;\\n  padding: 0 10px;\\n  border-radius: 10px 0 0 0;\\n  border-bottom: 1px solid #111111;\\n}\\n\\n.client-css-header__header--208Pd {\\n  display: grid;\\n  grid: 36px / 5fr 1fr;\\n  align-content: center;\\n  align-items: center;\\n  grid-area: headerRight;\\n  color: #eee;\\n  font-weight: bold;\\n  font-size: 2.0rem;\\n  border-radius: 0 10px 0 0;\\n  padding: 0 20px;\\n  border-bottom: 1px solid #111111;\\n  background: #242424;\\n}\\n\\n.client-css-header__headerIconContainer--3ZNEO {\\n  display: grid;\\n  grid-template-columns: repeat(1, 1fr);\\n  justify-items: end;\\n  align-items: center;\\n  list-style-type: none;\\n  max-width: 236px;\\n  place-content: center center;\\n}\\n\\n.client-css-header__headerIcon--266qC {\\n  cursor: pointer;\\n  width: 38px;\\n  height: 38px;\\n  color: #C38FFF;\\n}\\n\\n.client-css-header__headerIcon--266qC:hover {\\n  background: #2D2D2D;\\n  cursor: pointer;\\n}\\n\\n.client-css-header__searchContainer--w53Zl input {\\n  color: #111111;\\n  outline: none;\\n  font-weight: bold;\\n  border-radius: 2px;\\n  height: 30px;\\n  border: 0;\\n  padding-left: 48px !important;\\n  padding-right: 20px !important;\\n  font-size: 1.4rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat #eee;\\n  background-position: 15px center !important;\\n  background-size: 20px 20px;\\n  width: 95%;\\n}\\n\\n.client-css-header__searchContainer--w53Zl input:focus {\\n  border-bottom: 2px solid #C38FFF !important;\\n}\\n\\n.client-css-header__searchContainer--w53Zl input::placeholder {\\n  color: #1D1D1D;\\n  font-weight: bold;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://client/css/header.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,6BAA6B;EAC7B,8BAA8B;EAC9B,iBAAiB;EACjB,kEAAuD;EACvD,2CAA2C;EAC3C,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB\",\"sourcesContent\":[\".searchContainer {\\n  background: #242424;\\n  grid-area: headerLeft;\\n  display: grid;\\n  align-items: center;\\n  padding: 0 10px;\\n  border-radius: 10px 0 0 0;\\n  border-bottom: 1px solid #111111;\\n}\\n\\n.header {\\n  display: grid;\\n  grid: 36px / 5fr 1fr;\\n  align-content: center;\\n  align-items: center;\\n  grid-area: headerRight;\\n  color: #eee;\\n  font-weight: bold;\\n  font-size: 2.0rem;\\n  border-radius: 0 10px 0 0;\\n  padding: 0 20px;\\n  border-bottom: 1px solid #111111;\\n  background: #242424;\\n}\\n\\n.headerIconContainer {\\n  display: grid;\\n  grid-template-columns: repeat(1, 1fr);\\n  justify-items: end;\\n  align-items: center;\\n  list-style-type: none;\\n  max-width: 236px;\\n  place-content: center center;\\n}\\n\\n.headerIcon {\\n  cursor: pointer;\\n  width: 38px;\\n  height: 38px;\\n  color: #C38FFF;\\n}\\n\\n.headerIcon:hover {\\n  background: #2D2D2D;\\n  cursor: pointer;\\n}\\n\\n.searchContainer input {\\n  color: #111111;\\n  outline: none;\\n  font-weight: bold;\\n  border-radius: 2px;\\n  height: 30px;\\n  border: 0;\\n  padding-left: 48px !important;\\n  padding-right: 20px !important;\\n  font-size: 1.4rem;\\n  background: url('../images/hashtag.svg') no-repeat #eee;\\n  background-position: 15px center !important;\\n  background-size: 20px 20px;\\n  width: 95%;\\n}\\n\\n.searchContainer input:focus {\\n  border-bottom: 2px solid #C38FFF !important;\\n}\\n\\n.searchContainer input::placeholder {\\n  color: #1D1D1D;\\n  font-weight: bold;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"searchContainer\": \"client-css-header__searchContainer--w53Zl\",\n\t\"header\": \"client-css-header__header--208Pd\",\n\t\"headerIconContainer\": \"client-css-header__headerIconContainer--3ZNEO\",\n\t\"headerIcon\": \"client-css-header__headerIcon--266qC\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack:///./client/css/header.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/navbar.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/navbar.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".client-css-navbar__navContainer--1VqKg {\\n  background: #1D1D1D;\\n  grid-area: leftPane;\\n  border-right: 1px solid #1D1D1D;\\n  overflow-y: scroll;\\n  -ms-overflow-style: none;\\n  scrollbar-width: none;\\n}\\n\\n.client-css-navbar__navRow--UrDOY {\\n  display: grid;\\n  grid-template-columns: 40px 1fr max-content;\\n  grid-gap: 10px;\\n  color: #ddd;\\n  background: #1D1D1D;\\n  font-size: 1.3rem;\\n  border-bottom: 1px solid #2D2D2D;\\n  padding: 20px 20px 20px 15px;\\n}\\n\\n.client-css-navbar__navRow--UrDOY:hover {\\n  background: #2D2D2D;\\n  cursor: pointer;\\n}\\n\\n.client-css-navbar__reactIcon--3f34w {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 75px;\\n  padding: 0 25px;\\n}\\n\\n.client-css-navbar__navText--2B1iQ {\\n  font-weight: bold;\\n  color: #eee;\\n  padding-left: 5px;\\n  white-space: nowrap;\\n  overflow-x: hidden;\\n  text-overflow: ellipsis;\\n}\\n\\n.client-css-navbar__navText--2B1iQ a {\\n  text-decoration: none;\\n  color: #f5f5f5;\\n  font-size: 18px;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  border-radius: 2px;\\n}\\n\\nnav, ul, li {\\n  list-style: none;\\n  list-style-position: outside;\\n  padding: 0;\\n  margin: 0;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://client/css/navbar.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,2CAA2C;EAC3C,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,gCAAgC;EAChC,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,4BAA4B;EAC5B,UAAU;EACV,SAAS;AACX\",\"sourcesContent\":[\".navContainer {\\n  background: #1D1D1D;\\n  grid-area: leftPane;\\n  border-right: 1px solid #1D1D1D;\\n  overflow-y: scroll;\\n  -ms-overflow-style: none;\\n  scrollbar-width: none;\\n}\\n\\n.navRow {\\n  display: grid;\\n  grid-template-columns: 40px 1fr max-content;\\n  grid-gap: 10px;\\n  color: #ddd;\\n  background: #1D1D1D;\\n  font-size: 1.3rem;\\n  border-bottom: 1px solid #2D2D2D;\\n  padding: 20px 20px 20px 15px;\\n}\\n\\n.navRow:hover {\\n  background: #2D2D2D;\\n  cursor: pointer;\\n}\\n\\n.reactIcon {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 75px;\\n  padding: 0 25px;\\n}\\n\\n.navText {\\n  font-weight: bold;\\n  color: #eee;\\n  padding-left: 5px;\\n  white-space: nowrap;\\n  overflow-x: hidden;\\n  text-overflow: ellipsis;\\n}\\n\\n.navText a {\\n  text-decoration: none;\\n  color: #f5f5f5;\\n  font-size: 18px;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  border-radius: 2px;\\n}\\n\\nnav, ul, li {\\n  list-style: none;\\n  list-style-position: outside;\\n  padding: 0;\\n  margin: 0;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"navContainer\": \"client-css-navbar__navContainer--1VqKg\",\n\t\"navRow\": \"client-css-navbar__navRow--UrDOY\",\n\t\"reactIcon\": \"client-css-navbar__reactIcon--3f34w\",\n\t\"navText\": \"client-css-navbar__navText--2B1iQ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack:///./client/css/navbar.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./client/css/room.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./client/css/room.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".client-css-room__newMessageContainer--DdZG- {\\n  background: #1D1D1D;\\n}\\n\\n.client-css-room__newMessageContainer--DdZG- {\\n  background: #242424;\\n  display: grid;\\n  grid: 40px / 40px;\\n  align-content: center;\\n  grid-area: footer;\\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\\n  border-radius: 0 0 0 10px;\\n  padding: 0 15px;\\n}\\n\\n.client-css-room__newMessageContainer--DdZG- a {\\n  display: grid;\\n  place-content: center center;\\n  background: #C38FFF;\\n  border-radius: 100%;\\n  color: #1D1D1D;\\n  text-decoration: none;\\n  font-size: 3.6rem;\\n}\\n\\n.client-css-room__chatTitle--FsQFH, .client-css-room__chatForm--31_6e {\\n  background: #292929;\\n  color: #eee;\\n}\\n\\n.client-css-room__chatTitleIcon--2KSWU, .client-css-room__chatFormIcon--105Qw, .client-css-room__chatFormSendIcon--2KIdV, .client-css-room__roomButtons--2l5wW {\\n  cursor: pointer;\\n}\\n\\n.client-css-room__chatFormIcon--105Qw, .client-css-room__chatFormSendIcon--2KIdV {\\n  width: 34px;\\n  height: 34px;\\n  color: #C38FFF;\\n}\\n\\n.client-css-room__chatTitle--FsQFH {\\n  display: grid;\\n  grid: 36px / 2fr 1fr;\\n  align-content: center;\\n  align-items: center;\\n  grid-area: headerRight;\\n  font-weight: bold;\\n  font-size: 2.0rem;\\n  border-radius: 0 10px 0 0;\\n  padding: 0 20px;\\n  border-bottom: solid;\\n  border-bottom: #2d2d2d;\\n}\\n\\n.client-css-room__roomButtons--2l5wW {\\n  outline: none;\\n  padding: 10px;\\n  font-weight: bold;\\n  border: 2px solid #ddd;\\n  background-color: #1D1D1D;\\n  color: #eee;\\n  border-radius: 6px;\\n  font-size: 1.2rem;\\n}\\n\\n.client-css-room__titleIconContainer--3kG7u {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  justify-self: stretch;\\n  align-content: center;\\n  align-items: center;\\n  justify-items: center;\\n}\\n\\n.client-css-room__messageRow--1GuBC {\\n  margin-bottom: 20px;\\n  display: grid;\\n  grid-auto-columns: 70%;\\n}\\n\\n.client-css-room__messageRow--1GuBC img {\\n  border-radius: 100%;\\n  grid-row: span 2;\\n  height: 40px;\\n  width: 40px;\\n}\\n\\n.client-css-room__messageTime--18FuA {\\n  display: flex;\\n  font-size: 1.3rem;\\n  color: #777;\\n  justify-content: flex-end;\\n}\\n\\n.client-css-room__messageText--3P11W {\\n  padding: 9px 14px;\\n  font-size: 1.6rem;\\n  margin-bottom: 5px;\\n}\\n\\n.client-css-room__youMessage--3k75W .client-css-room__messageText--3P11W {\\n  background: #C38FFF;\\n  color: #242424;\\n  border: 1px solid #242424;\\n  border-radius: 14px 14px 0px 14px;\\n}\\n\\n.client-css-room__messageContent--3K6Sc {\\n  display: grid;\\n}\\n\\n.client-css-room__youMessage--3k75W {\\n  justify-content: end;\\n  justify-items: end;\\n}\\n\\n.client-css-room__youMessage--3k75W .client-css-room__messageContent--3K6Sc {\\n  justify-items: end;\\n}\\n\\n.client-css-room__otherMessage--63Clv .client-css-room__messageText--3P11W {\\n  background: #eee;\\n  color: #111;\\n  border: 1px solid #ddd;\\n  border-radius: 14px 14px 14px 0;\\n}\\n\\n.client-css-room__otherMessage--63Clv {\\n  justify-items: start;\\n}\\n\\n.client-css-room__otherMessage--63Clv .client-css-room__messageContent--3K6Sc {\\n  grid-template-columns: 48px 1fr;\\n  grid-column-gap: 15px;\\n}\\n\\n.client-css-room__chatForm--31_6e {\\n  display: grid;\\n  align-content: center;\\n  align-items: center;\\n  grid: 51px / 1fr 40px 40px;\\n  grid-gap: 15px;\\n  grid-area: chatForm;\\n  border-radius: 0 0 10px 0;\\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\\n  padding: 0 22px 0 42px;\\n}\\n\\n.client-css-room__chatForm--31_6e input {\\n  outline: none;\\n  padding: 15px;\\n  border: 2px solid #ddd;\\n  color: #330;\\n  border-radius: 6px;\\n  font-size: 1.4rem;\\n}\\n\\n::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.client-css-room__roomButtons--2l5wW:hover {\\n  background: #2D2D2D;\\n}\\n\\n.client-css-room__chatMessageList--hUbS8 {\\n  grid-area: mainContent;\\n  background: #111111;\\n  scrollbar-width: none;\\n  border-bottom: #292929;\\n  border-left: 1px solid #292929;\\n  display: flex;\\n  flex-direction: column-reverse;\\n  background: #1D1D1D;\\n  padding: 0 20px;\\n  overflow-y: scroll;\\n}\\n\\n.client-css-room__youMessageContainer--9HGtU {\\n  padding: 3px 0;\\n}\\n\\n.client-css-room__loading--1TFvB {\\n  display: grid;\\n  width: 25px;\\n}\\n\\n.client-css-room__loading--1TFvB:after {\\n  overflow: hidden;\\n  -webkit-animation: client-css-room__ellipsis--1xaR9 steps(4, end) 900ms infinite;\\n  animation: client-css-room__ellipsis--1xaR9 steps(4, end) 900ms infinite;\\n  content: \\\"\\\\2026\\\";\\n  /* ascii code for the ellipsis character */\\n  width: 0px;\\n}\\n\\n@keyframes client-css-room__ellipsis--1xaR9 {\\n  to {\\n    width: 1.25em;\\n  }\\n}\\n\\n@-webkit-keyframes client-css-room__ellipsis--1xaR9 {\\n  to {\\n    width: 1.25em;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://client/css/room.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;EACjB,yCAAyC;EACzC,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,+BAA+B;EAC/B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,0BAA0B;EAC1B,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,yCAAyC;EACzC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,gFAAwD;EACxD,wEAAgD;EAChD,gBAAgB;EAChB,0CAA0C;EAC1C,UAAU;AACZ;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF\",\"sourcesContent\":[\".newMessageContainer {\\n  background: #1D1D1D;\\n}\\n\\n.newMessageContainer {\\n  background: #242424;\\n  display: grid;\\n  grid: 40px / 40px;\\n  align-content: center;\\n  grid-area: footer;\\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\\n  border-radius: 0 0 0 10px;\\n  padding: 0 15px;\\n}\\n\\n.newMessageContainer a {\\n  display: grid;\\n  place-content: center center;\\n  background: #C38FFF;\\n  border-radius: 100%;\\n  color: #1D1D1D;\\n  text-decoration: none;\\n  font-size: 3.6rem;\\n}\\n\\n.chatTitle, .chatForm {\\n  background: #292929;\\n  color: #eee;\\n}\\n\\n.chatTitleIcon, .chatFormIcon, .chatFormSendIcon, .roomButtons {\\n  cursor: pointer;\\n}\\n\\n.chatFormIcon, .chatFormSendIcon {\\n  width: 34px;\\n  height: 34px;\\n  color: #C38FFF;\\n}\\n\\n.chatTitle {\\n  display: grid;\\n  grid: 36px / 2fr 1fr;\\n  align-content: center;\\n  align-items: center;\\n  grid-area: headerRight;\\n  font-weight: bold;\\n  font-size: 2.0rem;\\n  border-radius: 0 10px 0 0;\\n  padding: 0 20px;\\n  border-bottom: solid;\\n  border-bottom: #2d2d2d;\\n}\\n\\n.roomButtons {\\n  outline: none;\\n  padding: 10px;\\n  font-weight: bold;\\n  border: 2px solid #ddd;\\n  background-color: #1D1D1D;\\n  color: #eee;\\n  border-radius: 6px;\\n  font-size: 1.2rem;\\n}\\n\\n.titleIconContainer {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  justify-self: stretch;\\n  align-content: center;\\n  align-items: center;\\n  justify-items: center;\\n}\\n\\n.messageRow {\\n  margin-bottom: 20px;\\n  display: grid;\\n  grid-auto-columns: 70%;\\n}\\n\\n.messageRow img {\\n  border-radius: 100%;\\n  grid-row: span 2;\\n  height: 40px;\\n  width: 40px;\\n}\\n\\n.messageTime {\\n  display: flex;\\n  font-size: 1.3rem;\\n  color: #777;\\n  justify-content: flex-end;\\n}\\n\\n.messageText {\\n  padding: 9px 14px;\\n  font-size: 1.6rem;\\n  margin-bottom: 5px;\\n}\\n\\n.youMessage .messageText {\\n  background: #C38FFF;\\n  color: #242424;\\n  border: 1px solid #242424;\\n  border-radius: 14px 14px 0px 14px;\\n}\\n\\n.messageContent {\\n  display: grid;\\n}\\n\\n.youMessage {\\n  justify-content: end;\\n  justify-items: end;\\n}\\n\\n.youMessage .messageContent {\\n  justify-items: end;\\n}\\n\\n.otherMessage .messageText {\\n  background: #eee;\\n  color: #111;\\n  border: 1px solid #ddd;\\n  border-radius: 14px 14px 14px 0;\\n}\\n\\n.otherMessage {\\n  justify-items: start;\\n}\\n\\n.otherMessage .messageContent {\\n  grid-template-columns: 48px 1fr;\\n  grid-column-gap: 15px;\\n}\\n\\n.chatForm {\\n  display: grid;\\n  align-content: center;\\n  align-items: center;\\n  grid: 51px / 1fr 40px 40px;\\n  grid-gap: 15px;\\n  grid-area: chatForm;\\n  border-radius: 0 0 10px 0;\\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\\n  padding: 0 22px 0 42px;\\n}\\n\\n.chatForm input {\\n  outline: none;\\n  padding: 15px;\\n  border: 2px solid #ddd;\\n  color: #330;\\n  border-radius: 6px;\\n  font-size: 1.4rem;\\n}\\n\\n::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.roomButtons:hover {\\n  background: #2D2D2D;\\n}\\n\\n.chatMessageList {\\n  grid-area: mainContent;\\n  background: #111111;\\n  scrollbar-width: none;\\n  border-bottom: #292929;\\n  border-left: 1px solid #292929;\\n  display: flex;\\n  flex-direction: column-reverse;\\n  background: #1D1D1D;\\n  padding: 0 20px;\\n  overflow-y: scroll;\\n}\\n\\n.youMessageContainer {\\n  padding: 3px 0;\\n}\\n\\n.loading {\\n  display: grid;\\n  width: 25px;\\n}\\n\\n.loading:after {\\n  overflow: hidden;\\n  -webkit-animation: ellipsis steps(4, end) 900ms infinite;\\n  animation: ellipsis steps(4, end) 900ms infinite;\\n  content: \\\"\\\\2026\\\";\\n  /* ascii code for the ellipsis character */\\n  width: 0px;\\n}\\n\\n@keyframes ellipsis {\\n  to {\\n    width: 1.25em;\\n  }\\n}\\n\\n@-webkit-keyframes ellipsis {\\n  to {\\n    width: 1.25em;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"newMessageContainer\": \"client-css-room__newMessageContainer--DdZG-\",\n\t\"chatTitle\": \"client-css-room__chatTitle--FsQFH\",\n\t\"chatForm\": \"client-css-room__chatForm--31_6e\",\n\t\"chatTitleIcon\": \"client-css-room__chatTitleIcon--2KSWU\",\n\t\"chatFormIcon\": \"client-css-room__chatFormIcon--105Qw\",\n\t\"chatFormSendIcon\": \"client-css-room__chatFormSendIcon--2KIdV\",\n\t\"roomButtons\": \"client-css-room__roomButtons--2l5wW\",\n\t\"titleIconContainer\": \"client-css-room__titleIconContainer--3kG7u\",\n\t\"messageRow\": \"client-css-room__messageRow--1GuBC\",\n\t\"messageTime\": \"client-css-room__messageTime--18FuA\",\n\t\"messageText\": \"client-css-room__messageText--3P11W\",\n\t\"youMessage\": \"client-css-room__youMessage--3k75W\",\n\t\"messageContent\": \"client-css-room__messageContent--3K6Sc\",\n\t\"otherMessage\": \"client-css-room__otherMessage--63Clv\",\n\t\"chatMessageList\": \"client-css-room__chatMessageList--hUbS8\",\n\t\"youMessageContainer\": \"client-css-room__youMessageContainer--9HGtU\",\n\t\"loading\": \"client-css-room__loading--1TFvB\",\n\t\"ellipsis\": \"client-css-room__ellipsis--1xaR9\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack:///./client/css/room.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./server/helpers/createStore.js":
/*!***************************************!*\
  !*** ./server/helpers/createStore.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_store_reducers_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/store/reducers/index.js */ \"./client/store/reducers/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req) {\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n    baseURL: 'http://localhost:5000',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_store_reducers_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(axiosInstance)));\n  return store;\n});\n\n//# sourceURL=webpack:///./server/helpers/createStore.js?");

/***/ }),

/***/ "./server/helpers/renderTemplate.js":
/*!******************************************!*\
  !*** ./server/helpers/renderTemplate.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_store_actions_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client/store/actions/index.js */ \"./client/store/actions/index.js\");\n/* harmony import */ var _client_Routes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client/Routes.js */ \"./client/Routes.js\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_11__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store) {\n  var statsFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('public', 'loadable-stats.json');\n  var extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_11__[\"ChunkExtractor\"]({\n    statsFile: statsFile\n  }, ['5.chunk.js']);\n  var scriptTags = extractor.getScriptTags();\n  var linkTags = extractor.getLinkTags();\n  var styleTags = extractor.getStyleTags();\n  var css = new Set();\n\n  var insertCss = function insertCss() {\n    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n      styles[_key] = arguments[_key];\n    }\n\n    return styles.forEach(function (style) {\n      return css.add(style._getCss());\n    });\n  };\n\n  var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])(extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_9___default.a.Provider, {\n    value: {\n      insertCss: insertCss\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"renderRoutes\"])(_client_Routes_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])))))));\n  var title = 'Whats the Move?';\n  return \"\\n<!DOCTYPE html>\\n  <html lang=\\\"en\\\">\\n    <head>\\n     <meta charset=\\\"UTF-8\\\">\\n     <title>\".concat(title, \"</title>\\n     <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\\\" />\\n     <style>\").concat(_toConsumableArray(css).join(''), \"</style>\\n    </head>\\n    <body>\\n    <div id=\\\"root\\\">\").concat(html, \"</div>\\n    \").concat(scriptTags, \"\\n    <script>window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(store.getState()), \"</script>\\n    </body>\\n</html>\\n\");\n});\n\n//# sourceURL=webpack:///./server/helpers/renderTemplate.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_Routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/Routes.js */ \"./client/Routes.js\");\n/* harmony import */ var _helpers_renderTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/renderTemplate.js */ \"./server/helpers/renderTemplate.js\");\n/* harmony import */ var _helpers_createStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/createStore.js */ \"./server/helpers/createStore.js\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar socketConfig = __webpack_require__(/*! ../socketio/socketio.server.js */ \"./socketio/socketio.server.js\");\n\nvar port = process.env.PORT || 5000;\napp.use(cors());\napp.use(morgan('dev'));\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.static('public'));\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_6___default()('http://localhost:3000'));\napp.get('*', function (req, res) {\n  var store = Object(_helpers_createStore_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req);\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"matchRoutes\"])(_client_Routes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  });\n  Promise.all(promises).then(function () {\n    res.send(Object(_helpers_renderTemplate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req, store));\n  });\n});\nsocketConfig(app, port);\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./socketio/socketio.client.js":
/*!*************************************!*\
  !*** ./socketio/socketio.client.js ***!
  \*************************************/
/*! exports provided: connectSocket, disconnectSocket, subscribeToChat, sendMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectSocket\", function() { return connectSocket; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disconnectSocket\", function() { return disconnectSocket; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subscribeToChat\", function() { return subscribeToChat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendMessage\", function() { return sendMessage; });\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar socket;\nvar connectSocket = function connectSocket(room) {\n  socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:5000', {\n    transports: ['websocket', 'polling', 'flashsocket']\n  });\n  console.log('connecting socket...');\n  if (socket && room) socket.emit('join', room);\n};\nvar disconnectSocket = function disconnectSocket() {\n  console.log('disconnecting socket...');\n  if (socket) socket.disconnect();\n};\nvar subscribeToChat = function subscribeToChat(cb) {\n  if (!socket) return true;\n  socket.on('chat', function (msg) {\n    console.log('websocket event received');\n    return cb(null, msg);\n  });\n};\nvar sendMessage = function sendMessage(room, username, message, date) {\n  if (socket) socket.emit('chat', {\n    id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])(),\n    room: room,\n    username: username,\n    message: message,\n    date: date\n  });\n};\n\n//# sourceURL=webpack:///./socketio/socketio.client.js?");

/***/ }),

/***/ "./socketio/socketio.server.js":
/*!*************************************!*\
  !*** ./socketio/socketio.server.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = socketConfig = function socketConfig(app, port) {\n  var server = __webpack_require__(/*! http */ \"http\").createServer(app);\n\n  var io = __webpack_require__(/*! socket.io */ \"socket.io\")(server, {\n    origins: [\"http://localhost:5000\"],\n    handlePreflightRequest: function handlePreflightRequest(req, res) {\n      var headers = {\n        \"Access-Control-Allow-Headers\": \"Content-Type, Authorization\",\n        \"Access-Control-Allow-Origin\": req.headers.origin,\n        \"Access-Control-Allow-Methods\": \"GET,POST\",\n        \"Access-Control-Allow-Credentials\": true\n      };\n      res.writeHead(200, headers);\n      res.end();\n    }\n  });\n\n  io.on('connection', function (socket) {\n    console.log(\"connected: \".concat(socket.id));\n    socket.on('disconnect', function () {\n      console.log(\"disconnected: \".concat(socket.id));\n    });\n    socket.on('join', function (room) {\n      console.log(\"socket \".concat(socket.id, \" joining \").concat(room));\n      socket.join(room);\n    });\n    socket.on('chat', function (data) {\n      var username = data.username,\n          message = data.message,\n          room = data.room,\n          date = data.date;\n      console.log(\"username: \".concat(username, \", msg: \").concat(message, \", room: \").concat(room, \", date: \").concat(date));\n      io.to(room).emit('chat', data);\n    });\n  });\n  server.listen(port, function () {\n    console.log(\"server listening on port \".concat(port));\n  });\n};\n\n//# sourceURL=webpack:///./socketio/socketio.server.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/component\");\n\n//# sourceURL=webpack:///external_%22@loadable/component%22?");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/server\");\n\n//# sourceURL=webpack:///external_%22@loadable/server%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Container%22?");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Fab\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Fab%22?");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Grid%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Add\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Add%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dayjs\");\n\n//# sourceURL=webpack:///external_%22dayjs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "is-online":
/*!****************************!*\
  !*** external "is-online" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"is-online\");\n\n//# sourceURL=webpack:///external_%22is-online%22?");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/StyleContext\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/StyleContext%22?");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/withStyles\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/withStyles%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-icons":
/*!******************************!*\
  !*** external "react-icons" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons\");\n\n//# sourceURL=webpack:///external_%22react-icons%22?");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ai\");\n\n//# sourceURL=webpack:///external_%22react-icons/ai%22?");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bi\");\n\n//# sourceURL=webpack:///external_%22react-icons/bi%22?");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bs\");\n\n//# sourceURL=webpack:///external_%22react-icons/bs%22?");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");\n\n//# sourceURL=webpack:///external_%22react-icons/fa%22?");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fi\");\n\n//# sourceURL=webpack:///external_%22react-icons/fi%22?");

/***/ }),

/***/ "react-icons/hi":
/*!*********************************!*\
  !*** external "react-icons/hi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/hi\");\n\n//# sourceURL=webpack:///external_%22react-icons/hi%22?");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/io\");\n\n//# sourceURL=webpack:///external_%22react-icons/io%22?");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ri\");\n\n//# sourceURL=webpack:///external_%22react-icons/ri%22?");

/***/ }),

/***/ "react-icons/si":
/*!*********************************!*\
  !*** external "react-icons/si" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/si\");\n\n//# sourceURL=webpack:///external_%22react-icons/si%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-material-ui-carousel":
/*!*********************************************!*\
  !*** external "react-material-ui-carousel" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-material-ui-carousel\");\n\n//# sourceURL=webpack:///external_%22react-material-ui-carousel%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io-client\");\n\n//# sourceURL=webpack:///external_%22socket.io-client%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });