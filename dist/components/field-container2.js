import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { s as state } from './styleStore.js';

function getBulmaClass() {
  return {
    group: {
      className: 'field p-4',
      label: {
        className: 'label'
      },
      control: {
        className: 'input'
      },
      helper: {
        className: 'help is-danger'
      }
    }
  };
}

function getBootstrapClass() {
  return {
    group: {
      className: 'form-group m-2',
      label: {
        className: 'label'
      },
      control: {
        className: 'form-control'
      },
      helper: {
        className: 'form-text text-danger'
      }
    }
  };
}

function getClassNames() {
  if (state.style == 'bulma') {
    return getBulmaClass();
  }
  else if (state.style == 'bootstrap') {
    return getBootstrapClass();
  }
}

const FieldContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.templateOptions = undefined;
    this.displayRequired = false;
  }
  componentWillRender() {
    this.classNames = getClassNames();
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return (h("div", { class: ((_a = this.classNames) === null || _a === void 0 ? void 0 : _a.group.className) || '' }, h("div", { class: ((_b = this.classNames.group.label) === null || _b === void 0 ? void 0 : _b.className) || '' }, (_c = this.templateOptions) === null || _c === void 0 ? void 0 :
      _c.label, " ", ((_d = this.templateOptions) === null || _d === void 0 ? void 0 : _d.required) == true ? '(*)' : ''), h("slot", null), this.displayRequired ? h("p", { class: ((_f = (_e = this.classNames.group) === null || _e === void 0 ? void 0 : _e.helper) === null || _f === void 0 ? void 0 : _f.className) || '' }, this.templateOptions.requiredText) : ''));
  }
}, [4, "field-container", {
    "templateOptions": [8, "template-options"],
    "displayRequired": [4, "display-required"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["field-container"];
  components.forEach(tagName => { switch (tagName) {
    case "field-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldContainer);
      }
      break;
  } });
}

export { FieldContainer as F, defineCustomElement as d, getClassNames as g };

//# sourceMappingURL=field-container2.js.map