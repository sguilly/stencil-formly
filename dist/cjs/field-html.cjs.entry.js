'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e4330bec.js');

const FieldHtml = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.templateOptions = {};
  }
  render() {
    return index.h("div", { innerHTML: this.templateOptions.html });
  }
};

exports.field_html = FieldHtml;

//# sourceMappingURL=field-html.cjs.entry.js.map