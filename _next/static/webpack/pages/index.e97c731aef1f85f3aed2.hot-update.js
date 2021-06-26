self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Nav/MobileButton.js":
/*!********************************************!*\
  !*** ./src/components/Nav/MobileButton.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/components/Nav/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/kaliz/dev/tantranlee/babyshiba/src/components/Nav/MobileButton.js",
    _this = undefined,
    _s = $RefreshSig$();




var button1Variants = {
  show: {
    rotate: -45
  },
  hide: {
    rotate: 0
  }
};
var button2Variants = {
  show: {
    rotate: 45
  },
  hide: {
    rotate: 0
  }
};
var button3Variants = {
  show: {
    opacity: 0
  },
  hide: {
    opacity: 1
  }
};

var MobileButton = function MobileButton() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      show = _useState[0],
      setShow = _useState[1];

  var handleOnClick = function handleOnClick() {
    setShow(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: function onClick() {
        return setShow(!show);
      },
      className: "fixed px-2 py-2 top-0 right-0 mt-4 mr-4 xl:hidden",
      style: {
        zIndex: 10000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: show ? "show" : "hide",
        variants: button1Variants,
        className: "mb-1 h-1 w-6 rounded bg-gradient-to-br from-pink-500 via-purple-700 to-cyan-500 transform origin-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: show ? "show" : "hide",
        variants: button3Variants,
        className: "mb-1 h-1 w-6 rounded bg-gradient-to-br from-pink-500 via-purple-700 to-cyan-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: show ? "show" : "hide",
        variants: button2Variants,
        className: "mb-1 h-1 w-6 rounded bg-gradient-to-br from-pink-500 via-purple-700 to-cyan-500 transform origin-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), show && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fixed inset-0 z-50 px-4 py-4 flex items-center justify-center bg-primary flex-wrap",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: {
          y: 0
        },
        initial: {
          y: 30
        },
        className: "",
        onClick: handleOnClick,
        children: ___WEBPACK_IMPORTED_MODULE_2__.MENUS.map(function (val, key) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "text-gray-300 block text-xl px-4 py-2 text-center mb-4 last:mb-0 border rounded-full border-".concat(val.c, "-400 "),
            children: val.n
          }, key, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(MobileButton, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");

_c = MobileButton;
/* harmony default export */ __webpack_exports__["default"] = (MobileButton);

var _c;

