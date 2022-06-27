import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as loadCss } from './loadScript.js';

const dynamicFormCss = ".df-fields-container{display:flex !important;flex-direction:row !important;flex-wrap:wrap !important;align-content:stretch !important}.df-is-required{border-color:#f14668 !important;color:#f14668 !important}.is-flex-grow-0{flex-grow:0 !important}.is-flex-grow-1{flex-grow:1 !important}.is-flex-grow-2{flex-grow:2 !important}.is-flex-grow-3{flex-grow:3 !important}.is-flex-grow-4{flex-grow:4 !important}.is-flex-grow-5{flex-grow:5 !important}";

const DynamicForm = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.event = createEvent(this, "event", 7);
    this.model = {};
  }
  async componentWillLoad() {
    await loadCss('https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css');
    //await loadCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
  }
  renderField(element) {
    var _a;
    if (element.disable) {
      element.disable(this.model);
    }
    element.templateOptions.requiredText = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.requiredText) || 'This field is required';
    const Tag = 'field-' + element.type;
    return (h(Tag, { value: this.model[element.key], templateOptions: element.templateOptions, onCustomChange: ev => {
        var _a, _b;
        if ((_a = ev.detail) === null || _a === void 0 ? void 0 : _a.value) {
          this.model[element.key] = (_b = ev.detail) === null || _b === void 0 ? void 0 : _b.value;
        }
        else {
          delete this.model[element.key];
        }
        this.model = Object.assign({}, this.model);
        this.event.emit({ type: 'change', model: this.model });
      } }));
  }
  renderFields(elements) {
    return elements.map(element => {
      var _a, _b;
      let isHide = false;
      if (element.hide) {
        isHide = element.hide(this.model);
      }
      if (isHide == false) {
        if (element.type == 'line') {
          return [
            h("div", { class: "df-fields-container" }, element.fields.map(element => {
              var _a;
              return (h("div", { class: (element.type != 'html' ? (_a = this.options) === null || _a === void 0 ? void 0 : _a.fieldClass : '') + ' is-flex-grow-' + (element.size || 1) + ' ' + (element.className || '') }, this.renderField(element)));
            })),
            h("hr", { style: { 'text-align': 'left' } }),
          ];
        }
        else {
          return [
            h("div", { class: element.type != 'html' ? (_a = this.options) === null || _a === void 0 ? void 0 : _a.fieldClass : '' }, this.renderField(element)),
            ((_b = this.options) === null || _b === void 0 ? void 0 : _b.separator) == true && element.type != 'html' ? h("hr", { style: { 'text-align': 'left' } }) : null,
          ];
        }
      }
    });
  }
  render() {
    var _a;
    console.log('render form', this.model, this.fields);
    return h("div", null, ((_a = this.fields) === null || _a === void 0 ? void 0 : _a.length) ? this.renderFields(this.fields) : null);
  }
  static get style() { return dynamicFormCss; }
}, [0, "dynamic-form", {
    "model": [16],
    "fields": [8],
    "options": [8]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["dynamic-form"];
  components.forEach(tagName => { switch (tagName) {
    case "dynamic-form":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DynamicForm);
      }
      break;
  } });
}

export { DynamicForm as D, defineCustomElement as d };
