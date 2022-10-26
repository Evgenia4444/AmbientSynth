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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_3.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_3.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/prototype_3.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototypes_prototype_1_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prototypes/prototype_1/utilities */ "./app/javascript/prototypes/prototype_1/utilities.js");

document.addEventListener('DOMContentLoaded', function () {
  console.log('Test ', Object(_prototypes_prototype_1_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, 1));
  var container = document.getElementById('prototype_3');
  var main_container = document.createElement('div');
  var main_button = document.createElement('div');
  var part_1 = document.createElement('div');
  var part_1_1 = document.createElement('div');
  var part_1_2 = document.createElement('div');
  var part_1_3 = document.createElement('div');
  var part_2 = document.createElement('div');
  var part_2_1 = document.createElement('div');
  var part_2_2 = document.createElement('div');
  var part_2_3 = document.createElement('div');
  var button_1 = document.createElement('div');
  var button_2 = document.createElement('div');
  var button_3 = document.createElement('div');
  var rect_button_x1 = document.createElement('div');
  var rect_button_x2 = document.createElement('div');
  var rect_button_x3 = document.createElement('div');
  var rect_button_1 = document.createElement('div');
  var rect_button_2 = document.createElement('div');
  var rect_button_3 = document.createElement('div');
  var button_4 = document.createElement('div');
  var button_5 = document.createElement('div');
  var button_6 = document.createElement('div');
  var rect_button_x4 = document.createElement('div');
  var rect_button_x5 = document.createElement('div');
  var rect_button_x6 = document.createElement('div');
  var rect_button_4 = document.createElement('div');
  var rect_button_5 = document.createElement('div');
  var rect_button_6 = document.createElement('div');
  main_container.classList.add('main_container');
  main_button.classList.add('main_button');
  part_1.classList.add('part_1');
  part_1_1.classList.add('part_1_1');
  part_1_2.classList.add('part_1_2');
  part_1_3.classList.add('part_1_3');
  part_2.classList.add('part_2');
  part_2_1.classList.add('part_2_1');
  part_2_2.classList.add('part_2_2');
  part_2_3.classList.add('part_2_3');
  button_1.classList.add('button_1');
  button_2.classList.add('button_2');
  button_3.classList.add('button_3');
  rect_button_x1.classList.add('rect_button_x1');
  rect_button_x2.classList.add('rect_button_x2');
  rect_button_x3.classList.add('rect_button_x3');
  rect_button_1.classList.add('rect_button_1');
  rect_button_2.classList.add('rect_button_2');
  rect_button_3.classList.add('rect_button_3');
  button_4.classList.add('button_4');
  button_5.classList.add('button_5');
  button_6.classList.add('button_6');
  rect_button_x4.classList.add('rect_button_x4');
  rect_button_x5.classList.add('rect_button_x5');
  rect_button_x6.classList.add('rect_button_x6');
  rect_button_4.classList.add('rect_button_4');
  rect_button_5.classList.add('rect_button_5');
  rect_button_6.classList.add('rect_button_6');
  container.appendChild(main_container);
  main_container.appendChild(part_1);
  main_container.appendChild(main_button);
  main_container.appendChild(part_2);
  part_1.appendChild(part_1_1);
  part_1.appendChild(part_1_2);
  part_1.appendChild(part_1_3);
  part_1_1.appendChild(button_1);
  part_1_1.appendChild(button_2);
  part_1_1.appendChild(button_3);
  part_1_2.appendChild(rect_button_x1);
  part_1_2.appendChild(rect_button_x2);
  part_1_2.appendChild(rect_button_x3);
  part_1_3.appendChild(rect_button_1);
  part_1_3.appendChild(rect_button_2);
  part_1_3.appendChild(rect_button_3);
  part_2.appendChild(part_2_1);
  part_2.appendChild(part_2_2);
  part_2.appendChild(part_2_3);
  part_2_1.appendChild(button_4);
  part_2_1.appendChild(button_5);
  part_2_1.appendChild(button_6);
  part_2_2.appendChild(rect_button_x4);
  part_2_2.appendChild(rect_button_x5);
  part_2_2.appendChild(rect_button_x6);
  part_2_3.appendChild(rect_button_4);
  part_2_3.appendChild(rect_button_5);
  part_2_3.appendChild(rect_button_6);
});

/***/ }),

/***/ "./app/javascript/prototypes/prototype_1/utilities.js":
/*!************************************************************!*\
  !*** ./app/javascript/prototypes/prototype_1/utilities.js ***!
  \************************************************************/
/*! exports provided: getRandomArbitrary, sample, getFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArbitrary", function() { return getRandomArbitrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrame", function() { return getFrame; });
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getFrame() {
  return document.getElementById('frame');
}



/***/ })

/******/ });
//# sourceMappingURL=prototype_3-c4db754d77cb937cf2f3.js.map