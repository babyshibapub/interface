self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Nav/TopNav.js":
/*!**************************************!*\
  !*** ./src/components/Nav/TopNav.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kaliz/dev/tantranlee/babyshiba/src/components/Nav/TopNav.js",
    _this = undefined;

var TopNav = function TopNav() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex justify-between py-4 items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/logo.png",
        alt: "",
        className: "w-16 h-16 bg-light rounded-full"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-light font-bold ml-2 text-2xl lg:text-4xl",
        children: "BabyShiba"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "space-x-8 hidden lg:block",
      children: ["About", "Features", "Airdrop", "Roadmap"].map(function (val, key) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#".concat(val.toLowerCase()),
          className: "text-2xl hover:text-light",
          children: val
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#airdrop",
        className: "text-light bg-white px-4 py-2 rounded-2xl font-bold inline-block text-2xl hover:bg-light border-2 border-white hover:border-light hover:bg-transparent hover:text-white transition-all",
        children: "Buy Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileButton, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, _this);
};

_c = TopNav;
/* harmony default export */ __webpack_exports__["default"] = (TopNav);

var _c;

$RefreshReg$(_c, "TopNav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L1RvcE5hdi5qcyJdLCJuYW1lcyI6WyJUb3BOYXYiLCJtYXAiLCJ2YWwiLCJrZXkiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixzQkFDRTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUMsV0FETjtBQUVFLFdBQUcsRUFBQyxFQUZOO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FO0FBQUssaUJBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBV0U7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSxnQkFDRyw0Q0FBNENDLEdBQTVDLENBQWdELFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQzdELDRCQUNFO0FBRUUsY0FBSSxhQUFNRCxHQUFHLENBQUNFLFdBQUosRUFBTixDQUZOO0FBR0UsbUJBQVMsRUFBQywyQkFIWjtBQUFBLG9CQUtHRjtBQUxILFdBQ09DLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVNELE9BVkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUF3QkU7QUFBSyxlQUFTLEVBQUMsRUFBZjtBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxpQkFBUyxFQUFDLHdMQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRixlQWdDRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0FyQ0Q7O0tBQU1ILE07QUF1Q04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWJmNzBjNjVhZGU3YjE0ZDY3NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvcE5hdiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLWxpZ2h0IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodCBmb250LWJvbGQgbWwtMiB0ZXh0LTJ4bCBsZzp0ZXh0LTR4bFwiPlxuICAgICAgICAgIEJhYnlTaGliYVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTggaGlkZGVuIGxnOmJsb2NrXCI+XG4gICAgICAgIHtbYEFib3V0YCwgYEZlYXR1cmVzYCwgYEFpcmRyb3BgLCBgUm9hZG1hcGBdLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgIGhyZWY9e2AjJHt2YWwudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBob3Zlcjp0ZXh0LWxpZ2h0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3ZhbH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiI2FpcmRyb3BcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGlnaHQgYmctd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtMnhsIGZvbnQtYm9sZCBpbmxpbmUtYmxvY2sgdGV4dC0yeGwgaG92ZXI6YmctbGlnaHQgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIGhvdmVyOmJvcmRlci1saWdodCBob3ZlcjpiZy10cmFuc3BhcmVudCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgPlxuICAgICAgICAgIEJ1eSBOb3dcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8TW9iaWxlQnV0dG9uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9