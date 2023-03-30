import { r as registerInstance, c as createEvent, h } from './index-4410364a.js';
import { g as getClassNames } from './style-599af9cc.js';
import './styleStore-14fbb8d0.js';

const FieldInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customChange = createEvent(this, "customChange", 7);
    this.value = undefined;
    this.disabled = false;
    this.templateOptions = {};
  }
  renderInput() {
    var _a, _b, _c;
    return (h("textarea", { disabled: this.disabled, class: 'textarea ' + (((_c = (_b = (_a = this.classNames) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.control) === null || _c === void 0 ? void 0 : _c.className) || '') + (this.displayRequired == true ? ' df-is-required' : ''), value: this.value, onInput: (ev) => {
        console.log(ev.target.value);
        this.customChange.emit({ value: ev.target.value });
      } }));
  }
  async componentWillRender() {
    var _a;
    this.classNames = getClassNames();
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  render() {
    return (h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
};

export { FieldInput as field_textarea };

//# sourceMappingURL=field-textarea.entry.js.map