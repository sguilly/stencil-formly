import { Component, h, Prop, Event } from '@stencil/core';
import { loadScript, loadCss } from '../../../utils/loadScript';
export class FieldSlider {
  constructor() {
    this.disabled = false;
    this.templateOptions = {};
  }
  async componentWillLoad() {
    let promises = [];
    promises.push(loadCss('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.css'));
    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.js'));
    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/wnumb/1.2.0/wNumb.min.js'));
    return Promise.all(promises);
  }
  async componentWillRender() {
    var _a;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  componentDidRender() {
    console.log('ref', this.refInput);
    if (!this.instance) {
      this.instance = noUiSlider.create(this.refInput, {
        start: this.value ? this.value : 50,
        step: 10,
        tooltips: [wNumb({ decimals: 0 })],
        connect: 'lower',
        range: {
          min: 0,
          max: 100,
        },
      });
      this.instance.on('end', () => {
        this.value = Number(this.instance.get());
        this.customChange.emit({ value: this.value });
      });
    }
    if (this.value) {
      this.instance.set(this.value);
    }
  }
  renderInput() {
    return h("div", { ref: el => (this.refInput = el) });
  }
  render() {
    return (h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
  static get is() { return "field-slider"; }
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
