'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1fad7235.js');

const fieldCheckboxCss = ".df-checkboxes-container{display:flex;flex-wrap:wrap;flex-direction:row}.df-checkbox-container{display:flex;flex-wrap:wrap;flex-direction:row;align-items:center}.df-checkbox-input{margin-left:10px;margin-right:10px}";

const FieldCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.customChange = index.createEvent(this, "customChange", 7);
    this.templateOptions = {};
  }
  renderInput() {
    return (index.h("div", { class: "df-checkboxes-container" }, this.templateOptions.options.map(item => {
      return (index.h("div", { class: "df-checkbox-container" }, index.h("input", { class: "df-checkbox-input", type: "checkbox", checked: this.value && this.value.indexOf(item.value) >= 0 ? true : false, onInput: (ev) => {
          if (this.templateOptions.multiple == true) {
            let value = this.value ? Array.from(this.value) : [];
            let index = value ? value.indexOf(item.value) : -1;
            if (ev.target.checked == true) {
              if (index < 0) {
                value.push(item.value);
              }
            }
            else {
              if (value) {
                if ((value === null || value === void 0 ? void 0 : value.length) == 1) {
                  value = null;
                }
                else {
                  value.splice(index, 1);
                }
              }
            }
            this.value = value ? Array.from(value) : null;
          }
          else {
            if (ev.target.checked == true) {
              this.value = [item.value];
            }
            else {
              this.value = null;
            }
          }
          this.customChange.emit({ value: this.value });
        } }), index.h("div", null, item.label)));
    })));
  }
  async componentWillRender() {
    var _a;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  render() {
    return (index.h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
};
FieldCheckbox.style = fieldCheckboxCss;

exports.field_checkbox = FieldCheckbox;
