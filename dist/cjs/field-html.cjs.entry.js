'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d1b80a98.js');

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
