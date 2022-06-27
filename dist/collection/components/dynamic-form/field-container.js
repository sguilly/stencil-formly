import { Component, h, Prop } from '@stencil/core';
export class FieldContainer {
  constructor() {
    this.displayRequired = false;
  }
  renderBulma() {
    var _a, _b;
    return (h("div", { class: "field" },
      h("label", { class: "label" }, (_a = this.templateOptions) === null || _a === void 0 ? void 0 :
        _a.label,
        " ",
        ((_b = this.templateOptions) === null || _b === void 0 ? void 0 : _b.required) == true ? '(*)' : ''),
      h("div", { class: "control" },
        h("slot", null)),
      this.displayRequired ? h("p", { class: "help df-is-required" }, this.templateOptions.requiredText) : ''));
  }
  renderBootstrap() {
    var _a, _b;
    return (h("div", { class: "form-group" },
      h("label", null, (_a = this.templateOptions) === null || _a === void 0 ? void 0 :
        _a.label,
        " ",
        ((_b = this.templateOptions) === null || _b === void 0 ? void 0 : _b.required) == true ? '(*)' : ''),
      h("slot", null),
      h("small", { class: "form-text text-muted" }, this.displayRequired ? h("p", { class: "help df-is-required" }, this.templateOptions.requiredText) : '')));
  }
  render() {
    return this.renderBulma();
  }
  static get is() { return "field-container"; }
  static get properties() { return {
    "templateOptions": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "template-options",
      "reflect": false
    },
    "displayRequired": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "display-required",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
