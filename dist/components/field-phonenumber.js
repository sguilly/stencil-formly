import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as loadCss, a as loadScript } from './loadScript.js';
import { d as defineCustomElement$2 } from './field-container2.js';

const FieldInput = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.customChange = createEvent(this, "customChange", 7);
    this.disabled = false;
    this.templateOptions = {};
  }
  async componentWillLoad() {
    let promises = [];
    promises.push(loadCss('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css'));
    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/intlTelInput.min.js'));
    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/utils.min.js'));
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
      h("input", { ref: el => (this.refInput = el), disabled: this.disabled, class: 'input ' + (((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value ? ' df-is-required' : ''), value: this.value, onInput: (ev) => {
          console.log('valid ? ' + this.instance.isValidNumber());
          if (this.instance.isValidNumber()) {
            this.value = this.instance.getNumber();
            if (this.value.length > 0) {
              this.customChange.emit({ value: this.value });
            }
          }
        } }),
      h("button", { class: "button", onClick: () => {
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
    return (h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
}, [0, "field-phonenumber", {
    "value": [8],
    "disabled": [4],
    "templateOptions": [8, "template-options"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["field-phonenumber", "field-container"];
  components.forEach(tagName => { switch (tagName) {
    case "field-phonenumber":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldInput);
      }
      break;
    case "field-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const FieldPhonenumber = FieldInput;
const defineCustomElement = defineCustomElement$1;

export { FieldPhonenumber, defineCustomElement };
