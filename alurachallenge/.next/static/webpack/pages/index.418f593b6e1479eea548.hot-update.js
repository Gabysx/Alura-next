webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: BackgroundImage, QuizContainer, Widget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImage", function() { return BackgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizContainer", function() { return QuizContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
var _jsxFileName = "C:\\Users\\Gabriela\\Desktop\\Alura-next\\alurachallenge\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__BackgroundImage",
  componentId: "sc-1wbo52z-0"
})(["background-image:url(", ");flex:1;background-size:auto;background-position:right;"], _db_json__WEBPACK_IMPORTED_MODULE_2__.bg);
_c = BackgroundImage;
var QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__QuizContainer",
  componentId: "sc-1wbo52z-1"
})(["width:100%;max-width:23rem;padding-top:4rem;margin:auto 10%;@media screen and (max-width:31,25rem){margin:auto;padding:1rem;}"]);
_c2 = QuizContainer;
var Widget = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Widget",
  componentId: "sc-1wbo52z-2"
})(["margin-top:2rem;margin-bottom:2.5rem;border:1px solid #333;background-color:#555;border-radius:4px;overflow:hidden;h1,h2,h3{font-size:1rem;font-weight:700;line-height:1;margin-bottom:0;}p{font-size:1rem;font-weight:400;line-height:1;}"]);
_c3 = Widget;
Widget.Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "pages__Header",
  componentId: "sc-1wbo52z-3"
})(["display:flex;justify-content:flex-start;align-items:center;padding:1rem 2rem;background"]);
Widget.Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Content",
  componentId: "sc-1wbo52z-4"
})(["padding:1.5rem 2rem 2rem 2rem;& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}ul{list-style:none;padding:0;}"]);
function Home() {
  return __jsx(BackgroundImage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }
  }, __jsx(QuizContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 6
    }
  }, __jsx(Widget, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(Widget.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, " Quiz, Filme, terror..."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit...."))), __jsx(Widget, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(Widget.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, " Quiz dos Amigos "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit....")))));
}
_c4 = Home;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "BackgroundImage");
$RefreshReg$(_c2, "QuizContainer");
$RefreshReg$(_c3, "Widget");
$RefreshReg$(_c4, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZEltYWdlIiwic3R5bGVkIiwiZGl2IiwiZGIiLCJiZyIsIlF1aXpDb250YWluZXIiLCJXaWRnZXQiLCJIZWFkZXIiLCJoZWFkZXIiLCJDb250ZW50IiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRU8sSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBGQUNIQyxxQ0FBRSxDQUFDQyxFQURBLENBQXJCO0tBQU1KLGU7QUFPTixJQUFNSyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUlBQW5CO01BQU1HLGE7QUFZTixJQUFNQyxNQUFNLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa1BBQVo7TUFBTUksTTtBQXVCYkEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCTix5REFBTSxDQUFDTyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQVNBRixNQUFNLENBQUNHLE9BQVAsR0FBaUJSLHlEQUFNLENBQUNDLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBZWUsU0FBU1EsSUFBVCxHQUFnQjtBQUM3QixTQUNDLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQyxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsTUFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQUhGLENBREYsQ0FGRCxFQVVDLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBSEYsQ0FERixDQVZELENBREYsQ0FERDtBQXlCRDtNQTFCdUJBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDE4ZjU5M2I2ZTE0NzllZWE1NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCR7ZGIuYmd9KTtcbiAgZmxleDoxO1xuICBiYWNrZ3JvdW5kLXNpemU6YXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodDtcbmA7XG5cbmV4cG9ydCBjb25zdCBRdWl6Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDoyM3JlbTsgXG4gIHBhZGRpbmctdG9wOjRyZW07IFxuICBtYXJnaW46IGF1dG8gMTAlO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxLDI1cmVtKSB7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgcGFkZGluZzoxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgV2lkZ2V0ID0gc3R5bGVkLmRpdmBcblxuICBtYXJnaW4tdG9wOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBoMSwgaDIsIGgzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIGxpbmUtaGVpZ2h0OjE7XG4gIH1cbmAgO1xuXG5XaWRnZXQuSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJhY2tncm91bmRcblxuYFxuXG5XaWRnZXQuQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtIDJyZW0gMnJlbTtcbiAgJiA+ICo6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6MDtcbiAgfVxuICAmID4gKjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6MDtcbn1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgIDxCYWNrZ3JvdW5kSW1hZ2U+XG4gICAgIDxRdWl6Q29udGFpbmVyPlxuXG4gICAgICA8V2lkZ2V0PlxuICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgICAgPGgxPiBRdWl6LCBGaWxtZSwgdGVycm9yLi4uPC9oMT5cblxuICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0Li4uLjwvcD5cbiAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICAgIDwvV2lkZ2V0PlxuICAgICAgXG4gICAgICA8V2lkZ2V0PlxuICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XG4gICAgICAgICAgPGgxPiBRdWl6IGRvcyBBbWlnb3MgPC9oMT5cblxuICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0Li4uLjwvcD5cbiAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cbiAgICAgIDwvV2lkZ2V0PlxuXG5cbiAgICAgPC9RdWl6Q29udGFpbmVyPlxuICAgPC9CYWNrZ3JvdW5kSW1hZ2U+XG5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=