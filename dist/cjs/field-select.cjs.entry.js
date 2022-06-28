'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d1b80a98.js');

const FieldSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.customChange = index.createEvent(this, "customChange", 7);
    this.disabled = false;
    this.templateOptions = {};
  }
  renderInput() {
    return (index.h("choices-js", { type: 'single', valueByDefault: this.value, disable: this.disabled, choices: [{ value: 'NULL', label: ' ' }, ...this.templateOptions.options], onCallbackChoice: (data) => {
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
    return (index.h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
};

exports.field_select = FieldSelect;
