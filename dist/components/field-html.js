import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const FieldHtml$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.templateOptions = {};
  }
  render() {
    return h("div", { innerHTML: this.templateOptions.html });
  }
}, [0, "field-html", {
    "templateOptions": [8, "template-options"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["field-html"];
  components.forEach(tagName => { switch (tagName) {
    case "field-html":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldHtml$1);
      }
      break;
  } });
}

const FieldHtml = FieldHtml$1;
const defineCustomElement = defineCustomElement$1;

export { FieldHtml, defineCustomElement };

//# sourceMappingURL=field-html.js.map