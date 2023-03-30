import { h } from '@stencil/core';
import { getClassNames } from '../../styles/style';
export class FieldContainer {
  constructor() {
    this.templateOptions = undefined;
    this.displayRequired = false;
  }
  componentWillRender() {
    this.classNames = getClassNames();
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return (h("div", { class: ((_a = this.classNames) === null || _a === void 0 ? void 0 : _a.group.className) || '' }, h("div", { class: ((_b = this.classNames.group.label) === null || _b === void 0 ? void 0 : _b.className) || '' }, (_c = this.templateOptions) === null || _c === void 0 ? void 0 :
      _c.label, " ", ((_d = this.templateOptions) === null || _d === void 0 ? void 0 : _d.required) == true ? '(*)' : ''), h("slot", null), this.displayRequired ? h("p", { class: ((_f = (_e = this.classNames.group) === null || _e === void 0 ? void 0 : _e.helper) === null || _f === void 0 ? void 0 : _f.className) || '' }, this.templateOptions.requiredText) : ''));
  }
  static get is() { return "field-container"; }
  static get properties() {
    return {
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
    };
  }
}
//# sourceMappingURL=field-container.js.map
