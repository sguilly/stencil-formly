import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './choices-js2.js';
import { d as defineCustomElement$2 } from './field-container2.js';

const FieldSelect$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.customChange = createEvent(this, "customChange", 7);
    this.value = undefined;
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
}, [0, "field-select", {
    "value": [8],
    "disabled": [4],
    "templateOptions": [8, "template-options"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["field-select", "choices-js", "field-container"];
  components.forEach(tagName => { switch (tagName) {
    case "field-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldSelect$1);
      }
      break;
    case "choices-js":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "field-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const FieldSelect = FieldSelect$1;
const defineCustomElement = defineCustomElement$1;

export { FieldSelect, defineCustomElement };

//# sourceMappingURL=field-select.js.map