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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/components/Nav/index.js");
/* harmony import */ var _MobileButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileButton */ "./src/components/Nav/MobileButton.js");
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
        lineNumber: 7,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-light font-bold ml-2 text-2xl lg:text-4xl",
        children: "BabyShiba"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "space-x-8 hidden lg:block",
      children: ___WEBPACK_IMPORTED_MODULE_1__.MENUS.map(function (val, key) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#".concat(val.toLowerCase()),
          className: "text-2xl hover:text-light",
          children: val
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#airdrop",
        className: "text-light bg-white px-4 py-2 rounded-2xl font-bold inline-block text-2xl hover:bg-light border-2 border-white hover:border-light hover:bg-transparent hover:text-white transition-all",
        children: "Buy Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileButton__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L1RvcE5hdi5qcyJdLCJuYW1lcyI6WyJUb3BOYXYiLCJNRU5VUyIsInZhbCIsImtleSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixzQkFDRTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUMsV0FETjtBQUVFLFdBQUcsRUFBQyxFQUZOO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FO0FBQUssaUJBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBV0U7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSxnQkFDR0Msd0NBQUEsQ0FBVSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN2Qiw0QkFDRTtBQUVFLGNBQUksYUFBTUQsR0FBRyxDQUFDRSxXQUFKLEVBQU4sQ0FGTjtBQUdFLG1CQUFTLEVBQUMsMkJBSFo7QUFBQSxvQkFLR0Y7QUFMSCxXQUNPQyxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFTRCxPQVZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBd0JFO0FBQUssZUFBUyxFQUFDLEVBQWY7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsaUJBQVMsRUFBQyx3TEFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkYsZUFnQ0UsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9DRCxDQXJDRDs7S0FBTUgsTTtBQXVDTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45M2Y4MWNmNDZkODNjMDY5YWM5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTUVOVVMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IE1vYmlsZUJ1dHRvbiBmcm9tIFwiLi9Nb2JpbGVCdXR0b25cIjtcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IGJnLWxpZ2h0IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1saWdodCBmb250LWJvbGQgbWwtMiB0ZXh0LTJ4bCBsZzp0ZXh0LTR4bFwiPlxuICAgICAgICAgIEJhYnlTaGliYVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTggaGlkZGVuIGxnOmJsb2NrXCI+XG4gICAgICAgIHtNRU5VUy5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICBocmVmPXtgIyR7dmFsLnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgaG92ZXI6dGV4dC1saWdodFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt2YWx9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cIiNhaXJkcm9wXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0IGJnLXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLTJ4bCBmb250LWJvbGQgaW5saW5lLWJsb2NrIHRleHQtMnhsIGhvdmVyOmJnLWxpZ2h0IGJvcmRlci0yIGJvcmRlci13aGl0ZSBob3Zlcjpib3JkZXItbGlnaHQgaG92ZXI6YmctdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgID5cbiAgICAgICAgICBCdXkgTm93XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1vYmlsZUJ1dHRvbiAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==