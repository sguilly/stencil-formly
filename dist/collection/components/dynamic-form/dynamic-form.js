import { Component, h, Prop, Event } from '@stencil/core';
import { loadCss } from '../../utils/loadScript';
export class DynamicForm {
  constructor() {
    this.model = {};
  }
  async componentWillLoad() {
    await loadCss('https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css');
    //await loadCss('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
  }
  renderField(element) {
    var _a;
    let isDisabled = false;
    if (element.disable) {
      isDisabled = element.disable(this.model);
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
  static get is() { return "dynamic-form"; }
  static get originalStyleUrls() { return {
    "$": ["dynamic-form.css"]
  }; }
  static get styleUrls() { return {
    "$": ["dynamic-form.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{}",
        "resolved": "{}",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{}"
    },
    "fields": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "fields",
      "reflect": false
    },
    "options": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "options",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "event",
      "name": "event",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
