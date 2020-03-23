(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lExcel"] = factory(require("vue"));
	else
		root["lExcel"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "077d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3b15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0aa2c060_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("deba");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0aa2c060_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0aa2c060_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0aa2c060_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "491f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("077d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4f57":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9763":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "97ca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9a35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc857478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("97ca");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc857478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc857478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bc857478_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b309":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4724980e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f7bb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4724980e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4724980e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4724980e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b455":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_style_index_0_id_af918bc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fac1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_style_index_0_id_af918bc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_style_index_0_id_af918bc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toolbar_vue_vue_type_style_index_0_id_af918bc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "deba":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f7bb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f924":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_defineMenu_vue_vue_type_style_index_0_id_f376c6fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9763");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_defineMenu_vue_vue_type_style_index_0_id_f376c6fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_defineMenu_vue_vue_type_style_index_0_id_f376c6fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_defineMenu_vue_vue_type_style_index_0_id_f376c6fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fab8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4f57");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fac1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fa5daf5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/index.vue?vue&type=template&id=0aa2c060&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-excel"},[(_vm.showPanel && _vm.showPanel === 'true')?_c('excel-panel',{attrs:{"data-info":_vm.panelList,"store":_vm.store}}):_vm._e(),_c('excel-content',{class:{'show-panel': _vm.showPanel && _vm.showPanel === 'true'},attrs:{"store":_vm.store}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/l-excel/src/index.vue?vue&type=template&id=0aa2c060&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fa5daf5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/panel/index.vue?vue&type=template&id=4724980e&scoped=true&
var panelvue_type_template_id_4724980e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-excel-panel"},[_c('div',{staticClass:"title"},[_vm._v(" "+_vm._s(_vm.dataInfo.title)+" ")]),_c('div',{staticClass:"left-words-list-container"},_vm._l((_vm.dataInfo.list),function(item,index){return _c('div',{key:index,staticClass:"left-words-item"},[_c('div',{staticClass:"left-words-item-name",class:{'open': item.id === _vm.selectedData.id },on:{"click":function($event){return _vm.toggleItemData(item)}}},[_vm._v(" "+_vm._s(item.name)+" "),_c('en-icon',{attrs:{"name":"xiayiye","size":"12px"}})],1),_c('en-collapse-area',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(item.id === _vm.selectedData.id),expression:"item.id === selectedData.id"}],staticClass:"left-words-item-children"},_vm._l((item.children),function(el){return _c('div',{key:el.id,staticClass:"left-words-children-item",attrs:{"draggable":"true"},on:{"dragstart":function($event){return _vm.dragStart(el)}}},[_vm._v(" "+_vm._s(el.name)+" ")])}),0)])],1)}),0)])}
var panelvue_type_template_id_4724980e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/l-excel/src/views/panel/index.vue?vue&type=template&id=4724980e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/panel/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var panelvue_type_script_lang_js_ = ({
  name: "Panel",
  props: {
    dataInfo: {
      type: Object,
      default: () => {
        return {};
      }
    },
    store: { default: "" }
  },
  data() {
    return { selectedData: {} };
  },
  methods: {
    /**
     * @description 左侧字段列表拖动事件控制
     * @param evt
     * @return {boolean}
     */
    move(evt) {
      // 自身内部不允许移动
      if (evt.from === evt.to) {
        return false;
      }
    },
    /**
     * @description 展开/收起某父类
     * @param itemData
     */
    toggleItemData(itemData) {
      if (itemData.id === this.selectedData.id) {
        this.selectedData = {};
        return;
      }
      this.selectedData = itemData;
    },
    dragStart(elData) {
      this.store.dragData = elData;
    }
  }
});

// CONCATENATED MODULE: ./packages/l-excel/src/views/panel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_panelvue_type_script_lang_js_ = (panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/l-excel/src/views/panel/index.vue?vue&type=style&index=0&id=4724980e&lang=scss&scoped=true&
var panelvue_type_style_index_0_id_4724980e_lang_scss_scoped_true_ = __webpack_require__("b309");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/l-excel/src/views/panel/index.vue






/* normalize component */

var component = normalizeComponent(
  views_panelvue_type_script_lang_js_,
  panelvue_type_template_id_4724980e_scoped_true_render,
  panelvue_type_template_id_4724980e_scoped_true_staticRenderFns,
  false,
  null,
  "4724980e",
  null
  
)

/* harmony default export */ var panel = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fa5daf5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/content/index.vue?vue&type=template&id=bc857478&scoped=true&
var contentvue_type_template_id_bc857478_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"components-excel-content"},[_c('excel-toolbar',{attrs:{"store":_vm.store}}),_c('table',{attrs:{"cellpadding":"0","cellspacing":"0","border":"none"}},_vm._l((_vm.store.allCells),function(item,index){return _c('tr',{key:index},_vm._l((item),function(el){return _c('excel-cell',{key:el.id,class:{
          'during': el.wasDuring
        },attrs:{"data-info":el,"store":_vm.store,"draggable":"false"},nativeOn:{"mousedown":function($event){return _vm.mouseDown($event,el)},"mousemove":function($event){return _vm.mouseMove(el)},"mouseup":function($event){return _vm.mouseUp(el)},"contextmenu":function($event){$event.preventDefault();return _vm.setDefineData(el)},"drop":function($event){return _vm.dragEnd(el)},"dragover":function($event){$event.preventDefault();return _vm.dragOver(el)},"dragleave":function($event){$event.preventDefault();return _vm.dragLevel(el)}}})}),1)}),0),_c('define-menu',{attrs:{"store":_vm.store}})],1)}
var contentvue_type_template_id_bc857478_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/l-excel/src/views/content/index.vue?vue&type=template&id=bc857478&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fa5daf5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/content/toolbar.vue?vue&type=template&id=af918bc4&scoped=true&
var toolbarvue_type_template_id_af918bc4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"en-excel-tool-bar"},[_c('div',{staticClass:"content-tool-bar-item",on:{"click":_vm.clearStyleInfo}},[_c('l-icon',{staticClass:"content-tool-bar-main-icon",attrs:{"name":"qingchugeshi"}}),_c('div',{staticClass:"label"},[_vm._v(" 清除格式 ")])],1),_c('div',{staticClass:"content-tool-bar-item"},[_c('div',{staticClass:"content-tool-bar-main"},[_c('l-icon',{staticClass:"content-tool-bar-main-icon",attrs:{"name":"geshi-wenben"}}),_c('div',{staticClass:"label"},[_vm._v(" 字段格式 ")]),_c('l-icon',{staticClass:"content-tool-bar-drop-icon",attrs:{"name":"xiala"}})],1),_c('div',{staticClass:"content-tool-bar-menu-list"},[_c('div',{staticClass:"content-tool-bar-menu-item"},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"geshi-wenben"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 文本 ")])],1),_c('div',{staticClass:"content-tool-bar-menu-item"},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"shuzhi-ziduangeshi"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 数值 ")]),_c('l-icon',{staticClass:"child-menu-icon",attrs:{"name":"xiayiye"}}),_c('div',{staticClass:"child-menu"},[_c('div',{staticClass:"child-menu-item with-input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.digitLength),expression:"digitLength"}],staticClass:"l-input",attrs:{"type":"text","placeholder":"请输入"},domProps:{"value":(_vm.digitLength)},on:{"input":function($event){if($event.target.composing){ return; }_vm.digitLength=$event.target.value}}}),_vm._v(" 位小数 ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" 字段排序-升序 ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" 数值为0显示空 ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" 数值为0显示0 ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" 数值为0显示-- ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" 显示千分符 ")])])],1),_c('div',{staticClass:"content-tool-bar-menu-item"},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"jine-ziduangeshi"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 金额 ")]),_c('l-icon',{staticClass:"child-menu-icon",attrs:{"name":"xiayiye"}}),_vm._m(0)],1),_c('div',{staticClass:"content-tool-bar-menu-item"},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"riqi-ziduangeshi"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 日期 ")]),_c('l-icon',{staticClass:"child-menu-icon",attrs:{"name":"xiayiye"}}),_vm._m(1)],1),_c('div',{staticClass:"content-tool-bar-menu-item"},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"baifenbi-ziduangeshi"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 百分数 ")])],1)])]),_c('div',{staticClass:"content-tool-bar-item"},[_c('div',{staticClass:"content-tool-bar-main"},[_c('l-icon',{staticClass:"content-tool-bar-main-icon",attrs:{"name":"zuoduiqi"}}),_c('div',{staticClass:"label"},[_vm._v(" 对齐方式 ")]),_c('l-icon',{staticClass:"content-tool-bar-drop-icon",attrs:{"name":"xiala"}})],1),_c('div',{staticClass:"content-tool-bar-menu-list"},[_c('div',{staticClass:"content-tool-bar-menu-item",on:{"click":function($event){return _vm.textAlign('left')}}},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"zuoduiqi"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 居左对齐 ")])],1),_c('div',{staticClass:"content-tool-bar-menu-item",on:{"click":function($event){return _vm.textAlign('center')}}},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"juzhongduiqi"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 居中对齐 ")])],1),_c('div',{staticClass:"content-tool-bar-menu-item",on:{"click":function($event){return _vm.textAlign('right')}}},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"youduiqi"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 居右对齐 ")])],1)])]),_c('div',{staticClass:"content-tool-bar-item",on:{"click":_vm.mergeCellInfo}},[_c('l-icon',{staticClass:"content-tool-bar-main-icon",attrs:{"name":"hebing-biaogecaozuo"}}),_c('div',{staticClass:"label"},[_vm._v(" "+_vm._s(_vm.store.isSplit ? "拆分" : "合并")+" ")])],1),_c('div',{staticClass:"content-tool-bar-item"},[_c('div',{staticClass:"content-tool-bar-main"},[_c('l-icon',{staticClass:"content-tool-bar-main-icon",attrs:{"name":"liekuan"}}),_c('div',{staticClass:"label"},[_vm._v(" 行高列宽 ")]),_c('l-icon',{staticClass:"content-tool-bar-drop-icon",attrs:{"name":"xiala"}})],1),_c('div',{staticClass:"content-tool-bar-menu-list",staticStyle:{"width":"220px"}},[_c('div',{staticClass:"content-tool-bar-menu-item"},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"zuoduiqi"}}),_c('div',{staticClass:"dropdown-main-label width-label"},[_c('div',{staticClass:"component-label"},[_vm._v(" 设置行高 ")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.lineHeight),expression:"lineHeight"}],staticClass:"component l-input",attrs:{"placeholder":"请输入"},domProps:{"value":(_vm.lineHeight)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.changeLineHeight($event)},"input":function($event){if($event.target.composing){ return; }_vm.lineHeight=$event.target.value}}})])],1),_c('div',{staticClass:"content-tool-bar-menu-item"},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"juzhongduiqi"}}),_c('div',{staticClass:"dropdown-main-label width-label"},[_c('div',{staticClass:"component-label"},[_vm._v(" 设置列宽 ")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.cellWidth),expression:"cellWidth"}],staticClass:"component l-input",attrs:{"placeholder":"请输入"},domProps:{"value":(_vm.cellWidth)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.changeCellWidth($event)},"input":function($event){if($event.target.composing){ return; }_vm.cellWidth=$event.target.value}}})])],1)])]),_c('div',{staticClass:"content-tool-bar-item",class:{'active': _vm.store.allWeight},on:{"click":_vm.fontWeight}},[_c('l-icon',{staticClass:"content-tool-bar-main-icon",attrs:{"name":"zitijiacu"}}),_c('div',{staticClass:"label"},[_vm._v(" 字体加粗 ")])],1),_c('div',{staticClass:"content-tool-bar-item"},[_c('div',{staticClass:"content-tool-bar-main"},[_c('div',{staticClass:"content-tool-bar-color-picker"},[_c('l-icon',{staticClass:"content-tool-bar-main-icon background-color-icon",attrs:{"name":"beijingyanse"}}),_c('div',{staticClass:"picker-color-container",style:({'background-color': _vm.dataInfo.backgroundColor})})],1),_c('div',{staticClass:"label"},[_vm._v(" 填充颜色 ")]),_c('l-icon',{staticClass:"content-tool-bar-drop-icon",attrs:{"name":"xiala"}})],1)]),_c('div',{staticClass:"content-tool-bar-item"},[_c('div',{staticClass:"content-tool-bar-main"},[_c('div',{staticClass:"content-tool-bar-color-picker"},[_c('l-icon',{staticClass:"content-tool-bar-main-icon",attrs:{"name":"zitiyanse1"}}),_c('div',{staticClass:"picker-color-container",style:({'background-color': _vm.dataInfo.color})})],1),_c('div',{staticClass:"label"},[_vm._v(" 字体颜色 ")]),_c('l-icon',{staticClass:"content-tool-bar-drop-icon",attrs:{"name":"xiala"}})],1)]),_c('div',{staticClass:"content-tool-bar-item"},[_c('div',{staticClass:"content-tool-bar-main"},[_c('l-icon',{staticClass:"content-tool-bar-main-icon",attrs:{"name":"biankuangshezhi"}}),_c('div',{staticClass:"label"},[_vm._v(" 边框设置 ")]),_c('l-icon',{staticClass:"content-tool-bar-drop-icon",attrs:{"name":"xiala"}})],1),_c('div',{staticClass:"content-tool-bar-menu-list"},[_c('div',{staticClass:"content-tool-bar-menu-item",on:{"click":function($event){return _vm.borderSetting('noBorder')}}},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"wukuangxian"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 无边框 ")])],1),_c('div',{staticClass:"content-tool-bar-menu-item split",on:{"click":function($event){return _vm.borderSetting('allBorder')}}},[_c('l-icon',{staticClass:"dropdown-main-icon",attrs:{"name":"biankuangshezhi"}}),_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 所有边框 ")])],1),_c('div',{staticClass:"content-tool-bar-menu-item"},[_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 边框颜色 ")]),_c('l-icon',{staticClass:"child-menu-icon",attrs:{"name":"xiayiye"}})],1),_c('div',{staticClass:"content-tool-bar-menu-item"},[_c('div',{staticClass:"dropdown-main-label"},[_vm._v(" 边框样式 ")]),_c('l-icon',{staticClass:"child-menu-icon",attrs:{"name":"xiayiye"}}),_c('div',{staticClass:"child-menu",staticStyle:{"width":"300px"}},[_c('div',{staticClass:"child-menu-item line-list",on:{"click":function($event){return _vm.borderSetting('isSolidBorder')}}},[_c('div',{staticClass:"line-label"},[_vm._v(" 粗线 ")]),_c('div',{staticClass:"line line-bold"})]),_c('div',{staticClass:"child-menu-item line-list",on:{"click":function($event){return _vm.borderSetting('isSolid')}}},[_c('div',{staticClass:"line-label"},[_vm._v(" 细线 ")]),_c('div',{staticClass:"line line-normal"})]),_c('div',{staticClass:"child-menu-item line-list",on:{"click":function($event){return _vm.borderSetting('isDashed')}}},[_c('div',{staticClass:"line-label"},[_vm._v(" 虚线 ")]),_c('div',{staticClass:"line line-dashed"})])])],1)])])])}
var toolbarvue_type_template_id_af918bc4_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"child-menu"},[_c('div',{staticClass:"child-menu-item"},[_vm._v(" ￥ ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" ＄ ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" € ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" ￡ ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"child-menu",staticStyle:{"width":"160px"}},[_c('div',{staticClass:"child-menu-item"},[_vm._v(" YYYY/MM/DD ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" MM月DD日 ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" YYYY年MM月 ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" YYYY年MM月DD日 ")]),_c('div',{staticClass:"child-menu-item"},[_vm._v(" YYYY/MM/DD hh:mm:ss ")])])}]


// CONCATENATED MODULE: ./packages/l-excel/src/views/content/toolbar.vue?vue&type=template&id=af918bc4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fa5daf5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-icon/src/index.vue?vue&type=template&id=23756ea8&
var srcvue_type_template_id_23756ea8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"l-icon",attrs:{"aria-hidden":"true"},on:{"click":_vm.clickIconInfo}},[_c('use',{attrs:{"xlink:href":'#icon-'+ _vm.name}})])}
var srcvue_type_template_id_23756ea8_staticRenderFns = []


// CONCATENATED MODULE: ./packages/l-icon/src/index.vue?vue&type=template&id=23756ea8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-icon/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "lIcon",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  methods: {
    clickIconInfo() {
      this.$emit("click")
    }
  }
});

// CONCATENATED MODULE: ./packages/l-icon/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var l_icon_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/l-icon/src/index.vue?vue&type=style&index=0&lang=scss&
var srcvue_type_style_index_0_lang_scss_ = __webpack_require__("fab8");

// CONCATENATED MODULE: ./packages/l-icon/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  l_icon_srcvue_type_script_lang_js_,
  srcvue_type_template_id_23756ea8_render,
  srcvue_type_template_id_23756ea8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./packages/l-icon/index.js


src.install = (Vue) => {
  Vue.component(src.name, src)
};
/* harmony default export */ var l_icon = (src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/content/toolbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var toolbarvue_type_script_lang_js_ = ({
  name: "Toolbar",
  components:{ lIcon: l_icon },
  props: [ "store" ],
  data() {
    return {
      dataInfo: {
        backgroundColor: "#4694df",
        color: "#000000",
        digitNum: 0
      },
      borderColor: "",
      isMergeCell: true,
      lineHeight: null,
      cellWidth: null,
      digitLength: null,
    };
  },
  methods: {
    /**
     * @description 清除格式
     */
    clearStyleInfo() {
      this.store.clearStyleInfo();
      this.clearStoreInfo();
    },
    /**
     * @description 更改单元格字体对齐方式
     * @param align
     */
    textAlign(align) {
      this.store.changeCellTextAlign(align);
      this.clearStoreInfo();
    },
    /**
     * @description 字体加粗处理
     */
    fontWeight() {
      this.store.changeCellFontWeight();
      this.clearStoreInfo();
    },
    /**
     * @description 更改单元格背景颜色
     * @param res
     */
    changeBackgroundColor(res) {
      this.store.changeCellBg(res);
      this.clearStoreInfo();
    },
    /**
     * @description 更改单元格字体颜色
     * @param res
     */
    changeFontColor(res) {
      this.store.changeCellFontColor(res);
      this.clearStoreInfo();
    },
    /**
     * @description 边框设置
     * @param border
     */
    borderSetting(border) {
      if (border === "noBorder") {
        this.store.changeNoBorderInfo();
      } else if (border === "allBorder") {
        this.store.changeAllBorderInfo();
      } else if (border === "isSolidBorder" || border === "isSolid") {
        this.store.changeSolidBorderInfo(border);
      } else if (border === "isDashed") {
        this.store.changeDashedBorderInfo();
      }
      this.clearStoreInfo();
    },
    /**
     * @description 更改边框颜色
     * @param res
     */
    changeBorderColor(res) {
      this.store.changeBorderColor(res);
      this.clearStoreInfo();
    },
    /**
     * @description 合并拆分
     */
    mergeCellInfo() {
      if (this.store.isSplit) {
        this.store.splitCellOp();
      } else {
        this.store.mergeCellOp();
      }
      this.clearStoreInfo();
    },
    /**
     * @description 调整行高
     */
    changeLineHeight() {
      this.store.changeCellHeight(this.lineHeight);
      this.lineHeight = null;
      this.clearStoreInfo();
    },
    /**
     * @description 调整列宽
     */
    changeCellWidth() {
      this.store.changeCellWidth(this.cellWidth);
      this.cellWidth = null;
      this.clearStoreInfo();
    },
    clearStoreInfo() {
      this.store.clearSelectedCells();
    }
  }
});

// CONCATENATED MODULE: ./packages/l-excel/src/views/content/toolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_toolbarvue_type_script_lang_js_ = (toolbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/l-excel/src/views/content/toolbar.vue?vue&type=style&index=0&id=af918bc4&lang=scss&scoped=true&
var toolbarvue_type_style_index_0_id_af918bc4_lang_scss_scoped_true_ = __webpack_require__("b455");

// CONCATENATED MODULE: ./packages/l-excel/src/views/content/toolbar.vue






/* normalize component */

var toolbar_component = normalizeComponent(
  content_toolbarvue_type_script_lang_js_,
  toolbarvue_type_template_id_af918bc4_scoped_true_render,
  toolbarvue_type_template_id_af918bc4_scoped_true_staticRenderFns,
  false,
  null,
  "af918bc4",
  null
  
)

/* harmony default export */ var toolbar = (toolbar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fa5daf5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/content/cell.vue?vue&type=template&id=5ca134d6&
var cellvue_type_template_id_5ca134d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.dataInfo.style.cellSetting.rowSpan > 0 && _vm.dataInfo.style.cellSetting.colSpan > 0)?_c('td',{staticClass:"components-excel-cell",style:({
    'text-align': _vm.dataInfo.style.textAlign,
    'font-weight': _vm.dataInfo.style.fontWeight ? 'bold' : 'normal',
    'background-color': _vm.dataInfo.style.backgroundColor,
    'color': _vm.dataInfo.style.fontColor,
    'border-left-width': _vm.dataInfo.style.borderStyle.leftBorder.width,
    'border-top-width': _vm.dataInfo.style.borderStyle.topBorder.width,
    'border-right-width': _vm.dataInfo.style.borderStyle.rightBorder.width,
    'border-bottom-width': _vm.dataInfo.style.borderStyle.bottomBorder.width,
    'border-left-style': _vm.dataInfo.style.borderStyle.leftBorder.isDashed ? 'dashed': 'solid',
    'border-top-style': _vm.dataInfo.style.borderStyle.topBorder.isDashed ? 'dashed': 'solid',
    'border-right-style': _vm.dataInfo.style.borderStyle.rightBorder.isDashed ? 'dashed': 'solid',
    'border-bottom-style': _vm.dataInfo.style.borderStyle.bottomBorder.isDashed ? 'dashed': 'solid',
    'border-left-color': _vm.dataInfo.style.borderStyle.leftBorder.color,
    'border-top-color': _vm.dataInfo.style.borderStyle.topBorder.color,
    'border-right-color': _vm.dataInfo.style.borderStyle.rightBorder.color,
    'border-bottom-color': _vm.dataInfo.style.borderStyle.bottomBorder.color,
    'width':_vm.dataInfo.style.cellStyle.cellWidth && _vm.dataInfo.style.cellStyle.cellWidth> 0 ? _vm.dataInfo.style.cellStyle.cellWidth + 'px' : null,
    'height':_vm.dataInfo.style.cellStyle.lineHeight && _vm.dataInfo.style.cellStyle.lineHeight> 0 ? _vm.dataInfo.style.cellStyle.lineHeight + 'px' : null,
  }),attrs:{"rowSpan":_vm.dataInfo.style.cellSetting.rowSpan,"colSpan":_vm.dataInfo.style.cellSetting.colSpan}},[_vm._v(" "+_vm._s(_vm.dataInfo.data.name)+" "),(_vm.store.cellConfig.couldDelete && _vm.dataInfo.data.name)?_c('l-icon',{staticClass:"components-excel-cell-icon",attrs:{"name":"shanchu-liebiao"},nativeOn:{"click":function($event){return _vm.removeCellDataInfo($event)}}}):_vm._e()],1):_vm._e()}
var cellvue_type_template_id_5ca134d6_staticRenderFns = []


// CONCATENATED MODULE: ./packages/l-excel/src/views/content/cell.vue?vue&type=template&id=5ca134d6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/content/cell.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cellvue_type_script_lang_js_ = ({
  name: "CellModel",
  props: {
    dataInfo: {
      type: Object,
      default: () => {
        return {};
      }
    },
    store: {}
  },
  methods: {
    /**
     * @description 清除单元格的数据
     */
    removeCellDataInfo() {
      this.dataInfo.removeDataInfo();
      this.store.clearSelectedCells();
    }
  }
});

