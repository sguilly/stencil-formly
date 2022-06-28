'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d1b80a98.js');
const style = require('./style-b4a630bb.js');
require('./styleStore-17ec64a1.js');

const FieldInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.customChange = index.createEvent(this, "customChange", 7);
    this.disabled = false;
    this.templateOptions = {};
  }
  renderInput() {
    var _a, _b, _c, _d;
    return (index.h("input", { disabled: this.disabled, class: (((_c = (_b = (_a = this.classNames) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.control) === null || _c === void 0 ? void 0 : _c.className) || '') + (this.displayRequired == true ? ' df-is-required' : ''), placeholder: "Text input", type: ((_d = this.templateOptions) === null || _d === void 0 ? void 0 : _d.type) || 'text', value: this.value, onInput: (ev) => {
        console.log(ev.target.value);
        this.customChange.emit({ value: ev.target.value });
      } }));
  }
  async componentWillRender() {
    var _a;
    this.classNames = style.getClassNames();
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  render() {
    return (index.h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
};

exports.field_input = FieldInput;
