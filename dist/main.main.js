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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n  1. Use a more-intuitive box-sizing model.\\n*/\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n/*\\n  2. Remove default margin\\n*/\\n* {\\n  margin: 0;\\n}\\n\\n/*\\n  3. Allow percentage-based heights in the application\\n*/\\nhtml,\\nbody {\\n  height: 100%;\\n}\\n\\n/*\\n  Typographic tweaks!\\n  4. Add accessible line-height\\n  5. Improve text rendering\\n*/\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n}\\n\\n/*\\n  6. Improve media defaults\\n*/\\nimg,\\npicture,\\nvideo,\\ncanvas,\\nsvg {\\n  display: block;\\n  max-width: 100%;\\n}\\n\\n/*\\n  7. Remove built-in form typography styles\\n*/\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/*\\n  8. Avoid text overflows\\n*/\\np,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  overflow-wrap: break-word;\\n}\\n\\n/*\\n  9. Create a root stacking context\\n*/\\n#root,\\n#__next {\\n  isolation: isolate;\\n}\\n\\n.todo-div {\\n  margin: auto;\\n  width: 400px;\\n  margin-top: 200px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.list-one {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.todo-heading {\\n  font-size: larger;\\n  font-weight: bold;\\n}\\n\\n.todo-item {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 300px;\\n  border-bottom: 1px solid black;\\n  align-items: center;\\n  margin-bottom: 5px;\\n}\\n\\n.add-item {\\n  width: 300px;\\n  list-style: none;\\n  display: flex;\\n  justify-content: space-between;\\n  /* background-color: yellow; */\\n  border-bottom: 1px solid black;\\n  align-items: center;\\n  margin-bottom: 5px;\\n}\\n\\n.todo-checkbox {\\n  width: 25px;\\n  height: 25px;\\n}\\n\\n.todo-input {\\n  border: none;\\n  font-size: large;\\n  width: 80%;\\n}\\n\\n.clear-div {\\n  display: flex;\\n  background-color: aliceblue;\\n  align-self: center;\\n  border: 3px solid black;\\n  border-radius: 10px;\\n  height: 40px;\\n  padding: 5px;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.button {\\n  border: none;\\n  padding: 0;\\n  background-color: transparent;\\n}\\n\\n.button:hover {\\n  color: red;\\n}\\n\\n.add-button {\\n  border: none;\\n  padding: 0;\\n  background-color: transparent;\\n}\\n\\n.add-button:hover {\\n  color: green;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/CreateTodoItem.js":
/*!*******************************!*\
  !*** ./src/CreateTodoItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createTodoItem = (todo) => {\n  const parentList = document.createElement('li');\n  parentList.classList.add('todo-item');\n  parentList.dataset.id = todo.index;\n\n  const completedCheckbox = document.createElement('INPUT');\n  completedCheckbox.setAttribute('type', 'checkbox');\n  completedCheckbox.checked = todo.isCompleted;\n  completedCheckbox.classList.add('todo-checkbox');\n  parentList.appendChild(completedCheckbox);\n\n  completedCheckbox.addEventListener('change', (e) => {\n    todo.changeStatus(e.target.checked);\n  });\n\n  const todoInput = document.createElement('INPUT');\n  todoInput.setAttribute('type', 'input');\n  todoInput.setAttribute('readonly', true);\n  todoInput.setAttribute('value', todo.task);\n  todoInput.classList.add('todo-input');\n\n  todoInput.addEventListener('click', () => {\n    todoInput.removeAttribute('readonly');\n  });\n\n  todoInput.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      e.preventDefault();\n      const newTask = todoInput.value;\n      todo.updateTodo(newTask);\n      todoInput.setAttribute('readonly', true);\n      todoInput.blur();\n    }\n  });\n\n  todoInput.addEventListener('blur', () => {\n    const newTask = todoInput.value;\n    todo.updateTodo(newTask);\n    todoInput.setAttribute('readonly', true);\n  });\n  parentList.appendChild(todoInput);\n\n  const deleteButton = document.createElement('button');\n  deleteButton.classList.add('button');\n\n  const deleteIcon = document.createElement('i');\n  deleteIcon.classList.add('fa-solid', 'fa-trash');\n\n  deleteButton.appendChild(deleteIcon);\n\n  deleteButton.addEventListener('click', () => {\n    todo.deleteTodo();\n    const mainContainer = parentList.parentNode;\n    mainContainer.removeChild(parentList);\n  });\n  parentList.appendChild(deleteButton);\n\n  return parentList;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoItem);\n\n//# sourceURL=webpack://webpack-demo/./src/CreateTodoItem.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TodoClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoClass.js */ \"./src/TodoClass.js\");\n/* harmony import */ var _todoCrud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCrud.js */ \"./src/todoCrud.js\");\n\n\n\nconst storeTodosToStorage = () => {\n  const booksString = JSON.stringify(_TodoClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTodos());\n  window.localStorage.setItem('TodoData', booksString);\n};\n\nconst initializeTodos = () => {\n  _TodoClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setUpdater(storeTodosToStorage);\n\n  _TodoClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateTodosArray(JSON.parse(window.localStorage.getItem('TodoData')));\n\n  (0,_todoCrud_js__WEBPACK_IMPORTED_MODULE_1__.addAllEventListeners)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeTodos);\n\n//# sourceURL=webpack://webpack-demo/./src/Todo.js?");

