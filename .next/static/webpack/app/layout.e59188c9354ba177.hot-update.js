"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c028d3f73fc1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/YjZlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImMwMjhkM2Y3M2ZjMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Layout/NavBar/Navbar.tsx":
/*!*************************************************!*\
  !*** ./src/components/Layout/NavBar/Navbar.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavBar: function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_IconX_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=IconX!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconX.js\");\n\n\nconst NavBar = (param)=>{\n    let { opened } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex flex-col shadow-md justify-between bg-primary w-[300px] py-20 fixed md:relative h-screen text-white \".concat(opened ? \"left-[0px]\" : \"left-[-300px]\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconX_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            height: 30,\n            width: 30,\n            cursor: \"pointer\"\n        }, void 0, false, {\n            fileName: \"/home/hlrodrigues/development/hcode/next-nubank/src/components/Layout/NavBar/Navbar.tsx\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hlrodrigues/development/hcode/next-nubank/src/components/Layout/NavBar/Navbar.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined);\n};\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9OYXZCYXIvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBTXJDLE1BQU1DLFNBQVM7UUFBQyxFQUFDQyxNQUFNLEVBQWM7SUFDeEMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVcsNEdBQW9KLE9BQXhDRixTQUFTLGVBQWU7a0JBQ2hKLDRFQUFDRix1RkFBS0E7WUFBQ0ssUUFBUTtZQUFJQyxPQUFPO1lBQUlDLFFBQU87Ozs7Ozs7Ozs7O0FBSWpELEVBQUM7S0FQWU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdkJhci9OYXZiYXIudHN4PzU3MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvblggfSBmcm9tIFwiQHRhYmxlci9pY29ucy1yZWFjdFwiO1xuXG50eXBlIE5hdkJhclByb3BzID0ge1xuICAgIG9wZW5lZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE5hdkJhciA9ICh7b3BlbmVkfTogTmF2QmFyUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgc2hhZG93LW1kIGp1c3RpZnktYmV0d2VlbiBiZy1wcmltYXJ5IHctWzMwMHB4XSBweS0yMCBmaXhlZCBtZDpyZWxhdGl2ZSBoLXNjcmVlbiB0ZXh0LXdoaXRlICR7b3BlbmVkID8gJ2xlZnQtWzBweF0nIDogJ2xlZnQtWy0zMDBweF0nfWB9PlxuICAgICAgICAgICAgPEljb25YIGhlaWdodD17MzB9IHdpZHRoPXszMH0gY3Vyc29yPVwicG9pbnRlclwiLz5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIFxuICAgICAgICApXG59Il0sIm5hbWVzIjpbIkljb25YIiwiTmF2QmFyIiwib3BlbmVkIiwibmF2IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/NavBar/Navbar.tsx\n"));

/***/ })

});