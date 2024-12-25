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

/***/ "./src/pages/components/TaskCompletion.jsx":
/*!*************************************************!*\
  !*** ./src/pages/components/TaskCompletion.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeContext */ \"./src/pages/components/TimeContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction TaskCompletion(param) {\n    let { taskList, setTaskList, taskInProgress, setTaskInProgress, setCycleComplete } = param;\n    _s();\n    const t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_TimeContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    let taskUpdate = {};\n    let taskListUpdate = [];\n    const taskCompletion = (complete)=>{\n        taskListUpdate = taskList.map((task)=>{\n            if (task.key === taskInProgress.key) {\n                if (complete) {\n                    taskUpdate = {\n                        ...task,\n                        actualTime: task.actualTime + t,\n                        finished: true\n                    };\n                } else {\n                    taskUpdate = {\n                        ...task,\n                        actualTime: task.actualTime + t\n                    };\n                }\n                //Resets the task in progress, once a cycle has been completed regardless if the task was finished\n                setTaskInProgress({\n                    key: -1,\n                    taskName: \"Enter new task / Select a task from list:\"\n                });\n                return taskUpdate;\n            } else {\n                return task;\n            }\n        });\n        // console.log('NEW TASKLIST: ', taskListUpdate) \n        setTaskList(taskListUpdate);\n        setCycleComplete(false) //Resets the cycle indicator\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dialogBox\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"boxTitle centerText\",\n                    children: \"Has the task been completed?\"\n                }, void 0, false, {\n                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexBox flexJustifyCenter\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"button\",\n                            className: \"timerButton hoverItem\",\n                            value: \"YES!\",\n                            onClick: ()=>taskCompletion(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"button\",\n                            className: \"timerButton hoverItem\",\n                            value: \"Not yet!\",\n                            onClick: ()=>taskCompletion(false)\n                        }, void 0, false, {\n                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskCompletion, \"HJ1wmQfhQB2DF5cup/6Wxn+TXqs=\");\n_c = TaskCompletion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskCompletion); // function TaskCompletion({taskInProgress, setTaskInProgress, taskList, setTaskList, setCycleComplete}){\n //   const updateTaskInProgress = (completed) => {\n //     let updatedTask\n //     taskList.map((task) => {\n //       if (task.key === taskInProgress.key && !task.finished){   //task has not been finished before\n //         if (completed){\n //           updatedTask = {\n //             ...task,\n //             actualTime: task.actualTime + workTime,\n //             finished: completed\n //           }\n //         }\n //         else{\n //           updatedTask = {\n //             ...task,\n //             actualTime: task.actualTime + workTime\n //           }\n //         }\n //         const updatedTaskList = taskList.toSpliced(taskInProgress.key, 1, updatedTask)\n //         setTaskList(updatedTaskList)\n //         setCycleComplete(false) //removes the box asking if the task was completed\n //         setTaskInProgress({ //Resets task in progress to default\n //           key: -1, \n //           taskName: \"Choose a task\"\n //         })\n //       }\n //     })\n //   }\n //   const checkTask = () => {\n //     return(\n //       <div>\n //         <p className=\"brown centerText\">Have you finished with task:</p>\n //         <p className=\"brown centerText\"> {taskInProgress.taskName}?</p>\n //         <div id=\"verificationButton\" className=\"flexBox flexJustifyCenter\">\n //           <input className=\"lightBackground brown timerButton hoverItem\"\n //             type=\"button\" \n //             value=\"YES\" \n //             onClick={()=>\n //               updateTaskInProgress(true)\n //             }/>\n //           <input className=\"lightBackground brown timerButton hoverItem\" \n //             type=\"button\" \n //             value=\"NO\" \n //             onClick={()=>\n //               updateTaskInProgress(false)\n //             }/>\n //         </div>\n //       </div>\n //     );\n //   }\n //   return(\n //     <DialogBox infoField={checkTask} />\n //   );\n // }\nvar _c;\n$RefreshReg$(_c, \"TaskCompletion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9UYXNrQ29tcGxldGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0M7QUFDSztBQUV2QyxTQUFTRSxlQUFlLEtBQTRFO1FBQTVFLEVBQUNDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGlCQUFpQixFQUFFQyxnQkFBZ0IsRUFBQyxHQUE1RTs7SUFDdEIsTUFBTUMsSUFBSVIsaURBQVVBLENBQUNDLG9EQUFXQTtJQUNoQyxJQUFJUSxhQUFhLENBQUM7SUFDbEIsSUFBSUMsaUJBQWlCLEVBQUU7SUFFdkIsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCRixpQkFBaUJQLFNBQVNVLEdBQUcsQ0FBQyxDQUFDQztZQUM3QixJQUFJQSxLQUFLQyxHQUFHLEtBQUtWLGVBQWVVLEdBQUcsRUFBQztnQkFDbEMsSUFBSUgsVUFBUztvQkFDWEgsYUFBYTt3QkFDWCxHQUFHSyxJQUFJO3dCQUNQRSxZQUFZRixLQUFLRSxVQUFVLEdBQUdSO3dCQUM5QlMsVUFBVTtvQkFDWjtnQkFDRixPQUNJO29CQUNGUixhQUFhO3dCQUNYLEdBQUdLLElBQUk7d0JBQ1BFLFlBQVlGLEtBQUtFLFVBQVUsR0FBR1I7b0JBQ2hDO2dCQUNGO2dCQUNBLGtHQUFrRztnQkFDbEdGLGtCQUFrQjtvQkFDaEJTLEtBQUssQ0FBQztvQkFDTkcsVUFBVTtnQkFDWjtnQkFDQSxPQUFPVDtZQUNULE9BQ0s7Z0JBQ0gsT0FBT0s7WUFDVDtRQUNGO1FBQ0EsaURBQWlEO1FBQ2pEVixZQUFZTTtRQUNaSCxpQkFBaUIsT0FBTyw0QkFBNEI7O0lBQ3REO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBc0I7Ozs7Ozs4QkFDcEMsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQU1DLE1BQUs7NEJBQVNILFdBQVU7NEJBQXdCSSxPQUFPOzRCQUFRQyxTQUFTLElBQUlkLGVBQWU7Ozs7OztzQ0FDbEcsOERBQUNXOzRCQUFNQyxNQUFLOzRCQUFTSCxXQUFVOzRCQUF3QkksT0FBTzs0QkFBWUMsU0FBUyxJQUFJZCxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoSDtHQWhEU1Q7S0FBQUE7QUFrRFQsK0RBQWVBLGNBQWNBLEVBQUMsQ0FHOUIseUdBQXlHO0NBQ3pHLGtEQUFrRDtDQUNsRCxzQkFBc0I7Q0FDdEIsK0JBQStCO0NBQy9CLHNHQUFzRztDQUN0RywwQkFBMEI7Q0FDMUIsNEJBQTRCO0NBQzVCLHVCQUF1QjtDQUN2QixzREFBc0Q7Q0FDdEQsa0NBQWtDO0NBQ2xDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLDRCQUE0QjtDQUM1Qix1QkFBdUI7Q0FDdkIscURBQXFEO0NBQ3JELGNBQWM7Q0FDZCxZQUFZO0NBQ1oseUZBQXlGO0NBQ3pGLHVDQUF1QztDQUN2QyxxRkFBcUY7Q0FDckYsbUVBQW1FO0NBQ25FLHNCQUFzQjtDQUN0QixzQ0FBc0M7Q0FDdEMsYUFBYTtDQUNiLFVBQVU7Q0FDVixTQUFTO0NBQ1QsTUFBTTtDQUVOLDhCQUE4QjtDQUM5QixjQUFjO0NBQ2QsY0FBYztDQUNkLDJFQUEyRTtDQUMzRSwwRUFBMEU7Q0FDMUUsOEVBQThFO0NBQzlFLDJFQUEyRTtDQUMzRSw2QkFBNkI7Q0FDN0IsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QiwyQ0FBMkM7Q0FDM0Msa0JBQWtCO0NBQ2xCLDRFQUE0RTtDQUM1RSw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLDRCQUE0QjtDQUM1Qiw0Q0FBNEM7Q0FDNUMsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsU0FBUztDQUNULE1BQU07Q0FFTixZQUFZO0NBQ1osMENBQTBDO0NBQzFDLE9BQU87Q0FDUCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL1Rhc2tDb21wbGV0aW9uLmpzeD8wNDEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFRpbWVDb250ZXh0IGZyb20gXCIuL1RpbWVDb250ZXh0XCJcblxuZnVuY3Rpb24gVGFza0NvbXBsZXRpb24oe3Rhc2tMaXN0LCBzZXRUYXNrTGlzdCwgdGFza0luUHJvZ3Jlc3MsIHNldFRhc2tJblByb2dyZXNzLCBzZXRDeWNsZUNvbXBsZXRlfSl7XG4gIGNvbnN0IHQgPSB1c2VDb250ZXh0KFRpbWVDb250ZXh0KVxuICBsZXQgdGFza1VwZGF0ZSA9IHt9XG4gIGxldCB0YXNrTGlzdFVwZGF0ZSA9IFtdXG5cbiAgY29uc3QgdGFza0NvbXBsZXRpb24gPSAoY29tcGxldGUpID0+IHtcbiAgICB0YXNrTGlzdFVwZGF0ZSA9IHRhc2tMaXN0Lm1hcCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sua2V5ID09PSB0YXNrSW5Qcm9ncmVzcy5rZXkpe1xuICAgICAgICBpZiAoY29tcGxldGUpe1xuICAgICAgICAgIHRhc2tVcGRhdGUgPSB7XG4gICAgICAgICAgICAuLi50YXNrLFxuICAgICAgICAgICAgYWN0dWFsVGltZTogdGFzay5hY3R1YWxUaW1lICsgdCwgXG4gICAgICAgICAgICBmaW5pc2hlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRhc2tVcGRhdGUgPSB7XG4gICAgICAgICAgICAuLi50YXNrLFxuICAgICAgICAgICAgYWN0dWFsVGltZTogdGFzay5hY3R1YWxUaW1lICsgdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL1Jlc2V0cyB0aGUgdGFzayBpbiBwcm9ncmVzcywgb25jZSBhIGN5Y2xlIGhhcyBiZWVuIGNvbXBsZXRlZCByZWdhcmRsZXNzIGlmIHRoZSB0YXNrIHdhcyBmaW5pc2hlZFxuICAgICAgICBzZXRUYXNrSW5Qcm9ncmVzcyh7IFxuICAgICAgICAgIGtleTogLTEsXG4gICAgICAgICAgdGFza05hbWU6IFwiRW50ZXIgbmV3IHRhc2sgLyBTZWxlY3QgYSB0YXNrIGZyb20gbGlzdDpcIlxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGFza1VwZGF0ZVxuICAgICAgfVxuICAgICAgZWxzZSB7ICAvL090aGVyIHRhc2tzIG5vdCBzZWxlY3RlZFxuICAgICAgICByZXR1cm4gdGFza1xuICAgICAgfVxuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coJ05FVyBUQVNLTElTVDogJywgdGFza0xpc3RVcGRhdGUpIFxuICAgIHNldFRhc2tMaXN0KHRhc2tMaXN0VXBkYXRlKVxuICAgIHNldEN5Y2xlQ29tcGxldGUoZmFsc2UpIC8vUmVzZXRzIHRoZSBjeWNsZSBpbmRpY2F0b3JcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc0Fic29sdXRlVG9wIGZsZXhCb3ggZmxleENvbHVtbiBmbGV4SnVzdGlmeUNlbnRlciBtb2RhbEJveFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dCb3hcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJveFRpdGxlIGNlbnRlclRleHRcIj5IYXMgdGhlIHRhc2sgYmVlbiBjb21wbGV0ZWQ/PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Qm94IGZsZXhKdXN0aWZ5Q2VudGVyXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSd0aW1lckJ1dHRvbiBob3Zlckl0ZW0nIHZhbHVlPXsnWUVTISd9IG9uQ2xpY2s9eygpPT50YXNrQ29tcGxldGlvbih0cnVlKX0gLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3RpbWVyQnV0dG9uIGhvdmVySXRlbScgdmFsdWU9eydOb3QgeWV0ISd9IG9uQ2xpY2s9eygpPT50YXNrQ29tcGxldGlvbihmYWxzZSl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tDb21wbGV0aW9uO1xuXG5cbi8vIGZ1bmN0aW9uIFRhc2tDb21wbGV0aW9uKHt0YXNrSW5Qcm9ncmVzcywgc2V0VGFza0luUHJvZ3Jlc3MsIHRhc2tMaXN0LCBzZXRUYXNrTGlzdCwgc2V0Q3ljbGVDb21wbGV0ZX0pe1xuLy8gICBjb25zdCB1cGRhdGVUYXNrSW5Qcm9ncmVzcyA9IChjb21wbGV0ZWQpID0+IHtcbi8vICAgICBsZXQgdXBkYXRlZFRhc2tcbi8vICAgICB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHtcbi8vICAgICAgIGlmICh0YXNrLmtleSA9PT0gdGFza0luUHJvZ3Jlc3Mua2V5ICYmICF0YXNrLmZpbmlzaGVkKXsgICAvL3Rhc2sgaGFzIG5vdCBiZWVuIGZpbmlzaGVkIGJlZm9yZVxuLy8gICAgICAgICBpZiAoY29tcGxldGVkKXtcbi8vICAgICAgICAgICB1cGRhdGVkVGFzayA9IHtcbi8vICAgICAgICAgICAgIC4uLnRhc2ssXG4vLyAgICAgICAgICAgICBhY3R1YWxUaW1lOiB0YXNrLmFjdHVhbFRpbWUgKyB3b3JrVGltZSxcbi8vICAgICAgICAgICAgIGZpbmlzaGVkOiBjb21wbGV0ZWRcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZXtcbi8vICAgICAgICAgICB1cGRhdGVkVGFzayA9IHtcbi8vICAgICAgICAgICAgIC4uLnRhc2ssXG4vLyAgICAgICAgICAgICBhY3R1YWxUaW1lOiB0YXNrLmFjdHVhbFRpbWUgKyB3b3JrVGltZVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zdCB1cGRhdGVkVGFza0xpc3QgPSB0YXNrTGlzdC50b1NwbGljZWQodGFza0luUHJvZ3Jlc3Mua2V5LCAxLCB1cGRhdGVkVGFzaylcbi8vICAgICAgICAgc2V0VGFza0xpc3QodXBkYXRlZFRhc2tMaXN0KVxuLy8gICAgICAgICBzZXRDeWNsZUNvbXBsZXRlKGZhbHNlKSAvL3JlbW92ZXMgdGhlIGJveCBhc2tpbmcgaWYgdGhlIHRhc2sgd2FzIGNvbXBsZXRlZFxuLy8gICAgICAgICBzZXRUYXNrSW5Qcm9ncmVzcyh7IC8vUmVzZXRzIHRhc2sgaW4gcHJvZ3Jlc3MgdG8gZGVmYXVsdFxuLy8gICAgICAgICAgIGtleTogLTEsIFxuLy8gICAgICAgICAgIHRhc2tOYW1lOiBcIkNob29zZSBhIHRhc2tcIlxuLy8gICAgICAgICB9KVxuLy8gICAgICAgfVxuLy8gICAgIH0pXG4vLyAgIH1cblxuLy8gICBjb25zdCBjaGVja1Rhc2sgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnJvd24gY2VudGVyVGV4dFwiPkhhdmUgeW91IGZpbmlzaGVkIHdpdGggdGFzazo8L3A+XG4vLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJyb3duIGNlbnRlclRleHRcIj4ge3Rhc2tJblByb2dyZXNzLnRhc2tOYW1lfT88L3A+XG4vLyAgICAgICAgIDxkaXYgaWQ9XCJ2ZXJpZmljYXRpb25CdXR0b25cIiBjbGFzc05hbWU9XCJmbGV4Qm94IGZsZXhKdXN0aWZ5Q2VudGVyXCI+XG4vLyAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImxpZ2h0QmFja2dyb3VuZCBicm93biB0aW1lckJ1dHRvbiBob3Zlckl0ZW1cIlxuLy8gICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuLy8gICAgICAgICAgICAgdmFsdWU9XCJZRVNcIiBcbi8vICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5cbi8vICAgICAgICAgICAgICAgdXBkYXRlVGFza0luUHJvZ3Jlc3ModHJ1ZSlcbi8vICAgICAgICAgICAgIH0vPlxuLy8gICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJsaWdodEJhY2tncm91bmQgYnJvd24gdGltZXJCdXR0b24gaG92ZXJJdGVtXCIgXG4vLyAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4vLyAgICAgICAgICAgICB2YWx1ZT1cIk5PXCIgXG4vLyAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+XG4vLyAgICAgICAgICAgICAgIHVwZGF0ZVRhc2tJblByb2dyZXNzKGZhbHNlKVxuLy8gICAgICAgICAgICAgfS8+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuXG4vLyAgIHJldHVybihcbi8vICAgICA8RGlhbG9nQm94IGluZm9GaWVsZD17Y2hlY2tUYXNrfSAvPlxuLy8gICApO1xuLy8gfSJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiVGltZUNvbnRleHQiLCJUYXNrQ29tcGxldGlvbiIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJ0YXNrSW5Qcm9ncmVzcyIsInNldFRhc2tJblByb2dyZXNzIiwic2V0Q3ljbGVDb21wbGV0ZSIsInQiLCJ0YXNrVXBkYXRlIiwidGFza0xpc3RVcGRhdGUiLCJ0YXNrQ29tcGxldGlvbiIsImNvbXBsZXRlIiwibWFwIiwidGFzayIsImtleSIsImFjdHVhbFRpbWUiLCJmaW5pc2hlZCIsInRhc2tOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/TaskCompletion.jsx\n"));

/***/ })

});