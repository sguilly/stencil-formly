import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { g as getClassNames, d as defineCustomElement$2 } from './field-container2.js';

const FieldInput$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.customChange = createEvent(this, "customChange", 7);
    this.value = undefined;
    this.disabled = false;
    this.templateOptions = {};
  }
  renderInput() {
    var _a, _b, _c, _d;
    return (h("input", { disabled: this.disabled, class: (((_c = (_b = (_a = this.classNames) === null || _a === void 0 ? void 0 : _a.group) === null || _b === void 0 ? void 0 : _b.control) === null || _c === void 0 ? void 0 : _c.className) || '') + (this.displayRequired == true ? ' df-is-required' : ''), placeholder: "Text input", type: ((_d = this.templateOptions) === null || _d === void 0 ? void 0 : _d.type) || 'text', value: this.value, onInput: (ev) => {
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
}, [0, "field-input", {
    "value": [8],
    "disabled": [4],
    "templateOptions": [8, "template-options"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["field-input", "field-container"];
  components.forEach(tagName => { switch (tagName) {
    case "field-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldInput$1);
      }
      break;
    case "field-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const FieldInput = FieldInput$1;
const defineCustomElement = defineCustomElement$1;

export { FieldInput, defineCustomElement };

//# sourceMappingURL=field-input.js.map