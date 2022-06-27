import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const FieldContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.displayRequired = false;
  }
  renderBulma() {
    var _a, _b;
    return (h("div", { class: "field" }, h("label", { class: "label" }, (_a = this.templateOptions) === null || _a === void 0 ? void 0 :
      _a.label, " ", ((_b = this.templateOptions) === null || _b === void 0 ? void 0 : _b.required) == true ? '(*)' : ''), h("div", { class: "control" }, h("slot", null)), this.displayRequired ? h("p", { class: "help df-is-required" }, this.templateOptions.requiredText) : ''));
  }
  renderBootstrap() {
    var _a, _b;
    return (h("div", { class: "form-group" }, h("label", null, (_a = this.templateOptions) === null || _a === void 0 ? void 0 :
      _a.label, " ", ((_b = this.templateOptions) === null || _b === void 0 ? void 0 : _b.required) == true ? '(*)' : ''), h("slot", null), h("small", { class: "form-text text-muted" }, this.displayRequired ? h("p", { class: "help df-is-required" }, this.templateOptions.requiredText) : '')));
  }
  render() {
    return this.renderBulma();
  }
}, [4, "field-container", {
    "templateOptions": [8, "template-options"],
    "displayRequired": [4, "display-required"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["field-container"];
  components.forEach(tagName => { switch (tagName) {
    case "field-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldContainer);
      }
      break;
  } });
}

export { FieldContainer as F, defineCustomElement as d };
