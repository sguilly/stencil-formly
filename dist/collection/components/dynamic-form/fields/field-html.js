import { Component, h, Prop } from '@stencil/core';
export class FieldHtml {
  constructor() {
    this.templateOptions = {};
  }
  render() {
    return h("div", { innerHTML: this.templateOptions.html });
  }
  static get is() { return "field-html"; }
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
      "reflect": false,
      "defaultValue": "{}"
    }
  }; }
}
