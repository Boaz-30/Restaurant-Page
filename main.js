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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  const headline = document.createElement(\"h2\");\r\n  headline.textContent = \"Contact Us\";\r\n  headline.style.textAlign = \"center\";\r\n\r\n  const address = document.createElement(\"p\");\r\n  address.textContent = \"123 Gourmet Street, Flavor Town, USA\";\r\n  address.style.textAlign = \"center\";\r\n\r\n  const phone = document.createElement(\"p\");\r\n  phone.textContent = \"Phone: (123) 456-7890\";\r\n  phone.style.textAlign = \"center\";\r\n\r\n  content.appendChild(headline);\r\n  content.appendChild(address);\r\n  content.appendChild(phone);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n \r\n  content.innerHTML = \"\";\r\n\r\n  \r\n  const image = document.createElement(\"img\");\r\n  image.src = \"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80\";\r\n  image.alt = \"Restaurant\";\r\n  image.style.width = \"100%\";\r\n  image.style.maxWidth = \"800px\";\r\n  image.style.display = \"block\";\r\n  image.style.margin = \"0 auto\";\r\n  image.style.borderRadius = \"8px\";\r\n\r\n\r\n  const headline = document.createElement(\"h2\");\r\n  headline.textContent = \"Welcome to The Gourmet Haven\";\r\n  headline.style.textAlign = \"center\";\r\n  headline.style.marginTop = \"20px\";\r\n  headline.style.fontFamily = \"Arial, sans-serif\";\r\n  headline.style.color = \"#333\";\r\n\r\n \r\n  const description = document.createElement(\"p\");\r\n  description.textContent =\r\n    \"At The Gourmet Haven, we serve delicious meals crafted with love and the finest ingredients. \" +\r\n    \"Our chefs combine traditional flavors with modern techniques to create an unforgettable dining experience. \" +\r\n    \"Come join us for a taste of perfection!\";\r\n  description.style.textAlign = \"center\";\r\n  description.style.maxWidth = \"700px\";\r\n  description.style.margin = \"10px auto\";\r\n  description.style.fontFamily = \"Arial, sans-serif\";\r\n  description.style.color = \"#555\";\r\n  description.style.lineHeight = \"1.6\";\r\n\r\n\r\n  content.appendChild(image);\r\n  content.appendChild(headline);\r\n  content.appendChild(description);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst homeBtn = document.getElementById(\"homebtn\")\r\nconst menuBtn = document.getElementById(\"menubtn\")\r\nconst contactBtn = document.getElementById(\"contactbtn\")\r\n\r\nhomeBtn.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nmenuBtn.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\ncontactBtn.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage(){\r\n     const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n\r\n  const headline = document.createElement(\"h2\");\r\n  headline.textContent = \"Our Menu\";\r\n  headline.style.textAlign = \"center\";\r\n\r\n  const menuList = document.createElement(\"ul\");\r\n  menuList.style.listStyle = \"none\";\r\n  menuList.style.textAlign = \"center\";\r\n  menuList.style.padding = \"0\";\r\n\r\n  const items = [\"Spaghetti Carbonara\", \"Grilled Salmon\", \"Caesar Salad\", \"Cheeseburger\"];\r\n  items.forEach(item => {\r\n    const li = document.createElement(\"li\");\r\n    li.textContent = item;\r\n    li.style.margin = \"10px 0\";\r\n    menuList.appendChild(li);\r\n  });\r\n\r\n  content.appendChild(headline);\r\n  content.appendChild(menuList);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

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