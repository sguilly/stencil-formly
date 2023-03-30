import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as loadCss, a as loadScript } from './loadScript.js';
import { d as defineCustomElement$2 } from './field-container2.js';

const FieldSlider$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.customChange = createEvent(this, "customChange", 7);
    this.value = undefined;
    this.disabled = false;
    this.templateOptions = {};
  }
  async componentWillLoad() {
    let promises = [];
    promises.push(loadCss('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.css'));
    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.1/nouislider.min.js'));
    promises.push(loadScript('https://cdnjs.cloudflare.com/ajax/libs/wnumb/1.2.0/wNumb.min.js'));
    return Promise.all(promises);
  }
  async componentWillRender() {
    var _a;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  componentDidRender() {
    console.log('ref', this.refInput);
    if (!this.instance) {
      this.instance = noUiSlider.create(this.refInput, {
        start: this.value ? this.value : 50,
        step: 10,
        tooltips: [wNumb({ decimals: 0 })],
        connect: 'lower',
        range: {
          min: 0,
          max: 100,
        },
      });
      this.instance.on('end', () => {
        this.value = Number(this.instance.get());
        this.customChange.emit({ value: this.value });
      });
    }
    if (this.value) {
      this.instance.set(this.value);
    }
  }
  renderInput() {
    return h("div", { ref: el => (this.refInput = el) });
  }
  render() {
    return (h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
}, [0, "field-slider", {
    "value": [8],
    "disabled": [4],
    "templateOptions": [8, "template-options"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["field-slider", "field-container"];
  components.forEach(tagName => { switch (tagName) {
    case "field-slider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldSlider$1);
      }
      break;
    case "field-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const FieldSlider = FieldSlider$1;
const defineCustomElement = defineCustomElement$1;

export { FieldSlider, defineCustomElement };

//# sourceMappingURL=field-slider.js.map