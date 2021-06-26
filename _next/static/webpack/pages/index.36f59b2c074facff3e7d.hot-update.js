self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Countdown/Countdown.js":
/*!***********************************************!*\
  !*** ./src/components/Countdown/Countdown.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/kaliz/dev/tantranlee/babyshiba/src/components/Countdown/Countdown.js",
    _this = undefined;



var Item = function Item(_ref) {
  var text = _ref.text,
      value = _ref.value;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "text-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-4xl",
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text",
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = Item;

var renderer = function renderer(_ref2) {
  var completed = _ref2.completed,
      formatted = _ref2.formatted;
  var days = formatted.days,
      hours = formatted.hours,
      minutes = formatted.minutes,
      seconds = formatted.seconds;

  if (completed) {
    // Render a completed state
    return "PSC Added";
  } else {
    // Render a countdown
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex space-x-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
        text: "Days",
        value: days
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
        text: "Days",
        value: days
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
        text: "Days",
        value: days
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
        text: "Days",
        value: days
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this);
  }
};

var CountdownTime = function CountdownTime() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countdown__WEBPACK_IMPORTED_MODULE_1__.default, {
        date: Date.now() + 100000000,
        renderer: renderer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_c2 = CountdownTime;
/* harmony default export */ __webpack_exports__["default"] = (CountdownTime);

var _c, _c2;

$RefreshReg$(_c, "Item");
$RefreshReg$(_c2, "CountdownTime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6WyJJdGVtIiwidGV4dCIsInZhbHVlIiwicmVuZGVyZXIiLCJjb21wbGV0ZWQiLCJmb3JtYXR0ZWQiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIkNvdW50ZG93blRpbWUiLCJEYXRlIiwibm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBcUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2hDLHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsZ0JBQTJCQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsZ0JBQXVCRDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQVBEOztLQUFNRCxJOztBQVFOLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQThCO0FBQUEsTUFBM0JDLFNBQTJCLFNBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixTQUFoQkEsU0FBZ0I7QUFBQSxNQUNyQ0MsSUFEcUMsR0FDSEQsU0FERyxDQUNyQ0MsSUFEcUM7QUFBQSxNQUMvQkMsS0FEK0IsR0FDSEYsU0FERyxDQUMvQkUsS0FEK0I7QUFBQSxNQUN4QkMsT0FEd0IsR0FDSEgsU0FERyxDQUN4QkcsT0FEd0I7QUFBQSxNQUNmQyxPQURlLEdBQ0hKLFNBREcsQ0FDZkksT0FEZTs7QUFFN0MsTUFBSUwsU0FBSixFQUFlO0FBQ2I7QUFDQTtBQUNELEdBSEQsTUFHTztBQUNMO0FBQ0Esd0JBQ0U7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw4QkFDRSw4REFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFLE1BQVo7QUFBb0IsYUFBSyxFQUFFRTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFLE1BQVo7QUFBb0IsYUFBSyxFQUFFQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFLE1BQVo7QUFBb0IsYUFBSyxFQUFFQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRSw4REFBQyxJQUFEO0FBQU0sWUFBSSxFQUFFLE1BQVo7QUFBb0IsYUFBSyxFQUFFQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFRRDtBQUNGLENBaEJEOztBQWlCQSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEVBQWY7QUFBQSw2QkFDRSw4REFBQyxvREFBRDtBQUFXLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEtBQWEsU0FBOUI7QUFBeUMsZ0JBQVEsRUFBRVQ7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVJEOztNQUFNTyxhO0FBVU4sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzZmNTliMmMwNzRmYWNmZjNlN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3VudGRvd24gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xuY29uc3QgSXRlbSA9ICh7IHRleHQsIHZhbHVlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsXCI+e3ZhbHVlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3RleHR9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuY29uc3QgcmVuZGVyZXIgPSAoeyBjb21wbGV0ZWQsIGZvcm1hdHRlZCB9KSA9PiB7XG4gIGNvbnN0IHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSA9IGZvcm1hdHRlZDtcbiAgaWYgKGNvbXBsZXRlZCkge1xuICAgIC8vIFJlbmRlciBhIGNvbXBsZXRlZCBzdGF0ZVxuICAgIHJldHVybiBgUFNDIEFkZGVkYDtcbiAgfSBlbHNlIHtcbiAgICAvLyBSZW5kZXIgYSBjb3VudGRvd25cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtOFwiPlxuICAgICAgICA8SXRlbSB0ZXh0PXtcIkRheXNcIn0gdmFsdWU9e2RheXN9IC8+XG4gICAgICAgIDxJdGVtIHRleHQ9e1wiRGF5c1wifSB2YWx1ZT17ZGF5c30gLz5cbiAgICAgICAgPEl0ZW0gdGV4dD17XCJEYXlzXCJ9IHZhbHVlPXtkYXlzfSAvPlxuICAgICAgICA8SXRlbSB0ZXh0PXtcIkRheXNcIn0gdmFsdWU9e2RheXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuY29uc3QgQ291bnRkb3duVGltZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPENvdW50ZG93biBkYXRlPXtEYXRlLm5vdygpICsgMTAwMDAwMDAwfSByZW5kZXJlcj17cmVuZGVyZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9