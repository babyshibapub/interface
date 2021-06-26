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
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
            href: val.l,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "text-gray-300 block text-xl px-4 py-2 text-center mb-4 last:mb-0 border rounded-full border-".concat(val.c, "-400 "),
              children: val.n
            }, key, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L01vYmlsZUJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJidXR0b24xVmFyaWFudHMiLCJzaG93Iiwicm90YXRlIiwiaGlkZSIsImJ1dHRvbjJWYXJpYW50cyIsImJ1dHRvbjNWYXJpYW50cyIsIm9wYWNpdHkiLCJNb2JpbGVCdXR0b24iLCJ1c2VTdGF0ZSIsInNldFNob3ciLCJoYW5kbGVPbkNsaWNrIiwiekluZGV4IiwieSIsIk1FTlVTIiwidmFsIiwia2V5IiwibCIsImMiLCJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUUsQ0FBQztBQURMLEdBRGdCO0FBSXRCQyxNQUFJLEVBQUU7QUFDSkQsVUFBTSxFQUFFO0FBREo7QUFKZ0IsQ0FBeEI7QUFRQSxJQUFNRSxlQUFlLEdBQUc7QUFDdEJILE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFESixHQURnQjtBQUl0QkMsTUFBSSxFQUFFO0FBQ0pELFVBQU0sRUFBRTtBQURKO0FBSmdCLENBQXhCO0FBUUEsSUFBTUcsZUFBZSxHQUFHO0FBQ3RCSixNQUFJLEVBQUU7QUFDSkssV0FBTyxFQUFFO0FBREwsR0FEZ0I7QUFJdEJILE1BQUksRUFBRTtBQUNKRyxXQUFPLEVBQUU7QUFETDtBQUpnQixDQUF4Qjs7QUFRQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0RDLCtDQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDbEJQLElBRGtCO0FBQUEsTUFDWlEsT0FEWTs7QUFFekIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTUEsT0FBTyxDQUFDLENBQUNSLElBQUYsQ0FBYjtBQUFBLE9BRFg7QUFFRSxlQUFTLEVBQUMsbURBRlo7QUFHRSxXQUFLLEVBQUU7QUFBRVUsY0FBTSxFQUFFO0FBQVYsT0FIVDtBQUFBLDhCQUtFLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFFVixJQUFJLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBRUUsZ0JBQVEsRUFBRUQsZUFGWjtBQUdFLGlCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFVRSw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBRUMsSUFBSSxHQUFHLE1BQUgsR0FBWSxNQUQzQjtBQUVFLGdCQUFRLEVBQUVJLGVBRlo7QUFHRSxpQkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGLGVBZUUsOERBQUMscURBQUQ7QUFDRSxlQUFPLEVBQUVKLElBQUksR0FBRyxNQUFILEdBQVksTUFEM0I7QUFFRSxnQkFBUSxFQUFFRyxlQUZaO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQXNCR0gsSUFBSSxpQkFDSDtBQUNFLGVBQVMsc0ZBRFg7QUFBQSw2QkFHRSw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBRTtBQUNQVyxXQUFDLEVBQUU7QUFESSxTQURYO0FBSUUsZUFBTyxFQUFFO0FBQ1BBLFdBQUMsRUFBRTtBQURJLFNBSlg7QUFPRSxpQkFBUyxFQUFDLEVBUFo7QUFRRSxlQUFPLEVBQUVGLGFBUlg7QUFBQSxrQkFVR0csd0NBQUEsQ0FBVSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN2Qiw4QkFDRSw4REFBQyxJQUFEO0FBQU0sZ0JBQUksRUFBRUQsR0FBRyxDQUFDRSxDQUFoQjtBQUFBLG1DQUNFO0FBRUUsdUJBQVMsd0dBQWlHRixHQUFHLENBQUNHLENBQXJHLFVBRlg7QUFBQSx3QkFJR0gsR0FBRyxDQUFDSTtBQUpQLGVBQ09ILEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFVRCxTQVhBO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Qko7QUFBQSxrQkFERjtBQXNERCxDQTNERDs7R0FBTVIsWTs7S0FBQUEsWTtBQTRETiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYmYwNGNlNDQ1Y2IwZDdlMjc3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBNRU5VUyB9IGZyb20gXCIuXCI7XG5jb25zdCBidXR0b24xVmFyaWFudHMgPSB7XG4gIHNob3c6IHtcbiAgICByb3RhdGU6IC00NSxcbiAgfSxcbiAgaGlkZToge1xuICAgIHJvdGF0ZTogMCxcbiAgfSxcbn07XG5jb25zdCBidXR0b24yVmFyaWFudHMgPSB7XG4gIHNob3c6IHtcbiAgICByb3RhdGU6IDQ1LFxuICB9LFxuICBoaWRlOiB7XG4gICAgcm90YXRlOiAwLFxuICB9LFxufTtcbmNvbnN0IGJ1dHRvbjNWYXJpYW50cyA9IHtcbiAgc2hvdzoge1xuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIGhpZGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICB9LFxufTtcbmNvbnN0IE1vYmlsZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4ge1xuICAgIHNldFNob3coZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfVxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBweC0yIHB5LTIgdG9wLTAgcmlnaHQtMCBtdC00IG1yLTQgeGw6aGlkZGVuXCJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxMDAwMCB9fVxuICAgICAgPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGFuaW1hdGU9e3Nob3cgPyBcInNob3dcIiA6IFwiaGlkZVwifVxuICAgICAgICAgIHZhcmlhbnRzPXtidXR0b24xVmFyaWFudHN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMSBoLTEgdy02IHJvdW5kZWQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1waW5rLTUwMCB2aWEtcHVycGxlLTcwMCB0by1jeWFuLTUwMCB0cmFuc2Zvcm0gb3JpZ2luLXJpZ2h0XCJcbiAgICAgICAgPjwvbW90aW9uLmRpdj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBhbmltYXRlPXtzaG93ID8gXCJzaG93XCIgOiBcImhpZGVcIn1cbiAgICAgICAgICB2YXJpYW50cz17YnV0dG9uM1ZhcmlhbnRzfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTEgaC0xIHctNiByb3VuZGVkIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcGluay01MDAgdmlhLXB1cnBsZS03MDAgdG8tY3lhbi01MDBcIlxuICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGFuaW1hdGU9e3Nob3cgPyBcInNob3dcIiA6IFwiaGlkZVwifVxuICAgICAgICAgIHZhcmlhbnRzPXtidXR0b24yVmFyaWFudHN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMSBoLTEgdy02IHJvdW5kZWQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1waW5rLTUwMCB2aWEtcHVycGxlLTcwMCB0by1jeWFuLTUwMCB0cmFuc2Zvcm0gb3JpZ2luLXJpZ2h0XCJcbiAgICAgICAgPjwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3cgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgaW5zZXQtMCB6LTUwIHB4LTQgcHktNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1wcmltYXJ5IGZsZXgtd3JhcGB9XG4gICAgICAgID5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgICAgICAgeTogMzAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge01FTlVTLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2YWwubH0+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1ncmF5LTMwMCBibG9jayB0ZXh0LXhsIHB4LTQgcHktMiB0ZXh0LWNlbnRlciBtYi00IGxhc3Q6bWItMCBib3JkZXIgcm91bmRlZC1mdWxsIGJvcmRlci0ke3ZhbC5jfS00MDAgYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3ZhbC5ufVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUJ1dHRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=