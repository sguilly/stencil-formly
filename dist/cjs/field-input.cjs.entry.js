'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1fad7235.js');

const FieldInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.customChange = index.createEvent(this, "customChange", 7);
    this.disabled = false;
    this.templateOptions = {};
  }
  renderInput() {
    var _a;
    return (index.h("input", { disabled: this.disabled, class: 'input form-control' + (this.displayRequired == true ? ' df-is-required' : ''), placeholder: "Text input", type: ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.type) || 'text', value: this.value, onInput: (ev) => {
        console.log(ev.target.value);
        this.customChange.emit({ value: ev.target.value });
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

exports.field_input = FieldInput;
