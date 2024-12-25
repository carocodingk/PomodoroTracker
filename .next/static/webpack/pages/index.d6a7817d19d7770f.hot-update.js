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

/***/ "./src/pages/components/TaskManager.jsx":
/*!**********************************************!*\
  !*** ./src/pages/components/TaskManager.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserContext */ \"./src/pages/components/UserContext.jsx\");\n/* harmony import */ var _NewTaskBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewTaskBar */ \"./src/pages/components/NewTaskBar.jsx\");\n/* harmony import */ var _TaskCompletion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskCompletion */ \"./src/pages/components/TaskCompletion.jsx\");\n/* harmony import */ var _TaskEdition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskEdition */ \"./src/pages/components/TaskEdition.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import TaskListLabels fr om \"./TaskListLabels\";\nconst initialTasks = [\n    {\n        key: 0,\n        taskName: \"Meal Prep\",\n        expectedCycles: 3,\n        actualTime: 3700,\n        finished: true\n    },\n    {\n        key: 1,\n        taskName: \"Grocery shopping\",\n        expectedCycles: 2,\n        actualTime: 0,\n        finished: false\n    },\n    {\n        key: 2,\n        taskName: \"Grocery shopping1\",\n        expectedCycles: 2,\n        actualTime: 0,\n        finished: false\n    },\n    {\n        key: 3,\n        taskName: \"Grocery shopping2\",\n        expectedCycles: 2,\n        actualTime: 0,\n        finished: true\n    }\n];\nfunction TaskManager(param) {\n    let { cycleComplete, setCycleComplete, openMenu, setOpenMenu } = param;\n    _s();\n    const t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const [nextTaskKey, setNextTaskKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4) //Tracks the key for the next new task\n    ;\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTasks);\n    const [menuRequest, setMenuRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1) //Tracks who has requested the menu for edit/delete(nobody)\n    ;\n    const [editTask, setEditTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false) //tracks if an edit request has been made\n    ;\n    const [taskSelected, setTaskSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const selectTask = (task)=>{\n        // console.log('initial value ', [t.taskInProgress.key, t.taskInProgress.taskName] )\n        if (!task.finished) {\n            t.setTaskInProgress({\n                key: task.key,\n                taskName: task.taskName\n            });\n        }\n    };\n    const timeProcessing = (time)=>{\n        const hoursW = Math.floor(time / 3600);\n        const minutesW = Math.floor((time - hoursW * 3600) / 60);\n        const secondsW = (time - hoursW * 3600) % 60;\n        const output = \"\\n      \".concat(hoursW < 10 ? \"0\".concat(hoursW) : hoursW, \"h\\n      \").concat(minutesW < 10 ? \"0\".concat(minutesW) : minutesW, \"m\\n      \").concat(secondsW < 10 ? \"0\".concat(secondsW) : secondsW, \"s\");\n        return output;\n    };\n    const deleteTask = (key)=>{\n        let taskListUpdate = taskList.filter((task)=>task.key !== key);\n        setTaskList(taskListUpdate);\n    };\n    const menuVisibility = (task)=>{\n        if (!openMenu) {\n            setMenuRequest(task.key);\n        // setOpenMenu(true)\n        }\n    };\n    const editingTask = (task)=>{\n        setEditTask(true);\n        setMenuRequest(-1) //resets selection of task\n        ;\n        setTaskSelected(task);\n    // return(\n    //   <TaskEdition taskSelected={task} taskList={taskList} setTaskList={setTaskList} setEditTask={setEditTask} />\n    // )\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flexBox flexColumn flexJustifySpaceAround\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                id: \"taskManager\",\n                children: taskList.map((task, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"taskItem flexBox flexJustifySpaceBetween\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flexBox flexAlignItemBaseline\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"checked\",\n                                                    type: \"checkbox\",\n                                                    checked: task.finished\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"taskItemButton taskItemDesc taskDescription\",\n                                                    onClick: ()=>selectTask(task),\n                                                    children: task.taskName\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flexBox flexAlignItemBaseline\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"taskStats\",\n                                                    children: task.expectedCycles\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"taskStats\",\n                                                    children: timeProcessing(task.actualTime)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"taskItemButton\",\n                                                        type: \"button\",\n                                                        value: \"More\",\n                                                        onClick: ()=>menuVisibility(task)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                menuRequest === task.key ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"posAbsoluteTop flexBox flexColumn flexJustifyCenter modalBox\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"dialogBox\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"boxTitle centerText\",\n                                                    children: \"Please select one of the options: \"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flexBox flexJustifyCenter\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            className: \"timerButton hoverItem\",\n                                                            type: \"button\",\n                                                            value: \"Edit task\",\n                                                            onClick: ()=>editingTask(task)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            className: \"timerButton hoverItem\",\n                                                            type: \"button\",\n                                                            value: \"Delete task\",\n                                                            onClick: ()=>deleteTask(task.key)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                            lineNumber: 92,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            className: \"timerButton hoverItem\",\n                                                            type: \"button\",\n                                                            value: \"Cancel\",\n                                                            onClick: ()=>setMenuRequest(-1)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                            lineNumber: 93,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewTaskBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nextTaskKey: nextTaskKey,\n                setNextTaskKey: setNextTaskKey,\n                setTaskList: setTaskList\n            }, void 0, false, {\n                fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            cycleComplete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskCompletion__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                taskList: taskList,\n                setTaskList: setTaskList,\n                taskInProgress: t.taskInProgress,\n                setTaskInProgress: t.setTaskInProgress,\n                setCycleComplete: setCycleComplete\n            }, void 0, false, {\n                fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this),\n            editTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskEdition__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                taskSelected: taskSelected,\n                taskList: taskList,\n                setTaskList: setTaskList,\n                setEditTask: setEditTask\n            }, void 0, false, {\n                fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/supermoon/Projects/PomodoroTracker/src/pages/components/TaskManager.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskManager, \"e+kxQ1gE8C/fEWOYRfvO/BJz1Vg=\");\n_c = TaskManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskManager);\nvar _c;\n$RefreshReg$(_c, \"TaskManager\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQixtREFBVUE7Z0JBQUNlLGFBQWFBO2dCQUFhQyxnQkFBZ0JBO2dCQUFnQkUsYUFBYUE7Ozs7OztZQUNsRlIsK0JBQ0MsOERBQUNULHVEQUFjQTtnQkFDYmdCLFVBQVVBO2dCQUNWQyxhQUFhQTtnQkFDYm9DLGdCQUFnQnhDLEVBQUV3QyxjQUFjO2dCQUNoQzNCLG1CQUFtQmIsRUFBRWEsaUJBQWlCO2dCQUN0Q2hCLGtCQUFrQkE7Ozs7OztZQUVyQlUsMEJBQ0MsOERBQUNuQixvREFBV0E7Z0JBQ1ZxQixjQUFjQTtnQkFDZE4sVUFBVUE7Z0JBQ1ZDLGFBQWFBO2dCQUNiSSxhQUFhQTs7Ozs7Ozs7Ozs7O0FBSXZCO0dBN0dTYjtLQUFBQTtBQStHVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9UYXNrTWFuYWdlci5qc3g/OThlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gXCIuL1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgTmV3VGFza0JhciBmcm9tIFwiLi9OZXdUYXNrQmFyXCI7XG5pbXBvcnQgVGFza0NvbXBsZXRpb24gZnJvbSBcIi4vVGFza0NvbXBsZXRpb25cIlxuaW1wb3J0IFRhc2tFZGl0aW9uIGZyb20gXCIuL1Rhc2tFZGl0aW9uXCI7XG4vLyBpbXBvcnQgVGFza0xpc3RMYWJlbHMgZnIgb20gXCIuL1Rhc2tMaXN0TGFiZWxzXCI7XG5cbmNvbnN0IGluaXRpYWxUYXNrcyA9IFt7a2V5OiAwLCB0YXNrTmFtZTogJ01lYWwgUHJlcCcsIGV4cGVjdGVkQ3ljbGVzOiAzLCBhY3R1YWxUaW1lOiAzNzAwLCBmaW5pc2hlZDogdHJ1ZX0sIFxuICAgICAgICAgICAgICAgICAgICAgIHtrZXk6IDEsIHRhc2tOYW1lOiAnR3JvY2VyeSBzaG9wcGluZycsIGV4cGVjdGVkQ3ljbGVzOiAyLCBhY3R1YWxUaW1lOiAwLCBmaW5pc2hlZDogZmFsc2V9LFxuICAgICAgICAgICAgICAgICAgICAgIHtrZXk6IDIsIHRhc2tOYW1lOiAnR3JvY2VyeSBzaG9wcGluZzEnLCBleHBlY3RlZEN5Y2xlczogMiwgYWN0dWFsVGltZTogMCwgZmluaXNoZWQ6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICAgICAgICB7a2V5OiAzLCB0YXNrTmFtZTogJ0dyb2Nlcnkgc2hvcHBpbmcyJywgZXhwZWN0ZWRDeWNsZXM6IDIsIGFjdHVhbFRpbWU6IDAsIGZpbmlzaGVkOiB0cnVlfSwgIFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG5mdW5jdGlvbiBUYXNrTWFuYWdlcih7Y3ljbGVDb21wbGV0ZSwgc2V0Q3ljbGVDb21wbGV0ZSwgb3Blbk1lbnUsIHNldE9wZW5NZW51fSl7XG4gIGNvbnN0IHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxuICBjb25zdCBbbmV4dFRhc2tLZXksIHNldE5leHRUYXNrS2V5XSA9IHVzZVN0YXRlKDQpIC8vVHJhY2tzIHRoZSBrZXkgZm9yIHRoZSBuZXh0IG5ldyB0YXNrXG4gIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoaW5pdGlhbFRhc2tzKVxuICBjb25zdCBbbWVudVJlcXVlc3QsIHNldE1lbnVSZXF1ZXN0XSA9IHVzZVN0YXRlKC0xKSAvL1RyYWNrcyB3aG8gaGFzIHJlcXVlc3RlZCB0aGUgbWVudSBmb3IgZWRpdC9kZWxldGUobm9ib2R5KVxuICBjb25zdCBbZWRpdFRhc2ssIHNldEVkaXRUYXNrXSA9IHVzZVN0YXRlKGZhbHNlKSAvL3RyYWNrcyBpZiBhbiBlZGl0IHJlcXVlc3QgaGFzIGJlZW4gbWFkZVxuICBjb25zdCBbdGFza1NlbGVjdGVkLCBzZXRUYXNrU2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBzZWxlY3RUYXNrID0gKHRhc2spID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5pdGlhbCB2YWx1ZSAnLCBbdC50YXNrSW5Qcm9ncmVzcy5rZXksIHQudGFza0luUHJvZ3Jlc3MudGFza05hbWVdIClcbiAgICBpZiAoIXRhc2suZmluaXNoZWQpeyAvL1Rhc2sgaXMgbm90IGZpbmlzaGVkXG4gICAgICB0LnNldFRhc2tJblByb2dyZXNzKHtcbiAgICAgICAga2V5OiB0YXNrLmtleSwgXG4gICAgICAgIHRhc2tOYW1lOiB0YXNrLnRhc2tOYW1lXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRpbWVQcm9jZXNzaW5nID0gKHRpbWUpID0+IHtcbiAgICBjb25zdCBob3Vyc1cgPSBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKVxuICAgIGNvbnN0IG1pbnV0ZXNXID0gTWF0aC5mbG9vcigodGltZSAtIGhvdXJzVyAqIDM2MDApIC8gNjApXG4gICAgY29uc3Qgc2Vjb25kc1cgPSAodGltZSAtIGhvdXJzVyAqIDM2MDApICUgNjBcbiAgICBjb25zdCBvdXRwdXQgPSBgXG4gICAgICAke2hvdXJzVyA8IDEwPyBgMCR7aG91cnNXfWAgOiBob3Vyc1d9aFxuICAgICAgJHttaW51dGVzVyA8IDEwPyBgMCR7bWludXRlc1d9YCA6IG1pbnV0ZXNXfW1cbiAgICAgICR7c2Vjb25kc1cgPCAxMD8gYDAke3NlY29uZHNXfWAgOiBzZWNvbmRzV31zYFxuICAgIHJldHVybihcbiAgICAgIG91dHB1dFxuICAgICk7XG4gIH1cblxuICBjb25zdCBkZWxldGVUYXNrID0gKGtleSkgPT4ge1xuICAgIGxldCB0YXNrTGlzdFVwZGF0ZSA9IHRhc2tMaXN0LmZpbHRlcigodGFzaykgPT4gKHRhc2sua2V5ICE9PSBrZXkpKVxuICAgIHNldFRhc2tMaXN0KHRhc2tMaXN0VXBkYXRlKVxuICB9XG5cbiAgY29uc3QgbWVudVZpc2liaWxpdHkgPSAodGFzaykgPT4ge1xuICAgIGlmICghb3Blbk1lbnUpe1xuICAgICAgc2V0TWVudVJlcXVlc3QodGFzay5rZXkpXG4gICAgICAvLyBzZXRPcGVuTWVudSh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVkaXRpbmdUYXNrID0gKHRhc2spID0+IHtcbiAgICBzZXRFZGl0VGFzayh0cnVlKVxuICAgIHNldE1lbnVSZXF1ZXN0KC0xKSAvL3Jlc2V0cyBzZWxlY3Rpb24gb2YgdGFza1xuICAgIHNldFRhc2tTZWxlY3RlZCh0YXNrKVxuICAgIC8vIHJldHVybihcbiAgICAvLyAgIDxUYXNrRWRpdGlvbiB0YXNrU2VsZWN0ZWQ9e3Rhc2t9IHRhc2tMaXN0PXt0YXNrTGlzdH0gc2V0VGFza0xpc3Q9e3NldFRhc2tMaXN0fSBzZXRFZGl0VGFzaz17c2V0RWRpdFRhc2t9IC8+XG4gICAgLy8gKVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEJveCBmbGV4Q29sdW1uIGZsZXhKdXN0aWZ5U3BhY2VBcm91bmRcIj5cbiAgICAgIDx1bCBpZD1cInRhc2tNYW5hZ2VyXCI+XG4gICAgICAgIHt0YXNrTGlzdC5tYXAoKHRhc2ssIGtleSkgPT4gXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrSXRlbSBmbGV4Qm94IGZsZXhKdXN0aWZ5U3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Qm94IGZsZXhBbGlnbkl0ZW1CYXNlbGluZVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nY2hlY2tlZCcgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGFzay5maW5pc2hlZH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrSXRlbUJ1dHRvbiB0YXNrSXRlbURlc2MgdGFza0Rlc2NyaXB0aW9uJyBvbkNsaWNrPXsoKT0+IHNlbGVjdFRhc2sodGFzayl9Pnt0YXNrLnRhc2tOYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEJveCBmbGV4QWxpZ25JdGVtQmFzZWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhc2tTdGF0c1wiPnt0YXNrLmV4cGVjdGVkQ3ljbGVzfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRhc2tTdGF0c1wiPnt0aW1lUHJvY2Vzc2luZyh0YXNrLmFjdHVhbFRpbWUpfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3Rhc2tJdGVtQnV0dG9uJyB0eXBlPSdidXR0b24nIHZhbHVlPSdNb3JlJyBvbkNsaWNrPXsoKT0+bWVudVZpc2liaWxpdHkodGFzayl9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsobWVudVJlcXVlc3QgPT09IHRhc2sua2V5KT9cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc0Fic29sdXRlVG9wIGZsZXhCb3ggZmxleENvbHVtbiBmbGV4SnVzdGlmeUNlbnRlciBtb2RhbEJveFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2dCb3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJveFRpdGxlIGNlbnRlclRleHRcIj5QbGVhc2Ugc2VsZWN0IG9uZSBvZiB0aGUgb3B0aW9uczogPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Qm94IGZsZXhKdXN0aWZ5Q2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpbWVyQnV0dG9uIGhvdmVySXRlbVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT0nRWRpdCB0YXNrJyBvbkNsaWNrPXsoKT0+ZWRpdGluZ1Rhc2sodGFzayl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpbWVyQnV0dG9uIGhvdmVySXRlbVwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT0nRGVsZXRlIHRhc2snIG9uQ2xpY2s9eygpPT5kZWxldGVUYXNrKHRhc2sua2V5KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGltZXJCdXR0b24gaG92ZXJJdGVtXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPSdDYW5jZWwnIG9uQ2xpY2s9eygpPT5zZXRNZW51UmVxdWVzdCgtMSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgICAgPE5ld1Rhc2tCYXIgbmV4dFRhc2tLZXk9e25leHRUYXNrS2V5fSBzZXROZXh0VGFza0tleT17c2V0TmV4dFRhc2tLZXl9IHNldFRhc2tMaXN0PXtzZXRUYXNrTGlzdH0gLz5cbiAgICAgIHtjeWNsZUNvbXBsZXRlICYmIFxuICAgICAgICA8VGFza0NvbXBsZXRpb25cbiAgICAgICAgICB0YXNrTGlzdD17dGFza0xpc3R9XG4gICAgICAgICAgc2V0VGFza0xpc3Q9e3NldFRhc2tMaXN0fVxuICAgICAgICAgIHRhc2tJblByb2dyZXNzPXt0LnRhc2tJblByb2dyZXNzfVxuICAgICAgICAgIHNldFRhc2tJblByb2dyZXNzPXt0LnNldFRhc2tJblByb2dyZXNzfVxuICAgICAgICAgIHNldEN5Y2xlQ29tcGxldGU9e3NldEN5Y2xlQ29tcGxldGV9XG4gICAgICAvPn1cbiAgICAgIHtlZGl0VGFzayAmJlxuICAgICAgICA8VGFza0VkaXRpb24gXG4gICAgICAgICAgdGFza1NlbGVjdGVkPXt0YXNrU2VsZWN0ZWR9IFxuICAgICAgICAgIHRhc2tMaXN0PXt0YXNrTGlzdH0gXG4gICAgICAgICAgc2V0VGFza0xpc3Q9e3NldFRhc2tMaXN0fSBcbiAgICAgICAgICBzZXRFZGl0VGFzaz17c2V0RWRpdFRhc2t9IFxuICAgICAgLz59XG4gICAgPC9kaXY+XG4gICkgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tNYW5hZ2VyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIk5ld1Rhc2tCYXIiLCJUYXNrQ29tcGxldGlvbiIsIlRhc2tFZGl0aW9uIiwiaW5pdGlhbFRhc2tzIiwia2V5IiwidGFza05hbWUiLCJleHBlY3RlZEN5Y2xlcyIsImFjdHVhbFRpbWUiLCJmaW5pc2hlZCIsIlRhc2tNYW5hZ2VyIiwiY3ljbGVDb21wbGV0ZSIsInNldEN5Y2xlQ29tcGxldGUiLCJvcGVuTWVudSIsInNldE9wZW5NZW51IiwidCIsIm5leHRUYXNrS2V5Iiwic2V0TmV4dFRhc2tLZXkiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwibWVudVJlcXVlc3QiLCJzZXRNZW51UmVxdWVzdCIsImVkaXRUYXNrIiwic2V0RWRpdFRhc2siLCJ0YXNrU2VsZWN0ZWQiLCJzZXRUYXNrU2VsZWN0ZWQiLCJzZWxlY3RUYXNrIiwidGFzayIsInNldFRhc2tJblByb2dyZXNzIiwidGltZVByb2Nlc3NpbmciLCJ0aW1lIiwiaG91cnNXIiwiTWF0aCIsImZsb29yIiwibWludXRlc1ciLCJzZWNvbmRzVyIsIm91dHB1dCIsImRlbGV0ZVRhc2siLCJ0YXNrTGlzdFVwZGF0ZSIsImZpbHRlciIsIm1lbnVWaXNpYmlsaXR5IiwiZWRpdGluZ1Rhc2siLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImlkIiwibWFwIiwibGkiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DbGljayIsInAiLCJ2YWx1ZSIsImgzIiwidGFza0luUHJvZ3Jlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/TaskManager.jsx\n"));

/***/ })

});