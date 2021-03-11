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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\r\n\r\n    let filter = $(\"[data-filter]\");\r\n\r\n\r\n    filter.on(\"click\", function (event) {\r\n        event.preventDefault();\r\n        \r\n        let cat = $(this).data('filter');\r\n        \r\n        filter.each(function () {\r\n            let title = $(this).data('filter');\r\n\r\n           if(title === cat) {\r\n               $(this).addClass('active');\r\n           } else {\r\n                $(this).removeClass('active');\r\n            }\r\n        });\r\n    \r\n\r\n        if (cat == 'all') {\r\n            $(\"[data-cat]\").removeClass('hide');\r\n        } else {\r\n            $(\"[data-cat]\").each(function () {\r\n                let workCat = $(this).data('cat');\r\n\r\n                if (workCat != cat) {\r\n                    $(this).addClass('hide');\r\n                } else {\r\n                    $(this).removeClass('hide');\r\n                }\r\n            })\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$('.burger').click(function(event) {\r\n            \r\n    $('.burger,.header__nav').toggleClass('activeBurger'); \r\n    \r\n    $('body').toggleClass('lock');\r\n    \r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/form_validateContact.js":
/*!***********************************************!*\
  !*** ./src/assets/js/form_validateContact.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n\r\n    const form = document.getElementById('form-con');\r\n    form.addEventListener('submit', formSend);\r\n\r\n    async function formSend(e) {\r\n        e.preventDefault();\r\n\r\n        let error = formValidate(form);\r\n\r\n        if (error === 0) {\r\n            alert('Ви все ввели вірно, уря. І форма би відіслалась, якби не відсутність знань :(');\r\n        } else {\r\n            alert('Підсвічування червоним вказує на відсутність або неправильність введення даних. Перевірте і натисніть ще раз send message. При правильному введенні виведеться інше повідомлення, а червоне підсвічування зникне. Дякую :)');\r\n        }\r\n    }\r\n\r\n    function formValidate(form) {\r\n\r\n        let error = 0;\r\n        let formReq = document.querySelectorAll('._req');\r\n\r\n        for (let index = 0; index < formReq.length; index++) {\r\n\r\n            const input = formReq[index];\r\n            formRemoveError(input);\r\n\r\n            if (input.classList.contains('_email')) {\r\n\r\n                if (emailTest(input)) {\r\n\r\n                    formAddError(input);\r\n                    error++;\r\n                }\r\n            } else {\r\n\r\n                if (input.value === '') {\r\n\r\n                    formAddError(input);\r\n                    error++;\r\n                }\r\n            }\r\n\r\n        }\r\n        return error;\r\n    }\r\n\r\n    function formAddError(input) {\r\n\r\n        input.parentElement.classList.add('_error');\r\n        input.classList.add('_error');\r\n    }\r\n    function formRemoveError(input) {\r\n\r\n        input.parentElement.classList.remove('_error');\r\n        input.classList.remove('_error');\r\n    }\r\n    function emailTest(input) {\r\n\r\n        return !/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,8})+$/.test(input.value);\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/form_validateContact.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function() {\r\n    $('.post__slider').slick({\r\n        arrows: false,\r\n        dots: true,\r\n        draggable: true,\r\n        swipe: true,\r\n        touchThreshold: 5,\r\n        infinite: false,\r\n        adaptiveHeight: true\r\n    });\r\n    \r\n    $('.home__slider').slick({\r\n        arrows: false,\r\n        dots: true,\r\n        draggable: true,\r\n        swipe: true,\r\n        touchThreshold: 5,\r\n        infinite: true,\r\n        adaptiveHeight: true\r\n    });\r\n    \r\n    $('.home__btn--prev').click(function(event) {\r\n        $('.home__slider').slick('slickPrev');\r\n    });\r\n    \r\n    $('.home__btn--next').click(function(event) {\r\n        $('.home__slider').slick('slickNext');\r\n    });\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/burger.js ./src/assets/js/form_validateContact.js ./src/assets/js/slider.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Pixel\\Desktop\\Deliver__project\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\Pixel\\Desktop\\Deliver__project\\src\\assets\\js\\burger.js */\"./src/assets/js/burger.js\");\n__webpack_require__(/*! C:\\Users\\Pixel\\Desktop\\Deliver__project\\src\\assets\\js\\form_validateContact.js */\"./src/assets/js/form_validateContact.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Pixel\\Desktop\\Deliver__project\\src\\assets\\js\\slider.js */\"./src/assets/js/slider.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/burger.js_./src/assets/js/form_validateContact.js_./src/assets/js/slider.js?");

/***/ })

/******/ });