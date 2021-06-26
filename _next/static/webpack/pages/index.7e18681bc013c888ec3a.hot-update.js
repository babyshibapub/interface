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
      className: "fixed px-2 py-2 bottom right-0 mt-4 mr-4 xl:hidden",
      style: {
        zIndex: 10000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: show ? "show" : "hide",
        variants: button1Variants,
        className: "mb-1 h-1 w-6 rounded bg-gradient-to-br from-light to-pink-400  transform origin-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: show ? "show" : "hide",
        variants: button3Variants,
        className: "mb-1 h-1 w-6 rounded bg-gradient-to-br from-light to-pink-400 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        animate: show ? "show" : "hide",
        variants: button2Variants,
        className: "mb-1 h-1 w-6 rounded bg-gradient-to-br from-light to-pink-400 transform origin-right"
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
      className: "fixed inset-0 z-50 px-4 py-4 flex items-center justify-center bg-dark flex-wrap",
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
            href: "#".concat(val.toLowerCase()),
            className: "text-gray-300 block text-xl px-4 py-2 text-center mb-4 last:mb-0 border rounded-full border-".concat(val.c, "-400 "),
            children: val
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L01vYmlsZUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJidXR0b24xVmFyaWFudHMiLCJzaG93Iiwicm90YXRlIiwiaGlkZSIsImJ1dHRvbjJWYXJpYW50cyIsImJ1dHRvbjNWYXJpYW50cyIsIm9wYWNpdHkiLCJNb2JpbGVCdXR0b24iLCJ1c2VTdGF0ZSIsInNldFNob3ciLCJoYW5kbGVPbkNsaWNrIiwiekluZGV4IiwieSIsIk1FTlVTIiwidmFsIiwia2V5IiwidG9Mb3dlckNhc2UiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUUsQ0FBQztBQURMLEdBRGdCO0FBSXRCQyxNQUFJLEVBQUU7QUFDSkQsVUFBTSxFQUFFO0FBREo7QUFKZ0IsQ0FBeEI7QUFRQSxJQUFNRSxlQUFlLEdBQUc7QUFDdEJILE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFESixHQURnQjtBQUl0QkMsTUFBSSxFQUFFO0FBQ0pELFVBQU0sRUFBRTtBQURKO0FBSmdCLENBQXhCO0FBUUEsSUFBTUcsZUFBZSxHQUFHO0FBQ3RCSixNQUFJLEVBQUU7QUFDSkssV0FBTyxFQUFFO0FBREwsR0FEZ0I7QUFJdEJILE1BQUksRUFBRTtBQUNKRyxXQUFPLEVBQUU7QUFETDtBQUpnQixDQUF4Qjs7QUFRQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLCtDQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDbEJQLElBRGtCO0FBQUEsTUFDWlEsT0FEWTs7QUFFekIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTUEsT0FBTyxDQUFDLENBQUNSLElBQUYsQ0FBYjtBQUFBLE9BRFg7QUFFRSxlQUFTLEVBQUMsb0RBRlo7QUFHRSxXQUFLLEVBQUU7QUFBRVUsY0FBTSxFQUFFO0FBQVYsT0FIVDtBQUFBLDhCQUtFLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFVixJQUFJLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBRUUsZ0JBQVEsRUFBRUQsZUFGWjtBQUdFLGlCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFVRSw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBRUMsSUFBSSxHQUFHLE1BQUgsR0FBWSxNQUQzQjtBQUVFLGdCQUFRLEVBQUVJLGVBRlo7QUFHRSxpQkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBZUUsOERBQUMscURBQUQ7QUFDRSxlQUFPLEVBQUVKLElBQUksR0FBRyxNQUFILEdBQVksTUFEM0I7QUFFRSxnQkFBUSxFQUFFRyxlQUZaO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQXNCR0gsSUFBSSxpQkFDSDtBQUNFLGVBQVMsbUZBRFg7QUFBQSw2QkFHRSw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBRTtBQUNQVyxXQUFDLEVBQUU7QUFESSxTQURYO0FBSUUsZUFBTyxFQUFFO0FBQ1BBLFdBQUMsRUFBRTtBQURJLFNBSlg7QUFPRSxpQkFBUyxFQUFDLEVBUFo7QUFRRSxlQUFPLEVBQUVGLGFBUlg7QUFBQSxrQkFVR0csd0NBQUEsQ0FBVSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN2Qiw4QkFDRTtBQUVFLGdCQUFJLGFBQU1ELEdBQUcsQ0FBQ0UsV0FBSixFQUFOLENBRk47QUFHRSxxQkFBUyx3R0FBaUdGLEdBQUcsQ0FBQ0csQ0FBckcsVUFIWDtBQUFBLHNCQUtHSDtBQUxILGFBQ09DLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVNELFNBVkE7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCSjtBQUFBLGtCQURGO0FBcURELENBMUREOztHQUFNUixZOztLQUFBQSxZO0FBMkROLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdlMTg2ODFiYzAxM2M4ODhlYzNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IE1FTlVTIH0gZnJvbSBcIi5cIjtcbmNvbnN0IGJ1dHRvbjFWYXJpYW50cyA9IHtcbiAgc2hvdzoge1xuICAgIHJvdGF0ZTogLTQ1LFxuICB9LFxuICBoaWRlOiB7XG4gICAgcm90YXRlOiAwLFxuICB9LFxufTtcbmNvbnN0IGJ1dHRvbjJWYXJpYW50cyA9IHtcbiAgc2hvdzoge1xuICAgIHJvdGF0ZTogNDUsXG4gIH0sXG4gIGhpZGU6IHtcbiAgICByb3RhdGU6IDAsXG4gIH0sXG59O1xuY29uc3QgYnV0dG9uM1ZhcmlhbnRzID0ge1xuICBzaG93OiB7XG4gICAgb3BhY2l0eTogMCxcbiAgfSxcbiAgaGlkZToge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59O1xuY29uc3QgTW9iaWxlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0U2hvdyhmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHB4LTIgcHktMiBib3R0b20gcmlnaHQtMCBtdC00IG1yLTQgeGw6aGlkZGVuXCJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxMDAwMCB9fVxuICAgICAgPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGFuaW1hdGU9e3Nob3cgPyBcInNob3dcIiA6IFwiaGlkZVwifVxuICAgICAgICAgIHZhcmlhbnRzPXtidXR0b24xVmFyaWFudHN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMSBoLTEgdy02IHJvdW5kZWQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1saWdodCB0by1waW5rLTQwMCAgdHJhbnNmb3JtIG9yaWdpbi1yaWdodFwiXG4gICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgYW5pbWF0ZT17c2hvdyA/IFwic2hvd1wiIDogXCJoaWRlXCJ9XG4gICAgICAgICAgdmFyaWFudHM9e2J1dHRvbjNWYXJpYW50c31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIGgtMSB3LTYgcm91bmRlZCBiZy1ncmFkaWVudC10by1iciBmcm9tLWxpZ2h0IHRvLXBpbmstNDAwIFwiXG4gICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgYW5pbWF0ZT17c2hvdyA/IFwic2hvd1wiIDogXCJoaWRlXCJ9XG4gICAgICAgICAgdmFyaWFudHM9e2J1dHRvbjJWYXJpYW50c31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIGgtMSB3LTYgcm91bmRlZCBiZy1ncmFkaWVudC10by1iciBmcm9tLWxpZ2h0IHRvLXBpbmstNDAwIHRyYW5zZm9ybSBvcmlnaW4tcmlnaHRcIlxuICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvdyAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCBpbnNldC0wIHotNTAgcHgtNCBweS00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWRhcmsgZmxleC13cmFwYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgICAgICB5OiAzMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7TUVOVVMubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHt2YWwudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ncmF5LTMwMCBibG9jayB0ZXh0LXhsIHB4LTQgcHktMiB0ZXh0LWNlbnRlciBtYi00IGxhc3Q6bWItMCBib3JkZXIgcm91bmRlZC1mdWxsIGJvcmRlci0ke3ZhbC5jfS00MDAgYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dmFsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUJ1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=