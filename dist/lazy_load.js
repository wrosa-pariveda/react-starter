(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy_load"],{

/***/ "./src/components/lazy_load_hello.js":
/*!*******************************************!*\
  !*** ./src/components/lazy_load_hello.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst el = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\r\n\r\nconst LazyLoadHello = () => {\r\n    return el('p', { style: { color: 'red' } }, 'Hello: I am a React component only present on the Lazy Load Example Page JS bundle');\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LazyLoadHello);\n\n//# sourceURL=webpack:///./src/components/lazy_load_hello.js?");

/***/ }),

/***/ "./src/containers/lazy_load.js":
/*!*************************************!*\
  !*** ./src/containers/lazy_load.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var _components_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/base_page */ \"./src/components/base_page.js\");\n/* harmony import */ var _components_lazy_load_hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/lazy_load_hello */ \"./src/components/lazy_load_hello.js\");\n\r\n\r\n\r\n\r\n\r\nconst el = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\r\n\r\nclass LazyLoadPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n\r\n    render() {\r\n        return el(_components_base_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { title: 'Lazy Load Example' },\r\n            el(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], { container: true },\r\n                el(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], { item: true, xs: 3 }),\r\n                el(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], { item: true, xs: 6 },\r\n                    el('p', null, 'Lazy Load Example Page'),\r\n                    el('p', null, 'Check your browser\\'s Network tab to see this Javascript being loaded on demand'),\r\n                    el(_components_lazy_load_hello__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n                ),\r\n                el(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], { item: true, xs: 3 }),\r\n            )\r\n        )\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LazyLoadPage);\n\n//# sourceURL=webpack:///./src/containers/lazy_load.js?");

/***/ })

}]);