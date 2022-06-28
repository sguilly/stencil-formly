import { r as registerInstance, h } from './index-3259bf0a.js';

const FieldHtml = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.templateOptions = {};
  }
  render() {
    return h("div", { innerHTML: this.templateOptions.html });
  }
};

export { FieldHtml as field_html };
