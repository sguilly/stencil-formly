'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1fad7235.js');

const FieldContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.displayRequired = false;
  }
  renderBulma() {
    var _a, _b;
    return (index.h("div", { class: "field" }, index.h("label", { class: "label" }, (_a = this.templateOptions) === null || _a === void 0 ? void 0 :
      _a.label, " ", ((_b = this.templateOptions) === null || _b === void 0 ? void 0 : _b.required) == true ? '(*)' : ''), index.h("div", { class: "control" }, index.h("slot", null)), this.displayRequired ? index.h("p", { class: "help df-is-required" }, this.templateOptions.requiredText) : ''));
  }
  renderBootstrap() {
    var _a, _b;
    return (index.h("div", { class: "form-group" }, index.h("label", null, (_a = this.templateOptions) === null || _a === void 0 ? void 0 :
      _a.label, " ", ((_b = this.templateOptions) === null || _b === void 0 ? void 0 : _b.required) == true ? '(*)' : ''), index.h("slot", null), index.h("small", { class: "form-text text-muted" }, this.displayRequired ? index.h("p", { class: "help df-is-required" }, this.templateOptions.requiredText) : '')));
  }
  render() {
    return this.renderBulma();
  }
};

exports.field_container = FieldContainer;