// CONCATENATED MODULE: ./packages/l-excel/src/views/content/cell.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_cellvue_type_script_lang_js_ = (cellvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/l-excel/src/views/content/cell.vue?vue&type=style&index=0&lang=scss&
var cellvue_type_style_index_0_lang_scss_ = __webpack_require__("491f");

// CONCATENATED MODULE: ./packages/l-excel/src/views/content/cell.vue






/* normalize component */

var cell_component = normalizeComponent(
  content_cellvue_type_script_lang_js_,
  cellvue_type_template_id_5ca134d6_render,
  cellvue_type_template_id_5ca134d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var content_cell = (cell_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fa5daf5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/content/defineMenu.vue?vue&type=template&id=f376c6fe&scoped=true&
var defineMenuvue_type_template_id_f376c6fe_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.menuInfo.showMenu)?_c('div',{ref:"defineMenu",staticClass:"cell-row-insert-dialog",style:({
    'top':_vm.menuInfo.top+'px',
    'left':_vm.menuInfo.left + 'px'
  })},[_c('div',{staticClass:"cell-row-insert-item"},[_c('div',{staticClass:"label"},[_vm._v(" 在上方插入 ")]),_c('el-input',{nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.insertBeforeRows($event)}},model:{value:(_vm.insertInfo.beforeRow),callback:function ($$v) {_vm.$set(_vm.insertInfo, "beforeRow", $$v)},expression:"insertInfo.beforeRow"}}),_c('div',{staticClass:"label"},[_vm._v(" 行 ")])],1),_c('div',{staticClass:"cell-row-insert-item"},[_c('div',{staticClass:"label"},[_vm._v(" 在下方插入 ")]),_c('el-input',{nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.insertAfterRows($event)}},model:{value:(_vm.insertInfo.afterRow),callback:function ($$v) {_vm.$set(_vm.insertInfo, "afterRow", $$v)},expression:"insertInfo.afterRow"}}),_c('div',{staticClass:"label"},[_vm._v(" 行 ")])],1),_c('div',{staticClass:"cell-row-insert-item split",on:{"click":_vm.deleteRows}},[_vm._v(" 删除所在行 ")]),_c('div',{staticClass:"cell-row-insert-item"},[_c('div',{staticClass:"label"},[_vm._v(" 在左侧插入 ")]),_c('el-input',{on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.insertCells(1)}},model:{value:(_vm.insertInfo.leftCell),callback:function ($$v) {_vm.$set(_vm.insertInfo, "leftCell", $$v)},expression:"insertInfo.leftCell"}}),_c('div',{staticClass:"label"},[_vm._v(" 列 ")])],1),_c('div',{staticClass:"cell-row-insert-item"},[_c('div',{staticClass:"label"},[_vm._v(" 在右侧插入 ")]),_c('el-input',{on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.insertCells(-1)}},model:{value:(_vm.insertInfo.rightCell),callback:function ($$v) {_vm.$set(_vm.insertInfo, "rightCell", $$v)},expression:"insertInfo.rightCell"}}),_c('div',{staticClass:"label"},[_vm._v(" 列 ")])],1),_c('div',{staticClass:"cell-row-insert-item",on:{"click":_vm.deleteCells}},[_vm._v(" 删除所在列 ")])]):_vm._e()}
