import { Component, h, Prop, Event } from '@stencil/core';
import { loadScript, loadCss } from '../../../utils/loadScript';
export class FieldInput {
  constructor() {
    this.disabled = false;
    this.templateOptions = {};
  }
  async componentWillLoad() {
    let promises = [];
    promises.push(loadCss('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css'));
    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/intlTelInput.min.js'));
    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/utils.min.js'));
    return Promise.all(promises);
  }
  componentDidRender() {
    console.log('ref', this.refInput);
    this.instance = intlTelInput(this.refInput, {
      initialCountry: 'fr',
    });
    this.refInput.addEventListener('countrychange', function () {
      console.log('countrychange');
    });
  }
  renderInput() {
    var _a;
    return [
      h("input", { ref: el => (this.refInput = el), disabled: this.disabled, class: 'input ' + (((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value ? ' df-is-required' : ''), value: this.value, onInput: (ev) => {
          console.log('valid ? ' + this.instance.isValidNumber());
          if (this.instance.isValidNumber()) {
            this.value = this.instance.getNumber();
            if (this.value.length > 0) {
              this.customChange.emit({ value: this.value });
            }
          }
        } }),
      h("button", { class: "button", onClick: () => {
          this.value = null;
          this.customChange.emit({ value: this.value });
        } }, "X"),
    ];
  }
  async componentWillRender() {
    var _a;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  render() {
    return (h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
  static get is() { return "field-phonenumber"; }
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
