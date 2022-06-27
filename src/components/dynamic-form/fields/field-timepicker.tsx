import { Component, Event, EventEmitter, Element, State, h, Prop, Watch } from '@stencil/core';

import { loadScript, loadCss, loadModule, loadNoModule } from '../../../utils/loadScript';

declare var flatpickr: any;
declare var French: any;

@Component({
  tag: 'field-timepicker',
  styleUrl: 'field-timepicker.css',
  shadow: false,
})
export class FieldTimepickerComponent {
  @Prop() value: any;
  @Prop() disabled = false;
  @Prop() templateOptions: any = {};

  @Event() customChange: EventEmitter<any>;

  @Element() el: HTMLElement;

  datePickerElement;

  calendar;
  displayRequired;

  @State() dateStr;

  @Watch('value')
  calendarHandler(newValue: boolean, _oldValue: boolean) {
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
    return [<input class="input" type="text" placeholder="Select Time.." ref={el => (this.datePickerElement = el as HTMLElement)}></input>];
  }

  async componentWillRender() {
    this.displayRequired = this.templateOptions?.required == true && !this.value;
  }

  render() {
    return (
      <field-container templateOptions={this.templateOptions} displayRequired={this.displayRequired}>
        {this.renderInput()}
      </field-container>
    );
  }
}
