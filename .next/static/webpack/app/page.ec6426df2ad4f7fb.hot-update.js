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

/***/ "(app-pages-browser)/./src/components/RegionBracket.tsx":
/*!******************************************!*\
  !*** ./src/components/RegionBracket.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegionBracket: function() { return /* binding */ RegionBracket; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Match */ \"(app-pages-browser)/./src/components/Match.tsx\");\n/* __next_internal_client_entry_do_not_use__ RegionBracket auto */ \n\n\nconst RegionBracket = (param)=>{\n    let { name, region, bracket, onSelect } = param;\n    const rounds = [\n        \"round1\",\n        \"round2\",\n        \"round3\",\n        \"round4\"\n    ];\n    const roundNames = [\n        \"Round 1\",\n        \"Round 2\",\n        \"Round 3\",\n        \"Round 4\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-gray-800/50 p-4 rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-2xl font-bold mb-4 text-orange-400 text-center border-b border-orange-200/20 pb-2\",\n                children: [\n                    name,\n                    \" REGION\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0\",\n                        children: rounds.slice(0, 3).map((round, roundIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-lg font-semibold text-orange-400 border-b border-orange-200/20 pb-2 mb-4\",\n                                        children: roundNames[roundIndex]\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"space-y-4\",\n                                        children: bracket[round][region].map((match, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Match__WEBPACK_IMPORTED_MODULE_2__.Match, {\n                                                songs: match,\n                                                onSelect: (song, songIndex)=>onSelect(round, region, idx, songIndex, song)\n                                            }, \"\".concat(round, \"-\").concat(idx), false, {\n                                                fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, round, true, {\n                                fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 lg:max-w-[33%] lg:mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-lg font-semibold text-orange-400 border-b border-orange-200/20 pb-2 mb-4\",\n                                children: roundNames[3]\n                            }, void 0, false, {\n                                fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-4\",\n                                children: bracket.round4[region].map((match, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Match__WEBPACK_IMPORTED_MODULE_2__.Match, {\n                                        songs: match,\n                                        onSelect: (song, songIndex)=>onSelect(\"round4\", region, idx, songIndex, song)\n                                    }, \"round4-\".concat(idx), false, {\n                                        fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jesse/code/goose-bracket/src/components/RegionBracket.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = RegionBracket;\nvar _c;\n$RefreshReg$(_c, \"RegionBracket\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlZ2lvbkJyYWNrZXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUwQjtBQUVNO0FBU3pCLE1BQU1FLGdCQUE4QztRQUFDLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUM3RixNQUFNQyxTQUFTO1FBQUM7UUFBVTtRQUFVO1FBQVU7S0FBUztJQUN2RCxNQUFNQyxhQUFhO1FBQUM7UUFBVztRQUFXO1FBQVc7S0FBVTtJQUUvRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOztvQkFDWFA7b0JBQUs7Ozs7Ozs7MEJBRVIsOERBQUNNO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pILE9BQU9LLEtBQUssQ0FBQyxHQUFHLEdBQUdDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQywyQkFDOUIsOERBQUNOO2dDQUFnQkMsV0FBVTs7a0RBQ3pCLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFDWEYsVUFBVSxDQUFDTyxXQUFXOzs7Ozs7a0RBRXpCLDhEQUFDTjt3Q0FBSUMsV0FBVTtrREFDWkwsT0FBTyxDQUFDUyxNQUFNLENBQUNWLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLENBQUNJLE9BQU9DLG9CQUNsQyw4REFBQ2pCLHlDQUFLQTtnREFFSmtCLE9BQU9GO2dEQUNQWCxVQUFVLENBQUNjLE1BQU1DLFlBQWNmLFNBQVNRLE9BQU9WLFFBQVFjLEtBQUtHLFdBQVdEOytDQUZsRSxHQUFZRixPQUFUSixPQUFNLEtBQU8sT0FBSkk7Ozs7Ozs7Ozs7OytCQVBmSjs7Ozs7Ozs7OztrQ0FrQmQsOERBQUNMO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ007Z0NBQUdOLFdBQVU7MENBQ1hGLFVBQVUsQ0FBQyxFQUFFOzs7Ozs7MENBRWhCLDhEQUFDQztnQ0FBSUMsV0FBVTswQ0FDWkwsUUFBUWlCLE1BQU0sQ0FBQ2xCLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDLENBQUNJLE9BQU9DLG9CQUNsQyw4REFBQ2pCLHlDQUFLQTt3Q0FFSmtCLE9BQU9GO3dDQUNQWCxVQUFVLENBQUNjLE1BQU1DLFlBQWNmLFNBQVMsVUFBVUYsUUFBUWMsS0FBS0csV0FBV0Q7dUNBRnJFLFVBQWMsT0FBSkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVL0IsRUFBRTtLQWhEV2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlZ2lvbkJyYWNrZXQudHN4Pzk2YTQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVnaW9uLCBCcmFja2V0RGF0YSwgU29uZyB9IGZyb20gJy4uL3R5cGVzL2JyYWNrZXQnO1xuaW1wb3J0IHsgTWF0Y2ggfSBmcm9tICcuL01hdGNoJztcblxuaW50ZXJmYWNlIFJlZ2lvbkJyYWNrZXRQcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcmVnaW9uOiBSZWdpb247XG4gIGJyYWNrZXQ6IEJyYWNrZXREYXRhO1xuICBvblNlbGVjdDogKHJvdW5kOiBzdHJpbmcsIHJlZ2lvbjogUmVnaW9uLCBtYXRjaEluZGV4OiBudW1iZXIsIHNvbmdJbmRleDogbnVtYmVyLCBzb25nOiBTb25nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUmVnaW9uQnJhY2tldDogUmVhY3QuRkM8UmVnaW9uQnJhY2tldFByb3BzPiA9ICh7IG5hbWUsIHJlZ2lvbiwgYnJhY2tldCwgb25TZWxlY3QgfSkgPT4ge1xuICBjb25zdCByb3VuZHMgPSBbJ3JvdW5kMScsICdyb3VuZDInLCAncm91bmQzJywgJ3JvdW5kNCddIGFzIGNvbnN0O1xuICBjb25zdCByb3VuZE5hbWVzID0gWydSb3VuZCAxJywgJ1JvdW5kIDInLCAnUm91bmQgMycsICdSb3VuZCA0J107XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy1ncmF5LTgwMC81MCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00IHRleHQtb3JhbmdlLTQwMCB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItb3JhbmdlLTIwMC8yMCBwYi0yXCI+XG4gICAgICAgIHtuYW1lfSBSRUdJT05cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS02XCI+XG4gICAgICAgIHsvKiBSb3VuZHMgMS0zIGNvbnRhaW5lciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOnNwYWNlLXgtNiBzcGFjZS15LTYgbGc6c3BhY2UteS0wXCI+XG4gICAgICAgICAge3JvdW5kcy5zbGljZSgwLCAzKS5tYXAoKHJvdW5kLCByb3VuZEluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cm91bmR9IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtb3JhbmdlLTQwMCBib3JkZXItYiBib3JkZXItb3JhbmdlLTIwMC8yMCBwYi0yIG1iLTRcIj5cbiAgICAgICAgICAgICAgICB7cm91bmROYW1lc1tyb3VuZEluZGV4XX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICB7YnJhY2tldFtyb3VuZF1bcmVnaW9uXS5tYXAoKG1hdGNoLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxNYXRjaFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3JvdW5kfS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICBzb25ncz17bWF0Y2h9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoc29uZywgc29uZ0luZGV4KSA9PiBvblNlbGVjdChyb3VuZCwgcmVnaW9uLCBpZHgsIHNvbmdJbmRleCwgc29uZyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBSb3VuZCA0IGNvbnRhaW5lciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbGc6bWF4LXctWzMzJV0gbGc6bXgtYXV0b1wiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1vcmFuZ2UtNDAwIGJvcmRlci1iIGJvcmRlci1vcmFuZ2UtMjAwLzIwIHBiLTIgbWItNFwiPlxuICAgICAgICAgICAge3JvdW5kTmFtZXNbM119XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAge2JyYWNrZXQucm91bmQ0W3JlZ2lvbl0ubWFwKChtYXRjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxNYXRjaFxuICAgICAgICAgICAgICAgIGtleT17YHJvdW5kNC0ke2lkeH1gfVxuICAgICAgICAgICAgICAgIHNvbmdzPXttYXRjaH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KHNvbmcsIHNvbmdJbmRleCkgPT4gb25TZWxlY3QoJ3JvdW5kNCcsIHJlZ2lvbiwgaWR4LCBzb25nSW5kZXgsIHNvbmcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWF0Y2giLCJSZWdpb25CcmFja2V0IiwibmFtZSIsInJlZ2lvbiIsImJyYWNrZXQiLCJvblNlbGVjdCIsInJvdW5kcyIsInJvdW5kTmFtZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInNsaWNlIiwibWFwIiwicm91bmQiLCJyb3VuZEluZGV4IiwiaDQiLCJtYXRjaCIsImlkeCIsInNvbmdzIiwic29uZyIsInNvbmdJbmRleCIsInJvdW5kNCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RegionBracket.tsx\n"));

/***/ })

});