/***/ }),

/***/ "./src/TodoClass.js":
/*!**************************!*\
  !*** ./src/TodoClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    static todoArray =[]\n\n    static storageUpdater;\n\n    static setUpdater(value) {\n      Todo.storageUpdater = value;\n    }\n\n    constructor(task, isCompleted = false) {\n      this.task = task;\n      this.isCompleted = isCompleted;\n      this.index = null;\n\n      Todo.todoArray.push(this);\n      Todo.recalculateIndex();\n\n      if (typeof Todo.storageUpdater === 'function') {\n        Todo.storageUpdater();\n      }\n    }\n\n    changeStatus(status) {\n      const i = Todo.todoArray.indexOf(this);\n      const todo = Todo.todoArray[i];\n      todo.isCompleted = status;\n\n      if (typeof Todo.storageUpdater === 'function') {\n        Todo.storageUpdater();\n      }\n    }\n\n    deleteTodo() {\n      const i = Todo.todoArray.indexOf(this);\n      Todo.todoArray.splice(i, 1);\n      Todo.recalculateIndex();\n      if (typeof Todo.storageUpdater === 'function') {\n        Todo.storageUpdater();\n      }\n    }\n\n    updateTodo(newTask) {\n      const i = Todo.todoArray.indexOf(this);\n      const todo = Todo.todoArray[i];\n      todo.task = newTask;\n      if (typeof Todo.storageUpdater === 'function') {\n        Todo.storageUpdater();\n      }\n    }\n\n    static getAllTodos() {\n      return Todo.todoArray;\n    }\n\n    static recalculateIndex() {\n      Todo.todoArray.forEach((todo, index) => {\n        todo.index = index;\n      });\n    }\n\n    static updateTodosArray(dataSource) {\n      if (dataSource?.length) {\n        const newArray = dataSource.map((rawTodo) => {\n          const todo = new Todo(rawTodo.task, rawTodo.isCompleted);\n          return todo;\n        });\n\n        Todo.todoArray = [];\n        Todo.todoArray.push(...newArray);\n      }\n    }\n\n    static clearCompleted() {\n      const newArray = Todo.todoArray.filter((todo) => (todo.isCompleted === false));\n      Todo.todoArray = newArray;\n      Todo.recalculateIndex();\n      if (typeof Todo.storageUpdater === 'function') {\n        Todo.storageUpdater();\n      }\n    }\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/TodoClass.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n/* harmony import */ var _todoCrud_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCrud.js */ \"./src/todoCrud.js\");\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_Todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_todoCrud_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/todoCrud.js":
/*!*************************!*\
  !*** ./src/todoCrud.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addAllEventListeners\": () => (/* binding */ addAllEventListeners),\n/* harmony export */   \"clearTodos\": () => (/* binding */ clearTodos),\n/* harmony export */   \"default\": () => (/* binding */ loadTodos)\n/* harmony export */ });\n/* harmony import */ var _TodoClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoClass.js */ \"./src/TodoClass.js\");\n/* harmony import */ var _CreateTodoItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTodoItem.js */ \"./src/CreateTodoItem.js\");\n\n\n\nconst todoContainer = document.getElementById('todo-container');\nconst newTodoInput = document.getElementById('new-todo-input');\nconst addButton = document.getElementById('add-button');\n\nconst todoSorter = (a, b) => (a.index - b.index);\n\nconst populateTodoList = (todoArray, todoContainer) => {\n  todoArray.sort(todoSorter);\n  todoArray.forEach((todo) => {\n    const todoItem = (0,_CreateTodoItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todo);\n    todoContainer.appendChild(todoItem);\n  });\n};\n\nconst clearCompletedButton = document.getElementById('clear-completed-button');\n\nconst clearTodos = () => {\n  _TodoClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearCompleted();\n  todoContainer.innerHTML = '';\n  populateTodoList(_TodoClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTodos(), todoContainer);\n};\n\nconst addAllEventListeners = () => {\n  // Field for creating new Todo\n  newTodoInput.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      e.preventDefault();\n      const task = newTodoInput.value;\n      const newTodo = new _TodoClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task);\n      const newTodoItem = (0,_CreateTodoItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newTodo);\n      todoContainer.appendChild(newTodoItem);\n      newTodoInput.value = '';\n      newTodoInput.blur();\n    }\n  });\n\n  // button for adding a new Todo to the todo list\n  addButton.addEventListener('click', (e) => {\n    if (newTodoInput.value !== '') {\n      e.preventDefault();\n      const task = newTodoInput.value;\n      const newTodo = new _TodoClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task);\n      const newTodoItem = (0,_CreateTodoItem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newTodo);\n      todoContainer.appendChild(newTodoItem);\n      newTodoInput.value = '';\n      newTodoInput.blur();\n    }\n  });\n  clearCompletedButton.addEventListener('click', clearTodos);\n};\n\nfunction loadTodos() {\n  populateTodoList(_TodoClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllTodos(), todoContainer);\n}\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/todoCrud.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);