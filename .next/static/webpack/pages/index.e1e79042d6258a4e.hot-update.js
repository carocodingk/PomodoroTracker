"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/components/NewTaskBar.jsx":
/*!*********************************************!*\
  !*** ./src/pages/components/NewTaskBar.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ \"./src/pages/components/ErrorMessage.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NewTaskBar(param) {\n    let { nextTaskKey, setNextTaskKey, setTaskList } = param;\n    _s();\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        taskName: \"\",\n        expectedCycles: 1\n    });\n    const [showErrorMsg, setShowErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const taskVerification = ()=>{\n        // check new task description is not empty\n        if (newTask.taskName.length > 0) {\n            setTaskList((prevTaskList)=>[\n                    ...prevTaskList,\n                    {\n                        key: nextTaskKey,\n                        taskName: newTask.taskName,\n                        expectedCycles: Number(newTask.expectedCycles),\n                        actualTime: 0,\n                        finished: false\n                    }\n                ]);\n            setNextTaskKey(nextTaskKey + 1);\n        } else {\n            console.log(\"Description is empty\");\n            setShowErrorMsg(true);\n        }\n        setNewTask({\n            taskName: \"\",\n            expectedCycles: 1\n        });\n    };\n    const deleteAllTask = ()=>{\n        setTaskList([]);\n        setNewTask({\n            taskName: \"\",\n            expectedCycles: 1\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            showErrorMsg && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setShowErrorMsg: setShowErrorMsg\n            }, void 0, false, {\n                fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/NewTaskBar.jsx\",\n                lineNumber: 46,\n                columnNumber: 24\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"newTaskBar\",\n                className: \"flexBox flexJustifySpaceAround\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"taskDescription\",\n                        className: \"taskField\",\n                        type: \"text\",\n                        value: newTask.taskName,\n                        onChange: (e)=>setNewTask((prevState)=>({\n                                    ...prevState,\n                                    taskName: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/NewTaskBar.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"taskCycle\",\n                        className: \"taskField\",\n                        type: \"number\",\n                        value: newTask.expectedCycles,\n                        min: \"1\",\n                        onChange: (e)=>setNewTask((prevState)=>({\n                                    ...prevState,\n                                    expectedCycles: e.target.value\n                                }))\n                    }, void 0, false, {\n                        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/NewTaskBar.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"taskButton\",\n                        type: \"button\",\n                        value: \"+\",\n                        onClick: ()=>taskVerification()\n                    }, void 0, false, {\n                        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/NewTaskBar.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"taskButton\",\n                        type: \"button\",\n                        value: \"-\",\n                        onClick: ()=>deleteAllTask()\n                    }, void 0, false, {\n                        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/NewTaskBar.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/NewTaskBar.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/NewTaskBar.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(NewTaskBar, \"Z6oeNnqhZfSRZS5FVdTFbXse0f4=\");\n_c = NewTaskBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewTaskBar);\nvar _c;\n$RefreshReg$(_c, \"NewTaskBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OZXdUYXNrQmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNTO0FBQ1U7QUFFcEQsU0FBU0csV0FBVyxLQUEwQztRQUExQyxFQUFDQyxXQUFXLEVBQUVDLGNBQWMsRUFBRUMsV0FBVyxFQUFDLEdBQTFDOztJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7UUFDckNTLFVBQVM7UUFDVEMsZ0JBQWdCO0lBQ2xCO0lBQ0EsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFFakQsTUFBTWEsbUJBQW1CO1FBQ3pCLDBDQUEwQztRQUN4QyxJQUFJTixRQUFRRSxRQUFRLENBQUNLLE1BQU0sR0FBRyxHQUFFO1lBQzlCUixZQUFZLENBQUNTLGVBQWtCO3VCQUMxQkE7b0JBQWM7d0JBQ2ZDLEtBQUtaO3dCQUNMSyxVQUFVRixRQUFRRSxRQUFRO3dCQUMxQkMsZ0JBQWdCTyxPQUFPVixRQUFRRyxjQUFjO3dCQUM3Q1EsWUFBWTt3QkFDWkMsVUFBVTtvQkFDWjtpQkFDRDtZQUNEZCxlQUFlRCxjQUFZO1FBQzdCLE9BQ0s7WUFDSGdCLFFBQVFDLEdBQUcsQ0FBQztZQUNaVCxnQkFBZ0I7UUFDbEI7UUFDQUosV0FBVztZQUNUQyxVQUFTO1lBQ1RDLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEsTUFBTVksZ0JBQWdCO1FBQ3BCaEIsWUFBWSxFQUFFO1FBQ2RFLFdBQVc7WUFDVEMsVUFBUztZQUNUQyxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYTs7WUFDRVosOEJBQWdCLDhEQUFDVixxREFBWUE7Z0JBQUNXLGlCQUFpQkE7Ozs7OzswQkFDaEQsOERBQUNXO2dCQUFJQyxJQUFHO2dCQUFhQyxXQUFVOztrQ0FDN0IsOERBQUNDO3dCQUFNRixJQUFHO3dCQUFrQkMsV0FBVTt3QkFBWUUsTUFBSzt3QkFBT0MsT0FBT3JCLFFBQVFFLFFBQVE7d0JBQUVvQixVQUNyRixDQUFDQyxJQUNDdEIsV0FBVyxDQUFDdUIsWUFBZTtvQ0FDekIsR0FBR0EsU0FBUztvQ0FDWnRCLFVBQVVxQixFQUFFRSxNQUFNLENBQUNKLEtBQUs7Z0NBQzFCOzs7Ozs7a0NBR0osOERBQUNGO3dCQUFNRixJQUFHO3dCQUFZQyxXQUFVO3dCQUFZRSxNQUFLO3dCQUFTQyxPQUFPckIsUUFBUUcsY0FBYzt3QkFBRXVCLEtBQUk7d0JBQUlKLFVBQy9GLENBQUNDLElBQ0N0QixXQUFXLENBQUN1QixZQUFlO29DQUN6QixHQUFHQSxTQUFTO29DQUNackIsZ0JBQWdCb0IsRUFBRUUsTUFBTSxDQUFDSixLQUFLO2dDQUNoQzs7Ozs7O2tDQUVKLDhEQUFDRjt3QkFBTUQsV0FBVTt3QkFBYUUsTUFBSzt3QkFBU0MsT0FBTTt3QkFBSU0sU0FBUyxJQUFNckI7Ozs7OztrQ0FDckUsOERBQUNhO3dCQUFNRCxXQUFVO3dCQUFhRSxNQUFLO3dCQUFTQyxPQUFNO3dCQUFJTSxTQUFTLElBQU1aOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0U7R0EvRFNuQjtLQUFBQTtBQWlFVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OZXdUYXNrQmFyLmpzeD80MjZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xuXG5mdW5jdGlvbiBOZXdUYXNrQmFyKHtuZXh0VGFza0tleSwgc2V0TmV4dFRhc2tLZXksIHNldFRhc2tMaXN0fSl7XG4gIGNvbnN0IFtuZXdUYXNrLCBzZXROZXdUYXNrXSA9IHVzZVN0YXRlKHtcbiAgICB0YXNrTmFtZTonJyxcbiAgICBleHBlY3RlZEN5Y2xlczogMVxuICB9KTtcbiAgY29uc3QgW3Nob3dFcnJvck1zZywgc2V0U2hvd0Vycm9yTXNnXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0YXNrVmVyaWZpY2F0aW9uID0gKCkgPT4ge1xuICAvLyBjaGVjayBuZXcgdGFzayBkZXNjcmlwdGlvbiBpcyBub3QgZW1wdHlcbiAgICBpZiAobmV3VGFzay50YXNrTmFtZS5sZW5ndGggPiAwKXtcbiAgICAgIHNldFRhc2tMaXN0KChwcmV2VGFza0xpc3QpID0+IChbXG4gICAgICAgIC4uLnByZXZUYXNrTGlzdCwge1xuICAgICAgICAgIGtleTogbmV4dFRhc2tLZXksXG4gICAgICAgICAgdGFza05hbWU6IG5ld1Rhc2sudGFza05hbWUsXG4gICAgICAgICAgZXhwZWN0ZWRDeWNsZXM6IE51bWJlcihuZXdUYXNrLmV4cGVjdGVkQ3ljbGVzKSxcbiAgICAgICAgICBhY3R1YWxUaW1lOiAwLFxuICAgICAgICAgIGZpbmlzaGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdKSlcbiAgICAgIHNldE5leHRUYXNrS2V5KG5leHRUYXNrS2V5KzEpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0Rlc2NyaXB0aW9uIGlzIGVtcHR5JylcbiAgICAgIHNldFNob3dFcnJvck1zZyh0cnVlKVxuICAgIH1cbiAgICBzZXROZXdUYXNrKHtcbiAgICAgIHRhc2tOYW1lOicnLFxuICAgICAgZXhwZWN0ZWRDeWNsZXM6IDFcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZGVsZXRlQWxsVGFzayA9ICgpPT57XG4gICAgc2V0VGFza0xpc3QoW10pXG4gICAgc2V0TmV3VGFzayh7XG4gICAgICB0YXNrTmFtZTonJyxcbiAgICAgIGV4cGVjdGVkQ3ljbGVzOiAxXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAge3Nob3dFcnJvck1zZyAmJiA8RXJyb3JNZXNzYWdlIHNldFNob3dFcnJvck1zZz17c2V0U2hvd0Vycm9yTXNnfSAvPn1cbiAgICAgIDxkaXYgaWQ9XCJuZXdUYXNrQmFyXCIgY2xhc3NOYW1lPVwiZmxleEJveCBmbGV4SnVzdGlmeVNwYWNlQXJvdW5kXCI+XG4gICAgICAgIDxpbnB1dCBpZD0ndGFza0Rlc2NyaXB0aW9uJyBjbGFzc05hbWU9J3Rhc2tGaWVsZCcgdHlwZT1cInRleHRcIiB2YWx1ZT17bmV3VGFzay50YXNrTmFtZX0gb25DaGFuZ2U9e1xuICAgICAgICAgIChlKSA9PiBcbiAgICAgICAgICAgIHNldE5ld1Rhc2soKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICB0YXNrTmFtZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IGlkPSd0YXNrQ3ljbGUnIGNsYXNzTmFtZT0ndGFza0ZpZWxkJyB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e25ld1Rhc2suZXhwZWN0ZWRDeWNsZXN9IG1pbj0nMScgb25DaGFuZ2U9e1xuICAgICAgICAgIChlKSA9PiBcbiAgICAgICAgICAgIHNldE5ld1Rhc2soKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICBleHBlY3RlZEN5Y2xlczogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9Lz5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndGFza0J1dHRvbicgdHlwZT1cImJ1dHRvblwiIHZhbHVlPScrJyBvbkNsaWNrPXsoKSA9PiB0YXNrVmVyaWZpY2F0aW9uKCl9Lz5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndGFza0J1dHRvbicgdHlwZT1cImJ1dHRvblwiIHZhbHVlPSctJyBvbkNsaWNrPXsoKSA9PiBkZWxldGVBbGxUYXNrKCl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3VGFza0JhcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJFcnJvck1lc3NhZ2UiLCJEZWxldGVJY29uIiwiTmV3VGFza0JhciIsIm5leHRUYXNrS2V5Iiwic2V0TmV4dFRhc2tLZXkiLCJzZXRUYXNrTGlzdCIsIm5ld1Rhc2siLCJzZXROZXdUYXNrIiwidGFza05hbWUiLCJleHBlY3RlZEN5Y2xlcyIsInNob3dFcnJvck1zZyIsInNldFNob3dFcnJvck1zZyIsInRhc2tWZXJpZmljYXRpb24iLCJsZW5ndGgiLCJwcmV2VGFza0xpc3QiLCJrZXkiLCJOdW1iZXIiLCJhY3R1YWxUaW1lIiwiZmluaXNoZWQiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlQWxsVGFzayIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJwcmV2U3RhdGUiLCJ0YXJnZXQiLCJtaW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/NewTaskBar.jsx\n"));

/***/ })

});