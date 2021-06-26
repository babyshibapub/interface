self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Airdrop/Airdrop.js":
/*!*******************************************!*\
  !*** ./src/components/Airdrop/Airdrop.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _hooks_useSale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSale */ "./src/hooks/useSale.js");
/* harmony import */ var _hooks_useRefer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useRefer */ "./src/hooks/useRefer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _slices_commonSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../slices/commonSlice */ "./src/slices/commonSlice.js");
/* harmony import */ var _hooks_useCopy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useCopy */ "./src/hooks/useCopy.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Countdown */ "./src/components/Countdown/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "/home/kaliz/dev/tantranlee/babyshiba/src/components/Airdrop/Airdrop.js",
    _this = undefined,
    _s = $RefreshSig$();









var Airdrop = function Airdrop() {
  _s();

  var web3 = (0,_hooks_useSale__WEBPACK_IMPORTED_MODULE_4__.connect)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(0.01),
      value = _useState[0],
      setValue = _useState[1];

  var _useCopy = (0,_hooks_useCopy__WEBPACK_IMPORTED_MODULE_8__.default)(),
      _useCopy2 = (0,_home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useCopy, 1),
      cp = _useCopy2[0];

  var _useRefer = (0,_hooks_useRefer__WEBPACK_IMPORTED_MODULE_5__.default)(),
      _useRefer2 = (0,_home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useRefer, 1),
      refer = _useRefer2[0];

  var handleClaim = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      return _home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return web3.claimAirdrop(refer);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClaim() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleTokenSale = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      return _home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return web3.tokenSale(refer, value);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleTokenSale() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleConnect = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
      return _home_kaliz_dev_tantranlee_babyshiba_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return web3.onConnect();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleConnect() {
      return _ref3.apply(this, arguments);
    };
  }();

  var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_slices_commonSlice__WEBPACK_IMPORTED_MODULE_7__.accountSelector);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-dark-2 bg-opacity-70",
    id: "airdrop",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto px-4 py-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-5xl font-bold text-center mb-8",
        "data-aos": "fade-left",
        children: ["BabyShiba ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "text-light",
          children: "Airdrop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Countdown__WEBPACK_IMPORTED_MODULE_10__.Countdown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex -mx-4 flex-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full lg:w-1/2 px-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "bg-dark rounded px-8 py-8 mb-8",
            "data-aos": "fade-right",
            "data-aos-delay": "200",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mb-8 text-2xl",
              children: "BabyShiba Will be listed on Hotbit and pancakeswap exchange after Presale end."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-sm mb-2 text-gray-300",
                children: "Enter BNB"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                className: "px-4 py-4 border-2 border-light w-full bg-transparent rounded-xl text-light text-2xl focus:outline-none",
                value: value,
                onChange: function onChange(e) {
                  return setValue(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mb-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: handleTokenSale,
                className: "px-4 py-2 rounded-xl border-2 border-light bg-light w-full flex items-center justify-center hover:bg-opacity-80",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/assets/airdrop-2.png",
                  alt: "",
                  className: "inline-block w-12 h-12 rounded-full"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-2xl ml-2",
                  children: "Buy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: handleClaim,
                className: "px-4 py-2 rounded-xl border-2 border-white w-full flex items-center justify-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/assets/airdrop-1.png",
                  alt: "",
                  className: "inline-block w-12 h-12 rounded-full"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-2xl ml-2",
                  children: "Claim Airdrop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "bg-dark rounded px-8 py-8",
            "data-aos": "fade-right",
            "data-aos-delay": "200",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "",
              children: "(*) Rate Sale: 0.01 BNB = 15,000,000 BabyShiba"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "",
              children: "(*) Minium buy 0.1 BNB - 10 BNB"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "",
              children: "(*) Your friends who buy through your link receive 100% commission."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full lg:w-1/2 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "bg-dark rounded px-8 py-8 mb-8",
              "data-aos": "fade-left",
              "data-aos-delay": "200",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mb-8 text-2xl",
                children: "Refer your friends and claim bonus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: handleConnect,
                className: "px-4 py-4 rounded-xl border-2 border-light bg-light w-full flex items-center justify-center hover:bg-opacity-80 mb-4",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "text-2xl ml-2",
                  children: "Get Referral Link"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-sm text-gray-300 mb-2",
                children: "Your refer link:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "border border-gray-500 bg-dark px-4 py-4 rounded break-all cursor-pointer",
                  onClick: function onClick() {
                    return cp("https://babyshibatoken.net?address=".concat(account));
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "text-center text-xs",
                    children: "Click to copy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "break-all",
                    children: account ? "https://babyshibatoken.net?address=".concat(account) : "--"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "bg-dark rounded px-8 py-8",
              "data-aos": "fade-right",
              "data-aos-delay": "200",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: "(*) Referral friend claim 1,000,000 BabyShiba"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: "(*) You receive 1,000,000 BabyShiba"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "",
                children: "(*) Referral no limit bonus."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(Airdrop, "H4VTkterfA8TEZoUyTylYJ9kabs=", false, function () {
  return [_hooks_useCopy__WEBPACK_IMPORTED_MODULE_8__.default, _hooks_useRefer__WEBPACK_IMPORTED_MODULE_5__.default, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];
});

_c = Airdrop;
/* harmony default export */ __webpack_exports__["default"] = (Airdrop);

var _c;

$RefreshReg$(_c, "Airdrop");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWlyZHJvcC9BaXJkcm9wLmpzIl0sIm5hbWVzIjpbIkFpcmRyb3AiLCJ3ZWIzIiwiY29ubmVjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUNvcHkiLCJjcCIsInVzZVJlZmVyIiwicmVmZXIiLCJoYW5kbGVDbGFpbSIsImNsYWltQWlyZHJvcCIsImhhbmRsZVRva2VuU2FsZSIsInRva2VuU2FsZSIsImhhbmRsZUNvbm5lY3QiLCJvbkNvbm5lY3QiLCJhY2NvdW50IiwidXNlU2VsZWN0b3IiLCJhY2NvdW50U2VsZWN0b3IiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxJQUFJLEdBQUdDLHVEQUFPLEVBQXBCOztBQURvQixrQkFFTUMsK0NBQVEsQ0FBQyxJQUFELENBRmQ7QUFBQSxNQUViQyxLQUZhO0FBQUEsTUFFTkMsUUFGTTs7QUFBQSxpQkFHUEMsdURBQU8sRUFIQTtBQUFBO0FBQUEsTUFHYkMsRUFIYTs7QUFBQSxrQkFJSkMsd0RBQVEsRUFKSjtBQUFBO0FBQUEsTUFJYkMsS0FKYTs7QUFLcEIsTUFBTUMsV0FBVztBQUFBLCtUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNaVCxJQUFJLENBQUNVLFlBQUwsQ0FBa0JGLEtBQWxCLENBRFk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEMsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFHQSxNQUFNRSxlQUFlO0FBQUEsZ1VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2hCWCxJQUFJLENBQUNZLFNBQUws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Q2tDQSxPQURsQyxJQUVKO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFtQ0U7QUFDRSx1QkFBUyxFQUFDLDJCQURaO0FBRUUsMEJBQVMsWUFGWDtBQUdFLGdDQUFlLEtBSGpCO0FBQUEsc0NBS0U7QUFBSyx5QkFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsZUFRRTtBQUFLLHlCQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRixlQVNFO0FBQUsseUJBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkhELENBNUlEOztHQUFNaEIsTztVQUdTTSxtRCxFQUNHRSxvRCxFQVVBUyxvRDs7O0tBZFpqQixPO0FBOElOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3NzVlYzNjYzMyMzQ0NTUzOWJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVNhbGVcIjtcbmltcG9ydCB1c2VSZWZlciBmcm9tIFwiLi4vLi4vaG9va3MvdXNlUmVmZXJcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhY2NvdW50U2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc2xpY2VzL2NvbW1vblNsaWNlXCI7XG5pbXBvcnQgdXNlQ29weSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQ29weVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvdW50ZG93biB9IGZyb20gXCIuLi9Db3VudGRvd25cIjtcbmNvbnN0IEFpcmRyb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHdlYjMgPSBjb25uZWN0KCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMC4wMSk7XG4gIGNvbnN0IFtjcF0gPSB1c2VDb3B5KCk7XG4gIGNvbnN0IFtyZWZlcl0gPSB1c2VSZWZlcigpO1xuICBjb25zdCBoYW5kbGVDbGFpbSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3ZWIzLmNsYWltQWlyZHJvcChyZWZlcik7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVRva2VuU2FsZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCB3ZWIzLnRva2VuU2FsZShyZWZlciwgdmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdlYjMub25Db25uZWN0KCk7XG4gIH07XG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3RvcihhY2NvdW50U2VsZWN0b3IpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZGFyay0yIGJnLW9wYWNpdHktNzBcIiBpZD1cImFpcmRyb3BcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS0xNlwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLThcIlxuICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCJcbiAgICAgICAgPlxuICAgICAgICAgIEJhYnlTaGliYSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+QWlyZHJvcDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb3VudGRvd24gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IC1teC00IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8yIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZGFyayByb3VuZGVkIHB4LTggcHktOCBtYi04XCJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZGVsYXk9XCIyMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggdGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICBCYWJ5U2hpYmEgV2lsbCBiZSBsaXN0ZWQgb24gSG90Yml0IGFuZCBwYW5jYWtlc3dhcCBleGNoYW5nZVxuICAgICAgICAgICAgICAgIGFmdGVyIFByZXNhbGUgZW5kLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1iLTIgdGV4dC1ncmF5LTMwMFwiPkVudGVyIEJOQjwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS00IGJvcmRlci0yIGJvcmRlci1saWdodCB3LWZ1bGwgYmctdHJhbnNwYXJlbnQgcm91bmRlZC14bCB0ZXh0LWxpZ2h0IHRleHQtMnhsIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9rZW5TYWxlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLWxpZ2h0IGJnLWxpZ2h0IHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1vcGFjaXR5LTgwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvYWlyZHJvcC0yLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEyIGgtMTIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtbC0yXCI+QnV5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGFpbX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLXhsIGJvcmRlci0yIGJvcmRlci13aGl0ZSB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9haXJkcm9wLTEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMTIgaC0xMiByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIG1sLTJcIj5DbGFpbSBBaXJkcm9wPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1kYXJrIHJvdW5kZWQgcHgtOCBweS04XCJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZGVsYXk9XCIyMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICgqKSBSYXRlIFNhbGU6IDAuMDEgQk5CID0gMTUsMDAwLDAwMCBCYWJ5U2hpYmFcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+KCopIE1pbml1bSBidXkgMC4xIEJOQiAtIDEwIEJOQjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICgqKSBZb3VyIGZyaWVuZHMgd2hvIGJ1eSB0aHJvdWdoIHlvdXIgbGluayByZWNlaXZlIDEwMCVcbiAgICAgICAgICAgICAgICBjb21taXNzaW9uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMS8yIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1kYXJrIHJvdW5kZWQgcHgtOCBweS04IG1iLThcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggdGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICAgIFJlZmVyIHlvdXIgZnJpZW5kcyBhbmQgY2xhaW0gYm9udXNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25uZWN0fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS00IHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLWxpZ2h0IGJnLWxpZ2h0IHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1vcGFjaXR5LTgwIG1iLTRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIG1sLTJcIj5HZXQgUmVmZXJyYWwgTGluazwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTMwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICBZb3VyIHJlZmVyIGxpbms6XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBiZy1kYXJrIHB4LTQgcHktNCByb3VuZGVkIGJyZWFrLWFsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgY3AoYGh0dHBzOi8vYmFieXNoaWJhdG9rZW4ubmV0P2FkZHJlc3M9JHthY2NvdW50fWApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhzXCI+Q2xpY2sgdG8gY29weTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFrLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBodHRwczovL2JhYnlzaGliYXRva2VuLm5ldD9hZGRyZXNzPSR7YWNjb3VudH1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiLS1cIn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWRhcmsgcm91bmRlZCBweC04IHB5LThcIlxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZGVsYXk9XCIyMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICgqKSBSZWZlcnJhbCBmcmllbmQgY2xhaW0gMSwwMDAsMDAwIEJhYnlTaGliYVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+KCopIFlvdSByZWNlaXZlIDEsMDAwLDAwMCBCYWJ5U2hpYmE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPigqKSBSZWZlcnJhbCBubyBsaW1pdCBib251cy48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFpcmRyb3A7XG4iXSwic291cmNlUm9vdCI6IiJ9