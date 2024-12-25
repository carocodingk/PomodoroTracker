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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeContext */ \"./src/pages/components/TimeContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction TaskCompletion(param) {\n    let { taskList, setTaskList, taskInProgress, setTaskInProgress, setCycleComplete } = param;\n    _s();\n    const t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_TimeContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    let taskUpdate = {};\n    let taskListUpdate = [];\n    const taskCompletion = (complete)=>{\n        taskListUpdate = taskList.map((task)=>{\n            if (task.key === taskInProgress.key) {\n                if (complete) {\n                    console.log(\"task is completed: \", taskInProgress);\n                    taskUpdate = {\n                        ...task,\n                        actualTime: task.actualTime + t,\n                        finished: true\n                    };\n                    console.log(\"task updated \", taskUpdate);\n                } else {\n                    console.log(\"task is not completed: \", taskInProgress);\n                    taskUpdate = {\n                        ...task,\n                        actualTime: task.actualTime + t\n                    };\n                    console.log(\"task updated \", taskUpdate);\n                }\n                //Resets the task in progress, once a cycle has been completed regardless if the task was finished\n                setTaskInProgress({\n                    key: -1,\n                    taskName: \"Enter new task / Select a task from list:\"\n                });\n                return taskUpdate;\n            } else {\n                return task;\n            }\n        });\n        // console.log('NEW TASKLIST: ', taskListUpdate) \n        setTaskList(taskListUpdate);\n        setCycleComplete(false) //Resets the cycle indicator\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dialogBox\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"boxTitle centerText\",\n                    children: \"Has the task been completed?\"\n                }, void 0, false, {\n                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexBox flexJustifyCenter\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"button\",\n                            className: \"timerButton hoverItem\",\n                            value: \"YES!\",\n                            onClick: ()=>taskCompletion(true)\n                        }, void 0, false, {\n                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"button\",\n                            className: \"timerButton hoverItem\",\n                            value: \"Not yet!\",\n                            onClick: ()=>taskCompletion(false)\n                        }, void 0, false, {\n                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskCompletion.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskCompletion, \"HJ1wmQfhQB2DF5cup/6Wxn+TXqs=\");\n_c = TaskCompletion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskCompletion); // function TaskCompletion({taskInProgress, setTaskInProgress, taskList, setTaskList, setCycleComplete}){\n //   const updateTaskInProgress = (completed) => {\n //     let updatedTask\n //     taskList.map((task) => {\n //       if (task.key === taskInProgress.key && !task.finished){   //task has not been finished before\n //         if (completed){\n //           updatedTask = {\n //             ...task,\n //             actualTime: task.actualTime + workTime,\n //             finished: completed\n //           }\n //         }\n //         else{\n //           updatedTask = {\n //             ...task,\n //             actualTime: task.actualTime + workTime\n //           }\n //         }\n //         const updatedTaskList = taskList.toSpliced(taskInProgress.key, 1, updatedTask)\n //         setTaskList(updatedTaskList)\n //         setCycleComplete(false) //removes the box asking if the task was completed\n //         setTaskInProgress({ //Resets task in progress to default\n //           key: -1, \n //           taskName: \"Choose a task\"\n //         })\n //       }\n //     })\n //   }\n //   const checkTask = () => {\n //     return(\n //       <div>\n //         <p className=\"brown centerText\">Have you finished with task:</p>\n //         <p className=\"brown centerText\"> {taskInProgress.taskName}?</p>\n //         <div id=\"verificationButton\" className=\"flexBox flexJustifyCenter\">\n //           <input className=\"lightBackground brown timerButton hoverItem\"\n //             type=\"button\" \n //             value=\"YES\" \n //             onClick={()=>\n //               updateTaskInProgress(true)\n //             }/>\n //           <input className=\"lightBackground brown timerButton hoverItem\" \n //             type=\"button\" \n //             value=\"NO\" \n //             onClick={()=>\n //               updateTaskInProgress(false)\n //             }/>\n //         </div>\n //       </div>\n //     );\n //   }\n //   return(\n //     <DialogBox infoField={checkTask} />\n //   );\n // }\nvar _c;\n$RefreshReg$(_c, \"TaskCompletion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxNQUFNO0NBRU4sWUFBWTtDQUNaLDBDQUEwQztDQUMxQyxPQUFPO0NBQ1AsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9UYXNrQ29tcGxldGlvbi5qc3g/MDQxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUaW1lQ29udGV4dCBmcm9tIFwiLi9UaW1lQ29udGV4dFwiXG5cbmZ1bmN0aW9uIFRhc2tDb21wbGV0aW9uKHt0YXNrTGlzdCwgc2V0VGFza0xpc3QsIHRhc2tJblByb2dyZXNzLCBzZXRUYXNrSW5Qcm9ncmVzcywgc2V0Q3ljbGVDb21wbGV0ZX0pe1xuICBjb25zdCB0ID0gdXNlQ29udGV4dChUaW1lQ29udGV4dClcbiAgbGV0IHRhc2tVcGRhdGUgPSB7fVxuICBsZXQgdGFza0xpc3RVcGRhdGUgPSBbXVxuXG4gIGNvbnN0IHRhc2tDb21wbGV0aW9uID0gKGNvbXBsZXRlKSA9PiB7XG4gICAgdGFza0xpc3RVcGRhdGUgPSB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmtleSA9PT0gdGFza0luUHJvZ3Jlc3Mua2V5KXtcbiAgICAgICAgaWYgKGNvbXBsZXRlKXtcbiAgICAgICAgICBjb25zb2xlLmxvZygndGFzayBpcyBjb21wbGV0ZWQ6ICcsIHRhc2tJblByb2dyZXNzKVxuICAgICAgICAgIHRhc2tVcGRhdGUgPSB7XG4gICAgICAgICAgICAuLi50YXNrLFxuICAgICAgICAgICAgYWN0dWFsVGltZTogdGFzay5hY3R1YWxUaW1lICsgdCwgXG4gICAgICAgICAgICBmaW5pc2hlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygndGFzayB1cGRhdGVkICcsIHRhc2tVcGRhdGUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBjb25zb2xlLmxvZygndGFzayBpcyBub3QgY29tcGxldGVkOiAnLCB0YXNrSW5Qcm9ncmVzcylcbiAgICAgICAgICB0YXNrVXBkYXRlID0ge1xuICAgICAgICAgICAgLi4udGFzayxcbiAgICAgICAgICAgIGFjdHVhbFRpbWU6IHRhc2suYWN0dWFsVGltZSArIHRcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Rhc2sgdXBkYXRlZCAnLCB0YXNrVXBkYXRlKVxuICAgICAgICB9XG4gICAgICAgIC8vUmVzZXRzIHRoZSB0YXNrIGluIHByb2dyZXNzLCBvbmNlIGEgY3ljbGUgaGFzIGJlZW4gY29tcGxldGVkIHJlZ2FyZGxlc3MgaWYgdGhlIHRhc2sgd2FzIGZpbmlzaGVkXG4gICAgICAgIHNldFRhc2tJblByb2dyZXNzKHsgXG4gICAgICAgICAga2V5OiAtMSxcbiAgICAgICAgICB0YXNrTmFtZTogXCJFbnRlciBuZXcgdGFzayAvIFNlbGVjdCBhIHRhc2sgZnJvbSBsaXN0OlwiXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0YXNrVXBkYXRlXG4gICAgICB9XG4gICAgICBlbHNlIHsgIC8vT3RoZXIgdGFza3Mgbm90IHNlbGVjdGVkXG4gICAgICAgIHJldHVybiB0YXNrXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBjb25zb2xlLmxvZygnTkVXIFRBU0tMSVNUOiAnLCB0YXNrTGlzdFVwZGF0ZSkgXG4gICAgc2V0VGFza0xpc3QodGFza0xpc3RVcGRhdGUpXG4gICAgc2V0Q3ljbGVDb21wbGV0ZShmYWxzZSkgLy9SZXNldHMgdGhlIGN5Y2xlIGluZGljYXRvclxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zQWJzb2x1dGVUb3AgZmxleEJveCBmbGV4Q29sdW1uIGZsZXhKdXN0aWZ5Q2VudGVyIG1vZGFsQm94XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ0JveFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYm94VGl0bGUgY2VudGVyVGV4dFwiPkhhcyB0aGUgdGFzayBiZWVuIGNvbXBsZXRlZD88L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhCb3ggZmxleEp1c3RpZnlDZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3RpbWVyQnV0dG9uIGhvdmVySXRlbScgdmFsdWU9eydZRVMhJ30gb25DbGljaz17KCk9PnRhc2tDb21wbGV0aW9uKHRydWUpfSAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0ndGltZXJCdXR0b24gaG92ZXJJdGVtJyB2YWx1ZT17J05vdCB5ZXQhJ30gb25DbGljaz17KCk9PnRhc2tDb21wbGV0aW9uKGZhbHNlKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0NvbXBsZXRpb247XG5cblxuLy8gZnVuY3Rpb24gVGFza0NvbXBsZXRpb24oe3Rhc2tJblByb2dyZXNzLCBzZXRUYXNrSW5Qcm9ncmVzcywgdGFza0xpc3QsIHNldFRhc2tMaXN0LCBzZXRDeWNsZUNvbXBsZXRlfSl7XG4vLyAgIGNvbnN0IHVwZGF0ZVRhc2tJblByb2dyZXNzID0gKGNvbXBsZXRlZCkgPT4ge1xuLy8gICAgIGxldCB1cGRhdGVkVGFza1xuLy8gICAgIHRhc2tMaXN0Lm1hcCgodGFzaykgPT4ge1xuLy8gICAgICAgaWYgKHRhc2sua2V5ID09PSB0YXNrSW5Qcm9ncmVzcy5rZXkgJiYgIXRhc2suZmluaXNoZWQpeyAgIC8vdGFzayBoYXMgbm90IGJlZW4gZmluaXNoZWQgYmVmb3JlXG4vLyAgICAgICAgIGlmIChjb21wbGV0ZWQpe1xuLy8gICAgICAgICAgIHVwZGF0ZWRUYXNrID0ge1xuLy8gICAgICAgICAgICAgLi4udGFzayxcbi8vICAgICAgICAgICAgIGFjdHVhbFRpbWU6IHRhc2suYWN0dWFsVGltZSArIHdvcmtUaW1lLFxuLy8gICAgICAgICAgICAgZmluaXNoZWQ6IGNvbXBsZXRlZFxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNle1xuLy8gICAgICAgICAgIHVwZGF0ZWRUYXNrID0ge1xuLy8gICAgICAgICAgICAgLi4udGFzayxcbi8vICAgICAgICAgICAgIGFjdHVhbFRpbWU6IHRhc2suYWN0dWFsVGltZSArIHdvcmtUaW1lXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrTGlzdCA9IHRhc2tMaXN0LnRvU3BsaWNlZCh0YXNrSW5Qcm9ncmVzcy5rZXksIDEsIHVwZGF0ZWRUYXNrKVxuLy8gICAgICAgICBzZXRUYXNrTGlzdCh1cGRhdGVkVGFza0xpc3QpXG4vLyAgICAgICAgIHNldEN5Y2xlQ29tcGxldGUoZmFsc2UpIC8vcmVtb3ZlcyB0aGUgYm94IGFza2luZyBpZiB0aGUgdGFzayB3YXMgY29tcGxldGVkXG4vLyAgICAgICAgIHNldFRhc2tJblByb2dyZXNzKHsgLy9SZXNldHMgdGFzayBpbiBwcm9ncmVzcyB0byBkZWZhdWx0XG4vLyAgICAgICAgICAga2V5OiAtMSwgXG4vLyAgICAgICAgICAgdGFza05hbWU6IFwiQ2hvb3NlIGEgdGFza1wiXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICB9XG4vLyAgICAgfSlcbi8vICAgfVxuXG4vLyAgIGNvbnN0IGNoZWNrVGFzayA9ICgpID0+IHtcbi8vICAgICByZXR1cm4oXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJicm93biBjZW50ZXJUZXh0XCI+SGF2ZSB5b3UgZmluaXNoZWQgd2l0aCB0YXNrOjwvcD5cbi8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnJvd24gY2VudGVyVGV4dFwiPiB7dGFza0luUHJvZ3Jlc3MudGFza05hbWV9PzwvcD5cbi8vICAgICAgICAgPGRpdiBpZD1cInZlcmlmaWNhdGlvbkJ1dHRvblwiIGNsYXNzTmFtZT1cImZsZXhCb3ggZmxleEp1c3RpZnlDZW50ZXJcIj5cbi8vICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibGlnaHRCYWNrZ3JvdW5kIGJyb3duIHRpbWVyQnV0dG9uIGhvdmVySXRlbVwiXG4vLyAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4vLyAgICAgICAgICAgICB2YWx1ZT1cIllFU1wiIFxuLy8gICAgICAgICAgICAgb25DbGljaz17KCk9PlxuLy8gICAgICAgICAgICAgICB1cGRhdGVUYXNrSW5Qcm9ncmVzcyh0cnVlKVxuLy8gICAgICAgICAgICAgfS8+XG4vLyAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImxpZ2h0QmFja2dyb3VuZCBicm93biB0aW1lckJ1dHRvbiBob3Zlckl0ZW1cIiBcbi8vICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbi8vICAgICAgICAgICAgIHZhbHVlPVwiTk9cIiBcbi8vICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5cbi8vICAgICAgICAgICAgICAgdXBkYXRlVGFza0luUHJvZ3Jlc3MoZmFsc2UpXG4vLyAgICAgICAgICAgICB9Lz5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuKFxuLy8gICAgIDxEaWFsb2dCb3ggaW5mb0ZpZWxkPXtjaGVja1Rhc2t9IC8+XG4vLyAgICk7XG4vLyB9Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJUaW1lQ29udGV4dCIsIlRhc2tDb21wbGV0aW9uIiwidGFza0xpc3QiLCJzZXRUYXNrTGlzdCIsInRhc2tJblByb2dyZXNzIiwic2V0VGFza0luUHJvZ3Jlc3MiLCJzZXRDeWNsZUNvbXBsZXRlIiwidCIsInRhc2tVcGRhdGUiLCJ0YXNrTGlzdFVwZGF0ZSIsInRhc2tDb21wbGV0aW9uIiwiY29tcGxldGUiLCJtYXAiLCJ0YXNrIiwia2V5IiwiY29uc29sZSIsImxvZyIsImFjdHVhbFRpbWUiLCJmaW5pc2hlZCIsInRhc2tOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/TaskCompletion.jsx\n"));

/***/ })

});