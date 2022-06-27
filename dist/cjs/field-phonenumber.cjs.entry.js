'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1fad7235.js');
const loadScript = require('./loadScript-e4923893.js');

const FieldInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.customChange = index.createEvent(this, "customChange", 7);
    this.disabled = false;
    this.templateOptions = {};
  }
  async componentWillLoad() {
    let promises = [];
    promises.push(loadScript.loadCss('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css'));
    promises.push(loadScript.loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/intlTelInput.min.js'));
    promises.push(loadScript.loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/utils.min.js'));
    return Promise.all(promises);
  }
  componentDidRender() {
    console.log('ref', this.refInput);
    this.instance = intlTelInput(this.refInput, {
      initialCountry: 'fr',
    });
    this.refInput.addEventListener('countrychange', function () {
      console.log('countrychange');
    });
  }
  renderInput() {
    var _a;
    return [
      index.h("input", { ref: el => (this.refInput = el), disabled: this.disabled, class: 'input ' + (((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value ? ' df-is-required' : ''), value: this.value, onInput: (ev) => {
          console.log('valid ? ' + this.instance.isValidNumber());
          if (this.instance.isValidNumber()) {
            this.value = this.instance.getNumber();
            if (this.value.length > 0) {
              this.customChange.emit({ value: this.value });
            }
          }
        } }),
      index.h("button", { class: "button", onClick: () => {
          this.value = null;
          this.customChange.emit({ value: this.value });
        } }, "X"),
    ];
  }
  async componentWillRender() {
    var _a;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  render() {
    return (index.h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
};

exports.field_phonenumber = FieldInput;
