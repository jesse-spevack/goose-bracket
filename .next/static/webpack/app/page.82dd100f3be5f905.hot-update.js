"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Finals.tsx":
/*!***********************************!*\
  !*** ./src/components/Finals.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Finals: function() { return /* binding */ Finals; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Match */ \"(app-pages-browser)/./src/components/Match.tsx\");\n/* __next_internal_client_entry_do_not_use__ Finals auto */ \n\n\nconst Finals = (param)=>{\n    let { bracket, onSelect } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-gray-800/50 p-4 rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-xl sm:text-2xl font-bold mb-6 text-orange-400 text-center border-b border-orange-200/20 pb-2\",\n                children: \"CHAMPIONSHIP ROUNDS\"\n            }, void 0, false, {\n                fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-lg font-semibold text-orange-400 text-center border-b border-orange-200/20 pb-2\",\n                                children: \"Semifinals\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-6\",\n                                children: bracket.semifinals.map((match, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"space-y-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-sm text-orange-300/80 pl-2\",\n                                                children: [\n                                                    \"Match \",\n                                                    idx + 1\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                                                lineNumber: 26,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Match__WEBPACK_IMPORTED_MODULE_2__.Match, {\n                                                songs: match,\n                                                onSelect: (song, songIndex)=>onSelect(\"semifinals\", \"finals\", idx, songIndex, song)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, \"sf-\".concat(idx), true, {\n                                        fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 13\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-lg font-semibold text-orange-400 text-center border-b border-orange-200/20 pb-2\",\n                                children: \"Championship\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-orange-300/80 pl-2\",\n                                        children: \"Final Match\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Match__WEBPACK_IMPORTED_MODULE_2__.Match, {\n                                        songs: bracket.finals[0],\n                                        onSelect: (song, songIndex)=>onSelect(\"finals\", \"finals\", 0, songIndex, song)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jesse/code/goose-bracket/src/components/Finals.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Finals;\nvar _c;\n$RefreshReg$(_c, \"Finals\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbmFscy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTBCO0FBRU07QUFPekIsTUFBTUUsU0FBZ0M7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTt5QkFDakUsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBb0c7Ozs7OzswQkFJbEgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBdUY7Ozs7OzswQ0FHckcsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNaSCxRQUFRTSxVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxvQkFDOUIsOERBQUNQO3dDQUFzQkMsV0FBVTs7MERBQy9CLDhEQUFDRDtnREFBSUMsV0FBVTs7b0RBQWtDO29EQUFPTSxNQUFNOzs7Ozs7OzBEQUM5RCw4REFBQ1gseUNBQUtBO2dEQUNKWSxPQUFPRjtnREFDUFAsVUFBVSxDQUFDVSxNQUFNQyxZQUFjWCxTQUFTLGNBQWMsVUFBVVEsS0FBS0csV0FBV0Q7Ozs7Ozs7dUNBSjFFLE1BQVUsT0FBSkY7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBV3RCLDhEQUFDUDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUF1Rjs7Ozs7OzBDQUdyRyw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBa0M7Ozs7OztrREFDakQsOERBQUNMLHlDQUFLQTt3Q0FDSlksT0FBT1YsUUFBUWEsTUFBTSxDQUFDLEVBQUU7d0NBQ3hCWixVQUFVLENBQUNVLE1BQU1DLFlBQWNYLFNBQVMsVUFBVSxVQUFVLEdBQUdXLFdBQVdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFNcEY7S0F0Q1daIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbmFscy50c3g/NjU0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcmFja2V0RGF0YSwgU29uZyB9IGZyb20gJy4uL3R5cGVzL2JyYWNrZXQnO1xuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tICcuL01hdGNoJztcblxuaW50ZXJmYWNlIEZpbmFsc1Byb3BzIHtcbiAgYnJhY2tldDogQnJhY2tldERhdGE7XG4gIG9uU2VsZWN0OiAocm91bmQ6IHN0cmluZywgcmVnaW9uOiAnZmluYWxzJywgbWF0Y2hJbmRleDogbnVtYmVyLCBzb25nSW5kZXg6IG51bWJlciwgc29uZzogU29uZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEZpbmFsczogUmVhY3QuRkM8RmluYWxzUHJvcHM+ID0gKHsgYnJhY2tldCwgb25TZWxlY3QgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctZ3JheS04MDAvNTAgcC00IHJvdW5kZWQtbGdcIj5cbiAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBzbTp0ZXh0LTJ4bCBmb250LWJvbGQgbWItNiB0ZXh0LW9yYW5nZS00MDAgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLW9yYW5nZS0yMDAvMjAgcGItMlwiPlxuICAgICAgQ0hBTVBJT05TSElQIFJPVU5EU1xuICAgIDwvaDM+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtb3JhbmdlLTQwMCB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItb3JhbmdlLTIwMC8yMCBwYi0yXCI+XG4gICAgICAgICAgU2VtaWZpbmFsc1xuICAgICAgICA8L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgIHticmFja2V0LnNlbWlmaW5hbHMubWFwKChtYXRjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17YHNmLSR7aWR4fWB9IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1vcmFuZ2UtMzAwLzgwIHBsLTJcIj5NYXRjaCB7aWR4ICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgPE1hdGNoXG4gICAgICAgICAgICAgICAgc29uZ3M9e21hdGNofVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoc29uZywgc29uZ0luZGV4KSA9PiBvblNlbGVjdCgnc2VtaWZpbmFscycsICdmaW5hbHMnLCBpZHgsIHNvbmdJbmRleCwgc29uZyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LW9yYW5nZS00MDAgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLW9yYW5nZS0yMDAvMjAgcGItMlwiPlxuICAgICAgICAgIENoYW1waW9uc2hpcFxuICAgICAgICA8L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW9yYW5nZS0zMDAvODAgcGwtMlwiPkZpbmFsIE1hdGNoPC9kaXY+XG4gICAgICAgICAgPE1hdGNoXG4gICAgICAgICAgICBzb25ncz17YnJhY2tldC5maW5hbHNbMF19XG4gICAgICAgICAgICBvblNlbGVjdD17KHNvbmcsIHNvbmdJbmRleCkgPT4gb25TZWxlY3QoJ2ZpbmFscycsICdmaW5hbHMnLCAwLCBzb25nSW5kZXgsIHNvbmcpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hdGNoIiwiRmluYWxzIiwiYnJhY2tldCIsIm9uU2VsZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJoNCIsInNlbWlmaW5hbHMiLCJtYXAiLCJtYXRjaCIsImlkeCIsInNvbmdzIiwic29uZyIsInNvbmdJbmRleCIsImZpbmFscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Finals.tsx\n"));

/***/ })

});