/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=ThemeProvider,createTheme!=!./node_modules/@mui/material/index.js":
/*!***************************************************************************************************!*\
  !*** __barrel_optimize__?names=ThemeProvider,createTheme!=!./node_modules/@mui/material/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ C_Users_TCB_OneDrive_Documents_Movie_Website_2024_myapplication_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.ThemeProvider),\n/* harmony export */   createTheme: () => (/* reexport safe */ C_Users_TCB_OneDrive_Documents_Movie_Website_2024_myapplication_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.createTheme)\n/* harmony export */ });\n/* harmony import */ var C_Users_TCB_OneDrive_Documents_Movie_Website_2024_myapplication_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n\"use client\";\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1UaGVtZVByb3ZpZGVyLGNyZWF0ZVRoZW1lIT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFc0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcGxpY2F0aW9uLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanM/ZDYzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuZXhwb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxUQ0JcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXE1vdmllX1dlYnNpdGVfMjAyNFxcXFxteWFwcGxpY2F0aW9uXFxcXG5vZGVfbW9kdWxlc1xcXFxAbXVpXFxcXG1hdGVyaWFsXFxcXHN0eWxlc1xcXFxpbmRleC5qc1wiXG5leHBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxUQ0JcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXE1vdmllX1dlYnNpdGVfMjAyNFxcXFxteWFwcGxpY2F0aW9uXFxcXG5vZGVfbW9kdWxlc1xcXFxAbXVpXFxcXG1hdGVyaWFsXFxcXHN0eWxlc1xcXFxpbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=ThemeProvider,createTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _barrel_optimize_names_ThemeProvider_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ThemeProvider,createTheme!=!@mui/material */ \"__barrel_optimize__?names=ThemeProvider,createTheme!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst theme = (0,_barrel_optimize_names_ThemeProvider_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n    typography: {\n        fontFamily: [\n            \"Raleway\",\n            \"san-serif\"\n        ].join(\",\")\n    }\n});\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = \"https://api.themoviedb.org/3\";\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers[\"Authorization\"] = \"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM3N2I0ZmZiZDRhNWNjMzVjM2I3OWQyYjlhYTRmYiIsInN1YiI6IjY1NmQ4NTJmODgwNTUxMDBhZWU5ZWVhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RWLZ8jyDiYhzKP1QSQADAny36mv6cHaG6uAVlEQBNTU\";\nfunction App({ Component, pageProps }) {\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    return getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ThemeProvider_createTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_3__.SWRConfig, {\n            value: {\n                fetcher: (resource, init)=>axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(resource, init).then((res)=>res.data)\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\pages\\\\_app.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\pages\\\\_app.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\pages\\\\_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFJSjtBQUNpQztBQUMzQjtBQUVoQyxNQUFNSSxRQUFRRiwwR0FBV0EsQ0FBQztJQUN4QkcsWUFBWTtRQUNWQyxZQUFZO1lBQUM7WUFBVztTQUFZLENBQUNDLElBQUksQ0FBQztJQUM1QztBQUNGO0FBRUFQLHNEQUFjLENBQUNTLE9BQU8sR0FBRztBQUN6QlQsc0RBQWMsQ0FBQ1UsT0FBTyxDQUFDLGdCQUFnQixHQUNyQztBQVVhLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQXNCO0lBQ3RFLE1BQU1DLFlBQVlGLFVBQVVFLFNBQVMsSUFBSyxFQUFDQyxPQUFTQSxJQUFHO0lBQ3ZELE9BQU9ELHdCQUNMLDhEQUFDYix3R0FBYUE7UUFBQ0csT0FBT0E7a0JBQ3BCLDRFQUFDRCwwQ0FBU0E7WUFDUmEsT0FBTztnQkFDTEMsU0FBUyxDQUFDQyxVQUFVQyxPQUNsQm5CLGlEQUFTLENBQUNrQixVQUFVQyxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtZQUNwRDtzQkFFQSw0RUFBQ1g7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwbGljYXRpb24vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHR5cGUgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gXCJzd3JcIjtcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGZvbnRGYW1pbHk6IFtcIlJhbGV3YXlcIiwgXCJzYW4tc2VyaWZcIl0uam9pbihcIixcIiksXHJcbiAgfSxcclxufSk7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zXCI7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID1cclxuICBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlKOS5leUpoZFdRaU9pSTVOV00zTjJJMFptWmlaRFJoTldOak16VmpNMkkzT1dReVlqbGhZVFJtWWlJc0luTjFZaUk2SWpZMU5tUTROVEptT0Rnd05UVXhNREJoWldVNVpXVmhaU0lzSW5OamIzQmxjeUk2V3lKaGNHbGZjbVZoWkNKZExDSjJaWEp6YVc5dUlqb3hmUS5SV0xaOGp5RGlZaHpLUDFRU1FBREFueTM2bXY2Y0hhRzZ1QVZsRVFCTlRVXCI7XHJcblxyXG5leHBvcnQgdHlwZSBOZXh0UGFnZVdpdGhMYXlvdXQ8UCA9IHt9LCBJUCA9IFA+ID0gTmV4dFBhZ2U8UCwgSVA+ICYge1xyXG4gIGdldExheW91dD86IChwYWdlOiBSZWFjdEVsZW1lbnQpID0+IFJlYWN0Tm9kZTtcclxufTtcclxuXHJcbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XHJcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wc1dpdGhMYXlvdXQpIHtcclxuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0ID8/ICgocGFnZSkgPT4gcGFnZSk7XHJcbiAgcmV0dXJuIGdldExheW91dChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxTV1JDb25maWdcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgZmV0Y2hlcjogKHJlc291cmNlLCBpbml0KSA9PlxyXG4gICAgICAgICAgICBheGlvcy5nZXQocmVzb3VyY2UsIGluaXQpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvU1dSQ29uZmlnPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiVGhlbWVQcm92aWRlciIsImNyZWF0ZVRoZW1lIiwiU1dSQ29uZmlnIiwidGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImpvaW4iLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicGFnZSIsInZhbHVlIiwiZmV0Y2hlciIsInJlc291cmNlIiwiaW5pdCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();