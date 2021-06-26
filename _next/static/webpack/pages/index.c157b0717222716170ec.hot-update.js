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
      className: "text-5xl text-light font-bold",
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-xl text-gray-400",
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
      className: "flex space-x-8 justify-center",
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
    className: "mb-8",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6WyJJdGVtIiwidGV4dCIsInZhbHVlIiwicmVuZGVyZXIiLCJjb21wbGV0ZWQiLCJmb3JtYXR0ZWQiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIkNvdW50ZG93blRpbWUiLCJEYXRlIiwibm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBcUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2hDLHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLGdCQUFnREE7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSxnQkFBd0NEO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBUEQ7O0tBQU1ELEk7O0FBUU4sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBOEI7QUFBQSxNQUEzQkMsU0FBMkIsU0FBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFNBQWhCQSxTQUFnQjtBQUFBLE1BQ3JDQyxJQURxQyxHQUNIRCxTQURHLENBQ3JDQyxJQURxQztBQUFBLE1BQy9CQyxLQUQrQixHQUNIRixTQURHLENBQy9CRSxLQUQrQjtBQUFBLE1BQ3hCQyxPQUR3QixHQUNISCxTQURHLENBQ3hCRyxPQUR3QjtBQUFBLE1BQ2ZDLE9BRGUsR0FDSEosU0FERyxDQUNmSSxPQURlOztBQUU3QyxNQUFJTCxTQUFKLEVBQWU7QUFDYjtBQUNBO0FBQ0QsR0FIRCxNQUdPO0FBQ0w7QUFDQSx3QkFDRTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLDhCQUNFLDhEQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUUsTUFBWjtBQUFvQixhQUFLLEVBQUVFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUUsTUFBWjtBQUFvQixhQUFLLEVBQUVBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLDhEQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUUsTUFBWjtBQUFvQixhQUFLLEVBQUVBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFLDhEQUFDLElBQUQ7QUFBTSxZQUFJLEVBQUUsTUFBWjtBQUFvQixhQUFLLEVBQUVBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVFEO0FBQ0YsQ0FoQkQ7O0FBaUJBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsRUFBZjtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQVcsWUFBSSxFQUFFQyxJQUFJLENBQUNDLEdBQUwsS0FBYSxTQUE5QjtBQUF5QyxnQkFBUSxFQUFFVDtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O01BQU1PLGE7QUFVTiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMTU3YjA3MTcyMjI3MTYxNzBlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50ZG93biBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XG5jb25zdCBJdGVtID0gKHsgdGV4dCwgdmFsdWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1saWdodCBmb250LWJvbGRcIj57dmFsdWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTQwMFwiPnt0ZXh0fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmNvbnN0IHJlbmRlcmVyID0gKHsgY29tcGxldGVkLCBmb3JtYXR0ZWQgfSkgPT4ge1xuICBjb25zdCB7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0gPSBmb3JtYXR0ZWQ7XG4gIGlmIChjb21wbGV0ZWQpIHtcbiAgICAvLyBSZW5kZXIgYSBjb21wbGV0ZWQgc3RhdGVcbiAgICByZXR1cm4gYFBTQyBBZGRlZGA7XG4gIH0gZWxzZSB7XG4gICAgLy8gUmVuZGVyIGEgY291bnRkb3duXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPEl0ZW0gdGV4dD17XCJEYXlzXCJ9IHZhbHVlPXtkYXlzfSAvPlxuICAgICAgICA8SXRlbSB0ZXh0PXtcIkRheXNcIn0gdmFsdWU9e2RheXN9IC8+XG4gICAgICAgIDxJdGVtIHRleHQ9e1wiRGF5c1wifSB2YWx1ZT17ZGF5c30gLz5cbiAgICAgICAgPEl0ZW0gdGV4dD17XCJEYXlzXCJ9IHZhbHVlPXtkYXlzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcbmNvbnN0IENvdW50ZG93blRpbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8Q291bnRkb3duIGRhdGU9e0RhdGUubm93KCkgKyAxMDAwMDAwMDB9IHJlbmRlcmVyPXtyZW5kZXJlcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duVGltZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=