import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as loadCss, b as loadModule } from './loadScript.js';
import { d as defineCustomElement$2 } from './field-container2.js';

const fieldTimepickerCss = "custom-timepicker input{width:100px !important}";

const FieldTimepickerComponent = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.customChange = createEvent(this, "customChange", 7);
    this.disabled = false;
    this.templateOptions = {};
  }
  calendarHandler(newValue, _oldValue) {
    console.log('New value for value: ', newValue);
    this.calendar.setDate(newValue);
  }
  componentWillLoad() {
    let promises = [];
    promises.push(loadCss('https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css'));
    promises.push(loadModule('https://cdn.jsdelivr.net/npm/flatpickr'));
    promises.push(loadModule('https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/fr.js'));
    return Promise.all(promises);
  }
  componentDidLoad() {
    let that = this;
    this.calendar = flatpickr(this.datePickerElement, {
      locale: 'fr',
      allowInput: true,
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
      defaultDate: '12:00',
      onChange: function (selectedDates, dateStr, _instance) {
        that.dateStr = dateStr;
        console.log(selectedDates, dateStr);
        that.customChange.emit({ value: new Date(selectedDates) });
      },
    });
    if (this.value) {
      console.log('set value', this.value);
      this.calendar.setDate(this.value);
    }
  }
  renderInput() {
    return [h("input", { class: "input", type: "text", placeholder: "Select Time..", ref: el => (this.datePickerElement = el) })];
  }
  async componentWillRender() {
    var _a;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  render() {
    return (h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["calendarHandler"]
  }; }
  static get style() { return fieldTimepickerCss; }
}, [0, "field-timepicker", {
    "value": [8],
    "disabled": [4],
    "templateOptions": [8, "template-options"],
    "dateStr": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["field-timepicker", "field-container"];
  components.forEach(tagName => { switch (tagName) {
    case "field-timepicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FieldTimepickerComponent);
      }
      break;
    case "field-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const FieldTimepicker = FieldTimepickerComponent;
const defineCustomElement = defineCustomElement$1;

export { FieldTimepicker, defineCustomElement };
