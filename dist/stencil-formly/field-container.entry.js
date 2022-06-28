import { r as registerInstance, h } from './index-3259bf0a.js';
import { g as getClassNames } from './style-c70c7711.js';
import './styleStore-100e5755.js';

const FieldContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};

export { FieldContainer as field_container };
