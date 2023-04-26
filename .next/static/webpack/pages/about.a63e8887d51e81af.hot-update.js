"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_AnimatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/component/AnimatedText */ \"./src/component/AnimatedText.js\");\n/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/component/Layout */ \"./src/component/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_images_profile_myimage_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/profile/myimage.png */ \"./public/images/profile/myimage.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst NumberAnimation = (number)=>{\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // for making a refrence type (similar to pointer)\n    // Framer Motion Hooks\n    const motionValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue)(0); // to store initail or starting point\n    const springValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(motionValue, {\n        duration: 3000\n    }); // animation hook, where inital value and duration is passed\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView)(ref); //checks is that component in viewport\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (isInView) {\n            motionValue.set(number);\n        } //setting number to its final\n    }, [\n        isInView,\n        motionValue,\n        number\n    ]); // these are depandancies i.e any change happens to any of these then to execute this function\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        springValue.on(\"change\", (latest)=>{\n            if (ref.current && latest.toFixed(0) <= number) {\n                ref.current.text = latest.toFixed(0);\n            }\n        });\n    }, [\n        springValue,\n        number\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        ref: ref\n    }, void 0, false, {\n        fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, undefined);\n};\n_s(NumberAnimation, \"b8aj1/ahv2yZpM7Evi2PhhKh64k=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = NumberAnimation;\nconst about = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Ajay Kumar | About Page\"\n                    }, void 0, false, {\n                        fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"about\"\n                    }, void 0, false, {\n                        fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"fles w-full flex-col items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_AnimatedText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            text: \"Passion Fuels Purpose\"\n                        }, void 0, false, {\n                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row mt-5 p-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"basis-2/5 flex flex-col items-center justify-start mt-4 p-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"mb-4 text-lg font-bold uppercase text-dark/75\",\n                                            children: \"Biography\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \" Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \" I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-medium\",\n                                            children: \" Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" basis-2/5 flex  p-4 rounded-2xl border-2 border-solid border-dark\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                            src: _public_images_profile_myimage_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                            className: \"w-full h-max rounded-2xl\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"basis-1/5 flex flex-col items-center justify-around p-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-center justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-5xl font-bold\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NumberAnimation, {\n                                                            number: 42\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 67\n                                                        }, undefined),\n                                                        \"+\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \" Projects\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-center justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-5xl font-bold\",\n                                                    children: \"5+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \"Certificates\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-center justify-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"inline-block text-5xl font-bold\",\n                                                    children: \"6+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-medium capitalize text-dark/75\",\n                                                    children: \" Month's Experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ajay/Desktop/Work/portfolio/src/pages/about.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\nvar _c;\n$RefreshReg$(_c, \"NumberAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUU7QUFFQSwrREFBZU4sS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWJvdXQuanM/ZmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0ZWRUZXh0IGZyb20gJ0AvY29tcG9uZW50L0FuaW1hdGVkVGV4dCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50L0xheW91dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHtSZWFjdCx1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvcHJvZmlsZS9teWltYWdlLnBuZyc7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiwgdXNlSW5WaWV3LCB1c2VNb3Rpb25WYWx1ZSwgdXNlU3ByaW5nIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgTnVtYmVyQW5pbWF0aW9uID0gKG51bWJlcikgPT4ge1xuICBjb25zdCByZWYgPXVzZVJlZihudWxsKTsgLy8gZm9yIG1ha2luZyBhIHJlZnJlbmNlIHR5cGUgKHNpbWlsYXIgdG8gcG9pbnRlcilcblxuICAvLyBGcmFtZXIgTW90aW9uIEhvb2tzXG4gIGNvbnN0IG1vdGlvblZhbHVlID0gdXNlTW90aW9uVmFsdWUoMCk7IC8vIHRvIHN0b3JlIGluaXRhaWwgb3Igc3RhcnRpbmcgcG9pbnRcbiAgY29uc3Qgc3ByaW5nVmFsdWUgPSB1c2VTcHJpbmcobW90aW9uVmFsdWUse2R1cmF0aW9uOjMwMDB9KTsgLy8gYW5pbWF0aW9uIGhvb2ssIHdoZXJlIGluaXRhbCB2YWx1ZSBhbmQgZHVyYXRpb24gaXMgcGFzc2VkXG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZik7IC8vY2hlY2tzIGlzIHRoYXQgY29tcG9uZW50IGluIHZpZXdwb3J0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoaXNJblZpZXcpe1xuICAgICAgbW90aW9uVmFsdWUuc2V0KG51bWJlcik7XG4gICAgfS8vc2V0dGluZyBudW1iZXIgdG8gaXRzIGZpbmFsXG4gIH0sIFtpc0luVmlldywgbW90aW9uVmFsdWUsIG51bWJlcl0pOyAvLyB0aGVzZSBhcmUgZGVwYW5kYW5jaWVzIGkuZSBhbnkgY2hhbmdlIGhhcHBlbnMgdG8gYW55IG9mIHRoZXNlIHRoZW4gdG8gZXhlY3V0ZSB0aGlzIGZ1bmN0aW9uXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgc3ByaW5nVmFsdWUub24oXCJjaGFuZ2VcIiwgKGxhdGVzdCk9PntcbiAgICAgIGlmKHJlZi5jdXJyZW50ICYmIGxhdGVzdC50b0ZpeGVkKDApIDw9IG51bWJlcil7XG4gICAgICAgIHJlZi5jdXJyZW50LnRleHQgPSBsYXRlc3QudG9GaXhlZCgwKTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFtzcHJpbmdWYWx1ZSwgbnVtYmVyXSk7XG5cbiAgcmV0dXJuIDxzcGFuIHJlZj17cmVmfT48L3NwYW4+XG59O1xuXG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFqYXkgS3VtYXIgfCBBYm91dCBQYWdlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J2Fib3V0Jz48L21ldGE+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXMgdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPScnPlxuICAgICAgICAgIDxBbmltYXRlZFRleHQgdGV4dD0nUGFzc2lvbiBGdWVscyBQdXJwb3NlJz48L0FuaW1hdGVkVGV4dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBtdC01IHAtNSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFzaXMtMi81IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgbXQtNCBwLTQnPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYi00IHRleHQtbGcgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWRhcmsvNzUnPkJpb2dyYXBoeTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0nPiBIaSwgSSdtIENvZGVCdWNrcywgYSB3ZWIgZGV2ZWxvcGVyIGFuZCBVSS9VWCBkZXNpZ25lciB3aXRoIGEgcGFzc2lvbiBmb3IgY3JlYXRpbmcgYmVhdXRpZnVsLCBmdW5jdGlvbmFsLCBcbiAgICAgICAgICAgICAgICBhbmQgdXNlci1jZW50ZXJlZCBkaWdpdGFsIGV4cGVyaWVuY2VzLiBXaXRoIDQgeWVhcnMgb2YgZXhwZXJpZW5jZSBpbiB0aGUgZmllbGQuIEkgYW0gYWx3YXlzIGxvb2tpbmcgZm9yIFxuICAgICAgICAgICAgICAgIG5ldyBhbmQgaW5ub3ZhdGl2ZSB3YXlzIHRvIGJyaW5nIG15IGNsaWVudHMnIHZpc2lvbnMgdG8gbGlmZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtJz4gSSBiZWxpZXZlIHRoYXQgZGVzaWduIGlzIGFib3V0IG1vcmUgdGhhbiBqdXN0IG1ha2luZyB0aGluZ3MgbG9vayBwcmV0dHkg4oCTIGl0J3MgYWJvdXQgc29sdmluZyBwcm9ibGVtcyBhbmQgXG4gICAgICAgICAgICAgICAgY3JlYXRpbmcgaW50dWl0aXZlLCBlbmpveWFibGUgZXhwZXJpZW5jZXMgZm9yIHVzZXJzLiBcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtJz4gV2hldGhlciBJJ20gd29ya2luZyBvbiBhIHdlYnNpdGUsIG1vYmlsZSBhcHAsIG9yIFxuICAgICAgICAgICAgICAgIG90aGVyIGRpZ2l0YWwgcHJvZHVjdCwgSSBicmluZyBteSBjb21taXRtZW50IHRvIGRlc2lnbiBleGNlbGxlbmNlIGFuZCB1c2VyLWNlbnRlcmVkIHRoaW5raW5nIHRvIFxuICAgICAgICAgICAgICAgIGV2ZXJ5IHByb2plY3QgSSB3b3JrIG9uLiBJIGxvb2sgZm9yd2FyZCB0byB0aGUgb3Bwb3J0dW5pdHkgdG8gYnJpbmcgbXkgc2tpbGxzIGFuZCBwYXNzaW9uIHRvIHlvdXIgbmV4dCBwcm9qZWN0LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgYmFzaXMtMi81IGZsZXggIHAtNCByb3VuZGVkLTJ4bCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWRhcmsnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17UHJvZmlsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtbWF4IHJvdW5kZWQtMnhsXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYXNpcy0xLzUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgcC00Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB0ZXh0LTV4bCBmb250LWJvbGQnPjxOdW1iZXJBbmltYXRpb24gbnVtYmVyPXs0Mn0gLz4rPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQteGwgZm9udC1tZWRpdW0gY2FwaXRhbGl6ZSB0ZXh0LWRhcmsvNzUnPiBQcm9qZWN0czwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHRleHQtNXhsIGZvbnQtYm9sZCc+NSs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LW1lZGl1bSBjYXBpdGFsaXplIHRleHQtZGFyay83NSc+Q2VydGlmaWNhdGVzPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgdGV4dC01eGwgZm9udC1ib2xkJz42Kzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtbWVkaXVtIGNhcGl0YWxpemUgdGV4dC1kYXJrLzc1Jz4gTW9udGgncyBFeHBlcmllbmNlPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQiXSwibmFtZXMiOlsiQW5pbWF0ZWRUZXh0IiwiTGF5b3V0IiwiSGVhZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJJbWFnZSIsIlByb2ZpbGUiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VJblZpZXciLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZVNwcmluZyIsIk51bWJlckFuaW1hdGlvbiIsIm51bWJlciIsInJlZiIsIm1vdGlvblZhbHVlIiwic3ByaW5nVmFsdWUiLCJkdXJhdGlvbiIsImlzSW5WaWV3Iiwic2V0Iiwib24iLCJsYXRlc3QiLCJjdXJyZW50IiwidG9GaXhlZCIsInRleHQiLCJzcGFuIiwiYWJvdXQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiLCJiciIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});