'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d1b80a98.js');
const style = require('./style-b4a630bb.js');
require('./styleStore-17ec64a1.js');

const FieldContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.displayRequired = false;
  }
  componentWillRender() {
    this.classNames = style.getClassNames();
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return (index.h("div", { class: ((_a = this.classNames) === null || _a === void 0 ? void 0 : _a.group.className) || '' }, index.h("div", { class: ((_b = this.classNames.group.label) === null || _b === void 0 ? void 0 : _b.className) || '' }, (_c = this.templateOptions) === null || _c === void 0 ? void 0 :
      _c.label, " ", ((_d = this.templateOptions) === null || _d === void 0 ? void 0 : _d.required) == true ? '(*)' : ''), index.h("slot", null), this.displayRequired ? index.h("p", { class: ((_f = (_e = this.classNames.group) === null || _e === void 0 ? void 0 : _e.helper) === null || _f === void 0 ? void 0 : _f.className) || '' }, this.templateOptions.requiredText) : ''));
  }
};

exports.field_container = FieldContainer;