$RefreshReg$(_c, "MobileButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L01vYmlsZUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJidXR0b24xVmFyaWFudHMiLCJzaG93Iiwicm90YXRlIiwiaGlkZSIsImJ1dHRvbjJWYXJpYW50cyIsImJ1dHRvbjNWYXJpYW50cyIsIm9wYWNpdHkiLCJNb2JpbGVCdXR0b24iLCJ1c2VTdGF0ZSIsInNldFNob3ciLCJoYW5kbGVPbkNsaWNrIiwiekluZGV4IiwieSIsIk1FTlVTIiwidmFsIiwia2V5IiwiYyIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxDQUFDO0FBREwsR0FEZ0I7QUFJdEJDLE1BQUksRUFBRTtBQUNKRCxVQUFNLEVBQUU7QUFESjtBQUpnQixDQUF4QjtBQVFBLElBQU1FLGVBQWUsR0FBRztBQUN0QkgsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRTtBQURKLEdBRGdCO0FBSXRCQyxNQUFJLEVBQUU7QUFDSkQsVUFBTSxFQUFFO0FBREo7QUFKZ0IsQ0FBeEI7QUFRQSxJQUFNRyxlQUFlLEdBQUc7QUFDdEJKLE1BQUksRUFBRTtBQUNKSyxXQUFPLEVBQUU7QUFETCxHQURnQjtBQUl0QkgsTUFBSSxFQUFFO0FBQ0pHLFdBQU8sRUFBRTtBQURMO0FBSmdCLENBQXhCOztBQVFBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUNsQlAsSUFEa0I7QUFBQSxNQUNaUSxPQURZOztBQUV6QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJELFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUFNQSxPQUFPLENBQUMsQ0FBQ1IsSUFBRixDQUFiO0FBQUEsT0FEWDtBQUVFLGVBQVMsRUFBQyxtREFGWjtBQUdFLFdBQUssRUFBRTtBQUFFVSxjQUFNLEVBQUU7QUFBVixPQUhUO0FBQUEsOEJBS0UsOERBQUMscURBQUQ7QUFDRSxlQUFPLEVBQUVWLElBQUksR0FBRyxNQUFILEdBQVksTUFEM0I7QUFFRSxnQkFBUSxFQUFFRCxlQUZaO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQVVFLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFQyxJQUFJLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBRUUsZ0JBQVEsRUFBRUksZUFGWjtBQUdFLGlCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFlRSw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBRUosSUFBSSxHQUFHLE1BQUgsR0FBWSxNQUQzQjtBQUVFLGdCQUFRLEVBQUVHLGVBRlo7QUFHRSxpQkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBc0JHSCxJQUFJLGlCQUNIO0FBQ0UsZUFBUyxzRkFEWDtBQUFBLDZCQUdFLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFO0FBQ1BXLFdBQUMsRUFBRTtBQURJLFNBRFg7QUFJRSxlQUFPLEVBQUU7QUFDUEEsV0FBQyxFQUFFO0FBREksU0FKWDtBQU9FLGlCQUFTLEVBQUMsRUFQWjtBQVFFLGVBQU8sRUFBRUYsYUFSWDtBQUFBLGtCQVVHRyx3Q0FBQSxDQUFVLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3ZCLDhCQUNFO0FBRUUscUJBQVMsd0dBQWlHRCxHQUFHLENBQUNFLENBQXJHLFVBRlg7QUFBQSxzQkFJR0YsR0FBRyxDQUFDRztBQUpQLGFBQ09GLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVFELFNBVEE7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCSjtBQUFBLGtCQURGO0FBb0RELENBekREOztHQUFNUixZOztLQUFBQSxZO0FBMEROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5N2M3MzFhZWYxZjg1ZjNhZWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IE1FTlVTIH0gZnJvbSBcIi5cIjtcbmNvbnN0IGJ1dHRvbjFWYXJpYW50cyA9IHtcbiAgc2hvdzoge1xuICAgIHJvdGF0ZTogLTQ1LFxuICB9LFxuICBoaWRlOiB7XG4gICAgcm90YXRlOiAwLFxuICB9LFxufTtcbmNvbnN0IGJ1dHRvbjJWYXJpYW50cyA9IHtcbiAgc2hvdzoge1xuICAgIHJvdGF0ZTogNDUsXG4gIH0sXG4gIGhpZGU6IHtcbiAgICByb3RhdGU6IDAsXG4gIH0sXG59O1xuY29uc3QgYnV0dG9uM1ZhcmlhbnRzID0ge1xuICBzaG93OiB7XG4gICAgb3BhY2l0eTogMCxcbiAgfSxcbiAgaGlkZToge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59O1xuY29uc3QgTW9iaWxlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0U2hvdyhmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHB4LTIgcHktMiB0b3AtMCByaWdodC0wIG10LTQgbXItNCB4bDpoaWRkZW5cIlxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDEwMDAwIH19XG4gICAgICA+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgYW5pbWF0ZT17c2hvdyA/IFwic2hvd1wiIDogXCJoaWRlXCJ9XG4gICAgICAgICAgdmFyaWFudHM9e2J1dHRvbjFWYXJpYW50c31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIGgtMSB3LTYgcm91bmRlZCBiZy1ncmFkaWVudC10by1iciBmcm9tLXBpbmstNTAwIHZpYS1wdXJwbGUtNzAwIHRvLWN5YW4tNTAwIHRyYW5zZm9ybSBvcmlnaW4tcmlnaHRcIlxuICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGFuaW1hdGU9e3Nob3cgPyBcInNob3dcIiA6IFwiaGlkZVwifVxuICAgICAgICAgIHZhcmlhbnRzPXtidXR0b24zVmFyaWFudHN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMSBoLTEgdy02IHJvdW5kZWQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1waW5rLTUwMCB2aWEtcHVycGxlLTcwMCB0by1jeWFuLTUwMFwiXG4gICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgYW5pbWF0ZT17c2hvdyA/IFwic2hvd1wiIDogXCJoaWRlXCJ9XG4gICAgICAgICAgdmFyaWFudHM9e2J1dHRvbjJWYXJpYW50c31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIGgtMSB3LTYgcm91bmRlZCBiZy1ncmFkaWVudC10by1iciBmcm9tLXBpbmstNTAwIHZpYS1wdXJwbGUtNzAwIHRvLWN5YW4tNTAwIHRyYW5zZm9ybSBvcmlnaW4tcmlnaHRcIlxuICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvdyAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCBpbnNldC0wIHotNTAgcHgtNCBweS00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXByaW1hcnkgZmxleC13cmFwYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgICAgICB5OiAzMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7TUVOVVMubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtZ3JheS0zMDAgYmxvY2sgdGV4dC14bCBweC00IHB5LTIgdGV4dC1jZW50ZXIgbWItNCBsYXN0Om1iLTAgYm9yZGVyIHJvdW5kZWQtZnVsbCBib3JkZXItJHt2YWwuY30tNDAwIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3ZhbC5ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUJ1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=