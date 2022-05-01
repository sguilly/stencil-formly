import { r as registerInstance, h } from './index-c27fa563.js';

const FieldContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.displayRequired = false;
  }
  renderBulma() {
    var _a, _b;
    return (h("div", { class: "field" }, h("label", { class: "label" }, (_a = this.templateOptions) === null || _a === void 0 ? void 0 :
      _a.label, " ", ((_b = this.templateOptions) === null || _b === void 0 ? void 0 : _b.required) == true ? '(*)' : ''), h("div", { class: "control" }, h("slot", null)), this.displayRequired ? h("p", { class: "help df-is-required" }, "This field is required") : ''));
  }
  renderBootstrap() {
    var _a, _b;
    return (h("div", { class: "form-group" }, h("label", null, (_a = this.templateOptions) === null || _a === void 0 ? void 0 :
      _a.label, " ", ((_b = this.templateOptions) === null || _b === void 0 ? void 0 : _b.required) == true ? '(*)' : ''), h("slot", null), h("small", { class: "form-text text-muted" }, this.displayRequired ? h("p", { class: "help df-is-required" }, "This field is required") : '')));
  }
  render() {
    return this.renderBulma();
  }
};

export { FieldContainer as field_container };