var defineMenuvue_type_template_id_f376c6fe_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/l-excel/src/views/content/defineMenu.vue?vue&type=template&id=f376c6fe&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/content/defineMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var defineMenuvue_type_script_lang_js_ = ({
  name: "DefineMenu",
  props: [ "store", "dataInfo" ],
  data() {
    return {
      menuInfo: {
        showMenu: false,
        top: 0,
        left: 0
      },
      insertInfo: {
        beforeRow: 1,
        afterRow: 1,
        leftCell: 1,
        rightCell: 1
      }
    };
  },
  mounted() {
    this.checkMenuStatus();
    this.checkMenuShow();
  },
  methods: {
    /**
     * @description 鼠标单击时，判断是否需要隐藏自定义菜单
     */
    checkMenuStatus() {
      window.onclick = ((e) => {
        if (this.menuInfo.showMenu) {
          let dom = this.$refs.defineMenu;
          let x = e.clientX;
          let y = e.clientY;
          let domXMin = dom.offsetLeft;
          let domYMin = dom.offsetTop;
          let domXMax = dom.offsetLeft + dom.offsetWidth;
          let domYMax = dom.offsetTop + dom.offsetHeight;
          if (x < domXMin || x > domXMax || y < domYMin || y > domYMax) {
            this.menuInfo.showMenu = false;
          }
        }
      });
    },
    /**
     * @description 鼠标右键点击时，判断是否在单元格内，如果在单元格内，显示自定义菜单
     */
    checkMenuShow() {
      window.oncontextmenu = ((e) => {
        if (e.target.localName === "td") {
          e.preventDefault();
          this.menuInfo.showMenu = true;
          setTimeout(() => {
            let maxWidth = document.body.scrollWidth;
            let menuWidth = this.$refs.defineMenu.offsetWidth;
            if (menuWidth + e.clientX - e.layerX + e.target.offsetWidth > maxWidth) {
              this.menuInfo.top = e.clientY - e.layerY + e.target.offsetHeight;
              this.menuInfo.left = e.clientX - e.layerX + e.target.offsetWidth - menuWidth;
            } else {
              this.menuInfo.top = e.clientY - e.layerY + e.target.offsetHeight;
              this.menuInfo.left = e.clientX - e.layerX + e.target.offsetWidth;
            }
          }, 10);
        }
      });
    },
    /**
     * @description 在当前单元格上方插入指定行
     */
    insertBeforeRows() {
      this.clearDataInfo();
      this.store.insertBeforeRow(this.insertInfo.beforeRow);
    },
    /**
     * @description 在当前单元格下方插入指定行
     */
    insertAfterRows() {
      this.clearDataInfo();
      this.store.insertAfterRow(this.insertInfo.afterRow);
    },
    /**
     * @description 删除行
     */
    deleteRows() {
      this.clearDataInfo();
      this.store.deleteCurrentRow();
    },
    /**
     * @description 插入列
     */
    insertCells() {
    },
    /**
     * @description 删除列
     */
    deleteCells() {
      this.clearDataInfo();
      this.store.deleteCurrentCol();
    },
    /**
     * @description 清除数据
     */
    clearDataInfo() {
      this.insertInfo = {
        beforeRow: 1,
        afterRow: 1,
        leftCell: 1,
        rightCell: 1
      };
      this.menuInfo.showMenu = false;
    }
  }
});

