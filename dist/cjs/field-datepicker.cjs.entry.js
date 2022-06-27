'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1fad7235.js');
const loadScript = require('./loadScript-e4923893.js');

const fieldDatepickerCss = "input[type=\"checkbox\"]{transform:scale(1)}custom-datepicker input{width:100px !important}";

const FieldDatepickerComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.customChange = index.createEvent(this, "customChange", 7);
    this.disabled = false;
    this.templateOptions = {};
  }
  calendarHandler(newValue, _oldValue) {
    console.log('New value for value: ', newValue);
    this.calendar.setDate(newValue);
  }
  componentWillLoad() {
    let promises = [];
    promises.push(loadScript.loadCss('https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css'));
    promises.push(loadScript.loadModule('https://cdn.jsdelivr.net/npm/flatpickr'));
    promises.push(loadScript.loadModule('https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/fr.js'));
    return Promise.all(promises);
  }
  componentDidLoad() {
    let that = this;
    this.calendar = flatpickr(this.datePickerElement, {
      locale: 'fr',
      allowInput: true,
      defaultDate: 'today',
      dateFormat: 'd-m-Y',
      onChange: function (selectedDates, dateStr, _instance) {
        that.dateStr = dateStr;
        that.customChange.emit({ value: new Date(selectedDates) });
      },
    });
    if (this.value) {
      console.log('set value', this.value);
      this.calendar.setDate(this.value);
    }
  }
  renderInput() {
    return [index.h("input", { class: "input", type: "text", placeholder: "Select Date..", ref: el => (this.datePickerElement = el) })];
  }
  async componentWillRender() {
    var _a;
    this.displayRequired = ((_a = this.templateOptions) === null || _a === void 0 ? void 0 : _a.required) == true && !this.value;
  }
  render() {
    return (index.h("field-container", { templateOptions: this.templateOptions, displayRequired: this.displayRequired }, this.renderInput()));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["calendarHandler"]
  }; }
};
FieldDatepickerComponent.style = fieldDatepickerCss;

exports.field_datepicker = FieldDatepickerComponent;
