import { r as registerInstance, c as createEvent, h } from './index-d71065ba.js';

const FieldSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customChange = createEvent(this, "customChange", 7);
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
};

export { FieldSelect as field_select };
