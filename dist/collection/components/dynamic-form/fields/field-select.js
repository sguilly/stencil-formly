import { Component, Prop, Event, h } from '@stencil/core';
export class FieldSelect {
  constructor() {
    this.disabled = false;
    this.templateOptions = {};
  }
  renderInput() {
    return (h("choices-js", { type: 'single', valueByDefault: this.value, disable: this.disabled, choices: [{ value: 'NULL', label: ' ' }, ...this.templateOptions.options], onCallbackChoice: (data) => {
        this.customChange.emit({
          value: data.detail.value == 'NULL' ? null : data.detail.value,
        });
      } }));
  }
  async componentWillRender() {
    var _a;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  render() {
    return (h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
  static get is() { return "field-select"; }
  static get properties() { return {
    "value": {
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
      "attribute": "value",
      "reflect": false
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
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
  static get events() { return [{
      "method": "customChange",
      "name": "customChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