// CONCATENATED MODULE: ./packages/l-excel/src/views/content/defineMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var content_defineMenuvue_type_script_lang_js_ = (defineMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/l-excel/src/views/content/defineMenu.vue?vue&type=style&index=0&id=f376c6fe&lang=scss&scoped=true&
var defineMenuvue_type_style_index_0_id_f376c6fe_lang_scss_scoped_true_ = __webpack_require__("f924");

// CONCATENATED MODULE: ./packages/l-excel/src/views/content/defineMenu.vue






/* normalize component */

var defineMenu_component = normalizeComponent(
  content_defineMenuvue_type_script_lang_js_,
  defineMenuvue_type_template_id_f376c6fe_scoped_true_render,
  defineMenuvue_type_template_id_f376c6fe_scoped_true_staticRenderFns,
  false,
  null,
  "f376c6fe",
  null
  
)

/* harmony default export */ var defineMenu = (defineMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/views/content/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var contentvue_type_script_lang_js_ = ({
  name: "ExcelContent",
  components: {
    excelToolbar: toolbar,
    excelCell: content_cell,
    defineMenu: defineMenu
  },
  props: {
    store: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return { isSelectCell: false, cellInfo: {} };
  },
  mounted() {
    let _this = this;
    window.onmouseup = ((e) => {
      if (e.target.localName !== "td" && _this.isSelectCell) {
        _this.isSelectCell = false;
        _this.store.clearSelectedCells();
      }
    });
  },
  methods: {
    /**
     * @description 鼠标按键按下，记录数据信息
     * @param $event
     * @param elData
     */
    mouseDown($event, elData) {
      // 鼠标点击的时候，需要判断是左键还是右键，右键触发的是自定义菜单，左键是选中
      if ($event.button !== 2) {
        this.isSelectCell = true;
        this.store.clearSelectedCells();
        this.store.setCellPositionInfo(elData);
      }
    },
    /**
     * @description 鼠标移动，记录坐标信息
     * @param elData
     */
    mouseMove(elData) {
      if (this.isSelectCell) {
        this.store.setCellPositionInfo(elData);
      }
    },
    /**
     * @description 鼠标松开，记录最后一个位置的数据信息
     * @param elData
     */
    mouseUp(elData) {
      this.store.setCellPositionInfo(elData, true);
      this.isSelectCell = false;
    },
    /**
     * @description 右键点击，记录数据
     */
    setDefineData(elData) {
      this.store.setMenuDataInfo(elData);
    },
    /**
     * @description 拖拽结束时，设置数据到对应单元格内
     */
    dragEnd(elData) {
      elData.setDataInfo(this.store.dragData);
      this.store.clearSelectedCells();
    },
    /**
     * @description 鼠标移入单元格
     */
    dragOver(elData) {
      elData.setDuringClass();
    },
    /**
     * @description 鼠标移开了
     */
    dragLevel(elData) {
      elData.removeDuringClass();
    }
  }
});

// CONCATENATED MODULE: ./packages/l-excel/src/views/content/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_contentvue_type_script_lang_js_ = (contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/l-excel/src/views/content/index.vue?vue&type=style&index=0&id=bc857478&lang=scss&scoped=true&
var contentvue_type_style_index_0_id_bc857478_lang_scss_scoped_true_ = __webpack_require__("9a35");

// CONCATENATED MODULE: ./packages/l-excel/src/views/content/index.vue






/* normalize component */

var content_component = normalizeComponent(
  views_contentvue_type_script_lang_js_,
  contentvue_type_template_id_bc857478_scoped_true_render,
  contentvue_type_template_id_bc857478_scoped_true_staticRenderFns,
  false,
  null,
  "bc857478",
  null
  
)

/* harmony default export */ var content = (content_component.exports);
// CONCATENATED MODULE: ./packages/l-excel/src/model/cellOperation.js
class CellInfo {
  constructor(store, data, id, row, col) {
    this.store = store;
    // 默认样式
    this.style = {
      // 字段格式
      fieldStyle: {
        // 文本
        text: false,
        // 数值属性
        numericalStyle: {
          // 小数位
          digitNum: null,
          // 字段排序是否为升序
          orderByASC: false,
          // 数值为0显示空
          emptyShowNull: false,
          // 数值为0显示0
          emptyShowZero: false,
          // 数值为0显示--
          emptyShowWait: false,
          // 显示千分符
          showThousandSplit: false
        },
        // 金额图标
        amount: {
          // 是否为RMB
          isRMB: false,
          // 是否为美元
          isUSD: false,
          // 是否为英镑
          isGBP: false,
          // 是否为欧元
          isEUR: false
        },
        // 日期格式
        dateFormat: {
          // yyyy/mm/dd
          fullShortDate: false,
          // mm月dd日
          monthAndDate: false,
          // yyyy年mm月
          yearAndMonth: false,
          // yyyy年mm月dd日
          fullDate: false,
          // yyyy/mm/dd HH:MM:SS
          dateAndTime: false
        },
        // 是否为百分数
        percentage: false
      },
      // 对齐方式
      textAlign: "center",
      // 单元格行高列宽
      cellStyle: {
        // 行高
        lineHeight: null,
        // 列宽
        cellWidth: null
      },
      // 单元格的合并属性
      cellSetting: {
        colSpan: 1,
        rowSpan: 1
      },
      // 是否加粗
      fontWeight: false,
      // 背景颜色
      backgroundColor: "#ffffff",
      // 字体颜色
      fontColor: "#000000",
      // 边框设置
      borderStyle: {
        leftBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线--默认
          isSolid: false,
          // 虚线
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        rightBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线--默认
          isSolid: false,
          // 虚线
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        topBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线--默认
          isSolid: false,
          // 虚线
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        bottomBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线--默认
          isSolid: false,
          // 虚线
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        }
      }
    };
    // 单元格所在的行下标
    this.row = row;
    // 单元格所在的列下标
    this.col = col;
    // 单元格绑定的数据
    this.data = data || {};
    // 单元格的ID
    this.id = id || 0;
    // 单元格是否在选中的范围内
    this.wasDuring = false;
  }

  /**
   * @description 设置单元格默认样式
   * @return {{backgroundColor: string, textAlign: string, borderStyle: {leftBorder: {isSolid: boolean, color: string, isDashed: boolean, width: string}, rightBorder: {isSolid: boolean, color: string, isDashed: boolean, width: string}, bottomBorder: {isSolid: boolean, color: string, isDashed: boolean, width: string}, topBorder: {isSolid: boolean, color: string, isDashed: boolean, width: string}}, cellStyle: {cellWeight: null, lineHeight: null}, fieldStyle: {amount: {isRMB: boolean, isUSD: boolean, isEUR: boolean, isGBP: boolean}, dateFormat: {fullDate: boolean, dateAndTime: boolean, monthAndDate: boolean, yearAndMonth: boolean, fullShortDate: boolean}, percentage: boolean, text: boolean, numericalStyle: {orderByASC: boolean, emptyShowWait: boolean, showThousandSplit: boolean, emptyShowNull: boolean, digitNum: null, emptyShowZero: boolean}}, cellSetting: {rowSpan: number, colSpan: number}, fontWeight: boolean, fontColor: string}}
   */
  static setDefaultStyleConfig() {
    return {
      // 字段格式
      fieldStyle: {
        // 文本
        text: false,
        // 数值属性
        numericalStyle: {
          // 小数位
          digitNum: null,
          // 字段排序是否为升序
          orderByASC: false,
          // 数值为0显示空
          emptyShowNull: false,
          // 数值为0显示0
          emptyShowZero: false,
          // 数值为0显示--
          emptyShowWait: false,
          // 显示千分符
          showThousandSplit: false
        },
        // 金额图标
        amount: {
          // 是否为RMB
          isRMB: false,
          // 是否为美元
          isUSD: false,
          // 是否为英镑
          isGBP: false,
          // 是否为欧元
          isEUR: false
        },
        // 日期格式
        dateFormat: {
          // yyyy/mm/dd
          fullShortDate: false,
          // mm月dd日
          monthAndDate: false,
          // yyyy年mm月
          yearAndMonth: false,
          // yyyy年mm月dd日
          fullDate: false,
          // yyyy/mm/dd HH:MM:SS
          dateAndTime: false
        },
        // 是否为百分数
        percentage: false
      },
      // 对齐方式
      textAlign: "center",
      // 单元格行高列宽
      cellStyle: {
        // 行高
        lineHeight: null,
        // 列宽
        cellWidth: null
      },
      cellSetting: {
        colSpan: 1,
        rowSpan: 1
      },
      // 是否加粗
      fontWeight: false,
      // 背景颜色
      backgroundColor: "#ffffff",
      // 字体颜色
      fontColor: "#000000",
      // 边框设置
      borderStyle: {
        leftBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        rightBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        topBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        bottomBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        }
      }
    };
  }

  /**
   * @description 清除单元格样式信息
   */
  clearCellStyleInfo() {
    this.style = CellInfo.setDefaultStyleConfig();
  }

  /**
   * @description 设置/取消 字体加粗
   * @param isWeight
   */
  setCellFontWeight(isWeight) {
    this.style.fontWeight = isWeight;
  }

  /**
   * @description 设置字体对齐方式
   * @param direction
   */
  setCellTextAlign(direction) {
    this.style.textAlign = direction;
  }

  /**
   * @@description 设置底部边框及右侧边框的颜色
   * @param color
   */
  setBasicBorderColor(color) {
    this.setRightBorderColor(color);
    this.setBottomBorderColor(color);
  }

  /**
   * @description 设置底部边框及右侧边框的样式
   * @param style
   */
  setBasicBorderStyle(style) {
    this.setRightBorderStyle(style);
    this.setBottomBorderStyle(style);
  }

  /**
   * @description 设置底部边框及右侧边框的线条宽度
   * @param width
   */
  setBasicBorderWidth(width) {
    this.setRightBorderWidth(width);
    this.setBottomBorderWidth(width);
  }

  /**
   * @description 设置顶部边框颜色
   * @param color
   */
  setTopBorderColor(color) {
    this.style.borderStyle.topBorder.color = color;
  }

  /**
   * @description 设置顶部边框宽度
   * @param width
   */
  setTopBorderWidth(width) {
    this.style.borderStyle.topBorder.width = width;
  }

  /**
   * @description 设置顶部边框样式
   * @param style
   */
  setTopBorderStyle(style) {
    this.style.borderStyle.topBorder.isDashed = style === "isDashed";
    this.style.borderStyle.topBorder.isSolid = style !== "isDashed";
  }

  /**
   * @description 设置右侧边框颜色
   * @param color
   */
  setRightBorderColor(color) {
    this.style.borderStyle.rightBorder.color = color;
  }

  /**
   * @description 设置右侧边框宽度
   * @param width
   */
  setRightBorderWidth(width) {
    this.style.borderStyle.rightBorder.width = width;
  }

  /**
   * @description 设置右侧边框样式
   * @param style
   */
  setRightBorderStyle(style) {
    this.style.borderStyle.rightBorder.isDashed = style === "isDashed";
    this.style.borderStyle.rightBorder.isSolid = style !== "isDashed";
  }

  /**
   * @description 设置底部边框颜色
   * @param color
   */
  setBottomBorderColor(color) {
    this.style.borderStyle.bottomBorder.color = color;
  }

  /**
   * @description 设置底部边框宽度
   * @param width
   */
  setBottomBorderWidth(width) {
    this.style.borderStyle.bottomBorder.width = width;
  }

  /**
   * @description 设置底部边框样式
   * @param type
   */
  setBottomBorderStyle(type) {
    this.style.borderStyle.bottomBorder.isDashed = type === "isDashed";
    this.style.borderStyle.bottomBorder.isSolid = type !== "isDashed";
  }

  /**
   * @description 设置左侧边框颜色
   * @param color
   */
  setLeftBorderColor(color) {
    this.style.borderStyle.leftBorder.color = color;
  }

  /**
   * @description 设置左侧边框宽度
   * @param width
   */
  setLeftBorderWidth(width) {
    this.style.borderStyle.leftBorder.width = width;
  }

  /**
   * @description 设置左侧边框样式
   * @param type
   */
  setLeftBorderStyle(type) {
    this.style.borderStyle.leftBorder.isDashed = type === "isDashed";
    this.style.borderStyle.leftBorder.isSolid = type !== "isDashed";
  }

  /**
   * @description 设置单元格行高
   * @param height
   */
  setCellRowHeight(height) {
    this.style.cellStyle.lineHeight = height;
  }

  /**
   * @description 设置单元格列宽
   * @param width
   */
  setCellColWidth(width) {
    this.style.cellStyle.cellWidth = width;
  }

  /**
   * @description 设置单元格背景颜色
   * @param color
   */
  setCellBackGroundColor(color) {
    this.style.backgroundColor = color;
  }

  /**
   * @description 移除选中的样式类
   */
  removeDuringClass() {
    this.wasDuring = false;
  }

  /**
   * @description 设置选中的样式类
   */
  setDuringClass() {
    this.wasDuring = true;
  }

  /**
   * @description 设置单元格的行合并值
   * @param num
   */
  setCellRowSpan(num) {
    this.style.cellSetting.rowSpan = num;
  }

  /**
   * @description 设置单元格的行列并值
   * @param num
   */
  setCellColSpan(num) {
    this.style.cellSetting.colSpan = num;
  }

  /**
   * @description 设置数据
   * @param data
   */
  setDataInfo(data) {
    this.data = data;
  }

  /**
   * @description 移除单元格数据信息
   */
  removeDataInfo() {
    this.data = {};
  }

  /**
   * @description 设置行坐标信息
   * @param num
   */
  setRowLineNum(num) {
    this.row = num;
  }

  /**
   * @description 设置列坐标信息
   * @param num
   */
  setColLineNum(num) {
    this.col = num;
  }

  /**
   * @description 设置单元格字体颜色
   * @param color
   */
  setCellFontColor(color) {
    this.style.fontColor = color;
  }
}

