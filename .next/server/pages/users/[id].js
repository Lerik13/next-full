/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./styles/User.module.scss":
/*!*********************************!*\
  !*** ./styles/User.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"user\": \"User_user__ZOKXA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvVXNlci5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZnVsbC8uL3N0eWxlcy9Vc2VyLm1vZHVsZS5zY3NzP2Y1MzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXNlclwiOiBcIlVzZXJfdXNlcl9fWk9LWEFcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/User.module.scss\n");

/***/ }),

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/User.module.scss */ \"./styles/User.module.scss\");\n/* harmony import */ var _styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ user  }) {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_User_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"User with id \",\n                    query.id\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\__WEB\\\\JS__Next.js\\\\1_ulbiTV\\\\next-full\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Username: \",\n                    user.name\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\__WEB\\\\JS__Next.js\\\\1_ulbiTV\\\\next-full\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\__WEB\\\\JS__Next.js\\\\1_ulbiTV\\\\next-full\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, this);\n}\nasync function getServerSideProps({ params  }) {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n    const user = await response.json();\n    return {\n        props: {\n            user\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNZO0FBRW5ELDZCQUFlLG9DQUFVLEVBQUVFLEtBQUksRUFBRSxFQUFFO0lBQ2xDLE1BQU0sRUFBQ0MsTUFBSyxFQUFDLEdBQUdILHNEQUFTQTtJQUV6QixxQkFDQyw4REFBQ0k7UUFBSUMsV0FBV0osc0VBQVc7OzBCQUMxQiw4REFBQ0s7O29CQUFHO29CQUFjSCxNQUFNSSxFQUFFOzs7Ozs7OzBCQUMxQiw4REFBQ0g7O29CQUFJO29CQUFXRixLQUFLTSxJQUFJOzs7Ozs7Ozs7Ozs7O0FBRzVCLENBQUM7QUFFTSxlQUFlQyxtQkFBbUIsRUFBRUMsT0FBTSxFQUFFLEVBQUU7SUFDcEQsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsMkNBQTJDLEVBQUVGLE9BQU9ILEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLE1BQU1MLE9BQU8sTUFBTVMsU0FBU0UsSUFBSTtJQUVoQyxPQUFPO1FBQ05DLE9BQU87WUFBQ1o7UUFBSTtJQUNiO0FBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZnVsbC8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Vc2VyLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IHVzZXIgfSkge1xyXG5cdGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cclxuXHRcdFx0PGgxPlVzZXIgd2l0aCBpZCB7cXVlcnkuaWR9PC9oMT5cclxuXHRcdFx0PGRpdj5Vc2VybmFtZToge3VzZXIubmFtZX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7cGFyYW1zLmlkfWApXHJcblx0Y29uc3QgdXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cdFxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge3VzZXJ9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuXHR9XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGVzIiwidXNlciIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpZCIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();