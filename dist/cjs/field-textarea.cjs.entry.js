'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e4330bec.js');
const style = require('./style-2fe7c5dd.js');
require('./styleStore-9a6e9e83.js');

const FieldInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.customChange = index.createEvent(this, "customChange", 7);
    this.value = undefined;
    this.disabled = false;
    this.templateOptions = {};
  }
  renderInput() {
    var _a, _b, _c;
    return (index.h("textarea", { disabled: this.disabled, class: 'textarea ' + (((_c = (_b = (_a = this.classNames) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.control) === null || _c === void 0 ? void 0 : _c.className) || '') + (this.displayRequired == true ? ' df-is-required' : ''), value: this.value, onInput: (ev) => {
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

exports.field_textarea = FieldInput;

//# sourceMappingURL=field-textarea.cjs.entry.js.map