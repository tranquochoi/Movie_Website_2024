"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/geners/[id]",{

/***/ "./components/landing_page/NavGenres.tsx":
/*!***********************************************!*\
  !*** ./components/landing_page/NavGenres.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowBackIosNewOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIosNewOutlined */ \"./node_modules/@mui/icons-material/ArrowBackIosNewOutlined.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ \"./node_modules/@mui/icons-material/KeyboardArrowDown.js\");\n/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Popover */ \"./node_modules/@mui/material/Popover/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst NavGenres = (param)=>{\n    let { selectedGenre, handleMenuOpen, handleMenuClose, gener, setSelectedGenre, anchorEl } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [selectedGenreName, setSelectedGenreName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Genres\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Update selectedGenreName when selectedGenre changes\n        if (selectedGenre === 0) {\n            setSelectedGenreName(\"All\");\n        } else {\n            const selectedGenreObject = gener === null || gener === void 0 ? void 0 : gener.genres.find((genre)=>genre.id === selectedGenre);\n            setSelectedGenreName((selectedGenreObject === null || selectedGenreObject === void 0 ? void 0 : selectedGenreObject.name) || \"Genres\");\n        }\n    }, [\n        selectedGenre,\n        gener\n    ]);\n    const handleGenreSelect = (genreId)=>{\n        setSelectedGenre(genreId);\n        handleMenuClose();\n    };\n    const maxPopoverHeight = 10 * 30;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            position: \"sticky\",\n            top: -2,\n            zIndex: 1000\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            position: \"static\",\n            id: \"appbar\",\n            sx: {\n                backgroundColor: \"#242A32\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        edge: \"start\",\n                        color: \"inherit\",\n                        \"aria-label\": \"back\",\n                        onClick: ()=>router.back(),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBackIosNewOutlined__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClick: handleMenuOpen,\n                        sx: {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            padding: \"20px\",\n                            color: \"white\",\n                            textTransform: \"none\",\n                            fontSize: \"18px\",\n                            fontFamily: \"Arial, sans-serif\"\n                        },\n                        children: [\n                            selectedGenreName,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        open: Boolean(anchorEl),\n                        anchorEl: anchorEl,\n                        onClose: handleMenuClose,\n                        anchorOrigin: {\n                            vertical: \"bottom\",\n                            horizontal: \"left\"\n                        },\n                        transformOrigin: {\n                            vertical: \"top\",\n                            horizontal: \"left\"\n                        },\n                        PaperProps: {\n                            style: {\n                                backgroundColor: \"#242A32\",\n                                maxHeight: \"\".concat(maxPopoverHeight, \"px\"),\n                                overflowY: \"auto\",\n                                display: \"flex\",\n                                flexDirection: \"row\",\n                                flexWrap: \"wrap\",\n                                justifyContent: \"space-between\",\n                                padding: \"32px\"\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            sx: {\n                                width: \"calc(50% - 16px)\"\n                            },\n                            children: gener === null || gener === void 0 ? void 0 : gener.genres.slice(0, Math.ceil(gener.genres.length / 2)).map((genre)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    sx: {\n                                        border: \"2px solid #888\",\n                                        padding: \"4px 8px\",\n                                        borderRadius: \"2px\",\n                                        marginBottom: \"8px\",\n                                        backgroundColor: selectedGenre === genre.id ? \"#0CC2FF95\" : \"transparent\",\n                                        color: selectedGenre === genre.id ? \"white\" : \"#fff\",\n                                        \"&:hover\": {\n                                            backgroundColor: \"#333\",\n                                            cursor: \"pointer\"\n                                        }\n                                    },\n                                    onClick: ()=>{\n                                        handleGenreSelect(genre.id);\n                                    },\n                                    children: genre.name\n                                }, genre.id.toString(), false, {\n                                    fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 19\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\TCB\\\\OneDrive\\\\Documents\\\\Movie_Website_2024\\\\myapplication\\\\components\\\\landing_page\\\\NavGenres.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavGenres, \"FU8pjqfvM1FhDNfk6fEETIbed04=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavGenres;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavGenres);\nvar _c;\n$RefreshReg$(_c, \"NavGenres\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTUMsRUFBRSxHQUFHLFVBQVU7d0NBQzlDLFdBQVc7NENBQ1RTLGlCQUFpQjs0Q0FDakJtQyxRQUFRO3dDQUNWO29DQUNGO29DQUNBL0IsU0FBUzt3Q0FDUFgsa0JBQWtCSCxNQUFNQyxFQUFFO29DQUM1Qjs4Q0FFQ0QsTUFBTUUsSUFBSTttQ0FwQk5GLE1BQU1DLEVBQUUsQ0FBQzZDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QjFDO0dBMUhNM0Q7O1FBUVdYLGtEQUFTQTs7O0tBUnBCVztBQTRITiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xhbmRpbmdfcGFnZS9OYXZHZW5yZXMudHN4PzljNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IEFycm93QmFja0lvc05ld091dGxpbmVkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2tJb3NOZXdPdXRsaW5lZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duXCI7XHJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1BvcG92ZXJcIjtcclxuaW1wb3J0IHsgTGlzdEdlbnJlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RlbHMvR2VuZXJzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBOYXZHZW5yZXNQcm9wcyB7XHJcbiAgc2VsZWN0ZWRHZW5yZTogbnVtYmVyO1xyXG4gIGhhbmRsZU1lbnVPcGVuOiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkO1xyXG4gIGhhbmRsZU1lbnVDbG9zZTogKCkgPT4gdm9pZDtcclxuICBnZW5lcjogTGlzdEdlbnJlIHwgdW5kZWZpbmVkO1xyXG4gIHNldFNlbGVjdGVkR2VucmU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xyXG4gIGFuY2hvckVsOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IE5hdkdlbnJlczogUmVhY3QuRkM8TmF2R2VucmVzUHJvcHM+ID0gKHtcclxuICBzZWxlY3RlZEdlbnJlLFxyXG4gIGhhbmRsZU1lbnVPcGVuLFxyXG4gIGhhbmRsZU1lbnVDbG9zZSxcclxuICBnZW5lcixcclxuICBzZXRTZWxlY3RlZEdlbnJlLFxyXG4gIGFuY2hvckVsLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkR2VucmVOYW1lLCBzZXRTZWxlY3RlZEdlbnJlTmFtZV0gPSB1c2VTdGF0ZShcIkdlbnJlc1wiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFVwZGF0ZSBzZWxlY3RlZEdlbnJlTmFtZSB3aGVuIHNlbGVjdGVkR2VucmUgY2hhbmdlc1xyXG4gICAgaWYgKHNlbGVjdGVkR2VucmUgPT09IDApIHtcclxuICAgICAgc2V0U2VsZWN0ZWRHZW5yZU5hbWUoXCJBbGxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZEdlbnJlT2JqZWN0ID0gZ2VuZXI/LmdlbnJlcy5maW5kKFxyXG4gICAgICAgIChnZW5yZSkgPT4gZ2VucmUuaWQgPT09IHNlbGVjdGVkR2VucmVcclxuICAgICAgKTtcclxuICAgICAgc2V0U2VsZWN0ZWRHZW5yZU5hbWUoc2VsZWN0ZWRHZW5yZU9iamVjdD8ubmFtZSB8fCBcIkdlbnJlc1wiKTtcclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRHZW5yZSwgZ2VuZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR2VucmVTZWxlY3QgPSAoZ2VucmVJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEdlbnJlKGdlbnJlSWQpO1xyXG4gICAgaGFuZGxlTWVudUNsb3NlKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWF4UG9wb3ZlckhlaWdodCA9IDEwICogMzA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IHBvc2l0aW9uOiBcInN0aWNreVwiLCB0b3A6IC0yLCB6SW5kZXg6IDEwMDAgfX0+XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBwb3NpdGlvbj1cInN0YXRpY1wiXHJcbiAgICAgICAgaWQ9XCJhcHBiYXJcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzI0MkEzMlwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJiYWNrXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEFycm93QmFja0lvc05ld091dGxpbmVkSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVudU9wZW59XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZEdlbnJlTmFtZX0gPEtleWJvYXJkQXJyb3dEb3duSWNvbiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cclxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XHJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzI0MkEzMlwiLFxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBgJHttYXhQb3BvdmVySGVpZ2h0fXB4YCxcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjMycHhcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiBcImNhbGMoNTAlIC0gMTZweClcIiB9fT5cclxuICAgICAgICAgICAgICB7Z2VuZXI/LmdlbnJlc1xyXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIE1hdGguY2VpbChnZW5lci5nZW5yZXMubGVuZ3RoIC8gMikpXHJcbiAgICAgICAgICAgICAgICAubWFwKChnZW5yZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtnZW5yZS5pZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM4ODhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4IDhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEdlbnJlID09PSBnZW5yZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjMENDMkZGOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNlbGVjdGVkR2VucmUgPT09IGdlbnJlLmlkID8gXCJ3aGl0ZVwiIDogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUdlbnJlU2VsZWN0KGdlbnJlLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2dlbnJlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2R2VucmVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJBcHBCYXIiLCJCb3giLCJUb29sYmFyIiwiSWNvbkJ1dHRvbiIsIkFycm93QmFja0lvc05ld091dGxpbmVkSWNvbiIsIkJ1dHRvbiIsIktleWJvYXJkQXJyb3dEb3duSWNvbiIsIlBvcG92ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkdlbnJlcyIsInNlbGVjdGVkR2VucmUiLCJoYW5kbGVNZW51T3BlbiIsImhhbmRsZU1lbnVDbG9zZSIsImdlbmVyIiwic2V0U2VsZWN0ZWRHZW5yZSIsImFuY2hvckVsIiwicm91dGVyIiwic2VsZWN0ZWRHZW5yZU5hbWUiLCJzZXRTZWxlY3RlZEdlbnJlTmFtZSIsInNlbGVjdGVkR2VucmVPYmplY3QiLCJnZW5yZXMiLCJmaW5kIiwiZ2VucmUiLCJpZCIsIm5hbWUiLCJoYW5kbGVHZW5yZVNlbGVjdCIsImdlbnJlSWQiLCJtYXhQb3BvdmVySGVpZ2h0Iiwic3giLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsImVkZ2UiLCJjb2xvciIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwiYmFjayIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsInRleHRUcmFuc2Zvcm0iLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJvcGVuIiwiQm9vbGVhbiIsIm9uQ2xvc2UiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJQYXBlclByb3BzIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwic2xpY2UiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsIm1hcCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/landing_page/NavGenres.tsx\n"));

/***/ })

});