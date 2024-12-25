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

/***/ "./src/pages/components/PomodoroTimer.jsx":
/*!************************************************!*\
  !*** ./src/pages/components/PomodoroTimer.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserContext */ \"./src/pages/components/UserContext.jsx\");\n/* harmony import */ var _AlarmAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlarmAlert */ \"./src/pages/components/AlarmAlert.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst { useContext } = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n// function PomodoroTimer({taskInProgress, setCycleComplete}){\nfunction PomodoroTimer(param) {\n    let { workTime, breakTime, setCycleComplete } = param;\n    _s();\n    const t = useContext(_UserContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const [workTimer, setWorkTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(workTime);\n    const [workTimerRun, setWorkTimerRun] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [breakTimer, setBreakTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(breakTime);\n    const [breakTimerRun, setBreakTimerRun] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [timesUp, setTimesUp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const startTimer = (taskInProgress)=>{\n        setCycleComplete(false) //Restart the cycle\n        ;\n        if (taskInProgress.key != -1) {\n            setWorkTimerRun(!workTimerRun);\n        } else console.log(\"Enter new task / Select a task from list:\");\n    };\n    const resetTimer = ()=>{\n        setWorkTimerRun(false);\n        setBreakTimerRun(false);\n        setWorkTimer(workTime);\n        setBreakTimer(breakTime);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let timer1, timer2;\n        //Work timer\n        if (workTimerRun) {\n            timer1 = setTimeout(()=>{\n                setWorkTimer((prevTime)=>prevTime - 1);\n            }, 1000);\n            if (workTimer === 0) {\n                setWorkTimerRun(false) //Stop work timer\n                ;\n                setBreakTimerRun(true) //Start break timer\n                ;\n                setTimesUp(true);\n            }\n        }\n        //Break timer\n        if (breakTimerRun) {\n            timer2 = setTimeout(()=>{\n                setBreakTimer((prevTime)=>prevTime - 1);\n            }, 1000);\n            if (breakTimer === 0) {\n                setBreakTimerRun(false) //Stop break timer\n                ;\n                setCycleComplete(true) //Indicates a pomodoro cycle (work + break) is complete\n                ;\n                resetTimer();\n            }\n        }\n        return ()=>{\n            if (timer1) clearTimeout(timer1);\n            else if (timer2) clearTimeout(timer2);\n        };\n    }, [\n        workTimer,\n        workTimerRun,\n        breakTimer,\n        breakTimerRun\n    ]);\n    const secondsW = workTimer % 60;\n    const minutesW = Math.floor(workTimer / 60);\n    const secondsB = breakTimer % 60;\n    const minutesB = Math.floor(breakTimer / 60);\n    // console.log('in pomo', t)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            timesUp && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AlarmAlert__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setTimesUp: setTimesUp\n            }, void 0, false, {\n                fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                lineNumber: 77,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"yellowBox\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: \"currentTask\",\n                            className: \"centerText taskDescription\",\n                            children: t.taskInProgress.taskName\n                        }, void 0, false, {\n                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"orange centerText\",\n                                    children: \"Work Time\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"centerText font1\",\n                                    children: [\n                                        minutesW,\n                                        \":\",\n                                        secondsW < 10 ? \"0\".concat(secondsW) : secondsW\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"orange centerText\",\n                                    children: \"Break Time\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"centerText font1\",\n                                    children: [\n                                        minutesB,\n                                        \":\",\n                                        secondsB < 10 ? \"0\".concat(secondsB) : secondsB\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flexBox flexJustifyCenter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"timerButton hoverItem\",\n                                        type: \"button\",\n                                        value: workTimerRun || breakTimerRun ? \"PAUSE\" : \"START\",\n                                        onClick: ()=>startTimer(t.taskInProgress)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"timerButton hoverItem\",\n                                        type: \"button\",\n                                        value: \"RESET\",\n                                        onClick: ()=>resetTimer()\n                                    }, void 0, false, {\n                                        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/PomodoroTimer.jsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(PomodoroTimer, \"cjIaM2Qx9jmSeb9bu5NM6ApPQ1Q=\");\n_c = PomodoroTimer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PomodoroTimer);\nvar _c;\n$RefreshReg$(_c, \"PomodoroTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVELFdBQVcsS0FBSSxJQUFhLE9BQVRBLFlBQWFBOzs7Ozs7Ozs7Ozs7O3NDQUU5RSw4REFBQ0U7c0NBQ0MsNEVBQUNBO2dDQUFJRyxXQUFVOztrREFDYiw4REFBQ0U7d0NBQU1GLFdBQVU7d0NBQ2ZHLE1BQUs7d0NBQ0xDLE9BQU9oQyxnQkFBZ0JJLGdCQUFlLFVBQVE7d0NBQzlDNkIsU0FBUyxJQUNQekIsV0FBV1gsRUFBRVksY0FBYzs7Ozs7O2tEQUcvQiw4REFBQ3FCO3dDQUFNRixXQUFVO3dDQUNmRyxNQUFLO3dDQUNMQyxPQUFNO3dDQUNOQyxTQUFTLElBQ1BwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVsQjtHQXhHU3BCO0tBQUFBO0FBMEdULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL1BvbW9kb3JvVGltZXIuanN4P2Q0OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gXCIuL1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgQWxhcm1BbGVydCBmcm9tIFwiLi9BbGFybUFsZXJ0XCI7XG5cbmNvbnN0IHsgdXNlQ29udGV4dCB9ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG4vLyBmdW5jdGlvbiBQb21vZG9yb1RpbWVyKHt0YXNrSW5Qcm9ncmVzcywgc2V0Q3ljbGVDb21wbGV0ZX0pe1xuZnVuY3Rpb24gUG9tb2Rvcm9UaW1lcih7d29ya1RpbWUsIGJyZWFrVGltZSwgc2V0Q3ljbGVDb21wbGV0ZX0pe1xuICBjb25zdCB0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgY29uc3QgW3dvcmtUaW1lciwgc2V0V29ya1RpbWVyXSA9IHVzZVN0YXRlKHdvcmtUaW1lKTtcbiAgY29uc3QgW3dvcmtUaW1lclJ1biwgc2V0V29ya1RpbWVyUnVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JyZWFrVGltZXIsIHNldEJyZWFrVGltZXJdID0gdXNlU3RhdGUoYnJlYWtUaW1lKTtcbiAgY29uc3QgW2JyZWFrVGltZXJSdW4sIHNldEJyZWFrVGltZXJSdW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGltZXNVcCwgc2V0VGltZXNVcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc3RhcnRUaW1lciA9ICh0YXNrSW5Qcm9ncmVzcykgPT4ge1xuICAgIHNldEN5Y2xlQ29tcGxldGUoZmFsc2UpIC8vUmVzdGFydCB0aGUgY3ljbGVcbiAgICBpZiAodGFza0luUHJvZ3Jlc3Mua2V5ICE9IC0xKXtcbiAgICAgIHNldFdvcmtUaW1lclJ1bighd29ya1RpbWVyUnVuKVxuICAgIH1cbiAgICBlbHNlXG4gICAgICBjb25zb2xlLmxvZyhcIkVudGVyIG5ldyB0YXNrIC8gU2VsZWN0IGEgdGFzayBmcm9tIGxpc3Q6XCIpXG4gIH1cblxuICBjb25zdCByZXNldFRpbWVyID0gKCkgPT4ge1xuICAgIHNldFdvcmtUaW1lclJ1bihmYWxzZSlcbiAgICBzZXRCcmVha1RpbWVyUnVuKGZhbHNlKVxuICAgIHNldFdvcmtUaW1lcih3b3JrVGltZSlcbiAgICBzZXRCcmVha1RpbWVyKGJyZWFrVGltZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyMSwgdGltZXIyIFxuXG4gICAgLy9Xb3JrIHRpbWVyXG4gICAgaWYgKHdvcmtUaW1lclJ1bil7XG4gICAgICB0aW1lcjEgPSBzZXRUaW1lb3V0KCgpID0+IHsgXG4gICAgICAgIHNldFdvcmtUaW1lcigocHJldlRpbWUpID0+IHByZXZUaW1lLTEpXG4gICAgICB9LCAxMDAwKTtcbiAgICAgIGlmICh3b3JrVGltZXIgPT09IDApeyAvL3RpbWUncyB1cFxuICAgICAgICBzZXRXb3JrVGltZXJSdW4oZmFsc2UpIC8vU3RvcCB3b3JrIHRpbWVyXG4gICAgICAgIHNldEJyZWFrVGltZXJSdW4odHJ1ZSkgLy9TdGFydCBicmVhayB0aW1lclxuICAgICAgICBzZXRUaW1lc1VwKHRydWUpXG4gICAgICB9XG4gICAgfVxuICAgIC8vQnJlYWsgdGltZXJcbiAgICBpZiAoYnJlYWtUaW1lclJ1bil7XG4gICAgICB0aW1lcjIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0QnJlYWtUaW1lcigocHJldlRpbWUpID0+IHByZXZUaW1lLTEpXG4gICAgICB9LCAxMDAwKTtcbiAgICAgIGlmIChicmVha1RpbWVyID09PSAwKXsgICAgLy9CcmVhayB0aW1lJ3MgdXBcbiAgICAgICAgc2V0QnJlYWtUaW1lclJ1bihmYWxzZSkgLy9TdG9wIGJyZWFrIHRpbWVyXG4gICAgICAgIHNldEN5Y2xlQ29tcGxldGUodHJ1ZSkgIC8vSW5kaWNhdGVzIGEgcG9tb2Rvcm8gY3ljbGUgKHdvcmsgKyBicmVhaykgaXMgY29tcGxldGVcbiAgICAgICAgcmVzZXRUaW1lcigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyMSlcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyMSlcbiAgICAgIGVsc2UgaWYgKHRpbWVyMilcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyMilcbiAgICB9XG5cbiAgfSxbd29ya1RpbWVyLCB3b3JrVGltZXJSdW4sIGJyZWFrVGltZXIsIGJyZWFrVGltZXJSdW5dKTtcblxuICBjb25zdCBzZWNvbmRzVyA9IHdvcmtUaW1lciAlIDYwXG4gIGNvbnN0IG1pbnV0ZXNXID0gTWF0aC5mbG9vcih3b3JrVGltZXIgLyA2MClcbiAgY29uc3Qgc2Vjb25kc0IgPSBicmVha1RpbWVyICUgNjBcbiAgY29uc3QgbWludXRlc0IgPSBNYXRoLmZsb29yKGJyZWFrVGltZXIgLyA2MClcblxuICAvLyBjb25zb2xlLmxvZygnaW4gcG9tbycsIHQpXG5cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICB7dGltZXNVcCAmJiA8QWxhcm1BbGVydCBzZXRUaW1lc1VwPXtzZXRUaW1lc1VwfSAvPn1cbiAgICAgIDxkaXYgaWQ9XCJ5ZWxsb3dCb3hcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBpZD0nY3VycmVudFRhc2snIGNsYXNzTmFtZT1cImNlbnRlclRleHQgdGFza0Rlc2NyaXB0aW9uXCI+e3QudGFza0luUHJvZ3Jlc3MudGFza05hbWV9PC9wPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcmFuZ2UgY2VudGVyVGV4dFwiPldvcmsgVGltZTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclRleHQgZm9udDFcIj57bWludXRlc1d9OntzZWNvbmRzVyA8IDEwPyBgMCR7c2Vjb25kc1d9YCA6IHNlY29uZHNXfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib3JhbmdlIGNlbnRlclRleHRcIj5CcmVhayBUaW1lPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2VudGVyVGV4dCBmb250MVwiPnttaW51dGVzQn06e3NlY29uZHNCIDwgMTA/IGAwJHtzZWNvbmRzQn1gIDogc2Vjb25kc0J9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhCb3ggZmxleEp1c3RpZnlDZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpbWVyQnV0dG9uIGhvdmVySXRlbVwiIFxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17d29ya1RpbWVyUnVuIHx8IGJyZWFrVGltZXJSdW4/ICdQQVVTRSc6J1NUQVJUJ30gXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gXG4gICAgICAgICAgICAgICAgICBzdGFydFRpbWVyKHQudGFza0luUHJvZ3Jlc3MpXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpbWVyQnV0dG9uIGhvdmVySXRlbVwiIFxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT0nUkVTRVQnIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFxuICAgICAgICAgICAgICAgICAgcmVzZXRUaW1lcigpXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIHsvKiA8aDE+aGVsbG88L2gxPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9tb2Rvcm9UaW1lcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsIkFsYXJtQWxlcnQiLCJ1c2VDb250ZXh0IiwicmVxdWlyZSIsIlBvbW9kb3JvVGltZXIiLCJ3b3JrVGltZSIsImJyZWFrVGltZSIsInNldEN5Y2xlQ29tcGxldGUiLCJ0Iiwid29ya1RpbWVyIiwic2V0V29ya1RpbWVyIiwid29ya1RpbWVyUnVuIiwic2V0V29ya1RpbWVyUnVuIiwiYnJlYWtUaW1lciIsInNldEJyZWFrVGltZXIiLCJicmVha1RpbWVyUnVuIiwic2V0QnJlYWtUaW1lclJ1biIsInRpbWVzVXAiLCJzZXRUaW1lc1VwIiwic3RhcnRUaW1lciIsInRhc2tJblByb2dyZXNzIiwia2V5IiwiY29uc29sZSIsImxvZyIsInJlc2V0VGltZXIiLCJ0aW1lcjEiLCJ0aW1lcjIiLCJzZXRUaW1lb3V0IiwicHJldlRpbWUiLCJjbGVhclRpbWVvdXQiLCJzZWNvbmRzVyIsIm1pbnV0ZXNXIiwiTWF0aCIsImZsb29yIiwic2Vjb25kc0IiLCJtaW51dGVzQiIsImRpdiIsImlkIiwicCIsImNsYXNzTmFtZSIsInRhc2tOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/PomodoroTimer.jsx\n"));

/***/ })

});