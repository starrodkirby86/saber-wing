/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!******************************************!*\
  !*** ./src/extension/index.extension.ts ***!
  \******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const sampleNodeCGFunction = (nodecg) => {
    nodecg.sendMessage('hello');
};
exports["default"] = sampleNodeCGFunction;

})();

module.exports = __webpack_exports__;
/******/ })()
;