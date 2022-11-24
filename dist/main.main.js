"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.list-wrapper {\\r\\n  margin-top: 100px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.completed-list {\\r\\n  border-radius: 3px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.list-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.title-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 15fr 1fr;\\r\\n  column-gap: 5px;\\r\\n  border: 1px solid gainsboro;\\r\\n  width: 430px;\\r\\n}\\r\\n\\r\\n.list-title {\\r\\n  height: 20px;\\r\\n  font-weight: 300;\\r\\n  font-size: 15px;\\r\\n  margin: 0;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.refresh-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.refresh-icon {\\r\\n  height: 14px;\\r\\n  width: 14px;\\r\\n  padding-right: 5px;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 15fr 1fr;\\r\\n  column-gap: 7px;\\r\\n  border: 1px solid rgb(204, 201, 201);\\r\\n  width: 430px;\\r\\n}\\r\\n\\r\\n.enter-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.enter-icon {\\r\\n  height: 14px;\\r\\n  width: 14px;\\r\\n  padding-right: 6px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.list-input {\\r\\n  border: none;\\r\\n  height: 20px;\\r\\n  padding: 15px;\\r\\n  font-size: 15px;\\r\\n  font-weight: 300;\\r\\n  font-family: Georgia, 'Times New Roman', Times, serif;\\r\\n  font-style: italic;\\r\\n  color: #757575;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.element {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 15fr 1fr;\\r\\n  column-gap: 5px;\\r\\n  border: 0.5px solid rgb(212, 209, 209);\\r\\n  width: 405px;\\r\\n  height: 20px;\\r\\n  list-style: none;\\r\\n  font-weight: 300;\\r\\n  padding: 15px 10px 15px 15px;\\r\\n}\\r\\n\\r\\n.task-input {\\r\\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\\r\\n  font-weight: 300;\\r\\n  border: none;\\r\\n  width: 300px;\\r\\n  background-color: inherit;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.task-input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.dots-container {\\r\\n  display: flex;\\r\\n  justify-content: end;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.dots {\\r\\n  height: 15px;\\r\\n  width: 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.bin {\\r\\n  height: 15px;\\r\\n  width: 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.clear-button {\\r\\n  width: 430px;\\r\\n  border: none;\\r\\n  height: 55px;\\r\\n  line-height: 30px;\\r\\n  font-weight: 200;\\r\\n  font-size: 15px;\\r\\n  cursor: pointer;\\r\\n  color: #aa2323;\\r\\n}\\r\\n\\r\\n.clear-button:hover {\\r\\n  text-decoration: line-through;\\r\\n  color: rgb(255, 10, 10);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_Store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Store.js */ \"./src/modules/Store.js\");\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _images_bin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/bin.png */ \"./src/images/bin.png\");\n/* harmony import */ var _images_dots_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/dots.png */ \"./src/images/dots.png\");\n/* harmony import */ var _images_enter_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/enter.png */ \"./src/images/enter.png\");\n/* harmony import */ var _images_refresh_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/refresh.png */ \"./src/images/refresh.png\");\n\n\n\n\n// Images for projects\n\n\n\n\n// Add images in html.\n\nconst refreshContainer = document.querySelector('.refresh-container');\nconst refresh = new Image();\nrefresh.src = _images_refresh_png__WEBPACK_IMPORTED_MODULE_6__;\nrefreshContainer.innerHTML = `<img src=${_images_refresh_png__WEBPACK_IMPORTED_MODULE_6__} class=\"refresh-icon\" />`;\n\nconst enterContainer = document.querySelector('.enter-container');\nconst enter = new Image();\nenter.src = _images_enter_png__WEBPACK_IMPORTED_MODULE_5__;\nenterContainer.innerHTML = `<img src=${_images_enter_png__WEBPACK_IMPORTED_MODULE_5__} class=\"enter-icon\" />`;\n\nconst dots = new Image();\ndots.src = _images_dots_png__WEBPACK_IMPORTED_MODULE_4__;\n\nconst store = new _modules_Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nfunction getUItasks() {\n  const UiTasks = document.querySelectorAll('.element');\n  return UiTasks;\n}\n\nfunction updateTask(e) {\n  const text = e.target.value;\n  const value = e.target.id;\n  const splitid = value.split('-');\n  const idstring = splitid[2];\n  const id = parseInt(idstring, 36);\n  const list = store.getList();\n  for (let i = 0; i < list.length; i += 1) {\n    const task = list[i];\n    if (task.id === id) {\n      list[i].description = text;\n    }\n  }\n  localStorage.setItem('list', JSON.stringify(list));\n}\n\nconst inputTasks = [];\nconst checkboxes = [];\nconst buttonsDots = [];\n\nfunction toggleLi(e) {\n  let li;\n  const { target } = e;\n  const className = e.target.classList[0];\n  if (e.target.type === 'checkbox' || e.target.type === 'task-btn') {\n    return;\n  }\n  target.style.backgroundColor = 'red';\n  if (className === 'task-input') {\n    li = target.parentElement.parentElement;\n    li.style.backgroundColor = 'red';\n  }\n\n  if (!li) {\n    li = target;\n  }\n  const image = li.getElementsByTagName('img')[0];\n  image.setAttribute('src', _images_bin_png__WEBPACK_IMPORTED_MODULE_3__);\n  image.setAttribute('type', 'bin');\n  image.setAttribute('class', 'bin');\n}\n\nclass UI {\n  static displayList() {\n    const list = store.getList();\n    list.forEach((task) => UI.addTodoList(task));\n  }\n\n  static addTodoList(task) {\n    const tasksList = document.getElementById('list-container');\n\n    const taskContent = document.createElement('li');\n    taskContent.addEventListener('click', toggleLi);\n    taskContent.innerHTML = `\n    <input type=\"checkbox\" id=\"checkbox\" name=\"${task.id}\" class=\"checkbox\" />\n        <div><input value=\"${task.description}\" class=\"task-input\" id=\"task-input-${task.id}\"/></div>\n        <div class=\"dots-container\"><img type=\"task-btn\" class=\"dots\" src=\"${_images_dots_png__WEBPACK_IMPORTED_MODULE_4__}\" id=\"btn-bin-${task.id}\" /></div> `;\n\n    tasksList.appendChild(taskContent);\n    const taskInput = taskContent.querySelector('.task-input');\n    taskInput.addEventListener('keyup', updateTask);\n    inputTasks.push(taskInput);\n    taskContent.classList.add('element');\n    taskContent.setAttribute('id', `task-${task.id}`);\n    const dotsContainer = taskContent.querySelector('.dots-container');\n    dotsContainer.addEventListener('click', (e) => {\n      if (e.target.className === 'bin') {\n        const fullid = e.target.id;\n        const idString = fullid.split('-')[2];\n        const id = parseInt(idString, 10);\n        UI.removeTask(id);\n      }\n    });\n    const checkbox = taskContent.querySelector('#checkbox');\n    checkbox.addEventListener('click', (e) => {\n      const currentList = store.getList();\n      const idString = e.target.name;\n      const checkboxId = parseInt(idString, 10);\n      _modules_Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleDone(currentList, checkboxId, checkbox.checked, taskInput);\n    });\n    checkboxes.push(checkbox);\n\n    buttonsDots.push(dotsContainer);\n  }\n\n  static deleteCompleted() {\n    const liList = document.querySelectorAll('.element');\n    liList.forEach((li) => {\n      const checkbox = li.querySelector('.checkbox');\n      if (checkbox.checked) {\n        li.remove();\n        const list = localStorage.getItem('list');\n        const parsedlist = JSON.parse(list);\n        const filteredList = parsedlist.filter((task) => task.completed !== true);\n        localStorage.setItem('list', JSON.stringify(filteredList));\n        store.resetIds();\n      }\n    });\n  }\n\n  static clearFields() {\n    document.querySelector('#list-item').value = '';\n  }\n\n  static removeTask(id) {\n    const currentList = store.getList();\n    const filteredList = currentList.filter((task) => task.id !== id);\n    localStorage.setItem('list', JSON.stringify(filteredList));\n    store.resetIds();\n    const tasks = getUItasks();\n    tasks.forEach((task) => task.remove());\n\n    UI.displayList();\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded', UI.displayList);\nconst btnClear = document.querySelector('#btn-clear');\nbtnClear.addEventListener('click', UI.deleteCompleted);\ndocument.querySelector('#new-todo-form').addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  const id = store.count;\n  const description = document.querySelector('#list-item').value;\n  const completed = false;\n  const task = new _modules_task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](id, description, completed);\n  UI.addTodoList(task);\n  store.addTask(task);\n  UI.clearFields();\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Store.js":
/*!******************************!*\
  !*** ./src/modules/Store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\n  // Counter to keep track of task index\n  constructor() {\n    this.count = this.getList().length;\n  }\n\n\n//  get the list item from user\n  getList() {\n    if (localStorage.getItem('list') === null) {\n      this.list = [];\n    } else {\n      this.list = JSON.parse(localStorage.getItem('list'));\n    }\n    return this.list;\n  }\n\n  // save the list item in local storage\n\n  addTask(task) {\n    const newTask = {\n      id: this.count,\n      description: task.description,\n      completed: false,\n    };\n\n    const list = this.getList();\n    list.push(newTask);\n    localStorage.setItem('list', JSON.stringify(list));\n    this.count += 1;\n  }\n\n\n  //  reset remaining tasks id after one's deletion \n  resetIds() {\n    const currentList = this.getList();\n    const newList = [];\n    for (let i = 0; i < currentList.length; i += 1) {\n      const task = currentList[i];\n      task.id = i;\n      newList.push(task);\n    }\n    localStorage.setItem('list', JSON.stringify(newList));\n  }\n\n// for single task deletion and editing after a task is marked completed.\n  static toggleDone(currentList, id, checked, input) {\n    const newList = [];\n    for (let i = 0; i < currentList.length; i += 1) {\n      const task = currentList[i];\n      if (task.id === id) {\n        if (checked === true) {\n          task.completed = true;\n          input.style.textDecoration = 'line-through';\n        }\n        if (checked === false) {\n          task.completed = false;\n          input.style.textDecoration = 'auto';\n        }\n      }\n      newList.push(task);\n    }\n\n    localStorage.setItem('list', JSON.stringify(newList));\n  }\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/Store.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(index, description, completed) {\n    this.index = index;\n    this.description = description;\n    this.completed = completed;\n  }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/task.js?");

/***/ }),

/***/ "./src/images/bin.png":
/*!****************************!*\
  !*** ./src/images/bin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9180f49aa0c5aed58823.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/bin.png?");

/***/ }),

/***/ "./src/images/dots.png":
/*!*****************************!*\
  !*** ./src/images/dots.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ccdbeb99784d3162ca9.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/dots.png?");

/***/ }),

/***/ "./src/images/enter.png":
/*!******************************!*\
  !*** ./src/images/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3bdb340058b1539cd982.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/enter.png?");

/***/ }),

/***/ "./src/images/refresh.png":
/*!********************************!*\
  !*** ./src/images/refresh.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"49de99687eafb6e753bd.png\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/refresh.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);