// CONCATENATED MODULE: ./packages/l-excel/src/model/cellConfig.js
class cellConfig {
  constructor() {
    this.couldDelete = false;
    this.row = 0;
    this.col = 0;
  }
}

// CONCATENATED MODULE: ./packages/l-excel/src/model/index.js



class model_Store {
  constructor() {
    // 所有的单元格
    this.allCells = [];
    // 拖拽选中的单元格最小的行
    this.minRow = null;
    // 拖拽选中的单元格最小的列
    this.minCol = null;
    // 拖拽选中的单元格最大的行
    this.maxRow = null;
    // 拖拽选中的单元格最大的列
    this.maxCol = null;
    // 拖拽开始时选中的节点坐标
    this.startCellInfo = {
      row: null,
      col: null
    };
    // 选中的最左上角的单元格行列坐标
    this.beginCellInfo = null;
    // 选中的单元格是否全部加粗
    this.allWeight = false;
    // 选中的单元格
    this.selectedCells = [];
    // 被合并的单元格
    this.mergedCells = [];
    // 合并及被合并的单元格信息
    this.mergedCellsList = [];
    // 选中的单元格是否可拆分
    this.isSplit = false;
    // 拖拽的数据源
    this.dragData = {};
    // 配置相关的信息
    this.cellConfig = new cellConfig();
    // 右键菜单的数据
    this.menuData = {};
  }

