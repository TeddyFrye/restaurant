/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/description.js":
/*!****************************!*\
  !*** ./src/description.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDescription() {\n  const description = document.createElement(\"p\");\n  description.textContent = \"Finally a kids restaurant, but for adults only!\";\n  return description;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDescription);\n\n\n//# sourceURL=webpack://restaurant/./src/description.js?");

/***/ }),

/***/ "./src/headline.js":
/*!*************************!*\
  !*** ./src/headline.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeadline() {\n  const headline = document.createElement(\"h1\");\n  headline.textContent = \"Welcome to Charles E. Cheese's!\";\n  return headline;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeadline);\n\n\n//# sourceURL=webpack://restaurant/./src/headline.js?");

/***/ }),

/***/ "./src/image.js":
/*!**********************!*\
  !*** ./src/image.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createImage() {\n  const image = document.createElement(\"img\");\n  image.src =\n    \"https://cdn.openart.ai/stable_diffusion/734d235a941bc89874026460bd2fce9c46008b0a_2000x2000.webp\";\n  return image;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createImage);\n\n\n//# sourceURL=webpack://restaurant/./src/image.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _headline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headline */ \"./src/headline.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ \"./src/image.js\");\n/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./description */ \"./src/description.js\");\n\n\n\n\nfunction loadHomePage() {\n  const contentDiv = document.getElementById(\"content\");\n\n  contentDiv.appendChild((0,_headline__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  contentDiv.appendChild((0,_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  contentDiv.appendChild((0,_description__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n}\n\n// Call the function when the page loads\nloadHomePage();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;