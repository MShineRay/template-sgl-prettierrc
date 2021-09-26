(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.template = global.template || {}, global.template.jslib = global.template.jslib || {}, global.template.jslib.rollup = factory()));
}(this, (function () { 'use strict';

  var name = "template.jslib.rollup";
  var version = "0.0.1";

  /*!
   * @createDate 2021-08-23
   */
  var jsUtils = {};
  jsUtils.version = version;
  jsUtils.name = name;

  return jsUtils;

})));