  /**
   * @description 初始化
   * @param list
   */
  init(list) {
    this.allCells = list;
    list.map((item, index) => {
      item.map((cItem, cIndex) => {
        new CellInfo(this, cItem.data, cItem.id, index, cIndex);
      });
    });
  }

  /**
   * @description 设置选中的单元格
   * @return {Array}
   * @constructor
   */
  reGetSelectedCells() {
    this.selectedCells = [];
    this.mergedCellsList = [];
    this.allCells.map(rItem => {
      rItem.map(cItem => {
        // 如果单元格是覆盖状态，并且单元格是显示的，将其塞入至选中的数组内
        if (cItem.wasDuring) {
          if (cItem.style.cellSetting.rowSpan > 0 &&
            cItem.style.cellSetting.colSpan > 0) {
            this.selectedCells.push(cItem);
          }
          this.mergedCellsList.push(cItem);
          // 如果不存在起点单元格的坐标信息，将单元格的坐标信息赋值
          if (!this.beginCellInfo) {
            this.beginCellInfo = cItem;
          }
        }
      });
    });
    this.isSplit = this.selectedCells.length === 1 &&
      (this.selectedCells[0].style.cellSetting.colSpan > 1 ||
        this.selectedCells[0].style.cellSetting.rowSpan > 1);
    this.checkWeightInfo();
  }

  /**
   * @description 清除选中
   */
  clearSelectedCells() {
    this.selectedCells.map(item => {
      item.wasDuring = false;
      item.removeDuringClass();
    });
    if (this.isSplit) {
      this.mergedCellsList.map(item => {
        item.wasDuring = true;
        item.setDuringClass();
      });
      this.isSplit = false;
    }
    this.selectedCells = [];
    this.selectedCells = [];
    this.beginCellInfo = null;
    this.minRow = null;
    this.maxRow = null;
    this.minCol = null;
    this.maxCol = null;
  }

  /**
   * @description 检测单元格是否在覆盖范围内
   */
  checkCellDuringStatus() {
    this.allCells.map(item => {
      item.map(cItem => {
        if (cItem.row <= this.maxRow && cItem.col <= this.maxCol && cItem.row >= this.minRow && cItem.col >= this.minCol) {
          cItem.setDuringClass();
        } else {
          cItem.removeDuringClass();
        }
      });
    });
  }

  /**
   * @description 设置默认表格
   * @param row 行数
   * @param col 列数
   * @return {Array}
   */
  setDefaultList(row, col) {
    row = row ? row : 10;
    col = col ? col : 10;
    this.allCells = [];
    for (let r = 0; r < row; r++) {
      let rowObj = [];
      for (let c = 0; c < col; c++) {
        let cellCon = new CellInfo(this, {}, new Date().getTime() + "_" + r + "_" + c, r, c);
        rowObj.push(cellCon);
      }
      this.allCells.push(rowObj);
    }
  }

  /**
   * @description 更改选中的单元格边框颜色
   * @param color
   */
  changeBorderColor(color) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      // 设置单元格基础边框颜色=>底部边框及右侧边框
      item.setBasicBorderColor(color);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderColor(color);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderColor(color);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderColor(color);
      }
      // 如果不是第一列的，需要设置上一列的当前个单元格的左侧边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderColor(color);
      }
    });
  }

  /**
   * @description 更改选中的单元格边框宽度
   * @param width
   */
  changeBorderWidth(width) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      // 设置单元格基础边框颜色=>底部边框及右侧边框
      item.setBasicBorderWidth(width);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderWidth(width);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderWidth(width);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderWidth(width);
      }
      // 如果不是第一列的，需要设置上一列的当前个单元格的左侧边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderWidth(width);
      }
    });
  }

  /**
   * @description 将单元格边框设置成无边框
   */
  changeNoBorderInfo() {
    let borderColor = "#e8ecf2";
    let borderWidth = "1px";
    let borderType = "isDashed";
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setBasicBorderWidth(borderWidth);
      item.setBasicBorderColor(borderColor);
      item.setBasicBorderStyle(borderType);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderWidth(borderWidth);
        item.setTopBorderColor(borderColor);
        item.setTopBorderStyle(borderType);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderWidth(borderWidth);
        this.allCells[item.row - 1][item.col].setBottomBorderColor(borderColor);
        this.allCells[item.row - 1][item.col].setBottomBorderStyle(borderType);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderWidth(borderWidth);
        item.setLeftBorderColor(borderColor);
        item.setLeftBorderStyle(borderType);
      }
      // 如果不是第一列的，需要设置当前行的前一列的边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderWidth(borderWidth);
        this.allCells[item.row][item.col - 1].setRightBorderColor(borderColor);
        this.allCells[item.row][item.col - 1].setRightBorderStyle(borderType);
      }
    });
  }

  /**
   * @description 将单元格设置成所有边框
   */
  changeAllBorderInfo() {
    let borderColor = "#000000";
    let borderWidth = "1px";
    let borderType = "isSolid";
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setBasicBorderWidth(borderWidth);
      item.setBasicBorderColor(borderColor);
      item.setBasicBorderStyle(borderType);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderWidth(borderWidth);
        item.setTopBorderColor(borderColor);
        item.setTopBorderStyle(borderType);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderWidth(borderWidth);
        this.allCells[item.row - 1][item.col].setBottomBorderColor(borderColor);
        this.allCells[item.row - 1][item.col].setBottomBorderStyle(borderType);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderWidth(borderWidth);
        item.setLeftBorderColor(borderColor);
        item.setLeftBorderStyle(borderType);
      }
      // 如果不是第一列的，需要设置当前行的前一列的边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderWidth(borderWidth);
        this.allCells[item.row][item.col - 1].setRightBorderColor(borderColor);
        this.allCells[item.row][item.col - 1].setRightBorderStyle(borderType);
      }
    });
  }

  /**
   * @description 将单元格设置成实线边框
   * @param type
   */
  changeSolidBorderInfo(type) {
    let borderWidth = type === "isSolidBorder" ? "2px" : "1px";
    let borderType = "isSolid";
    this.reGetSelectedCells();
    this.changeBorderWidth(borderWidth);
    this.selectedCells.map(item => {
      item.setBasicBorderStyle(borderType);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderStyle(borderType);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderStyle(borderType);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderStyle(borderType);
      }
      // 如果不是第一列的，需要设置当前行的前一列的边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderStyle(borderType);
      }
    });
  }

  /**
   * @description 将单元格设置成实线边框
   */
  changeDashedBorderInfo() {
    let borderWidth = "1px";
    let borderType = "isDashed";
    this.reGetSelectedCells();
    this.changeBorderWidth(borderWidth);
    this.selectedCells.map(item => {
      item.setBasicBorderStyle(borderType);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderStyle(borderType);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderStyle(borderType);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderStyle(borderType);
      }
      // 如果不是第一列的，需要设置当前行的前一列的边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderStyle(borderType);
      }
    });
  }

  /**
   * @description 更改单元格对齐方式
   * @param align
   */
  changeCellTextAlign(align) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellTextAlign(align);
    });
  }

  /**
   * @description 更改单元格字体加粗属性
   */
  changeCellFontWeight() {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellFontWeight(!this.allWeight);
    });
  }

  /**
   * @description 设置行高
   * @param height
   */
  changeCellHeight(height) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellRowHeight(height);
    });
  }

  /**
   * @description 更改单元格背景颜色
   * @param color
   */
  changeCellBg(color) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellBackGroundColor(color);
    });
  }

  /**
   * @description 更改单元格字体颜色
   * @param color
   */
  changeCellFontColor(color) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellFontColor(color);
    });
  }

  /**
   * @description 更改单元格列宽
   * @param width
   */
  changeCellWidth(width) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellColWidth(width);
    });
  }

  /**
   * @description 清除单元格样式
   */
  clearStyleInfo() {
    this.allCells.map(item => {
      item.map(cItem => {
        cItem.clearCellStyleInfo();
      });
    });
  }

  /**
   * @description 拖动选择单元格，进行单元格的数据信息记录
   * @param cellData 单元格信息
   * @param getSelected 是否需要获取选中的单元格
   */
  setCellPositionInfo(cellData, getSelected) {
    // 如果不存在起始单元格数据信息
    if (this.minRow === null && this.minCol === null) {
      this.minRow = cellData.row;
      this.minCol = cellData.col;
      this.maxRow = cellData.row;
      this.maxCol = cellData.col;
      this.startCellInfo = {
        row: cellData.row,
        col: cellData.col
      };
    } else {
      this.checkPositionInfo(cellData);
      if (getSelected) {
        this.reGetSelectedCells();
      }
    }
  }

  /**
   * @description 检测拖到的单元格的坐标体系
   * @param cellData
   */
  checkPositionInfo(cellData) {
    let cRow = cellData.row + cellData.style.cellSetting.rowSpan - 1;
    let cCol = cellData.col + cellData.style.cellSetting.colSpan - 1;
    // 判断拖动的方向，以起点为准心
    // 如果是向下拖动
    if (cRow > this.startCellInfo.row) {
      this.maxRow = cRow;
      // 向右拖动
      if (cCol > this.startCellInfo.col) {
        this.maxCol = cCol;
        // 向左拖动
      } else {
        this.maxCol = this.startCellInfo.col;
        this.minCol = cCol;
      }
      // 向上拖动
    } else {
      this.minRow = cRow;
      this.maxRow = this.startCellInfo.row;
      // 向右拖动
      if (cCol > this.startCellInfo.col) {
        this.maxCol = cCol;
        // 向左拖动
      } else {
        this.maxCol = this.startCellInfo.col;
        this.minCol = cCol;
      }
    }
    // 如果存在合并的单元格，需要检测坐标是否会发生碰撞
    if (this.mergedCells.length > 0) {
      this.checkMergeCellInfo();
      // 否则直接执行单元格状态变更
    } else {
      this.checkCellDuringStatus();
    }
  }

  /**
   * @description 执行拖拽时与合并单元格的碰撞检查
   */
  checkMergeCellInfo() {
    // 暂存之前的起始行列坐标信息
    let minR = this.minRow, maxR = this.maxRow, minC = this.minCol, maxC = this.maxCol;
    // 遍历合并的单元格是否有影响到此拖拽情况的
    this.mergedCells.map(item => {
      // 合并单元格的起点行
      let minRow = item.row;
      // 合并单元格的终点行
      let maxRow = item.row + item.style.cellSetting.rowSpan - 1;
      // 合并单元格的起点列
      let minCol = item.col;
      // 合并单元格的终点列
      let maxCol = item.col + item.style.cellSetting.colSpan - 1;
      // 如果行列都在范围内
      if (maxC >= minCol && minC <= maxCol && maxR >= minRow && minR <= maxRow) {
        // 如果终点的行小于合并单元格的终点行
        if (maxR < maxRow) {
          // 重置终点行
          this.maxRow = maxRow;
        }
        // 如果起点的行大于合并单元格的起点行
        if (minR > minRow) {
          // 重置起点行
          this.minRow = minRow;
        }
        // 如果起点的列大于合并单元格的起点列
        if (minC > minCol) {
          // 重置起点裂
          this.minCol = minCol;
        }
        // 如果终点的列小于合并单元格的终点列
        if (maxC < maxCol) {
          // 重置终点列
          this.maxCol = maxCol;
        }
      }
    });
    // 如果存在坐标被修改过，那么说明坐标还未确定，需要重新执行一次
    if (this.minCol !== minC || this.maxCol !== maxC || this.maxRow !== maxR || this.minRow !== minR) {
      this.checkMergeCellInfo();
      // 坐标确认之后，执行单元格的状态变更
    } else {
      this.checkCellDuringStatus();
    }
  }

  /**
   * @description 执行选中的单元格合并
   */
  mergeCellOp() {
    this.reGetSelectedCells();
    let rSpan = this.beginCellInfo.style.cellSetting.rowSpan;
    let cSpan = this.beginCellInfo.style.cellSetting.colSpan;
    this.selectedCells.map(item => {
      // 同行的计算出对应的列
      if (item.row === this.beginCellInfo.row && item.col !== this.beginCellInfo.col) {
        cSpan += item.style.cellSetting.colSpan;
      }
      // 同列的计算出对应的行
      if (item.row !== this.beginCellInfo.row && item.col === this.beginCellInfo.col) {
        rSpan += item.style.cellSetting.rowSpan;
      }
      // 不是开始的单元格，行列值都设置为0
      if (item !== this.beginCellInfo) {
        item.setCellColSpan(0);
        item.setCellRowSpan(0);
      }
    });
    this.beginCellInfo.setCellRowSpan(rSpan);
    this.beginCellInfo.setCellColSpan(cSpan);
    // 存储合并的单元格信息
    this.mergedCells.push(this.beginCellInfo);
  }

  /**
   * @description 执行选中的单元格拆分
   */
  splitCellOp() {
    this.mergedCellsList.map(item => {
      item.setCellRowSpan(1);
      item.setCellColSpan(1);
    });
  }

  /**
   * @description 记录右键菜单点击的数据信息
   * @param data
   */
  setMenuDataInfo(data) {
    this.menuData = data;
  }

  /**
   * @description 在点击的行上方插入指定行
   * @param num
   */
  insertBeforeRow(num) {
    this.insertRowInfoOp(num);
  }

  /**
   * @description 在点击的行下方插入指定行
   * @param num
   */
  insertAfterRow(num) {
    this.insertRowInfoOp(num, true);
  }

  /**
   * @description 插入行处理
   * @param num
   * @param isDown
   */
  insertRowInfoOp(num, isDown) {
    if (this.mergedCells.length === 0) {
      for (let n = 0; n < num; n++) {
        let newRow = [];
        let r = this.menuData.row + n;
        for (let c = 0; c < this.cellConfig.col; c++) {
          let cellCon = new CellInfo(this, {}, new Date().getTime() + "_" + r + "_" + c, r, c);
          newRow.push(cellCon);
        }
        this.allCells.splice(isDown ? r + 1 : r, 0, newRow);
      }
    } else {
      this.checkCellEffect(num, isDown);
    }
    this.resetCellPositionInfo(num);
  }

  /**
   * @description 检查插入行时，合并单元格对其的影响
   * @param num
   * @param isDown
   */
  checkCellEffect(num, isDown) {
    this.mergedCells.map(item => {
      let rSpan = item.style.cellSetting.rowSpan;
      let cSpan = item.style.cellSetting.colSpan;
      let rNum = item.row + rSpan - 1;
      let cNum = item.col + cSpan - 1;
      let cRow = this.menuData.row;
      let newRow = [];
      // 如果当前行受到行插入的影响
      if (rNum > cRow && cRow >= item.row) {
        for (let i = 0; i < num; i++) {
          // 更新合并的单元格的行合并值
          item.setCellRowSpan(rSpan + 1);
          // 得到新的行数据
          newRow = this.produceNewRow();
          // 对新的行数据进行单元格的rowSpan、colSpan处理
          newRow.map(rItem => {
            if (item.col <= rItem.col && rItem.col <= cNum) {
              rItem.setCellRowSpan(0);
              rItem.setCellColSpan(0);
            }
          });
          this.allCells.splice(isDown ? cRow + 1 : cRow, 0, newRow);
        }
        // 如果当前行不受影响
      } else {
        for (let i = 0; i < num; i++) {
          newRow = this.produceNewRow();
          this.allCells.splice(isDown ? cRow + 1 : cRow, 0, newRow);
        }
      }
    });
  }

  /**
   * @description 生成新的一行单元格
   * @return {Array}
   */
  produceNewRow() {
    let colNum = this.cellConfig.col;
    let newRow = [];
    for (let i = 0; i < colNum; i++) {
      let cell = new CellInfo(this, {}, new Date().getTime() + "_" + i, +"_" + i, i, i);
      newRow.push(cell);
    }
    return newRow;
  }

  /**
   * @description 左侧插入列
   * @param num
   */
  insertBeforeCol(num) {
    this.insertColInfoOp(num, true);
  }

  /**
   * @description 右侧插入列
   * @param num
   */
  insertAfterCol(num) {
    this.insertColInfoOp(num);
  }

  /**
   * @description 插入列处理
   * @param num
   * @param isLeft
   */
  insertColInfoOp(num, isLeft) {
    // 如果不存在合并的单元格，直接进行插入
    if (this.mergedCells.length === 0) {
      let cCol = isLeft ? this.menuData.col : this.menuData.col + 1;
      this.allCells.map(item => {
        let cell = new CellInfo(this, {}, new Date().getTime());
        item.splice(cCol, 0, cell);
      });
    } else {
      this.checkInsertColEffect(num, isLeft);
    }
    this.resetCellPositionInfo();
  }

  /**
   * @description 在插入列前检测是否收到合并单元格的影响
   * @param num
   * @param isLeft
   */
  checkInsertColEffect(num, isLeft) {
    let cCol = isLeft ? this.menuData.col : this.menuData.col + 1;
    this.mergedCells.map(item => {
      let cSpan = item.style.cellSetting.colSpan;
      let iCol = item.col + cSpan - 1;
      if ((isLeft ? cCol <= iCol : cCol < iCol) && (isLeft ? cCol > item.col : cCol >= item.col)) {
        for (let i = 0; i < num; i++) {
          item.setCellColSpan(cSpan + 1);
        }
      }
    });
    this.allCells.map(item => {
      let flag = true;
      item.map(cItem => {
        let cSpan = cItem.style.cellSetting.colSpan;
        let iCol = cItem.col + cSpan - 1;
        if ((cCol > cItem.col && cCol <= iCol) || (cCol > cItem.col && cSpan === 0)) {
          flag = false;
        }
      });
      for (let i = 0; i < num; i++) {
        let cell = new CellInfo(this, {}, new Date().getTime());
        cell.setCellColSpan(flag ? 1 : 0);
        cell.setCellRowSpan(flag ? 1 : 0);
        item.splice(cCol, 0, cell);
      }
    });
  }

  /**
   * @description 删除指定行
   */
  deleteCurrentRow() {
    if (this.mergedCells.length === 0) {
      this.allCells.splice(this.menuData.row, 1);
    }
    this.resetCellPositionInfo();
  }

  /**
   * @description 删除指定列
   */
  deleteCurrentCol() {
    if (this.mergedCells.length === 0) {
      this.allCells.map(item => {
        item.splice(this.menuData.col, 1);
      });
    }
    this.resetCellPositionInfo();
  }

  /**
   * @description 重置单元格的行坐标信息
   */
  resetCellPositionInfo() {
    this.allCells.map((item, index) => {
      item.map((cItem, cIndex) => {
        cItem.setRowLineNum(index);
        cItem.setColLineNum(cIndex);
        cItem.id = new Date().getTime() + "_" + index + "_" + cIndex;
      });
    });
  }

  /**
   * @description 检测是否为加粗状态
   * @description 如果是多个单元格，只要一个不是就不是
   */
  checkWeightInfo() {
    let flag = true;
    this.selectedCells.map(item => {
      if (!item.style.fontWeight) {
        flag = false;
      }
    });
    this.allWeight = flag;
  }
}


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/l-excel/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var l_excel_srcvue_type_script_lang_js_ = ({
  name: "VueExcel",
  components: {
    excelPanel: panel,
    excelContent: content
  },
  props: {
    showPanel: {
      type: [ String, Boolean ],
      default: true
    },
    value: {
      type: Array,
      default: () => {
        return [];
      }
    },
    panelList: {
      type: Object,
      default: () => {
        return {};
      }
    },
    row: {
      type: [ String, Number ],
      default: 10
    },
    col: {
      type: [ String, Number ],
      default: 10
    },
    couldDelete: {
      type: [ Boolean, String ],
      default: true
    }
  },
  data() {
    return { store: {} };
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(value) {
        this.store = new model_Store();
        this.setConfigInfo();
        if (value.length > 0) {
          this.store.init(value);
        } else {
          this.store.setDefaultList(this.row, this.col);
        }
      }
    }
  },
  methods: {
    /**
     * @description 配置信息设置
     */
    setConfigInfo() {
      this.store.cellConfig.couldDelete = this.couldDelete !== "false" && this.couldDelete !== false;
      this.store.cellConfig.editAble = this.editAble !== "false" && this.editAble !== false;
      this.store.cellConfig.row = this.row;
      this.store.cellConfig.col = this.col;
    }
  }
});

// CONCATENATED MODULE: ./packages/l-excel/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_l_excel_srcvue_type_script_lang_js_ = (l_excel_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/l-excel/src/index.vue?vue&type=style&index=0&id=0aa2c060&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_0aa2c060_lang_scss_scoped_true_ = __webpack_require__("3b15");

// CONCATENATED MODULE: ./packages/l-excel/src/index.vue






/* normalize component */

var l_excel_src_component = normalizeComponent(
  packages_l_excel_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0aa2c060",
  null
  
)

/* harmony default export */ var l_excel_src = (l_excel_src_component.exports);
// CONCATENATED MODULE: ./packages/l-excel/index.js


l_excel_src.install = (Vue) => {
  Vue.component(l_excel_src.name, l_excel_src)
};
/* harmony default export */ var l_excel = (l_excel_src);
// CONCATENATED MODULE: ./packages/index.js



const components = [
  l_excel
];
Object.keys(components).forEach(name => {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(name, components[name])
});
/* harmony default export */ var packages_0 = (l_excel);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=lExcel.umd.js.map